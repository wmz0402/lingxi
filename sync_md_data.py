import os
import re
import json
import sqlite3

DB_PATH = 'lingxi.db'

# Define the exact files and the course headings patterns to split on
FILES_CONFIG = {
    "数学基础": {
        "file": "高等数学.md",
        "headings": {
            "微积分一": r'^#+\s*一\s*[、\s]\s*微积分一',
            "微积分二": r'^#+\s*二\s*[、\s]\s*微积分二',
            "线性代数": r'^#+\s*三\s*[、\s]\s*线性代数',
            "概率论与数理统计": r'^#+\s*四\s*[、\s]\s*概率论与数理统计',
            "离散数学": r'^#+\s*五\s*[、\s]\s*离散数学'
        }
    },
    "计算机基础": {
        "file": "计算机科学基础.md",
        "headings": {
            "计算机导论": r'^#+\s*一\s*[、\s]\s*计算机导论',
            "计算机组成与体系结构": r'^#+\s*二\s*[、\s]\s*计算机组成与体系结构',
            "操作系统": r'^#+\s*三\s*[、\s]\s*操作系统',
            "编程语言原理": r'^#+\s*四\s*[、\s]\s*编程语言'
        }
    },
    "编程语言": {
        "file": "编程语言.md",
        "headings": {
            "C 语言编程导论": r'^#+\s*一\s*[、\s]\s*C\s*语言编程导论',
            "Python 编程": r'^#+\s*二\s*[、\s]\s*Python\s*编程',
            "Java 面向对象编程": r'^#+\s*三\s*[、\s]\s*Java\s*面向对象编程'
        }
    },
    "数据结构与算法": {
        "file": "算法与数据结构.md",
        "headings": {
            "数据结构": r'^#+\s*一\s*[、\s]\s*数据结构',
            "算法设计与分析": r'^#+\s*二\s*[、\s]\s*算法设计与分析'
        }
    },
    "数据库与网络": {
        "file": "数据库与网络.md",
        "headings": {
            "数据库系统": r'^#+\s*一\s*[、\s]\s*数据库系统',
            "计算机网络": r'^#+\s*二\s*[、\s]\s*计算机网络',
            "全方位系统": r'^#+\s*三\s*[、\s]\s*全方位系统'
        }
    },
    "人工智能": {
        "file": "人工智能相关.md",
        "headings": {
            "人工智能导论": r'^#+\s*一\s*[、\s]\s*人工智能导论',
            "深度学习": r'^#+\s*二\s*[、\s]\s*深度学习'
        }
    },
    "综合学科": {
        "file": "其他资料.md",
        "headings": {
            "软件工程基础": r'^#+\s*一\s*[、\s]\s*软件工程基础',
            "网络安全导论": r'^#+\s*二\s*[、\s]\s*网络安全导论',
            "大学英语": r'^#+\s*三\s*[、\s]\s*大学英语',
            "大学物理": r'^#+\s*四\s*[、\s]\s*大学物理'
        }
    }
}

def clean_title(title):
    title = re.sub(r'^#+\s*', '', title)
    title = re.sub(r'^[一二三四五六七八九十百]+[、\s\.]+', '', title)
    title = re.sub(r'^[0-9]+[\.\s、]+', '', title)
    title = re.sub(r'^第?\d+章\s*[:：\s]*', '', title)
    title = title.strip()
    return title

def md_to_html(text):
    text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'`(.*?)`', r'<code>\1</code>', text)
    
    lines = text.split('\n')
    html_lines = []
    in_list = False
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('- ') or stripped.startswith('* '):
            if not in_list:
                html_lines.append('<ul>')
                in_list = True
            content = stripped[2:]
            html_lines.append(f'<li>{content}</li>')
        else:
            if in_list:
                html_lines.append('</ul>')
                in_list = False
            if stripped:
                if stripped.startswith('#'):
                    level = len(re.match(r'^#+', stripped).group(0))
                    cleaned = stripped.lstrip('#').strip()
                    html_lines.append(f'<h{level+2}>{cleaned}</h{level+2}>')
                else:
                    html_lines.append(f'<p>{stripped}</p>')
    if in_list:
        html_lines.append('</ul>')
    return '\n'.join(html_lines)

