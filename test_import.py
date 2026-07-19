import sys
sys.path.insert(0, r'd:\学习系统\mylingxi')
import app

# 检查 group_chat 函数的源码
import inspect
source = inspect.getsource(app.group_chat)
# 查找 results 字典的定义
lines = source.split('\n')
for i, line in enumerate(lines):
    if 'results' in line and 'deepseek' in line:
        print(f'第 {i} 行: {line}')
