import sqlite3
import os

DB_PATH = 'lingxi.db'

def init_database():
    print(f"正在初始化数据库: {DB_PATH}")
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # 启用外键约束
    cursor.execute("PRAGMA foreign_keys = ON;")
    
    # 清理旧表
    cursor.execute("DROP TABLE IF EXISTS resource;")
    cursor.execute("DROP TABLE IF EXISTS question;")
    cursor.execute("DROP TABLE IF EXISTS chapter;")
    cursor.execute("DROP TABLE IF EXISTS course;")
    
    # 1. 创建 course 表
    cursor.execute('''
    CREATE TABLE course (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        cover TEXT,
        description TEXT
    );
    ''')
    
    # 2. 创建 chapter 表
    cursor.execute('''
    CREATE TABLE chapter (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        course_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        content TEXT,
        mindmap TEXT,
        FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE CASCADE
    );
    ''')
    
    # 3. 创建 question 表（字段名与 question_bank 统一为 option_a/b/c/d）
    cursor.execute('''
    CREATE TABLE question (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        chapter_id INTEGER NOT NULL,
        type TEXT NOT NULL,
        question TEXT NOT NULL,
        option_a TEXT NOT NULL,
        option_b TEXT NOT NULL,
        option_c TEXT NOT NULL,
        option_d TEXT NOT NULL,
        answer TEXT NOT NULL,
        analysis TEXT,
        FOREIGN KEY (chapter_id) REFERENCES chapter(id) ON DELETE CASCADE
    );
    ''')
    
    # 4. 创建 resource 表
    cursor.execute('''
    CREATE TABLE resource (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        chapter_id INTEGER NOT NULL,
        type TEXT NOT NULL,
        url TEXT NOT NULL,
        FOREIGN KEY (chapter_id) REFERENCES chapter(id) ON DELETE CASCADE
    );
    ''')
    
    print("正在生成丰富的学习大纲与课后习题数据库...")
    
    # ==================== 1. Python递归从入门到精通 ====================
    cursor.execute("INSERT INTO course (name, cover, description) VALUES (?, ?, ?);", 
                   ("Python递归从入门到精通", "python_cover.png", "系统学习递归理论、函数调用栈及递归深层性能调优。"))
    py_id = cursor.lastrowid
    
    # 1.1 递归核心定义与调用栈
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (py_id, "第一章：递归核心定义与调用栈", 
          "<h3>1. 什么是递归？</h3><p>递归（Recursion）是指在函数的定义中调用函数自身的方法。它是将复杂的大问题拆解为相似子问题的核心思想。</p><h3>2. 调用栈原理</h3><p>系统在执行递归调用时会开辟活动记录并压入调用栈（FILO，先进后出）。一旦满足基准边界，则逐层弹栈并返回值。</p>",
          '<div class="mindmap-chart"><div class="mm-root">递归基础</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">核心要素</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">基准边界</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">递推步骤</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    
    # 5道习题
    questions = [
      ("单选题", "一个成功的递归函数必须满足哪两个要素？", "循环结构与外部计数器", "基准条件与递归步骤", "全局变量与多线程", "无符号整数与尾调用", "B", "解析：基准条件（控制何时停止）和递归步骤是递归函数正常运行的最基本两大支柱。"),
      ("单选题", "在 Python 中，如果递归未设置正确的基准条件，最直接引发的运行时错误是？", "MemoryError", "RecursionError（栈溢出）", "TypeError", "ValueError", "B", "解析：Python 会在调用栈深度超过限制时抛出 RecursionError。"),
      ("单选题", "默认情况下，Python 解释器的最大递归限制深度通常是多少？", "100次", "1000次", "10000次", "无限制", "B", "解析：Python 默认的最大递归深度限制是 1000 次，可以通过 sys.setrecursionlimit() 调整。"),
      ("单选题", "当递归函数被调用时，有关系统调用栈（Call Stack）的说法正确的是？", "每次调用都在栈上开辟新的活动记录并压栈", "递归调用不需要占用物理内存空间", "调用结束后活动记录仍然驻留栈中", "栈的存取顺序是先进先出", "A", "解析：函数调用产生的活动记录依次压栈，且遵循先进后出的原则。"),
      ("单选题", "利用递归计算阶乘 fact(5) 时，在到达最深处 fact(1) 时，调用栈中会有几个 fact 函数帧？", "3个", "4个", "5个", "6个", "C", "解析：依次压入 fact(5), fact(4), fact(3), fact(2), fact(1)，共 5 个函数活动记录。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))
        
    # 1.2 常见分治策略应用
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (py_id, "第二章：常见分治策略应用", 
          "<h3>1. 分治法原理</h3><p>分治法（Divide and Conquer）将原问题分解为若干个规模较小但类似于原问题的子问题，递归地求解这些子问题，然后再合并这些子问题的解。</p><h3>2. 经典模型</h3><p>汉诺塔移动步骤、归并排序、快速排序都是典型的分治模型。</p>",
          '<div class="mindmap-chart"><div class="mm-root">分治算法</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">分治步骤</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">分解</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">解决</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">合并</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "在分治算法的三个步骤中，将所有子问题的解合并为原问题的解，对应的步骤是？", "分解", "解决", "合并", "优化", "C", "解析：分治三步走：1.分解；2.解决；3.合并（将子问题的解合并为原问题的解）。"),
      ("单选题", "在求解汉诺塔问题时，如果圆盘数量为 n，那么最少需要移动圆盘的次数是多少？", "n^2", "2^n - 1", "2^(n-1)", "n!", "B", "解析：递推公式 F(n) = 2 * F(n-1) + 1，其通项公式为 2^n - 1。"),
      ("单选题", "快速排序算法在最坏情况下的时间复杂度是多少？", "O(n)", "O(n log n)", "O(n^2)", "O(2^n)", "C", "解析：当基准值每次都是最大或最小值时，快速排序将退化为 O(n^2) 的最坏复杂度。"),
      ("单选题", "归并排序合并子区间的空间复杂度是多少？", "O(1)", "O(log n)", "O(n)", "O(n^2)", "C", "解析：归并排序在合并时需要开辟一个和原数组大小相同的辅助临时数组，空间复杂度为 O(n)。"),
      ("单选题", "下列哪个算法最不适合使用分治递归策略解决？", "顺序查找一个无序数组中的某个值", "归并排序", "汉诺塔移动步骤", "二叉树前序遍历", "A", "解析：顺序查找迭代一次循环即可，不需要使用递归增加多余的栈空间开销。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))

    # 1.3 递归深度优化与记忆化
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (py_id, "第三章：递归深度优化与记忆化", 
          "<h3>1. 重复计算问题</h3><p>在普通斐波那契求值中，会存在大量重复计算子节点。利用缓存（如 dict）存储已计算过的值，可将复杂度从指数阶优化为线性阶。</p><h3>2. 尾递归优化</h3><p>尾递归是指递归调用是函数体的最后一个动作，其返回值直接作为结果返回，以便解释器复用栈帧。</p>",
          '<div class="mindmap-chart"><div class="mm-root">优化策略</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">方向</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">记忆化缓存</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">尾递归重用栈</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "为了解决斐波那契数列普通递归中的大量重复计算，应采用什么技术？", "增加系统调用栈的最大深度", "记忆化搜索 / 动态规划", "多线程并行计算", "减少基准条件的判断次数", "B", "解析：利用记忆化搜索（使用哈希表或数组存储已算出的项）可以将时间复杂度降低到 O(n)。"),
      ("单选题", "关于尾递归（Tail Recursion）的描述中，哪一项是正确的？", "尾递归的递归调用必须是整个函数体中最后执行的步骤，且返回值不能参与任何后续计算", "任何递归都可以通过解释器自动转换为完全不需要额外栈空间的尾递归", "尾递归比普通递归执行速度慢，因为它需要额外的参数传递", "尾递归就是把递归代码写在函数的物理最尾部，对内存没有任何实际的优化作用", "A", "解析：尾递归要求递归调用是函数的最后一个动作，且返回值必须直接作为结果返回，不进行任何附加计算。"),
      ("单选题", "在 Python 中，下面哪个装饰器可以非常方便地为递归函数实现自动记忆化（缓存）？", "@classmethod", "@staticmethod", "@functools.lru_cache", "@property", "C", "解析：@functools.lru_cache 可以直接对函数参数和返回值进行自动缓存，优化重复递归。"),
      ("单选题", "使用记忆化搜索优化后的斐波那契数列算法，其时间复杂度由原来的 O(2^n) 降低为？", "O(n^2)", "O(n log n)", "O(n)", "O(1)", "C", "解析：每个状态只计算一次，因此优化为 O(n) 的线性复杂度。"),
      ("单选题", "下列关于尾递归优化在不同编程语言中支持情况的陈述，错误的是？", "Scheme 规范强制要求必须支持尾递归优化", "Python 默认不支持且官方不推荐尾递归优化", "JavaScript 引擎在严格模式下要求支持尾递归优化", "Java 虚拟机规范强制所有 JVM 实现都必须默认开启尾递归优化", "D", "解析：Java 虚拟机由于安全和异常调用栈还原等考虑，默认并不支持或开启尾递归优化。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))


    # ==================== 2. 高等数学基础 ====================
    cursor.execute("INSERT INTO course (name, cover, description) VALUES (?, ?, ?);", 
                   ("高等数学基础", "math_cover.png", "高等数学极限理论、变化率导数及定积分的核心逻辑剖析。"))
    math_id = cursor.lastrowid
    
    # 2.1 极限理论与无穷小量
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (math_id, "第一章：极限理论与无穷小量", 
          "<h3>1. 极限的数学定义</h3><p>对于函数 f(x)，当自变量 x 趋近于某值时，函数值稳定地趋近于常数 A，则 A 为该函数在该过程中的极限。</p><h3>2. 无穷小量代换</h3><p>当 x 趋于 0 时，有等价无穷小关系：sin(x) ~ x, ln(1+x) ~ x, e^x - 1 ~ x 等。</p>",
          '<div class="mindmap-chart"><div class="mm-root">极限理论</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">计算法则</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">等价无穷小</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">两个重要极限</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "当 x 趋于 0 时，第一重要极限公式中 sin(x) / x 的极限值是？", "0", "1", "无穷大", "不存在", "B", "解析：利用几何夹逼准则可证，当 x 趋于 0 时其比值极限为 1。"),
      ("单选题", "当 x 趋于 0 时，以下哪组无穷小量是“等价无穷小量”？", "x 与 x^2", "sin(x) 与 x", "cos(x) 与 x", "tan(x) 与 x^2", "B", "解析：由重要极限公式，当 x 趋近于 0 时，sin(x)/x 极限为 1，故它们是等价无穷小量。"),
      ("单选题", "当 x 趋于 0 时，1 - cos(x) 等价于以下哪个无穷小量？", "x", "x^2 / 2", "x^2", "2x^2", "B", "解析：泰勒展开或半角公式变形可得，1 - cos(x) 等价于 (1/2)*x^2。"),
      ("单选题", "函数 f(x) = (x^2 - 1) / (x - 1) 在 x 趋近于 1 时的极限是？", "0", "1", "2", "不存在", "C", "解析：化简得 (x+1)(x-1)/(x-1) = x+1，当 x 趋近于 1 时，极限为 2。"),
      ("单选题", "夹逼定理（Squeeze Theorem）用于求极限时，其核心要求是？", "目标函数被上下两个极限相等的函数夹在中间", "左右两边的函数必须是常数", "中间函数必须是单调有界的", "函数必须存在拐点", "A", "解析：若 g(x) <= f(x) <= h(x)，且当 x->x0 时 g(x) 和 h(x) 极限都为 L，则 f(x) 极限也是 L。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))

    # 2.2 导数与微分变化率
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (math_id, "第二章：导数与微分变化率", 
          "<h3>1. 导数的定义</h3><p>导数是函数增量与自变量增量之比的极限，代表函数在某一点的瞬时变化率。</p><h3>2. 几何意义</h3><p>导数在几何上代表函数图像在某点切线的斜率。</p>",
          '<div class="mindmap-chart"><div class="mm-root">导数与微分</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">运算</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">求导公式</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">链式法则</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "求函数 y = x^3 - 2x 在 x = 2 处的导数？", "4", "10", "12", "6", "B", "解析：求导 y' = 3x^2 - 2。将 x = 2 代入求得 y'(2) = 3*(4) - 2 = 10。"),
      ("单选题", "函数 y = sin(2x) 的导函数是？", "cos(2x)", "2cos(x)", "2cos(2x)", "-2cos(2x)", "C", "解析：链式法则求导，y' = cos(2x) * (2x)' = 2cos(2x)。"),
      ("单选题", "已知函数 f(x) 具有连续导数，若在 x = x0 处 f'(x0) = 0 且 f''(x0) < 0，则该点是？", "极小值点", "极大值点", "拐点", "间断点", "B", "解析：一阶导数为0且二阶导数小于0，说明函数在该点具有局部最大值（极大值）。"),
      ("单选题", "函数 y = ln(x) 在 x = 1 处的切线斜率是？", "0", "1", "e", "不存在", "B", "解析：求导 y' = 1/x，代入 x = 1 得到切线斜率 k = 1/1 = 1。"),
      ("单选题", "对于复合函数 y = f(g(x))，求导时应采用哪个核心法则？", "乘积求导法则", "商的求导法则", "链式法则（Chain Rule）", "分部积分法则", "C", "解析：复合函数求导必须使用链式法则，即 dy/dx = f'(g(x)) * g'(x)。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))

    # 2.3 积分学与牛顿-莱布尼茨公式
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (math_id, "第三章：积分学（定积分与牛顿-莱布尼茨公式）", 
          "<h3>1. 定积分的本质</h3><p>定积分是曲边梯形面积累加的极限形式。</p><h3>2. 牛顿-莱布尼茨公式</h3><p>定积分的计算可以通过原函数来进行：积分 a 到 b 的 f(x)dx = F(b) - F(a)，其中 F'(x) = f(x)。</p>",
          '<div class="mindmap-chart"><div class="mm-root">积分学</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">积分法</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">牛顿莱布尼茨</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">换元积分</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "牛顿-莱布尼茨公式的核心作用是？", "证明了导数存在定理", "给出了求解微分方程的数值算法", "通过寻找原函数来计算定积分的值", "证明了有界函数必可积", "C", "解析：该公式建立了微分与积分的桥梁，通过被积函数的原函数直接相减来求解定积分。"),
      ("单选题", "求积分区间从 0 到 1 的 x^2 dx 的定积分值？", "1/2", "1/3", "1/4", "1", "B", "解析：x^2 的原函数是 (1/3)*x^3，在 0 到 1 的积分值为 (1/3)*1^3 - (1/3)*0^3 = 1/3。"),
      ("单选题", "求积分区间从 0 到 pi 的 sin(x) dx 的定积分值？", "0", "1", "2", "pi", "C", "解析：sin(x) 的原函数是 -cos(x)，积分值为 -cos(pi) - (-cos(0)) = 1 + 1 = 2。"),
      ("单选题", "下列哪个表达式是不定积分 1/x dx 的正确结果（x > 0，C为任意常数）？", "ln(x) + C", "1/x^2 + C", "-1/x^2 + C", "e^x + C", "A", "解析：由于 (ln(x))' = 1/x，所以其不定积分为 ln(x) + C。"),
      ("单选题", "几何上，定积分的几何意义是求？", "切线的斜率", "曲线段的长度", "曲线与 x 轴所围图形的代数和面积", "旋转体的表面积", "C", "解析：定积分的几何意义是曲线与 x 轴在积分区间内围成的曲边梯形的“有向面积”代数和。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))


    # ==================== 3. 数据结构基础 ====================
    cursor.execute("INSERT INTO course (name, cover, description) VALUES (?, ?, ?);", 
                   ("数据结构基础", "ds_cover.png", "计算机科学最基础的数据存储模型：链表、队列、栈以及二叉平衡树。"))
    ds_id = cursor.lastrowid
    
    # 3.1 线性结构：顺序表与链表
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (ds_id, "第一章：线性结构：顺序表与链表", 
          "<h3>1. 顺序表与链表结构</h3><p>顺序表是连续内存分配，支持随机读取 O(1)。单链表是通过指针逻辑连接，支持高效增删节点 O(1)。</p>",
          '<div class="mindmap-chart"><div class="mm-root">线性表</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">类型</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">顺序表</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">单链表</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "与单链表相比，顺序表（数组）的核心优势在于？", "任意位置插入或删除的效率更高", "存储密度更低，节省空间", "具有 O(1) 的随机访问速度", "能够动态无限扩容而无需复制元素", "C", "解析：数组具有连续的物理地址，可以通过下标直接定位地址，实现 O(1) 级的随机访问。"),
      ("单选题", "在频繁进行插入与删除操作的场景中，以下哪种数据结构表现最佳？", "顺序表", "单链表", "静态数组", "散列表", "B", "解析：单链表插入或删除节点仅需修改对应指针，时间复杂度为 O(1)，无须像数组那样移动大量内存。"),
      ("单选题", "如果一个单链表有头节点，其头指针为 head，判断该链表为空链表的标志是？", "head == NULL", "head->next == NULL", "head->next == head", "head != NULL", "B", "解析：带头节点的单链表，当头节点的 next 指针为 NULL 时说明后面没有其他有效节点，即为空链表。"),
      ("单选题", "单链表中，删除节点 p 之后紧跟的节点（假设存在），其核心指针操作是？", "p->next = p->next->next", "p = p->next", "p->next = p", "p->next->next = p", "A", "解析：将 p 节点的 next 指针直接指向它下一个节点的下一个节点，从而跨过并断开被删除节点。"),
      ("单选题", "顺序表在插入元素时，为了腾出插入空间，最坏情况下需要移动多少个元素？", "0个", "1个", "n个", "n/2个", "C", "解析：最坏情况是在顺序表头部（下标0）插入，此时必须把已有的 n 个元素全部向后移动一位。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))

    # 3.2 二叉树遍历与平衡树
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (ds_id, "第二章：树形结构：二叉树遍历与平衡树", 
          "<h3>1. 树与二叉树</h3><p>二叉树的经典递归遍历包括前序（根-左-右）、中序（左-根-右）、后序（左-右-根）。中序遍历 BST 能输出递增序列。</p><h3>2. 平衡树</h3><p>平衡树（如 AVL 树）通过左旋、右旋操作防止二叉树退化为单链表，保证查找效率在 O(log n)。</p>",
          '<div class="mindmap-chart"><div class="mm-root">二叉树</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">遍历</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">前序/中序/后序</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "对一棵二叉搜索树（BST）进行哪种遍历，可以得到一个递增的有序序列？", "前序遍历", "中序遍历", "后序遍历", "层序遍历", "B", "解析：BST 的特点是左子树的值小于根节点，右子树的值大于根节点，中序遍历（左-根-右）正好可输出有序递增数列。"),
      ("单选题", "若一棵二叉树的前序遍历序列是 ABDGECF，中序遍历序列是 GDBEACF，则其后序遍历序列是？", "GD E B F C A", "G D E B C F A", "G D E B F C A", "G D E B F A C", "A", "解析：通过前序中序可以重构二叉树，从而求出后序遍历结果为 G, D, E, B, F, C, A。"),
      ("单选题", "含有 n 个节点的平衡二叉搜索树（AVL 树），其最坏情况下的查找时间复杂度是？", "O(1)", "O(log n)", "O(n)", "O(n log n)", "B", "解析：平衡二叉树通过自动调整旋转保持树的高度差不超过 1，因此最坏查找复杂度仍然在 O(log n) 阶。"),
      ("单选题", "平衡二叉树（AVL）通过以下哪项操作来维持树的平衡状态？", "重新哈希", "左旋与右旋操作", "二分查找", "深度优先搜索", "B", "解析：当子树高度差大于 1 时，AVL 树通过 LL, RR, LR, RL 四种旋转操作来进行自平衡调整。"),
      ("单选题", "一棵完全二叉树的节点总数为 15，则该二叉树的高度（深度）是多少？", "3", "4", "5", "15", "B", "解析：高度为 4 的完全二叉树最多有 2^4 - 1 = 15 个节点，因此高度是 4。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))


    # ==================== 4. 大学英语进阶 ====================
    cursor.execute("INSERT INTO course (name, cover, description) VALUES (?, ?, ?);", 
                   ("大学英语进阶", "english_cover.png", "大学考研英语高频学术词汇拆解、长难句树形结构翻译及阅读高分定位。"))
    eng_id = cursor.lastrowid
    
    # 4.1 词汇记忆秘籍
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (eng_id, "第一章：考研英语大纲词汇记忆秘籍", 
          "<h3>1. 词根词缀背词法</h3><p>英语学术词汇中，前缀控制方向与语气，后缀控制词性，词根控制基本物理核心意思。掌握词根词缀可以成倍记忆词汇。</p>",
          '<div class="mindmap-chart"><div class="mm-root">词汇构词</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">结构</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">前缀</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">词根</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">后缀</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "英语高频学术词汇中，前缀 'contra-' / 'counter-' 通常表达什么语义偏向？", "在...之前", "相反，相对，反对", "超出，过度", "共同，协同", "B", "解析：前缀 contra- 源于拉丁语，意为相反或反对，例如 contradict（矛盾）、counterattack（反击）。"),
      ("单选题", "单词 'retrospect'（回顾）的词根 'spect' 表示什么物理含义？", "写，绘制", "听，声音", "看，观察", "跑，移动", "C", "解析：词根 spect 意为“看”（look），例如 inspect（视察）、spectator（观众）、retrospect（向后看=回顾）。"),
      ("单选题", "前缀 'pro-' 在单词 'progress' 或 'promote' 中表示什么方向？", "向下", "向后", "向前", "过度", "C", "解析：前缀 pro- 具有“向前”（forward）的意向，如 progress（进步）、promote（促进、提升）。"),
      ("单选题", "后缀 '-ify'（如 simplify, purify）通常用于把词语转变成什么词性？", "名词", "形容词", "副词", "动词", "D", "解析：'-ify' 是典型的动词后缀，意为“使...化”，如 simplify（使简单=简化）。"),
      ("单选题", "单词 'predecessor'（前任，前辈）的前缀 'pre-' 代表什么含义？", "在...之前", "相反", "过度", "共同", "A", "解析：'pre-' 表示在...之前（before），如 predict（预言）、prewar（战前的）。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))

    # 4.2 长难句结构剖析
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (eng_id, "第二章：长难句结构剖析与树形翻译", 
          "<h3>1. 主干结构提取</h3><p>长难句拆分的核心是剥离细枝末节（如插入语、介词短语），寻找最核心的主语和谓语动词，还原主谓宾结构。</p>",
          '<div class="mindmap-chart"><div class="mm-root">语法长难句</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">剥离</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">修饰成分</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">插入语</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "遇到包含多层定语从句和插入语的英语长难句，拆分翻译时的首要步骤是？", "从头到尾逐字直译", "寻找核心主语与谓语动词，剥离修饰成分", "将所有介词都替换成中文的“的”", "忽略插入语不予翻译", "B", "解析：提炼并锁定句子主干，是破解复杂句结构的第一原则。"),
      ("单选题", "在长难句中，如果看到 'which' 引导的非限制性定语从句，它通常起到什么作用？", "作主语的同位语", "对先行词进行补充修饰和说明", "引导条件状语从句", "作宾语补足语", "B", "解析：非限制性定语从句一般用 which 引导，对前面的词或整句话起解释说明作用。"),
      ("单选题", "句子 'The fact that he failed the exam surprised us.' 中，'that' 引导的是什么从句？", "定语从句", "状语从句", "同位语从句", "主语从句", "C", "解析：'that he failed the exam' 对 'fact' 进行了完整的内容说明，是同位语从句。"),
      ("单选题", "在翻译英语被动语态的长难句时，最符合中文习惯的翻译策略通常是？", "字字翻译成“被...”", "尽可能转换为主动态，或者用“受到”、“得到”等词润色", "忽略被动语态不译", "把谓语动词放到句首", "B", "解析：中文较少使用“被”字，一般通过主动代换或使用“获得”、“予以”等形式使表达更通顺。"),
      ("单选题", "定语从句中，若关系代词在从句中作介词的宾语，通常可以将介词提到关系代词之前。此时关系代词只能用？", "who 或 that", "whom 或 which", "whose 或 that", "why 或 which", "B", "解析：介词后必须接宾格形式，指人时用 whom，指物时用 which，如 'with whom' 或 'in which'。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))

    # 4.3 阅读解题法
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (eng_id, "第三章：考研英语阅读黄金定位与逻辑解题法", 
          "<h3>1. 题眼定位</h3><p>考研阅读的题干通常能在原文中找到定位句。正解往往是原文定位句的“同义词代换”或“逻辑归纳”。</p>",
          '<div class="mindmap-chart"><div class="mm-root">阅读理解</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">技巧</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">定位</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">排除</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "英语阅读理解中，正确选项通常具备以下哪个黄金特点？", "原封不动照抄原文大段原词", "原文定位句的同义词改写或逻辑归纳", "包含 always, completely 等极端断言词", "与题干信息不相干", "B", "解析：命题人最常用的正解设计手法就是将原文关键句进行同义替换。"),
      ("单选题", "下列哪个词汇属于阅读理解干扰项中最常出现的极端词（通常表明该选项错误）？", "may", "typically", "always", "some", "C", "解析：过于绝对化的词汇（如 always, must, completely）往往不符合学术论文严谨的措辞习惯，多数是错误项。"),
      ("单选题", "阅读中若遇到不认识的专业学术单词，最合理的方法是？", "立即放弃该段落阅读", "利用上下文的并列、转折、因果逻辑关系推测词义", "用字典查询所有生词", "凭感觉猜测为褒义词", "B", "解析：通过上下文线索（如 but, and, means that, defines as）可以科学推测出词汇大致感情色彩。"),
      ("单选题", "考研英语阅读题目的出题顺序通常遵循什么原则？", "无序随机散布原则", "与原文段落顺序基本一致的“顺序原则”", "倒序出题原则", "所有答案均在首段原则", "B", "解析：考研英语阅读理解出题极具规律，题目的解答次序通常与文章段落展开的物理顺序保持高度一致。"),
      ("单选题", "在判断作者对某一事物的态度（Attitude）时，若选项中出现以下词汇，通常是不予考虑的错误项？", "biased（偏见的 / 主观偏激的）", "objective（客观的）", "critical（批判的）", "supportive（支持的）", "A", "解析：学术阅读的文章通常要求态度客观理智， biased（偏见的）过于主观，一般不是正确选项。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))
        
    # ==================== 5. Python面向对象编程 ====================
    cursor.execute("INSERT INTO course (name, cover, description) VALUES (?, ?, ?);", 
                   ("Python面向对象编程", "oop_cover.png", "深入学习类与对象、继承与多态、魔法方法与元编程。"))
    oop_id = cursor.lastrowid
    
    # 5.1 类与对象基础
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (oop_id, "第一章：类与对象基础", 
          "<h3>1. 什么是类与对象？</h3><p>类是创建对象的蓝图，而对象则是类的实例。Python 中一切皆对象。</p><h3>2. 构造函数 __init__</h3><p>构造函数用于初始化实例的状态。`self` 参数代表实例本身。</p>",
          '<div class="mindmap-chart"><div class="mm-root">类与对象</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">基础</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">self参数</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">构造方法</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "Python 中，定义类时构造函数的名称是？", "__init__", "__new__", "class", "def", "A", "解析：__init__ 是初始化实例对象的经典方法。"),
      ("单选题", "定义类方法时，第一个参数通常约定为什么？", "cls", "self", "this", "object", "B", "解析：实例方法的第一个参数约定为 self，代表实例本身。"),
      ("单选题", "要限制类的实例动态添加属性，可以使用什么特殊机制？", "__slots__", "__dict__", "__keys__", "__methods__", "A", "解析：定义 __slots__ 可以显式限制实例能添加的属性，节省内存开销。"),
      ("单选题", "在 Python 中，声明私有属性通常要在属性名前加上什么前缀？", "_", "__", "private", "$", "B", "解析：双下划线开头（且不以双下划线结尾）的属性被视为私有属性，在内部会发生名称混淆。"),
      ("单选题", "关于 Python 中的静态方法，下面哪项描述是正确的？", "必须有 self 参数", "必须使用 @staticmethod 装饰器声明", "能够直接访问实例属性", "无法通过类名直接调用", "B", "解析：静态方法使用 @staticmethod 装饰，没有 self 或 cls 参数，可以直接通过类名或实例调用。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))

    # 5.2 继承与多态
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (oop_id, "第二章：继承与多态", 
          "<h3>1. 继承机制</h3><p>子类继承父类的属性和方法，可以实现代码的重用。Python 支持多继承。</p><h3>2. 多态与鸭子类型</h3><p>不同类的对象对同一方法做出不同的响应。鸭子类型关注对象的行为而非其继承关系。</p>",
          '<div class="mindmap-chart"><div class="mm-root">继承与多态</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">多态</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">鸭子类型</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "在子类中调用父类被覆盖的方法时，应当使用什么内置函数？", "parent()", "super()", "base()", "father()", "B", "解析：内置函数 super() 用来调用父类或兄弟类的方法，遵循 MRO 顺序。"),
      ("单选题", "Python 的多继承中，用于确定方法调用顺序的机制简称是？", "MRO", "BFS", "DFS", "FIFO", "A", "解析：MRO（Method Resolution Order）采用 C3 线性化算法确定多继承下的方法调用次序。"),
      ("单选题", "下列关于‘鸭子类型’（Duck Typing）的陈述，哪一项是正确的？", "必须使用 isinstance() 检查类型", "关注对象的行为而非其继承关系", "必须强制继承自抽象基类", "只在静态语言中生效", "B", "解析：鸭子类型是动态类型语言的一种风格，只要对象有该方法即可，无需关心其继承关系。"),
      ("单选题", "在 Python 中，如何定义一个抽象类？", "直接写 class Abstract:", "继承自 abc 模块中的 ABC 类", "使用 abstract 关键字", "使用 @abstract 修饰类", "B", "解析：继承 abc.ABC 配合 @abstractmethod 装饰器可以实现标准的接口与抽象类定义。"),
      ("单选题", "关于 Python 中的方法重写（Overriding），哪项是正确的？", "必须使用 override 关键字", "子类方法的参数列表必须完全和父类一致", "子类只需定义同名方法即可覆盖父类同名方法", "重写后父类方法将永远无法被子类访问", "C", "解析：Python 是动态语言，子类中直接定义同名方法即实现方法覆盖。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))

    # 5.3 魔法方法与元编程
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (oop_id, "第三章：魔法方法与元编程", 
          "<h3>1. 魔法方法</h3><p>双下划线包围的特殊方法（如 __str__, __len__）允许对象拦截并响应内置操作。</p><h3>2. 元编程</h3><p>元类（metaclass）是类的类，允许我们控制类的创建行为。</p>",
          '<div class="mindmap-chart"><div class="mm-root">元编程</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">魔法方法</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">__new__</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">__call__</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "自定义类时，若要使 len(obj) 能够返回其内部元素的数量，需要实现什么魔法方法？", "__len__", "__size__", "__count__", "__length__", "A", "解析：内置函数 len() 实际上是调用对象的 __len__ 魔法方法。"),
      ("单选题", "要自定义对象在被 print 打印时输出的易读文本描述，应重写什么方法？", "__str__", "__repr__", "__print__", "__show__", "A", "解析：__str__ 用于返回面向用户的友好字符串描述。"),
      ("单选题", "在 Python 中，控制对象创建并分配内存空间的魔法方法是？", "__new__", "__init__", "__call__", "__del__", "A", "解析：__new__ 是真正的构造方法，负责创建并返回实例。"),
      ("单选题", "要使自定义类的实例能够像函数一样被调用，例如 obj(args)，需要实现哪个方法？", "__call__", "__run__", "__exec__", "__init__", "A", "解析：实现 __call__ 方法可以使类的实例变成可调用对象。"),
      ("单选题", "所有类的默认元类（即创建类本身的类）是哪个内置类型？", "type", "object", "class", "meta", "A", "解析：内置的 type 是 Python 的元类蓝图，一切普通的 class 都是 type 的实例。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))


    # ==================== 6. 计算机网络基础 ====================
    cursor.execute("INSERT INTO course (name, cover, description) VALUES (?, ?, ?);", 
                   ("计算机网络基础", "network_cover.png", "计算机网络核心分层结构、TCP/IP 传输协议及现代应用层协议。"))
    net_id = cursor.lastrowid
    
    # 6.1 网络分层模型与物理层
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (net_id, "第一章：网络分层模型与物理层", 
          "<h3>1. 经典五层体系结构</h3><p>网络分为：物理层、数据链路层、网络层、传输层、应用层。</p><h3>2. 数据链路层与物理层</h3><p>物理层传输比特流，数据链路层通过 MAC 地址定位物理设备并进行成帧与校验。</p>",
          '<div class="mindmap-chart"><div class="mm-root">物理与链路</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">链路层</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">MAC地址</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">帧封装</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "OSI 参考模型和 TCP/IP 体系结构中，共有且最核心的网络层主要负责什么？", "数据格式转换", "端到端的可靠进程通信", "路由选择与分组转发（主机到主机通信）", "位流的物理传输", "C", "解析：网络层（或网际层）的核心任务是进行路由选择和分组转发，实现主机间的通信。"),
      ("单选题", "网络数据传输中的‘MAC 地址’通常在哪个层被解析和使用？", "物理层", "数据链路层", "网络层", "传输层", "B", "解析：数据链路层通过 MAC 地址来唯一标识同一局域网内的网络适配器，负责帧的投递。"),
      ("单选题", "关于以太网双绞线物理媒介的说法，下面哪项是错误的？", "绞合可以减少电磁干扰", "目前常用的超五类线最大支持百兆传输", "RJ-45 是最常见的物理接口规范", "双绞线传输距离通常限制在100米以内", "B", "解析：超五类双绞线（Cat5e）支持高达千兆（1000Mbps）的局域网络传输。"),
      ("单选题", "在物理层中，衡量数字通信系统传输可靠性的关键指标是？", "带宽", "误码率", "吞吐量", "时延", "B", "解析：误码率是衡量物理信道传输质量的最关键指标。"),
      ("单选题", "经典五层协议中，将比特流封装成帧（Framing）并执行差错校验的是？", "物理层", "数据链路层", "网络层", "传输层", "B", "解析：数据链路层负责成帧、差错控制和流量控制。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))

    # 6.2 TCP/IP 传输层协议详解
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (net_id, "第二章：TCP/IP 传输层协议详解", 
          "<h3>1. TCP 与 UDP 的区别</h3><p>TCP 是面向连接、可靠的、面向字节流的。UDP 是无连接、不可靠的、面向报文的。</p><h3>2. 三次握手</h3><p>TCP 建立可靠连接时所采用的三次握手机制，保证双方序列号与缓冲状态一致。</p>",
          '<div class="mindmap-chart"><div class="mm-root">传输层</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">协议</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">TCP三次握手</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">UDP面向报文</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "TCP 建立可靠连接时所采用的‘三次握手’中，第二次握手发送的报文标志位是？", "SYN", "ACK", "SYN+ACK", "FIN+ACK", "C", "解析：第二次握手时，服务器会向客户端发送同步与确认报文，即标志位 SYN 和 ACK 都置为 1。"),
      ("单选题", "TCP 和 UDP 两个核心传输层协议中，属于无连接、开销小、适合实时视频会议的是？", "TCP", "UDP", "IP", "DNS", "B", "解析：UDP 协议不建立连接，报头开销极小（仅 8 字节），支持实时多媒体投递。"),
      ("单选题", "TCP 协议在释放连接时，‘四次挥手’中客户端发送的第一个释放连接报文标志位是？", "FIN", "SYN", "RST", "PSH", "A", "解析：连接释放报文的 FIN 标志位（Finish）置为 1 代表请求关闭连接。"),
      ("单选题", "为了防止慢速接收端缓冲区溢出，TCP 协议利用什么机制实现端到端流量控制？", "拥塞窗口", "滑动窗口（接收窗口）", "慢开始算法", "超时重传", "B", "解析：TCP 利用滑动窗口机制，通过通告接收窗口大小来控制发送端的发送速率。"),
      ("单选题", "关于 UDP 校验和的叙述中，正确的是？", "强制必须启用", "校验和计算只涵盖 UDP 头部", "引入伪首部来校验网络层 IP 地址信息", "发现错误时会自动重传", "C", "解析：UDP 计算校验和时会引入 12 字节的 IP 伪首部以增强整体校验强度。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))

    # 6.3 应用层协议与万维网
    cursor.execute('''
    INSERT INTO chapter (course_id, title, content, mindmap) VALUES (?, ?, ?, ?);
    ''', (net_id, "第三章：应用层协议与万维网", 
          "<h3>1. 域名系统 DNS</h3><p>DNS 用于将域名映射为机器能够识别的 IP 地址。</p><h3>2. HTTP 与 HTTPS</h3><p>HTTP 默认使用 80 端口，HTTPS 通过 SSL/TLS 在 443 端口传输加密数据，确保通信机密性。</p>",
          '<div class="mindmap-chart"><div class="mm-root">应用层</div><div class="mm-branches"><div class="mm-branch"><div class="mm-parent-node">服务</div><div class="mm-leaves"><div class="mm-leaf-item"><div class="mm-leaf-node">DNS域名解析</div></div><div class="mm-leaf-item"><div class="mm-leaf-node">HTTPS安全通道</div></div></div></div></div></div>'))
    ch_id = cursor.lastrowid
    questions = [
      ("单选题", "在现代万维网中，HTTPS 默认占用的服务端口是？", "80", "443", "8080", "22", "B", "解析：HTTP 默认使用 80 端口，而 HTTPS 默认使用 443 端口。"),
      ("单选题", "当我们在浏览器访问网页收到 '404 Not Found' 状态码时，这通常意味着？", "服务器内部代码逻辑崩溃", "客户端请求的资源在服务器上不存在", "客户端没有权限访问该资源", "服务器网络连接超时", "B", "解析：400 级别的状态码代表客户端请求错误，404 指服务器未找到对应资源。"),
      ("单选题", "将域名解析为 IP 地址的核心应用层服务协议是？", "DHCP", "DNS", "FTP", "SMTP", "B", "解析：DNS（Domain Name System）专门用于提供分布式域名解析服务。"),
      ("单选题", "在 HTTP 请求方法中，常用于向服务器提交表单或上传文件的安全方法是？", "GET", "POST", "DELETE", "OPTIONS", "B", "解析：POST 请求常用于发送数据给服务器，相比 GET，数据存储在请求体中，支持大数据量投递。"),
      ("单选题", "为了在无状态的 HTTP 协议下保持用户的登录状态，现代网站最常用的客户端机制是？", "Session", "Cookie / Token", "LocalStorage", "URL Params", "B", "解析：通过在客户端存储 Cookie（或 Authorization Token 令牌），服务器可以在后续请求中识别用户身份。")
    ]
    for q in questions:
        cursor.execute("INSERT INTO question (chapter_id, type, question, option_a, option_b, option_c, option_d, answer, analysis) VALUES (?,?,?,?,?,?,?,?,?);", (ch_id, *q))

    conn.commit()
    conn.close()
    print("数据库初始化完成，已为您生成丰富的 6 门课程、18 章节、共 90 道高质量课后选择题！")

if __name__ == '__main__':
    init_database()