def parse_quizzes(text):
    # Split by:
    # 1. Normal digit at start: \n\d+[\.\s、]
    # 2. Bold digit at start: \n**\d+[\.\s、*]+
    # 3. Q1 format: \n####\s*Q\d+[\.\s、]
    # 4. Chinese number format: \n###\s+第?\s*\d+\s*题
    # 5. Chinese title format: \n###\s+题目\s*\d+
    pattern = r'\n(?=\d+[\.\s、])|\n(?=\*\*\d+[\.\s、\*]+)|\n(?=####\s*Q\d+[\.\s、])|\n(?=###\s+第?\s*\d+\s*题)|\n(?=###\s+题目\s*\d+)'
    q_blocks = re.split(pattern, '\n' + text)
    quizzes = []
    
    for block in q_blocks:
        block = block.strip()
        if not block:
            continue
        lines = block.split('\n')
        question_text = ""
        options = []
        answer = ""
        analysis = ""
        
        in_options = False
        in_analysis = False
        q_text_lines = []
        
        in_code_block = False
        for line in lines:
            line_str = line.strip()
            if not line_str:
                continue
            
            if line_str.startswith('```'):
                in_code_block = not in_code_block
                
            # If we hit a markdown heading or divider outside code block during analysis parsing, stop parsing
            if in_analysis and not in_code_block and (line_str.startswith('#') or line_str.startswith('---') or line_str.startswith('***')):
                break
                
            # Match options (can be multiple on one line, e.g. A. xxx  B. yyy)
            # Find all options matching A/B/C/D on the line, ensuring it's an option letter prefix
            # Skip matching if the line is an answer, explanation, or header line to avoid misidentifying details
            opt_line_matches = []
            if not any(keyword in line_str for keyword in ["正确答案", "答案", "解析", "详解", "解："]):
                opt_line_matches = list(re.finditer(r'(?:^|[\s　]+)([A-D])[\.\s、:]+\s*(.*?)(?=(?:[\s　]+[A-D][\.\s、:])|$)', line_str))
            if opt_line_matches:
                for m in opt_line_matches:
                    options.append({"key": m.group(1), "text": m.group(2).strip()})
                in_options = True
                continue
                
            # Match answer
            ans_match = re.search(r'(?:正确答案|答案)[：:\s]*\**([A-D]+)', line_str)
            if ans_match:
                answer = ans_match.group(1)
                continue
                
            if "解析" in line_str or "解：" in line_str:
                analysis = re.sub(r'^(?:>\s*)?\**解析\**\s*[:：]\s*\**|^(?:>\s*)?解\s*[:：]\s*', '', line_str).strip()
                in_analysis = True
                continue
                
            if in_analysis:
                analysis += "\n" + line_str
            elif not in_options:
                q_text_lines.append(line_str)
                
        question_text = "\n".join(q_text_lines)
        # Clean question headers
        question_text = re.sub(r'^\d+[\.\s、]*', '', question_text).strip()
        question_text = re.sub(r'^\*\*\d+[\.\s、\*]*\s*', '', question_text).strip()
        question_text = re.sub(r'^####\s*Q\d+[\.\s、]*', '', question_text).strip()
        question_text = re.sub(r'^###\s+第?\s*\d+\s*题[\s：:]*', '', question_text).strip()
        question_text = re.sub(r'^###\s+题目\s*\d+[\s\(\（]*[^)\）\n]*[)\）]*', '', question_text).strip()
        
        # Filter out introduction headers
        if any(h in question_text for h in ['## 一、', '## 二、', '## 三、', '## 四、', '## 五、', '单选题', '单项选择题', '多选题', '多项选择题', '填空题', '计算题', '习题集']):
            continue
            
        if question_text and len(options) >= 2:
            while len(options) < 4:
                keys = ['A', 'B', 'C', 'D']
                next_key = keys[len(options)]
                options.append({"key": next_key, "text": f"选项{next_key}"})
            
            quizzes.append({
                "question": question_text,
                "options": options,
                "answer": answer or "A",
                "analysis": analysis or "暂无详细解析"
            })
    return quizzes

