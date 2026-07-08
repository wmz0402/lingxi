import os
import re
import sqlite3
from pathlib import Path

DB_PATH = 'lingxi.db'


def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS question_bank (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT NOT NULL,
            chapter TEXT,
            question TEXT NOT NULL,
            option_a TEXT NOT NULL,
            option_b TEXT NOT NULL,
            option_c TEXT NOT NULL,
            option_d TEXT NOT NULL,
            answer TEXT NOT NULL,
            analysis TEXT
        )
    ''')
    conn.commit()
    conn.close()


def extract_subject_from_content(content):
    """提取大科目名"""
    # 匹配 "## 一、 人工智能导论"
    m = re.search(r'^##\s+[一二三四五六七八九十]+[、\.]\s*(.+?)$', content, re.MULTILINE)
    if m:
        return m.group(1).strip()
    # 匹配 "## 一. 人工智能导论"
    m = re.search(r'^##\s+[一二三四五六七八九十]+\.\s*(.+?)$', content, re.MULTILINE)
    if m:
        return m.group(1).strip()
    return None


def get_chapter_for_position(content, pos):
    """从内容中往前找最近的 '###' 标题作为章节名"""
    before = content[:pos]
    lines = before.split('\n')
    for line in reversed(lines):
        if line.strip().startswith('###'):
            # 去掉 '###' 和编号
            clean = re.sub(r'^###\s+[\d.、]+\s*', '', line.strip())
            return clean.strip()
    return "综合"


def extract_questions_from_content(content, subject):
    """从内容中提取所有题目，直接处理整个内容字符串"""
    questions = []
    # 按 '#### Q' 分割
    # 使用更稳健的方式：找到所有 '#### Q' 的位置
    q_positions = []
    for m in re.finditer(r'####\s*Q\d+\.', content):
        q_positions.append((m.start(), m.end()))

    if not q_positions:
        return questions

    for idx, (start, end) in enumerate(q_positions):
        # 确定题目块的结束位置（下一个 '#### Q' 或文件结尾）
        next_start = q_positions[idx + 1][0] if idx + 1 < len(q_positions) else len(content)
        block = content[start:next_start]

        # 提取题目编号
        q_num_match = re.match(r'####\s*Q(\d+)\.', block)
        if not q_num_match:
            continue

        # 提取题目文本（从 #### Q 到第一个选项之间）
        # 选项格式为 "- A. " 或 "- A. "
        opt_match = re.search(r'\n\s*-\s*[A-D]\.', block)
        if not opt_match:
            continue

        question_text = block[:opt_match.start()].strip()
        question_text = re.sub(r'^####\s*Q\d+\.\s*', '', question_text).strip()

        # 提取所有选项
        options = {}
        opt_pattern = re.compile(
            r'\n\s*-\s*([A-D])\.\s*(.*?)(?=\n\s*-\s*[A-D]\.|\n\s*\*\*正确答案\*\*|\n\s*正确答案[：:]|$)', re.DOTALL)
        for match in opt_pattern.finditer(block):
            letter = match.group(1)
            text = match.group(2).strip()
            options[letter] = text

        # 如果选项不足4个，按行匹配（备选方案）
        if len(options) < 4:
            for line in block.split('\n'):
                m = re.match(r'\s*-\s*([A-D])\.\s*(.+)', line)
                if m:
                    options[m.group(1)] = m.group(2).strip()

        if len(options) < 4:
            continue

        # 提取正确答案
        answer_match = re.search(r'\*\*正确答案\*\*[：:]\s*([A-D])', block)
        if not answer_match:
            answer_match = re.search(r'正确答案[：:]\s*([A-D])', block)
        if not answer_match:
            continue
        answer = answer_match.group(1)

        # 提取解析
        analysis_match = re.search(r'\*\*解析\*\*[：:]\s*(.*?)(?=\n\s*####\s*Q\d+\.|$)', block, re.DOTALL)
        if not analysis_match:
            analysis_match = re.search(r'解析[：:]\s*(.*?)(?=\n\s*####\s*Q\d+\.|$)', block, re.DOTALL)
        analysis = analysis_match.group(1).strip() if analysis_match else ""

        # 提取章节名
        chapter = get_chapter_for_position(content, start)

        # 确保所有选项都有值
        for letter in ['A', 'B', 'C', 'D']:
            if letter not in options:
                options[letter] = ""

        questions.append({
            'question': question_text,
            'option_a': options.get('A', ''),
            'option_b': options.get('B', ''),
            'option_c': options.get('C', ''),
            'option_d': options.get('D', ''),
            'answer': answer,
            'analysis': analysis,
            'chapter': chapter
        })

    return questions


def parse_md_file(filepath):
    """解析单个 .md 文件"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 提取科目名
    subject = extract_subject_from_content(content)
    if not subject:
        # 使用文件名作为科目名
        subject = Path(filepath).stem
        subject = subject.replace('知识库', '').strip()

    # 提取所有题目
    questions = extract_questions_from_content(content, subject)

    result = []
    for q in questions:
        result.append((subject, q['chapter'], q))
    return result


def insert_question(subject, chapter, q):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO question_bank (subject, chapter, question, option_a, option_b, option_c, option_d, answer, analysis)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (subject, chapter, q['question'], q['option_a'], q['option_b'], q['option_c'], q['option_d'], q['answer'],
          q['analysis']))
    conn.commit()
    conn.close()


def parse_all_md_files(root_dir='.'):
    init_db()
    # 清空表（可选）
    conn = sqlite3.connect(DB_PATH)
    conn.execute('DELETE FROM question_bank')
    conn.commit()
    conn.close()

    md_files = list(Path(root_dir).rglob('*.md'))
    # 排除虚拟环境和第三方库中的文件
    exclude_dirs = ['.venv', 'site-packages', '__pycache__', 'node_modules']
    md_files = [f for f in md_files if not any(ex in str(f) for ex in exclude_dirs)]

    total = 0
    for md_file in md_files:
        print(f"正在解析: {md_file}")
        try:
            parsed = parse_md_file(md_file)
            for subject, chapter, q in parsed:
                insert_question(subject, chapter, q)
                total += 1
            print(f"  成功解析 {len(parsed)} 道题目")
        except Exception as e:
            print(f"  解析失败: {e}")
            import traceback
            traceback.print_exc()
    print(f"\n总计导入 {total} 道题目")


if __name__ == '__main__':
    parse_all_md_files('.')