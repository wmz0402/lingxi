import urllib.request
import urllib.error
import json
import os
from dotenv import load_dotenv

load_dotenv()

UNDER_API_KEY = os.getenv("UNDER_API_KEY", "")
UNDER_API_URL = "https://maas-api.cn-huabei-1.xf-yun.com/v2/chat/completions"
UNDER_MODEL = "xoppaddleocrv16"

def test_paddle_ocr_vl(prompt, system_prompt="你是一个助手。"):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {UNDER_API_KEY}"
    }
    data = {
        "model": UNDER_MODEL,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.7,
        "max_tokens": 1000
    }
    
    req = urllib.request.Request(
        UNDER_API_URL,
        data=json.dumps(data, ensure_ascii=False).encode("utf-8"),
        headers=headers,
        method="POST"
    )
    
    try:
        with urllib.request.urlopen(req, timeout=60) as response:
            result = json.loads(response.read().decode("utf-8"))
            return result["choices"][0]["message"]["content"].strip()
    except urllib.error.HTTPError as e:
        error_body = e.read().decode("utf-8", errors="replace")
        return f"HTTP错误 {e.code}: {error_body}"
    except Exception as e:
        return f"错误: {str(e)}"

print("=" * 60)
print("测试1: 简单问候")
print("-" * 60)
result = test_paddle_ocr_vl("你好")
print(f"输入: 你好")
print(f"输出: {result}")

print("\n" + "=" * 60)
print("测试2: 数学题")
print("-" * 60)
result = test_paddle_ocr_vl("请问 1+1 等于几？")
print(f"输入: 请问 1+1 等于几？")
print(f"输出: {result}")

print("\n" + "=" * 60)
print("测试3: OCR文字识别（模拟图片文字）")
print("-" * 60)
ocr_prompt = """请识别下面图片中的文字内容：

图片内容：
已知函数f(x) = x^2 + 2x + 1，求f(2)的值。

A. 5
B. 7
C. 9
D. 11"""
result = test_paddle_ocr_vl(ocr_prompt, system_prompt="你是一个OCR文字识别助手，请准确识别图片中的文字。")
print(f"输入: 模拟图片文字的数学题")
print(f"输出: {result}")