def parse_course_section(course_title, text, is_other_file=False):
    if is_other_file:
        # Custom parsing for 其他资料.md
        theory_part = ""
        quiz_part = ""
        
        parts = re.split(r'###\s+\d+[\.\s]+课后习题', text)
        if len(parts) >= 2:
            theory_part = parts[0]
            quiz_part = parts[1]
        else:
            theory_part = text
            
        chap_blocks = re.split(r'\n(?=####\s+\d+[\.\s]+)', theory_part)
        chapters = []
        for block in chap_blocks:
            block = block.strip()
            if not block:
                continue
            lines = block.split('\n')
            title_line = lines[0]
            m = re.match(r'^####\s+\d+[\.\s]+(.*)', title_line)
            if m:
                chap_title = m.group(1).strip()
                chap_content = "\n".join(lines[1:])
                chapters.append({
                    "title": clean_title(chap_title),
                    "theory_raw": chap_content,
                    "quizzes": []
                })
                
        quizzes = parse_quizzes(quiz_part)
        
        if chapters and quizzes:
            for idx, q in enumerate(quizzes):
                ch_idx = idx % len(chapters)
                chapters[ch_idx]["quizzes"].append(q)
                
        processed_chapters = []
        for idx, chap in enumerate(chapters):
            processed_chapters.append({
                "id": idx + 1,
                "title": f"第{idx + 1}章：{chap['title']}",
                "intro": f"学习关于 {chap['title']} 的核心专业理论与应用。",
                "content": chap["theory_raw"],
                "quizzes": chap["quizzes"],
                "mindmapHtml": ""  # 思维导图由 courses_data.js 中的预构建数据提供，不要在此生成通用模板
            })
        return processed_chapters

    # Default chapter-specific parser
    lines = text.split('\n')
    chapters = []
    current_chapter = None
    theory_mode = True
    
    # Match H1/H2 starting with or containing "第\d+章"
    chapter_pattern = re.compile(r'^#+\s+(?:.*?\s+)?(第\d+章[\s：:].*)$')
    
    chapter_lines = []
    quiz_lines = []
    
    for i, line in enumerate(lines):
        line_str = line.strip()
        
        is_new_chap = False
        is_quiz_section = False
        chap_title = ""
        
        if line.startswith('#'):
            m = chapter_pattern.match(line)
            if m:
                matched_title = m.group(1).strip()
                if any(k in matched_title for k in ['习题', '题库', '测试', '练习', 'ϰ']):
                    is_quiz_section = True
                else:
                    is_new_chap = True
                    chap_title = matched_title
                    
        if is_new_chap:
            if current_chapter:
                current_chapter["theory_raw"] = "\n".join(chapter_lines)
                current_chapter["quiz_raw"] = "\n".join(quiz_lines)
                chapters.append(current_chapter)
                
            current_chapter = {
                "title": clean_title(chap_title),
                "theory_raw": "",
                "quiz_raw": "",
                "quizzes": []
            }
            chapter_lines = []
            quiz_lines = []
            theory_mode = True
            continue
            
        if is_quiz_section:
            theory_mode = False
            continue
            
        if current_chapter:
            if theory_mode:
                chapter_lines.append(line)
            else:
                quiz_lines.append(line)
                
    if current_chapter:
        current_chapter["theory_raw"] = "\n".join(chapter_lines)
        current_chapter["quiz_raw"] = "\n".join(quiz_lines)
        chapters.append(current_chapter)
        
    processed_chapters = []
    for idx, chap in enumerate(chapters):
        cleaned_title = chap["title"]
        if '课后习题' in cleaned_title or '题库' in cleaned_title or '习题' in cleaned_title:
            continue
            
        quizzes = parse_quizzes(chap["quiz_raw"])
        
        processed_chapters.append({
            "id": idx + 1,
            "title": f"第{idx + 1}章：{cleaned_title}",
            "intro": f"学习关于 {cleaned_title} 的核心专业理论与应用。",
            "content": chap["theory_raw"],
            "quizzes": quizzes,
            "mindmapHtml": ""  # 思维导图由 courses_data.js 中的预构建数据提供，不要在此生成通用模板
        })
        
    return processed_chapters

