import re
import json
import traceback
import sys

def parse_markdown(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    
    current_course = None
    current_chapter = None
    
    # 结构: { course_title: { chapter_title: [ quizzes ] } }
    data = {}
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue
            
        # 课程匹配，形如: ### 二级课程1：微积分一（Calculus I）
        if line.startswith('### '):
            course_name = line.replace('### ', '').strip()
            course_name = re.sub(r'^二级课程\d+：', '', course_name)
            course_name = course_name.replace('（', ' (').replace('）', ')')
            current_course = course_name
            if current_course not in data:
                data[current_course] = {}
            i += 1
            continue
            
        # 章节匹配，形如: #### 第1章 极限与连续性
        if line.startswith('#### '):
            chap_name = line.replace('#### ', '').strip()
            chap_name = re.sub(r'^第(\d+)章\s+', r'第\1章：', chap_name)
            current_chapter = chap_name
            if current_course:
                if current_chapter not in data[current_course]:
                    data[current_course][current_chapter] = []
            i += 1
            continue
            
        # 题目匹配，单选题/多选题/填空题等开头的 1. 2. 3. 4.
        if re.match(r'^\d+\.', line) and current_course and current_chapter:
            q_text = line
            options = []
            answer = ""
            analysis = ""
            
            i += 1
            while i < len(lines):
                next_line = lines[i].strip()
                if not next_line:
                    i += 1
                    continue
                if next_line.startswith('###') or next_line.startswith('####') or re.match(r'^\d+\.', next_line) or next_line.startswith('#####') or next_line.startswith('#'):
                    break
                
                if re.match(r'^[A-D]\.', next_line) or 'A.' in next_line:
                    opts_matches = re.findall(r'([A-D])\.\s*([^\sA-D]+[^A-D]*)', next_line)
                    if opts_matches:
                        for key, val in opts_matches:
                            options.append({"key": key, "text": val.strip()})
                    else:
                        parts = re.match(r'^([A-D])\.\s*(.*)', next_line)
                        if parts:
                            options.append({"key": parts.group(1), "text": parts.group(2).strip()})
                elif next_line.startswith('**答案：') or next_line.startswith('答案：'):
                    ans_match = re.search(r'答案：\s*([A-D]+|\$.*?\$|[^**]*)', next_line)
                    if ans_match:
                        answer = ans_match.group(1).replace('**', '').strip()
                elif next_line.startswith('**解析：') or next_line.startswith('解析：'):
                    analysis = next_line.replace('**解析：', '').replace('解析：', '').replace('**', '').strip()
                elif next_line.startswith('**解：') or next_line.startswith('解：') or next_line.startswith('**证明：') or next_line.startswith('证明：') or next_line.startswith('**证明思路：') or next_line.startswith('证明思路：'):
                    analysis = next_line.replace('**', '').strip()
                else:
                    if not options and not answer and not analysis:
                        q_text += "\n" + next_line
                    elif analysis:
                        analysis += "\n" + next_line
                i += 1
                
            if options:
                for opt in options:
                    if opt["key"] in answer:
                        opt["correct"] = True
            else:
                options = [
                    {"key": "A", "text": "我已完成本题解答，查看参考答案与解析", "correct": True}
                ]
                if not analysis:
                    analysis = f"参考答案：{answer}"
                else:
                    analysis = f"参考答案：{answer}<br><br>{analysis}"
                    
            if not analysis:
                analysis = "暂无解析。"
                
            q_text_clean = re.sub(r'^\d+\.\s*', '', q_text).strip()
            
            data[current_course][current_chapter].append({
                "question": q_text_clean,
                "options": options,
                "analysis": analysis
            })
            continue
            
        i += 1
        
    return data

if __name__ == '__main__':
    try:
        quizzes = parse_markdown('新题2.md')
        
        with open('new_quizzes.js', 'w', encoding='utf-8') as f:
            f.write('// 自动生成的扩充章节题库\n')
            f.write('const NEW_QUIZZES_DATA = ')
            json.dump(quizzes, f, ensure_ascii=False, indent=2)
            f.write(';\n')
            
        print("Success: Generated new_quizzes.js successfully.")
    except Exception as e:
        print("Exception occurred:")
        traceback.print_exc(file=sys.stdout)
        sys.exit(1)
