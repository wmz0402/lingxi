from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import sqlite3
import os
import json
from sparkai.llm.llm import ChatSparkLLM
from sparkai.core.messages import ChatMessage
from bilibili_api import search, sync

# ============================
# 1. 配置区（请替换为你的真实凭证）
# ============================
SPARK_APP_ID = os.getenv("SPARK_APP_ID", "fa9d787a")
SPARK_API_SECRET = os.getenv("SPARK_API_SECRET", "ODQ3NzAyOTA1ZWNlNDk3YmUwNTI3MzUx")
SPARK_API_KEY = os.getenv("SPARK_API_KEY", "f170f6f6fa1843d7a520bd4b5010674b")

# ============================
# 2. Flask 应用初始化
# ============================
app = Flask(__name__)
CORS(app)  # 允许跨域

DB_PATH = 'lingxi.db'


# ============================
# 3. 科大讯飞大模型调用函数
# ============================
def call_xunfei(prompt: str) -> str:
    """调用讯飞星火大模型，返回回复内容"""
    try:
        spark = ChatSparkLLM(
            spark_api_url="wss://spark-api.xf-yun.com/v3.5/chat",  # 可替换为 v4.0
            spark_app_id=SPARK_APP_ID,
            spark_api_key=SPARK_API_KEY,
            spark_api_secret=SPARK_API_SECRET,
            spark_llm_domain="generalv3.5",  # 或 "4.0Ultra"
        )
        messages = [ChatMessage(role="user", content=prompt)]
        response = spark.generate([messages])
        return response.generations[0][0].text.strip()
    except Exception as e:
        print(f"讯飞调用失败: {e}")
        return ""


# ============================
# 4. 意图解析函数（返回字典）
# ============================
def parse_learning_intent(user_input: str) -> dict:
    """
    提取用户输入中的学习主题、难度、偏好
    返回字典: {"topic": str, "difficulty": str, "keywords": list}
    """
    prompt = f"""
    你是一个学习助手，请分析以下用户输入，提取学习需求。
    输出格式为JSON：{{"topic": "主题", "difficulty": "初级/中级/高级", "keywords": ["关键词1","关键词2"]}}
    用户输入：{user_input}
    """
    result = call_xunfei(prompt)
    if not result:
        # 如果讯飞调用失败，使用默认值
        return {"topic": user_input, "difficulty": "初级", "keywords": []}

    # 尝试解析 JSON
    try:
        clean = result.strip('`').strip()
        if clean.startswith('json'):
            clean = clean[4:].strip()
        return json.loads(clean)
    except:
        # 解析失败则返回简单结构
        return {"topic": user_input, "difficulty": "初级", "keywords": []}


# ============================
# 5. B站视频搜索函数
# ============================
def search_bilibili_videos(keyword: str, page_size: int = 6) -> list:
    try:
        result = sync(search.search_by_type(
            keyword,
            search.SearchObjectType.VIDEO,
            page=1,
            page_size=page_size
        ))
        videos = []
        for v in result.get('result', []):
            # 兼容多种字段名
            title = v.get('title', '').replace('<em class="keyword">', '').replace('</em>', '')
            # 封面图：尝试 pic / cover / cover_url
            pic = v.get('pic') or v.get('cover') or v.get('cover_url') or ''
            # 播放量：尝试 play / view / click
            play = v.get('play') or v.get('view') or v.get('click') or 0
            # 作者
            author = v.get('author') or v.get('up_name') or 'UP主'
            # BV号
            bvid = v.get('bvid') or v.get('aid') or ''

            videos.append({
                "title": title,
                "bvid": bvid,
                "play": int(play),
                "like": v.get('like', 0),
                "author": author,
                "url": f"https://www.bilibili.com/video/{bvid}" if bvid else '',
                "pic": pic
            })
        videos.sort(key=lambda x: x['play'], reverse=True)
        return videos
    except Exception as e:
        print(f"B站搜索出错: {e}")
        # 打印详细错误，方便排查
        import traceback
        traceback.print_exc()
        return []


# ============================
# 6. 数据库连接辅助函数
# ============================
def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


