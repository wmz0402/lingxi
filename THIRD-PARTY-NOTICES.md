# 第三方开源软件与资源声明 (Third-Party Notices)

本文档列出了灵析 (Lingxi) 项目中使用的所有第三方开源软件、库及资源。

---

## 一、后端 Python 依赖

### 1. Flask
- **版本：** ≥2.0
- **用途：** Web 应用框架，提供路由、请求处理、模板渲染等核心后端服务
- **开源协议：** BSD-3-Clause
- **项目地址：** https://github.com/pallets/flask

### 2. Flask-CORS
- **版本：** ≥3.0
- **用途：** 处理跨域资源共享 (CORS)，允许前端页面跨域访问后端 API
- **开源协议：** MIT License
- **项目地址：** https://github.com/corydolphin/flask-cors

### 3. websocket-client
- **版本：** ≥1.0
- **用途：** WebSocket 客户端库，用于与科大讯飞星火大模型的 WebSocket 流式接口通信
- **开源协议：** Apache License 2.0
- **项目地址：** https://github.com/websocket-client/websocket-client

### 4. spark-ai-python (讯飞星火 Python SDK)
- **版本：** ≥1.0
- **用途：** 科大讯飞星火大模型官方 Python SDK，提供大模型对话、图像理解等能力的封装
- **开源协议：** Apache License 2.0
- **项目地址：** https://github.com/iflytek/spark-ai-python

### 5. Pydantic
- **版本：** ≥2.0
- **用途：** 数据验证与序列化，被讯飞星火 SDK 依赖使用
- **开源协议：** MIT License
- **项目地址：** https://github.com/pydantic/pydantic

### 6. PyPDF
- **版本：** ≥3.0
- **用途：** PDF 文档文本内容提取，用于文档诊断功能
- **开源协议：** BSD-3-Clause
- **项目地址：** https://github.com/py-pdf/pypdf

### 7. python-docx
- **版本：** ≥0.8
- **用途：** Word (.docx) 文档文本内容提取，用于文档诊断功能
- **开源协议：** MIT License
- **项目地址：** https://github.com/python-openxml/python-docx

### 8. SQLite3
- **版本：** Python 标准库内置
- **用途：** 嵌入式关系型数据库，存储用户数据、课程内容、错题记录等
- **开源协议：** Public Domain (Dedicated to the Public Domain)
- **项目地址：** https://www.sqlite.org

### 9. Werkzeug
- **版本：** 随 Flask 安装
- **用途：** WSGI 工具库（密码哈希等安全功能），Flask 的底层依赖
- **开源协议：** BSD-3-Clause
- **项目地址：** https://github.com/pallets/werkzeug

---

## 二、前端 JavaScript 库（CDN 加载）

### 1. MathJax
- **版本：** 3.2.2
- **用途：** LaTeX 数学公式渲染引擎，将 LaTeX 语法渲染为浏览器可显示的数学公式
- **加载方式：** CDN (bootcdn.net)
- **开源协议：** Apache License 2.0
- **项目地址：** https://github.com/mathjax/MathJax

### 2. marked.js
- **版本：** 4.3.0
- **用途：** Markdown 文本解析渲染为 HTML，用于 AI 回复内容的格式化显示
- **加载方式：** CDN (bootcdn.net)
- **开源协议：** MIT License
- **项目地址：** https://github.com/markedjs/marked

---

## 三、字体资源

### 1. Inter
- **用途：** 系统界面主字体（西文）
- **开源协议：** SIL Open Font License 1.1
- **项目地址：** https://github.com/rsms/inter

### 2. Source Serif 4
- **用途：** 内容阅读字体（西文衬线体）
- **开源协议：** SIL Open Font License 1.1
- **项目地址：** https://github.com/adobe-fonts/source-serif

### 3. Noto Sans CJK SC
- **用途：** 中文界面字体
- **开源协议：** SIL Open Font License 1.1
- **项目地址：** https://github.com/googlefonts/noto-cjk

---

## 四、第三方 AI 服务

### 1. 科大讯飞星火大模型 4.0 Ultra
- **用途：** 核心对话 AI 引擎，提供智能问答、路径规划、文档诊断、脑图生成、出题测试等全部核心 AI 能力
- **服务提供方：** 科大讯飞股份有限公司 (iFLYTEK Co., Ltd.)
- **API 地址：** https://www.xfyun.cn

### 2. 科大讯飞星火图像理解
- **用途：** 多模态图片识别，支持识别公式、图表、手写题目、代码截图等
- **服务提供方：** 科大讯飞股份有限公司 (iFLYTEK Co., Ltd.)

### 3. 科大讯飞 MaaS Hy-MT2 模型
- **用途：** AI 解题群智能体之一，提供独立视角的题目解答
- **服务提供方：** 科大讯飞股份有限公司 (iFLYTEK Co., Ltd.)

### 4. 科大讯飞 MaaS Qwen3 模型
- **用途：** AI 解题群智能体之一，提供独立视角的题目解答
- **服务提供方：** 科大讯飞股份有限公司 (iFLYTEK Co., Ltd.)

### 5. JDoodle
- **用途：** 代码在线编译沙箱，支持 C++/Python/Java/JavaScript 等多语言代码的在线编译运行
- **服务提供方：** JDoodle (Pleasant Inc.)
- **API 地址：** https://www.jdoodle.com

---

## 五、开源协议全文索引

以下为本项目所依赖的各开源软件的协议全文链接，各协议的完整法律文本请访问对应地址查阅：

| 库名称 | 协议 | 协议全文 |
|--------|------|----------|
| Flask | BSD-3-Clause | https://github.com/pallets/flask/blob/main/LICENSE |
| Flask-CORS | MIT | https://github.com/corydolphin/flask-cors/blob/master/LICENSE |
| websocket-client | Apache-2.0 | https://github.com/websocket-client/websocket-client/blob/master/LICENSE |
| spark-ai-python | Apache-2.0 | https://github.com/iflytek/spark-ai-python/blob/main/LICENSE |
| Pydantic | MIT | https://github.com/pydantic/pydantic/blob/main/LICENSE |
| PyPDF | BSD-3-Clause | https://github.com/py-pdf/pypdf/blob/main/LICENSE |
| python-docx | MIT | https://github.com/python-openxml/python-docx/blob/main/LICENSE |
| Werkzeug | BSD-3-Clause | https://github.com/pallets/werkzeug/blob/main/LICENSE |
| MathJax | Apache-2.0 | https://github.com/mathjax/MathJax/blob/main/LICENSE |
| marked.js | MIT | https://github.com/markedjs/marked/blob/master/LICENSE |
| Inter 字体 | SIL OFL 1.1 | https://github.com/rsms/inter/blob/master/LICENSE |
| Source Serif 4 | SIL OFL 1.1 | https://github.com/adobe-fonts/source-serif/blob/main/LICENSE |
| Noto Sans CJK | SIL OFL 1.1 | https://github.com/googlefonts/noto-cjk/blob/main/LICENSE |

---

*本文档最后更新：2026 年 7 月 16 日*