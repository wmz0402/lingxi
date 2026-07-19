import sys
import json
sys.path.insert(0, r'd:\学习系统\mylingxi')

# 直接读取文件检查
with open(r'd:\学习系统\mylingxi\app.py', 'r', encoding='utf-8') as f:
    content = f.read()

# 查找 deepseek 相关的行
lines = content.split('\n')
for i, line in enumerate(lines):
    if 'deepseek' in line and ('name' in line or 'PaddleOCR' in line or '混元' in line):
        print(f'第 {i+1} 行: {line.strip()}')