# ============================
# 7. 路由定义
# ============================

# 7.0 首页（提供前端 HTML）
@app.route('/', methods=['GET'])
def index():
    try:
        with open('Lingxi.html', 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return "Lingxi.html 文件未找到，请确保它在同一目录下。", 404


@app.route('/<path:path>', methods=['GET'])
def serve_file(path):
    return send_from_directory('.', path)


# 7.1 获取所有课程
@app.route('/api/courses', methods=['GET'])
def get_courses():
    conn = get_db_connection()
    courses = conn.execute('SELECT * FROM course;').fetchall()
    conn.close()
    return jsonify([dict(row) for row in courses])


# 7.2 获取某门课程的所有章节
@app.route('/api/courses/<int:course_id>/chapters', methods=['GET'])
def get_chapters(course_id):
    conn = get_db_connection()
    chapters = conn.execute('SELECT * FROM chapter WHERE course_id = ?;', (course_id,)).fetchall()
    conn.close()
    return jsonify([dict(row) for row in chapters])


# 7.3 获取某一章节的习题
@app.route('/api/chapters/<int:chapter_id>/quiz', methods=['GET'])
def get_quiz(chapter_id):
    conn = get_db_connection()
    questions = conn.execute('SELECT * FROM question WHERE chapter_id = ?;', (chapter_id,)).fetchall()
    conn.close()
    return jsonify([dict(row) for row in questions])


# 7.4 获取某一章节的资源
@app.route('/api/chapters/<int:chapter_id>/resources', methods=['GET'])
def get_resources(chapter_id):
    conn = get_db_connection()
    resources = conn.execute('SELECT * FROM resource WHERE chapter_id = ?;', (chapter_id,)).fetchall()
    conn.close()
    return jsonify([dict(row) for row in resources])


# 7.5 对话接口（核心）
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    if not data:
        return jsonify({"error": "请求体必须为 JSON"}), 400

    user_id = data.get('user_id', 'default')
    user_input = data.get('message', '').strip()
    if not user_input:
        return jsonify({"error": "消息不能为空"}), 400

    # 1. 解析意图
    intent = parse_learning_intent(user_input)

    # 2. 根据主题搜索B站视频
    topic = intent.get('topic', user_input)
    videos = search_bilibili_videos(topic, page_size=6)

    # 3. 生成解答或学习建议
    recommend_prompt = f"""你是一个温柔、耐心的个性化学习助手“灵析”。请根据用户的输入进行回答。
在回答时，请遵循以下规则：
1. 语气一定要温和友好、耐心且有温度，像一位贴心且充满亲和力的学长或学姐，拒绝冷冰冰的机械化官方回复。
2. 内容要简炼，重点突出，不要有太多无意义的啰嗦和废话。
3. 在合适且轻松的对话语境中，可以在句中或句尾自然地加入一些可爱的颜文字表情（例如 ^_^、(๑•̀ㅂ•́)و✧、(*^▽^*)）或表情符号来活跃气氛；如果用户在进行严肃的报错咨询或代码纠错提问，则保持专注与专业，不要使用任何表情。
4. 如果用户是在提问具体的知识点、进行计算、请求代码编写/纠错，或者只是普通的交流闲聊，请直接、温和地解答。
5. 如果用户表达了明确的学习某个主题的意图，请提供针对该主题的学习建议、学习要点与策略。

用户输入：{user_input}"""
    advice = call_xunfei(recommend_prompt)

    # 4. 返回结果
    return jsonify({
        "intent": intent,
        "videos": videos,
        "advice": advice
    })


# 7.6 独立视频搜索接口（供前端搜索框使用）
@app.route('/api/search_videos', methods=['GET'])
def search_videos():
    keyword = request.args.get('keyword', '').strip()
    if not keyword:
        return jsonify({"videos": []})
    videos = search_bilibili_videos(keyword, page_size=8)
    return jsonify({"videos": videos})


@app.route('/api/search', methods=['GET'])
def unified_search():
    keyword = request.args.get('keyword', '').strip()
    if not keyword:
        return jsonify({"results": []})

    results = []
    conn = get_db_connection()

    # 1. 搜索课程
    courses = conn.execute(
        "SELECT id, name, description FROM course WHERE name LIKE ? OR description LIKE ?",
        (f'%{keyword}%', f'%{keyword}%')
    ).fetchall()
    for c in courses:
        results.append({
            "type": "course",
            "title": c['name'],
            "description": (c['description'] or "课程")[:100],
            "url": f"/api/courses/{c['id']}/chapters",
            "extra": f"课程ID: {c['id']}"
        })

    # 2. 搜索章节（包含课程名）
    chapters = conn.execute(
        """SELECT chapter.id, chapter.title, chapter.content, chapter.course_id, course.name as course_name 
           FROM chapter 
           JOIN course ON chapter.course_id = course.id 
           WHERE chapter.title LIKE ? OR chapter.content LIKE ?""",
        (f'%{keyword}%', f'%{keyword}%')
    ).fetchall()
    for ch in chapters:
        content_preview = ch['content'][:50] + "..." if ch['content'] and len(ch['content']) > 50 else (
                    ch['content'] or "")
        results.append({
            "type": "chapter",
            "title": f"{ch['course_name']} — {ch['title']}",  # 拼接课程名和章节名
            "description": content_preview,
            "url": f"/api/chapters/{ch['id']}/quiz",
            "extra": f"课程ID: {ch['course_id']}"
        })

    # 3. 搜索习题（题目或选项）
    questions = conn.execute(
        """SELECT id, question, answer, chapter_id FROM question 
           WHERE question LIKE ? OR optionA LIKE ? OR optionB LIKE ? 
           OR optionC LIKE ? OR optionD LIKE ?""",
        (f'%{keyword}%', f'%{keyword}%', f'%{keyword}%', f'%{keyword}%', f'%{keyword}%')
    ).fetchall()
    for q in questions:
        q_preview = q['question'][:30] + ("..." if len(q['question']) > 30 else "")
        results.append({
            "type": "question",
            "title": "习题: " + q_preview,
            "description": f"答案: {q['answer']}",
            "url": f"/api/chapters/{q['chapter_id']}/quiz",
            "extra": f"章节ID: {q['chapter_id']}"
        })
    conn.close()

    # 4. 搜索B站视频
    # 4. 搜索B站视频
    bili_videos = search_bilibili_videos(keyword, page_size=6)
    for v in bili_videos:
        print(f"DEBUG: {v['title']} -> pic: {v['pic']}, play: {v['play']}")
        results.append({
            "type": "bilibili",
            "title": v['title'],
            "author": v['author'],  # 新增：作者
            "play": v['play'],  # 新增：播放量
            "description": f"{v['author']} · 播放 {v['play']}",
            "url": v['url'],
            "extra": v['pic']  # 封面图
        })

    # 可按类型排序，将本地资源排在前面（可选）
    # results.sort(key=lambda x: 0 if x['type'] != 'bilibili' else 1)

    return jsonify({"results": results})


@app.route('/api/questions', methods=['GET'])
def search_questions():
    keyword = request.args.get('keyword', '').strip()
    conn = get_db_connection()

    if keyword:
        # 有关键词时搜索
        rows = conn.execute('''
            SELECT id, subject, chapter, question, option_a, option_b, option_c, option_d, answer, analysis
            FROM question_bank
            WHERE subject LIKE ? OR question LIKE ?
            ORDER BY subject, id
            LIMIT 50
        ''', (f'%{keyword}%', f'%{keyword}%')).fetchall()
    else:
        # 没有关键词时返回所有题目（按科目排序）
        rows = conn.execute('''
            SELECT id, subject, chapter, question, option_a, option_b, option_c, option_d, answer, analysis
            FROM question_bank
            ORDER BY subject, id
            LIMIT 200
        ''').fetchall()

    conn.close()
    return jsonify({"questions": [dict(row) for row in rows]})

# ============================
# 8. 启动服务
# ============================
if __name__ == '__main__':
    print("正在启动灵析学习资料后端 API 服务...")
    app.run(host='0.0.0.0', port=5000, debug=True)