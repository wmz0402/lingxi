import re

with open('Lingxi.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Find all script contents with line numbers
script_blocks = []
for m in re.finditer(r'<script>(.*?)</script>', content, re.DOTALL):
    start_pos = m.start(1)
    # count newlines before start_pos to get absolute line number (1-based)
    abs_start_line = content[:start_pos].count('\n') + 1
    script_blocks.append((abs_start_line, m.group(1)))

for idx, (abs_start_line, script) in enumerate(script_blocks):
    stack = []
    lines = script.split('\n')
    for line_num, line in enumerate(lines, 0):
        actual_line = abs_start_line + line_num
        for char_num, char in enumerate(line, 1):
            if char in '{[(':
                stack.append((char, actual_line, char_num))
            elif char in '}])':
                if not stack:
                    print(f"Extra closing character '{char}' at absolute line {actual_line}:{char_num}")
                    continue
                top, l, c = stack.pop()
                if (char == '}' and top != '{') or (char == ']' and top != '[') or (char == ')' and top != '('):
                    print(f"Mismatched closing character '{char}' at absolute line {actual_line}:{char_num} (opened with '{top}' at line {l}:{c})")

    if stack:
        print(f"Unclosed openings left in script {idx}:")
        for top, l, c in stack:
            print(f"  '{top}' opened at line {l}:{c}")
