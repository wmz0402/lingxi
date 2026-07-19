import urllib.request
import urllib.error
import json
import os
import base64
from dotenv import load_dotenv

load_dotenv()

UNDER_API_KEY = os.getenv("UNDER_API_KEY", "")
UNDER_API_URL = "https://maas-api.cn-huabei-1.xf-yun.com/v2/chat/completions"
UNDER_MODEL = "xoppaddleocrv16"

def test_paddle_ocr_vl_image(image_path, prompt):
    """测试 PaddleOCR-VL 传入图片的效果"""
    with open(image_path, "rb") as f:
        img_data = f.read()
    img_base64 = base64.b64encode(img_data).decode('utf-8')
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {UNDER_API_KEY}"
    }
    
    # 尝试多模态格式（图片+文字）
    data = {
        "model": UNDER_MODEL,
        "messages": [
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt},
                    {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{img_base64}"}}
                ]
            }
        ],
        "temperature": 0.7,
        "max_tokens": 2000
    }
    
    req = urllib.request.Request(
        UNDER_API_URL,
        data=json.dumps(data, ensure_ascii=False).encode("utf-8"),
        headers=headers,
        method="POST"
    )
    
    try:
        with urllib.request.urlopen(req, timeout=120) as response:
            result = json.loads(response.read().decode("utf-8"))
            return result["choices"][0]["message"]["content"].strip()
    except urllib.error.HTTPError as e:
        error_body = e.read().decode("utf-8", errors="replace")
        return f"HTTP错误 {e.code}: {error_body}"
    except Exception as e:
        return f"错误: {str(e)}"

# 先测试纯文字（确认模型是否支持多模态格式）
def test_text():
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {UNDER_API_KEY}"
    }
    data = {
        "model": UNDER_MODEL,
        "messages": [
            {"role": "user", "content": "你好，请介绍一下你自己"}
        ],
        "temperature": 0.7,
        "max_tokens": 500
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
print("测试: 纯文字对话（user单角色）")
print("-" * 60)
result = test_text()
print(f"输出: {result[:300]}")
