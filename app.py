from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import sqlite3
import os
import json
import urllib.request
import urllib.parse

# 基于脚本所在目录的绝对路径，确保无论从哪个目录启动都能找到文件
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

try:
    from sparkai.llm.llm import ChatSparkLLM
    from sparkai.core.messages import ChatMessage
    SPARKAI_AVAILABLE = True
except ImportError:
    print("警告: sparkai 未安装，AI对话功能不可用。可运行 pip install spark-ai-python 安装。")
    SPARKAI_AVAILABLE = False

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

DB_PATH = os.path.join(BASE_DIR, 'lingxi.db')


# ============================
# 3. 科大讯飞大模型调用函数
# ============================
def call_xunfei(prompt: str) -> str:
    """调用讯飞星火大模型，返回回复内容"""
    if not SPARKAI_AVAILABLE:
        return generate_fallback_response(prompt)
    try:
        import threading

        result_container = {"response": ""}
        error_container = {"error": None}

        def _call():
            try:
                spark = ChatSparkLLM(
                    spark_api_url="wss://spark-api.xf-yun.com/v3.5/chat",
                    spark_app_id=SPARK_APP_ID,
                    spark_api_key=SPARK_API_KEY,
                    spark_api_secret=SPARK_API_SECRET,
                    spark_llm_domain="generalv3.5",
                )
                messages = [ChatMessage(role="user", content=prompt)]
                response = spark.generate([messages])
                result_container["response"] = response.generations[0][0].text.strip()
            except Exception as e:
                error_container["error"] = e

        thread = threading.Thread(target=_call)
        thread.start()
        thread.join(timeout=15)  # 最多等15秒

        if thread.is_alive():
            print("讯飞调用超时（15秒），使用回退响应")
            return generate_fallback_response(prompt)

        if error_container["error"]:
            raise error_container["error"]

        return result_container["response"]
    except Exception as e:
        print(f"讯飞调用失败: {e}")
        return generate_fallback_response(prompt)


def generate_fallback_response(prompt: str) -> str:
    """当讯飞API不可用时，根据提示词内容生成有意义的回退响应"""
    prompt_lower = prompt.lower()

    # 社交意图回退
    if any(w in prompt_lower for w in ["问候", "感谢", "喜爱", "闲聊", "打招呼"]):
        return "你好呀！(๑•ㅂ•)9✧ 我是灵析学习助手，很高兴见到你！虽然AI大脑暂时在维护中，但我依然可以帮你搜索B站学习视频、浏览课程资源哦～有什么想学的尽管告诉我吧！( ^▽^ )"

    # 题目解答意图回退
    if any(w in prompt_lower for w in ["题目", "解答", "计算", "问题", "步骤"]):
        # 从prompt中提取用户原始输入
        user_q = prompt.split("用户输入：")[-1].strip() if "用户输入：" in prompt else ""
        return (
            f"关于你的问题「{user_q}」，AI导师正在升级中，暂时无法给出详细解答。"
            f"不过你可以：\n"
            f"1. 在左侧课程面板中查找相关课程和章节，里面有详细的知识点讲解\n"
            f"2. 我可以帮你搜索B站上的相关教学视频\n"
            f"3. 尝试在搜索框中搜索关键词，找到更多学习资源\n\n"
            f"等AI功能恢复后，我会为你提供更详细的解答！"
        )

    # 学习建议意图回退
    user_q = prompt.split("用户输入：")[-1].strip() if "用户输入：" in prompt else ""
    topic = user_q if user_q else "你感兴趣的主题"
    return (
        f"关于学习「{topic}」，AI学习规划师暂时在维护中。"
        f"不过我有几个建议：\n"
        f"1. 你可以在课程面板中浏览相关课程，我们有很多优质课程资源\n"
        f"2. 我可以帮你搜索B站上的教学视频，那里有很多优秀的UP主讲解\n"
        f"3. 建议从基础概念入手，循序渐进地学习\n\n"
        f"需要我帮你搜索相关视频资源吗？"
    )