def parse_all_files():
    all_data = []
    
    for cat_name, config in FILES_CONFIG.items():
        file_name = config["file"]
        headings = config["headings"]
        
        if not os.path.exists(file_name):
            print(f"File {file_name} not found!")
            continue
            
        print(f"Parsing file: {file_name} for category: {cat_name}")
        with open(file_name, 'r', encoding='utf-8') as f:
            content = f.read()
            
        positions = []
        for course_name, pattern in headings.items():
            regex = re.compile(pattern, re.MULTILINE)
            match = None
            for m in re.finditer(regex, content):
                match = m
                break
            if match:
                line_start = content.rfind('\n', 0, match.start()) + 1
                line_end = content.find('\n', match.end())
                if line_end == -1:
                    line_end = len(content)
                full_line = content[line_start:line_end].strip()
                positions.append((line_start, full_line))
            else:
                print(f"  Warning: Heading pattern {repr(pattern)} not found in {file_name}")
                
        positions.sort()
        
        courses = []
        for i, (pos, heading) in enumerate(positions):
            start = pos + len(heading)
            end = positions[i+1][0] if i+1 < len(positions) else len(content)
            course_text = content[start:end]
            
            cleaned_course_title = clean_title(heading)
            print(f"  Found Course: {cleaned_course_title}")
            
            is_other = (file_name == "其他资料.md")
            chapters = parse_course_section(cleaned_course_title, course_text, is_other_file=is_other)
            print(f"    Parsed {len(chapters)} chapters")
            
            courses.append({
                "title": cleaned_course_title,
                "chapters": chapters
            })
            
        all_data.append({
            "category": cat_name,
            "courses": courses
        })
        
    return all_data

def sync_to_db(all_data):
    print("Connecting to database to synchronize...")
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute("PRAGMA foreign_keys = ON;")
    
    cursor.execute("DELETE FROM resource;")
    cursor.execute("DELETE FROM question;")
    cursor.execute("DELETE FROM chapter;")
    cursor.execute("DELETE FROM course;")
    cursor.execute("DELETE FROM question_bank;")
    conn.commit()
    
    course_count = 0
    chapter_count = 0
    question_count = 0
    
    for cat in all_data:
        for course in cat["courses"]:
            course_name = course["title"]
            cursor.execute(
                "INSERT INTO course (name, cover, description) VALUES (?, ?, ?);",
                (course_name, "default_cover.png", f"系统学习 {course_name} 的核心专业理论与实践。")
            )
            course_id = cursor.lastrowid
            course_count += 1
            
            for chap in course["chapters"]:
                chap_title = chap["title"]
                chap_content = chap["content"]
                chap_mindmap = chap["mindmapHtml"]
                
                cursor.execute(
                    "INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);",
                    (course_id, chap_title, chap_content, chap_mindmap)
                )
                chapter_id = cursor.lastrowid
                chapter_count += 1
                
                for q in chap["quizzes"]:
                    cursor.execute(
                        """INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis)
                           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);""",
                        (chapter_id, "单选题", q["question"], q["options"][0]["text"], q["options"][1]["text"],
                         q["options"][2]["text"], q["options"][3]["text"], q["answer"], q["analysis"])
                    )
                    
                    cursor.execute(
                        """INSERT INTO question_bank (subject, chapter, question, option_a, option_b, option_c, option_d, answer, analysis)
                           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);""",
                        (course_name, chap_title, q["question"], q["options"][0]["text"], q["options"][1]["text"],
                         q["options"][2]["text"], q["options"][3]["text"], q["answer"], q["analysis"])
                    )
                    question_count += 1
                    
    conn.commit()
    conn.close()
    print(f"Database synchronized successfully: {course_count} courses, {chapter_count} chapters, {question_count} questions imported.")

def write_courses_js(all_data):
    js_content = f"const ALL_COURSES_DATA = {json.dumps(all_data, ensure_ascii=False, indent=2)};"
    with open('courses_data.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("courses_data.js generated successfully!")

if __name__ == '__main__':
    parsed_data = parse_all_files()
    sync_to_db(parsed_data)
    write_courses_js(parsed_data)
    print("All tasks completed successfully!")
