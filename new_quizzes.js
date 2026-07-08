// 自动生成的扩充章节题库
const NEW_QUIZZES_DATA = {
  "微积分一 (Calculus I)": {
    "第1章：极限与连续性": [
      {
        "question": "$f(x)=\\dfrac{x^2-4}{x-2}$ 在 $x=2$ 处极限值为（）",
        "options": [
          {
            "key": "A",
            "text": "无定义"
          },
          {
            "key": "B",
            "text": "4",
            "correct": true
          },
          {
            "key": "C",
            "text": "0"
          },
          {
            "key": "D",
            "text": "2"
          }
        ],
        "analysis": "因式分解约去$x-2$，化简为$x+2$，代入得4"
      },
      {
        "question": "$x\\to0$ 时等价无穷小错误的是（）",
        "options": [
          {
            "key": "A",
            "text": "$\\sin x \\sim x$"
          },
          {
            "key": "B",
            "text": "$\\ln(1+x)\\sim x$"
          },
          {
            "key": "C",
            "text": "$e^x-1\\sim x$"
          },
          {
            "key": "D",
            "text": "$\\dfrac1x \\sim x$",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "下列函数在全体实数域连续的是（）",
        "options": [
          {
            "key": "A",
            "text": "$y=\\dfrac1x$"
          },
          {
            "key": "B",
            "text": "$y=|x|$",
            "correct": true
          },
          {
            "key": "C",
            "text": "$y=\\tan x$"
          },
          {
            "key": "D",
            "text": "分段$x>0,y=1;x\\le0,y=2$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "$\\lim\\limits_{x\\to\\infty}\\dfrac{3x^2+2}{x^2-1}=$（）",
        "options": [
          {
            "key": "A",
            "text": "3",
            "correct": true
          },
          {
            "key": "B",
            "text": "0"
          },
          {
            "key": "C",
            "text": "∞"
          },
          {
            "key": "D",
            "text": "-1"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "函数在$x_0$连续的充要条件包含（）",
        "options": [
          {
            "key": "A",
            "text": "$f(x_0)$有定义",
            "correct": true
          },
          {
            "key": "B",
            "text": "$\\lim\\limits_{x\\to x_0}f(x)$存在",
            "correct": true
          },
          {
            "key": "C",
            "text": "极限值=$f(x_0)$",
            "correct": true
          },
          {
            "key": "D",
            "text": "$f(x)$在$x_0$可导"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "间断点分类包含（）",
        "options": [
          {
            "key": "A",
            "text": "可去间断点",
            "correct": true
          },
          {
            "key": "B",
            "text": "跳跃间断点",
            "correct": true
          },
          {
            "key": "C",
            "text": "无穷间断点",
            "correct": true
          },
          {
            "key": "D",
            "text": "光滑间断点"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "$\\lim\\limits_{x\\to0}\\dfrac{\\sin5x}{3x}=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$\\dfrac53$"
      },
      {
        "question": "$\\lim\\limits_{x\\to0}(1+2x)^{\\frac1x}=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$e^2$"
      },
      {
        "question": "求极限：$\\lim\\limits_{x\\to1}\\dfrac{\\ln x}{x-1}$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：等价无穷小$\\ln x=\\ln(1+x-1)\\sim x-1$，原式$=\\lim\\limits_{x\\to1}\\dfrac{x-1}{x-1}=1$"
      },
      {
        "question": "证明：若$f(x)$在$x_0$处可导，则$f(x)$在$x_0$一定连续。",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>证明：\n由导数定义：$f'(x_0)=\\lim\\limits_{\\Delta x\\to0}\\dfrac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$\n变形$\\Delta y = f'(x_0)\\cdot\\Delta x + o(\\Delta x)$，当$\\Delta x\\to0$，$\\Delta y\\to0$，满足连续定义。"
      }
    ],
    "第2章：导数与微分": [
      {
        "question": "$y=\\sin3x$一阶导数是（）",
        "options": [
          {
            "key": "A",
            "text": "$\\cos3x$"
          },
          {
            "key": "B",
            "text": "$3\\cos3x$",
            "correct": true
          },
          {
            "key": "C",
            "text": "$-\\cos3x$"
          },
          {
            "key": "D",
            "text": "$-3\\cos3x$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "$y=x^3$在$x=2$处切线斜率为（）",
        "options": [
          {
            "key": "A",
            "text": "6"
          },
          {
            "key": "B",
            "text": "12",
            "correct": true
          },
          {
            "key": "C",
            "text": "8"
          },
          {
            "key": "D",
            "text": "3"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "函数$y=\\ln x$导数为（）",
        "options": [
          {
            "key": "A",
            "text": "$x$"
          },
          {
            "key": "B",
            "text": "$\\dfrac1x$",
            "correct": true
          },
          {
            "key": "C",
            "text": "$e^x$"
          },
          {
            "key": "D",
            "text": "$\\ln x$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "可导函数极值点处导数一定为（）",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "-1"
          },
          {
            "key": "C",
            "text": "0",
            "correct": true
          },
          {
            "key": "D",
            "text": "不存在"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "导数四则运算法则正确的有（）",
        "options": [
          {
            "key": "A",
            "text": "$(uv)'=u'v+uv'$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}$",
            "correct": true
          },
          {
            "key": "C",
            "text": "$(u+v)'=u'+v'$",
            "correct": true
          },
          {
            "key": "D",
            "text": "$(ku)'=ku'$",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "复合函数求导链式法则适用场景（）",
        "options": [
          {
            "key": "A",
            "text": "$y=\\sin(x^2)$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$y=e^{\\cos x}$",
            "correct": true
          },
          {
            "key": "C",
            "text": "$y=\\ln(1+2x)$",
            "correct": true
          },
          {
            "key": "D",
            "text": "$y=x^2+3x$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "$(e^x)'=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$e^x$"
      },
      {
        "question": "隐函数求导：$xy=1$，则$y'=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$-\\dfrac{y}{x}$"
      },
      {
        "question": "求$y=x^2\\cos x$导数",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：乘积法则 $y'=2x\\cos x - x^2\\sin x$"
      },
      {
        "question": "证明拉格朗日中值定理核心结论：若$f(x)$在$[a,b]$连续、$(a,b)$可导，存在$\\xi\\in(a,b)$，$f'(\\xi)=\\dfrac{f(b)-f(a)}{b-a}$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>证明思路：构造辅助函数$F(x)=f(x)-f(a)-\\dfrac{f(b)-f(a)}{b-a}(x-a)$，满足罗尔定理，推导可得。"
      }
    ],
    "第3章：单变量积分学": [
      {
        "question": "$\\int \\sin x dx =$（）",
        "options": [
          {
            "key": "A",
            "text": "$\\cos x+"
          },
          {
            "key": "B",
            "text": "$-\\cos x+",
            "correct": true
          },
          {
            "key": "C",
            "text": "$\\sin x$"
          },
          {
            "key": "D",
            "text": "$-\\sin x$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "$\\int_0^1 2x dx =$（）",
        "options": [
          {
            "key": "A",
            "text": "1",
            "correct": true
          },
          {
            "key": "B",
            "text": "0"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "$\\dfrac12$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "不定积分$\\int \\dfrac1x dx=$（）",
        "options": [
          {
            "key": "A",
            "text": "$x+"
          },
          {
            "key": "B",
            "text": "$\\ln|x|+",
            "correct": true
          },
          {
            "key": "C",
            "text": "$e^x$"
          },
          {
            "key": "D",
            "text": "$\\dfrac1{x^2}$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "变上限积分$\\dfrac{d}{dx}\\int_0^x t dt=$（）",
        "options": [
          {
            "key": "A",
            "text": "$x$",
            "correct": true
          },
          {
            "key": "B",
            "text": "0"
          },
          {
            "key": "C",
            "text": "$\\dfrac{x^2}{2}$"
          },
          {
            "key": "D",
            "text": "1"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "定积分几何意义描述正确的（）",
        "options": [
          {
            "key": "A",
            "text": "x轴上方面积为正",
            "correct": true
          },
          {
            "key": "B",
            "text": "x轴下方面积为负",
            "correct": true
          },
          {
            "key": "C",
            "text": "可计算曲线围成面积",
            "correct": true
          },
          {
            "key": "D",
            "text": "只能计算正数区间"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "积分换元法包含（）",
        "options": [
          {
            "key": "A",
            "text": "第一类换元（凑微分）",
            "correct": true
          },
          {
            "key": "B",
            "text": "第二类三角换元",
            "correct": true
          },
          {
            "key": "C",
            "text": "分部积分",
            "correct": true
          },
          {
            "key": "D",
            "text": "洛必达换元"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "$\\int x dx =$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$\\dfrac12x^2+C$"
      },
      {
        "question": "分部积分公式：$\\int u dv =$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$uv-\\int v du$"
      },
      {
        "question": "计算定积分$\\int_0^\\pi \\sin x dx$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：原函数$-\\cos x$，代入上下限 $-\\cos\\pi + \\cos0 = 1+1=2$"
      },
      {
        "question": "证明积分区间可加性：$\\int_a^b f(x)dx + \\int_b^c f(x)dx = \\int_a^c f(x)dx$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>证明：由定积分几何面积叠加定义直接可得。\n---"
      }
    ]
  },
  "微积分二 (Calculus II)": {
    "第1章：多元函数微分学": [
      {
        "question": "单选题：$z=xy$ 在$(1,2)$处$\\dfrac{\\partial z}{\\partial x}=$（）",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2",
            "correct": true
          },
          {
            "key": "C",
            "text": "x"
          },
          {
            "key": "D",
            "text": "y"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "单选题：二元函数可微的必要条件是（）",
        "options": [
          {
            "key": "A",
            "text": "一阶偏导存在",
            "correct": true
          },
          {
            "key": "B",
            "text": "二阶偏导连续"
          },
          {
            "key": "C",
            "text": "函数单调"
          },
          {
            "key": "D",
            "text": "极值唯一"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "单选题：梯度$\\nabla f(x,y)=$（）",
        "options": [
          {
            "key": "A",
            "text": "$(\\dfrac{\\partial f}{\\partial x},\\dfrac{\\partial f}{\\partial y})$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$\\dfrac{\\partial^2 f}{\\partial x\\partial y}$"
          },
          {
            "key": "C",
            "text": "$f_x+f_y$"
          },
          {
            "key": "D",
            "text": "常数"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "单选题：$f(x,y)=x^2+2y^2$极小值点（）",
        "options": [
          {
            "key": "A",
            "text": "(0,0)",
            "correct": true
          },
          {
            "key": "B",
            "text": "(1,2)"
          },
          {
            "key": "C",
            "text": "(2,1)"
          },
          {
            "key": "D",
            "text": "无极小值"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "多元复合函数求导链式法则适用（）",
        "options": [
          {
            "key": "A",
            "text": "$z=f(x+y,xy)$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$z=\\sin(x^2y)$",
            "correct": true
          },
          {
            "key": "C",
            "text": "$z=e^{x-y}$",
            "correct": true
          },
          {
            "key": "D",
            "text": "$z=x+y$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "二元函数极值充分条件用到（）",
        "options": [
          {
            "key": "A",
            "text": "$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$",
            "correct": true
          },
          {
            "key": "C",
            "text": "$",
            "correct": true
          },
          {
            "key": "D",
            "text": "$\\",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "$z=x^2y$，$\\dfrac{\\partial z}{\\partial y}=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$x^2$"
      },
      {
        "question": "全微分公式 $dz=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$\\dfrac{\\partial z}{\\partial x}dx+\\dfrac{\\partial z}{\\partial y}dy$"
      },
      {
        "question": "求$f(x,y)=x^3y+x^2y^2$全部一阶偏导",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：$f_x=3x^2y+2xy^2，f_y=x^3+2x^2y$"
      },
      {
        "question": "证明：若二元函数$f(x,y)$在点$(x_0,y_0)$处一阶偏导数连续，则函数在该点可微。",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ],
    "第2章：多重积分与矢量分析": [
      {
        "question": "二重积分极坐标面积微元$d\\sigma=$（）",
        "options": [
          {
            "key": "A",
            "text": "$dxdy$"
          },
          {
            "key": "B",
            "text": "$r dr d\\theta$",
            "correct": true
          },
          {
            "key": "C",
            "text": "$dr d\\theta$"
          },
          {
            "key": "D",
            "text": "$r^2 dr d\\theta$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "区域$x^2+y^2\\le 4$极坐标r范围（）",
        "options": [
          {
            "key": "A",
            "text": "$0\\le r\\le2$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$0\\le r\\le4$"
          },
          {
            "key": "C",
            "text": "$2\\le r\\le4$"
          },
          {
            "key": "D",
            "text": "$r>0$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "第二类曲线积分物理意义（）",
        "options": [
          {
            "key": "A",
            "text": "曲面面积"
          },
          {
            "key": "B",
            "text": "变力做功",
            "correct": true
          },
          {
            "key": "C",
            "text": "平面面积"
          },
          {
            "key": "D",
            "text": "体积"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "格林公式适用区域（）",
        "options": [
          {
            "key": "A",
            "text": "平面单连通闭区域",
            "correct": true
          },
          {
            "key": "B",
            "text": "空间曲面"
          },
          {
            "key": "C",
            "text": "无限区域"
          },
          {
            "key": "D",
            "text": "离散点"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "二重积分可计算（）",
        "options": [
          {
            "key": "A",
            "text": "平面图形面积",
            "correct": true
          },
          {
            "key": "B",
            "text": "曲顶柱体体积",
            "correct": true
          },
          {
            "key": "C",
            "text": "平面薄片质量",
            "correct": true
          },
          {
            "key": "D",
            "text": "曲线弧长"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "矢量场基本量（）",
        "options": [
          {
            "key": "A",
            "text": "梯度",
            "correct": true
          },
          {
            "key": "B",
            "text": "散度",
            "correct": true
          },
          {
            "key": "C",
            "text": "旋度",
            "correct": true
          },
          {
            "key": "D",
            "text": "积分"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "圆$(x-1)^2+y^2=1$极坐标方程$r=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$2\\cos\\theta$"
      },
      {
        "question": "三重积分体积微元柱坐标$dV=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$r dr d\\theta dz$"
      },
      {
        "question": "计算$\\iint\\limits_{x^2+y^2\\le1} \\sqrt{x^2+y^2} dxdy$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：极坐标转换，$\\int_0^{2\\pi}d\\theta\\int_0^1 r\\cdot r dr=\\dfrac{2\\pi}{3}$"
      },
      {
        "question": "证明格林公式：闭曲线L正向围成区域D，$\\oint_L Pdx+Qdy=\\iint_D (\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y})dxdy$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ],
    "第3章：无穷级数": [
      {
        "question": "调和级数$\\sum\\limits_{n=1}^\\infty \\dfrac1n$敛散性（）",
        "options": [
          {
            "key": "A",
            "text": "收敛"
          },
          {
            "key": "B",
            "text": "发散",
            "correct": true
          },
          {
            "key": "C",
            "text": "条件收敛"
          },
          {
            "key": "D",
            "text": "绝对收敛"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "幂级数$\\sum \\dfrac{x^n}{3^n}$收敛半径$R=$（）",
        "options": [
          {
            "key": "A",
            "text": "3",
            "correct": true
          },
          {
            "key": "B",
            "text": "$\\dfrac13$"
          },
          {
            "key": "C",
            "text": "1"
          },
          {
            "key": "D",
            "text": "∞"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "交错级数判别方法（）",
        "options": [
          {
            "key": "A",
            "text": "莱布尼茨判别法",
            "correct": true
          },
          {
            "key": "B",
            "text": "比值判别"
          },
          {
            "key": "C",
            "text": "洛必达"
          },
          {
            "key": "D",
            "text": "积分判别"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "$e^x$麦克劳林展开式常数项为（）",
        "options": [
          {
            "key": "A",
            "text": "0"
          },
          {
            "key": "B",
            "text": "1",
            "correct": true
          },
          {
            "key": "C",
            "text": "x"
          },
          {
            "key": "D",
            "text": "$x^2$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "正项级数敛散判别法（）",
        "options": [
          {
            "key": "A",
            "text": "比值判别法",
            "correct": true
          },
          {
            "key": "B",
            "text": "比较判别法",
            "correct": true
          },
          {
            "key": "C",
            "text": "积分判别法",
            "correct": true
          },
          {
            "key": "D",
            "text": "莱布尼茨判别"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "绝对收敛级数性质（）",
        "options": [
          {
            "key": "A",
            "text": "重排后和不变",
            "correct": true
          },
          {
            "key": "B",
            "text": "满足四则运算",
            "correct": true
          },
          {
            "key": "C",
            "text": "一定条件收敛"
          },
          {
            "key": "D",
            "text": "通项极限为0",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "级数收敛必要条件：$\\lim\\limits_{n\\to\\infty}u_n=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：0"
      },
      {
        "question": "$\\dfrac1{1-x}$幂级数展开$|x|<1$：________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$\\sum\\limits_{n=0}^\\infty x^n$"
      },
      {
        "question": "求幂级数$\\sum\\limits_{n=1}^\\infty \\dfrac{x^n}{n}$收敛域",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：收敛半径$R=1$，收敛域$[-1,1)$"
      },
      {
        "question": "证明：若级数$\\sum u_n$绝对收敛，则原级数一定收敛。\n---",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ]
  },
  "线性代数 (Linear Algebra)": {
    "第1章：行列式与矩阵代数": [
      {
        "question": "二阶矩阵$\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$行列式=（）",
        "options": [
          {
            "key": "A",
            "text": "$ad-bc$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$ac-bd$"
          },
          {
            "key": "C",
            "text": "$ad+bc$"
          },
          {
            "key": "D",
            "text": "$ab-cd$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "n阶方阵可逆充要条件（）",
        "options": [
          {
            "key": "A",
            "text": "$|",
            "correct": true
          },
          {
            "key": "B",
            "text": "$|"
          },
          {
            "key": "C",
            "text": "对角线全非0"
          },
          {
            "key": "D",
            "text": "对称矩阵"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "矩阵乘法$A_{m\\times s}B_{s\\times n}$结果维度（）",
        "options": [
          {
            "key": "A",
            "text": "$m\\times n$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$s\\times s$"
          },
          {
            "key": "C",
            "text": "$m\\times s$"
          },
          {
            "key": "D",
            "text": "$s\\times n$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "单位矩阵$E$与同阶方阵$A$相乘结果（）",
        "options": [
          {
            "key": "A",
            "text": "$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$E$"
          },
          {
            "key": "C",
            "text": "0矩阵"
          },
          {
            "key": "D",
            "text": "$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "行列式基本性质正确（）",
        "options": [
          {
            "key": "A",
            "text": "换行行列式变号",
            "correct": true
          },
          {
            "key": "B",
            "text": "成比例行行列式为0",
            "correct": true
          },
          {
            "key": "C",
            "text": "数乘一行等于数乘行列式",
            "correct": true
          },
          {
            "key": "D",
            "text": "交换列值不变"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "矩阵运算满足分配律（）",
        "options": [
          {
            "key": "A",
            "text": "$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$(",
            "correct": true
          },
          {
            "key": "C",
            "text": "$"
          },
          {
            "key": "D",
            "text": "$(k",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "矩阵转置$(AB)^T=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$B^TA^T$"
      },
      {
        "question": "伴随矩阵求逆公式$A^{-1}=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$\\dfrac1{|A|}A^*$"
      },
      {
        "question": "计算三阶行列式$\\begin{vmatrix}1&2\\\\3&4\\end{vmatrix}$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：$1\\times4 - 2\\times3 = -2$"
      },
      {
        "question": "证明：方阵$A$可逆当且仅当$|A|\\neq0$。",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ],
    "第2章：线性方程组与向量空间": [
      {
        "question": "n元齐次线性方程组$Ax=0$有无穷多解充要条件（）",
        "options": [
          {
            "key": "A",
            "text": "$r(",
            "correct": true
          },
          {
            "key": "B",
            "text": "$r("
          },
          {
            "key": "C",
            "text": "$|"
          },
          {
            "key": "D",
            "text": "常数项全0"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "向量组线性无关定义是（）",
        "options": [
          {
            "key": "A",
            "text": "仅零组合等于零向量",
            "correct": true
          },
          {
            "key": "B",
            "text": "存在非零组合等于零向量"
          },
          {
            "key": "C",
            "text": "向量个数多"
          },
          {
            "key": "D",
            "text": "向量正交"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "三维向量空间维数为（）",
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
            "text": "3",
            "correct": true
          },
          {
            "key": "D",
            "text": "∞"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "增广矩阵秩$r(\\overline{A})>r(A)$时方程组（）",
        "options": [
          {
            "key": "A",
            "text": "无解",
            "correct": true
          },
          {
            "key": "B",
            "text": "唯一解"
          },
          {
            "key": "C",
            "text": "无穷解"
          },
          {
            "key": "D",
            "text": "无法判断"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "向量空间八条公理包含（）",
        "options": [
          {
            "key": "A",
            "text": "$\\alpha+\\beta=\\beta+\\alpha$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$\\alpha+0=\\alpha$",
            "correct": true
          },
          {
            "key": "C",
            "text": "$k(\\alpha+\\beta)=k\\alpha+k\\beta$",
            "correct": true
          },
          {
            "key": "D",
            "text": "$\\alpha\\cdot\\beta=0$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "齐次方程组基础解系性质（）",
        "options": [
          {
            "key": "A",
            "text": "线性无关",
            "correct": true
          },
          {
            "key": "B",
            "text": "任意解可线性表示",
            "correct": true
          },
          {
            "key": "C",
            "text": "向量个数$n-r(",
            "correct": true
          },
          {
            "key": "D",
            "text": "唯一一组解"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "向量组秩是其极大线性无关组的________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：向量个数"
      },
      {
        "question": "非齐次通解=齐次通解+________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：一个特解"
      },
      {
        "question": "解方程组$\\begin{cases}x_1+x_2=3\\\\2x_1-x_2=0\\end{cases}$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：唯一解$x_1=1,x_2=2$"
      },
      {
        "question": "证明：若向量组线性无关，则任意部分组也线性无关。",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ],
    "第3章：矩阵的特征值与二次型": [
      {
        "question": "特征方程$|\\lambda E-A|=0$根为矩阵$A$的（）",
        "options": [
          {
            "key": "A",
            "text": "特征值",
            "correct": true
          },
          {
            "key": "B",
            "text": "特征向量"
          },
          {
            "key": "C",
            "text": "秩"
          },
          {
            "key": "D",
            "text": "行列式"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "实对称矩阵不同特征值对应特征向量（）",
        "options": [
          {
            "key": "A",
            "text": "正交",
            "correct": true
          },
          {
            "key": "B",
            "text": "线性相关"
          },
          {
            "key": "C",
            "text": "相等"
          },
          {
            "key": "D",
            "text": "成比例"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "二次型正定充要条件（）",
        "options": [
          {
            "key": "A",
            "text": "全部顺序主子式>0",
            "correct": true
          },
          {
            "key": "B",
            "text": "特征值全负"
          },
          {
            "key": "C",
            "text": "矩阵对称"
          },
          {
            "key": "D",
            "text": "秩等于变量数"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "矩阵相似充要条件有相同（）",
        "options": [
          {
            "key": "A",
            "text": "特征多项式",
            "correct": true
          },
          {
            "key": "B",
            "text": "矩阵元素"
          },
          {
            "key": "C",
            "text": "行列式"
          },
          {
            "key": "D",
            "text": "秩"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "特征值基本性质（）",
        "options": [
          {
            "key": "A",
            "text": "特征值乘积=行列式",
            "correct": true
          },
          {
            "key": "B",
            "text": "特征值和=迹",
            "correct": true
          },
          {
            "key": "C",
            "text": "$k",
            "correct": true
          },
          {
            "key": "D",
            "text": "$",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "正交矩阵性质（）",
        "options": [
          {
            "key": "A",
            "text": "$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$|",
            "correct": true
          },
          {
            "key": "C",
            "text": "列向量标准正交",
            "correct": true
          },
          {
            "key": "D",
            "text": "必对称"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "矩阵迹$tr(A)=$ ________（主对角线元素和）",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：所有主对角线元素相加"
      },
      {
        "question": "二次型标准形仅含________项",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：平方"
      },
      {
        "question": "求$A=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$特征值",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：特征方程$\\lambda^2+1=0$，特征值$i,-i$"
      },
      {
        "question": "证明实对称矩阵一定可以正交对角化。\n---",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ]
  },
  "概率论与数理统计": {
    "第1章：概率空间与经典公式体系": [
      {
        "question": "古典概型样本点满足（）",
        "options": [
          {
            "key": "A",
            "text": "等可能",
            "correct": true
          },
          {
            "key": "B",
            "text": "无限多"
          },
          {
            "key": "C",
            "text": "连续取值"
          },
          {
            "key": "D",
            "text": "不可数"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "条件概率公式$P(A|B)=$（）",
        "options": [
          {
            "key": "A",
            "text": "$\\dfrac{P(",
            "correct": true
          },
          {
            "key": "B",
            "text": "$P("
          },
          {
            "key": "C",
            "text": "$P("
          },
          {
            "key": "D",
            "text": "$\\dfrac{P("
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "互斥事件$AB=\\emptyset$，$P(A+B)=$（）",
        "options": [
          {
            "key": "A",
            "text": "$P(",
            "correct": true
          },
          {
            "key": "B",
            "text": "$P("
          },
          {
            "key": "C",
            "text": "0"
          },
          {
            "key": "D",
            "text": "1"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "全概率公式核心划分（）",
        "options": [
          {
            "key": "A",
            "text": "完备事件组",
            "correct": true
          },
          {
            "key": "B",
            "text": "互斥事件"
          },
          {
            "key": "C",
            "text": "独立事件"
          },
          {
            "key": "D",
            "text": "对立事件"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "概率三公理（）",
        "options": [
          {
            "key": "A",
            "text": "$0\\le P(",
            "correct": true
          },
          {
            "key": "B",
            "text": "$P(\\Omega)=1$",
            "correct": true
          },
          {
            "key": "C",
            "text": "可列可加性",
            "correct": true
          },
          {
            "key": "D",
            "text": "$P(\\emptyset)=1$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "贝叶斯公式用途（）",
        "options": [
          {
            "key": "A",
            "text": "由先验求后验概率",
            "correct": true
          },
          {
            "key": "B",
            "text": "逆向推理",
            "correct": true
          },
          {
            "key": "C",
            "text": "计算条件概率",
            "correct": true
          },
          {
            "key": "D",
            "text": "独立事件计算"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "对立事件$A+\\overline{A}=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：样本空间$\\Omega$"
      },
      {
        "question": "独立事件满足$P(AB)=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$P(A)P(B)$"
      },
      {
        "question": "袋中3红2白，不放回取2个，求两红概率",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：$P=\\dfrac{C_3^2}{C_5^2}=\\dfrac3{10}$"
      },
      {
        "question": "证明减法公式：$P(A-B)=P(A)-P(AB)$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ],
    "第2章：随机变量的分布与数值特征": [
      {
        "question": "二维随机变量X、Y独立充要条件（）",
        "options": [
          {
            "key": "A",
            "text": "$f(x,y)=f_X(x)f_Y(y)$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$"
          },
          {
            "key": "C",
            "text": "$\\rho=0$"
          },
          {
            "key": "D",
            "text": "$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "期望$E(aX+b)=$（）",
        "options": [
          {
            "key": "A",
            "text": "$aEX+b$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$aEX$"
          },
          {
            "key": "C",
            "text": "$EX+b$"
          },
          {
            "key": "D",
            "text": "$a(EX+b)$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "方差$D(X)=E(X^2)-$（）",
        "options": [
          {
            "key": "A",
            "text": "$(EX)^2$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$EX$"
          },
          {
            "key": "C",
            "text": "$E(X^2Y)$"
          },
          {
            "key": "D",
            "text": "0"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "相关系数$\\rho=0$代表（）",
        "options": [
          {
            "key": "A",
            "text": "不相关",
            "correct": true
          },
          {
            "key": "B",
            "text": "独立"
          },
          {
            "key": "C",
            "text": "线性相关"
          },
          {
            "key": "D",
            "text": "方差相等"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "离散型常见分布（）",
        "options": [
          {
            "key": "A",
            "text": "0-1分布",
            "correct": true
          },
          {
            "key": "B",
            "text": "二项分布",
            "correct": true
          },
          {
            "key": "C",
            "text": "泊松分布",
            "correct": true
          },
          {
            "key": "D",
            "text": "正态分布"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "连续分布数字特征（）",
        "options": [
          {
            "key": "A",
            "text": "期望",
            "correct": true
          },
          {
            "key": "B",
            "text": "方差",
            "correct": true
          },
          {
            "key": "C",
            "text": "协方差",
            "correct": true
          },
          {
            "key": "D",
            "text": "相关系数",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "协方差$Cov(X,Y)=E[(X-EX)(Y-EY)]=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$E(XY)-EX\\cdot EY$"
      },
      {
        "question": "标准化变量$X^*=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$\\dfrac{X-EX}{\\sqrt{DX}}$"
      },
      {
        "question": "X服从$[0,2]$均匀分布，求$EX,DX$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：$EX=1，DX=\\dfrac13$"
      },
      {
        "question": "证明$D(aX+b)=a^2D(X)$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ],
    "第3章：数理统计与区间估计": [
      {
        "question": "样本均值是总体期望的（）",
        "options": [
          {
            "key": "A",
            "text": "无偏估计",
            "correct": true
          },
          {
            "key": "B",
            "text": "有偏估计"
          },
          {
            "key": "C",
            "text": "极大似然估计"
          },
          {
            "key": "D",
            "text": "区间估计"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "正态总体方差已知，均值置信区间用（）",
        "options": [
          {
            "key": "A",
            "text": "Z正态分位数",
            "correct": true
          },
          {
            "key": "B",
            "text": "t分位数"
          },
          {
            "key": "C",
            "text": "$\\chi^2$"
          },
          {
            "key": "D",
            "text": "F分布"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "极大似然估计核心最大化（）",
        "options": [
          {
            "key": "A",
            "text": "似然函数",
            "correct": true
          },
          {
            "key": "B",
            "text": "损失函数"
          },
          {
            "key": "C",
            "text": "方差"
          },
          {
            "key": "D",
            "text": "均值"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "置信水平$1-\\alpha$含义（）",
        "options": [
          {
            "key": "A",
            "text": "区间包含真实参数概率$1-\\alpha$",
            "correct": true
          },
          {
            "key": "B",
            "text": "参数落在区间概率$1-\\alpha$"
          },
          {
            "key": "C",
            "text": "样本概率$\\alpha$"
          },
          {
            "key": "D",
            "text": "无统计意义"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "三大抽样分布（）",
        "options": [
          {
            "key": "A",
            "text": "$\\chi^2$卡方",
            "correct": true
          },
          {
            "key": "B",
            "text": "t分布",
            "correct": true
          },
          {
            "key": "C",
            "text": "F分布",
            "correct": true
          },
          {
            "key": "D",
            "text": "正态分布"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "优良估计量标准（）",
        "options": [
          {
            "key": "A",
            "text": "无偏性",
            "correct": true
          },
          {
            "key": "B",
            "text": "有效性",
            "correct": true
          },
          {
            "key": "C",
            "text": "一致性",
            "correct": true
          },
          {
            "key": "D",
            "text": "唯一性"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "样本方差$S^2=$ ________（除以n-1）",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$\\dfrac1{n-1}\\sum\\limits_{i=1}^n (X_i-\\overline{X})^2$"
      },
      {
        "question": "方差置信区间采用________分布",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$\\chi^2$"
      },
      {
        "question": "正态样本：2,4,6，求样本均值",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：$\\overline{X}=4$"
      },
      {
        "question": "证明样本均值$\\overline{X}$是总体$\\mu$无偏估计：$E(\\overline{X})=\\mu$\n---",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ]
  },
  "离散数学 (Discrete Mathematics)": {
    "第1章：数理逻辑基础": [
      {
        "question": "命题公式$P\\to Q$等价于（）",
        "options": [
          {
            "key": "A",
            "text": "$\\neg P\\lor Q$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$P\\land Q$"
          },
          {
            "key": "C",
            "text": "$\\neg P\\land Q$"
          },
          {
            "key": "D",
            "text": "$P\\lor Q$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "重言式定义（）",
        "options": [
          {
            "key": "A",
            "text": "全部赋值成真",
            "correct": true
          },
          {
            "key": "B",
            "text": "全部赋值成假"
          },
          {
            "key": "C",
            "text": "部分真部分假"
          },
          {
            "key": "D",
            "text": "无赋值"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "全称量词符号（）",
        "options": [
          {
            "key": "A",
            "text": "$\\forall$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$\\exists$"
          },
          {
            "key": "C",
            "text": "$\\neg$"
          },
          {
            "key": "D",
            "text": "$\\to$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "命题联结词优先级最高（）",
        "options": [
          {
            "key": "A",
            "text": "否定$\\neg$",
            "correct": true
          },
          {
            "key": "B",
            "text": "合取$\\land$"
          },
          {
            "key": "C",
            "text": "析取$\\lor$"
          },
          {
            "key": "D",
            "text": "蕴含$\\to$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "等价等值式正确（）",
        "options": [
          {
            "key": "A",
            "text": "$P\\leftrightarrow Q=(P\\to Q)\\land(Q\\to P)$",
            "correct": true
          },
          {
            "key": "B",
            "text": "双重否定$\\neg\\neg P=P$",
            "correct": true
          },
          {
            "key": "C",
            "text": "德摩根$\\neg(P\\land Q)=\\neg P\\lor\\neg Q$",
            "correct": true
          },
          {
            "key": "D",
            "text": "$P\\to Q=Q\\to P$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "谓词逻辑量词包含（）",
        "options": [
          {
            "key": "A",
            "text": "全称$\\forall$",
            "correct": true
          },
          {
            "key": "B",
            "text": "存在$\\exists$",
            "correct": true
          },
          {
            "key": "C",
            "text": "唯一$\\exists!$",
            "correct": true
          },
          {
            "key": "D",
            "text": "任意$\\forall!$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "矛盾式：所有赋值结果为________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：假（0）"
      },
      {
        "question": "德摩根定律$\\neg(P\\lor Q)=$ ________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$\\neg P\\land \\neg Q$"
      },
      {
        "question": "列出$P\\to (Q\\land P)$真值表",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：P=0全为1；P=1,Q=1得1，P=1,Q=0得0"
      },
      {
        "question": "证明吸收律：$P\\lor (P\\land Q)\\Leftrightarrow P$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ],
    "第2章：集合论与二元关系": [
      {
        "question": "集合$A=\\{1,2\\}$幂集元素个数（）",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "4",
            "correct": true
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "1"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "二元关系传递定义：$<x,y>\\in R,<y,z>\\in R$则（）",
        "options": [
          {
            "key": "A",
            "text": "$<x,z>\\in R$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$<z,x>\\in R$"
          },
          {
            "key": "C",
            "text": "$<y,x>\\in R$"
          },
          {
            "key": "D",
            "text": "$<z,y>\\in R$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "等价关系三大性质（）",
        "options": [
          {
            "key": "A",
            "text": "自反、对称、传递",
            "correct": true
          },
          {
            "key": "B",
            "text": "自反、反对称、传递"
          },
          {
            "key": "C",
            "text": "反自反、对称、传递"
          },
          {
            "key": "D",
            "text": "自反、对称、反传递"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "集合差$A-B=$（）",
        "options": [
          {
            "key": "A",
            "text": "$\\{x|x\\in",
            "correct": true
          },
          {
            "key": "B",
            "text": "$"
          },
          {
            "key": "C",
            "text": "$"
          },
          {
            "key": "D",
            "text": "$\\overline{"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "集合运算（）",
        "options": [
          {
            "key": "A",
            "text": "并$\\cup$",
            "correct": true
          },
          {
            "key": "B",
            "text": "交$\\cap$",
            "correct": true
          },
          {
            "key": "C",
            "text": "差$-$",
            "correct": true
          },
          {
            "key": "D",
            "text": "对称差$\\oplus$",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "偏序关系性质（）",
        "options": [
          {
            "key": "A",
            "text": "自反",
            "correct": true
          },
          {
            "key": "B",
            "text": "反对称",
            "correct": true
          },
          {
            "key": "C",
            "text": "传递",
            "correct": true
          },
          {
            "key": "D",
            "text": "对称"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "空集符号________，是所有集合子集",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$\\emptyset$"
      },
      {
        "question": "集合基数$|A\\cup B|=$ ________容斥公式",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：$|A|+|B|-|A\\cap B|$"
      },
      {
        "question": "$A=\\{1,2,3\\},B=\\{2,3,4\\}$，求$A\\oplus B$对称差",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：$\\{1,4\\}$"
      },
      {
        "question": "证明集合分配律：$A\\cap(B\\cup C)=(A\\cap B)\\cup(A\\cap C)$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ],
    "第3章：图论基础知识": [
      {
        "question": "n顶点无向连通生成树边数（）",
        "options": [
          {
            "key": "A",
            "text": "$n-1$",
            "correct": true
          },
          {
            "key": "B",
            "text": "$n$"
          },
          {
            "key": "C",
            "text": "$n+1$"
          },
          {
            "key": "D",
            "text": "$2n$"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "无向图握手定理：所有顶点度数和等于（）",
        "options": [
          {
            "key": "A",
            "text": "边数2倍",
            "correct": true
          },
          {
            "key": "B",
            "text": "边数"
          },
          {
            "key": "C",
            "text": "顶点数"
          },
          {
            "key": "D",
            "text": "0"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "简单图无（）",
        "options": [
          {
            "key": "A",
            "text": "环、重边",
            "correct": true
          },
          {
            "key": "B",
            "text": "顶点"
          },
          {
            "key": "C",
            "text": "边"
          },
          {
            "key": "D",
            "text": "度数0点"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "欧拉图充要：无向连通且所有顶点度数（）",
        "options": [
          {
            "key": "A",
            "text": "偶数",
            "correct": true
          },
          {
            "key": "B",
            "text": "奇数"
          },
          {
            "key": "C",
            "text": "1"
          },
          {
            "key": "D",
            "text": "0"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "图存储方式（）",
        "options": [
          {
            "key": "A",
            "text": "邻接矩阵",
            "correct": true
          },
          {
            "key": "B",
            "text": "邻接表",
            "correct": true
          },
          {
            "key": "C",
            "text": "关联矩阵",
            "correct": true
          },
          {
            "key": "D",
            "text": "哈希表"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "树的特征（）",
        "options": [
          {
            "key": "A",
            "text": "连通无环",
            "correct": true
          },
          {
            "key": "B",
            "text": "$m=n-1$",
            "correct": true
          },
          {
            "key": "C",
            "text": "任意两点唯一简单路",
            "correct": true
          },
          {
            "key": "D",
            "text": "加一条边必出环",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "有向图路径长度定义为________数量",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：边"
      },
      {
        "question": "哈密顿回路经过每个顶点________次",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：恰好1"
      },
      {
        "question": "4顶点完全图$K_4$总边数",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：$C_4^2=6$"
      },
      {
        "question": "证明握手定理：无向图顶点度数之和=2倍边数。\n---",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ]
  },
  "计算机导论": {
    "第1章：计算机起源与图灵机模型": [
      {
        "question": "图灵机核心组成不包含（）",
        "options": [
          {
            "key": "A",
            "text": "纸带"
          },
          {
            "key": "B",
            "text": "读写头"
          },
          {
            "key": "C",
            "text": "状态控制器"
          },
          {
            "key": "D",
            "text": "显卡",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "第一台电子数字计算机ENIAC采用（）",
        "options": [
          {
            "key": "A",
            "text": "电子管",
            "correct": true
          },
          {
            "key": "B",
            "text": "晶体管"
          },
          {
            "key": "C",
            "text": "集成电路"
          },
          {
            "key": "D",
            "text": "超大规模集成电路"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "图灵停机问题结论（）",
        "options": [
          {
            "key": "A",
            "text": "不存在通用判定算法",
            "correct": true
          },
          {
            "key": "B",
            "text": "存在多项式算法"
          },
          {
            "key": "C",
            "text": "可暴力枚举"
          },
          {
            "key": "D",
            "text": "有限步骤判定"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "冯诺依曼理论诞生年份（）",
        "options": [
          {
            "key": "A",
            "text": "1945",
            "correct": true
          },
          {
            "key": "B",
            "text": "1950"
          },
          {
            "key": "C",
            "text": "1960"
          },
          {
            "key": "D",
            "text": "1970"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "图灵机五大核心组件（）",
        "options": [
          {
            "key": "A",
            "text": "无限纸带",
            "correct": true
          },
          {
            "key": "B",
            "text": "读写头",
            "correct": true
          },
          {
            "key": "C",
            "text": "状态寄存器",
            "correct": true
          },
          {
            "key": "D",
            "text": "转移函数",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "计算机发展四代划分依据硬件（）",
        "options": [
          {
            "key": "A",
            "text": "电子管",
            "correct": true
          },
          {
            "key": "B",
            "text": "晶体管",
            "correct": true
          },
          {
            "key": "C",
            "text": "集成电路",
            "correct": true
          },
          {
            "key": "D",
            "text": "超大规模集成电路",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "图灵机可识别语言称为________可计算语言",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：图灵"
      },
      {
        "question": "冯诺依曼核心思想：________共存于存储器",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：程序与数据"
      },
      {
        "question": "简述图灵机模型的计算逻辑",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：读写头读取纸带符号，结合当前状态，根据转移函数改写符号、移动纸带、切换状态，完成运算。"
      },
      {
        "question": "分析：为什么停机问题不可解（证明思路）",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>证明：反证法，假设存在判定程序H，构造自指程序产生逻辑矛盾，假设不成立。"
      }
    ],
    "第2章：信息表示与数制系统": [
      {
        "question": "8位无符号二进制最大值（）",
        "options": [
          {
            "key": "A",
            "text": "127"
          },
          {
            "key": "B",
            "text": "255",
            "correct": true
          },
          {
            "key": "C",
            "text": "256"
          },
          {
            "key": "D",
            "text": "128"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "十进制10转二进制为（）",
        "options": [
          {
            "key": "A",
            "text": "1010",
            "correct": true
          },
          {
            "key": "B",
            "text": "1100"
          },
          {
            "key": "C",
            "text": "0101"
          },
          {
            "key": "D",
            "text": "1001"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "ASCII标准字符编码位数（）",
        "options": [
          {
            "key": "A",
            "text": "7位",
            "correct": true
          },
          {
            "key": "B",
            "text": "8位"
          },
          {
            "key": "C",
            "text": "16位"
          },
          {
            "key": "D",
            "text": "32位"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "负数计算机内部存储采用（）",
        "options": [
          {
            "key": "A",
            "text": "补码",
            "correct": true
          },
          {
            "key": "B",
            "text": "原码"
          },
          {
            "key": "C",
            "text": "反码"
          },
          {
            "key": "D",
            "text": "真值"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "计算机常用进制（）",
        "options": [
          {
            "key": "A",
            "text": "二进制",
            "correct": true
          },
          {
            "key": "B",
            "text": "八进制",
            "correct": true
          },
          {
            "key": "C",
            "text": "十进制",
            "correct": true
          },
          {
            "key": "D",
            "text": "十六进制",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "浮点数IEEE754组成部分（）",
        "options": [
          {
            "key": "A",
            "text": "符号位",
            "correct": true
          },
          {
            "key": "B",
            "text": "阶码",
            "correct": true
          },
          {
            "key": "C",
            "text": "尾数",
            "correct": true
          },
          {
            "key": "D",
            "text": "校验位"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "十六进制基数=________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：16"
      },
      {
        "question": "32位单精度浮点数阶码偏移量________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：127"
      },
      {
        "question": "十进制23转二进制、十六进制",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：二进制10111，十六进制0x17"
      },
      {
        "question": "简述补码相比原码、反码的优势",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：0唯一表示，减法转换加法，硬件只需加法器，简化CPU电路。"
      }
    ],
    "第3章：算法与数据结构基底": [
      {
        "question": "顺序存储数组随机访问复杂度（）",
        "options": [
          {
            "key": "A",
            "text": "O(1)",
            "correct": true
          },
          {
            "key": "B",
            "text": "O(n)"
          },
          {
            "key": "C",
            "text": "O(logn)"
          },
          {
            "key": "D",
            "text": "O(n²)"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "栈操作规则（）",
        "options": [
          {
            "key": "A",
            "text": "LIFO先进后出",
            "correct": true
          },
          {
            "key": "B",
            "text": "FIFO先进先出"
          },
          {
            "key": "C",
            "text": "随机读写"
          },
          {
            "key": "D",
            "text": "排序输出"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "二分查找适用结构（）",
        "options": [
          {
            "key": "A",
            "text": "有序数组",
            "correct": true
          },
          {
            "key": "B",
            "text": "无序链表"
          },
          {
            "key": "C",
            "text": "栈"
          },
          {
            "key": "D",
            "text": "队列"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "时间复杂度O(nlogn)排序（）",
        "options": [
          {
            "key": "A",
            "text": "快速排序",
            "correct": true
          },
          {
            "key": "B",
            "text": "冒泡排序"
          },
          {
            "key": "C",
            "text": "选择排序"
          },
          {
            "key": "D",
            "text": "插入排序"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "线性数据结构（）",
        "options": [
          {
            "key": "A",
            "text": "数组",
            "correct": true
          },
          {
            "key": "B",
            "text": "链表",
            "correct": true
          },
          {
            "key": "C",
            "text": "栈",
            "correct": true
          },
          {
            "key": "D",
            "text": "队列",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "算法五大特性（）",
        "options": [
          {
            "key": "A",
            "text": "有穷性",
            "correct": true
          },
          {
            "key": "B",
            "text": "确定性",
            "correct": true
          },
          {
            "key": "C",
            "text": "输入",
            "correct": true
          },
          {
            "key": "D",
            "text": "输出、可行性",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "队列底层操作规则________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：先进先出FIFO"
      },
      {
        "question": "递归算法底层依赖________存储现场",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：栈"
      },
      {
        "question": "简述时间复杂度与空间复杂度含义",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：时间复杂度：执行步数随数据规模增长关系；空间：运行额外内存占用规模关系。"
      }
    ]
  },
  "计算机组成与体系结构": {
    "第1章：冯·诺依曼体系结构及其瓶颈": [
      {
        "question": "冯诺依曼瓶颈成因（）",
        "options": [
          {
            "key": "A",
            "text": "指令数据共享总线",
            "correct": true
          },
          {
            "key": "C",
            "text": "硬盘慢"
          },
          {
            "key": "D",
            "text": "寄存器少"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "哈佛结构分离（）",
        "options": [
          {
            "key": "A",
            "text": "指令存储器、数据存储器总线",
            "correct": true
          },
          {
            "key": "B",
            "text": "多核运算单元"
          },
          {
            "key": "C",
            "text": "多级"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "CPU五大部件不包含（）",
        "options": [
          {
            "key": "A",
            "text": "显卡",
            "correct": true
          },
          {
            "key": "B",
            "text": "运算器"
          },
          {
            "key": "C",
            "text": "控制器"
          },
          {
            "key": "D",
            "text": "寄存器堆"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "存储层次速度排序从快到慢（）",
        "options": [
          {
            "key": "A",
            "text": "寄存器>",
            "correct": true
          },
          {
            "key": "C",
            "text": "硬盘>主存>"
          },
          {
            "key": "D",
            "text": "主存>寄存器>"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "冯诺依曼五大硬件部件（）",
        "options": [
          {
            "key": "A",
            "text": "运算器",
            "correct": true
          },
          {
            "key": "B",
            "text": "控制器",
            "correct": true
          },
          {
            "key": "C",
            "text": "存储器",
            "correct": true
          },
          {
            "key": "D",
            "text": "输入/输出设备",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "缓解冯诺依曼瓶颈方案（）",
        "options": [
          {
            "key": "A",
            "text": "多级",
            "correct": true
          },
          {
            "key": "B",
            "text": "哈佛总线架构",
            "correct": true
          },
          {
            "key": "C",
            "text": "超标量流水线",
            "correct": true
          },
          {
            "key": "D",
            "text": "片上存储",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "冯诺依曼核心原理：________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：存储程序"
      },
      {
        "question": "程序计数器PC存储________地址",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：下一条待取指令"
      },
      {
        "question": "详细说明冯诺依曼瓶颈是什么",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：C"
      },
      {
        "question": "证明补码减法公式 $[X-Y]_{补}=[X]_{补}+[-Y]_{补}$",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ],
    "第2章：CPU微架构与指令流水线": [
      {
        "question": "流水线多条指令争抢内存属于（）",
        "options": [
          {
            "key": "A",
            "text": "结构冒险",
            "correct": true
          },
          {
            "key": "B",
            "text": "数据冒险"
          },
          {
            "key": "C",
            "text": "控制冒险"
          },
          {
            "key": "D",
            "text": "无冲突"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "超标量CPU特征（）",
        "options": [
          {
            "key": "A",
            "text": "多发射端口单周期执行多条指令",
            "correct": true
          },
          {
            "key": "B",
            "text": "单发射流水线"
          },
          {
            "key": "C",
            "text": "无流水线"
          },
          {
            "key": "D",
            "text": "串行执行"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "分支预测解决（）",
        "options": [
          {
            "key": "A",
            "text": "控制冒险流水线冲刷",
            "correct": true
          },
          {
            "key": "B",
            "text": "数据冲突"
          },
          {
            "key": "C",
            "text": "结构冲突"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "流水线标准五步顺序（）",
        "options": [
          {
            "key": "A",
            "text": "取指-译码-执行-访存-写回",
            "correct": true
          },
          {
            "key": "B",
            "text": "译码-取指-执行"
          },
          {
            "key": "C",
            "text": "取指-执行-译码"
          },
          {
            "key": "D",
            "text": "访存-取指-写回"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "流水线三类冒险（）",
        "options": [
          {
            "key": "A",
            "text": "结构冒险",
            "correct": true
          },
          {
            "key": "B",
            "text": "数据冒险",
            "correct": true
          },
          {
            "key": "C",
            "text": "控制冒险",
            "correct": true
          },
          {
            "key": "D",
            "text": "存储冒险"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "数据冒险解决方案（）",
        "options": [
          {
            "key": "A",
            "text": "数据旁路转发",
            "correct": true
          },
          {
            "key": "B",
            "text": "插入NOP空指令",
            "correct": true
          },
          {
            "key": "C",
            "text": "乱序执行",
            "correct": true
          },
          {
            "key": "D",
            "text": "分支预测"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "解决分支跳转清空流水线硬件机制：________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：分支预测器"
      },
      {
        "question": "乱序执行核心缓冲队列：________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：重排序缓冲ROB"
      },
      {
        "question": "简述旁路转发（Forwarding）如何消除数据冒险",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：运算结果直接转发到下一条指令运算单元，无需等待写入寄存器堆。"
      },
      {
        "question": "5级流水线，单级延迟1ns，连续8条指令总耗时",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：总周期=5+8-1=12，总耗时12ns"
      }
    ],
    "第3章：存储器层次结构与Cache一致性": [
      {
        "question": "Cache缺失类型不包含（）",
        "options": [
          {
            "key": "A",
            "text": "写缺失",
            "correct": true
          },
          {
            "key": "B",
            "text": "冷缺失"
          },
          {
            "key": "C",
            "text": "容量缺失"
          },
          {
            "key": "D",
            "text": "冲突缺失"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "MESI缓存行独占状态字母标识（）",
        "options": [
          {
            "key": "A",
            "text": "E",
            "correct": true
          },
          {
            "key": "B",
            "text": "M"
          },
          {
            "key": "C",
            "text": "S"
          },
          {
            "key": "D",
            "text": "I"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "组相联Cache相比直接映射优势（）",
        "options": [
          {
            "key": "A",
            "text": "冲突缺失更少",
            "correct": true
          },
          {
            "key": "B",
            "text": "硬件简单"
          },
          {
            "key": "C",
            "text": "无需标记比较"
          },
          {
            "key": "D",
            "text": "速度更快"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "TLB快表加速（）",
        "options": [
          {
            "key": "A",
            "text": "虚拟地址转物理地址",
            "correct": true
          },
          {
            "key": "C",
            "text": "硬盘寻址"
          },
          {
            "key": "D",
            "text": "寄存器读写"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "Cache一致性MESI四状态（）",
        "options": [
          {
            "key": "A",
            "text": "M修改",
            "correct": true
          },
          {
            "key": "B",
            "text": "E独占",
            "correct": true
          },
          {
            "key": "C",
            "text": "S共享",
            "correct": true
          },
          {
            "key": "D",
            "text": "I无效",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "虚拟内存优势（）",
        "options": [
          {
            "key": "A",
            "text": "扩大逻辑地址空间",
            "correct": true
          },
          {
            "key": "B",
            "text": "进程内存隔离",
            "correct": true
          },
          {
            "key": "C",
            "text": "内存分时复用",
            "correct": true
          },
          {
            "key": "D",
            "text": "消除访存延迟"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "Cache设计理论基础：程序________原理",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：局部性（时间+空间）"
      },
      {
        "question": "页面置换FIFO特有异常现象：________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：B"
      },
      {
        "question": "区分时间局部性与空间局部性",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：时间：刚访问数据短期再次访问；空间：相邻地址数据会连续访问。"
      },
      {
        "question": "分析为什么FIFO页面置换会出现Belady异常，LRU不会。\n---",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ]
  },
  "操作系统 (Operating Systems)": {
    "第1章：进程与线程管理": [
      {
        "question": "操作系统资源分配最小单位（）",
        "options": [
          {
            "key": "A",
            "text": "进程",
            "correct": true
          },
          {
            "key": "B",
            "text": "线程"
          },
          {
            "key": "C",
            "text": "函数"
          },
          {
            "key": "D",
            "text": "程序"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "CPU调度最小执行单位（）",
        "options": [
          {
            "key": "A",
            "text": "线程",
            "correct": true
          },
          {
            "key": "B",
            "text": "进程"
          },
          {
            "key": "C",
            "text": "会话"
          },
          {
            "key": "D",
            "text": "任务"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "Linux创建子进程系统调用（）",
        "options": [
          {
            "key": "A",
            "text": "fork()",
            "correct": true
          },
          {
            "key": "B",
            "text": "create()"
          },
          {
            "key": "C",
            "text": "newproc()"
          },
          {
            "key": "D",
            "text": "spawn()"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "进程等待IO时状态（）",
        "options": [
          {
            "key": "A",
            "text": "阻塞态",
            "correct": true
          },
          {
            "key": "B",
            "text": "运行态"
          },
          {
            "key": "C",
            "text": "就绪态"
          },
          {
            "key": "D",
            "text": "终止态"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "进程三态模型状态（）",
        "options": [
          {
            "key": "A",
            "text": "运行",
            "correct": true
          },
          {
            "key": "B",
            "text": "就绪",
            "correct": true
          },
          {
            "key": "C",
            "text": "阻塞",
            "correct": true
          },
          {
            "key": "D",
            "text": "挂起"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "线程独享资源（）",
        "options": [
          {
            "key": "A",
            "text": "栈空间",
            "correct": true
          },
          {
            "key": "B",
            "text": "P",
            "correct": true
          },
          {
            "key": "C",
            "text": "寄存器",
            "correct": true
          },
          {
            "key": "D",
            "text": "全局堆"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "fork创建子进程内存优化技术：________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：写时复制COW"
      },
      {
        "question": "父进程退出无wait回收子进程变为________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：孤儿进程"
      },
      {
        "question": "区分僵尸进程与孤儿进程",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：孤儿：父进程退出，1号进程收养；僵尸：子进程结束，父未调用wait释放PCB。"
      },
      {
        "question": "分析COW写时复制工作流程，为什么能减少fork内存开销。",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ],
    "第2章：内存管理体系": [
      {
        "question": "分页地址转换加速硬件（）",
        "options": [
          {
            "key": "A",
            "text": "TL",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "页面置换最优理论算法缩写（）",
        "options": [
          {
            "key": "A",
            "text": "OPT",
            "correct": true
          },
          {
            "key": "B",
            "text": "LRU"
          },
          {
            "key": "C",
            "text": "FIFO"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "分段存储优势（）",
        "options": [
          {
            "key": "A",
            "text": "逻辑模块隔离、共享段",
            "correct": true
          },
          {
            "key": "B",
            "text": "无页内碎片"
          },
          {
            "key": "C",
            "text": "硬件简单"
          },
          {
            "key": "D",
            "text": "无需页表"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "缺页中断触发时机（）",
        "options": [
          {
            "key": "A",
            "text": "访问页面不在主存",
            "correct": true
          },
          {
            "key": "C",
            "text": "寄存器无数据"
          },
          {
            "key": "D",
            "text": "硬盘损坏"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "虚拟内存核心组件（）",
        "options": [
          {
            "key": "A",
            "text": "页表",
            "correct": true
          },
          {
            "key": "B",
            "text": "TL",
            "correct": true
          },
          {
            "key": "C",
            "text": "交换分区Swap",
            "correct": true
          },
          {
            "key": "D",
            "text": "通用寄存器"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "内存碎片分类（）",
        "options": [
          {
            "key": "A",
            "text": "内部碎片",
            "correct": true
          },
          {
            "key": "B",
            "text": "外部碎片",
            "correct": true
          },
          {
            "key": "C",
            "text": "缓存碎片"
          },
          {
            "key": "D",
            "text": "栈碎片"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "分页机制地址分为页号+________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：页内偏移"
      },
      {
        "question": "LRU置换淘汰________访问页面",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：最久未使用"
      },
      {
        "question": "简述分页与分段存储管理核心区别",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：分页：物理等分页面，消除外部碎片；分段：按逻辑模块划分，支持段共享、段保护。"
      },
      {
        "question": "页面4KB，逻辑地址15000，计算页号与页内偏移",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：<br><br>解：页号=15000//4096=3，偏移=15000%4096=2712"
      }
    ],
    "第3章：文件系统与外部输入输出(I/O)": [
      {
        "question": "DMA传输期间CPU状态（）",
        "options": [
          {
            "key": "A",
            "text": "并行执行其他任务",
            "correct": true
          },
          {
            "key": "B",
            "text": "等待总线"
          },
          {
            "key": "C",
            "text": "逐字节拷贝"
          },
          {
            "key": "D",
            "text": "停止运算"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "Linux文件索引节点称为（）",
        "options": [
          {
            "key": "A",
            "text": "inode",
            "correct": true
          },
          {
            "key": "B",
            "text": "fd文件描述符"
          },
          {
            "key": "C",
            "text": "目录项"
          },
          {
            "key": "D",
            "text": "超级块"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "磁盘调度SCAN算法又称（）",
        "options": [
          {
            "key": "A",
            "text": "电梯算法",
            "correct": true
          },
          {
            "key": "B",
            "text": "先来先服务"
          },
          {
            "key": "C",
            "text": "最短寻道优先"
          },
          {
            "key": "D",
            "text": "循环扫描"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "同步IO与异步IO区别核心（）",
        "options": [
          {
            "key": "A",
            "text": "是否阻塞线程等待完成",
            "correct": true
          },
          {
            "key": "B",
            "text": "读写速度"
          },
          {
            "key": "C",
            "text": "文件大小"
          },
          {
            "key": "D",
            "text": "存储介质"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "I/O数据传输三种方式（）",
        "options": [
          {
            "key": "A",
            "text": "程序查询",
            "correct": true
          },
          {
            "key": "B",
            "text": "中断",
            "correct": true
          },
          {
            "key": "D",
            "text": "分页传输"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "文件系统元数据包含（）",
        "options": [
          {
            "key": "A",
            "text": "inode权限、大小",
            "correct": true
          },
          {
            "key": "B",
            "text": "磁盘块指针",
            "correct": true
          },
          {
            "key": "C",
            "text": "创建修改时间",
            "correct": true
          },
          {
            "key": "D",
            "text": "文件内容"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "DMA全称：________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：直接内存访问Direct Memory Access"
      },
      {
        "question": "磁盘寻道、旋转、________三段访问延迟",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：数据传输"
      },
      {
        "question": "简述DMA相比中断IO的性能优势",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：D"
      },
      {
        "question": "分析为什么SSTF最短寻道优先会产生饥饿问题。\n---",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ]
  },
  "编程语言原理": {
    "第1章：语言翻译体系与前端流程": [
      {
        "question": "编译器前端处理顺序（）",
        "options": [
          {
            "key": "A",
            "text": "词法分析→语法分析→语义分析",
            "correct": true
          },
          {
            "key": "B",
            "text": "语法→词法→语义"
          },
          {
            "key": "C",
            "text": "语义→词法→语法"
          },
          {
            "key": "D",
            "text": "词法→语义→语法"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "词法分析输出单元（）",
        "options": [
          {
            "key": "A",
            "text": "Token记号",
            "correct": true
          },
          {
            "key": "B",
            "text": "抽象语法树"
          },
          {
            "key": "C",
            "text": "中间代码IR"
          },
          {
            "key": "D",
            "text": "机器码"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "上下文无关文法用于（）",
        "options": [
          {
            "key": "A",
            "text": "语法分析",
            "correct": true
          },
          {
            "key": "B",
            "text": "词法扫描"
          },
          {
            "key": "C",
            "text": "类型检查"
          },
          {
            "key": "D",
            "text": "代码生成"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "词法分析工具生成器（）",
        "options": [
          {
            "key": "A",
            "text": "Lex/Flex",
            "correct": true
          },
          {
            "key": "B",
            "text": "Yacc/"
          },
          {
            "key": "C",
            "text": "LLVM"
          },
          {
            "key": "D",
            "text": "G"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "编译器完整阶段（）",
        "options": [
          {
            "key": "A",
            "text": "前端：词法/语法/语义",
            "correct": true
          },
          {
            "key": "B",
            "text": "中端：IR优化",
            "correct": true
          },
          {
            "key": "C",
            "text": "后端：目标代码生成",
            "correct": true
          },
          {
            "key": "D",
            "text": "链接加载",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "语义分析完成工作（）",
        "options": [
          {
            "key": "A",
            "text": "类型检查",
            "correct": true
          },
          {
            "key": "B",
            "text": "符号表构建",
            "correct": true
          },
          {
            "key": "C",
            "text": "作用域解析",
            "correct": true
          },
          {
            "key": "D",
            "text": "关键字识别"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "语法分析输出数据结构：________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：抽象语法树AST"
      },
      {
        "question": "存储变量、函数标识符信息的数据结构：________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：符号表"
      },
      {
        "question": "区分编译器与解释器执行流程差异",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：编译器：完整编译生成机器码再执行；解释器：逐行翻译执行，无独立编译阶段。"
      },
      {
        "question": "分析Token、AST、IR中间代码三者作用与层级关系。",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案："
      }
    ],
    "第2章：内存分配模型与垃圾回收GC": [
      {
        "question": "C语言malloc分配内存位于（）",
        "options": [
          {
            "key": "A",
            "text": "堆Heap",
            "correct": true
          },
          {
            "key": "B",
            "text": "栈Stack"
          },
          {
            "key": "C",
            "text": "全局数据段"
          },
          {
            "key": "D",
            "text": "代码段"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "Java主流GC标记清除解决（）",
        "options": [
          {
            "key": "A",
            "text": "循环引用内存泄漏",
            "correct": true
          },
          {
            "key": "B",
            "text": "栈溢出"
          },
          {
            "key": "C",
            "text": "数组越界"
          },
          {
            "key": "D",
            "text": "空指针"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "栈内存分配释放时机（）",
        "options": [
          {
            "key": "A",
            "text": "函数调用创建，退出自动回收",
            "correct": true
          },
          {
            "key": "B",
            "text": "手动free释放"
          },
          {
            "key": "C",
            "text": "G"
          },
          {
            "key": "D",
            "text": "程序结束释放"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "分代回收新生代GC算法（）",
        "options": [
          {
            "key": "A",
            "text": "复制算法",
            "correct": true
          },
          {
            "key": "B",
            "text": "标记清除"
          },
          {
            "key": "C",
            "text": "标记整理"
          },
          {
            "key": "D",
            "text": "引用计数"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "程序四大内存分区（）",
        "options": [
          {
            "key": "A",
            "text": "代码段",
            "correct": true
          },
          {
            "key": "B",
            "text": "全局静态区",
            "correct": true
          },
          {
            "key": "C",
            "text": "栈",
            "correct": true
          },
          {
            "key": "D",
            "text": "堆",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "垃圾回收三大基础算法（）",
        "options": [
          {
            "key": "A",
            "text": "引用计数",
            "correct": true
          },
          {
            "key": "B",
            "text": "标记清除",
            "correct": true
          },
          {
            "key": "C",
            "text": "复制",
            "correct": true
          },
          {
            "key": "D",
            "text": "手动free"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "引用计数GC缺陷：无法处理________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：对象循环引用"
      },
      {
        "question": "复制GC将堆划分为Eden、________幸存者区",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：Survivor"
      },
      {
        "question": "对比标记清除、标记整理、复制GC优缺点",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：复制无碎片，复制开销大；标记清除产生内存碎片；标记整理消除碎片，移动对象开销高。"
      }
    ],
    "第3章：编程范式与类型系统": [
      {
        "question": "C语言属于编程范式（）",
        "options": [
          {
            "key": "A",
            "text": "命令式过程式",
            "correct": true
          },
          {
            "key": "B",
            "text": "纯函数式"
          },
          {
            "key": "C",
            "text": "面向对象"
          },
          {
            "key": "D",
            "text": "逻辑式"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "Java静态类型含义（）",
        "options": [
          {
            "key": "A",
            "text": "编译期校验类型",
            "correct": true
          },
          {
            "key": "B",
            "text": "运行时推导类型"
          },
          {
            "key": "C",
            "text": "变量类型不可变"
          },
          {
            "key": "D",
            "text": "仅静态变量有类型"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "多态核心基础（）",
        "options": [
          {
            "key": "A",
            "text": "动态绑定",
            "correct": true
          },
          {
            "key": "B",
            "text": "静态绑定"
          },
          {
            "key": "C",
            "text": "重载"
          },
          {
            "key": "D",
            "text": "全局函数"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "Haskell典型范式（）",
        "options": [
          {
            "key": "A",
            "text": "函数式",
            "correct": true
          },
          {
            "key": "B",
            "text": "面向对象"
          },
          {
            "key": "C",
            "text": "过程式"
          },
          {
            "key": "D",
            "text": "脚本式"
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "主流编程范式（）",
        "options": [
          {
            "key": "A",
            "text": "过程式命令式",
            "correct": true
          },
          {
            "key": "B",
            "text": "面向对象OOP",
            "correct": true
          },
          {
            "key": "C",
            "text": "函数式FP",
            "correct": true
          },
          {
            "key": "D",
            "text": "逻辑式",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "类型系统分类（）",
        "options": [
          {
            "key": "A",
            "text": "静态类型",
            "correct": true
          },
          {
            "key": "B",
            "text": "动态类型",
            "correct": true
          },
          {
            "key": "C",
            "text": "强类型",
            "correct": true
          },
          {
            "key": "D",
            "text": "弱类型",
            "correct": true
          }
        ],
        "analysis": "暂无解析。"
      },
      {
        "question": "面向对象三大特性：封装、继承、________",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：多态"
      },
      {
        "question": "动态类型语言类型检查发生在________阶段",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：运行时"
      },
      {
        "question": "区分重载（Overload）与重写（Override）",
        "options": [
          {
            "key": "A",
            "text": "我已完成本题解答，查看参考答案与解析",
            "correct": true
          }
        ],
        "analysis": "参考答案：重载：同类同名不同参数，静态绑定；重写：子类覆盖父类方法，动态绑定实现多态。"
      }
    ]
  }
};
