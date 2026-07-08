import os
import re
import json

md_files = {
    "数学基础": "高等数学.md",
    "计算机基础": "计算机科学基础.md",
    "编程语言": "编程语言.md",
    "数据结构与算法": "算法与数据结构.md",
    "数据库与网络": "数据库与网络.md",
    "人工智能": "人工智能相关.md"
}

def clean_title(title):
    # Remove prefix like "一、 ", "1. ", "#### "
    title = re.sub(r'^[一二三四五六七八九十百]+[、\s]+', '', title)
    title = re.sub(r'^[0-9]+[\.\s]+', '', title)
    title = title.strip()
    return title

def md_to_html(text):
    # Convert simple markdown to HTML
    # Bold
    text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', text)
    # Inline code
    text = re.sub(r'`(.*?)`', r'<code>\1</code>', text)
    # Math formulas (remove $ or $$ for cleaner rendering)
    text = text.replace('$$', '').replace('$', '')
    # Lists
    lines = text.split('\n')
    html_lines = []
    in_list = False
    for line in lines:
        if line.strip().startswith('- ') or line.strip().startswith('* '):
            if not in_list:
                html_lines.append('<ul>')
                in_list = True
            content = line.strip()[2:]
            html_lines.append(f'<li>{content}</li>')
        else:
            if in_list:
                html_lines.append('</ul>')
                in_list = False
            if line.strip():
                html_lines.append(f'<p>{line.strip()}</p>')
    if in_list:
        html_lines.append('</ul>')
    return '\n'.join(html_lines)

parsed_data = []

for cat_name, file_name in md_files.items():
    if not os.path.exists(file_name):
        print(f"File {file_name} not found!")
        continue
        
    with open(file_name, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Split by ## (courses)
    course_sections = re.split(r'\n##\s+', content)
    courses = []
    
    # First section is introduction
    intro = course_sections[0]
    
    for section in course_sections[1:]:
        lines = section.split('\n')
        course_title = clean_title(lines[0])
        
        # Split into Theory and Quizzes
        theory_part = ""
        quiz_part = ""
        
        current_part = None
        for line in lines[1:]:
            if line.strip().startswith('### 1.') or '理论学习' in line:
                current_part = 'theory'
                continue
            elif line.strip().startswith('### 2.') or '课后习题' in line:
                current_part = 'quiz'
                continue
                
            if current_part == 'theory':
                theory_part += line + '\n'
            elif current_part == 'quiz':
                quiz_part += line + '\n'
                
        # Parse theory chapters
        chapters = []
        chapter_sections = re.split(r'\n####\s+', theory_part)
        chapter_id = 1
        for ch_sec in chapter_sections[1:]:
            ch_lines = ch_sec.split('\n')
            ch_title = clean_title(ch_lines[0])
            ch_content_md = '\n'.join(ch_lines[1:])
            ch_content_html = md_to_html(ch_content_md)
            
            chapters.append({
                "id": chapter_id,
                "title": f"第{chapter_id}章：{ch_title}",
                "intro": f"学习关于 {ch_title} 的核心专业理论。",
                "content": ch_content_html,
                "quizzes": [], # Will populate from quizzes
                "mindmapHtml": f"""
                <div class="mindmap-chart">
                  <div class="mm-root">{ch_title}</div>
                  <div class="mm-branches">
                    <div class="mm-branch">
                      <div class="mm-parent-node">核心知识</div>
                      <div class="mm-leaves">
                        <div class="mm-leaf-item"><div class="mm-leaf-node">理论概念</div></div>
                        <div class="mm-leaf-item"><div class="mm-leaf-node">规范机理</div></div>
                      </div>
                    </div>
                  </div>
                </div>
                """
            })
            chapter_id += 1
            
        # Parse quizzes
        quizzes = []
        quiz_sections = re.split(r'\n####\s+Q', quiz_part)
        for q_sec in quiz_sections[1:]:
            q_lines = q_sec.split('\n')
            q_title = q_lines[0]
            # remove number from Q1. etc.
            q_title = re.sub(r'^[0-9]+[\.\s]*', '', q_title).strip()
            
            question_text = q_title
            options = []
            answer = "A"
            analysis = ""
            
            for line in q_lines[1:]:
                line_str = line.strip()
                if line_str.startswith('- A.') or line_str.startswith('- A、') or line_str.startswith('A.'):
                    options.append({"key": "A", "text": re.sub(r'^-?\s*[A-D][\.\s、]*', '', line_str).strip()})
                elif line_str.startswith('- B.') or line_str.startswith('- B、') or line_str.startswith('B.'):
                    options.append({"key": "B", "text": re.sub(r'^-?\s*[A-D][\.\s、]*', '', line_str).strip()})
                elif line_str.startswith('- C.') or line_str.startswith('- C、') or line_str.startswith('C.'):
                    options.append({"key": "C", "text": re.sub(r'^-?\s*[A-D][\.\s、]*', '', line_str).strip()})
                elif line_str.startswith('- D.') or line_str.startswith('- D、') or line_str.startswith('D.'):
                    options.append({"key": "D", "text": re.sub(r'^-?\s*[A-D][\.\s、]*', '', line_str).strip()})
                elif "正确答案" in line_str:
                    match = re.search(r'[A-D]', line_str)
                    if match:
                        answer = match.group(0)
                elif "解析" in line_str:
                    analysis = re.sub(r'^-\s*\*\*解析\*\*：', '', line_str).strip()
                    analysis = re.sub(r'^解析：', '', analysis).strip()
                    
            if len(options) < 4:
                # Ensure 4 options
                options = [{"key": "A", "text": "选项A"}, {"key": "B", "text": "选项B"}, {"key": "C", "text": "选项C"}, {"key": "D", "text": "选项D"}]
                
            quizzes.append({
                "question": question_text,
                "options": options,
                "answer": answer,
                "analysis": analysis
            })
            
        # Distribute quizzes to chapters
        if chapters and quizzes:
            # Distribute evenly
            for i, q in enumerate(quizzes):
                ch_idx = i % len(chapters)
                chapters[ch_idx]["quizzes"].append({
                    "question": q["question"],
                    "options": q["options"],
                    "answer": q["answer"],
                    "analysis": q["analysis"]
                })
        else:
            # Fallback if no quizzes parsed
            for ch in chapters:
                ch["quizzes"] = [{
                    "question": f"关于 {ch['title']} 的基础测试题",
                    "options": [
                        {"key": "A", "text": "正确选项", "correct": True},
                        {"key": "B", "text": "错误选项一"},
                        {"key": "C", "text": "错误选项二"},
                        {"key": "D", "text": "错误选项三"}
                    ],
                    "analysis": "无详细解析"
                }]
                
        courses.append({
            "title": course_title,
            "chapters": chapters
        })
        
    parsed_data.append({
        "category": cat_name,
        "courses": courses
    })

# Write to courses_data.js
js_content = f"const ALL_COURSES_DATA = {json.dumps(parsed_data, ensure_ascii=False, indent=2)};"
with open('courses_data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Parsed successfully!")