# ============================
# 4. 意图解析函数（返回字典）
# ============================
def parse_learning_intent(user_input: str) -> dict:
    """
    提取用户输入中的意图，包括主题、难度、关键词以及意图类型
    返回字典: {"topic": str, "difficulty": str, "keywords": list, "intent_type": "social"|"problem"|"study"}
    """
    prompt = f"""
    你是一个意图解析助手。请根据用户的输入，判断并提取意图。
    请输出JSON格式：
    {{"topic": "提问主题或学习主题", "difficulty": "初级/中级/高级", "keywords": ["关键词1", "关键词2"], "intent_type": "social" / "problem" / "study"}}
    
    【分类规则】：
    - 如果用户是在表达感谢、喜欢、问候、打招呼、闲聊等（例如“谢谢你”、“喜欢你”、“你好呀”、“真棒”、“你好”），分类为 "social"。
    - 如果用户是在提问具体的题目、解答、计算、代码报错、代码编写、概念解释等（例如“求函数...”、“写一个递归”、“这段代码为什么报错”、“求极限”），分类为 "problem"。
    - 如果用户表达了想系统地学习某个学科、学科知识结构（例如“我想学Python”、“推荐一下算法的路线”），分类为 "study"。
    
    用户输入：{user_input}
    """
    result = call_xunfei(prompt)
    if not result:
        # 如果讯飞调用失败，使用默认值
        return {"topic": user_input, "difficulty": "初级", "keywords": [], "intent_type": "study"}

    # 尝试解析 JSON
    try:
        clean = result.strip('`').strip()
        if clean.startswith('json'):
            clean = clean[4:].strip()
        return json.loads(clean)
    except Exception:
        # 解析失败则返回简单结构
        # 简单做个规则兜底，防止调用失败导致判定不准
        intent_type = "study"
        lower_input = user_input.lower()
        if any(w in lower_input for w in ["谢谢", "感谢", "喜欢", "你好", "哈喽", "hello", "hi", "真棒", "厉害"]):
            intent_type = "social"
        elif any(w in lower_input for w in ["求函数", "极值", "单调", "解方程", "求导", "极限", "计算", "代码", "报错", "实现", "怎么做"]):
            intent_type = "problem"
        return {"topic": user_input, "difficulty": "初级", "keywords": [], "intent_type": intent_type}


