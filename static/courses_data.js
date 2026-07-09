const ALL_COURSES_DATA = [
  {
    "category": "数学基础",
    "courses": [
      {
        "title": "微积分一 (Calculus I)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：极限与连续性",
            "intro": "学习关于 极限与连续性 的核心专业理论。",
            "content": "<ul>\n<li><strong>极限的严格 ε-δ 定义</strong>：</li>\n</ul>\n<p>极限是微积分的基础语言。设函数 f(x) 在点 x_0 的某去心邻域内有定义，若存在常数 A，对于任意给定的 \\epsilon > 0（无论多么小），总能找到一个对应的 \\delta > 0，使得当自变量 x 满足不等式 0 < |x - x_0| < \\delta 时，对应的函数值恒满足 |f(x) - A| < \\epsilon。此时，称常数 A 为函数 f(x) 当 x \\to x_0 时的极限，记作 \\lim_{x \\to x_0} f(x) = A。</p>\n<ul>\n<li><strong>等价无穷小代换定理</strong>：</li>\n</ul>\n<p>当 x \\to 0 时，若 a(x) \\sim a'(x) 且 \\beta(x) \\sim \\beta'(x)，则在求乘积或商的极限时，可以将无穷小项替换为等价的形式以简化计算。常用的等价无穷小关系包括：</p>\n<ul>\n<li>\\sin(x) \\sim x</li>\n<li>\\tan(x) \\sim x</li>\n<li>\\arcsin(x) \\sim x</li>\n<li>\\arctan(x) \\sim x</li>\n<li>\\ln(1 + x) \\sim x</li>\n<li>e^x - 1 \\sim x</li>\n<li>1 - \\cos(x) \\sim \\frac{1}{2}x^2</li>\n<li>(1 + x)^a - 1 \\sim ax</li>\n</ul>\n<p>*注：在加减法中不可直接使用等价无穷小代换，否则可能因为抵消导致结果错误。*</p>\n<ul>\n<li><strong>闭区间上连续函数的性质</strong>：</li>\n</ul>\n<p>设 f(x) 在闭区间 [a, b] 上连续，则必定满足：</p>\n<ul>\n<li><strong>有界性与最大最小值定理</strong>：f(x) 在 [a, b] 上有界，且一定能取得最大值 M 和最小值 m。</li>\n<li><strong>零点存在定理</strong>：若 f(a) \\cdot f(b) < 0，则至少存在一点 \\xi \\in (a, b) 使得 f(\\xi) = 0。</li>\n<li><strong>介值定理</strong>：若 u 是介于 f(a) 和 f(b) 之间的任意数，则至少存在一点 \\xi \\in (a, b) 使得 f(\\xi) = u。</li>\n</ul>",
            "quizzes": [
              {
                "question": "求极限 $\\lim_{x \\to 0} \\frac{\\ln(1 + \\sin(x))}{e^{2x} - 1}$ 的值。",
                "options": [
                  {
                    "key": "A",
                    "text": "0"
                  },
                  {
                    "key": "B",
                    "text": "1/2"
                  },
                  {
                    "key": "C",
                    "text": "1"
                  },
                  {
                    "key": "D",
                    "text": "2"
                  }
                ],
                "answer": "B",
                "analysis": "当 $x \\to 0$ 时，$\\sin(x) \\sim x$，进而 $\\ln(1 + \\sin(x)) \\sim \\sin(x) \\sim x$。分母 $e^{2x} - 1 \\sim 2x$。因此极限转化为 $\\lim_{x \\to 0} \\frac{x}{2x} = 1/2$。"
              },
              {
                "question": "若 $f(x)$ 在 $[a, b]$ 连续且可导，$f(a) = f(b) = 0$，下列关于导函数的说法必正确的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "$f'(x)$ 在 $(a, b)$ 内恒大于零"
                  },
                  {
                    "key": "B",
                    "text": "$f'(x)$ 在 $(a, b)$ 内恒小于零"
                  },
                  {
                    "key": "C",
                    "text": "至少存在一点 $\\xi \\in (a, b)$ 使得 $f'(\\xi) = 0$"
                  },
                  {
                    "key": "D",
                    "text": "至少存在两点使得 $f'(x) = 0$"
                  }
                ],
                "answer": "C",
                "analysis": "根据罗尔中值定理，闭区间连续、开区间可导，且端点值相等时，开区间内至少存在一点的导数为 0。"
              },
              {
                "question": "函数 $y = x - \\ln(1 + x)$ 的单调递增区间是：",
                "options": [
                  {
                    "key": "A",
                    "text": "$(-1, 0)$"
                  },
                  {
                    "key": "B",
                    "text": "$(0, +\\infty)$"
                  },
                  {
                    "key": "C",
                    "text": "$(-1, +\\infty)$"
                  },
                  {
                    "key": "D",
                    "text": "整个定义域"
                  }
                ],
                "answer": "B",
                "analysis": "定义域为 $(-1, +\\infty)$。求导得 $y' = 1 - \\frac{1}{1 + x} = \\frac{x}{1 + x}$。令 $y' > 0$。由于分母 $1 + x > 0$，必有 $x > 0$。因此单调增区间为 $(0, +\\infty)$。"
              },
              {
                "question": "泰勒公式中，函数 $f(x) = e^x$ 在 $x = 0$ 处的麦克劳林展开式前三项是：",
                "options": [
                  {
                    "key": "A",
                    "text": "$1 + x + x^2$"
                  },
                  {
                    "key": "B",
                    "text": "$1 + x + 0.5x^2$"
                  },
                  {
                    "key": "C",
                    "text": "$1 + x + x^3$"
                  },
                  {
                    "key": "D",
                    "text": "$x + x^2 + x^3$"
                  }
                ],
                "answer": "B",
                "analysis": "$e^x$ 在 $x=0$ 处各阶导数均为 1。展开式为 $f(0) + f'(0)x + \\frac{f''(0)x^2}{2!} + \\dots = 1 + x + 0.5x^2 + \\dots$。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">极限与连续性</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：导数与微分",
            "intro": "学习关于 导数与微分 的核心专业理论。",
            "content": "<ul>\n<li><strong>导数的几何与物理意义</strong>：</li>\n</ul>\n<p>导数描述了函数值随自变量变化的瞬时速率。定义为：</p>\n<p>f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}</p>\n<p>在几何上，导数 f'(x_0) 是曲线 y = f(x) 在点 (x_0, f(x_0)) 处切线的斜率。在物理上，如果 s(t) 表示位移，则 s'(t) 表示瞬时速度。</p>\n<ul>\n<li><strong>微分中值定理体系</strong>：</li>\n</ul>\n<p>微分中值定理是连接函数局部局部特征（导数）与整体全局特征（函数值）的桥梁。</p>\n<ul>\n<li><strong>罗尔中值定理</strong>：如果函数 f(x) 在闭区间 [a, b] 连续，开区间 (a, b) 可导，且在区间端点处的函数值相等（即 f(a) = f(b)），那么在开区间 (a, b) 内至少存在一个点 \\xi，满足该点导数为零，即 f'(\\xi) = 0。</li>\n<li><strong>拉格朗日中值定理</strong>：如果函数 f(x) 在闭区间 [a, b] 连续，开区间 (a, b) 可导，那么在开区间 (a, b) 内至少存在一个点 \\xi，满足：</li>\n</ul>\n<p>f'(\\xi) = \\frac{f(b) - f(a)}{b - a}</p>\n<p>这表明曲线在某点的切线斜率等于两端点连线的斜率（割线斜率）。</p>\n<ul>\n<li><strong>柯西中值定理</strong>：如果函数 f(x) 和 g(x) 满足在闭区间 [a, b] 连续，开区间 (a, b) 可导，且对于任意 x \\in (a, b) 都有 g'(x) \\neq 0，则在 (a, b) 内至少存在一点 \\xi，使得：</li>\n</ul>\n<p>\\frac{f(b) - f(a)}{g(b) - g(a)} = \\frac{f'(\\xi)}{g'(\\xi)}</p>",
            "quizzes": [
              {
                "question": "设 $f(x) = |x|$，则 $f(x)$ 在 $x = 0$ 处：",
                "options": [
                  {
                    "key": "A",
                    "text": "连续且可导"
                  },
                  {
                    "key": "B",
                    "text": "连续但不可导"
                  },
                  {
                    "key": "C",
                    "text": "不连续但可导"
                  },
                  {
                    "key": "D",
                    "text": "不连续且不可导"
                  }
                ],
                "answer": "B",
                "analysis": "$x = 0$ 处极限为 0，等于 $f(0)$，故连续；左导数为 -1，右导数为 1，左右导数不相等，故不可导。"
              },
              {
                "question": "计算不定积分 $\\int x e^{x^2} dx$ 的值。",
                "options": [
                  {
                    "key": "A",
                    "text": "$e^{x^2} + C$"
                  },
                  {
                    "key": "B",
                    "text": "$2e^{x^2} + C$"
                  },
                  {
                    "key": "C",
                    "text": "$0.5e^{x^2} + C$"
                  },
                  {
                    "key": "D",
                    "text": "$x e^{x^2} + C$"
                  }
                ],
                "answer": "C",
                "analysis": "使用凑微分法，$d(x^2) = 2x dx$，故原式 = $0.5 \\int e^{x^2} d(x^2) = 0.5e^{x^2} + C$。"
              },
              {
                "question": "计算定积分 $\\int_{0}^{1} x dx$。",
                "options": [
                  {
                    "key": "A",
                    "text": "0"
                  },
                  {
                    "key": "B",
                    "text": "1/2"
                  },
                  {
                    "key": "C",
                    "text": "1"
                  },
                  {
                    "key": "D",
                    "text": "2"
                  }
                ],
                "answer": "B",
                "analysis": "$\\int_{0}^{1} x dx = [0.5x^2]_{0}^{1} = 1/2 - 0 = 1/2$。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">导数与微分</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：单变量积分学",
            "intro": "学习关于 单变量积分学 的核心专业理论。",
            "content": "<ul>\n<li><strong>微积分基本定理 (牛顿-莱布尼茨公式)</strong>：</li>\n</ul>\n<p>积分是微分的逆运算。若函数 f(x) 在闭区间 [a, b] 上连续，且 F(x) 是 f(x) 在该区间上的一个原函数（即对任意 x \\in [a, b]，有 F'(x) = f(x)），那么：</p>\n<p>\\int_{a}^{b} f(x) dx = F(b) - F(a)</p>\n<ul>\n<li><strong>积分计算的核心方法</strong>：</li>\n<li><strong>第一类换元法（凑微分法）</strong>：通过将自变量的一部分凑入微分符号中。例如，\\int f(g(x))g'(x)dx = \\int f(g(x))d(g(x))。</li>\n<li><strong>第二类换元法</strong>：引入新变量 x = \\psi(t)，将复杂的根式或三角函数化简，求出关于 t 的积分后再带回。</li>\n<li><strong>分部积分法</strong>：来源于乘积导数公式，其表达式为 \\int u dv = uv - \\int v du。选择 u 的顺序通常遵循“反对幂三指”原则（反三角、对数、幂函数、三角函数、指数函数）。</li>\n</ul>\n<p>---</p>",
            "quizzes": [
              {
                "question": "求曲线 $y = x^3 - 3x$ 在其拐点处的切线方程。",
                "options": [
                  {
                    "key": "A",
                    "text": "$y = 3x$"
                  },
                  {
                    "key": "B",
                    "text": "$y = -3x$"
                  },
                  {
                    "key": "C",
                    "text": "$y = -3x - 1$"
                  },
                  {
                    "key": "D",
                    "text": "$y = 0$"
                  }
                ],
                "answer": "B",
                "analysis": "求一阶导 $y' = 3x^2 - 3$，二阶导 $y'' = 6x$。令 $y'' = 0$ 得 $x = 0$，对应的拐点坐标为 $(0, 0)$。拐点处斜率 $k = y'(0) = -3$。切线方程为 $y - 0 = -3(x - 0)$ 即 $y = -3x$。"
              },
              {
                "question": "函数 $f(x) = \\frac{x^2 - 1}{x - 1}$ 在 $x = 1$ 处的间断点类型是：",
                "options": [
                  {
                    "key": "A",
                    "text": "第一类可去间断点"
                  },
                  {
                    "key": "B",
                    "text": "第一类跳跃间断点"
                  },
                  {
                    "key": "C",
                    "text": "第二类无穷间断点"
                  },
                  {
                    "key": "D",
                    "text": "第二类振荡间断点"
                  }
                ],
                "answer": "A",
                "analysis": "当 $x \\to 1$ 时，$\\lim \\frac{x^2 - 1}{x - 1} = \\lim (x + 1) = 2$。极限存在但函数在 $x = 1$ 无定义，故为第一类可去间断点。"
              },
              {
                "question": "设 $F(x) = \\int_{0}^{x} \\sin(t) dt$，则 $F'(x)$ 为：",
                "options": [
                  {
                    "key": "A",
                    "text": "$\\cos(x)$"
                  },
                  {
                    "key": "B",
                    "text": "$-\\cos(x)$"
                  },
                  {
                    "key": "C",
                    "text": "$\\sin(x)$"
                  },
                  {
                    "key": "D",
                    "text": "$-\\sin(x)$"
                  }
                ],
                "answer": "C",
                "analysis": "根据变上限积分求导公式，$\\frac{d}{dx} [\\int_{a}^{x} f(t) dt] = f(x)$。故 $F'(x) = \\sin(x)$。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">单变量积分学</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      },
      {
        "title": "微积分二 (Calculus II)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：多元函数微分学",
            "intro": "学习关于 多元函数微分学 的核心专业理论。",
            "content": "<ul>\n<li><strong>偏导数的概念</strong>：</li>\n</ul>\n<p>偏导数是多元函数沿平行于坐标轴方向的变化率。对于二元函数 z = f(x, y)，其在点 (x_0, y_0) 对 x 的偏导数表示将 y 固定在 y_0，将 f(x, y_0) 视为关于 x 的一元函数，在 x_0 处的导数：</p>\n<p>f_x(x_0, y_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x, y_0) - f(x_0, y_0)}{\\Delta x}</p>\n<ul>\n<li><strong>全微分与可微性</strong>：</li>\n</ul>\n<p>若函数 z = f(x, y) 的全增量 \\Delta z = f(x+\\Delta x, y+\\Delta y) - f(x, y) 在点 (x, y) 处可以表示为：</p>\n<p>\\Delta z = A\\Delta x + B\\Delta y + o(\\rho)</p>\n<p>其中 \\rho = \\sqrt{\\Delta x^2 + \\Delta y^2}，且 A, B 是仅与点 (x, y) 有关的常数。则称函数在该点可微。此时其全微分为：</p>\n<p>dz = \\frac{\\partial f}{\\partial x}dx + \\frac{\\partial f}{\\partial y}dy</p>\n<p>*可微与连续的关系：可微必然连续、偏导数必然存在。偏导数存在且连续是可微的充分条件。*</p>\n<ul>\n<li><strong>多元函数极值判别法</strong>：</li>\n</ul>\n<p>求出所有使偏导数 \\frac{\\partial f}{\\partial x} = 0, \\frac{\\partial f}{\\partial y} = 0 的驻点，然后求出二阶偏导数 A = f_{xx}, B = f_{xy}, C = f_{yy}。计算判别式 \\Delta = AC - B^2：</p>\n<ul>\n<li>若 \\Delta > 0 且 A > 0，函数取得极小值；</li>\n<li>若 \\Delta > 0 且 A < 0，函数取得极大值；</li>\n<li>若 \\Delta < 0，该点为非极值的鞍点；</li>\n<li>若 \\Delta = 0，失效，需作进一步分析。</li>\n</ul>",
            "quizzes": [
              {
                "question": "求函数 $z = x^2 y + e^{xy}$ 在点 $(1, 0)$ 处对 $x$ 的偏导数 $\\frac{\\partial z}{\\partial x}$ 的值。",
                "options": [
                  {
                    "key": "A",
                    "text": "0"
                  },
                  {
                    "key": "B",
                    "text": "1"
                  },
                  {
                    "key": "C",
                    "text": "2"
                  },
                  {
                    "key": "D",
                    "text": "$e$"
                  }
                ],
                "answer": "A",
                "analysis": "$\\frac{\\partial z}{\\partial x} = 2xy + y e^{xy}$。代入 $(1, 0)$ 得到 $2(1)(0) + 0 \\cdot e^0 = 0$。"
              },
              {
                "question": "使用极坐标变换，二重积分 $\\iint_{D} (x^2 + y^2) dx dy$ 对应的极坐标表达式为：",
                "options": [
                  {
                    "key": "A",
                    "text": "$\\int d\\theta \\int r dr$"
                  },
                  {
                    "key": "B",
                    "text": "$\\int d\\theta \\int r^2 dr$"
                  },
                  {
                    "key": "C",
                    "text": "$\\int d\\theta \\int r^3 dr$"
                  },
                  {
                    "key": "D",
                    "text": "$\\int d\\theta \\int r^4 dr$"
                  }
                ],
                "answer": "C",
                "analysis": "令 $x = r\\cos\\theta, y = r\\sin\\theta$，则 $x^2 + y^2 = r^2$。面积元素 $dx dy = r dr d\\theta$。因此被积函数变为 $r^2 \\cdot r dr d\\theta = r^3 dr d\\theta$。"
              },
              {
                "question": "利用格林公式，求积分 $\\oint_{L} (x^2 y dx + x y^2 dy)$ 的值，其中 $L$ 为包围单位圆 $x^2 + y^2 = 1$ 的正向闭曲线。",
                "options": [
                  {
                    "key": "A",
                    "text": "0"
                  },
                  {
                    "key": "B",
                    "text": "$\\pi$"
                  },
                  {
                    "key": "C",
                    "text": "$\\pi/2$"
                  },
                  {
                    "key": "D",
                    "text": "$2\\pi$"
                  }
                ],
                "answer": "A",
                "analysis": "$P = x^2 y, Q = x y^2$。偏导数 $\\frac{\\partial Q}{\\partial x} = y^2$，$\\frac{\\partial P}{\\partial y} = x^2$。由格林公式，原式 = $\\iint_{D} (y^2 - x^2) dx dy$。利用对称性，在圆域内 $\\iint x^2 dx dy = \\iint y^2 dx dy$，故积分值为 0。"
              },
              {
                "question": "多元函数连续、可导、可微的关系中，下列说法正确的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "偏导数存在必连续"
                  },
                  {
                    "key": "B",
                    "text": "连续必可微"
                  },
                  {
                    "key": "C",
                    "text": "可微必连续"
                  },
                  {
                    "key": "D",
                    "text": "偏导数存在必可微"
                  }
                ],
                "answer": "C",
                "analysis": "一元函数可导与可微等价，但多元函数中，可微是极强的条件，可微必连续且偏导存在，反之偏导存在不一定连续，连续也不一定可微。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">多元函数微分学</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：多重积分与矢量分析",
            "intro": "学习关于 多重积分与矢量分析 的核心专业理论。",
            "content": "<ul>\n<li><strong>二重积分计算及其极坐标变换</strong>：</li>\n</ul>\n<p>二重积分 \\iint_{D} f(x, y) dA 可以表示为累次积分。当积分区域 D 是圆域、环形域或被积函数含有 x^2 + y^2 时，采用极坐标换元：</p>\n<p>x = r\\cos\\theta, \\quad y = r\\sin\\theta, \\quad dA = r dr d\\theta</p>\n<p>则 \\iint_{D} f(x, y) dx dy = \\iint_{D'} f(r\\cos\\theta, r\\sin\\theta) r dr d\\theta。</p>\n<ul>\n<li><strong>格林公式（Green's Theorem）</strong>：</li>\n</ul>\n<p>格林公式将平面区域的二重积分与平面区域边界上的曲线积分相联系。设闭区域 D 由分段光滑正向闭曲线 L 围成，函数 P(x, y) 和 Q(x, y) 在 D 上具有一阶连续偏导数，则有：</p>\n<p>\\oint_{L} (P dx + Q dy) = \\iint_{D} \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dx dy</p>",
            "quizzes": [
              {
                "question": "函数 $z = f(x, y) = x^2 + y^2$ 在点 $(0, 0)$ 处：",
                "options": [
                  {
                    "key": "A",
                    "text": "取得极大值"
                  },
                  {
                    "key": "B",
                    "text": "取得极小值"
                  },
                  {
                    "key": "C",
                    "text": "取得鞍点"
                  },
                  {
                    "key": "D",
                    "text": "无极值"
                  }
                ],
                "answer": "B",
                "analysis": "偏导 $\\frac{\\partial z}{\\partial x} = 2x$，$\\frac{\\partial z}{\\partial y} = 2y$，驻点为 $(0,0)$。二阶偏导 $A = 2, B = 0, C = 2$。$AC - B^2 = 4 > 0$ 且 $A > 0$，故该点为极小值点，极小值为 0。"
              },
              {
                "question": "计算级数 $\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}$ 的和。",
                "options": [
                  {
                    "key": "A",
                    "text": "1/2"
                  },
                  {
                    "key": "B",
                    "text": "1"
                  },
                  {
                    "key": "C",
                    "text": "2"
                  },
                  {
                    "key": "D",
                    "text": "发散"
                  }
                ],
                "answer": "B",
                "analysis": "利用部分和裂项相消：$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$。部分和 $S_N = (1 - 1/2) + (1/2 - 1/3) + \\dots + (1/N - 1/(N+1)) = 1 - 1/(N+1)$。当 $N \\to \\infty$ 时，$S_N \\to 1$。"
              },
              {
                "question": "幂级数 $\\sum_{n=0}^{\\infty} x^n$ 的收敛半径 $R$ 为：",
                "options": [
                  {
                    "key": "A",
                    "text": "0"
                  },
                  {
                    "key": "B",
                    "text": "1"
                  },
                  {
                    "key": "C",
                    "text": "2"
                  },
                  {
                    "key": "D",
                    "text": "$+\\infty$"
                  }
                ],
                "answer": "B",
                "analysis": "比值极限法：$\\lim |a_{n}/a_{n+1}| = \\lim (1 / 1) = 1$。收敛半径 $R = 1$。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">多重积分与矢量分析</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：无穷级数",
            "intro": "学习关于 无穷级数 的核心专业理论。",
            "content": "<ul>\n<li><strong>常数项级数收敛判定</strong>：</li>\n<li><strong>达朗贝尔判别法（比值审敛法）</strong>：对于正项级数 \\sum u_n，求极限 \\lim_{n \\to \\infty} \\frac{u_{n+1}}{u_n} = \\rho。若 \\rho < 1 级数绝对收敛；若 \\rho > 1 级数发散；若 \\rho = 1 失效。</li>\n<li><strong>莱布尼茨判别法</strong>：用于交错级数 \\sum (-1)^{n-1} u_n。若满足 u_{n+1} \\le u_n 且 \\lim_{n\\to\\infty} u_n = 0，则级数必收敛。</li>\n<li><strong>幂级数与收敛半径</strong>：</li>\n</ul>\n<p>形如 \\sum_{n=0}^{\\infty} a_n x^n 的级数称为幂级数。其收敛域具有对称区间 (-R, R)。收敛半径可以通过 R = \\lim_{n\\to\\infty} \\left| \\frac{a_n}{a_{n+1}} \\right| 计算。</p>\n<p>---</p>",
            "quizzes": [
              {
                "question": "计算二重积分 $\\iint_{D} dx dy$，其中 $D$ 是由 $x^2 + y^2 = 4$ 所围成的圆盘区域。",
                "options": [
                  {
                    "key": "A",
                    "text": "$\\pi$"
                  },
                  {
                    "key": "B",
                    "text": "$2\\pi$"
                  },
                  {
                    "key": "C",
                    "text": "$4\\pi$"
                  },
                  {
                    "key": "D",
                    "text": "$8\\pi$"
                  }
                ],
                "answer": "C",
                "analysis": "该积分几何意义为积分区域 $D$ 的面积。半径 $R = 2$，面积 $S = \\pi R^2 = 4\\pi$。"
              },
              {
                "question": "根据比值审敛法，级数 $\\sum_{n=1}^{\\infty} \\frac{n!}{2^n}$ 的收敛性判断为：",
                "options": [
                  {
                    "key": "A",
                    "text": "绝对收敛"
                  },
                  {
                    "key": "B",
                    "text": "条件收敛"
                  },
                  {
                    "key": "C",
                    "text": "发散"
                  },
                  {
                    "key": "D",
                    "text": "无法确定"
                  }
                ],
                "answer": "C",
                "analysis": "$a_{n+1}/a_n = \\frac{(n+1)!/2^{n+1}}{n!/2^n} = \\frac{n+1}{2}$。当 $n \\to \\infty$ 时，比值极限为 $+\\infty > 1$，因此该级数发散。"
              },
              {
                "question": "设三元函数 $u = x + y^2 + z^3$，则其在点 $(1, 1, 1)$ 处的梯度 $grad(u)$ 为：",
                "options": [
                  {
                    "key": "A",
                    "text": "$(1, 1, 1)$"
                  },
                  {
                    "key": "B",
                    "text": "$(1, 2, 3)$"
                  },
                  {
                    "key": "C",
                    "text": "$(1, 2, 1)$"
                  },
                  {
                    "key": "D",
                    "text": "$(0, 0, 0)$"
                  }
                ],
                "answer": "B",
                "analysis": "偏导数分别为 $\\frac{\\partial u}{\\partial x} = 1, \\frac{\\partial u}{\\partial y} = 2y, \\frac{\\partial u}{\\partial z} = 3z^2$。在点 $(1, 1, 1)$ 处偏导数分别为 1, 2, 3，故梯度矢量为 $(1, 2, 3)$。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">无穷级数</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      },
      {
        "title": "线性代数 (Linear Algebra)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：行列式与矩阵代数",
            "intro": "学习关于 行列式与矩阵代数 的核心专业理论。",
            "content": "<ul>\n<li><strong>行列式的性质与按行（列）展开定理</strong>：</li>\n</ul>\n<p>n 阶行列式是来自不同行和不同列元素的 n! 个乘积项的代数和。任意 n 阶行列式均可按其中任意一行或一列展开：</p>\n<p>|A| = \\sum_{j=1}^{n} a_{ij} A_{ij}</p>\n<p>其中 A_{ij} = (-1)^{i+j} M_{ij} 为代数余子式。行列式的性质包括：交换两行行列式变号；某行乘以常数 k 相当于行列式乘以 k；将某行的倍数加到另一行，行列式值不变。</p>\n<ul>\n<li><strong>逆矩阵与矩阵的可逆条件</strong>：</li>\n</ul>\n<p>对于方阵 A，存在方阵 B 使得 AB = BA = I，则称 A 是可逆矩阵，B 是 A 的逆矩阵，记作 A^{-1}。</p>\n<p>*可逆的充要条件：方阵 A 是非奇异的，即 |A| \\neq 0。逆矩阵公式为：A^{-1} = \\frac{1}{|A|} A^*，其中 A^* 是 A 的各元素对应的代数余子式转置所构成的伴随矩阵。*</p>",
            "quizzes": [
              {
                "question": "求二阶行列式 $D = \\begin{vmatrix} 2 & 3 \\\\ 1 & 4 \\end{vmatrix}$ 的值。",
                "options": [
                  {
                    "key": "A",
                    "text": "5"
                  },
                  {
                    "key": "B",
                    "text": "-5"
                  },
                  {
                    "key": "C",
                    "text": "11"
                  },
                  {
                    "key": "D",
                    "text": "-11"
                  }
                ],
                "answer": "A",
                "analysis": "二阶行列式计算公式为 $ad - bc = 2 \\cdot 4 - 3 \\cdot 1 = 5$。"
              },
              {
                "question": "设向量组 $\\alpha_1 = (1, 0, 0), \\alpha_2 = (0, 1, 0), \\alpha_3 = (1, 1, 0)$，该向量组的秩是：",
                "options": [
                  {
                    "key": "A",
                    "text": "1"
                  },
                  {
                    "key": "B",
                    "text": "2"
                  },
                  {
                    "key": "C",
                    "text": "3"
                  },
                  {
                    "key": "D",
                    "text": "0"
                  }
                ],
                "answer": "B",
                "analysis": "$\\alpha_3 = \\alpha_1 + \\alpha_2$，说明三者线性相关，极大线性无关组由 $\\alpha_1$ 和 $\\alpha_2$ 构成，故秩为 2。"
              },
              {
                "question": "设 $A$ 是正交矩阵，则下列说法错误的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "$A^T = A^{-1}$"
                  },
                  {
                    "key": "B",
                    "text": "$|A| = 1$ 或 -1"
                  },
                  {
                    "key": "C",
                    "text": "$A$ 的行向量两两正交且为单位向量"
                  },
                  {
                    "key": "D",
                    "text": "$A$ 的特征值必为 0"
                  }
                ],
                "answer": "D",
                "analysis": "正交矩阵的特征值模长必为 1，不可能为 0（正交矩阵满秩可逆）。"
              },
              {
                "question": "关于对称矩阵的特征值与特征向量，下列性质必正确的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "特征向量必正交"
                  },
                  {
                    "key": "B",
                    "text": "属于不同特征值的特征向量必正交"
                  },
                  {
                    "key": "C",
                    "text": "特征值必为复数"
                  },
                  {
                    "key": "D",
                    "text": "无法对角化"
                  }
                ],
                "answer": "B",
                "analysis": "实对称矩阵的不同特征值对应的特征向量必正交，且实对称矩阵必可对角化。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">行列式与矩阵代数</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：线性方程组与向量空间",
            "intro": "学习关于 线性方程组与向量空间 的核心专业理论。",
            "content": "<ul>\n<li><strong>向量组的线性相关性与基、维数</strong>：</li>\n</ul>\n<p>若向量组 \\alpha_1, \\alpha_2, \\dots, \\alpha_k 存在不全为零的常数序列 c_1, c_2, \\dots, c_k 使得：</p>\n<p>c_1\\alpha_1 + c_2\\alpha_2 + \\dots + c_k\\alpha_k = 0</p>\n<p>则称该向量组线性相关；若只有当所有系数均为 0 时该等式才成立，则称线性无关。向量空间 V 中极大线性无关组的向量个数称为该空间的维数。</p>\n<ul>\n<li><strong>齐次与非齐次线性方程组的解结构</strong>：</li>\n</ul>\n<p>对于线性方程组 Ax = b：</p>\n<ul>\n<li>若 b = 0（齐次方程），一定有解。当 r(A) = n 时只有零解；当 r(A) < n 时有非零解，且其基础解系包含 n - r(A) 个线性无关的特征解。</li>\n<li>若 b \\neq 0（非齐次方程），有解的充要条件是系数矩阵的秩等于增广矩阵的秩，即 r(A) = r(A | b)。在有解的前提下，通解形式为 x = \\eta + \\sum c_i \\xi_i，其中 \\eta 是方程组的一个特解，而 \\sum c_i \\xi_i 是其对应齐次方程的通解。</li>\n</ul>",
            "quizzes": [
              {
                "question": "设矩阵 $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$，$B = \\begin{bmatrix} 2 & 0 \\\\ 1 & 2 \\end{bmatrix}$，计算 $AB$ 的结果。",
                "options": [
                  {
                    "key": "A",
                    "text": "$\\begin{bmatrix} 4 & 4 \\\\ 10 & 8 \\end{bmatrix}$"
                  },
                  {
                    "key": "B",
                    "text": "$\\begin{bmatrix} 4 & 0 \\\\ 3 & 8 \\end{bmatrix}$"
                  },
                  {
                    "key": "C",
                    "text": "$\\begin{bmatrix} 2 & 4 \\\\ 3 & 8 \\end{bmatrix}$"
                  },
                  {
                    "key": "D",
                    "text": "$\\begin{bmatrix} 4 & 4 \\\\ 8 & 10 \\end{bmatrix}$"
                  }
                ],
                "answer": "A",
                "analysis": ""
              },
              {
                "question": "方程组 $x + y = 2, 2x + 2y = 4$ 的解的情况是：",
                "options": [
                  {
                    "key": "A",
                    "text": "无解"
                  },
                  {
                    "key": "B",
                    "text": "唯一解"
                  },
                  {
                    "key": "C",
                    "text": "无数个解"
                  },
                  {
                    "key": "D",
                    "text": "无法确定"
                  }
                ],
                "answer": "C",
                "analysis": "两个方程系数成比例，代表同一条直线，故有无穷多个解。"
              },
              {
                "question": "二次型 $f(x, y, z) = x^2 + 2y^2 + 3z^2$ 的规范形是：",
                "options": [
                  {
                    "key": "A",
                    "text": "$y_1^2 + y_2^2 + y_3^2$"
                  },
                  {
                    "key": "B",
                    "text": "$y_1^2 + 2y_2^2 + 3y_3^2$"
                  },
                  {
                    "key": "C",
                    "text": "$y_1^2 + y_2^2$"
                  },
                  {
                    "key": "D",
                    "text": "$y_1^2$"
                  }
                ],
                "answer": "A",
                "analysis": "由于系数均为正数（1, 2, 3），其正惯性指数为 3，故规范形中平方项系数均为 +1，即 $y_1^2 + y_2^2 + y_3^2$。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">线性方程组与向量空间</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：矩阵的特征值与二次型",
            "intro": "学习关于 矩阵的特征值与二次型 的核心专业理论。",
            "content": "<ul>\n<li><strong>特征值与特征向量的定义与特征多项式</strong>：</li>\n</ul>\n<p>设 A 是 n 阶方阵，若存在非零向量 x 和标量 \\lambda 使得 Ax = \\lambda x，则 \\lambda 称为特征值，x 称为特征向量。特征值可以通过求解特征方程 | \\lambda I - A | = 0 获得。</p>\n<ul>\n<li><strong>对称矩阵的对角化与二次型化简</strong>：</li>\n</ul>\n<p>实对称矩阵必能通过正交变换化为对角矩阵，即存在正交矩阵 P 使得 P^{-1}AP = P^T A P = \\Lambda（其中对角元为特征值）。二次型 f(x) = x^T A x 同样可以通过正交变换或者拉格朗日配方法化为仅含平方项的规范形。</p>\n<p>---</p>",
            "quizzes": [
              {
                "question": "设方阵 $A$ 的行列式 $|A| = 3$，则其伴随矩阵的行列式 $|A^*|$ (若 $A$ 为 3 阶方阵) 的值为：",
                "options": [
                  {
                    "key": "A",
                    "text": "3"
                  },
                  {
                    "key": "B",
                    "text": "9"
                  },
                  {
                    "key": "C",
                    "text": "27"
                  },
                  {
                    "key": "D",
                    "text": "1"
                  }
                ],
                "answer": "B",
                "analysis": "根据公式 $|A^*| = |A|^{n-1}$。此处 $n = 3$，故 $|A^*| = 3^{3-1} = 3^2 = 9$。"
              },
              {
                "question": "若 3 阶方阵 $A$ 的特征值为 1, 2, 3，则 $A$ 的行列式 $|A|$ 的值是：",
                "options": [
                  {
                    "key": "A",
                    "text": "6"
                  },
                  {
                    "key": "B",
                    "text": "0"
                  },
                  {
                    "key": "C",
                    "text": "1"
                  },
                  {
                    "key": "D",
                    "text": "5"
                  }
                ],
                "answer": "A",
                "analysis": "方阵特征值的乘积等于方阵的行列式，即 $|A| = 1 \\cdot 2 \\cdot 3 = 6$。"
              },
              {
                "question": "设 $A$ 为 $m \\times n$ 矩阵，若线性方程组 $Ax = 0$ 仅有零解，则：",
                "options": [
                  {
                    "key": "A",
                    "text": "$A$ 的秩等于 $m$"
                  },
                  {
                    "key": "B",
                    "text": "$A$ 的秩等于 $n$"
                  },
                  {
                    "key": "C",
                    "text": "$A$ 的行数必大于列数"
                  },
                  {
                    "key": "D",
                    "text": "$A$ 为方阵"
                  }
                ],
                "answer": "B",
                "analysis": "齐次方程组仅有零解，意味着未知数个数 $n$ 与矩阵的秩 $r(A)$ 相等，即 $r(A) = n$。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">矩阵的特征值与二次型</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      },
      {
        "title": "概率论与数理统计 (Probability & Mathematical Statistics)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：概率空间与经典公式体系",
            "intro": "学习关于 概率空间与经典公式体系 的核心专业理论。",
            "content": "<ul>\n<li><strong>条件概率与乘法公式</strong>：</li>\n</ul>\n<p>设 A, B 是同一个随机试验中的两个事件，且 P(A) > 0，则在事件 A 发生的条件下，事件 B 发生的条件概率定义为：</p>\n<p>P(B|A) = \\frac{P(AB)}{P(A)}</p>\n<p>由此得出乘法公式：P(AB) = P(A)P(B|A)。</p>\n<ul>\n<li><strong>全概率公式与全样本空间划分</strong>：</li>\n</ul>\n<p>如果事件组 B_1, B_2, \\dots, B_n 两两互不相容，且它们的并集为全样本空间 \\Omega，则称事件组为一个“划分”。对任意事件 A，其发生的总概率可以通过对所有可能起因进行加权平均获得：</p>\n<p>P(A) = \\sum_{i=1}^{n} P(B_i) P(A|B_i)</p>\n<ul>\n<li><strong>贝叶斯公式与后验概率推断</strong>：</li>\n</ul>\n<p>基于已发生的事件反推成因的后验概率：</p>\n<p>P(B_j|A) = \\frac{P(B_j) P(A|B_j)}{\\sum_{i=1}^{n} P(B_i) P(A|B_i)}</p>\n<p>*应用：机器学习中朴素贝叶斯分类器的核心数学基石就是贝叶斯公式。*</p>",
            "quizzes": [
              {
                "question": "抛掷一枚均匀硬币两次，已知至少有一次是正面向上，求两次都正面向上的概率。",
                "options": [
                  {
                    "key": "A",
                    "text": "1/4"
                  },
                  {
                    "key": "B",
                    "text": "1/3"
                  },
                  {
                    "key": "C",
                    "text": "1/2"
                  },
                  {
                    "key": "D",
                    "text": "2/3"
                  }
                ],
                "answer": "B",
                "analysis": "样本空间中投掷两次共有四种结果：{正正, 正反, 反正, 反反}。已知“至少一次正面”缩减样本空间为 {正正, 正反, 反正}，共有 3 种情况。满足“两次都正面”的仅 1 种（正正），故条件概率为 1/3。"
              },
              {
                "question": "随机变量 $X$ 服从闭区间 $[1, 5]$ 上的均匀分布，则 $X$ 的数学期望 $E(X)$ 是：",
                "options": [
                  {
                    "key": "A",
                    "text": "2"
                  },
                  {
                    "key": "B",
                    "text": "3"
                  },
                  {
                    "key": "C",
                    "text": "4"
                  },
                  {
                    "key": "D",
                    "text": "2.5"
                  }
                ],
                "answer": "B",
                "analysis": "均匀分布在 $[a, b]$ 上的期望公式为 $\\frac{a + b}{2}$。本题中 $E(X) = \\frac{1 + 5}{2} = 3$。"
              },
              {
                "question": "下列关于协方差 $Cov(X, Y)$ 与相关系数 $\\rho_{XY}$ 的说法正确的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "独立必不相关"
                  },
                  {
                    "key": "B",
                    "text": "不相关必独立"
                  },
                  {
                    "key": "C",
                    "text": "协方差大于零必定独立"
                  },
                  {
                    "key": "D",
                    "text": "相关系数可以大于 1"
                  }
                ],
                "answer": "A",
                "analysis": "如果两随机变量独立，则必不相关（相关系数为 0）。反之，不相关（线性无关）不一定独立（可能存在复杂的非线性依赖关系）。"
              },
              {
                "question": "置信度（Confidence Level）为 $1 - \\alpha$ 表示：",
                "options": [
                  {
                    "key": "A",
                    "text": "被估计的区间包含参数真值的概率为 $1 - \\alpha$"
                  },
                  {
                    "key": "B",
                    "text": "参数真值落入区间的概率为 $\\alpha$"
                  },
                  {
                    "key": "C",
                    "text": "真实参数在区间外变化的幅度为 $1 - \\alpha$"
                  },
                  {
                    "key": "D",
                    "text": "估计区间绝对包含真值"
                  }
                ],
                "answer": "A",
                "analysis": "置信度指在重复抽样多次构建置信区间中，包含参数真值的区间占全部区间的比例期望为 $1 - \\alpha$。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">概率空间与经典公式体系</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：随机变量的分布与数值特征",
            "intro": "学习关于 随机变量的分布与数值特征 的核心专业理论。",
            "content": "<ul>\n<li><strong>典型离散分布与连续分布</strong>：</li>\n<li><strong>二项分布</strong> X \\sim B(n, p)：表示 n 次独立重复伯努利试验中成功次数的概率。</li>\n<li><strong>正态（高斯）分布</strong> X \\sim N(\\mu, \\sigma^2)：自然界中最常见的连续分布，概率密度函数为对称的钟形曲线。</li>\n<li><strong>数学期望与方差的本质属性</strong>：</li>\n</ul>\n<p>数学期望衡量随机变量的平均中心位置，而方差则测度其波动发散程度。</p>\n<ul>\n<li>期望公式：连续型为 E(X) = \\int_{-\\infty}^{+\\infty} x f(x) dx。</li>\n<li>方差定义：D(X) = E( [X - E(X)]^2 ) = E(X^2) - [E(X)]^2。</li>\n<li>独立随机变量线性组合的方差：若 X 与 Y 独立，D(aX + bY) = a^2 D(X) + b^2 D(Y)。</li>\n</ul>",
            "quizzes": [
              {
                "question": "设事件 $A$ 与 $B$ 相互独立，且 $P(A) = 0.4$，$P(B) = 0.5$，求并事件 $P(A \\cup B)$ 的概率。",
                "options": [
                  {
                    "key": "A",
                    "text": "0.9"
                  },
                  {
                    "key": "B",
                    "text": "0.2"
                  },
                  {
                    "key": "C",
                    "text": "0.7"
                  },
                  {
                    "key": "D",
                    "text": "0.6"
                  }
                ],
                "answer": "C",
                "analysis": "独立时 $P(AB) = P(A)P(B) = 0.4 \\times 0.5 = 0.2$。并事件概率 $P(A \\cup B) = P(A) + P(B) - P(AB) = 0.4 + 0.5 - 0.2 = 0.7$。"
              },
              {
                "question": "设随机变量 $X \\sim N(0, 1)$，且知 $P(X > 1) = \\alpha$，求 $P(-1 < X < 1)$ 的概率。",
                "options": [
                  {
                    "key": "A",
                    "text": "$1 - \\alpha$"
                  },
                  {
                    "key": "B",
                    "text": "$1 - 2\\alpha$"
                  },
                  {
                    "key": "C",
                    "text": "$2 - 2\\alpha$"
                  },
                  {
                    "key": "D",
                    "text": "$\\alpha$"
                  }
                ],
                "answer": "B",
                "analysis": "正态分布关于原点对称，故 $P(X < -1) = P(X > 1) = \\alpha$。因此区间之外的概率之和为 $2\\alpha$。区间内的概率 $P(-1 < X < 1) = 1 - 2\\alpha$。"
              },
              {
                "question": "切比雪夫不等式给出的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "随机变量极限收敛于常数的规律"
                  },
                  {
                    "key": "B",
                    "text": "随机变量偏离期望的概率上限估计"
                  },
                  {
                    "key": "C",
                    "text": "概率密度的精确表达式"
                  },
                  {
                    "key": "D",
                    "text": "样本均值趋于总体均值的定理"
                  }
                ],
                "answer": "B",
                "analysis": "切比雪夫不等式 $P(|X - E(X)| \\ge \\epsilon) \\le \\frac{D(X)}{\\epsilon^2}$ 提供了随机变量偏离期望值大于给定常数时，概率的粗略上限估算。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">随机变量的分布与数值特征</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：数理统计与区间估计",
            "intro": "学习关于 数理统计与区间估计 的核心专业理论。",
            "content": "<ul>\n<li><strong>抽样分布与参数估计（最大似然估计与无偏估计）</strong>：</li>\n</ul>\n<p>参数估计分为点估计和区间估计。</p>\n<ul>\n<li><strong>无偏估计</strong>：若参数点估计量 \\hat{\\theta} 的期望 E(\\hat{\\theta}) = \\theta，则称为无偏估计。</li>\n<li><strong>最大似然估计 (MLE)</strong>：通过构建似然函数并求导求极大值点，使得观测数据发生的概率达到最大的参数值作为估计。</li>\n<li><strong>置信区间与单/双侧假设检验</strong>：</li>\n</ul>\n<p>置信区间用来表征参数的真实值落入某个特定范围的可能概率（置信度 1-\\alpha）。假设检验依据“小概率原理”，通过构造检验统计量，根据显著性水平 \\alpha 判断是否拒绝原假设 H_0。</p>\n<p>---</p>",
            "quizzes": [
              {
                "question": "设随机变量 $X$ 服从参数为 $\\lambda = 2$ 的泊松分布，求 $P(X = 0)$ 的值。",
                "options": [
                  {
                    "key": "A",
                    "text": "$e^{-2}$"
                  },
                  {
                    "key": "B",
                    "text": "$2e^{-2}$"
                  },
                  {
                    "key": "C",
                    "text": "$e^2$"
                  },
                  {
                    "key": "D",
                    "text": "1/2"
                  }
                ],
                "answer": "A",
                "analysis": "泊松分布计算公式为 $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$。当 $k = 0, \\lambda = 2$ 时，$P(X = 0) = \\frac{2^0 e^{-2}}{0!} = e^{-2}$。"
              },
              {
                "question": "若随机变量 $X$ 的方差 $D(X) = 4$，计算 $3X + 2$ 的方差 $D(3X + 2)$。",
                "options": [
                  {
                    "key": "A",
                    "text": "12"
                  },
                  {
                    "key": "B",
                    "text": "14"
                  },
                  {
                    "key": "C",
                    "text": "36"
                  },
                  {
                    "key": "D",
                    "text": "38"
                  }
                ],
                "answer": "C",
                "analysis": "利用方差性质 $D(aX + b) = a^2 D(X)$。因此 $D(3X + 2) = 3^2 D(X) = 9 \\times 4 = 36$。"
              },
              {
                "question": "设总体 $X \\sim N(\\mu, \\sigma^2)$，$x_1, \\dots, x_n$ 是来自总体的样本，其样本均值是总体均值 $\\mu$ 的：",
                "options": [
                  {
                    "key": "A",
                    "text": "有偏估计"
                  },
                  {
                    "key": "B",
                    "text": "无偏估计"
                  },
                  {
                    "key": "C",
                    "text": "非一致估计"
                  },
                  {
                    "key": "D",
                    "text": "无法确定"
                  }
                ],
                "answer": "B",
                "analysis": "样本均值 $E(\\bar{X}) = E( \\frac{1}{n} \\sum X_i ) = \\mu$。由于估计量的数学期望等于被估的真实参数，故为无偏估计。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">数理统计与区间估计</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      },
      {
        "title": "离散数学 (Discrete Mathematics)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：数理逻辑基础",
            "intro": "学习关于 数理逻辑基础 的核心专业理论。",
            "content": "<ul>\n<li><strong>命题公式与等值演算法则</strong>：</li>\n</ul>\n<p>数理逻辑研究真假命题的分立运算。等值式是进行推导变换的核心。常用的等值式包括：</p>\n<ul>\n<li><strong>蕴涵等值式</strong>：P \\to Q \\equiv \\neg P \\vee Q。</li>\n<li><strong>双蕴涵等值式</strong>：P \\leftrightarrow Q \\equiv (P \\to Q) \\wedge (Q \\to P)。</li>\n<li><strong>德·摩根定律</strong>：\\neg(P \\wedge Q) \\equiv \\neg P \\vee \\neg Q，\\neg(P \\vee Q) \\equiv \\neg P \\wedge \\neg Q。</li>\n<li><strong>命题蕴涵式与有效演绎推理</strong>：</li>\n</ul>\n<p>证明公式 A \\Rightarrow B（即 A \\to B 是重言式）代表推理成立。演绎规则包含：肯定前件法（若有 P 且 P \\to Q，则必有 Q）、否定后件法（若有 \\neg Q 且 P \\to Q，则必有 \\neg P）。</p>",
            "quizzes": [
              {
                "question": "命题公式 $P \\to Q$ 的等价式是：",
                "options": [
                  {
                    "key": "A",
                    "text": "$\\neg P \\wedge Q$"
                  },
                  {
                    "key": "B",
                    "text": "$\\neg P \\vee Q$"
                  },
                  {
                    "key": "C",
                    "text": "$P \\vee \\neg Q$"
                  },
                  {
                    "key": "D",
                    "text": "$\\neg P \\to \\neg Q$"
                  }
                ],
                "answer": "B",
                "analysis": "根据蕴涵等值式定义，如果 $P$ 发生则 $Q$ 发生，在逻辑上完全等价于“要么 $P$ 不发生，要么 $Q$ 发生”，即 $\\neg P \\vee Q$。"
              },
              {
                "question": "若一个无向图有 5 个结点，度数分别为 1, 2, 2, 3, 4，则该图共有几条边？",
                "options": [
                  {
                    "key": "A",
                    "text": "6 条"
                  },
                  {
                    "key": "B",
                    "text": "12 条"
                  },
                  {
                    "key": "C",
                    "text": "5 条"
                  },
                  {
                    "key": "D",
                    "text": "7 条"
                  }
                ],
                "answer": "A",
                "analysis": "根据握手定理，度数之和 = 1 + 2 + 2 + 3 + 4 = 12。边数 = 度数之和 / 2 = 12 / 2 = 6。"
              },
              {
                "question": "命题逻辑中，联结词 $\\neg$ 读作非，$P$ 为真时，$\\neg P$ 为：",
                "options": [
                  {
                    "key": "A",
                    "text": "真"
                  },
                  {
                    "key": "B",
                    "text": "假"
                  },
                  {
                    "key": "C",
                    "text": "不确定"
                  },
                  {
                    "key": "D",
                    "text": "既真又假"
                  }
                ],
                "answer": "B",
                "analysis": "逻辑非改变命题的真值。若原命题为真，对其求非则为假。"
              },
              {
                "question": "对于有 $n$ 个顶点的无向完全图 $K_n$，其边数是：",
                "options": [
                  {
                    "key": "A",
                    "text": "$n(n - 1) / 2$"
                  },
                  {
                    "key": "B",
                    "text": "$n(n - 1)$"
                  },
                  {
                    "key": "C",
                    "text": "$n^2 / 2$"
                  },
                  {
                    "key": "D",
                    "text": "$n - 1$"
                  }
                ],
                "answer": "A",
                "analysis": "完全图中任意两个顶点间均有一条边，边数相当于在 $n$ 个元素中任选 2 个的组合数，即 $C(n, 2) = \\frac{n(n - 1)}{2}$。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">数理逻辑基础</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：集合论与二元关系",
            "intro": "学习关于 集合论与二元关系 的核心专业理论。",
            "content": "<ul>\n<li><strong>笛卡尔积与二元关系定义</strong>：</li>\n</ul>\n<p>两个集合 A 和 B 的笛卡尔积表示为 A \\times B = \\{ \\langle a, b \\rangle \\mid a \\in A \\wedge b \\in B \\}。笛卡尔积的一个子集 R \\subseteq A \\times B 称为从 A 到 B 的一个二元关系。</p>\n<ul>\n<li><strong>等价关系与偏序关系及其性质</strong>：</li>\n<li><strong>等价关系</strong>：关系 R 在集合 A 上同时满足：自反性（对任意 x，有 xRx）、对称性（若 xRy，则有 yRx）、传递性（若 xRy \\wedge yRz，则有 xRz）。等价关系可以对集合进行非空且互不相交的“等价类”划分。</li>\n<li><strong>偏序关系</strong>：同时满足自反性、反对称性（若 xRy \\wedge yRx，则必有 x = y）和传递性。偏序关系用哈斯图（Hasse Diagram）表示。</li>\n</ul>",
            "quizzes": [
              {
                "question": "设集合 $A = \\{1, 2\\}$，$B = \\{a\\}$，计算 $A \\times B$ 的结果。",
                "options": [
                  {
                    "key": "A",
                    "text": "$\\{1, 2, a\\}$"
                  },
                  {
                    "key": "B",
                    "text": "$\\{ \\langle 1, a \\rangle, \\langle 2, a \\rangle \\}$"
                  },
                  {
                    "key": "C",
                    "text": "$\\{ \\langle a, 1 \\rangle, \\langle a, 2 \\rangle \\}$"
                  },
                  {
                    "key": "D",
                    "text": "$\\{ \\langle 1, 2 \\rangle, \\langle a \\rangle \\}$"
                  }
                ],
                "answer": "B",
                "analysis": "由笛卡尔积定义，乘积集合由 $A$ 的元素作为第一元，$B$ 的元素作为第二元组成的有序对集合：$\\{ \\langle 1, a \\rangle, \\langle 2, a \\rangle \\}$。"
              },
              {
                "question": "一个连通的无向图是欧拉图的充分必要条件是：",
                "options": [
                  {
                    "key": "A",
                    "text": "含有奇数度结点的个数为 0"
                  },
                  {
                    "key": "B",
                    "text": "含有奇数度结点的个数为 2"
                  },
                  {
                    "key": "C",
                    "text": "含有偶数度结点的个数为 0"
                  },
                  {
                    "key": "D",
                    "text": "极大完全子图为欧拉图"
                  }
                ],
                "answer": "A",
                "analysis": "欧拉图（能一笔画回到起点）的充要条件是图连通且所有结点的度数均为偶数（即奇数度结点个数为 0）。若奇数度结点为 2，则为有向/无向欧拉通路，但不是欧拉回路。"
              },
              {
                "question": "设 $R$ 和 $S$ 是集合 $A$ 上的等价关系，则下列哪个关系也必定是等价关系？",
                "options": [
                  {
                    "key": "A",
                    "text": "$R \\cup S$"
                  },
                  {
                    "key": "B",
                    "text": "$R \\cap S$"
                  },
                  {
                    "key": "C",
                    "text": "$R - S$"
                  },
                  {
                    "key": "D",
                    "text": "$R \\circ S$"
                  }
                ],
                "answer": "B",
                "analysis": "两个等价关系的交集仍是等价关系（可验证其自反、对称、传递性依然保持）。并集通常不具备传递性，故不一定是等价关系。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">集合论与二元关系</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：图论基础知识",
            "intro": "学习关于 图论基础知识 的核心专业理论。",
            "content": "<ul>\n<li><strong>无向图的度数与握手定理（Handshaking Lemma）</strong>：</li>\n</ul>\n<p>设无向图 G = (V, E)，图中顶点的度数 d(v) 代表连接到该顶点的边数。握手定理指出，图中所有结点的度数之和等于边数的两倍：</p>\n<p>\\sum_{v \\in V} d(v) = 2|E|</p>\n<p>*推论：在任何图（无向图或有向图）中，奇数度结点的总个数必然为偶数。*</p>\n<ul>\n<li><strong>树的性质与图的遍历（欧拉通路与哈密顿通路）</strong>：</li>\n<li><strong>树</strong>：树是没有简单回路的连通无向图。对于一个包含 n 个结点的无向图，如果它是树，则必定具有且仅有 n-1 条边。</li>\n<li><strong>欧拉通路与回路</strong>：通过图的每一条边恰好一次的路径/回路。连通图存在欧拉回路的充要条件是所有顶点的度数均为偶数。</li>\n<li><strong>哈密顿通路与回路</strong>：通过图的每一个顶点恰好一次的路径/回路。目前尚无多项式时间内判定的充要条件（是经典的 NP 完全问题）。</li>\n</ul>\n<p>---</p>",
            "quizzes": [
              {
                "question": "设关系 $R = \\{ \\langle 1, 1 \\rangle, \\langle 2, 2 \\rangle, \\langle 1, 2 \\rangle, \\langle 2, 1 \\rangle \\}$ 定义在集合 $A = \\{1, 2\\}$ 上，则 $R$ 是：",
                "options": [
                  {
                    "key": "A",
                    "text": "等价关系"
                  },
                  {
                    "key": "B",
                    "text": "偏序关系"
                  },
                  {
                    "key": "C",
                    "text": "函数关系"
                  },
                  {
                    "key": "D",
                    "text": "仅具自反性"
                  }
                ],
                "answer": "A",
                "analysis": ""
              },
              {
                "question": "若一个连通无向图是一棵树，且有 10 个结点，则该树有几条边？",
                "options": [
                  {
                    "key": "A",
                    "text": "8 条"
                  },
                  {
                    "key": "B",
                    "text": "9 条"
                  },
                  {
                    "key": "C",
                    "text": "10 条"
                  },
                  {
                    "key": "D",
                    "text": "11 条"
                  }
                ],
                "answer": "B",
                "analysis": "根据树的图论性质，$n$ 个结点的树，边数恒为 $n - 1$。$10 - 1 = 9$。"
              },
              {
                "question": "设 $A$ 和 $B$ 是两个集合，若 $A \\cap B = A$，则：",
                "options": [
                  {
                    "key": "A",
                    "text": "$A \\subseteq B$"
                  },
                  {
                    "key": "B",
                    "text": "$B \\subseteq A$"
                  },
                  {
                    "key": "C",
                    "text": "$A$ 与 $B$ 互质"
                  },
                  {
                    "key": "D",
                    "text": "$A = \\emptyset$"
                  }
                ],
                "answer": "A",
                "analysis": "交集结果为 $A$，说明 $A$ 中的所有元素均属于 $B$，即 $A$ 是 $B$ 的子集（$A \\subseteq B$）。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">图论基础知识</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      }
    ]
  },
  {
    "category": "计算机基础",
    "courses": [
      {
        "title": "计算机导论 (Introduction to Computer Science)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：计算机起源与图灵机模型",
            "intro": "学习关于 计算机起源与图灵机模型 的核心专业理论。",
            "content": "<ul>\n<li><strong>图灵机（Turing Machine）的理论本质</strong>：</li>\n</ul>\n<p>由阿兰·图灵于 1936 年提出的图灵机是一种抽象计算模型，用以精确界定“可计算性”的边界。一个形式化的图灵机包含：</p>\n<ul>\n<li><strong>一条无限长的带子（Tape）</strong>：划分为一个个方格，每个方格可写入特定字母表中的符号。</li>\n<li><strong>一个读写头（Head）</strong>：可在带子上左右移动，读取或改写当前方格的内容。</li>\n<li><strong>一个状态寄存器（State Register）</strong>：保存图灵机当前所处的有限状态之一。</li>\n<li><strong>一个控制规则表（Transition Function）</strong>：依据“当前状态”和“读写的符号”，决定下一步要写入的符号、读写头的移动方向（左/右/不动）以及转入的新状态。</li>\n</ul>\n<p>*图灵完备性（Turing Completeness）*：若一个计算系统能够模拟任何单带图灵机的计算过程，则称其是图灵完备的。这构成了现代通用程序设计语言的核心判定标准。</p>\n<ul>\n<li><strong>可计算性与停机问题（Halting Problem）</strong>：</li>\n</ul>\n<p>停机问题是指：是否存在一个通用算法，能接受任意程序及其输入作为参数，并在有限时间内判定该程序在给定输入下是否会终止运行。图灵通过反证法和对角线论证法证明了<strong>停机问题是不可判定（Undecidable）的</strong>。这确立了算法计算能力的终极界限，即存在计算机永远无法解决的问题。</p>",
            "quizzes": [
              {
                "question": "图灵机的科学定义中，决定图灵机下一步动作的三个要素不包括：",
                "options": [
                  {
                    "key": "A",
                    "text": "读写头当前指向的带子符号"
                  },
                  {
                    "key": "B",
                    "text": "状态寄存器当前保存的状态"
                  },
                  {
                    "key": "C",
                    "text": "纸带的总物理长度"
                  },
                  {
                    "key": "D",
                    "text": "控制规则表中的转移函数"
                  }
                ],
                "answer": "C",
                "analysis": "图灵机在理论模型中纸带是无限长的，其下一步动作由读写头当前字符、当前内部状态以及转移函数定义，与纸带的物理长度无关。"
              },
              {
                "question": "按照 IEEE 754 标准，单精度浮点数的指数位偏置常数（Bias）是：",
                "options": [
                  {
                    "key": "A",
                    "text": "127"
                  },
                  {
                    "key": "B",
                    "text": "128"
                  },
                  {
                    "key": "C",
                    "text": "1023"
                  },
                  {
                    "key": "D",
                    "text": "1024"
                  }
                ],
                "answer": "A",
                "analysis": "IEEE 754 单精度浮点数（32位）的指数占 8 位，其偏置值规定为 $2^{8-1} - 1 = 127$。双精度（64位）的指数占 11 位，偏置值为 1023。"
              },
              {
                "question": "若需要频繁在序列中间插入和删除元素，且不关心随机访问速度，应首选的数据结构是：",
                "options": [
                  {
                    "key": "A",
                    "text": "顺序数组"
                  },
                  {
                    "key": "B",
                    "text": "单向链表"
                  },
                  {
                    "key": "C",
                    "text": "二叉搜索树"
                  },
                  {
                    "key": "D",
                    "text": "循环队列"
                  }
                ],
                "answer": "B",
                "analysis": "顺序数组中间插入删除需移动大量元素（复杂度 $O(n)$），而链表仅需修改指针指向（复杂度 $O(1)$），但链表不支持 $O(1)$ 的随机访问。"
              },
              {
                "question": "红黑树（Red-Black Tree）是一种：",
                "options": [
                  {
                    "key": "A",
                    "text": "二叉完全树"
                  },
                  {
                    "key": "B",
                    "text": "自平衡二叉搜索树"
                  },
                  {
                    "key": "C",
                    "text": "散列冲突解决树"
                  },
                  {
                    "key": "D",
                    "text": "多叉平衡路树"
                  }
                ],
                "answer": "B",
                "analysis": "红黑树是一种自平衡的二叉搜索树，通过对节点着色（红/黑）及旋转调整，确保从根到叶子最长路径不超过最短路径的两倍，使查找、插入、删除的渐进复杂度稳定在 $O(\\log n)$。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">计算机起源与图灵机模型</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：信息表示与数制系统",
            "intro": "学习关于 信息表示与数制系统 的核心专业理论。",
            "content": "<ul>\n<li><strong>数值与非数值信息的二进制编码</strong>：</li>\n</ul>\n<p>计算机底层的所有信息流均以高低电平构成的二进制形式存储与传输。</p>\n<ul>\n<li><strong>原码、反码、补码</strong>：</li>\n<li>*原码*：最高位为符号位（0正1负），其余位代表数值绝对值。</li>\n<li>*反码*：正数反码等于原码；负数反码为原码的符号位不变，数值位按位取反。</li>\n<li>*补码*：正数补码等于原码；负数补码为反码加1。<strong>补码的设计解决了二进制减法运算以及“正负零”在编码上的双重表示问题</strong>，使得加减法可以通过统一的加法电路完成。</li>\n<li><strong>浮点数 IEEE 754 标准</strong>：</li>\n</ul>\n<p>一个单精度（32位）浮点数包含 1 位符号位 S、8 位指数偏置位 E（偏置常数为 127）和 23 位尾数位 M。其数值表示为：</p>\n<p>V = (-1)^S \\times 1.M \\times 2^{E - 127}</p>\n<p>这种结构实现了在大范围数值空间内保持相对稳定的有效精度。</p>\n<ul>\n<li><strong>非数值字符编码（ASCII, Unicode, UTF-8）</strong>：</li>\n</ul>\n<p>Unicode 规范了全球所有文字的统一数字代号，而 UTF-8 则是其最流行的<strong>变长字符编码实现</strong>，用 1 到 4 个字节表示字符，兼容 7 位的 ASCII 编码，极大节省了英文字符的存储空间与传输带宽。</p>",
            "quizzes": [
              {
                "question": "停机问题（Halting Problem）由图灵证明是不可判定的。关于停机问题，以下叙述正确的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "可以通过编写一个复杂的程序，完美解决所有其他程序的停机判定"
                  },
                  {
                    "key": "B",
                    "text": "证明过程采用了类似于康托尔对角线法的反证法"
                  },
                  {
                    "key": "C",
                    "text": "只要计算机的算力无限大，停机问题就可迎刃而解"
                  },
                  {
                    "key": "D",
                    "text": "停机问题属于多项式时间可解的 P 类问题"
                  }
                ],
                "answer": "B",
                "analysis": "停机问题的不可解性是逻辑局限而非算力问题，图灵在 1936 年利用自指反证法（类似于康托尔对角线法）证明了不存在能判定所有程序是否停机的通用算法。"
              },
              {
                "question": "UTF-8 编码是一种：",
                "options": [
                  {
                    "key": "A",
                    "text": "固定长度的 8 位字符编码"
                  },
                  {
                    "key": "B",
                    "text": "固定长度的 16 位字符编码"
                  },
                  {
                    "key": "C",
                    "text": "针对 Unicode 的可变长度字符编码"
                  },
                  {
                    "key": "D",
                    "text": "专门针对中文字符设计的编码"
                  }
                ],
                "answer": "C",
                "analysis": "UTF-8 是 Unicode 的变长字符编码实现，可以使用 1 至 4 个字节来表示一个字符，兼容 ASCII，是现代互联网最广泛的文本编码。"
              },
              {
                "question": "在一个具有 $n$ 个结点的二叉查找树（BST）中，最坏情况下的查找时间复杂度为：",
                "options": [
                  {
                    "key": "A",
                    "text": "$O(1)$"
                  },
                  {
                    "key": "B",
                    "text": "$O(\\log n)$"
                  },
                  {
                    "key": "C",
                    "text": "$O(n)$"
                  },
                  {
                    "key": "D",
                    "text": "$O(n \\log n)$"
                  }
                ],
                "answer": "C",
                "analysis": "当二叉树退化为单支树（类似于链表）时，查找需要遍历所有节点，时间复杂度退化为 $O(n)$。平衡树（如红黑树）可将其控制在 $O(\\log n)$。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">信息表示与数制系统</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：算法与数据结构基底",
            "intro": "学习关于 算法与数据结构基底 的核心专业理论。",
            "content": "<ul>\n<li><strong>时间与空间复杂度（渐进记号 O）</strong>：</li>\n</ul>\n<p>用以评估算法随输入规模 n 增长而表现出的资源消耗趋势。大 O 记号代表最坏情况下的渐进上界。常见复杂度排序为：</p>\n<p>O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(2^n) < O(n!)</p>\n<ul>\n<li><strong>经典数据结构划分</strong>：</li>\n<li><strong>线性结构</strong>：数组（连续存储，随机访问 O(1)）、链表（链式存储，插入删除 O(1)、查找 O(n)）、栈（后进先出 LIFO，用于递归与表达式求值）、队列（先进先出 FIFO，用于缓冲与并发任务调度）。</li>\n<li><strong>树形结构</strong>：二叉树、二叉搜索树（BST，左子树小于根，右子树大于根）、平衡树（如 AVL 树、红黑树，确保查找效率稳定在 O(\\log n)）。</li>\n<li><strong>图形结构</strong>：由顶点和边构成，常用邻接矩阵或邻接表存储。经典遍历算法为广度优先搜索（BFS，利用队列，寻找无权图最短路径）与深度优先搜索（DFS，利用栈/递归，寻找连通性）。</li>\n</ul>\n<p>---</p>",
            "quizzes": [
              {
                "question": "八位二进制数 `10000000` 若代表补码，其对应的十进制真值为：",
                "options": [
                  {
                    "key": "A",
                    "text": "0"
                  },
                  {
                    "key": "B",
                    "text": "-128"
                  },
                  {
                    "key": "C",
                    "text": "-0"
                  },
                  {
                    "key": "D",
                    "text": "-127"
                  }
                ],
                "answer": "B",
                "analysis": "在8位补码中，`10000000` 被定义为最小负数 $-2^{n-1} = -128$。此时符号位为 1，且不能直接按常规反码加1反推。"
              },
              {
                "question": "在评估算法效率时，大 $O$ 表示法通常表示算法在：",
                "options": [
                  {
                    "key": "A",
                    "text": "最好情况下的运行时间"
                  },
                  {
                    "key": "B",
                    "text": "平均情况下的运行时间"
                  },
                  {
                    "key": "C",
                    "text": "最坏情况下的渐进上界"
                  },
                  {
                    "key": "D",
                    "text": "空间消耗的最大极限值"
                  }
                ],
                "answer": "C",
                "analysis": "大 $O$ 记号定义的是渐进上界，用来描述在输入规模趋向无穷大时，算法最坏情况下的时间或空间增长率。"
              },
              {
                "question": "利用广度优先搜索（BFS）遍历图时，最适合辅助实现的底层数据结构是：",
                "options": [
                  {
                    "key": "A",
                    "text": "栈（Stack）"
                  },
                  {
                    "key": "B",
                    "text": "队列（Queue）"
                  },
                  {
                    "key": "C",
                    "text": "优先级队列（Priority Queue）"
                  },
                  {
                    "key": "D",
                    "text": "散列表（Hash Table）"
                  }
                ],
                "answer": "B",
                "analysis": "BFS 采用分层剥离的遍历方式，先入队的节点先进行邻接点扩展，符合先进先出特征，因此使用队列实现最为自然。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">算法与数据结构基底</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      },
      {
        "title": "计算机组成与体系结构 (Computer Organization & Architecture)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：冯·诺依曼结构体系及其瓶颈",
            "intro": "学习关于 冯·诺依曼结构体系及其瓶颈 的核心专业理论。",
            "content": "<ul>\n<li><strong>经典五大部件</strong>：</li>\n</ul>\n<p>运算器（ALU，执行算术与逻辑运算）、控制器（CU，产生微控制信号）、存储器（Memory，存放指令和数据）、输入设备（Input Devices）与输出设备（Output Devices）。</p>\n<ul>\n<li><strong>“存储程序”控制原理</strong>：</li>\n</ul>\n<p>计算机在工作前，指令和数据共同放置在存储器中。控制器内部的程序计数器（PC）存放下一条指令的地址。执行时，控制器依次发出控制信号，从存储器中读取指令送到指令寄存器（IR），经译码后，发出微操作序列控制运算器和寄存器组工作。</p>\n<ul>\n<li><strong>冯·诺依曼瓶颈（Von Neumann Bottleneck）</strong>：</li>\n</ul>\n<p>由于<strong>指令和数据共享同一条系统总线进行传输</strong>，且 CPU 的运算速度提升远快于内存（DRAM）带宽的增加，导致 CPU 在等待总线数据传输时经常处于闲置状态。这一限制被称为“内存墙”或“冯·诺依曼瓶颈”。现代体系结构通过引入哈佛结构（指令与数据总线分离）以及多级 Cache 机制来缓解这一冲突。</p>",
            "quizzes": [
              {
                "question": "冯·诺依曼结构计算机的设计核心思想是：",
                "options": [
                  {
                    "key": "A",
                    "text": "硬件采用超大规模集成电路"
                  },
                  {
                    "key": "B",
                    "text": "指令与数据分别存放在两个不同的存储器中"
                  },
                  {
                    "key": "C",
                    "text": "存储程序并按顺序执行"
                  },
                  {
                    "key": "D",
                    "text": "采用多核架构进行并行计算"
                  }
                ],
                "answer": "C",
                "analysis": "冯·诺依曼结构的最根本特征是“存储程序”控制原理，即程序指令与数据一并存放在存储器中，由控制器自动按顺序读取并执行。"
              },
              {
                "question": "以下流水线冲突解决方法中，主要用于解决数据冲突（Data Hazard）的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "旁路数据转发（Forwarding / Bypassing）"
                  },
                  {
                    "key": "B",
                    "text": "引入分支延迟槽（Delay Slot）"
                  },
                  {
                    "key": "C",
                    "text": "动态分支预测器（Branch Predictor）"
                  },
                  {
                    "key": "D",
                    "text": "增加指令 Cache 端口"
                  }
                ],
                "answer": "A",
                "analysis": "旁路转发技术在运算器计算完成后，直接将结果从流水线的暂存器引回输入端，无需等待写回寄存器阶段，从而消除了 RAW 数据冲突。B 和 C 用于控制冲突，D 用于结构冲突。"
              },
              {
                "question": "存储系统设计中，“局部性原理”是其核心支柱。局部性原理通常划分为：",
                "options": [
                  {
                    "key": "A",
                    "text": "时间局部性与物理局部性"
                  },
                  {
                    "key": "B",
                    "text": "时间局部性与空间局部性"
                  },
                  {
                    "key": "C",
                    "text": "空间局部性与逻辑局部性"
                  },
                  {
                    "key": "D",
                    "text": "静态局部性与动态局部性"
                  }
                ],
                "answer": "B",
                "analysis": "局部性原理包括时间局部性（刚被访问的信息不久可能再次被访问）和空间局部性（被访问信息相邻位置的信息不久后可能被访问）。"
              },
              {
                "question": "在组相联映射 Cache 中，当出现缓存不命中且 Cache 已满时，最符合“将最近最少使用的数据行换出”的算法是：",
                "options": [
                  {
                    "key": "A",
                    "text": "FIFO (先进先出)"
                  },
                  {
                    "key": "B",
                    "text": "LIFO (后进先出)"
                  },
                  {
                    "key": "C",
                    "text": "LRU (最近最少使用)"
                  },
                  {
                    "key": "D",
                    "text": "Random (随机替换)"
                  }
                ],
                "answer": "C",
                "analysis": "LRU (Least Recently Used) 算法追踪缓存行自上次被访问以来所经历的时间，将时间最长未被访问的行替换出去，非常符合局部性原理的特征。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">冯·诺依曼结构体系及其瓶颈</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：CPU 微架构与指令流水线",
            "intro": "学习关于 CPU 微架构与指令流水线 的核心专业理论。",
            "content": "<ul>\n<li><strong>经典指令执行周期</strong>：</li>\n</ul>\n<p>1. <strong>取指 (IF)</strong>：从 PC 指向的内存地址读出指令存入 IR，同时 PC 递增。</p>\n<p>2. <strong>译码 (ID)</strong>：对 IR 中的指令进行操作码分析，并读取寄存器堆。</p>\n<p>3. <strong>执行 (EX)</strong>：通过 ALU 完成实际的运算或地址计算。</p>\n<p>4. <strong>访存 (MEM)</strong>：若是访存指令，则对外部数据内存进行读写。</p>\n<p>5. <strong>写回 (WB)</strong>：将执行或读出的结果写回到通用寄存器堆中。</p>\n<ul>\n<li><strong>流水线冲突（Hazards）分类及解决方案</strong>：</li>\n</ul>\n<p>指令流水线通过重叠各阶段执行来提升吞吐量，但由于资源与逻辑限制，会产生三类冲突：</p>\n<ul>\n<li><strong>结构冲突（Structural Hazard）</strong>：硬件资源重叠使用（如单端口存储器同时面临取指与访存）。*解决：硬件多复制资源或指令与数据 Cache 分离。*</li>\n<li><strong>数据冲突（Data Hazard）</strong>：当前指令依赖前一条尚未写回寄存器的指令结果。包括 RAW（写后读）、WAR（读后写）、WAW（写后写）。*解决：采用旁路技术（Bypassing/Forwarding）直接转发数据，或在编译器中插入空操作（NOP）/空转挂起（Stall）。*</li>\n<li><strong>控制冲突（Control Hazard）</strong>：分支/跳转指令尚未确定下条指令地址，导致流水线取入错误指令。*解决：采用分支预测技术（静态/动态预测）或分支延迟槽。*</li>\n</ul>",
            "quizzes": [
              {
                "question": "解决“冯·诺依曼瓶颈”（即内存墙）的现代硬件优化手段不包括：",
                "options": [
                  {
                    "key": "A",
                    "text": "引入多级高带宽的 Cache（缓存）结构"
                  },
                  {
                    "key": "B",
                    "text": "采用指令总线与数据总线分离的哈佛结构"
                  },
                  {
                    "key": "C",
                    "text": "提高 CPU 的主频与运算器位宽"
                  },
                  {
                    "key": "D",
                    "text": "采用片上片外存集成三维堆叠技术（如 3D V-Cache）"
                  }
                ],
                "answer": "C",
                "analysis": "提高 CPU 主频和位宽反而会拉大 CPU 与内存之间的速度鸿沟，加剧冯·诺依曼瓶颈。而多级缓存、哈佛结构和物理堆叠带宽才是主要缓解策略。"
              },
              {
                "question": "在多处理器系统的 MESI 缓存一致性协议中，当某个缓存行状态为 M (Modified) 时，说明：",
                "options": [
                  {
                    "key": "A",
                    "text": "该行数据与主存一致，但可能存在于其他核心的缓存中"
                  },
                  {
                    "key": "B",
                    "text": "该行数据已被修改，且与主存不一致，当前核心独占此副本"
                  },
                  {
                    "key": "C",
                    "text": "该行数据已经损坏，急需从主存重新拉取"
                  },
                  {
                    "key": "D",
                    "text": "别的核心修改了数据，导致本核心缓存行失效"
                  }
                ],
                "answer": "B",
                "analysis": "M 代表已修改（Modified）状态，此时该行数据仅保存在当前缓存中，与主存储器数据不一致，当前核心负责将来将其写回主存。"
              },
              {
                "question": "在三级 Cache 架构中，如果一级 Cache 缺失，二级 Cache 命中，其惩罚和访问延迟关系是：",
                "options": [
                  {
                    "key": "A",
                    "text": "访问时间大幅增加，但仍低于访问主内存的延迟"
                  },
                  {
                    "key": "B",
                    "text": "与访问主内存的延迟完全等同"
                  },
                  {
                    "key": "C",
                    "text": "不会产生任何时间损耗"
                  },
                  {
                    "key": "D",
                    "text": "导致 CPU 强制复位"
                  }
                ],
                "answer": "A",
                "analysis": "Cache 是逐级访问的。L1 未命中会转去查询 L2，若 L2 命中则无需访问慢速的 L3 或系统主存，因此延迟低于内存访问，但高于 L1 命中。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">CPU 微架构与指令流水线</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：存储器层次结构与 Cache 一致性协议",
            "intro": "学习关于 存储器层次结构与 Cache 一致性协议 的核心专业理论。",
            "content": "<ul>\n<li><strong>多级存储金字塔</strong>：</li>\n</ul>\n<p>利用“局部性原理”（时间局部性和空间局部性），采用寄存器、L1/L2/L3 Cache、主存、辅存（固态/机械硬盘）的结构，实现“大容量、高速度、低成本”的存储系统。</p>\n<ul>\n<li><strong>Cache 映射与替换策略</strong>：</li>\n</ul>\n<p>映射方式有全相联映射、直接映射与组相联映射（折中方案，性能最好）。当 Cache 满时，使用 LRU（最近最少使用）、FIFO 等算法进行行置换。</p>\n<ul>\n<li><strong>多核缓存一致性 MESI 协议</strong>：</li>\n</ul>\n<p>在对称多处理器（SMP）系统中，每个 CPU 核心有独立的 L1/L2 缓存，而数据共享于同一内存。MESI 协议通过监听总线，定义了缓存行（Cache Line）的四种状态：</p>\n<ul>\n<li><strong>M (Modified, 已修改)</strong>：行数据有效，但已被本地核心修改，与主存不一致。本地核心拥有唯一副本，负责写回主存。</li>\n<li><strong>E (Exclusive, 独占)</strong>：行数据有效，与主存一致。仅存在于当前核心的 Cache 中。</li>\n<li><strong>S (Shared, 共享)</strong>：行数据有效，与主存一致。同时存在于多个核心的 Cache 中。</li>\n<li><strong>I (Invalid, 无效)</strong>：该缓存行的数据已失效，不能使用。</li>\n</ul>\n<p>*状态转移机理*：当核心 A 试图写入处于 S 状态的行时，它必须通过总线向其他核心广播失效信号（使其他核对应行转为 I），再将本地行状态修改为 M。这确保了在任意时刻，所有核心看到的共享变量是一致的。</p>\n<p>---</p>",
            "quizzes": [
              {
                "question": "指令流水线执行过程中，由于多个阶段同时需要访问同一个物理部件（例如单端口内存）而引起的冲突称为：",
                "options": [
                  {
                    "key": "A",
                    "text": "数据冲突（Data Hazard）"
                  },
                  {
                    "key": "B",
                    "text": "控制冲突（Control Hazard）"
                  },
                  {
                    "key": "C",
                    "text": "结构冲突（Structural Hazard）"
                  },
                  {
                    "key": "D",
                    "text": "物理冲突（Physical Hazard）"
                  }
                ],
                "answer": "C",
                "analysis": "结构冲突是指多条指令在同一时刻争用同一物理硬件资源（如同一存储器端口或同一个寄存器读写端口）。"
              },
              {
                "question": "若多处理器系统中的核心 A 想要写入一个在本地缓存中处于 S (Shared) 状态的缓存行，根据 MESI 协议，它必须：",
                "options": [
                  {
                    "key": "A",
                    "text": "直接修改，无需告知总线"
                  },
                  {
                    "key": "B",
                    "text": "先将其状态修改为 E，再转为 M"
                  },
                  {
                    "key": "C",
                    "text": "向总线广播失效信号，使其他核对应的缓存行状态转为 I，再修改本地行状态为 M"
                  },
                  {
                    "key": "D",
                    "text": "将数据先写入内存，由内存通知其他核心更新"
                  }
                ],
                "answer": "C",
                "analysis": "处于共享（S）状态的行在其他核心中也存有副本。为保证一致性，写入前必须发送失效命令使其他核的对应行变为无效（I），然后自己独占修改并转为 M。"
              },
              {
                "question": "现代 CPU 设计中，RISC（精简指令集）架构相比 CISC（复杂指令集）架构，其核心特点是：",
                "options": [
                  {
                    "key": "A",
                    "text": "拥有大量长度不固定、功能极其复杂的指令"
                  },
                  {
                    "key": "B",
                    "text": "大多数指令可在单周期内完成，便于流水线化，且仅通过 Load/Store 指令访问内存"
                  },
                  {
                    "key": "C",
                    "text": "极其依赖硬件译码器来执行高级循环操作"
                  },
                  {
                    "key": "D",
                    "text": "指令不支持寄存器寻址"
                  }
                ],
                "answer": "B",
                "analysis": "RISC 架构推崇“精简、等长”的指令，绝大多数指令在一个周期内完成运算，并规定只有专用的 Load/Store 指令可以读写内存，其余运算均在寄存器间进行，极利于指令流水线化。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">存储器层次结构与 Cache 一致性协议</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      },
      {
        "title": "操作系统 (Operating Systems)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：进程与线程管理",
            "intro": "学习关于 进程与线程管理 的核心专业理论。",
            "content": "<ul>\n<li><strong>进程与线程的本质区别</strong>：</li>\n</ul>\n<p>进程（Process）是操作系统分配资源（如内存空间、文件描述符描述表）的最小单位；线程（Thread）是 CPU 调度和执行的最小单位。一个进程可以包含多个线程，它们共享进程的地址空间和全局资源，但每个线程拥有独立的程序计数器（PC）、寄存器上下文以及栈空间。</p>\n<ul>\n<li><strong>进程的状态变迁模型</strong>：</li>\n</ul>\n<p>经典的三态模型包括：运行态（Running，占用 CPU）、就绪态（Ready，具备运行条件，等待 CPU 分配）和阻塞态（Blocked/Waiting，等待某事件发生如 I/O 读写，不具备运行条件）。</p>\n<ul>\n<li><strong>同步机制与死锁（Deadlock）避免</strong>：</li>\n</ul>\n<p>多线程并发访问共享资源会引起竞争冒险，需使用信号量（Semaphore）、互斥锁（Mutex）等进行控制。若控制不当会发生死锁。</p>\n<p>*死锁的四个必要条件*：互斥、占有且等待、非抢占、循环等待。</p>\n<p>*死锁避免算法*：狄克斯特拉提出的<strong>银行家算法（Banker's Algorithm）</strong>。每次分配资源前，系统会进行试分配，并通过计算矩阵判断系统是否依然处于“安全状态”。只有处于安全状态，才真正予以资源分配，从而动态预防死锁。</p>",
            "quizzes": [
              {
                "question": "线程作为 CPU 调度的最小基本单位，它与所属进程共享的资源是：",
                "options": [
                  {
                    "key": "A",
                    "text": "线程栈空间与程序计数器（PC）"
                  },
                  {
                    "key": "B",
                    "text": "通用寄存器组与栈指针"
                  },
                  {
                    "key": "C",
                    "text": "进程的虚拟内存地址空间与打开的文件句柄"
                  },
                  {
                    "key": "D",
                    "text": "独立的线程局部变量副本"
                  }
                ],
                "answer": "C",
                "analysis": "同一个进程的线程共享该进程的地址空间、全局变量、堆内存以及打开的文件描述符；但每个线程必须独享栈空间、程序计数器和寄存器上下文以维持独立的执行路径。"
              },
              {
                "question": "银行家算法（Banker's Algorithm）在操作系统中被用来：",
                "options": [
                  {
                    "key": "A",
                    "text": "检测死锁是否发生"
                  },
                  {
                    "key": "B",
                    "text": "动态避免死锁的发生"
                  },
                  {
                    "key": "C",
                    "text": "解除已经发生的死锁"
                  },
                  {
                    "key": "D",
                    "text": "预防死锁（破坏死锁条件）"
                  }
                ],
                "answer": "B",
                "analysis": "银行家算法是一种著名的死锁避免（Deadlock Avoidance）算法。它在每次资源申请时，通过计算系统是否安全来决定是否分发资源，从而将系统维持在安全状态以避免死锁。"
              },
              {
                "question": "在机械硬盘的 I/O 调度中，SSTF（最短寻道时间优先）算法的主要缺点是：",
                "options": [
                  {
                    "key": "A",
                    "text": "平均寻道时间是所有算法中最长的"
                  },
                  {
                    "key": "B",
                    "text": "导致处于外圈或内圈的磁道请求发生“饿死”现象"
                  },
                  {
                    "key": "C",
                    "text": "算法逻辑过于复杂，硬件无法实现"
                  },
                  {
                    "key": "D",
                    "text": "容易引起磁盘物理损坏"
                  }
                ],
                "answer": "B",
                "analysis": "SSTF 总是处理靠近当前磁头的请求。如果有源源不断的中部磁道请求进来，靠近边缘（最内侧或最外侧）的请求将永远得不到响应，发生饥饿（饿死）现象。"
              },
              {
                "question": "在操作系统中，“写时复制”（Copy-on-Write, COW）技术常用于加速：",
                "options": [
                  {
                    "key": "A",
                    "text": "进程死锁的解除过程"
                  },
                  {
                    "key": "B",
                    "text": "磁盘碎片的后台整理"
                  },
                  {
                    "key": "C",
                    "text": "`fork` 子进程创建以及内存共享优化"
                  },
                  {
                    "key": "D",
                    "text": "虚拟地址转换的硬件查表"
                  }
                ],
                "answer": "C",
                "analysis": "在创建子进程时，COW 允许父子进程暂时共享同一份物理内存页，只有当其中一个进程试图修改某页时，才会拷贝该页。这避免了盲目拷贝整个进程内存空间，极大加速了 `fork` 的执行速度。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">进程与线程管理</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：内存管理体系",
            "intro": "学习关于 内存管理体系 的核心专业理论。",
            "content": "<ul>\n<li><strong>虚拟内存与分页分段机制</strong>：</li>\n</ul>\n<p>虚拟内存技术为每个进程提供了一个连续、独立的逻辑地址空间，屏蔽了物理内存的碎片化特征。</p>\n<ul>\n<li><strong>分页系统</strong>：将逻辑地址和物理内存均划分为固定大小的页（Page）和页框（Page Frame）。通过多级页表和<strong>快表（TLB）</strong>实现逻辑地址到物理地址的映射。</li>\n<li><strong>分段系统</strong>：依据程序的逻辑结构（如代码段、数据段、堆栈段）划分出大小不等的段，更符合程序员的视角与保护需求。</li>\n<li><strong>缺页中断与页面置换算法</strong>：</li>\n</ul>\n<p>当进程访问的虚拟页面未载入物理内存时，硬件触发缺页中断，操作系统需从外存调入页面。若内存已满，则触发页面置换。</p>\n<ul>\n<li><strong>OPT（最佳置换算法）</strong>：淘汰未来最长时间不使用的页。*注：此算法无法实际实现，仅作为评估标准。*</li>\n<li><strong>FIFO（先进先出置换算法）</strong>：可能会出现 <strong>Belady 异常</strong>（分配的物理页面增多，缺页率反而上升的现象）。</li>\n<li><strong>LRU（最近最少使用置换算法）</strong>：淘汰过去最久未被访问的页。</li>\n<li><strong>CLOCK（时钟置换算法）</strong>：利用访问位（Use Bit）进行环形扫描的折中实用算法。</li>\n</ul>",
            "quizzes": [
              {
                "question": "进程在执行过程中，因等待键盘输入数据而暂停运行，此时该进程处于：",
                "options": [
                  {
                    "key": "A",
                    "text": "运行态（Running）"
                  },
                  {
                    "key": "B",
                    "text": "就绪态（Ready）"
                  },
                  {
                    "key": "C",
                    "text": "阻塞态（Blocked）"
                  },
                  {
                    "key": "D",
                    "text": "挂起态（Suspended）"
                  }
                ],
                "answer": "C",
                "analysis": "当进程因等待某事件（如 I/O 操作、信号量同步）发生而无法继续运行时，会主动让出 CPU 进入阻塞等待状态。键盘输入属于 I/O 等待，故为阻塞态。"
              },
              {
                "question": "在分页内存管理系统中，TLB（翻译旁路缓冲器，俗称快表）的主要功能是：",
                "options": [
                  {
                    "key": "A",
                    "text": "存放页面置换算法的数据结构"
                  },
                  {
                    "key": "B",
                    "text": "加速虚拟地址到物理地址的翻译过程"
                  },
                  {
                    "key": "C",
                    "text": "解决多处理器系统下的缓存不一致"
                  },
                  {
                    "key": "D",
                    "text": "保护进程免受缓冲区溢出攻击"
                  }
                ],
                "answer": "B",
                "analysis": "TLB 是一种硬件高速缓存，用于保存近期访问过的页表项，使得 CPU 进行虚拟地址转换时可直接读取 TLB，避免两次或多次慢速物理内存访问（页表查找）。"
              },
              {
                "question": "虚拟文件系统 (VFS) 的核心作用在于：",
                "options": [
                  {
                    "key": "A",
                    "text": "提高固态硬盘的写入速度"
                  },
                  {
                    "key": "B",
                    "text": "为上层应用程序提供统一的、抽象的文件接口，隐藏底层不同文件系统的差异"
                  },
                  {
                    "key": "C",
                    "text": "防止文件被病毒恶意篡改"
                  },
                  {
                    "key": "D",
                    "text": "自动在后台压缩大型文件"
                  }
                ],
                "answer": "B",
                "analysis": "VFS 在具体的物理文件系统（如 ext4, FAT）与用户程序之间提供了一层抽象，用户程序只需要调用通用的 `read` / `write` 函数，无需感知具体硬件和文件系统的差异。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">内存管理体系</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：文件系统与外部输入输出 (I/O) 调度",
            "intro": "学习关于 文件系统与外部输入输出 (I/O) 调度 的核心专业理论。",
            "content": "<ul>\n<li><strong>虚拟文件系统 (VFS)</strong>：</li>\n</ul>\n<p>为上层应用提供统一的系统调用接口（如 <code>read</code>, <code>write</code>），在底层适配各种具体的文件系统（如 Ext4, NTFS, FAT32）。</p>\n<ul>\n<li><strong>磁盘 I/O 调度算法</strong>：</li>\n</ul>\n<p>由于机械硬盘磁头寻道时间最长，需要调度算法减少寻道距离：</p>\n<ul>\n<li><strong>FCFS（先来先服务）</strong>：公平但寻道距离长。</li>\n<li><strong>SSTF（最短寻道时间优先）</strong>：优先处理离当前磁头最近的请求，可能导致两端的请求被<strong>饿死（Starvation）</strong>。</li>\n<li><strong>SCAN（电梯算法）</strong>：磁头只沿一个方向移动，直到端点再返回。</li>\n<li><strong>C-SCAN（循环电梯算法）</strong>：磁头单向扫描到端点后，直接快速返回起点重新单向扫描，提供更均匀的等待时间。</li>\n</ul>\n<p>---</p>",
            "quizzes": [
              {
                "question": "产生死锁的四个必要条件中，规定“进程已获得的资源在未使用完之前，不能被剥夺”的条件是：",
                "options": [
                  {
                    "key": "A",
                    "text": "互斥条件"
                  },
                  {
                    "key": "B",
                    "text": "非抢占条件（不可剥夺条件）"
                  },
                  {
                    "key": "C",
                    "text": "占有且等待条件"
                  },
                  {
                    "key": "D",
                    "text": "循环等待条件"
                  }
                ],
                "answer": "B",
                "analysis": "非抢占条件（No Preemption）是指资源只能由占有它的进程在使用完毕后自行释放，系统不能强行从其手中剥夺。"
              },
              {
                "question": "页面置换算法中，可能会导致 Belady 异常（即物理内存变大，缺页次数反而增加）的算法是：",
                "options": [
                  {
                    "key": "A",
                    "text": "OPT 最佳算法"
                  },
                  {
                    "key": "B",
                    "text": "LRU 最近最少使用算法"
                  },
                  {
                    "key": "C",
                    "text": "FIFO 先进先出算法"
                  },
                  {
                    "key": "D",
                    "text": "CLOCK 时钟算法"
                  }
                ],
                "answer": "C",
                "analysis": "FIFO 算法没有考虑到页面的重要性和使用频率，仅根据入队时间换出，容易产生 Belady 异常。而 LRU 和 OPT 属于“栈式算法”，已被证明不会发生此现象。"
              },
              {
                "question": "进程调度算法中，“多级反馈队列”（MFQ）调度算法的优势在于：",
                "options": [
                  {
                    "key": "A",
                    "text": "它必须预先精确知晓每个进程的运行时间长短"
                  },
                  {
                    "key": "B",
                    "text": "能够兼顾短作业的快速响应以及长作业的公平调度，具有自适应性"
                  },
                  {
                    "key": "C",
                    "text": "只适用于实时控制系统，不适合通用 OS"
                  },
                  {
                    "key": "D",
                    "text": "运行时间开销为 0"
                  }
                ],
                "answer": "B",
                "analysis": "MFQ 设置多个优先级不同的队列，时间片大小随队列优先级降低而增加。新进程先进入高优先级队列，短作业可迅速完成，而长作业会在多级队列间降级执行，自适应性极强。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">文件系统与外部输入输出 (I/O) 调度</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      },
      {
        "title": "编程语言原理 (Principles of Programming Languages)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：语言翻译体系与前端流程",
            "intro": "学习关于 语言翻译体系与前端流程 的核心专业理论。",
            "content": "<ul>\n<li><strong>编译型语言与解释型语言的实质</strong>：</li>\n</ul>\n<p>编译型语言（如 C/C++）将源代码一次性翻译为特定机器平台的机器码并保存为可执行文件；解释型语言（如 Python/JavaScript）通过解释器在运行时逐行读取源代码、翻译并即时执行。现代常采用混合模式（如 Java 的编译为 Bytecode，再通过 JVM 的 JIT（即时编译）机制转换为机器码执行）。</p>\n<ul>\n<li><strong>编译器前端经典流水线</strong>：</li>\n</ul>\n<p>1. <strong>词法分析（Lexical Analysis）</strong>：</p>\n<p>输入为源代码字符流，输出为记号流（Tokens）。该阶段通过有限自动机（Deterministic Finite Automaton, DFA）模型，去除注释与空白，将字符序列识别为关键字、标识符、字面量和运算符。</p>\n<p>2. <strong>语法分析（Syntax Analysis）</strong>：</p>\n<p>输入为 Tokens 序列，利用上下文无关文法（CFG）以及推导算法（如自顶向下的 LL(k) 或自底向上的 LR(k)），将记号组装成一棵反映程序嵌套结构的<strong>抽象语法树（AST）</strong>。</p>\n<p>3. <strong>语义分析（Semantic Analysis）</strong>：</p>\n<p>对 AST 进行上下文依赖检查。包括变量是否先声明后使用、类型检查（Type Checking）、函数参数匹配以及控制流合理性检查。其核心是维护<strong>符号表（Symbol Table）</strong>并输出中间表示（IR）。</p>",
            "quizzes": [
              {
                "question": "在编译器前端的流水线中，将源代码字符流转换为记号流（Tokens）的阶段是：",
                "options": [
                  {
                    "key": "A",
                    "text": "语法分析"
                  },
                  {
                    "key": "B",
                    "text": "词法分析"
                  },
                  {
                    "key": "C",
                    "text": "语义分析"
                  },
                  {
                    "key": "D",
                    "text": "代码生成"
                  }
                ],
                "answer": "B",
                "analysis": "词法分析（Lexical Analysis）是编译器的第一步，其任务就是读入源程序的字符流，识别出一个个具有独立意义的词法单元（Tokens），如关键字、数值等。"
              },
              {
                "question": "运行时内存模型中，“栈区”（Stack）与“堆区”（Heap）的主要区别在于：",
                "options": [
                  {
                    "key": "A",
                    "text": "栈区由程序员手动控制分配，堆区由操作系统自动管理"
                  },
                  {
                    "key": "B",
                    "text": "栈区存放所有的全局变量，堆区存放局部变量"
                  },
                  {
                    "key": "C",
                    "text": "栈区用于存放函数调用上下文与局部变量，自动分配释放；堆区用于动态分配大对象，手动或由 GC 释放"
                  },
                  {
                    "key": "D",
                    "text": "栈区的空间通常远大于堆区"
                  }
                ],
                "answer": "C",
                "analysis": "栈由编译器自动管理，遵循 LIFO 规则，随函数调用创建与销毁，速度快空间小。堆用于存储程序运行中动态申请的内存，生命周期不固定，空间大但管理复杂。"
              },
              {
                "question": "函数式编程范式（Functional Programming）的核心主张是：",
                "options": [
                  {
                    "key": "A",
                    "text": "广泛使用全局变量和改变对象状态"
                  },
                  {
                    "key": "B",
                    "text": "尽量使用副作用，以优化计算速度"
                  },
                  {
                    "key": "C",
                    "text": "数据不可变性以及函数作为一等公民（First-Class Functions），杜绝共享可变状态"
                  },
                  {
                    "key": "D",
                    "text": "强制使用多重循环和条件分支语句"
                  }
                ],
                "answer": "C",
                "analysis": "函数式编程推崇无状态变化和无副作用的数学函数，变量一旦赋值即不可变，鼓励使用高阶函数（一等公民）来实现复杂的业务逻辑。"
              },
              {
                "question": "在 JIT（Just-In-Time）编译器中，其核心运作机制是：",
                "options": [
                  {
                    "key": "A",
                    "text": "在程序开发完毕后，离线生成特定机器的汇编代码"
                  },
                  {
                    "key": "B",
                    "text": "在运行时分析热点代码，将高频执行的字节码即时编译为本地物理机器码以提高执行速度"
                  },
                  {
                    "key": "C",
                    "text": "采用纯文本解释器的方式逐行解析高级脚本代码"
                  },
                  {
                    "key": "D",
                    "text": "用来代替垃圾回收器对堆内存进行自动管理"
                  }
                ],
                "answer": "B",
                "analysis": "JIT 混合了编译与解释。它初始通过解释器执行字节码，但在运行中会监测热点代码（Hot Spots），一旦发现某些方法执行频繁，就会将其即时编译为物理硬件可以直接执行的二进制机器码，显著提升运行性能。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">语言翻译体系与前端流程</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：内存分配模型与垃圾回收（GC）机制",
            "intro": "学习关于 内存分配模型与垃圾回收（GC）机制 的核心专业理论。",
            "content": "<ul>\n<li><strong>运行时内存结构</strong>：</li>\n</ul>\n<p>程序运行时空间通常划分为代码段、静态/全局数据区、栈区（存放局部变量、函数调用参数与活动记录，自动分配与释放）以及堆区（由程序员通过动态分配指令如 <code>malloc</code>/<code>new</code> 申请，生命周期由程序员或运行时系统管理）。</p>\n<ul>\n<li><strong>垃圾回收 (Garbage Collection, GC) 算法原理</strong>：</li>\n</ul>\n<p>垃圾回收的目的是自动发现并释放不再被程序使用的堆内存。</p>\n<ul>\n<li><strong>引用计数（Reference Counting）</strong>：每个对象关联一个计数器。当有指针指向它时计数器加1，断开时减1。计数归0时立即回收。*缺点：无法处理循环引用（两个无用对象互相指向，导致计数永远不为0）。*</li>\n<li><strong>追踪式回收（可达性分析，Tracing GC）</strong>：通过“GC Roots”集合（如线程栈上的指针、全局变量）出发，沿着引用链向下搜索，所有不可达（搜索不到）的对象均判定为垃圾。</li>\n<li>*标记-清除（Mark-Sweep）*：标记活跃对象，清除未标记对象。会产生大量内存碎片。</li>\n<li>*标记-整理（Mark-Compact）*：标记后，将存活对象向一端移动，清理边界外的内存，消除碎片。</li>\n<li>*标记-复制（Copying）*：将堆分为两个半区，只使用其中一个。回收时将存活对象拷贝到另一个半区，内存分配极快，但空间利用率折半。</li>\n<li><strong>分代垃圾回收（Generational GC）</strong>：基于“弱分代假说”（绝大多数对象的生命周期极短）。将堆划分为新生代和老年代。新生代频繁进行轻量级回收（如复制算法，称为 Minor GC），存活时间长的对象晋升到老年代，老年代进行低频的 Major GC。</li>\n</ul>",
            "quizzes": [
              {
                "question": "语法分析器的输出结果通常是：",
                "options": [
                  {
                    "key": "A",
                    "text": "优化后的机器代码"
                  },
                  {
                    "key": "B",
                    "text": "符号表与常量池"
                  },
                  {
                    "key": "C",
                    "text": "抽象语法树（AST）"
                  },
                  {
                    "key": "D",
                    "text": "目标汇编指令"
                  }
                ],
                "answer": "C",
                "analysis": "语法分析器（Parser）根据文法规则对 Tokens 进行解析，构建出代表程序语法层次结构的树状结构——抽象语法树（Abstract Syntax Tree, AST）。"
              },
              {
                "question": "垃圾回收算法中，引用计数（Reference Counting）算法的最致命缺陷是：",
                "options": [
                  {
                    "key": "A",
                    "text": "回收时会导致长达数秒的“Stop the World”停顿"
                  },
                  {
                    "key": "B",
                    "text": "内存碎片化极度严重，无法整理"
                  },
                  {
                    "key": "C",
                    "text": "无法检测并回收循环引用的对象垃圾"
                  },
                  {
                    "key": "D",
                    "text": "算法实现过于复杂，运行效率极低"
                  }
                ],
                "answer": "C",
                "analysis": "如果对象 A 引用了 B，B 也引用了 A（但它们都与其他根引用断开了），它们的引用计数均保持为 1，引用计数算法无法将其归零并回收，造成内存泄露。"
              },
              {
                "question": "Python 语言在类型系统分类中，属于：",
                "options": [
                  {
                    "key": "A",
                    "text": "静态类型、强类型"
                  },
                  {
                    "key": "B",
                    "text": "静态类型、弱类型"
                  },
                  {
                    "key": "C",
                    "text": "动态类型、强类型"
                  },
                  {
                    "key": "D",
                    "text": "动态类型、弱类型"
                  }
                ],
                "answer": "C",
                "analysis": "Python 在运行时确定变量类型，不需要声明，属于动态类型；同时 Python 不允许隐式类型转换（例如不能将整数和字符串直接相加 `3 + \"4\"`，会抛出 TypeError），因此属于强类型。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">内存分配模型与垃圾回收（GC）机制</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：编程范式与类型系统",
            "intro": "学习关于 编程范式与类型系统 的核心专业理论。",
            "content": "<ul>\n<li><strong>核心编程范式</strong>：</li>\n<li><strong>命令式（Imperative）</strong>：关注“如何做”，通过改变状态的语句一步步指导计算机。包括过程式与面向对象。</li>\n<li><strong>声明式（Declarative）</strong>：关注“做什么”，而非具体实现步骤。</li>\n<li>*函数式（Functional）*：基于 λ 演算，强调无副作用的纯函数和数据不可变性，杜绝共享可变状态。</li>\n<li>*逻辑式（Logical）*：如 Prolog，通过事实、规则和查询进行逻辑推理。</li>\n<li><strong>类型系统分类</strong>：</li>\n<li><strong>静态类型 vs 动态类型</strong>：静态类型在编译期进行类型检查（如 Java, C++）；动态类型在运行期确定并校验类型（如 Python, JS）。</li>\n<li><strong>强类型 vs 弱类型</strong>：强类型语言极少或不允许隐式类型转换（如 Python, Java）；弱类型语言允许频繁且宽容的隐式转换（如 JS, C 语言中 <code>int</code> 与 <code>char</code> 任意相加）。</li>\n</ul>\n<p>---</p>",
            "quizzes": [
              {
                "question": "编译器前端的“语义分析”阶段主要执行的任务是：",
                "options": [
                  {
                    "key": "A",
                    "text": "去除代码中的空白和多余注释"
                  },
                  {
                    "key": "B",
                    "text": "类型检查以及变量是否声明等上下文合理性校验"
                  },
                  {
                    "key": "C",
                    "text": "将 AST 直接转换为特定的汇编语言"
                  },
                  {
                    "key": "D",
                    "text": "优化循环代码以提高运行速度"
                  }
                ],
                "answer": "B",
                "analysis": "语义分析（Semantic Analysis）不仅检查语法结构，还负责检查静态语义是否符合逻辑，如变量类型是否匹配、变量是否先定义后使用等。"
              },
              {
                "question": "在现代高级语言（如 Java 虚拟机 JVM）的垃圾回收中，分代收集（Generational GC）技术的设计基石是：",
                "options": [
                  {
                    "key": "A",
                    "text": "所有对象都会长久存活在内存中"
                  },
                  {
                    "key": "B",
                    "text": "弱分代假说：绝大多数对象的生命周期都是极其短暂的"
                  },
                  {
                    "key": "C",
                    "text": "内存空间必须划分为等长的几十个半区"
                  },
                  {
                    "key": "D",
                    "text": "引用计数的速度快于追踪式回收"
                  }
                ],
                "answer": "B",
                "analysis": "分代收集建立在“弱分代假说”（Most objects die young）上。将年轻对象与老年对象隔离开，对朝生夕死的年轻代进行快速频繁回收，大大提升了 GC 效率。"
              },
              {
                "question": "弱类型语言（如 JavaScript）的一个典型特征是：",
                "options": [
                  {
                    "key": "A",
                    "text": "在编译期进行严格的类型契约匹配"
                  },
                  {
                    "key": "B",
                    "text": "允许宽容的隐式类型转换，甚至自动在不同类型间进行转换"
                  },
                  {
                    "key": "C",
                    "text": "变量一旦声明，类型绝对不可修改"
                  },
                  {
                    "key": "D",
                    "text": "只能使用原生二进制数组"
                  }
                ],
                "answer": "B",
                "analysis": "弱类型语言允许在运行中自动进行隐式类型转换。如 JS 中 `\"5\" - 2` 会自动把 `\"5\"` 转换为数字 5 并输出结果 3；`5 + \"2\"` 会输出字符串 `\"52\"`。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">编程范式与类型系统</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      }
    ]
  },
  {
    "category": "编程语言",
    "courses": [
      {
        "title": "C 语言编程导论 (Introduction to C Programming)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：数据类型、控制结构与底层表示",
            "intro": "学习关于 数据类型、控制结构与底层表示 的核心专业理论。",
            "content": "<ul>\n<li><strong>基本数据类型与机器字宽</strong>：</li>\n</ul>\n<p>C 语言是一种静态类型、面向过程的编译型语言。其数据类型的大小依赖于编译器和机器字宽（如在 64 位系统下，<code>char</code> 占 1 字节，<code>int</code> 占 4 字节，<code>long</code> 占 8 字节，指针类型恒占 8 字节）。</p>\n<ul>\n<li><strong>控制流的底层跳转</strong>：</li>\n</ul>\n<p>控制流（<code>if-else</code>, <code>while</code>, <code>for</code>, <code>switch-case</code>）在编译后，转化为底层的条件跳转指令（如 x86 汇编中的 <code>je</code>, <code>jne</code>, <code>jmp</code> 等）。<code>switch-case</code> 语句在分支较多时，编译器会优化生成一张<strong>跳转表（Jump Table）</strong>，实现 O(1) 时间复杂度的多路分支寻址。</p>",
            "quizzes": [
              {
                "question": "在 64 位 Linux 操作系统中，若定义了如下变量，则指针 `p` 自身所占的字节数是：",
                "options": [
                  {
                    "key": "A",
                    "text": "4"
                  },
                  {
                    "key": "B",
                    "text": "8"
                  },
                  {
                    "key": "C",
                    "text": "16"
                  },
                  {
                    "key": "D",
                    "text": "依编译器类型而定"
                  }
                ],
                "answer": "B",
                "analysis": "在 64 位架构的计算机系统中，所有类型的指针变量（无论是 `char*`、`int*` 还是 `double*`）在内存中都占用 8 个字节（64 位宽的物理寻址地址）。"
              },
              {
                "question": "设有如下结构体定义：",
                "options": [
                  {
                    "key": "A",
                    "text": "6"
                  },
                  {
                    "key": "B",
                    "text": "8"
                  },
                  {
                    "key": "C",
                    "text": "12"
                  },
                  {
                    "key": "D",
                    "text": "16"
                  }
                ],
                "answer": "C",
                "analysis": "按照对齐规则："
              },
              {
                "question": "C 语言分配堆内存的函数中，`calloc(n, size)` 与 `malloc(n * size)` 的主要区别在于：",
                "options": [
                  {
                    "key": "A",
                    "text": "`calloc` 分配的内存位于栈区，而 `malloc` 位于堆区"
                  },
                  {
                    "key": "B",
                    "text": "`calloc` 速度更快，但空间受限"
                  },
                  {
                    "key": "C",
                    "text": "`calloc` 会自动将分配出的内存空间全部初始化为零，而 `malloc` 中是未定义的随机值值"
                  },
                  {
                    "key": "D",
                    "text": "`calloc` 不需要使用 `free` 释放"
                  }
                ],
                "answer": "C",
                "analysis": "`malloc` 仅分配物理空间而不作清理，速度快但包含脏数据；`calloc` 不仅分配空间，还负责将内存中的所有比特位自动清零（BSS样初始化）。"
              },
              {
                "question": "在 C 语言中，将外部文件定义的全局变量引入到当前源文件中使用的关键字是：",
                "options": [
                  {
                    "key": "A",
                    "text": "`static`"
                  },
                  {
                    "key": "B",
                    "text": "`extern`"
                  },
                  {
                    "key": "C",
                    "text": "`register`"
                  },
                  {
                    "key": "D",
                    "text": "`volatile`"
                  }
                ],
                "answer": "B",
                "analysis": "`extern` 关键字用于声明一个在其他文件（或外部）定义的全局变量或函数，告诉编译器在链接阶段再去寻找其实际定义位置。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">数据类型、控制结构与底层表示</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：指针的本质与多级指针",
            "intro": "学习关于 指针的本质与多级指针 的核心专业理论。",
            "content": "<ul>\n<li><strong>指针即地址</strong>：</li>\n</ul>\n<p>指针变量存放的是内存中某块数据的首地址。声明 <code>int *p</code> 意味着 <code>p</code> 保存一个地址，而 <code>*p</code> 则是对该地址进行解引用（Dereference）来访问 4 字节的整型空间。</p>\n<ul>\n<li><strong>多级指针与指针运算</strong>：</li>\n</ul>\n<p><code>int **pp</code> 是二级指针，存放的是一级指针 <code>p</code> 的内存地址。指针运算（如 <code>p + 1</code>）在编译时会根据指针指向的类型大小进行缩放：若 <code>p</code> 是 <code>int*</code>，则 <code>p + 1</code> 的实际地址增加 <code>sizeof(int)</code> 字节（即 4 字节）。</p>\n<ul>\n<li><strong>函数指针（Function Pointer）</strong>：</li>\n</ul>\n<p>定义形如 <code>void (*func_ptr)(int)</code>，它存放的是函数代码段的首地址。函数指针是 C 语言实现<strong>回调函数（Callback）</strong>和模拟<strong>面向对象多态性（虚函数表）</strong>的底层技术支撑。</p>",
            "quizzes": [
              {
                "question": "设 `int a[5] = {10, 20, 30, 40, 50};`，则表达式 `*(a + 2)` 的值是：",
                "options": [
                  {
                    "key": "A",
                    "text": "10"
                  },
                  {
                    "key": "B",
                    "text": "20"
                  },
                  {
                    "key": "C",
                    "text": "30"
                  },
                  {
                    "key": "D",
                    "text": "40"
                  }
                ],
                "answer": "C",
                "analysis": "数组名 `a` 在计算时会衰退为指向首元素的指针，`a + 2` 表示指针向后移动了两个 `int` 大小（8字节）的距离，指向 `a[2]`。对其解引用 `*(a + 2)` 相当于求 `a[2]`，值为 30。"
              },
              {
                "question": "关于 C 语言中联合体（union）的特征，下列说法正确的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "联合体中各个数组成员分别拥有独立的内存空间，互不干扰"
                  },
                  {
                    "key": "B",
                    "text": "联合体的大小是其所有成员大小之和"
                  },
                  {
                    "key": "C",
                    "text": "联合体的所有成员共享同一块内存首地址"
                  },
                  {
                    "key": "D",
                    "text": "联合体只允许在运行时动态分配空间，不能静态声明"
                  }
                ],
                "answer": "C",
                "analysis": "联合体（Union）的设计初衷是让其成员复用同一块内存区域，因此所有成员的起始地址是完全一致的，修改其中一个成员会覆盖其他成员的值。"
              },
              {
                "question": "设有定义 `int a = 10; int *p = &a; int **pp = &p;`，则表达式 `**pp` 代表：",
                "options": [
                  {
                    "key": "A",
                    "text": "指针变量 `p` 的内存地址"
                  },
                  {
                    "key": "B",
                    "text": "变量 `a` 的内存地址"
                  },
                  {
                    "key": "C",
                    "text": "变量 `a` 的值 10"
                  },
                  {
                    "key": "D",
                    "text": "非法的数据解引用"
                  }
                ],
                "answer": "C",
                "analysis": "`pp` 是指向指针 `p` 的二级指针。第一次解引用 `*pp` 得到指针 `p`，第二次解引用 `**pp` 得到 `p` 指向的变量 `a`，故其值等于 `a` 的值，即 10。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">指针的本质与多级指针</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：手动内存管理与复合布局",
            "intro": "学习关于 手动内存管理与复合布局 的核心专业理论。",
            "content": "<ul>\n<li><strong>堆内存的分配与生命周期</strong>：</li>\n</ul>\n<p><code>malloc</code> / <code>calloc</code> / <code>realloc</code> 在堆区申请指定字节的内存，返回 <code>void*</code> 指针。使用完毕后，必须显式调用 <code>free</code> 释放，否则会造成内存泄漏（Memory Leak）。释放后需将指针置为 <code>NULL</code>，防止产生<strong>悬空指针（Dangling Pointer）</strong>或野指针。</p>\n<ul>\n<li><strong>结构体（struct）与内存对齐（Padding）</strong>：</li>\n</ul>\n<p>为提高 CPU 访问内存的效率，编译器在安排结构体成员时通常遵循“自然对齐”原则（各数组成员的偏移量必须是其自身大小的整数倍，且结构体总大小必须是最大成员大小的整数倍）。这会在成员间填补多余字节（Padding）。</p>\n<ul>\n<li><strong>联合体（union）的共享内存特征</strong>：</li>\n</ul>\n<p>联合体所有成员共享同一块内存首地址，大小等于最大数组成员的大小。在任一时刻，联合体只能有效存储其中一个成员的值。主要用于节省空间或同一数据的多维类型解释。</p>\n<p>---</p>",
            "quizzes": [
              {
                "question": "指针变量在被 `free()` 释放后，如果未将其赋值为 `NULL`，容易引发的安全隐患是：",
                "options": [
                  {
                    "key": "A",
                    "text": "内存泄漏（Memory Leak）"
                  },
                  {
                    "key": "B",
                    "text": "栈溢出（Stack Overflow）"
                  },
                  {
                    "key": "C",
                    "text": "悬空指针/野指针（Dangling Pointer）引起的非法内存访问"
                  },
                  {
                    "key": "D",
                    "text": "编译器产生链接错误"
                  }
                ],
                "answer": "C",
                "analysis": "`free(p)` 只释放了指针指向的堆内存，但指针变量 `p` 内部存放的地址数值并未被清除。如果后续再次解引用 `*p` 或进行写操作，将导致悬空指针引起的非法内存访问或双重释放（Double Free）崩溃。"
              },
              {
                "question": "函数指针定义为 `int (*p)(char, char);`，下列关于该指针的描述正确的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "`p` 是一个指向整型数据的指针，并带有两个字符参数"
                  },
                  {
                    "key": "B",
                    "text": "`p` 是一个指向函数的指针，该函数接收两个 `char` 参数并返回一个 `int`"
                  },
                  {
                    "key": "C",
                    "text": "`p` 是一个返回类型为 `int*` 的普通函数"
                  },
                  {
                    "key": "D",
                    "text": "这是一个非法的 C 语言声明形式"
                  }
                ],
                "answer": "B",
                "analysis": "括号 `(*p)` 说明 `p` 是一个指针变量，后面的 `(char, char)` 说明它指向一个函数，最前方的 `int` 是该函数的返回类型。"
              },
              {
                "question": "C 语言预处理指令中，宏定义 `#define SQUARE(x) x * x` 在求值 `SQUARE(2 + 3)` 时的结果是：",
                "options": [
                  {
                    "key": "A",
                    "text": "25"
                  },
                  {
                    "key": "B",
                    "text": "11"
                  },
                  {
                    "key": "C",
                    "text": "15"
                  },
                  {
                    "key": "D",
                    "text": "13"
                  }
                ],
                "answer": "B",
                "analysis": "宏定义是简单的文本替换。展开后表达式为：`2 + 3 * 2 + 3`。根据乘法优先级，先算 `3 * 2 = 6`，再加上前面的 `2` 和后面的 `3`，得到 `2 + 6 + 3 = 11`。若要得到 25，应定义为 `#define SQUARE(x) ((x) * (x))`。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">手动内存管理与复合布局</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      },
      {
        "title": "Python 编程 (Python Programming)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：动态类型、控制流与基本数据结构",
            "intro": "学习关于 动态类型、控制流与基本数据结构 的核心专业理论。",
            "content": "<ul>\n<li><strong>Python 的对象模型与动态类型</strong>：</li>\n</ul>\n<p>Python 是动态强类型解释型语言。变量在 Python 中仅仅是一个<strong>指向对象的引用（标签）</strong>，对象本身才拥有类型。所有 Python 对象都有一个包含引用计数、类型指针和数值的头部结构（PyObject）。</p>\n<ul>\n<li><strong>列表与元组的底层实现</strong>：</li>\n</ul>\n<p>列表（<code>list</code>）是动态数组，支持 O(1) 的随机访问，但在扩容时会触发内存拷贝；元组（<code>tuple</code>）是只读的静态数组，一旦创建不可修改，具有更高的内存利用效率。</p>",
            "quizzes": [
              {
                "question": "Python 中，变量在赋值时的实质是：",
                "options": [
                  {
                    "key": "A",
                    "text": "在内存中分配特定字节的空间并将变量值写入"
                  },
                  {
                    "key": "B",
                    "text": "创建一个对象，并将变量名（引用标签）绑定到该对象上"
                  },
                  {
                    "key": "C",
                    "text": "将变量转换为对应类型的强类型静态变量"
                  },
                  {
                    "key": "D",
                    "text": "仅仅进行宏文本替换"
                  }
                ],
                "answer": "B",
                "analysis": "Python 中一切皆对象。变量名本身并不拥有数据类型和固定内存空间，它只是指向堆内存中具体 PyObject 对象的一个引用标签。"
              },
              {
                "question": "关于 Python 生成器（Generator）和 `yield` 关键字，下列叙述错误的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "含有 `yield` 的函数在被调用时不会立即执行函数体"
                  },
                  {
                    "key": "B",
                    "text": "每次调用 `__next__()` 时，生成器在 `yield` 语句处暂停，并保留所有当前局部变量状态"
                  },
                  {
                    "key": "C",
                    "text": "生成器可以利用惰性求值极大节省处理大型数据集时的内存开销"
                  },
                  {
                    "key": "D",
                    "text": "生成器必须一次性把所有生成的内容全部载入主内存才能开始迭代"
                  }
                ],
                "answer": "D",
                "analysis": "生成器是惰性求值的代表，它只有在迭代请求下一个元素（调用 `next()`）时才即时计算并吐出一个数据，并不在内存中积存完整数据，因此空间效率极高。"
              },
              {
                "question": "运行下列 Python 代码后，列表 `a` 和 `b` 的值分别为：",
                "options": [
                  {
                    "key": "A",
                    "text": "`a = [1, [2, 3]], b = [1, [99, 3]]`"
                  },
                  {
                    "key": "B",
                    "text": "`a = [1, [99, 3]], b = [1, [99, 3]]`"
                  },
                  {
                    "key": "C",
                    "text": "`a = [1, [99, 3]], b = [1, [2, 3]]`"
                  },
                  {
                    "key": "D",
                    "text": "`a = [1, [2, 3]], b = [1, [2, 3]]`"
                  }
                ],
                "answer": "B",
                "analysis": "`copy.copy()` 执行的是浅拷贝。它只拷贝了外层列表的引用，对于内层嵌套的列表 `[2, 3]`，`a` 和 `b` 指向的是同一个物理对象。因此修改 `b[1][0]` 同样会使 `a[1][0]` 发生改变。"
              },
              {
                "question": "Python 3.5 引入的异步协程语法关键字是：",
                "options": [
                  {
                    "key": "A",
                    "text": "`yield from`"
                  },
                  {
                    "key": "B",
                    "text": "`async` 和 `await`"
                  },
                  {
                    "key": "C",
                    "text": "`def` 和 `yield`"
                  },
                  {
                    "key": "D",
                    "text": "`run` 和 `wait`"
                  }
                ],
                "answer": "B",
                "analysis": "从 Python 3.5 开始，官方正式引入了 `async def` 定义协程函数，以及使用 `await` 挂起阻塞 IO 任务的关键字，使得异步并发代码更具可读性。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">动态类型、控制流与基本数据结构</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：闭包与装饰器、迭代器与生成器",
            "intro": "学习关于 闭包与装饰器、迭代器与生成器 的核心专业理论。",
            "content": "<ul>\n<li><strong>闭包（Closure）的形成条件</strong>：</li>\n</ul>\n<p>当一个嵌套函数引用了其外部函数的局部变量，且外部函数返回了这个嵌套函数时，就形成了一个闭包。闭包保存了外部函数的环境上下文（自由变量）。</p>\n<ul>\n<li><strong>装饰器（Decorator）的设计模式与语法糖</strong>：</li>\n</ul>\n<p>装饰器是一个高阶函数，其作用是接收一个函数并返回一个包装后的新函数。通过 <code>@decorator</code> 语法糖，可以在不修改目标函数源码的情况下，动态注入日志、统计、权限校验等横切关注点。</p>\n<ul>\n<li><strong>迭代器（Iterator）与迭代协议</strong>：</li>\n</ul>\n<p>迭代器是实现了迭代协议的对象，必须具备 <code>__iter__()</code>（返回迭代器自身）和 <code>__next__()</code>（返回下一个元素，没有元素时抛出 <code>StopIteration</code> 异常）方法。</p>\n<ul>\n<li><strong>生成器（Generator）的惰性求值（Lazy Evaluation）</strong>：</li>\n</ul>\n<p>在函数中使用 <code>yield</code> 关键字即可将其转化为生成器。生成器在调用时不会立即执行代码，而是返回一个生成器迭代器。每次调用 <code>__next__()</code>，函数执行到 <code>yield</code> 挂起，保留局部变量状态，并返回 <code>yield</code> 后面的值。这使得程序能以 O(1) 空间复杂度处理无限流或海量数据集。</p>",
            "quizzes": [
              {
                "question": "运行如下 Python 代码后，输出的结果是：",
                "options": [
                  {
                    "key": "A",
                    "text": "2"
                  },
                  {
                    "key": "B",
                    "text": "5"
                  },
                  {
                    "key": "C",
                    "text": "10"
                  },
                  {
                    "key": "D",
                    "text": "25"
                  }
                ],
                "answer": "C",
                "analysis": "`make_multiplier` 返回内部函数 `multiplier`，这构成了一个闭包。`double` 保留了自由变量 `x = 2` 的上下文。当执行 `double(5)` 时，实际执行的是 `2 * 5`，返回 10。"
              },
              {
                "question": "CPython 解释器中的全局解释器锁（GIL）对多线程程序运行的主要限制是：",
                "options": [
                  {
                    "key": "A",
                    "text": "阻止 Python 程序访问外部的 I/O 资源"
                  },
                  {
                    "key": "B",
                    "text": "使得多线程无法在多核 CPU 上实现真正的物理并行，限制了 CPU 密集型任务"
                  },
                  {
                    "key": "C",
                    "text": "强制所有局部变量必须是只读的"
                  },
                  {
                    "key": "D",
                    "text": "使得多线程程序无法在 Windows 系统下执行"
                  }
                ],
                "answer": "B",
                "analysis": "GIL 保证同一时刻只有一个线程在解释器中执行，这锁死了 CPU 密集型任务利用多核的能力（同一时间只有一个核在跑 Python 字节码）。但在等待网络/磁盘 I/O 时主线程会释放 GIL，所以 I/O 密集型多线程依然有效。"
              },
              {
                "question": "在 Python 的垃圾回收（GC）机制中，用于解决循环引用对象泄漏的核心算法是：",
                "options": [
                  {
                    "key": "A",
                    "text": "引用计数（Reference Counting）"
                  },
                  {
                    "key": "B",
                    "text": "标记-清除（Mark-Sweep）与分代收集（Generational Collection）"
                  },
                  {
                    "key": "C",
                    "text": "内存分配池（PyMalloc）"
                  },
                  {
                    "key": "D",
                    "text": "静态静态空间检查"
                  }
                ],
                "answer": "B",
                "analysis": "Python 的首要 GC 机制是引用计数，但它无法消除循环引用。因此 Python 额外引入了“标记-清除”来检测孤立的环状链表垃圾，并基于“分代回收”策略将其划分为三代（Generation 0, 1, 2）提高扫描效率。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">闭包与装饰器、迭代器与生成器</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：并发编程与全局解释器锁（GIL）",
            "intro": "学习关于 并发编程与全局解释器锁（GIL） 的核心专业理论。",
            "content": "<ul>\n<li><strong>GIL（Global Interpreter Lock）的本质与影响</strong>：</li>\n</ul>\n<p>为了保证 CPython 解释器内部引用计数和垃圾回收等内存管理逻辑的线程安全，Python 设计了全局解释器锁。<strong>在任意时刻，只允许一个线程占用 CPython 解释器执行 Python 字节码</strong>。</p>\n<ul>\n<li><strong>并发方案的选择</strong>：</li>\n<li><strong>多线程（<code>threading</code>）</strong>：由于 GIL 存在，多线程在 CPU 密集型任务中无法实现真正的多核并行，甚至会因为线程频繁切换降低效率；但在 I/O 密集型任务（网络、读写）中，线程在等待 I/O 时会释放 GIL，因此多线程依旧能带来性能提升。</li>\n<li><strong>多进程（<code>multiprocessing</code>）</strong>：每个 Python 进程拥有独立的解释器和内存空间（独立的 GIL），因此多进程能够实现多核 CPU 的并行运算，适用于 CPU 密集型任务。</li>\n<li><strong>协程与异步 IO（<code>asyncio</code>）</strong>：协程是一种用户态的轻量级线程（单线程内合作式多任务）。通过 <code>async</code>/<code>await</code>，在单线程内遇到 I/O 阻塞时自动切换到其他协程运行，消除系统级线程上下文切换开销。</li>\n</ul>\n<p>---</p>",
            "quizzes": [
              {
                "question": "Python 装饰器（Decorator）在底层实现时依赖的核心特性是：",
                "options": [
                  {
                    "key": "A",
                    "text": "编译器在前端执行的宏展开"
                  },
                  {
                    "key": "B",
                    "text": "函数是一等公民（First-Class Object），可以作为参数传递并返回"
                  },
                  {
                    "key": "C",
                    "text": "Python 支持类的多继承"
                  },
                  {
                    "key": "D",
                    "text": "CPU 底层硬件提供的特定跳转指令"
                  }
                ],
                "answer": "B",
                "analysis": "Python 装饰器是典型的高阶函数，它利用了 Python 中函数是一等公民的特性，即函数可以像普通对象一样被赋值、作为参数传入另一个函数、或作为另一个函数的返回值。"
              },
              {
                "question": "在 Python 并发编程中，对于 CPU 密集型运算任务，最合理的并发方案是：",
                "options": [
                  {
                    "key": "A",
                    "text": "采用多线程模式（`threading`）"
                  },
                  {
                    "key": "B",
                    "text": "采用协程与异步 IO 模式（`asyncio`）"
                  },
                  {
                    "key": "C",
                    "text": "采用多进程模式（`multiprocessing`）"
                  },
                  {
                    "key": "D",
                    "text": "采用单线程串行模式"
                  }
                ],
                "answer": "C",
                "analysis": "多进程模式会为每个进程开启独立的 Python 解释器（各自拥有独立的 GIL），从而避开了全局锁的限制，能实现真正的多核 CPU 并行计算，适合 CPU 密集任务。"
              },
              {
                "question": "运行以下 Python 代码，输出的最终结果是：",
                "options": [
                  {
                    "key": "A",
                    "text": "`[1]` 和 `[2]`"
                  },
                  {
                    "key": "B",
                    "text": "`[1]` 和 `[1, 2]`"
                  },
                  {
                    "key": "C",
                    "text": "`[1, 2]` 和 `[1, 2]`"
                  },
                  {
                    "key": "D",
                    "text": "会跑出运行时异常"
                  }
                ],
                "answer": "B",
                "analysis": "Python 的默认参数是在**函数定义期（而非运行期）评估并初始化**的。可变对象 `target=[]` 在定义时创建了一次，之后所有未传入 `target` 的调用都将共享这同一个列表对象，故第二次调用时会在原列表后追加 `2`，返回 `[1, 2]`。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">并发编程与全局解释器锁（GIL）</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      },
      {
        "title": "Java 面向对象编程 (Java Object-Oriented Programming)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：面向对象三要素与多态底层原理",
            "intro": "学习关于 面向对象三要素与多态底层原理 的核心专业理论。",
            "content": "<ul>\n<li><strong>三大特性</strong>：封装（隐藏内部实现）、继承（代码复用与层次构建）和多态（同一接口的多维度具体实现）。</li>\n<li><strong>多态（Polymorphism）在 JVM 中的实现原理</strong>：</li>\n</ul>\n<p>多态的本质是动态绑定（Dynamic Binding）。Java 字节码调用普通实例方法时，使用 <code>invokevirtual</code> 指令。</p>\n<p>*方法表机制*：在 JVM 加载类时，会在方法区为每个类构建一张<strong>方法表（vtable）</strong>，其中按顺序存放着该类所有可调用方法的物理地址。如果子类重写了父类方法，则对应偏移量处的方法指针将被替换为子类实现的地址；如果子类未重写，则指针依然指向父类实现。在运行时，JVM 根据对象的实际类型（通过对象头中的类指针找到 vtable），定位对应偏移量处的方法并执行。这实现了运行时的动态派发。</p>",
            "quizzes": [
              {
                "question": "在 Java 虚拟机中，动态绑定（Dynamic Binding，即多态）的底层依赖是：",
                "options": [
                  {
                    "key": "A",
                    "text": "编译器直接进行的硬编码地址展开"
                  },
                  {
                    "key": "B",
                    "text": "每个类的方法表（vtable）中方法指针的动态派发"
                  },
                  {
                    "key": "C",
                    "text": "运行时动态生成的代理类"
                  },
                  {
                    "key": "D",
                    "text": "堆内存中对象的垃圾回收状态"
                  }
                ],
                "answer": "B",
                "analysis": "Java 方法调用默认是动态绑定的。JVM 会在类加载时为每个类构建方法表（vtable）。执行子类对象方法时，JVM 查找该对象实际类型的方法表，调用对应偏移量处的具体实现地址。"
              },
              {
                "question": "Java 反射（Reflection）机制赋予程序的能力不包括：",
                "options": [
                  {
                    "key": "A",
                    "text": "在运行时获取任意类的 Class 对象并检测其构造方法、属性和方法"
                  },
                  {
                    "key": "B",
                    "text": "在编译期自动检测并消除代码中所有的 NullPointerException 隐患"
                  },
                  {
                    "key": "C",
                    "text": "在运行时动态创建类的实例并进行方法调用"
                  },
                  {
                    "key": "D",
                    "text": "在运行时强行修改 private 修饰的私有属性的可访问性"
                  }
                ],
                "answer": "B",
                "analysis": "反射是在运行时（Runtime）起作用的动态特性，无法在静态编译期解决空指针异常这类逻辑漏洞。但通过 `field.setAccessible(true)` 反射可以越过可访问性检查，强行读写私有属性。"
              },
              {
                "question": "在 Java 并发编程中，关键字 `volatile` 能够保证共享变量的：",
                "options": [
                  {
                    "key": "A",
                    "text": "原子性与可见性"
                  },
                  {
                    "key": "B",
                    "text": "原子性与有序性"
                  },
                  {
                    "key": "C",
                    "text": "可见性与有序性（禁止重排序）"
                  },
                  {
                    "key": "D",
                    "text": "绝对的线程安全"
                  }
                ],
                "answer": "C",
                "analysis": "`volatile` 能够保证：1. 写入数据立即同步回主内存且强制其他线程读取新值（可见性）；2. 通过内存屏障禁止指令重排序（有序性）。但它无法保证复合操作（如 `i++`）的原子性。"
              },
              {
                "question": "在 Java 虚拟机的垃圾回收中，元空间（Metaspace，取代了永久代 PermGen）被用来存放：",
                "options": [
                  {
                    "key": "A",
                    "text": "所有新创建的普通对象实例"
                  },
                  {
                    "key": "B",
                    "text": "被多线程共享的类元数据、常量池和方法定义"
                  },
                  {
                    "key": "C",
                    "text": "线程调用的局部变量和方法帧栈"
                  },
                  {
                    "key": "D",
                    "text": "垃圾回收器的算法日志"
                  }
                ],
                "answer": "B",
                "analysis": "元空间是方法区的实现。从 Java 8 开始，方法区数据被移入本地内存的“元空间”（Metaspace）中，用于存放类的结构信息、常量池、方法定义等，而普通对象实例依然存放在 JVM 堆（Heap）中。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">面向对象三要素与多态底层原理</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：抽象隔离、反射机制与动态代理",
            "intro": "学习关于 抽象隔离、反射机制与动态代理 的核心专业理论。",
            "content": "<ul>\n<li><strong>接口（Interface）与抽象类（Abstract Class）的解耦作用</strong>：</li>\n</ul>\n<p>接口定义行为契约，实现完全隔离与解耦；抽象类用于提取公共实现并强制子类完成特定行为。</p>\n<ul>\n<li><strong>反射机制（Reflection）的实现</strong>：</li>\n</ul>\n<p>反射允许 Java 程序在运行时动态加载未知的类（通过 <code>Class.forName()</code>），获取类的构造器、方法、属性等元数据，并进行动态调用。反射是 Spring（IoC/DI 容器）和 MyBatis 等工业级框架的核心技术支撑。</p>\n<ul>\n<li><strong>JDK 动态代理机制</strong>：</li>\n</ul>\n<p>在运行时，基于反射，通过 <code>Proxy.newProxyInstance()</code> 动态在内存中生成一个实现了指定接口的代理类字节码并加载入 JVM，使用 <code>InvocationHandler</code> 的 <code>invoke()</code> 统一拦截目标对象的方法调用并执行前置/后置逻辑。</p>",
            "quizzes": [
              {
                "question": "设有以下 Java 代码，运行后输出的结果是：",
                "options": [
                  {
                    "key": "A",
                    "text": "Parent"
                  },
                  {
                    "key": "B",
                    "text": "Child"
                  },
                  {
                    "key": "C",
                    "text": "Parent 和 Child 均输出"
                  },
                  {
                    "key": "D",
                    "text": "编译报错，无法将子类对象赋给父类引用"
                  }
                ],
                "answer": "B",
                "analysis": "这是经典的多态行为。虽然引用 `p` 的声明类型是 `Parent`，但其指向的实际运行期对象是 `Child`。根据动态绑定原则，执行的是子类重写后的 `show()` 方法，输出 \"Child\"。"
              },
              {
                "question": "JDK 动态代理（Dynamic Proxy）技术的主要局限性在于：",
                "options": [
                  {
                    "key": "A",
                    "text": "无法在运行时动态生成字节码"
                  },
                  {
                    "key": "B",
                    "text": "目标被代理类必须实现至少一个接口才能被代理"
                  },
                  {
                    "key": "C",
                    "text": "会使目标方法的执行效率降低数十倍"
                  },
                  {
                    "key": "D",
                    "text": "代理类仅支持在单线程下执行"
                  }
                ],
                "answer": "B",
                "analysis": "JDK 动态代理利用代理类和目标类实现相同接口来伪装目标类。如果目标类没有实现任何接口，则无法使用 JDK 动态代理（必须求助于 CGLIB 这类基于继承创建子类来实现的代理技术）。"
              },
              {
                "question": "实现多线程原子操作时，无锁并发机制（CAS）所依赖底层的硬件指令通常是：",
                "options": [
                  {
                    "key": "A",
                    "text": "`jmp`（无条件跳转）"
                  },
                  {
                    "key": "B",
                    "text": "`cmpxchg`（比较并交换）"
                  },
                  {
                    "key": "C",
                    "text": "`push` / `pop`（栈操作）"
                  },
                  {
                    "key": "D",
                    "text": "`iret`（中断返回）"
                  }
                ],
                "answer": "B",
                "analysis": "CAS (Compare And Swap) 依靠底层的原子指令（在 x86 架构下是 `lock cmpxchg`），它是一条由 CPU 硬件保证原子性的“比较并交换”指令，是无锁自旋并发的核心。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">抽象隔离、反射机制与动态代理</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：并发编程与 Java 内存模型（JMM）",
            "intro": "学习关于 并发编程与 Java 内存模型（JMM） 的核心专业理论。",
            "content": "<ul>\n<li><strong>JMM（Java Memory Model）的物理抽象</strong>：</li>\n</ul>\n<p>JMM 规范了多线程之间共享变量的可见性、原子性和有序性行为。它将内存划分为全局共享的<strong>主内存（Main Memory）</strong>和每个线程私有的<strong>工作内存（Working Memory）</strong>。线程对变量的读写必须先在自己的工作内存中进行，再同步回主内存。</p>\n<ul>\n<li><strong>并发三大特征的实现机制</strong>：</li>\n<li><strong>可见性（Visibility）</strong>：由 <code>volatile</code> 关键字提供保障。当一个变量被声明为 <code>volatile</code> 时，JMM 规定：每次使用该变量必须从主内存重新读取，且每次写入后必须立即同步回主内存。同时，<code>volatile</code> 可以防止指令重排序。</li>\n<li><strong>原子性（Atomicity）</strong>：通过内置锁 <code>synchronized</code> 或 JUC 包中的 CAS（Compare-And-Swap，无锁自旋，依赖 CPU 原生原子指令 <code>cmpxchg</code>）及显式锁 <code>ReentrantLock</code> 保证一段代码的排他性执行。</li>\n<li><strong>有序性（Ordering）</strong>：通过 <strong>Happens-Before</strong> 原则（如程序次序规则、锁定规则、volatile 变量规则、传递性规则）对多线程间执行顺序提供偏序约束。</li>\n</ul>\n<p>---</p>",
            "quizzes": [
              {
                "question": "关于 Java 的接口（Interface）与抽象类（Abstract Class），下列叙述错误的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "抽象类中可以定义非抽象的成员方法并包含普通成员变量"
                  },
                  {
                    "key": "B",
                    "text": "接口中声明的变量默认都是 `public static final` 类型"
                  },
                  {
                    "key": "C",
                    "text": "一个类可以实现多个接口，但只能继承一个抽象类"
                  },
                  {
                    "key": "D",
                    "text": "接口和抽象类都可以直接通过 `new` 关键字进行实例化"
                  }
                ],
                "answer": "D",
                "analysis": "接口和抽象类都属于不完整的类型定义，主要是为子类提供结构模板或规范契约，因此绝对不能直接使用 `new` 实例化，必须由具体的实现类来实现其方法。"
              },
              {
                "question": "Java 内存模型（JMM）将内存划分为全局的“主内存”和线程独占的“工作内存”。线程对变量的修改：",
                "options": [
                  {
                    "key": "A",
                    "text": "可以直接作用在主内存上，从而其他线程立即感知"
                  },
                  {
                    "key": "B",
                    "text": "必须先写在工作内存中，之后在合适时机同步回主内存"
                  },
                  {
                    "key": "C",
                    "text": "完全不需要写回主内存"
                  },
                  {
                    "key": "D",
                    "text": "只能写在寄存器中"
                  }
                ],
                "answer": "B",
                "analysis": "JMM 规定，所有变量存储在主内存中，但每个线程有自己的工作内存。线程修改变量必须先在工作内存中进行，然后同步回主内存。若未做可见性控制，其他线程可能会读取到过期的本地工作内存值。"
              },
              {
                "question": "声明为 `synchronized` 的普通实例方法，其锁定的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "当前方法本身"
                  },
                  {
                    "key": "B",
                    "text": "当前类的 Class 对象"
                  },
                  {
                    "key": "C",
                    "text": "当前方法被调用时传入的参数"
                  },
                  {
                    "key": "D",
                    "text": "触发该方法调用的当前实例对象（`this`）"
                  }
                ],
                "answer": "D",
                "analysis": "Java 中锁都是加在具体对象上的。修饰非静态方法时，默认锁的是 `this` 实例对象；修饰静态方法（`static synchronized`）时，锁的是当前类的 Class 类元对象。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">并发编程与 Java 内存模型（JMM）</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      }
    ]
  },
  {
    "category": "数据结构与算法",
    "courses": [
      {
        "title": "数据结构 (Data Structures)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：线性结构与冲突解决机制",
            "intro": "学习关于 线性结构与冲突解决机制 的核心专业理论。",
            "content": "<ul>\n<li><strong>数组与链表的物理折中</strong>：</li>\n</ul>\n<p>数组采用连续内存存储，支持 O(1) 常数时间随机访问，但在中间插入删除需移动元素（O(n)）；链表采用指针链式存储，不支持随机访问（O(n)），但支持 O(1) 的局部节点插入删除。</p>\n<ul>\n<li><strong>哈希表（Hash Table）与冲突解决策略</strong>：</li>\n</ul>\n<p>哈希表利用哈希函数将关键字映射到数组索引。当不同关键字映射到相同索引时，会发生<strong>哈希冲突（Hash Collision）</strong>。</p>\n<ul>\n<li><strong>拉链法（Chaining）</strong>：在冲突索引处构建单链表存储冲突元素。Java 的 <code>HashMap</code> 采用此法，并在链表长度 \\ge 8 时转化为红黑树以防止最坏情况性能退化为 O(n)。</li>\n<li><strong>开放寻址法（Open Addressing）</strong>：包括线性探测（容易产生聚集现象）、二次探测和双重散列。在当前桶被占用时，按照特定探测步长寻找下一个空桶。</li>\n</ul>",
            "quizzes": [
              {
                "question": "在哈希表中，如果使用线性探测法解决冲突，当装填因子（Load Factor）趋近于 1 时，最容易出现的现象是：",
                "options": [
                  {
                    "key": "A",
                    "text": "哈希表会自动缩容"
                  },
                  {
                    "key": "B",
                    "text": "查找和插入的平均探测次数剧烈上升，发生大范围聚集（Clustering）"
                  },
                  {
                    "key": "C",
                    "text": "空间利用率降为零"
                  },
                  {
                    "key": "D",
                    "text": "哈希表转化为红黑树"
                  }
                ],
                "answer": "B",
                "analysis": "装填因子指表中已存元素与表容量的比值。当其接近 1 时，表内空桶极少，线性探测遇到冲突时需要向后滑动非常远才能找到空桶，导致平均查找与插入开销急剧退化，效率低下。"
              },
              {
                "question": "B+ 树在数据库索引设计中相比 B 树的最大优势在于：",
                "options": [
                  {
                    "key": "A",
                    "text": "B+ 树的插入和删除操作不需要进行节点分裂和合并"
                  },
                  {
                    "key": "B",
                    "text": "B+ 树的非叶子节点不存储实际数据，使得单节点可容纳更多键值，树高更矮，且叶子节点有链表相连便于范围查询"
                  },
                  {
                    "key": "C",
                    "text": "B+ 树查找单个元素的时间复杂度为 $O(1)$"
                  },
                  {
                    "key": "D",
                    "text": "B+ 树不需要使用磁盘寻道"
                  }
                ],
                "answer": "B",
                "analysis": "B+ 树的内节点只存索引不存数据，使得分支因子极大，树高极低。所有数据在叶子节点对齐，且叶子节点通过链表首尾相接，进行区间扫描（如 `WHERE age BETWEEN 18 AND 25`）时只需在叶子链表上顺序遍历即可。"
              },
              {
                "question": "在单链表中，若要在指针 `p` 所指向的节点之后插入一个由指针 `s` 指向的新节点，正确的指针修改顺序是：",
                "options": [
                  {
                    "key": "A",
                    "text": "`p->next = s; s->next = p->next;`"
                  },
                  {
                    "key": "B",
                    "text": "`s->next = p->next; p->next = s;`"
                  },
                  {
                    "key": "C",
                    "text": "`p->next = s->next; s->next = p;`"
                  },
                  {
                    "key": "D",
                    "text": "`s->next = p; p->next = s;`"
                  }
                ],
                "answer": "B",
                "analysis": "必须先将新节点 `s` 的后继指针指向当前 `p` 的后继（即 `s->next = p->next`），保留后半段链表；再将 `p` 的后继指向 `s`（即 `p->next = s`）。若颠倒顺序（如A），`p->next` 先被改写为 `s`，会导致原本 `p` 之后的后续节点全部丢失。"
              },
              {
                "question": "在具有 $n$ 个顶点的无向连通图中，其生成树（Spanning Tree）所包含的边数必须是：",
                "options": [
                  {
                    "key": "A",
                    "text": "$n$ 条"
                  },
                  {
                    "key": "B",
                    "text": "$n - 1$ 条"
                  },
                  {
                    "key": "C",
                    "text": "$n(n - 1) / 2$ 条"
                  },
                  {
                    "key": "D",
                    "text": "$2n$ 条"
                  }
                ],
                "answer": "B",
                "analysis": "生成树是一个极小连通子图，它包含图中所有的 $n$ 个顶点，并且有且仅有 $n-1$ 条边。边数若少于 $n-1$ 则图不连通，若多于 $n-1$ 则图必有环。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">线性结构与冲突解决机制</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：自平衡树形结构与多路平衡树",
            "intro": "学习关于 自平衡树形结构与多路平衡树 的核心专业理论。",
            "content": "<ul>\n<li><strong>红黑树（Red-Black Tree）的平衡原理</strong>：</li>\n</ul>\n<p>红黑树是一种自平衡的二叉搜索树。它通过在每个节点上增加颜色属性（红/黑）并满足以下五条性质来维持“半平衡”状态：</p>\n<p>1. 节点是红色或黑色。</p>\n<p>2. 根节点是黑色。</p>\n<p>3. 所有叶子节点（NIL 节点）都是黑色。</p>\n<p>4. 每个红色节点的两个子节点都是黑色（不能有相邻的红色节点）。</p>\n<p>5. 从任意节点到其每个叶子的所有简单路径都包含相同数量的黑色节点。</p>\n<p>*平衡调整*：当插入或删除打破性质时，红黑树通过<strong>左旋（Left Rotation）</strong>、<strong>右旋（Right Rotation）</strong>和<strong>变色（Coloring）</strong>在最多 O(1) 次旋转内恢复平衡，确保查找、插入和删除的最坏复杂度为 O(\\log n)。</p>\n<ul>\n<li><strong>B 树与 B+ 树的磁盘 I/O 优化</strong>：</li>\n</ul>\n<p>B 树是一种多路平衡查找树。每个节点可拥有多个子节点和关键字。其设计核心是<strong>降低树的高度（树变得宽扁）</strong>。在海量数据存储（如数据库、文件系统）中，每个节点对应一个磁盘页（Page），极低的树高（通常为 3~4 层）将磁盘寻道（I/O 读写）次数降到最低。</p>\n<p>*B+ 树的改进*：非叶子节点仅存储索引，所有实际数据全部存放在叶子节点中，且叶子节点之间通过双向链表相连。这实现了极高效率的<strong>范围查询（Range Query）</strong>与顺序扫描。</p>",
            "quizzes": [
              {
                "question": "红黑树的五大性质中，用于限制“最长路径不超过最短路径两倍”的核心性质是：",
                "options": [
                  {
                    "key": "A",
                    "text": "根节点是黑色"
                  },
                  {
                    "key": "B",
                    "text": "所有 NIL 叶子节点都是黑色"
                  },
                  {
                    "key": "C",
                    "text": "不能有相邻的红色节点，且从任一节点到叶子的路径包含相同数量黑节点"
                  },
                  {
                    "key": "D",
                    "text": "节点只能是红或黑"
                  }
                ],
                "answer": "C",
                "analysis": "由于性质5规定每条路径黑节点数目相同，而性质4规定红色节点不能相邻（即红节点后必接黑节点）。因此，含红节点最多的路径（红黑交替）长度最多是全黑路径（最短路径）的两倍。"
              },
              {
                "question": "并查集（Disjoint Set）在执行查找操作时，使用“路径压缩（Path Compression）”技术的目的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "减少并查集占用的物理内存空间"
                  },
                  {
                    "key": "B",
                    "text": "使得每次查找后，路径上所有节点都直接指向根节点，将树的高度压扁"
                  },
                  {
                    "key": "C",
                    "text": "将多个不同的集合强制合并为一个"
                  },
                  {
                    "key": "D",
                    "text": "保证集合中的元素按照升序排列"
                  }
                ],
                "answer": "B",
                "analysis": "路径压缩在递归查找根节点的过程中，顺便把沿途所有节点的 `parent` 指针直接修改为指向最终的根节点。这使得整个树的结构极扁，后续的查找操作耗时直接缩短至 $O(1)$。"
              },
              {
                "question": "循环队列中，设队头指针为 `front`，队尾指针为 `rear`，队列最大容量为 `QueueSize`，则判断队列已满的常用条件是：",
                "options": [
                  {
                    "key": "A",
                    "text": "`front == rear`"
                  },
                  {
                    "key": "B",
                    "text": "`(rear + 1) % QueueSize == front`"
                  },
                  {
                    "key": "C",
                    "text": "`rear == QueueSize - 1`"
                  },
                  {
                    "key": "D",
                    "text": "`front == 0`"
                  }
                ],
                "answer": "B",
                "analysis": "为区分“队空”和“队满”，循环队列通常浪费一个存储单元。队空条件为 `front == rear`；当队尾指针的下一个位置是队头时，即认定队满，条件为 `(rear + 1) % QueueSize == front`。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">自平衡树形结构与多路平衡树</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：并查集与图表示结构",
            "intro": "学习关于 并查集与图表示结构 的核心专业理论。",
            "content": "<ul>\n<li><strong>并查集（Disjoint Set Union, DSU）的效率优化</strong>：</li>\n</ul>\n<p>用于处理不相交集合的合并（Union）和查找（Find）问题。</p>\n<ul>\n<li><strong>路径压缩（Path Compression）</strong>：在 <code>find</code> 查找时，将路径上所有节点的父节点直接指向根节点，大幅缩短后续查找路径。</li>\n<li><strong>按秩合并（Union by Rank）</strong>：在 <code>union</code> 合并时，将深度较小的树连到深度较大的树下，防止树退化。</li>\n</ul>\n<p>*复杂度*：配合两种优化后，单次操作的均摊时间复杂度为近乎常数的反阿克曼函数值 \\alpha(n)。</p>\n<ul>\n<li><strong>图的表示</strong>：邻接矩阵（适合稠密图，空间复杂度 O(V^2)）与邻接表（适合稀疏图，空间复杂度 O(V + E)）。</li>\n</ul>\n<p>---</p>",
            "quizzes": [
              {
                "question": "在红黑树中插入一个新节点时，新节点的初始颜色被规定为：",
                "options": [
                  {
                    "key": "A",
                    "text": "黑色"
                  },
                  {
                    "key": "B",
                    "text": "红色"
                  },
                  {
                    "key": "C",
                    "text": "任意颜色"
                  },
                  {
                    "key": "D",
                    "text": "绿色"
                  }
                ],
                "answer": "B",
                "analysis": "新插入的节点默认涂为红色。因为如果涂成黑色，必然会破坏性质5（导致该条路径黑节点数加1），需要进行复杂的全树平衡调整。涂为红色可能只破坏性质4（出现相邻红节点），局部旋转变色即可恢复。"
              },
              {
                "question": "若一个图有 $V$ 个顶点和 $E$ 条边，如果该图非常稀疏（即 $E \\ll V^2$），则在存储图时，最节省空间的存储结构是：",
                "options": [
                  {
                    "key": "A",
                    "text": "邻接矩阵"
                  },
                  {
                    "key": "B",
                    "text": "邻接表"
                  },
                  {
                    "key": "C",
                    "text": "关联矩阵"
                  },
                  {
                    "key": "D",
                    "text": "二叉搜索树"
                  }
                ],
                "answer": "B",
                "analysis": "邻接矩阵空间固定为 $O(V^2)$，在稀疏图下会造成极大的零元素内存浪费。邻接表空间为 $O(V + E)$，仅保存实际存在的边，因此极其适合稀疏图。"
              },
              {
                "question": "二叉树的后序遍历顺序是：",
                "options": [
                  {
                    "key": "A",
                    "text": "根节点 -> 左子树 -> 右子树"
                  },
                  {
                    "key": "B",
                    "text": "左子树 -> 根节点 -> 右子树"
                  },
                  {
                    "key": "C",
                    "text": "左子树 -> 右子树 -> 根节点"
                  },
                  {
                    "key": "D",
                    "text": "根节点 -> 右子树 -> 左子树"
                  }
                ],
                "answer": "C",
                "analysis": "后序遍历（Post-order Traversal）遵循“左右根”的递归顺序，即先遍历左子树，再遍历右子树，最后访问根节点。A为先序，B为中序。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">并查集与图表示结构</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      },
      {
        "title": "算法设计与分析 (Algorithm Design & Analysis)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：算法复杂度分析与主定理",
            "intro": "学习关于 算法复杂度分析与主定理 的核心专业理论。",
            "content": "<ul>\n<li><strong>渐进符号定义</strong>：</li>\n<li><strong>大 O（渐进上界）</strong>：最坏情况分析。</li>\n<li><strong>\\Omega（渐进下界）</strong>：最好情况分析。</li>\n<li><strong>\\Theta（确界）</strong>：当上界与下界相同时，精确描述算法特征。</li>\n<li><strong>主定理（Master Theorem）求解递归方程</strong>：</li>\n</ul>\n<p>用于求解形如 T(n) = a T(n/b) + f(n) 的分治递归方程（其中 a \\ge 1, b > 1）。通过比较 f(n) 与 n^{\\log_b a} 的增长率：</p>\n<ul>\n<li><strong>情况 1</strong>：若 f(n) = O(n^{\\log_b a - \\epsilon})，则 T(n) = \\Theta(n^{\\log_b a})。</li>\n<li><strong>情况 2</strong>：若 f(n) = \\Theta(n^{\\log_b a})，则 T(n) = \\Theta(n^{\\log_b a} \\log n)。</li>\n<li><strong>情况 3</strong>：若 f(n) = \\Omega(n^{\\log_b a + \\epsilon}) 且满足正则条件 a f(n/b) \\le c f(n)，则 T(n) = \\Theta(f(n))。</li>\n</ul>",
            "quizzes": [
              {
                "question": "设有分治法产生的递推关系式 $T(n) = 2T(n/2) + O(n)$，根据主定理，该算法的时间复杂度为：",
                "options": [
                  {
                    "key": "A",
                    "text": "$O(n)$"
                  },
                  {
                    "key": "B",
                    "text": "$O(n \\log n)$"
                  },
                  {
                    "key": "C",
                    "text": "$O(n^2)$"
                  },
                  {
                    "key": "D",
                    "text": "$O(2^n)$"
                  }
                ],
                "answer": "B",
                "analysis": "此方程中 $a = 2, b = 2, f(n) = O(n)$。计算 $n^{\\log_b a} = n^{\\log_2 2} = n^1 = n$。因为 $f(n)$ 与 $n^{\\log_b a}$ 同阶，符合主定理情况 2，因此其闭式解为 $T(n) = \\Theta(n \\log n)$。"
              },
              {
                "question": "贪心算法在求解问题时，所做出的决策是：",
                "options": [
                  {
                    "key": "A",
                    "text": "依据未来全局最优值做出当前选择"
                  },
                  {
                    "key": "B",
                    "text": "仅依据当前状态做出局部最优选择，不考虑全局后果"
                  },
                  {
                    "key": "C",
                    "text": "遍历所有可能的分支后再做选择"
                  },
                  {
                    "key": "D",
                    "text": "随机做出选择"
                  }
                ],
                "answer": "B",
                "analysis": "贪心算法的特征是“目光短浅”，每一步都做出局部当前状态下的最佳选择。只要问题满足贪心选择性质，局部最优的累积就能推导并达成全局最优。"
              },
              {
                "question": "Dijkstra 算法无法正确处理含有负权边的图，其根本原因是：",
                "options": [
                  {
                    "key": "A",
                    "text": "负权边会导致 CPU 指令出现异常"
                  },
                  {
                    "key": "B",
                    "text": "算法的贪心前提是“路径长度单调递增”，一旦有负权边，已确定的最短路径节点可能会被后入的负权路径刷新，导致贪心失效"
                  },
                  {
                    "key": "C",
                    "text": "负权边使图无法生成邻接矩阵"
                  },
                  {
                    "key": "D",
                    "text": "算法不支持使用优先级队列"
                  }
                ],
                "answer": "B",
                "analysis": "Dijkstra 算法基于贪心。一旦某个节点被移出未确定集合，算法即认定该节点的最短路径已终结确定，后续不会再对其更新。但若存在负权边，后续松弛可能产生更短路径，使得之前的确定失效。"
              },
              {
                "question": "在 0-1 背包问题中，若物品的重量与价值均已知，对于不可分割物品的装包，下列算法中必能求得全局最优解的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "按照物品单位价值（价值/重量）进行降序装包的贪心算法"
                  },
                  {
                    "key": "B",
                    "text": "状态转移方程为 $dp[i][j] = \\max(dp[i-1][j], dp[i-1][j-w[i]] + v[i])$ 的动态规划算法"
                  },
                  {
                    "key": "C",
                    "text": "每次随机挑选物品的算法"
                  },
                  {
                    "key": "D",
                    "text": "优先装载最轻物品的贪心算法"
                  }
                ],
                "answer": "B",
                "analysis": "0-1 背包物品不可分割，贪心算法（如按单位价值或最轻物品优先）只能求得近似解，无法保证全局最优。只有采用动态规划（转移方程通过状态表记录是否选择当前物品的最优决策）方能求得绝对的最优解。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">算法复杂度分析与主定理</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：四大经典算法设计策略",
            "intro": "学习关于 四大经典算法设计策略 的核心专业理论。",
            "content": "<ul>\n<li><strong>分治法（Divide and Conquer）</strong>：</li>\n</ul>\n<p>将原问题分解为若干个规模较小但结构与原问题相似的独立子问题，递归求解这些子问题，最后合并子问题的解。</p>\n<p>*典型应用*：归并排序（时间复杂度恒定为 O(n \\log n)）、快速排序（均摊 O(n \\log n)，最坏退化为 O(n^2)）。</p>\n<ul>\n<li><strong>动态规划（Dynamic Programming）</strong>：</li>\n</ul>\n<p>适用于具有<strong>重叠子问题（Overlapping Subproblems）</strong>和<strong>最优子结构（Optimal Substructure）</strong>性质的问题。它采用自底向上的方法，利用一张表格（或数组）存储已求解子问题的答案，避免重复计算（即备忘录法）。</p>\n<p>*核心要素*：定义状态（DP 数组的物理含义）与推导<strong>状态转移方程</strong>。</p>\n<p>*典型应用*：0-1 背包问题、最长公共子序列（LCS）、Floyd 全源最短路径算法。</p>\n<ul>\n<li><strong>贪心算法（Greedy Algorithm）</strong>：</li>\n</ul>\n<p>在对问题求解时，总是做出<strong>在当前看来是最好的选择</strong>。即它不从整体最优上加以考虑，所做出的仅是某种意义上的局部最优解。贪心算法要能求得全局最优解，问题必须满足<strong>贪心选择性质</strong>和<strong>最优子结构性质</strong>。</p>\n<p>*典型应用*：Dijkstra 单源最短路径算法、Kruskal 最小生成树算法、Huffman 编码。</p>\n<ul>\n<li><strong>回溯法（Backtracking）</strong>：</li>\n</ul>\n<p>一种系统地搜索问题解空间树的深度优先探索策略。当搜索到某节点发现当前路径不包含解时，立即回退（回溯）并尝试其他分支。通过引入<strong>剪枝函数（Pruning Functions）</strong>（约束函数或限界函数）避免无效搜索，极大缩减解空间规模。</p>\n<p>*典型应用*：N 皇后问题、图的着色、全排列。</p>",
            "quizzes": [
              {
                "question": "快速排序（Quick Sort）在最坏情况下的时间复杂度是 $O(n^2)$，为了避免这种情况，常用的优化手段是：",
                "options": [
                  {
                    "key": "A",
                    "text": "换用递归深度更浅的合并方式"
                  },
                  {
                    "key": "B",
                    "text": "采用“三数取中法（Median-of-Three）”或随机法来选择基准元素（Pivot）"
                  },
                  {
                    "key": "C",
                    "text": "限制参与排序的数据只能是正整数"
                  },
                  {
                    "key": "D",
                    "text": "将数组的后半部分直接截断"
                  }
                ],
                "answer": "B",
                "analysis": "快排最差情况发生在每次划分的基准元素都是当前子数组的最大或最小值（导致每次只能划分出 1 和 $n-1$ 个元素，退化为冒泡）。采用三数取中或随机选择基准，可极大可能保证每次划分均分，稳定在 $O(n \\log n)$。"
              },
              {
                "question": "回溯法（Backtracking）在搜索问题解空间树时，通常采用的遍历策略是：",
                "options": [
                  {
                    "key": "A",
                    "text": "广度优先搜索（BFS）"
                  },
                  {
                    "key": "B",
                    "text": "深度优先搜索（DFS）"
                  },
                  {
                    "key": "C",
                    "text": "贪心优先搜索"
                  },
                  {
                    "key": "D",
                    "text": "随机路径搜索"
                  }
                ],
                "answer": "B",
                "analysis": "回溯法在本质上是一种带有剪枝的深度优先搜索（DFS）。它沿着解空间树的一条路径深入探索，一旦发现当前节点无法产生解，则退出当前路径（回溯）转而探索其他兄弟分支。"
              },
              {
                "question": "能够正确求解含有负权边的图的单源最短路径，但不支持负权回路的算法是：",
                "options": [
                  {
                    "key": "A",
                    "text": "Dijkstra 算法"
                  },
                  {
                    "key": "B",
                    "text": "Bellman-Ford 算法 (或其优化 SPFA)"
                  },
                  {
                    "key": "C",
                    "text": "Kruskal 算法"
                  },
                  {
                    "key": "D",
                    "text": "Floyd-Warshall 算法"
                  }
                ],
                "answer": "B",
                "analysis": "Bellman-Ford 算法通过对所有边进行 $V-1$ 次松弛操作，能正确处理负权边并检测负权回路。Floyd 虽支持负权但属于多源最短路径。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">四大经典算法设计策略</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：经典图论算法",
            "intro": "学习关于 经典图论算法 的核心专业理论。",
            "content": "<ul>\n<li><strong>最小生成树（MST）算法</strong>：</li>\n<li><strong>Kruskal 算法</strong>：贪心地按边权升序选择边，使用<strong>并查集</strong>判断是否成环。适合稀疏图，复杂度 O(E \\log E)。</li>\n<li><strong>Prim 算法</strong>：从单一顶点出发，每次贪心地选择连接已选顶点集合与未选集合的最小权值边。适合稠密图，配合斐波那契堆可优化至 O(E + V \\log V)。</li>\n<li><strong>单源最短路径（SSSP）算法</strong>：</li>\n<li><strong>Dijkstra 算法</strong>：贪心策略。每次从未确定最短路径的顶点中选择距离源点最近的一个加入集合，并松弛（Relax）其邻接边。*限制：边权不能为负*。</li>\n</ul>\n<p>---</p>",
            "quizzes": [
              {
                "question": "动态规划策略与分治法策略的最大区别在于：",
                "options": [
                  {
                    "key": "A",
                    "text": "动态规划必须采用递归方式实现，而分治法必须采用迭代"
                  },
                  {
                    "key": "B",
                    "text": "分治法的子问题相互独立，而动态规划的子问题往往存在重叠，需通过存储子问题解避免重复计算"
                  },
                  {
                    "key": "C",
                    "text": "分治法只适合数值计算，动态规划适合逻辑推导"
                  },
                  {
                    "key": "D",
                    "text": "动态规划的时间复杂度一定比分治法低"
                  }
                ],
                "answer": "B",
                "analysis": "分治法（如快排、归并）的子问题之间是不重叠、互相独立的；而动态规划（如背包、LCS）面临的子问题具有重叠性。动态规划通过表格记录子问题解，避免了重复计算，从而将指数级计算降为多项式级。"
              },
              {
                "question": "Kruskal 算法在求解图的最小生成树时，其核心的贪心行为是：",
                "options": [
                  {
                    "key": "A",
                    "text": "每次选择距离源点最近的未加入顶点"
                  },
                  {
                    "key": "B",
                    "text": "每次选择权值最小且不与已选边构成回路的边加入"
                  },
                  {
                    "key": "C",
                    "text": "每次从一个固定顶点出发扩展最近的邻接点"
                  },
                  {
                    "key": "D",
                    "text": "随机挑选边直到图连通"
                  }
                ],
                "answer": "B",
                "analysis": "Kruskal 算法将图中的边按权值升序排列，每次都尝试挑选权值最小的边。若该边连接的两个顶点属于不同的连通分量（通过并查集判断，保证不生成环），则将其并入生成树。"
              },
              {
                "question": "设 $n$ 为问题规模，以下算法时间复杂度增长率最高的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "$O(n^2)$"
                  },
                  {
                    "key": "B",
                    "text": "$O(2^n)$"
                  },
                  {
                    "key": "C",
                    "text": "$O(n \\log n)$"
                  },
                  {
                    "key": "D",
                    "text": "$O(n!)$"
                  }
                ],
                "answer": "D",
                "analysis": "阶乘级复杂度 $O(n!)$ 的增长速度快于指数级 $O(2^n)$。复杂度排序为：$O(n \\log n) < O(n^2) < O(2^n) < O(n!)$。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">经典图论算法</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      }
    ]
  },
  {
    "category": "数据库与网络",
    "courses": [
      {
        "title": "数据库系统 (Database Systems)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：事务管理与 ACID 特性底层原理",
            "intro": "学习关于 事务管理与 ACID 特性底层原理 的核心专业理论。",
            "content": "<ul>\n<li><strong>原子性（Atomicity）与 Undo Log</strong>：</li>\n</ul>\n<p>事务是数据库操作的最小逻辑单位。原子性规定事务内的操作要么全部提交成功，要么全部回滚。</p>\n<p>*底层机制*：数据库引入了<strong>回滚日志（Undo Log）</strong>。在事务中对数据进行任何修改（<code>INSERT</code>/<code>UPDATE</code>/<code>DELETE</code>）前，系统先将该操作的反向逆操作（例如，若执行插入，日志则记录删除；若执行修改，日志则记录修改前的值）写入 Undo Log。一旦事务失败或显式调用 <code>ROLLBACK</code>，引擎读取 Undo Log 逆向执行，从而将数据恢复到事务开始前的状态。</p>\n<ul>\n<li><strong>持久性（Durability）与 Redo Log / WAL</strong>：</li>\n</ul>\n<p>持久性保障事务一旦提交，其修改就永久保存在物理磁盘中。</p>\n<p>*底层机制*：为提升性能，数据库修改数据是先写内存缓冲区（Buffer Pool）再异步刷盘。为防宕机丢失，采用 <strong>WAL（Write-Ahead Logging，预写日志）</strong> 策略：在事务提交前，先把修改记录写入物理<strong>重做日志（Redo Log）</strong>并强制刷盘（顺序 I/O 速度极快）。当系统崩溃重启时，通过重放 Redo Log 重新把修改应用到物理页（页重构），确保数据不丢失。</p>\n<ul>\n<li><strong>隔离性（Isolation）与锁/MVCC</strong>：</li>\n</ul>\n<p>隔离性防止并发事务交错执行时导致的数据混乱。由排他锁/共享锁以及多版本并发控制（MVCC）共同实现。</p>\n<ul>\n<li><strong>一致性（Consistency）</strong>：</li>\n</ul>\n<p>一致性是事务的最终追求，要求数据库从一个合法状态转移到另一个合法状态，需完整性约束（外键、触发器、非空限制）以及原子性、隔离性、持久性共同支撑。</p>",
            "quizzes": [
              {
                "question": "数据库事务的四大特性（ACID）中，用来保障“事务对数据的修改在系统崩溃重启后依然完好”的特性及其底层组件是：",
                "options": [
                  {
                    "key": "A",
                    "text": "原子性，由 Undo Log 保障"
                  },
                  {
                    "key": "B",
                    "text": "一致性，由 Buffer Pool 保障"
                  },
                  {
                    "key": "C",
                    "text": "持久性，由 Redo Log 与 WAL 机制保障"
                  },
                  {
                    "key": "D",
                    "text": "隔离性，由 MVCC 保障"
                  }
                ],
                "answer": "C",
                "analysis": "持久性保障事务提交后永久有效。InnoDB 引擎依靠 Redo Log 顺序预写机制（WAL），在系统意外宕机重启后通过重做 Redo Log 恢复未刷盘的脏页，确保数据持久化。"
              },
              {
                "question": "关于 MVCC（多版本并发控制）的运作机制，下列说法错误的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "MVCC 使得对同一行数据的读操作和写操作可以并行进行，无需相互等待锁释放"
                  },
                  {
                    "key": "B",
                    "text": "它通过在物理磁盘中复制几十个相同的物理数据库文件来实现版本控制"
                  },
                  {
                    "key": "C",
                    "text": "它主要依赖记录中的隐藏列、Undo Log 版本链以及 ReadView 来判断版本的可见性"
                  },
                  {
                    "key": "D",
                    "text": "在读已提交（RC）隔离级别下，每次普通 `SELECT` 都会生成一个新的 ReadView"
                  }
                ],
                "answer": "B",
                "analysis": "MVCC 并不是复制物理数据库文件，而是利用 Undo Log 机制将每次修改前的旧状态以链表形式连接，配合只读的 ReadView 快照判定逻辑来实现多版本共存。"
              },
              {
                "question": "数据库中“幻读”（Phantom Read）缺陷的具体表现是：",
                "options": [
                  {
                    "key": "A",
                    "text": "同一事务中多次读取同一行，发现字段数值被他人修改了"
                  },
                  {
                    "key": "B",
                    "text": "读取到了他人已经修改但尚未提交的数据"
                  },
                  {
                    "key": "C",
                    "text": "同一事务中根据相同条件进行范围读取，发现多出了（或减少了）他人新插入（或删除）的行"
                  },
                  {
                    "key": "D",
                    "text": "数据库发生死锁，无法输出结果"
                  }
                ],
                "answer": "C",
                "analysis": "幻读侧重于**范围查询中行数的变化**（如原本查出 5 行，第二次查出 6 行，多出了一行像幻觉一样）。A 选项是不可重复读，描述的是同一行数据内容被改；B 选项是脏读。"
              },
              {
                "question": "在 SQL 优化中，使用 `EXPLAIN` 关键字查看执行计划，如果 `type` 字段显示为 `ALL`，意味着：",
                "options": [
                  {
                    "key": "A",
                    "text": "使用了全索引扫描，效率极高"
                  },
                  {
                    "key": "B",
                    "text": "执行了全表扫描（Full Table Scan），效率最低，通常需要建立索引优化"
                  },
                  {
                    "key": "C",
                    "text": "发生死锁，执行终止"
                  },
                  {
                    "key": "D",
                    "text": "查询条件语法错误"
                  }
                ],
                "answer": "B",
                "analysis": "在 `EXPLAIN` 结果中，`type` 代表访问类型。`ALL` 代表全表扫描，意味着数据库需要从头到尾读取整张表的文件，对于大表而言性能开销极大，必须予以索引优化。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">事务管理与 ACID 特性底层原理</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：并发隔离级别与 MVCC 机制",
            "intro": "学习关于 并发隔离级别与 MVCC 机制 的核心专业理论。",
            "content": "<ul>\n<li><strong>隔离级别与并发缺陷对照表</strong>：</li>\n</ul>\n<p>| 隔离级别 | 脏读（Dirty Read） | 不可重复读（Non-repeatable Read） | 幻读（Phantom Read） |</p>\n<p>| :--- | :---: | :---: | :---: |</p>\n<p>| <strong>读未提交（Read Uncommitted）</strong> | 允许 | 允许 | 允许 |</p>\n<p>| <strong>读已提交（Read Committed）</strong> | 不允许 | 允许 | 允许 |</p>\n<p>| <strong>可重复读（Repeatable Read）</strong> | 不允许 | 不允许 | 允许（InnoDB 依靠 Next-Key 锁解决） |</p>\n<p>| <strong>串行化（Serializable）</strong> | 不允许 | 不允许 | 不允许 |</p>\n<ul>\n<li><strong>MVCC (Multi-Version Concurrency Control) 多版本并发控制机制</strong>：</li>\n</ul>\n<p>MVCC 允许数据库在执行“读写”并发时<strong>不加锁</strong>，极大提升了并发吞吐量。以 MySQL InnoDB 为例：</p>\n<ul>\n<li><strong>隐藏列</strong>：每行记录后均包含三个隐藏列：<code>DB_TRX_ID</code>（最近修改该行的事务 ID）、<code>DB_ROLL_PTR</code>（回滚指针，指向 Undo Log 中的历史版本链）和 <code>DB_ROW_ID</code>。</li>\n<li><strong>ReadView (读视图)</strong>：当事务发起“快照读”（普通 <code>SELECT</code>）时产生。ReadView 包含：当前活跃的未提交事务 ID 列表（<code>m_ids</code>）、最小活跃事务 ID（<code>min_trx_id</code>）和下一个将要分配的事务 ID（<code>max_trx_id</code>）。</li>\n<li><strong>版本链可见性规则</strong>：读取时沿着 Undo Log 版本链回溯，若某版本的 <code>DB_TRX_ID</code> 小于 <code>min_trx_id</code>（说明该版本在 ReadView 创建前已提交），则该版本可见；若大于 <code>max_trx_id</code>（在创建后才开启的事务），则不可见；若在两者之间，则判断其是否在 <code>m_ids</code> 列表中（未提交则不可见，已提交则可见）。</li>\n</ul>",
            "quizzes": [
              {
                "question": "并发事务中，事务 A 读取了事务 B 已经修改但尚未提交的数据，之后事务 B 发生回滚。这种并发缺陷称为：",
                "options": [
                  {
                    "key": "A",
                    "text": "脏读（Dirty Read）"
                  },
                  {
                    "key": "B",
                    "text": "不可重复读（Non-repeatable Read）"
                  },
                  {
                    "key": "C",
                    "text": "幻读（Phantom Read）"
                  },
                  {
                    "key": "D",
                    "text": "丢失修改（Lost Update）"
                  }
                ],
                "answer": "A",
                "analysis": "脏读是指读取到了并发事务未提交的数据，如果该事务随后回滚，则读取的数据就是无效的“脏”数据。"
              },
              {
                "question": "在二级索引（非聚簇索引）中，如果需要查询非索引字段的数据，通常会发生的动作为：",
                "options": [
                  {
                    "key": "A",
                    "text": "锁表"
                  },
                  {
                    "key": "B",
                    "text": "重新生成聚簇索引"
                  },
                  {
                    "key": "C",
                    "text": "回表查询（先查到主键，再用主键在聚簇索引中定位行数据）"
                  },
                  {
                    "key": "D",
                    "text": "数据库崩溃"
                  }
                ],
                "answer": "C",
                "analysis": "二级索引叶子节点只存储了主键 ID。如果要查询非该索引包含的字段，必须拿着主键 ID 去聚簇索引树上再次查找整行数据，这一过程称为“回表”。"
              },
              {
                "question": "MySQL InnoDB 依靠什么锁机制在“可重复读”隔离级别下防止幻读：",
                "options": [
                  {
                    "key": "A",
                    "text": "行锁（Record Lock）"
                  },
                  {
                    "key": "B",
                    "text": "表锁（Table Lock）"
                  },
                  {
                    "key": "C",
                    "text": "间隙锁（Gap Lock）与临键锁（Next-Key Lock）"
                  },
                  {
                    "key": "D",
                    "text": "共享锁（S 锁）"
                  }
                ],
                "answer": "C",
                "analysis": "临键锁（Next-Key Lock）是行锁和间隙锁的结合，它不仅锁住记录行，还会锁住记录行之间的间隙，防止其他并发事务在这个范围内插入新记录，从而在 RR 级别下防御了幻读。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">并发隔离级别与 MVCC 机制</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：索引体系与查询优化",
            "intro": "学习关于 索引体系与查询优化 的核心专业理论。",
            "content": "<ul>\n<li><strong>B+ 树索引结构</strong>：</li>\n</ul>\n<p>B+ 树的叶子节点存放全部键值和数据，非叶子节点只作为目录索引。这保证了查找任意键值的磁盘 I/O 次数相同且极少。</p>\n<ul>\n<li><strong>聚簇索引（Clustered Index）与二级索引（Secondary Index）</strong>：</li>\n</ul>\n<p>聚簇索引的叶子节点直接存放行数据（数据与索引合一，每张表仅能有一个）；二级索引（非聚簇索引，如联合索引、单列辅助索引）叶子节点存放的是主键值。访问二级索引需要先查到主键，再到聚簇索引中“<strong>回表</strong>”查询行数据。</p>\n<p>---</p>",
            "quizzes": [
              {
                "question": "MySQL InnoDB 引擎默认的事务隔离级别是：",
                "options": [
                  {
                    "key": "A",
                    "text": "读未提交（Read Uncommitted）"
                  },
                  {
                    "key": "B",
                    "text": "读已提交（Read Committed）"
                  },
                  {
                    "key": "C",
                    "text": "可重复读（Repeatable Read）"
                  },
                  {
                    "key": "D",
                    "text": "串行化（Serializable）"
                  }
                ],
                "answer": "C",
                "analysis": "MySQL 默认隔离级别为 Repeatable Read。在此级别下，同一事务内多次读取同一行数据的结果是恒定一致的。InnoDB 在此级别下结合 MVCC 和 Next-Key Locks（临键锁）基本解决了幻读问题。"
              },
              {
                "question": "设有一个联合索引 `idx_a_b_c (a, b, c)`，下列 SQL 语句中，无法使用该索引（完全失效）的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "`SELECT * FROM tbl WHERE a = 1;`"
                  },
                  {
                    "key": "B",
                    "text": "`SELECT * FROM tbl WHERE a = 1 AND b = 2;`"
                  },
                  {
                    "key": "C",
                    "text": "`SELECT * FROM tbl WHERE b = 2 AND c = 3;`"
                  },
                  {
                    "key": "D",
                    "text": "`SELECT * FROM tbl WHERE a = 1 AND c = 3;`"
                  }
                ],
                "answer": "C",
                "analysis": "根据**最左前缀匹配原则**，查询条件必须包含联合索引的最左侧字段（此处为 `a`），索引才可能生效。C 选项的条件只包含了 `b` 和 `c`，缺失了 `a`，导致索引完全失效，触发全表扫描。D 选项能用到 `a` 字段的索引过滤。"
              },
              {
                "question": "数据库设计中，若将一个关系模式分解为满足“消除了非主属性对码的部分函数依赖”的要求，该模式达到了：",
                "options": [
                  {
                    "key": "A",
                    "text": "第一范式（1NF）"
                  },
                  {
                    "key": "B",
                    "text": "第二范式（2NF）"
                  },
                  {
                    "key": "C",
                    "text": "第三范式（3NF）"
                  },
                  {
                    "key": "D",
                    "text": "BCNF 范式"
                  }
                ],
                "answer": "B",
                "analysis": ""
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">索引体系与查询优化</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      },
      {
        "title": "计算机网络 (Computer Networks)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：体系结构与 TCP 可靠传输机制",
            "intro": "学习关于 体系结构与 TCP 可靠传输机制 的核心专业理论。",
            "content": "<ul>\n<li><strong>OSI 七层模型与 TCP/IP 四层架构</strong>：</li>\n<li>OSI：物理层、数据链路层、网络层（IP）、传输层（TCP/UDP）、会话层、表示层、应用层。</li>\n<li>TCP/IP：网络接口层、网络层、传输层、应用层。</li>\n<li><strong>TCP 三次握手过程与状态转移</strong>：</li>\n</ul>\n<p>三次握手用于同步双向的初始序列号（ISN）并确认双方的接收与发送能力。</p>\n<p>1. <strong>第一次握手</strong>：客户端发送连接请求报文（SYN = 1, seq = x），客户端进入 <code>SYN_SENT</code> 状态。</p>\n<p>2. <strong>第二次握手</strong>：服务端收到后，同意连接则返回响应报文（SYN = 1, ACK = 1, seq = y, ack = x + 1），服务端进入 <code>SYN_RCVD</code> 状态。</p>\n<p>3. <strong>第三次握手</strong>：客户端收到响应，返回确认报文（ACK = 1, seq = x + 1, ack = y + 1），客户端进入 <code>ESTABLISHED</code> 状态。服务端收到后也进入 <code>ESTABLISHED</code>。</p>\n<ul>\n<li><strong>TCP 四次挥手与 TIME_WAIT 状态</strong>：</li>\n</ul>\n<p>由于 TCP 是全双工的，每个方向的连接关闭都需要单独发送 FIN 包和接收 ACK 确认。主动关闭方在收到被动方的最后一个 FIN 并发送 ACK 后，必须进入 <strong><code>TIME_WAIT</code> 状态并等待 2MSL（最大报文寿命两倍）</strong> 的时间。</p>\n<p>*TIME_WAIT 的两个核心作用*：</p>\n<p>1. <strong>保证可靠关闭</strong>：防止最后一个 ACK 丢失。如果丢失，被动方会重发 FIN，主动方在 2MSL 内可以重新发送 ACK。</p>\n<p>2. <strong>清理残留报文</strong>：使当前连接产生的所有网络报文在网络中过期消失，防止这些旧报文在新建立的相同四元组连接中被误收造成干扰。</p>",
            "quizzes": [
              {
                "question": "TCP 建立连接的三次握手过程中，客户端收到服务端的 SYN + ACK 报文后，处于的状态是：",
                "options": [
                  {
                    "key": "A",
                    "text": "`SYN_SENT`"
                  },
                  {
                    "key": "B",
                    "text": "`SYN_RCVD`"
                  },
                  {
                    "key": "C",
                    "text": "`ESTABLISHED`"
                  },
                  {
                    "key": "D",
                    "text": "`TIME_WAIT`"
                  }
                ],
                "answer": "C",
                "analysis": "客户端收到第二步的 SYN + ACK 报文后，向服务端回复最后的 ACK，此时客户端便完成了它这一端的连接建立，状态变迁为 `ESTABLISHED`。服务端收到最后的 ACK 后也转为 `ESTABLISHED`。"
              },
              {
                "question": "TCP 拥塞控制中的“快重传（Fast Retransmit）”机制，要求发送方触发立即重传的条件是：",
                "options": [
                  {
                    "key": "A",
                    "text": "连续收到 3 个针对同一报文的重复 ACK 确认"
                  },
                  {
                    "key": "B",
                    "text": "经历了一个完整的往返时间（RTT）仍未收到 ACK"
                  },
                  {
                    "key": "C",
                    "text": "接收端直接发送 RESET 复位包"
                  },
                  {
                    "key": "D",
                    "text": "拥塞窗口被置为 1"
                  }
                ],
                "answer": "A",
                "analysis": "快重传规定，一旦发送方连续收到 3 个对同一个丢失数据包的重复确认 ACK，就表明该包已确凿丢失，立即在定时器超时前进行重传，从而提高传输效率。"
              },
              {
                "question": "HTTP 2.0 协议引入的多路复用（Multiplexing）技术，主要是为了解决 HTTP 1.1 的什么问题：",
                "options": [
                  {
                    "key": "A",
                    "text": "单次请求数据量过大导致的网络中断"
                  },
                  {
                    "key": "B",
                    "text": "浏览器端并发 TCP 连接数受限以及应用层队头阻塞（Head-of-line Blocking）"
                  },
                  {
                    "key": "C",
                    "text": "无法加密传输内容"
                  },
                  {
                    "key": "D",
                    "text": "服务器无法主动向客户端推送数据"
                  }
                ],
                "answer": "B",
                "analysis": "HTTP 1.1 中即使有 Keep-Alive，在单个 TCP 连接上也必须等前一个请求响应返回才能发下一个，容易发生队头阻塞。HTTP 2.0 在单一 TCP 连接上划分成多个独立的双向流（二进制分帧），允许请求与响应并发交错传输，彻底消除应用层队头阻塞。"
              },
              {
                "question": "在 TCP 首部中，用于实现滑动窗口流量控制（Flow Control）的字段是：",
                "options": [
                  {
                    "key": "A",
                    "text": "校验和（Checksum）"
                  },
                  {
                    "key": "B",
                    "text": "窗口大小（Window Size / rwnd）"
                  },
                  {
                    "key": "C",
                    "text": "序列号（Sequence Number）"
                  },
                  {
                    "key": "D",
                    "text": "确认号（Acknowledgment Number）"
                  }
                ],
                "answer": "B",
                "analysis": "TCP 首部中的“窗口”（Window）字段是由接收方告知发送方的接收窗口大小（rwnd）。它代表当前接收缓冲区剩余可用字节数，用以动态控制发送方的发送速度，实现流量控制防止接收端溢出。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">体系结构与 TCP 可靠传输机制</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：TCP 拥塞控制机制",
            "intro": "学习关于 TCP 拥塞控制机制 的核心专业理论。",
            "content": "<ul>\n<li><strong>控制算法演进</strong>：</li>\n</ul>\n<p>拥塞控制用于防止过多数据涌入网络造成网络过载。发送端维持一个<strong>拥塞窗口（cwnd）</strong>，发送速率受限于 <code>min(cwnd, rwnd)</code>（接收窗口）。</p>\n<ul>\n<li><strong>慢启动（Slow Start）</strong>：初始 <code>cwnd = 1</code>。每收到一个 ACK，<code>cwnd</code> 翻倍（指数级增长），直到达到慢启动阈值 <code>ssthresh</code>。</li>\n<li><strong>拥塞避免（Congestion Avoidance）</strong>：达到 <code>ssthresh</code> 后，<code>cwnd</code> 每个往返时间（RTT）只增加 1（线性增长）。若发生网络拥塞（超时），则 <code>ssthresh</code> 降为当前 <code>cwnd</code> 的一半，<code>cwnd</code> 重置为 1，重新进入慢启动。</li>\n<li><strong>快重传（Fast Retransmit）</strong>：接收端收到失序包时立即发送重复 ACK。发送端连续收到 3 个重复 ACK 时，认定该包丢失，立即重传，无需等待超时。</li>\n<li><strong>快恢复（Fast Recovery）</strong>：配合快重传。此时不将 <code>cwnd</code> 降为 1，而是降为原先的一半，<code>ssthresh</code> 也设为该值，然后直接开始拥塞避免算法（线性增长）。</li>\n</ul>",
            "quizzes": [
              {
                "question": "在 TCP 断开连接的四次挥手协议中，主动关闭方进入 `TIME_WAIT` 状态并必须等待 2MSL 时间，其主要目的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "确保被动方发送的数据全部被接收完毕"
                  },
                  {
                    "key": "B",
                    "text": "保证最后一个确认 ACK 报文能到达被动方以安全关闭连接，并使网络中所有残留报文过期失效"
                  },
                  {
                    "key": "C",
                    "text": "提高 TCP 的数据吞吐量"
                  },
                  {
                    "key": "D",
                    "text": "重新计算拥塞控制窗口大小"
                  }
                ],
                "answer": "B",
                "analysis": "2MSL 的等待时间可确保因网络延迟的旧报文自然消亡，并确保被动方若未收到最后的 ACK 而重发 FIN 时，主动方仍在 TIME_WAIT 状态内可对其重新确认。"
              },
              {
                "question": "HTTPS 在 TLS 握手过程中，用于加密后续“实际网页内容数据（应用层数据）”的密钥是：",
                "options": [
                  {
                    "key": "A",
                    "text": "服务端证书里的非对称公钥"
                  },
                  {
                    "key": "B",
                    "text": "客户端本地保留的非对称私钥"
                  },
                  {
                    "key": "C",
                    "text": "双方通过非对称加密协商产生的对称密钥"
                  },
                  {
                    "key": "D",
                    "text": "CA 机构分发的全局公钥"
                  }
                ],
                "answer": "C",
                "analysis": "非对称加密（公钥/私钥）由于计算量庞大，仅用于在 TLS 握手阶段安全地传递和协商“对称密钥”。一旦双方安全获得该“对称密钥”（Master Secret），后续应用层通信全部使用该对称密钥进行高效率加解密。"
              },
              {
                "question": "DNS（域名系统）协议在进行域名解析时，默认使用的传输层协议是：",
                "options": [
                  {
                    "key": "A",
                    "text": "TCP"
                  },
                  {
                    "key": "B",
                    "text": "UDP"
                  },
                  {
                    "key": "C",
                    "text": "IP"
                  },
                  {
                    "key": "D",
                    "text": "ICMP"
                  }
                ],
                "answer": "B",
                "analysis": "域名的普通查询通常只需要一次请求与一次应答，且对实时性要求高，因此 DNS 默认使用无连接、速度快的 UDP 协议（端口号 53）。只有在区域传送（Zone Transfer）或报文超长时才使用 TCP。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">TCP 拥塞控制机制</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：应用层协议：HTTP 与 HTTPS 安全通道",
            "intro": "学习关于 应用层协议：HTTP 与 HTTPS 安全通道 的核心专业理论。",
            "content": "<ul>\n<li><strong>HTTP 1.0、1.1、2.0 与 3.0 的区别</strong>：</li>\n<li>*HTTP 1.1*：引入长连接（Keep-Alive）、管道化技术（Pipeline）。</li>\n<li>*HTTP 2.0*：多路复用（Multiplexing，单 TCP 连接上并发双向流，解决队头阻塞）、二进制分帧、头部压缩（HPACK）、服务器推送。</li>\n<li>*HTTP 3.0 (QUIC)*：弃用 TCP，基于 <strong>UDP</strong> 协议实现，彻底解决了 TCP 的传输层队头阻塞问题，支持极速 0-RTT 连接建立。</li>\n<li><strong>HTTPS 与 TLS 安全握手机制</strong>：</li>\n</ul>\n<p>HTTPS = HTTP + SSL/TLS。TLS 握手利用了<strong>非对称加密</strong>与<strong>对称加密</strong>的结合：</p>\n<p>1. 客户端向服务端发起请求，服务端返回经过权威 CA 机构签名的<strong>数字证书</strong>（内含服务端的公钥）。</p>\n<p>2. 客户端校验证书真伪。若合法，在本地生成一个随机的对称密钥（Pre-Master Secret）。</p>\n<p>3. 客户端用证书里的<strong>公钥</strong>对该对称密钥加密，发送给服务端。</p>\n<p>4. 服务端用自己的私钥解密，获得对称密钥。</p>\n<p>5. 之后的所有应用层通信均使用该<strong>对称密钥</strong>进行加密传输（对称加密速度快，适合大数据量传输）。</p>\n<p>---</p>",
            "quizzes": [
              {
                "question": "TCP 拥塞控制算法中，当拥塞窗口（cwnd）达到慢启动阈值（ssthresh）后，拥塞窗口的增长模式转化为：",
                "options": [
                  {
                    "key": "A",
                    "text": "指数增长（慢启动）"
                  },
                  {
                    "key": "B",
                    "text": "线性增长（拥塞避免）"
                  },
                  {
                    "key": "C",
                    "text": "停止增长"
                  },
                  {
                    "key": "D",
                    "text": "随机变动"
                  }
                ],
                "answer": "B",
                "analysis": "当 `cwnd < ssthresh` 时执行慢启动（指数翻倍）；一旦 `cwnd >= ssthresh`，为防网络过载，转为执行拥塞避免（线性每次 +1），使窗口平缓上升。"
              },
              {
                "question": "在计算机网络体系结构中，IP 协议和 TCP 协议分别工作在 OSI 七层模型中的：",
                "options": [
                  {
                    "key": "A",
                    "text": "物理层、数据链路层"
                  },
                  {
                    "key": "B",
                    "text": "网络层、传输层"
                  },
                  {
                    "key": "C",
                    "text": "传输层、应用层"
                  },
                  {
                    "key": "D",
                    "text": "网络层、会话层"
                  }
                ],
                "answer": "B",
                "analysis": "IP 协议负责主机到主机的路由寻址，属于网络层（Network Layer）；TCP 协议负责提供进程到进程的可靠端到端传输，属于传输层（Transport Layer）。"
              },
              {
                "question": "网络层中，ARP 协议的核心作用是：",
                "options": [
                  {
                    "key": "A",
                    "text": "将逻辑 IP 地址转换为物理 MAC 地址"
                  },
                  {
                    "key": "B",
                    "text": "在不同网络之间进行路由选择"
                  },
                  {
                    "key": "C",
                    "text": "自动分配动态 IP 地址给主机"
                  },
                  {
                    "key": "D",
                    "text": "将域名解析为 IP 地址"
                  }
                ],
                "answer": "A",
                "analysis": "ARP（Address Resolution Protocol，地址解析协议）工作在局域网内，通过广播形式寻找特定 IP 地址主机的物理网卡 MAC 地址，以完成数据帧的封装。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">应用层协议：HTTP 与 HTTPS 安全通道</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      },
      {
        "title": "全方位系统 (Full-Scale/Distributed Systems)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：分布式系统设计理论基石",
            "intro": "学习关于 分布式系统设计理论基石 的核心专业理论。",
            "content": "<ul>\n<li><strong>CAP 定理（Brewer's CAP Theorem）</strong>：</li>\n</ul>\n<p>一个分布式计算系统不可能同时满足以下三点：</p>\n<ul>\n<li><strong>C (Consistency, 强一致性)</strong>：所有节点在同一时刻访问的数据副本都是最新的且完全一致。</li>\n<li><strong>A (Availability, 高可用性)</strong>：系统在面临部分节点故障时，每个非故障节点对读写请求必须给出非错的响应（不保证是最新的）。</li>\n<li><strong>P (Partition Tolerance, 分区容错性)</strong>：在遇到由于网络断开导致的网络分区（Partition）时，系统依然能够提供服务。</li>\n</ul>\n<p>*CP 与 AP 的权衡*：在分布式网络中，网络分区故障（P）是必然会发生的客观事实。因此，系统设计必须在 <strong>CP（舍弃可用性，保证强一致）</strong> 或 <strong>AP（舍弃强一致，保证高可用与最终一致）</strong> 之间做出取舍。例如，金融交易系统倾向选择 CP；电商商品展示系统通常选择 AP。</p>\n<ul>\n<li><strong>BASE 理论（AP 的延伸）</strong>：</li>\n<li><strong>Basically Available (基本可用)</strong>：系统在出现故障时，允许部分损失（如响应时间延长、降级页面展示）。</li>\n<li><strong>Soft State (软状态)</strong>：允许系统内数据存在中间状态，且该状态在不影响整体可用性的前提下可以异步延迟同步。</li>\n<li><strong>Eventually Consistent (最终一致性)</strong>：经过一段时间的同步后，系统内所有节点的数据最终达到一致。</li>\n</ul>",
            "quizzes": [
              {
                "question": "分布式系统的 CAP 定理指出，在面临必然发生的数据网络分区（P）时，设计者必须在 CP 或 AP 中抉择。选择 CP 模型意味着：",
                "options": [
                  {
                    "key": "A",
                    "text": "舍弃分区容错性，保证强一致和高可用"
                  },
                  {
                    "key": "B",
                    "text": "在遭遇网络断开时，为了保证数据绝对一致（C），系统会暂停或拒绝非最新数据节点的访问，暂时牺牲可用性（A）"
                  },
                  {
                    "key": "C",
                    "text": "彻底放弃数据一致性，只追求最高的速度"
                  },
                  {
                    "key": "D",
                    "text": "只能使用单机数据库运行"
                  }
                ],
                "answer": "B",
                "analysis": "CP 模型（Consistency + Partition Tolerance）将一致性放在首位。如果网络断开导致两个节点无法通信，为了防止用户读到旧数据或写入不一致，系统会拒绝其中一侧分区的读写请求，即牺牲了可用性（A）。"
              },
              {
                "question": "防御高并发下“缓存穿透”隐患，工业界最常采用的高效过滤机制是：",
                "options": [
                  {
                    "key": "A",
                    "text": "在数据库建立主键索引"
                  },
                  {
                    "key": "B",
                    "text": "引入布隆过滤器（Bloom Filter）在缓存前预筛"
                  },
                  {
                    "key": "C",
                    "text": "强行锁定整张用户表"
                  },
                  {
                    "key": "D",
                    "text": "降低 Redis 的内存阈值"
                  }
                ],
                "answer": "B",
                "analysis": "布隆过滤器空间和时间效率极高。它利用多个哈希函数对数据映射位图，能够 100% 判定“一个元素绝对不存在于系统中”。把布隆过滤器放在缓存前，可以在不读缓存不读库的情况下拦截非法请求，防范缓存穿透。"
              },
              {
                "question": "传统哈希取模（`hash(key) % N`）负载均衡机制在节点扩容（$N$ 变化）时的致命缺陷是：",
                "options": [
                  {
                    "key": "A",
                    "text": "负载分配绝对不均匀"
                  },
                  {
                    "key": "B",
                    "text": "计算哈希值太慢，耗尽 CPU"
                  },
                  {
                    "key": "C",
                    "text": "几乎所有已有 Key 的映射位置全部改变，导致分布式缓存大面积失效"
                  },
                  {
                    "key": "D",
                    "text": "无法在 Linux 下运行"
                  }
                ],
                "answer": "C",
                "analysis": "当节点数 $N$ 改变，原本的取模余数计算结果会大面积改变，导致几乎所有 key 原先对应的存储节点发生偏离。这在分布式缓存中意味着全网缓存不命中，会给后台数据库带来灾难。"
              },
              {
                "question": "在微服务架构中，熔断器（Circuit Breaker）的“半开状态（Half-Open）”的具体表现是：",
                "options": [
                  {
                    "key": "A",
                    "text": "彻底断开服务，不再接受任何请求"
                  },
                  {
                    "key": "B",
                    "text": "允许部分流量通过进行服务健康状况尝试性检测，若成功则恢复关闭状态，若失败则退回打开（熔断）状态"
                  },
                  {
                    "key": "C",
                    "text": "发生死循环，系统瘫痪"
                  },
                  {
                    "key": "D",
                    "text": "将全部流量转发到备用数据库"
                  }
                ],
                "answer": "B",
                "analysis": "熔断器有三个状态：Closed（正常关闭）、Open（打开熔断，请求直接返回降级）。当熔断过一段时间后，进入 Half-Open（半开状态），允许微量测试流量去访问目标服务，如果成功则闭合恢复，如果依旧失败则重新打开熔断器保护系统。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">分布式系统设计理论基石</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：高并发缓存系统架构与防灾设计",
            "intro": "学习关于 高并发缓存系统架构与防灾设计 的核心专业理论。",
            "content": "<ul>\n<li><strong>缓存三大灾难性隐患及防御方案</strong>：</li>\n<li><strong>缓存穿透（Cache Penetration）</strong>：</li>\n</ul>\n<p>*成因*：查询一个<strong>数据库和缓存中都不存在</strong>的数据（如黑客恶意构造的非法 ID）。由于缓存不命中，每次请求都会穿透到数据库，造成数据库崩溃。</p>\n<p>*防御*：1. 使用<strong>布隆过滤器（Bloom Filter）</strong>在缓存层前进行数据存在性预筛；2. 将空结果（如 <code>null</code>）也写入缓存并设置较短的过期时间。</p>\n<ul>\n<li><strong>缓存击穿（Cache Breakdown）</strong>：</li>\n</ul>\n<p>*成因*：一个<strong>热点 Key</strong>（如爆款商品的抢购数据）在承载高并发访问的同时<strong>突然过期</strong>。导致瞬间海量请求全部涌入数据库，冲垮数据库。</p>\n<p>*防御*：1. 读数据库重建缓存时加互斥锁（Mutex Lock），仅允许一个线程去查库写缓存，其他线程等待；2. 设置热点数据“物理上永不过期”，在后台开启异步线程定期刷新过期时间。</p>\n<ul>\n<li><strong>缓存雪崩（Cache Avalanche）</strong>：</li>\n</ul>\n<p>*成因*：<strong>大量缓存 Key 在同一时间大面积失效</strong>（或缓存服务器宕机），导致原本应访问缓存的请求瞬间全部压向数据库，引发雪崩式崩溃。</p>\n<p>*防御*：1. 缓存失效时间加上一个随机盐值（Random Salt），避免集体过期；2. 搭建缓存高可用集群（如 Redis Sentinel 或 Cluster）；3. 引入多级缓存。</p>",
            "quizzes": [
              {
                "question": "分布式 BASE 理论是针对 AP 系统的延伸，其中“BASE”是如下三个短语的缩写：",
                "options": [
                  {
                    "key": "A",
                    "text": "基本可用（Basically Available）、软状态（Soft State）、最终一致性（Eventually Consistent）"
                  },
                  {
                    "key": "B",
                    "text": "银行家算法（Bankers）、原子性（Atomicity）、状态机（State）、有序性（Ensure）"
                  },
                  {
                    "key": "C",
                    "text": "备份（Backup）、自适应（Adaptive）、安全性（Safety）、易用性（Easy）"
                  },
                  {
                    "key": "D",
                    "text": "负载均衡（Balance）、安全控制（Security）、评估（Evaluate）、同步（Sync）"
                  }
                ],
                "answer": "A",
                "analysis": "BASE 理论是相对于 ACID 强一致要求的妥协。它提倡：基本可用（允许部分服务降级）、软状态（数据有中间过程状态）、最终一致性（不追求即时一致，但数据最终达成一致）。"
              },
              {
                "question": "热点 Key 在极高并发请求的瞬间突然过期，导致所有线程同时查库重建缓存，瞬间冲垮数据库。这称为：",
                "options": [
                  {
                    "key": "A",
                    "text": "缓存穿透"
                  },
                  {
                    "key": "B",
                    "text": "缓存雪崩"
                  },
                  {
                    "key": "C",
                    "text": "缓存击穿"
                  },
                  {
                    "key": "D",
                    "text": "缓存冗余"
                  }
                ],
                "answer": "C",
                "analysis": "热点数据过期导致请求瞬间直达数据库的现象叫“缓存击穿”（Breakdown）。解决方案通常是在重建缓存时加互斥锁，保证仅一个请求去查库重建，其余挂起等待。"
              },
              {
                "question": "一致性哈希（Consistent Hashing）算法中，数据 Key 被定位到具体服务节点的规则是：",
                "options": [
                  {
                    "key": "A",
                    "text": "数据 Key 取模后存放在固定索引的服务器上"
                  },
                  {
                    "key": "B",
                    "text": "数据 Key 映射到环上，顺时针方向寻找距离最近的服务器节点"
                  },
                  {
                    "key": "C",
                    "text": "随机分发给环上的空闲服务器"
                  },
                  {
                    "key": "D",
                    "text": "发给哈希值最小的服务器"
                  }
                ],
                "answer": "B",
                "analysis": "一致性哈希中，节点和 Key 均通过 Hash 映射在同一个 $0 \\sim 2^{32}-1$ 的环上。定位时，Key 沿环顺时针查找，碰到的第一台服务器就是其宿主。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">高并发缓存系统架构与防灾设计</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：分布式负载均衡与一致性哈希",
            "intro": "学习关于 分布式负载均衡与一致性哈希 的核心专业理论。",
            "content": "<ul>\n<li><strong>传统哈希取模负载的痛点</strong>：</li>\n</ul>\n<p>如果使用 <code>hash(key) % N</code> 调度，一旦服务器节点数 N 增加或减少（动态扩容/缩容/宕机），几乎所有 key 的哈希映射位置都会发生改变。这会导致分布式缓存系统中的大面积缓存失效，引发雪崩。</p>\n<ul>\n<li><strong>一致性哈希（Consistent Hashing）环算法</strong>：</li>\n</ul>\n<p>1. 将哈希值空间组织成一个首尾相连的虚拟圆环（通常大小为 0 \\sim 2^{32} - 1）。</p>\n<p>2. 计算服务器节点的哈希值，将其映射到环上的特定位置。</p>\n<p>3. 计算数据 Key 的哈希值，同样映射到环上。</p>\n<p>4. <strong>从数据位置出发，沿环顺时针寻找碰到的第一台服务器</strong>，作为该数据的存储/服务节点。</p>\n<p>*扩容与缩容的优势*：当新增加一台机器时，仅影响新节点与环上逆时针方向前驱节点之间的数据，其余所有节点的映射保持不变。</p>\n<p>*虚拟节点（Virtual Nodes）技术*：为防止服务器节点在环上分布不均导致“数据倾斜”与负载不均，一致性哈希为每台实体机器虚拟出多个节点（如 <code>Node-A#1</code>, <code>Node-A#2</code>）均匀散落在环上，极大地平衡了负载。</p>\n<p>---</p>",
            "quizzes": [
              {
                "question": "缓存设计中，由于黑客构造恶意非法的 ID 发起大并发查询，导致缓存和数据库中都查无此数据，请求直接拖垮数据库的现象称为：",
                "options": [
                  {
                    "key": "A",
                    "text": "缓存击穿"
                  },
                  {
                    "key": "B",
                    "text": "缓存雪崩"
                  },
                  {
                    "key": "C",
                    "text": "缓存穿透"
                  },
                  {
                    "key": "D",
                    "text": "缓存雪崩"
                  }
                ],
                "answer": "C",
                "analysis": "缓存穿透指查询一个“不存在”的数据，缓存不命中，每次都要穿透到数据库。击穿是单个热点 Key 过期；雪崩是大量 Key 过期或缓存服务挂掉。"
              },
              {
                "question": "为了防止大量缓存 Key 在同一时刻大面积过期而引发“缓存雪崩”，最有效的设置策略是：",
                "options": [
                  {
                    "key": "A",
                    "text": "将所有 Key 的生存时间（TTL）全部设置为永久有效"
                  },
                  {
                    "key": "B",
                    "text": "将各个缓存 Key 的过期时间设置加上随机扰动值（随机盐值），使其错开过期"
                  },
                  {
                    "key": "C",
                    "text": "禁止数据库执行写入操作"
                  },
                  {
                    "key": "D",
                    "text": "使用单机 Redis 运行"
                  }
                ],
                "answer": "B",
                "analysis": "缓存雪崩的核心成因是“集体过期”。给每个 Key 的过期时间加上一个随机抖动（如 $5\\text{分钟} \\pm \\text{随机数}$），能使各 Key 的过期节点均匀散落，避免峰值瞬时涌入数据库。"
              },
              {
                "question": "一致性哈希为了解决因服务器节点太少而导致数据倾斜、负载不均的问题，引入的技术是：",
                "options": [
                  {
                    "key": "A",
                    "text": "物理扩容"
                  },
                  {
                    "key": "B",
                    "text": "虚拟节点（Virtual Nodes）"
                  },
                  {
                    "key": "C",
                    "text": "多重哈希校验"
                  },
                  {
                    "key": "D",
                    "text": "双向环链表"
                  }
                ],
                "answer": "B",
                "analysis": "当物理机器较少时，它们在环上的落点容易挤在一起造成负载严重倾斜。通过为每台物理机生成几十甚至几百个虚拟副本（虚拟节点）均匀散落在环上，数据沿环寻找时就能获得极好的负载均衡度。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">分布式负载均衡与一致性哈希</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      }
    ]
  },
  {
    "category": "人工智能",
    "courses": [
      {
        "title": "人工智能导论 (Introduction to Artificial Intelligence)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：人工智能的发展历史与核心流派",
            "intro": "学习关于 人工智能的发展历史与核心流派 的核心专业理论。",
            "content": "<ul>\n<li><strong>三大学术流派的冲突与融合</strong>：</li>\n<li><strong>符号主义（Symbolism / 逻辑主义）</strong>：认为智能的本源是物理符号系统及其逻辑推理。核心技术为专家系统（Expert Systems）、知识图谱和一阶谓词逻辑。*限制：难以处理不确定性及大规模常识表达（常识库膨胀瓶颈）。*</li>\n<li><strong>联结主义（Connectionism）</strong>：主张通过模拟人脑神经网络的生理结构和神经元连接来实现智能。从早期的感知机（Perceptron）发展到如今的深度学习网络。*特点：长于模式识别与感知，但缺乏可解释性（黑盒模型）。*</li>\n<li><strong>行为主义（Actionism / 进化主义）</strong>：认为智能取决于控制论及个体与环境的自适应交互行为。核心技术为强化学习（Reinforcement Learning）和足式机器人控制。</li>\n</ul>",
            "quizzes": [
              {
                "question": "人工智能的三大核心学派中，以“模拟人脑神经网络结构与神经元联结”为研究主线的流派是：",
                "options": [
                  {
                    "key": "A",
                    "text": "符号主义（Symbolism）"
                  },
                  {
                    "key": "B",
                    "text": "联结主义（Connectionism）"
                  },
                  {
                    "key": "C",
                    "text": "行为主义（Actionism）"
                  },
                  {
                    "key": "D",
                    "text": "逻辑主义（Logicism）"
                  }
                ],
                "answer": "B",
                "analysis": "联结主义（又称仿生学派）认为智能的本质是神经元的联结，现代深度神经网络就是该流派的主要学术发展结晶。A侧重逻辑推理，C侧重与环境的动作反馈交互。"
              },
              {
                "question": "决策树算法中，划分纯度的衡量指标之一是信息熵（Entropy）。如果一个袋子里装有 50 个白球和 50 个黑球，取出球的颜色的信息熵为：",
                "options": [
                  {
                    "key": "A",
                    "text": "0"
                  },
                  {
                    "key": "B",
                    "text": "0.5"
                  },
                  {
                    "key": "C",
                    "text": "1"
                  },
                  {
                    "key": "D",
                    "text": "100"
                  }
                ],
                "answer": "C",
                "analysis": "根据信息熵公式：$H(X) = -(0.5 \\log_2 0.5 + 0.5 \\log_2 0.5) = -(0.5 \\times (-1) + 0.5 \\times (-1)) = 1$。此时系统混乱度最高，熵为 1。若袋子里全是白球，则 $H(X) = -(1 \\log_2 1) = 0$。"
              },
              {
                "question": "机器学习中，模型在训练集上表现优异，但在测试集（未见过的数据）上误差极大，这一现象称为：",
                "options": [
                  {
                    "key": "A",
                    "text": "欠拟合（Underfitting）"
                  },
                  {
                    "key": "B",
                    "text": "过拟合（Overfitting）"
                  },
                  {
                    "key": "C",
                    "text": "梯度消失（Gradient Vanishing）"
                  },
                  {
                    "key": "D",
                    "text": "鞍点停滞（Saddle Point）"
                  }
                ],
                "answer": "B",
                "analysis": "模型过度拟合了训练集中的局部噪声和细节，丧失了泛化到新数据的能力，导致训练集表现极好而测试集表现极差，即过拟合。"
              },
              {
                "question": "在集成学习（Ensemble Learning）中，随机森林（Random Forest）算法所采用的核心策略是：",
                "options": [
                  {
                    "key": "A",
                    "text": "基于自适应权重迭代提升的 Boosting 策略"
                  },
                  {
                    "key": "B",
                    "text": "基于自助采样（Bootstrap）且随机挑选特征属性的 Bagging 策略"
                  },
                  {
                    "key": "C",
                    "text": "纯粹基于一元决策树层层累加"
                  },
                  {
                    "key": "D",
                    "text": "通过单一超强决策树做极大化分裂"
                  }
                ],
                "answer": "B",
                "analysis": "随机森林属于 Bagging（套袋法）的典型代表。它通过自主有放回采样（Bootstrap）生成多个不同的训练子集，并且在决策树划分时随机抽取部分特征进行分裂，最后对多棵决策树的投票结果进行平均/多数表决以决定分类。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">人工智能的发展历史与核心流派</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：机器学习的核心分类与原理",
            "intro": "学习关于 机器学习的核心分类与原理 的核心专业理论。",
            "content": "<ul>\n<li><strong>监督学习（Supervised Learning）</strong>：</li>\n</ul>\n<p>利用已知输入和对应输出标签（Labels）的数据集进行建模。</p>\n<ul>\n<li><strong>分类（Classification）</strong>：预测离散的类别标签（如逻辑回归、SVM、决策树）。</li>\n<li><strong>回归（Regression）</strong>：预测连续的数值（如线性回归、岭回归）。</li>\n<li><strong>非监督学习（Unsupervised Learning）</strong>：</li>\n</ul>\n<p>输入数据无标签，算法自行探索数据内部的潜在结构和分布特征。</p>\n<ul>\n<li><strong>聚类（Clustering）</strong>：如 K-Means（通过迭代更新聚类中心，最小化样本与中心的欧氏距离）、层次聚类。</li>\n<li><strong>降维（Dimensionality Reduction）</strong>：如主成分分析（PCA，通过正交变换将关联变量投影到方差最大的主成分方向，最大化保留数据信息）。</li>\n<li><strong>强化学习（Reinforcement Learning）</strong>：</li>\n</ul>\n<p>智能体（Agent）在与环境（Environment）进行交互的过程中，通过试错机制（Trial and Error）和接收环境反馈的累积奖励（Rewards），学习从状态（States）到动作（Actions）的映射策略，以最大化长期期望回报。其经典数学框架为马尔可夫决策过程（MDP）。</p>",
            "quizzes": [
              {
                "question": "机器学习分类中，K-Means 算法和主成分分析（PCA）算法分别属于：",
                "options": [
                  {
                    "key": "A",
                    "text": "监督学习、非监督学习"
                  },
                  {
                    "key": "B",
                    "text": "非监督学习、非监督学习"
                  },
                  {
                    "key": "C",
                    "text": "监督学习、监督学习"
                  },
                  {
                    "key": "D",
                    "text": "强化学习、监督学习"
                  }
                ],
                "answer": "B",
                "analysis": "K-Means 是一种典型的无监督聚类算法，它不需要数据标签；PCA 是一种无监督的降维方法，它通过寻找方差最大的投影方向来减少特征数量，同样不需要标签，因此两者均为非监督学习。"
              },
              {
                "question": "支持向量机（SVM）在处理非线性分类问题时，所采用的关键数学方法是：",
                "options": [
                  {
                    "key": "A",
                    "text": "随机梯度下降以压缩特征"
                  },
                  {
                    "key": "B",
                    "text": "引入核函数（Kernel Function）将低维特征隐式映射到高维空间使之线性可分"
                  },
                  {
                    "key": "C",
                    "text": "自动剔除所有边缘的样本节点"
                  },
                  {
                    "key": "D",
                    "text": "采用多层神经网络堆叠"
                  }
                ],
                "answer": "B",
                "analysis": "当低维数据无法找到线性超平面分割时，SVM 使用核技巧（Kernel Trick）计算高维内积，将数据映射到更高维空间，使其在高维空间内变得线性可分，从而成功分类。"
              },
              {
                "question": "缓解机器学习中“过拟合”隐患的常用工程手段不包括：",
                "options": [
                  {
                    "key": "A",
                    "text": "增加正则化项（L1 或 L2 正则化惩罚系数）"
                  },
                  {
                    "key": "B",
                    "text": "大量扩充训练数据集（如数据增强）"
                  },
                  {
                    "key": "C",
                    "text": "进一步增加模型的参数量和特征维度"
                  },
                  {
                    "key": "D",
                    "text": "对模型结构执行剪枝或使用 Dropout 丢弃节点"
                  }
                ],
                "answer": "C",
                "analysis": "过拟合的本质是模型复杂度过高，如果继续增加参数和特征维度，会让模型拥有更强的容纳噪声能力，从而加剧过拟合。降低复杂度、加惩罚项或增加数据才是主要防范策略。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">机器学习的核心分类与原理</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：经典机器学习算法的数学解析",
            "intro": "学习关于 经典机器学习算法的数学解析 的核心专业理论。",
            "content": "<ul>\n<li><strong>决策树（Decision Tree）</strong>：</li>\n</ul>\n<p>通过层层划分子集构建树状分类模型。常用分裂指标包括<strong>信息熵（Entropy）</strong>、<strong>信息增益（Information Gain, ID3）</strong>和<strong>基尼系数（Gini Impurity, CART）</strong>。</p>\n<p>*信息熵公式*：</p>\n<p>H(X) = -\\sum_{i=1}^{n} p(x_i) \\log_2 p(x_i)</p>\n<p>信息熵越低，说明数据集的纯度越高。</p>\n<ul>\n<li><strong>支持向量机（Support Vector Machine, SVM）</strong>：</li>\n</ul>\n<p>在线性可分空间中寻找一个<strong>最大间隔超平面（Maximum Margin Hyperplane）</strong>来分割不同类别的样本。对于非线性数据，通过<strong>核函数（Kernel Function，如高斯核 RBF）</strong>将低维数据隐式映射到高维特征空间，使其线性可分。</p>\n<p>---</p>",
            "quizzes": [
              {
                "question": "在强化学习中，智能体（Agent）学习和优化的终极目标是：",
                "options": [
                  {
                    "key": "A",
                    "text": "准确预测未来输入样本的类别标签"
                  },
                  {
                    "key": "B",
                    "text": "最小化训练数据集上的均方误差（MSE）"
                  },
                  {
                    "key": "C",
                    "text": "最大化从当前状态出发所能获得的长期累积期望奖励（Expected Cumulative Reward）"
                  },
                  {
                    "key": "D",
                    "text": "将解空间树的所有叶子节点全部剪枝"
                  }
                ],
                "answer": "C",
                "analysis": "强化学习不以拟合标签为目的，而是设计一个奖惩函数，让 Agent 通过与环境交互，学会在不同状态下采取何种动作序列，以最大化长期期望回报值。"
              },
              {
                "question": "关于朴素贝叶斯分类器（Naive Bayes）的“朴素”一词的含义，下列叙述正确的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "算法实现极其简陋，性能低下"
                  },
                  {
                    "key": "B",
                    "text": "假设所有特征属性之间是相互独立的"
                  },
                  {
                    "key": "C",
                    "text": "被分类的数据集不能有任何零概率项"
                  },
                  {
                    "key": "D",
                    "text": "只能处理二进制类型的数据"
                  }
                ],
                "answer": "B",
                "analysis": "朴素贝叶斯的“朴素（Naive）”是指做了一个极强的假设：**所有特征之间彼此条件独立**。这一假设虽然简化了贝叶斯公式中联合概率的计算，但在实际特征相关的数据中可能存在偏差。"
              },
              {
                "question": "逻辑回归（Logistic Regression）算法的核心是被用来解决：",
                "options": [
                  {
                    "key": "A",
                    "text": "连续数值的预测回归问题"
                  },
                  {
                    "key": "B",
                    "text": "离散类别的二分类问题"
                  },
                  {
                    "key": "C",
                    "text": "图像的空间降维问题"
                  },
                  {
                    "key": "D",
                    "text": "逻辑推理与演绎"
                  }
                ],
                "answer": "B",
                "analysis": "尽管名字带有“回归”，但逻辑回归在线性回归输出外层叠加了一个 Sigmoid 函数映射，将预测值压缩在 $[0, 1]$ 之间，代表分类概率，是经典的二分类算法。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">经典机器学习算法的数学解析</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      },
      {
        "title": "深度学习 (Deep Learning)",
        "chapters": [
          {
            "id": 1,
            "title": "第1章：深度神经网络基础与反向传播",
            "intro": "学习关于 深度神经网络基础与反向传播 的核心专业理论。",
            "content": "<ul>\n<li><strong>前向传播与激活函数</strong>：</li>\n</ul>\n<p>多层感知机通过前向传播计算各层激活值。若不引入非线性激活函数，无论堆叠多少层，多层神经网络均可等价为单一的线性矩阵乘法，失去拟合复杂非线性边界的能力。</p>\n<p>*常用激活函数及其梯度消失隐患*：</p>\n<ul>\n<li><strong>Sigmoid</strong>：f(x) = \\frac{1}{1 + e^{-x}}。其导数值最大仅为 0.25，且在两端（饱和区）导数趋近于 0。在深层网络中，多层误差梯度相乘会导致传回输入层的梯度指数级衰减，引发<strong>梯度消失（Gradient Vanishing）</strong>。</li>\n<li><strong>Tanh</strong>：双曲正切函数，值域在 [-1, 1] 之间，输出以 0 为中心，收敛稍快，但同样存在饱和区梯度消失问题。</li>\n<li><strong>ReLU (Rectified Linear Unit)</strong>：f(x) = \\max(0, x)。在 x > 0 时导数恒为 1，<strong>彻底解决了正半轴的梯度消失问题</strong>，且计算简单极快，是目前深度学习最广泛的隐层激活函数。</li>\n<li><strong>反向传播（Backpropagation）与链式法则（Chain Rule）</strong>：</li>\n</ul>\n<p>反向传播是神经网络参数更新的核心。它首先前向计算得到预测值，然后基于损失函数（如交叉熵、均方误差）计算当前总损失，再自输出层向输入层逆向求导。利用微积分中的<strong>复合函数求导链式法则</strong>，逐层计算损失函数对每个权值 w 和偏置 b 的偏导数（梯度），最后通过梯度下降算法更新参数：</p>\n<p>w_{new} = w_{old} - \\eta \\frac{\\partial L}{\\partial w}</p>",
            "quizzes": [
              {
                "question": "神经网络中，如果完全不使用非线性激活函数，则该网络在理论上：",
                "options": [
                  {
                    "key": "A",
                    "text": "依然能够完美拟合任何复杂的非线性曲面"
                  },
                  {
                    "key": "B",
                    "text": "等价于一个单层的线性回归模型，无法学习非线性特征"
                  },
                  {
                    "key": "C",
                    "text": "无法计算前向传播"
                  },
                  {
                    "key": "D",
                    "text": "反向传播求导会发生除以零的物理崩溃"
                  }
                ],
                "answer": "B",
                "analysis": "线性函数的叠加复合依然是线性函数。如果不使用非线性激活函数，无论堆叠多少层隐藏层，其数学本质都可以简化为一个大矩阵相乘，即等价于单层线性模型。"
              },
              {
                "question": "卷积神经网络（CNN）之所以能在图像处理中大放异彩，主要得益于其设计的两个核心硬件/算法特征是：",
                "options": [
                  {
                    "key": "A",
                    "text": "随机梯度下降与全连接布局"
                  },
                  {
                    "key": "B",
                    "text": "局部感受野（Local Receptive Fields）与权重共享（Shared Weights）"
                  },
                  {
                    "key": "C",
                    "text": "循环传递隐藏状态与门控制"
                  },
                  {
                    "key": "D",
                    "text": "高度并行的自注意力分发"
                  }
                ],
                "answer": "B",
                "analysis": "CNN 中的卷积核每次仅作用于局部区域（局部感受野提取局部特征），并且在图像不同位置平移滑动时复用相同的卷积核参数（权重共享）。这模拟了人眼视觉系统，并极大降低了全连接网络的庞大参数量。"
              },
              {
                "question": "LSTM 通过引入“细胞状态（Cell State）”和门控结构解决了经典 RNN 的梯度问题。其中决定“抛弃多少上一时刻细胞状态旧信息”的门是：",
                "options": [
                  {
                    "key": "A",
                    "text": "输入门（Input Gate）"
                  },
                  {
                    "key": "B",
                    "text": "遗忘门（Forget Gate）"
                  },
                  {
                    "key": "C",
                    "text": "输出门（Output Gate）"
                  },
                  {
                    "key": "D",
                    "text": "记忆门（Memory Gate）"
                  }
                ],
                "answer": "B",
                "analysis": "遗忘门（Forget Gate）接收当前输入 $x_t$ 和上一时刻隐藏状态 $h_{t-1}$，输出一个 $0 \\sim 1$ 之间的数，与上一时刻的细胞状态 $C_{t-1}$ 相乘，以控制保留（或忘却）多少历史数据。"
              },
              {
                "question": "在深度学习优化过程中，反向传播（Backpropagation）的核心求导数学原理是：",
                "options": [
                  {
                    "key": "A",
                    "text": "偏微分方程的数值逼近"
                  },
                  {
                    "key": "B",
                    "text": "泰勒级数展开"
                  },
                  {
                    "key": "C",
                    "text": "微积分复合函数求导的链式法则（Chain Rule）"
                  },
                  {
                    "key": "D",
                    "text": "蒙特卡洛随机采样"
                  }
                ],
                "answer": "C",
                "analysis": "深度神经网络是多层复合函数。要计算最终 Loss 对各层权重 $w$ 的梯度，必须依靠链式法则自后向前层层乘积求导，这也是反向传播算法的数学核心。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">深度神经网络基础与反向传播</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 2,
            "title": "第2章：经典神经网络变体",
            "intro": "学习关于 经典神经网络变体 的核心专业理论。",
            "content": "<ul>\n<li><strong>卷积神经网络（CNN）与空间建模</strong>：</li>\n</ul>\n<p>CNN 专为图像等空间关联数据设计。核心包括：</p>\n<ul>\n<li><strong>卷积层（Convolutional Layer）</strong>：卷积核（Kernel）在输入图像上平移滑动，进行局部元素点乘累加。这实现了<strong>局部感受野（Local Receptive Fields）</strong>和<strong>权重共享（Shared Weights）</strong>，极大地削减了参数规模（相比全连接层），并提取了空间平移不变性的局部特征（如纹理、边缘）。</li>\n<li><strong>池化层（Pooling Layer）</strong>：如最大池化（Max Pooling）。在特定区域内取最大值，起到下采样作用，降低数据维度，减少过拟合，并引入空间旋转与平移的不变性。</li>\n<li><strong>循环神经网络（RNN）与长短期记忆网络（LSTM）</strong>：</li>\n</ul>\n<p>RNN 用于处理文本、语音等前后具有时序依赖的序列数据。其网络中包含循环结构，每个时刻的输出不仅取决于当前输入，还取决于上一时刻传入的隐藏状态（Memory）。</p>\n<p>*长距离依赖瓶颈*：由于沿时间轴的反向传播（BPTT）包含长乘积项，经典 RNN 在长序列下会产生严重的梯度消失或爆炸。</p>\n<p>*LSTM 解决方案*：LSTM 引入了<strong>细胞状态（Cell State）</strong>和三个控制信息流动的“门”结构：</p>\n<p>1. <strong>遗忘门（Forget Gate）</strong>：决定保留多少上一时刻的细胞状态信息。</p>\n<p>2. <strong>输入门（Input Gate）</strong>：决定将当前输入中的哪些新信息写入细胞状态。</p>\n<p>3. <strong>输出门（Output Gate）</strong>：根据最新的细胞状态，决定当前时刻输出什么隐藏状态。</p>",
            "quizzes": [
              {
                "question": "Sigmoid 激活函数在网络层数较深时会引起梯度消失，其根本原因是：",
                "options": [
                  {
                    "key": "A",
                    "text": "函数输出值过大，容易引起内存溢出"
                  },
                  {
                    "key": "B",
                    "text": "其导数的最大值仅为 0.25，且在输入值很大或很小时导数无限趋近于 0（饱和区饱和）"
                  },
                  {
                    "key": "C",
                    "text": "它在 $x > 0$ 时导数恒定为 1"
                  },
                  {
                    "key": "D",
                    "text": "它是分段函数，不可导"
                  }
                ],
                "answer": "B",
                "analysis": "Sigmoid 导数公式为 $f'(x) = f(x)(1 - f(x))$，最大值为 0.25。当网络很深时，多层小于 0.25 的导数反向链式相乘，会导致传回靠近输入层处的梯度以指数级衰减至 0，导致前面几层参数无法更新，即梯度消失。"
              },
              {
                "question": "在 CNN 中，池化层（Pooling Layer，如 Max Pooling）的核心作用通常不包括：",
                "options": [
                  {
                    "key": "A",
                    "text": "提取特定卷积核对应的高阶特征权重"
                  },
                  {
                    "key": "B",
                    "text": "对特征图进行下采样以减少参数和计算量"
                  },
                  {
                    "key": "C",
                    "text": "引入平移和轻微旋转的特征不变性"
                  },
                  {
                    "key": "D",
                    "text": "扩大后续卷积层的感受野"
                  }
                ],
                "answer": "A",
                "analysis": "特征提取主要是靠卷积层完成的。池化层（下采样）的核心目标是降低空间分辨率，过滤冗余，减少计算量，并提供一定的不变性。"
              },
              {
                "question": "在 Transformer 的自注意力计算公式中，除以根号 $d_k$（$\\sqrt{d_k}$，缩放因子）的数学目的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "减少多头注意力的输出维度"
                  },
                  {
                    "key": "B",
                    "text": "防止点积结果数值过大，导致 Softmax 函数进入梯度极小的饱和区而引起梯度消失"
                  },
                  {
                    "key": "C",
                    "text": "将矩阵转换为正交矩阵"
                  },
                  {
                    "key": "D",
                    "text": "提高矩阵乘法速度"
                  }
                ],
                "answer": "B",
                "analysis": "当特征维度 $d_k$ 很大时，点积 $Q K^T$ 结果的绝对值会非常大。这会导致经过 Softmax 之后，概率极度两极分化，而 Softmax 在极值处的偏导数趋于 0，会造成严重的梯度消失。除以 $\\sqrt{d_k}$ 可以起到缩放作用。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">经典神经网络变体</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          },
          {
            "id": 3,
            "title": "第3章：Transformer 架构与注意力机制",
            "intro": "学习关于 Transformer 架构与注意力机制 的核心专业理论。",
            "content": "<ul>\n<li><strong>自注意力机制（Self-Attention）原理</strong>：</li>\n</ul>\n<p>传统 RNN 难以并行计算（第 t 步计算必须等待第 t-1 步完成）。自注意力机制突破了这一限制，允许在单次运算中计算序列中任意两个位置之间的关联程度。</p>\n<p>*计算推导*：</p>\n<p>输入序列的词向量通过三个线性变换矩阵乘法，映射生成三个矩阵：<strong>查询矩阵 Q (Query)</strong>、<strong>键矩阵 K (Key)</strong> 和 <strong>值矩阵 V (Value)</strong>。</p>\n<p>自注意力计算公式为：</p>\n<p>\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{QK^T}{\\sqrt{d_k}} \\right) V</p>\n<p>其中 \\sqrt{d_k} 是缩放因子，用于防止点积过大导致 Softmax 的梯度饱和。</p>\n<ul>\n<li><strong>Transformer 整体架构</strong>：</li>\n</ul>\n<p>Transformer 完全摒弃了循环和卷积结构，由多层 Encoder（编码器）和 Decoder（解码器）堆叠而成。</p>\n<ul>\n<li><strong>多头注意力（Multi-Head Attention）</strong>：将 Q, K, V 投影到多个不同的低维特征子空间进行注意力计算，再将结果拼接（Concat），使模型能够同时关注不同表示维度的信息。</li>\n<li><strong>位置编码（Positional Encoding）</strong>：由于自注意力机制是并行计算的，本身不包含词的先后顺序信息。Transformer 通过在输入词向量中直接叠加基于正余弦函数计算的绝对位置编码，赋予模型感知文本时序位置的能力。</li>\n</ul>\n<p>---</p>",
            "quizzes": [
              {
                "question": "关于 ReLU 激活函数 $f(x) = \\max(0, x)$ 的优势，下列说法错误的是：",
                "options": [
                  {
                    "key": "A",
                    "text": "在 $x > 0$ 区域其导数恒为 1，能够极大缓解正半轴的梯度消失隐患"
                  },
                  {
                    "key": "B",
                    "text": "计算极其简单，只需判断是否大于 0，比指数运算快数倍"
                  },
                  {
                    "key": "C",
                    "text": "它在 $x < 0$ 区域的导数为 0，可能导致“神经元死亡（Dead ReLU）”"
                  },
                  {
                    "key": "D",
                    "text": "它是完全无界的双向连续可导函数"
                  }
                ],
                "answer": "D",
                "analysis": "ReLU 在 $x = 0$ 处是不连续可导的（虽然可以通过左导数/右导数进行次梯度估计代替），且在 $x < 0$ 时输出为 0。因此D选项描述是错误的。其优势正是在于计算简便和解决正半轴梯度消失。"
              },
              {
                "question": "经典循环神经网络（RNN）在处理极长文本序列时，面临的主要技术瓶颈是：",
                "options": [
                  {
                    "key": "A",
                    "text": "卷积核尺度过大导致无法计算"
                  },
                  {
                    "key": "B",
                    "text": "时间步之间的串行依赖导致难以在 GPU 上高度并行训练，且极易产生梯度消失或爆炸"
                  },
                  {
                    "key": "C",
                    "text": "无法保留任何局部记忆"
                  },
                  {
                    "key": "D",
                    "text": "输入必须固定大小，不支持变长序列"
                  }
                ],
                "answer": "B",
                "analysis": "RNN 的当前时刻输入依赖前一时刻的隐藏状态，这种链式时间依赖锁死了高度并行的可能（必须等上一时刻算完）；同时随时间轴反向求导链条过长，极易发生梯度消失或梯度爆炸。"
              },
              {
                "question": "Transformer 架构彻底摒弃了循环结构（RNN），为了能够使模型感知输入文本的词序与位置先后关系，它引入了：",
                "options": [
                  {
                    "key": "A",
                    "text": "额外的 1D 卷积层"
                  },
                  {
                    "key": "B",
                    "text": "门控输出机制"
                  },
                  {
                    "key": "C",
                    "text": "位置编码（Positional Encoding）"
                  },
                  {
                    "key": "D",
                    "text": "全连接分类层"
                  }
                ],
                "answer": "C",
                "analysis": "由于自注意力机制是全序列元素并行点积计算的，失去了词序的物理先后信息。因此 Transformer 使用正弦和余弦函数生成绝对位置编码向量，并在输入端直接将其与词向量相加，使模型能够感知位置关系。"
              }
            ],
            "mindmapHtml": "\n                <div class=\"mindmap-chart\">\n                  <div class=\"mm-root\">Transformer 架构与注意力机制</div>\n                  <div class=\"mm-branches\">\n                    <div class=\"mm-branch\">\n                      <div class=\"mm-parent-node\">核心知识</div>\n                      <div class=\"mm-leaves\">\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">理论概念</div></div>\n                        <div class=\"mm-leaf-item\"><div class=\"mm-leaf-node\">规范机理</div></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                "
          }
        ]
      }
    ]
  }
];