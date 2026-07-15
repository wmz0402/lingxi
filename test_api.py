import requests
import json

# Test the chat API
url = "http://localhost:5000/api/chat"
data = {
    "message": "高数",
    "user_id": "test@test.com"
}

try:
    response = requests.post(url, json=data, timeout=10)
    print("Status:", response.status_code)
    print("Response:")
    print(json.dumps(response.json(), ensure_ascii=False, indent=2))
except Exception as e:
    print(f"Error: {e}")
