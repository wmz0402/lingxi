# Third-Party Notices / 第三方开源组件声明

本项目使用了以下开源软件和第三方服务，在此对其贡献表示感谢。

---

## 开源软件依赖

### 后端 (Python)

| 名称 | 版本 | 许可证 | 用途 |
|---|---|---|---|
| Flask | 3.1.3 | BSD-3-Clause | Web应用框架 |
| flask-cors | 6.0.5 | MIT | 跨域资源共享支持 |
| websocket-client | 1.9.0 | Apache-2.0 | WebSocket客户端通信 |
| spark-ai-python | 0.4.5 | Apache-2.0 | 科大讯飞星火大模型SDK |
| pydantic | 2.13.4 | MIT | 数据验证与序列化 |
| pypdf | - | BSD-3-Clause | PDF文本提取 |
| python-docx | - | MIT | Word文档文本提取 |
| Werkzeug | - | BSD-3-Clause | WSGI工具库（Flask依赖），密码哈希 |

### 前端 (CDN加载)

| 名称 | 版本 | 许可证 | 用途 |
|---|---|---|---|
| MathJax | 3.2.2 | Apache-2.0 | LaTeX数学公式渲染 |
| marked.js | 4.3.0 | MIT | Markdown文本解析与渲染 |
| Google Fonts (Inter, Source Serif 4) | - | SIL Open Font License 1.1 | 字体资源 |

---

## 第三方AI服务

### 科大讯飞（iFlytek）— 核心AI引擎

本项目深度集成科大讯飞星火大模型作为核心AI技术：

1. **讯飞星火 4.0 Ultra** (`spark-ai-python` SDK)
   - WebSocket接口: `wss://spark-api.xf-yun.com/v4.0/chat`
   - 用途: 对话生成、意图解析、思维导图生成、题库生成、代码分析、文档诊断

2. **讯飞星火图像理解**
   - WebSocket接口: `wss://spark-api.cn-huabei-1.xf-yun.com/v2.1/image`
   - 用途: 图片内容识别、公式识别、截图文字提取

3. **讯飞MaaS Hy-MT2** (OpenAI兼容API)
   - HTTP接口: `https://maas-api.cn-huabei-1.xf-yun.com/v2/chat/completions`
   - 用途: AI解题群智能体、翻译服务

4. **讯飞MaaS Qwen3-1.7B** (OpenAI兼容API)
   - HTTP接口: `https://maas-api.cn-huabei-1.xf-yun.com/v2/chat/completions`
   - 用途: AI解题群智能体

### JDoodle — 代码在线编译

- 服务: JDoodle Online Compiler API
- 网站: https://www.jdoodle.com
- 用途: 远程编译运行C/C++/Java等语言代码

### Bilibili — 视频资源检索

- 服务: Bilibili公开搜索API
- 网站: https://www.bilibili.com
- 用途: 搜索推荐教学视频资源

### QQ邮箱 SMTP — 邮件验证

- 服务: QQ邮箱SMTP服务
- 用途: 用户注册验证码发送

---

## AI辅助编程工具说明

本项目开发过程中使用的AI辅助工具均选用科大讯飞相关产品：
- **科大讯飞星火大模型**: 用于代码生成辅助、文档编写辅助、代码审查

---

## 许可证全文

### MIT License
```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

### BSD-3-Clause License
```
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.
3. Neither the name of the copyright holder nor the names of its contributors
   may be used to endorse or promote products derived from this software
   without specific prior written permission.
```

### Apache-2.0 License
```
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
```