# ============================
# 5. B站视频搜索函数
# ============================
def search_bilibili_videos(keyword: str, page_size: int = 6) -> list:
    """直接调用B站公开搜索API，不依赖 bilibili_api 库"""
    try:
        encoded_keyword = urllib.parse.quote(keyword)
        url = f"https://api.bilibili.com/x/web-interface/wbi/search/type?search_type=video&keyword={encoded_keyword}&page=1&page_size={page_size}"
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://www.bilibili.com'
        })
        with urllib.request.urlopen(req, timeout=8) as resp:
            data = json.loads(resp.read().decode('utf-8'))

        if data.get('code') != 0:
            print(f"B站API返回错误: code={data.get('code')}, message={data.get('message')}")
            return []

        videos = []
        for v in data.get('data', {}).get('result', []):
            # 清理标题中的高亮标签
            title = v.get('title', '').replace('<em class="keyword">', '').replace('</em>', '')
            # 封面图
            pic = v.get('pic', '')
            if pic and pic.startswith('//'):
                pic = 'https:' + pic
            # 播放量
            play = v.get('play', 0)
            # 作者
            author = v.get('author', 'UP主')
            # BV号
            bvid = v.get('bvid', '')

            videos.append({
                "title": title,
                "bvid": bvid,
                "play": int(play) if play else 0,
                "like": v.get('like', 0),
                "author": author,
                "url": f"https://www.bilibili.com/video/{bvid}" if bvid else '',
                "pic": pic
            })
        videos.sort(key=lambda x: x['play'], reverse=True)
        return videos[:page_size]
    except Exception as e:
        print(f"B站搜索出错: {e}")
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
        with open(os.path.join(BASE_DIR, 'Lingxi.html'), 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return "Lingxi.html 文件未找到，请确保它在同一目录下。", 404


@app.route('/<path:path>', methods=['GET'])
def serve_file(path):
    return send_from_directory(BASE_DIR, path)


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
    intent_type = intent.get('intent_type', 'study')
    
    # 检测用户是否有明确看视频、搜视频的需求
    has_video_request = any(w in user_input for w in ["视频", "看", "播放", "b站", "B站", "推荐一下视频", "看视频"])

    # 2. 根据主题搜索B站视频 (如果是社交意图且没有看视频需求，不搜索视频，不返回相关内容)
    videos = []
    if intent_type != 'social' or has_video_request:
        topic = intent.get('topic', user_input)
        videos = search_bilibili_videos(topic, page_size=6)

    # 3. 生成解答或学习建议
    if intent_type == 'problem':
        # 针对题目解答：专业、严谨、步骤清晰，绝对不要加可爱的颜文字和语气词
        recommend_prompt = f"""你是一个专业、严谨且耐心的计算机与数学学习导师。请针对用户提出的具体题目、计算或技术问题，给出非常详细、步骤清晰、逻辑严密的讲解与答复。
在回答时，请遵循以下规则：
1. 语气一定要专业、严谨、专注且清晰，拒绝任何随意的敷衍。
2. 绝对不能使用任何可爱的颜文字表情（例如：(๑•ㅂ•)9✧、^_^、(*^▽^*)）或可爱的表情符号，也不要使用口语化的语气词（如“呀”、“哒”、“呢”）。
3. 详细给出解题步骤、推导过程或代码说明，引导用户彻底理解。

用户输入：{user_input}"""
    elif intent_type == 'social':
        # 针对日常问候、表达喜爱和感谢：元气满满、极其可爱温和，用大量颜文字与可爱表情，不生成路径
        recommend_prompt = f"""你是一个非常活泼可爱、温暖贴心的智能学习助手“灵析”。用户正在向你表达问候、感谢、喜爱或进行日常轻松闲聊。请给予最热情、活泼可爱的回复。
在回答时，请遵循以下规则：
1. 语气一定要非常活泼可爱、温暖亲切，多使用语气词（如“呀”、“哒”、“呢”、“哟”）。
2. 在句中或句尾自然地加入一些活泼可爱的颜文字表情（例如：(๑•ㅂ•)9✧、( ^▽^ )、(*^▽^*)、(๑＞◡＜๑)）以及可爱的表情符号，活跃对话气氛！
3. 礼貌且元气满满地回应用户的喜爱或感谢，让他觉得你十分贴心。

用户输入：{user_input}"""
    else:
        # 针对学习建议：温和友好，适度活泼
        recommend_prompt = f"""你是一个温和友好、耐心且有温度的个性化学习助手“灵析”。用户表达了学习某些主题的意图或获取学习建议。请给出温和亲切的学习建议。
在回答时，请遵循以下规则：
1. 语气温和友好、耐心，像一位贴心且充满亲和力的学长或学姐。
2. 内容要简炼，重点突出，不要有太多无意义的啰嗦。
3. 可以在句中或句尾自然地加入一些颜文字表情（例如：(๑•ㅂ•)9✧、^_^）或表情符号来活跃气氛。

用户输入：{user_input}"""

    advice = call_xunfei(recommend_prompt)

    # 4. 返回结果
    return jsonify({
        "intent": intent,
        "videos": videos,
        "advice": advice,
        "hide_resources": (intent_type == 'social' and not has_video_request)
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
           WHERE question LIKE ? OR option_a LIKE ? OR option_b LIKE ? 
           OR option_c LIKE ? OR option_d LIKE ?""",
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
    bili_videos = search_bilibili_videos(keyword, page_size=6)
    for v in bili_videos:
        results.append({
            "type": "bilibili",
            "title": v['title'],
            "author": v['author'],
            "play": v['play'],
            "description": f"{v['author']} · 播放 {v['play']}",
            "url": v['url'],
            "extra": v['pic']
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

@app.route('/api/run_code', methods=['POST'])
def run_code():
    data = request.json or {}
    code = data.get('code', '')
    language = data.get('language', 'python').lower()
    
    import subprocess
    import tempfile
    import os
    import re
    
    if language in ['python', 'py']:
        import sys
        import io
        import traceback
        old_stdout = sys.stdout
        redirected_output = sys.stdout = io.StringIO()
        try:
            local_scope = {}
            exec(code, {}, local_scope)
            sys.stdout = old_stdout
            output = redirected_output.getvalue()
            return jsonify({"success": True, "output": output or "运行成功（无输出结果）。"})
        except Exception as e:
            sys.stdout = old_stdout
            error_output = traceback.format_exc()
            lines = error_output.split('\n')
            cleaned_lines = []
            for line in lines:
                if "File \"<string>\"" in line or line.startswith("Traceback") or "exec(code" in line:
                    continue
                cleaned_lines.append(line)
            output = "\n".join(cleaned_lines).strip()
            return jsonify({"success": False, "output": output})
            
    elif language in ['c', 'cpp']:
        temp_dir = tempfile.gettempdir()
        source_file = os.path.join(temp_dir, "temp_code.c" if language == 'c' else "temp_code.cpp")
        exe_file = os.path.join(temp_dir, "temp_code.exe")
        
        if os.path.exists(exe_file):
            try: os.remove(exe_file)
            except Exception: pass
            
        with open(source_file, "w", encoding="utf-8") as f:
            f.write(code)
            
        compiler = "gcc" if language == 'c' else "g++"
        try:
            compile_process = subprocess.run(
                [compiler, source_file, "-o", exe_file],
                capture_output=True,
                text=True
            )
            if compile_process.returncode != 0:
                return jsonify({"success": False, "output": f"编译错误：\n{compile_process.stderr or compile_process.stdout}"})
        except FileNotFoundError:
            return jsonify({"success": False, "output": f"未在服务器上找到 {compiler} 编译器。请先安装 GCC/G++。"})
            
        try:
            run_process = subprocess.run(
                [exe_file],
                capture_output=True,
                text=True,
                timeout=5
            )
            return jsonify({"success": run_process.returncode == 0, "output": run_process.stdout + run_process.stderr})
        except subprocess.TimeoutExpired:
            return jsonify({"success": False, "output": "执行超时（限时5秒）。"})
        except Exception as e:
            return jsonify({"success": False, "output": f"执行错误：\n{str(e)}"})
        
    elif language in ['java']:
        class_match = re.search(r'public\s+class\s+(\w+)', code)
        class_name = class_match.group(1) if class_match else "Main"
        
        temp_dir = tempfile.gettempdir()
        source_file = os.path.join(temp_dir, f"{class_name}.java")
        
        with open(source_file, "w", encoding="utf-8") as f:
            f.write(code)
            
        try:
            compile_process = subprocess.run(
                ["javac", source_file],
                capture_output=True,
                text=True
            )
            if compile_process.returncode != 0:
                return jsonify({"success": False, "output": f"编译错误：\n{compile_process.stderr or compile_process.stdout}"})
        except FileNotFoundError:
            return jsonify({"success": False, "output": "未在服务器上找到 javac 编译器。请先安装 JDK。"})
            
        try:
            run_process = subprocess.run(
                ["java", "-cp", temp_dir, class_name],
                capture_output=True,
                text=True,
                timeout=5
            )
            return jsonify({"success": run_process.returncode == 0, "output": run_process.stdout + run_process.stderr})
        except subprocess.TimeoutExpired:
            return jsonify({"success": False, "output": "执行超时（限时5秒）。"})
        except Exception as e:
            return jsonify({"success": False, "output": f"执行错误：\n{str(e)}"})
        
    else:
        return jsonify({"success": False, "output": f"暂不支持 {language} 代码的运行环境。"})

# ============================
# 8. 启动服务
# ============================
if __name__ == '__main__':
    print("正在启动灵析学习资料后端 API 服务...")
    app.run(host='0.0.0.0', port=5000, debug=True)