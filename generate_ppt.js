const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.author = 'Lingxi Team';
pres.title = '灵析Lingxi AI - 智能个性化学习辅助系统产品演示';

// ============================================================
// SLIDE DIMENSIONS
// ============================================================
pres.layout = 'LAYOUT_16x9';
const SLIDE_W = 10;
const SLIDE_H = 5.625;
const MARGIN = 0.5;
const CX = MARGIN;
const CY = MARGIN;
const CW = SLIDE_W - 2 * MARGIN;
const CH = SLIDE_H - 2 * MARGIN;
const CENTER_X = SLIDE_W / 2;
const CENTER_Y = SLIDE_H / 2;

// ============================================================
// COLOR PALETTE - Anthropic Brand Light Theme (NO dark backgrounds)
// ============================================================
const C = {
  // Anthropic brand colors
  dark: '141413',        // Primary text
  light: 'FAF9F5',       // Light backgrounds (MAIN bg)
  midGray: 'B0AEA5',     // Secondary elements
  lightGray: 'E8E6DC',   // Subtle backgrounds
  // Accent colors
  orange: 'D97757',      // Primary accent
  blue: '6A9BCC',        // Secondary accent
  green: '788C5D',       // Tertiary accent
  // Extended palette for variety (still light-toned)
  lavender: '9B8EC4',    // Soft purple
  peach: 'E8A87C',       // Warm peach
  mint: '7BC8A4',        // Soft mint
  sky: '89CFF0',         // Light sky blue
  rose: 'C9918A',        // Soft rose
  white: 'FFFFFF',
  cardBg: 'FFFFFF',
  textMuted: '6B6966',   // Muted text for descriptions
};

// Heading font: Arial (Poppins fallback not guaranteed)
const HFONT = 'Arial';
// Body font: Georgia (Lora fallback)
const BFONT = 'Georgia';

const ASSETS = 'ppt_assets/';

// ============================================================
// CONTAINER SYSTEM
// ============================================================
function parseImageDimensions(path) {
  const match = path.match(/_(\d+)x(\d+)\.(png|jpg|jpeg|gif|webp)$/i);
  if (match) return { width: parseInt(match[1]), height: parseInt(match[2]) };
  return null;
}
function calculateScaledImageOpts(opts) {
  const { path, w: targetW, h: targetH, x = 0, y = 0, ...rest } = opts;
  if (!path || !targetW || !targetH) return opts;
  const dims = parseImageDimensions(path);
  if (!dims) return opts;
  const imgAspect = dims.width / dims.height;
  const targetAspect = targetW / targetH;
  let scaledW, scaledH, offsetX = 0, offsetY = 0;
  if (imgAspect > targetAspect) { scaledW = targetW; scaledH = targetW / imgAspect; offsetY = (targetH - scaledH) / 2; }
  else { scaledH = targetH; scaledW = targetH * imgAspect; offsetX = (targetW - scaledW) / 2; }
  return { path, x: x + offsetX, y: y + offsetY, w: scaledW, h: scaledH, ...rest };
}
function createVirtualNode(type, data, parentX = 0, parentY = 0) {
  const opts = data.opts || {};
  const node = { type, data, absX: parentX + (opts.x || 0), absY: parentY + (opts.y || 0), w: opts.w || 0, h: opts.h || 0, children: [] };
  node.addShape = function(shapeType, opts = {}) { const child = createVirtualNode('shape', { shapeType, opts }, node.absX, node.absY); node.children.push(child); return child; };
  node.addText = function(text, opts = {}) { const safeOpts = { fit: "shrink", ...opts }; const bulletRe = /^(?:[\u2022\u2023\u25E6\u2043\u2219\u00B7\u25CF\u25CB\u2013\u2014]\s*|\-\s+)/; if (Array.isArray(text)) { text = text.map(item => { if (item && item.options && item.options.bullet && typeof item.text === 'string') { return { ...item, text: item.text.replace(bulletRe, '') }; } return item; }); } const child = createVirtualNode('text', { text, opts: safeOpts }, node.absX, node.absY); node.children.push(child); return child; };
  node.addImage = function(opts = {}) { const scaledOpts = calculateScaledImageOpts(opts); const child = createVirtualNode('image', { opts: scaledOpts }, node.absX, node.absY); node.children.push(child); return child; };
  node.addTable = function(tableData, opts = {}) { const child = createVirtualNode('table', { tableData, opts }, node.absX, node.absY); node.children.push(child); return child; };
  return node;
}
function flattenNode(node, realSlide, pres) {
  const absOpts = { ...node.data.opts, x: node.absX, y: node.absY };
  if (node.type === 'shape') realSlide.addShape(node.data.shapeType, absOpts);
  else if (node.type === 'text') realSlide.addText(node.data.text, absOpts);
  else if (node.type === 'image') realSlide.addImage(absOpts);
  else if (node.type === 'table') realSlide.addTable(node.data.tableData, absOpts);
  node.children.forEach(child => flattenNode(child, realSlide, pres));
}
const originalAddSlide = pres.addSlide.bind(pres);
pres.addSlide = function(options) {
  const realSlide = originalAddSlide(options);
  const virtualSlide = {
    children: [], _realSlide: realSlide,
    set background(val) { realSlide.background = val; },
    get background() { return realSlide.background; },
    addShape: function(shapeType, opts = {}) { const node = createVirtualNode('shape', { shapeType, opts }, 0, 0); this.children.push(node); return node; },
    addText: function(text, opts = {}) { const safeOpts = { fit: "shrink", ...opts }; const node = createVirtualNode('text', { text, opts: safeOpts }, 0, 0); this.children.push(node); return node; },
    addImage: function(opts = {}) { const scaledOpts = calculateScaledImageOpts(opts); const node = createVirtualNode('image', { opts: scaledOpts }, 0, 0); this.children.push(node); return node; },
    addTable: function(tableData, opts = {}) { const node = createVirtualNode('table', { tableData, opts }, 0, 0); this.children.push(node); return node; },
    addChart: function(chartType, data, opts = {}) { realSlide.addChart(chartType, data, opts); },
    render: function() { this.children.forEach(child => flattenNode(child, realSlide, pres)); }
  };
  return virtualSlide;
};

// ============================================================
// HELPERS
// ============================================================
function addTopBar(slide, color) {
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: SLIDE_W, h: 0.06, fill: { color } });
}
function addSlideNum(slide, num) {
  slide.addText(`${num}/25`, { x: SLIDE_W - 1.2, y: SLIDE_H - 0.38, w: 0.8, h: 0.25, fontSize: 7, color: C.midGray, align: 'right', fontFace: BFONT });
}
function addSectionBadge(slide, text, x, y, color) {
  let badge = slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 2.0, h: 0.32, fill: { color }, rectRadius: 0.08 });
  badge.addText(text, { x: 0, y: 0, w: 2.0, h: 0.32, fontSize: 9, color: C.white, align: 'center', bold: true, fontFace: HFONT });
}
function addCard(slide, x, y, w, h, borderColor) {
  return slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: C.cardBg }, line: { color: borderColor || C.lightGray, width: 1 }, rectRadius: 0.12, shadow: { type: 'outer', blur: 6, offset: 2, color: '000000', opacity: 0.08 } });
}
function addIconCircle(slide, x, y, r, color, text) {
  let circle = slide.addShape(pres.shapes.OVAL, { x, y, w: r, h: r, fill: { color } });
  circle.addText(text, { x: 0, y: 0, w: r, h: r, fontSize: 13, color: C.white, align: 'center', valign: 'middle', bold: true, fontFace: HFONT });
}
function addAccentLine(slide, y, color) {
  slide.addShape(pres.shapes.RECTANGLE, { x: CX, y, w: 1.5, h: 0.025, fill: { color } });
}

// ============================================================
// SLIDE 1: COVER (Light)
// ============================================================
let s1 = pres.addSlide();
s1.background = { color: C.light };
// Top accent bar
addTopBar(s1, C.orange);
// Left accent bar
s1.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 1.0, w: 0.05, h: 3.2, fill: { color: C.orange } });
// Title
s1.addText('灵析', { x: 1.2, y: 1.0, w: 7, h: 1.0, fontSize: 48, color: C.dark, bold: true, fontFace: HFONT, charSpacing: 5 });
s1.addText('Lingxi AI', { x: 1.2, y: 1.8, w: 7, h: 0.55, fontSize: 22, color: C.blue, fontFace: HFONT, charSpacing: 3 });
s1.addText('智能个性化学习辅助系统', { x: 1.2, y: 2.35, w: 7, h: 0.45, fontSize: 16, color: C.textMuted, fontFace: BFONT });
// Subtitle line
s1.addShape(pres.shapes.RECTANGLE, { x: 1.2, y: 2.95, w: 2.5, h: 0.025, fill: { color: C.orange } });
s1.addText('多智能体协同  |  前沿AI技术融合  |  全场景学习赋能', { x: 1.2, y: 3.15, w: 7, h: 0.35, fontSize: 11, color: C.midGray, fontFace: BFONT });
// Version badge
let vBadge = s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 1.2, y: 3.7, w: 1.8, h: 0.32, fill: { color: C.green }, rectRadius: 0.08 });
vBadge.addText('v3.1 安全加固版', { x: 0, y: 0, w: 1.8, h: 0.32, fontSize: 9, color: C.white, align: 'center', bold: true, fontFace: HFONT });
// Tech badges
['Python/Flask', 'SQLite3', '原生JS', 'WebSocket', 'Vercel'].forEach((b, i) => {
  let bx = 1.2 + i * 1.6;
  let bg = s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: bx, y: 4.2, w: 1.35, h: 0.28, fill: { color: C.lightGray }, line: { color: C.midGray, width: 0.5 }, rectRadius: 0.06 });
  bg.addText(b, { x: 0, y: 0, w: 1.35, h: 0.28, fontSize: 8, color: C.textMuted, align: 'center', fontFace: BFONT });
});
// Bottom accent
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: SLIDE_H - 0.04, w: SLIDE_W, h: 0.04, fill: { color: C.blue } });
s1.render();

// ============================================================
// SLIDE 2: TABLE OF CONTENTS
// ============================================================
let s2 = pres.addSlide();
s2.background = { color: C.light };
addTopBar(s2, C.orange);
s2.addText('目录  CONTENTS', { x: CX, y: 0.25, w: 4, h: 0.55, fontSize: 26, color: C.dark, bold: true, fontFace: HFONT, charSpacing: 1 });
addAccentLine(s2, 0.85, C.orange);

const tocItems = [
  { num: '01', title: '项目概述', desc: '产品定位与核心价值', color: C.blue },
  { num: '02', title: '系统架构', desc: '技术栈与整体设计', color: C.lavender },
  { num: '03', title: 'AI技术融合', desc: '多模型协同与创新应用', color: C.orange },
  { num: '04', title: '核心功能', desc: '八大功能模块详解', color: C.green },
  { num: '05', title: '产品展示', desc: '界面截图与交互体验', color: C.sky },
  { num: '06', title: '安全与工程', desc: '安全机制与工程质量', color: C.rose },
];
tocItems.forEach((item, i) => {
  let row = i < 3 ? 0 : 1;
  let col = i % 3;
  let x = CX + col * 3.1;
  let y = 1.15 + row * 2.1;
  let card = addCard(s2, x, y, 2.8, 1.7, C.lightGray);
  addIconCircle(card, 0.12, 0.12, 0.42, item.color, item.num);
  card.addText(item.title, { x: 0.62, y: 0.12, w: 2.0, h: 0.35, fontSize: 15, color: C.dark, bold: true, fontFace: HFONT });
  card.addText(item.desc, { x: 0.62, y: 0.48, w: 2.0, h: 0.25, fontSize: 9, color: C.textMuted, fontFace: BFONT });
  // Bottom colored bar
  card.addShape(pres.shapes.RECTANGLE, { x: 0, y: 1.3, w: 2.8, h: 0.4, fill: { color: item.color } });
  card.addText(`Part ${item.num}`, { x: 0, y: 1.3, w: 2.8, h: 0.4, fontSize: 9, color: C.white, align: 'center', bold: true, fontFace: HFONT });
});
addSlideNum(s2, 2);
s2.render();

// ============================================================
// SLIDE 3: SECTION 01 - LIGHT divider
// ============================================================
let s3 = pres.addSlide();
s3.background = { color: C.lightGray };
// Large number
s3.addText('01', { x: 1.0, y: 0.8, w: 3, h: 1.8, fontSize: 80, color: C.blue, bold: true, fontFace: HFONT, transparency: 15 });
s3.addText('项目概述', { x: 1.0, y: 2.3, w: 5, h: 0.8, fontSize: 36, color: C.dark, bold: true, fontFace: HFONT, charSpacing: 4 });
s3.addText('PROJECT OVERVIEW', { x: 1.0, y: 3.0, w: 5, h: 0.45, fontSize: 13, color: C.blue, fontFace: HFONT });
s3.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: 3.55, w: 2.5, h: 0.025, fill: { color: C.orange } });
s3.addText('产品定位 · 核心价值 · 目标用户 · 创新亮点', { x: 1.0, y: 3.75, w: 6, h: 0.35, fontSize: 11, color: C.textMuted, fontFace: BFONT });
// Decorative shapes on right
s3.addShape(pres.shapes.OVAL, { x: 7.5, y: 1.0, w: 2.0, h: 2.0, fill: { color: C.blue }, transparency: 88 });
s3.addShape(pres.shapes.OVAL, { x: 8.2, y: 2.5, w: 1.5, h: 1.5, fill: { color: C.orange }, transparency: 88 });
s3.render();

// ============================================================
// SLIDE 4: PRODUCT POSITIONING
// ============================================================
let s4 = pres.addSlide();
s4.background = { color: C.light };
addTopBar(s4, C.blue);
s4.addText('产品定位与核心价值', { x: CX, y: 0.25, w: 6, h: 0.55, fontSize: 24, color: C.dark, bold: true, fontFace: HFONT });
addAccentLine(s4, 0.85, C.blue);
addSlideNum(s4, 4);

// Left card
let posCard = addCard(s4, CX, 1.1, 4.2, 3.9, C.lightGray);
posCard.addText('产品定位', { x: 0.2, y: 0.15, w: 3.8, h: 0.35, fontSize: 15, color: C.blue, bold: true, fontFace: HFONT });
posCard.addText('基于科大讯飞星火大模型与多模态视觉理解技术构建的高颜值、全功能、智能个性化学习辅助平台', { x: 0.2, y: 0.55, w: 3.8, h: 0.7, fontSize: 10.5, color: C.textMuted, fontFace: BFONT, autoFit: false, lineSpacing: 20 });

posCard.addText('核心价值', { x: 0.2, y: 1.4, w: 3.8, h: 0.35, fontSize: 15, color: C.orange, bold: true, fontFace: HFONT });

const values = [
  { text: '多智能体协同：三Agent流水线自动生成学习方案', color: C.blue },
  { text: '三模型解题群：讯飞星火+混元Turbo+Qwen3并发对比', color: C.lavender },
  { text: '个性化画像：六维雷达图精准分析学习能力', color: C.orange },
  { text: '全栈自主开发：前后端+AI集成一站式实现', color: C.green },
];
values.forEach((v, i) => {
  posCard.addShape(pres.shapes.RECTANGLE, { x: 0.2, y: 1.85 + i * 0.5, w: 0.06, h: 0.38, fill: { color: v.color } });
  posCard.addText(v.text, { x: 0.4, y: 1.85 + i * 0.5, w: 3.6, h: 0.38, fontSize: 9.5, color: C.dark, fontFace: BFONT });
});

// Right metrics
const metrics = [
  { num: '3+', label: 'AI大模型', color: C.blue },
  { num: '59', label: 'API端点', color: C.orange },
  { num: '20K+', label: '前端代码行', color: C.lavender },
  { num: '6', label: '课程学科', color: C.green },
  { num: '90', label: '预置习题', color: C.sky },
  { num: '8', label: '安全机制', color: C.rose },
];
metrics.forEach((m, i) => {
  let row = Math.floor(i / 2);
  let col = i % 2;
  let x = 5.0 + col * 2.4;
  let y = 1.1 + row * 1.3;
  let mCard = addCard(s4, x, y, 2.1, 0.95, C.lightGray);
  mCard.addText(m.num, { x: 0.1, y: 0.05, w: 1.9, h: 0.5, fontSize: 28, color: m.color, bold: true, align: 'center', fontFace: HFONT });
  mCard.addText(m.label, { x: 0.1, y: 0.55, w: 1.9, h: 0.3, fontSize: 10, color: C.textMuted, align: 'center', fontFace: BFONT });
});
s4.render();

// ============================================================
// SLIDE 5: TARGET USERS & INNOVATION
// ============================================================
let s5 = pres.addSlide();
s5.background = { color: C.light };
addTopBar(s5, C.blue);
s5.addText('目标用户与创新价值', { x: CX, y: 0.25, w: 6, h: 0.55, fontSize: 24, color: C.dark, bold: true, fontFace: HFONT });
addAccentLine(s5, 0.85, C.blue);
addSlideNum(s5, 5);

addSectionBadge(s5, '目标用户', CX, 1.1, C.blue);
const users = [
  { icon: 'U', title: '高校学生', desc: '理工科课程学习\n课后复习巩固', color: C.blue },
  { icon: 'S', title: '自学者', desc: '编程入门、算法学习\nAI辅助答疑', color: C.lavender },
  { icon: 'D', title: '开发者', desc: '代码纠错、文档诊断\n在线编程练习', color: C.orange },
];
users.forEach((u, i) => {
  let x = CX + i * 3.1;
  let card = addCard(s5, x, 1.55, 2.8, 1.35, C.lightGray);
  addIconCircle(card, 0.12, 0.12, 0.45, u.color, u.icon);
  card.addText(u.title, { x: 0.7, y: 0.15, w: 1.8, h: 0.3, fontSize: 13, color: C.dark, bold: true, fontFace: HFONT });
  card.addText(u.desc, { x: 0.12, y: 0.65, w: 2.5, h: 0.6, fontSize: 9, color: C.textMuted, fontFace: BFONT });
});

addSectionBadge(s5, '创新价值', CX, 3.1, C.orange);
const innovations = [
  { num: '01', title: '多智能体协同学习', desc: '首创三Agent流水线，自动生成完整学习方案', color: C.blue },
  { num: '02', title: '三模型并发解题', desc: '星火/混元Turbo/Qwen3同时答题，多角度对比', color: C.lavender },
  { num: '03', title: '六维能力画像', desc: '雷达图精准定位学习薄弱点', color: C.orange },
  { num: '04', title: '全栈AI原生开发', desc: '20K行前端+5K行后端，零第三方AI平台依赖', color: C.green },
];
innovations.forEach((item, i) => {
  let row = Math.floor(i / 2);
  let col = i % 2;
  let x = CX + col * 4.6;
  let y = 3.55 + row * 0.9;
  let iCard = addCard(s5, x, y, 4.3, 0.72, C.lightGray);
  let numBadge = iCard.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.1, y: 0.12, w: 0.42, h: 0.42, fill: { color: item.color }, rectRadius: 0.05 });
  numBadge.addText(item.num, { x: 0, y: 0, w: 0.42, h: 0.42, fontSize: 10, color: C.white, align: 'center', bold: true, fontFace: HFONT });
  iCard.addText(item.title, { x: 0.62, y: 0.05, w: 3.5, h: 0.28, fontSize: 11, color: C.dark, bold: true, fontFace: HFONT });
  iCard.addText(item.desc, { x: 0.62, y: 0.35, w: 3.5, h: 0.28, fontSize: 8.5, color: C.textMuted, fontFace: BFONT });
});
s5.render();

// ============================================================
// SLIDE 6: SECTION 02 - LIGHT divider
// ============================================================
let s6 = pres.addSlide();
s6.background = { color: C.lightGray };
s6.addText('02', { x: 1.0, y: 0.8, w: 3, h: 1.8, fontSize: 80, color: C.lavender, bold: true, fontFace: HFONT, transparency: 15 });
s6.addText('系统架构', { x: 1.0, y: 2.3, w: 5, h: 0.8, fontSize: 36, color: C.dark, bold: true, fontFace: HFONT, charSpacing: 4 });
s6.addText('SYSTEM ARCHITECTURE', { x: 1.0, y: 3.0, w: 5, h: 0.45, fontSize: 13, color: C.lavender, fontFace: HFONT });
s6.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: 3.55, w: 2.5, h: 0.025, fill: { color: C.blue } });
s6.addText('技术栈选型 · 架构总览 · 前后端设计 · 数据流', { x: 1.0, y: 3.75, w: 6, h: 0.35, fontSize: 11, color: C.textMuted, fontFace: BFONT });
s6.addShape(pres.shapes.OVAL, { x: 7.5, y: 1.0, w: 2.0, h: 2.0, fill: { color: C.lavender }, transparency: 88 });
s6.addShape(pres.shapes.OVAL, { x: 8.2, y: 2.5, w: 1.5, h: 1.5, fill: { color: C.blue }, transparency: 88 });
s6.render();

// ============================================================
// SLIDE 7: TECH STACK
// ============================================================
let s7 = pres.addSlide();
s7.background = { color: C.light };
addTopBar(s7, C.lavender);
s7.addText('技术栈全景', { x: CX, y: 0.25, w: 6, h: 0.55, fontSize: 24, color: C.dark, bold: true, fontFace: HFONT });
addAccentLine(s7, 0.85, C.lavender);
addSlideNum(s7, 7);

const techCards = [
  { title: '后端', items: 'Python 3.8+\nFlask 框架\nSQLite3 数据库\nFlask-CORS\nWebSocket-Client', color: C.blue, icon: 'PY' },
  { title: '前端', items: '单HTML SPA\n原生 JavaScript\nCSS3 动画\nMathJax 公式\nMarked.js 渲染', color: C.lavender, icon: 'FE' },
  { title: 'AI引擎', items: '讯飞星火 Pro\n混元 Turbo\nQwen3-1.7B\nOpenAI兼容接口\nHTTP + WebSocket', color: C.orange, icon: 'AI' },
  { title: '部署', items: 'Vercel Serverless\nFlask -> Functions\nCDN 加速\nSMTP 邮件\nJDoodle 沙箱', color: C.green, icon: 'DP' },
];
techCards.forEach((tc, i) => {
  let x = CX + i * 2.3;
  let card = addCard(s7, x, 1.1, 2.1, 3.9, C.lightGray);
  addIconCircle(card, 0.12, 0.12, 0.45, tc.color, tc.icon);
  card.addText(tc.title, { x: 0, y: 0.7, w: 2.1, h: 0.3, fontSize: 13, color: tc.color, bold: true, align: 'center', fontFace: HFONT });
  card.addShape(pres.shapes.RECTANGLE, { x: 0.2, y: 1.05, w: 1.7, h: 0.02, fill: { color: tc.color } });
  card.addText(tc.items, { x: 0.2, y: 1.15, w: 1.7, h: 2.5, fontSize: 10, color: C.textMuted, fontFace: BFONT, lineSpacing: 20, autoFit: false });
});
s7.addText('全栈自主实现：前端20,000+行单文件SPA + 后端4,900+行Flask应用，零外部AI平台依赖', 
  { x: CX, y: 5.15, w: CW, h: 0.25, fontSize: 8.5, color: C.textMuted, italic: true, align: 'center', fontFace: BFONT });
s7.render();

// ============================================================
// SLIDE 8: ARCHITECTURE DIAGRAM
// ============================================================
let s8 = pres.addSlide();
s8.background = { color: C.light };
addTopBar(s8, C.lavender);
s8.addText('系统架构总览', { x: CX, y: 0.12, w: 6, h: 0.45, fontSize: 20, color: C.dark, bold: true, fontFace: HFONT });
addSlideNum(s8, 8);
s8.addImage({ path: ASSETS + 'architecture_1800x1050.png', x: 0.3, y: 0.55, w: 9.4, h: 4.9 });
s8.render();

// ============================================================
// SLIDE 9: FRONTEND ARCHITECTURE
// ============================================================
let s9 = pres.addSlide();
s9.background = { color: C.light };
addTopBar(s9, C.lavender);
s9.addText('前端架构设计', { x: CX, y: 0.25, w: 6, h: 0.55, fontSize: 24, color: C.dark, bold: true, fontFace: HFONT });
addAccentLine(s9, 0.85, C.lavender);
addSlideNum(s9, 9);

let fCard = addCard(s9, CX, 1.05, 4.5, 3.9, C.lightGray);
fCard.addText('单文件SPA架构', { x: 0.2, y: 0.12, w: 4.1, h: 0.3, fontSize: 14, color: C.blue, bold: true, fontFace: HFONT });

const feItems = [
  '20,000+ 行原生 JavaScript，零框架依赖',
  'switchMainPage() 路由切换 12 个页面视图',
  '全局状态管理：localStorage + 全局变量',
  'MathJax 实时渲染 LaTeX 数学公式',
  'Marked.js Markdown 解析与高亮',
  '768px 以下移动端自适应布局',
  'CSS3 动画与过渡效果',
  '防抖/节流机制保障性能',
];
feItems.forEach((item, i) => {
  fCard.addShape(pres.shapes.OVAL, { x: 0.2, y: 0.55 + i * 0.4, w: 0.13, h: 0.13, fill: { color: C.blue } });
  fCard.addText(item, { x: 0.45, y: 0.5 + i * 0.4, w: 3.8, h: 0.3, fontSize: 9.5, color: C.dark, fontFace: BFONT });
});

const pages = [
  { name: 'authPage', desc: '登录/注册', color: C.orange },
  { name: 'chat', desc: 'AI对话', color: C.blue },
  { name: 'groupChat', desc: '解题群', color: C.lavender },
  { name: 'courseStudy', desc: '课程学习', color: C.green },
  { name: 'questionBank', desc: '题库练习', color: C.sky },
  { name: 'leaderboard', desc: '排行榜', color: C.peach },
  { name: 'adminPanel', desc: '管理后台', color: C.rose },
  { name: 'setting', desc: '个人设置', color: C.midGray },
];
pages.forEach((p, i) => {
  let row = Math.floor(i / 2);
  let col = i % 2;
  let x = 5.0 + col * 2.4;
  let y = 1.05 + row * 0.9;
  let pCard = addCard(s9, x, y, 2.15, 0.65, C.lightGray);
  pCard.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.06, h: 0.65, fill: { color: p.color } });
  pCard.addText(p.name, { x: 0.15, y: 0.05, w: 1.9, h: 0.25, fontSize: 9, color: p.color, bold: true, fontFace: 'Consolas' });
  pCard.addText(p.desc, { x: 0.15, y: 0.32, w: 1.9, h: 0.25, fontSize: 8.5, color: C.textMuted, fontFace: BFONT });
});
s9.render();

// ============================================================
// SLIDE 10: SECTION 03 - LIGHT divider
// ============================================================
let s10 = pres.addSlide();
s10.background = { color: C.lightGray };
s10.addText('03', { x: 1.0, y: 0.8, w: 3, h: 1.8, fontSize: 80, color: C.orange, bold: true, fontFace: HFONT, transparency: 15 });
s10.addText('AI技术融合', { x: 1.0, y: 2.3, w: 5, h: 0.8, fontSize: 36, color: C.dark, bold: true, fontFace: HFONT, charSpacing: 4 });
s10.addText('AI TECHNOLOGY INTEGRATION', { x: 1.0, y: 3.0, w: 5, h: 0.45, fontSize: 13, color: C.orange, fontFace: HFONT });
s10.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: 3.55, w: 2.5, h: 0.025, fill: { color: C.blue } });
s10.addText('多模型协同 · 三Agent流水线 · AI解题群 · 能力画像', { x: 1.0, y: 3.75, w: 7, h: 0.35, fontSize: 11, color: C.textMuted, fontFace: BFONT });
s10.addShape(pres.shapes.OVAL, { x: 7.5, y: 1.0, w: 2.0, h: 2.0, fill: { color: C.orange }, transparency: 88 });
s10.addShape(pres.shapes.OVAL, { x: 8.2, y: 2.5, w: 1.5, h: 1.5, fill: { color: C.lavender }, transparency: 88 });
s10.render();

// ============================================================
// SLIDE 11: AI MODELS
// ============================================================
let s11 = pres.addSlide();
s11.background = { color: C.light };
addTopBar(s11, C.orange);
s11.addText('AI模型能力矩阵', { x: CX, y: 0.25, w: 6, h: 0.55, fontSize: 24, color: C.dark, bold: true, fontFace: HFONT });
addAccentLine(s11, 0.85, C.orange);
addSlideNum(s11, 11);

s11.addImage({ path: ASSETS + 'ai_radar_1050x1050.png', x: 0.2, y: 0.8, w: 4.5, h: 4.5 });

const aiModels = [
  { name: '讯飞星火 Pro', provider: '科大讯飞', model: 'generalv3', features: '核心对话引擎\nHTTP OpenAI兼容\n128K长上下文\n流式SSE支持', color: C.blue },
  { name: '混元 Turbo', provider: '腾讯/讯飞MaaS', model: 'xophunyuan7bmt', features: '翻译+解题智能体\n多轮历史上下文\n快速响应\nHy-MT2-7B', color: C.orange },
  { name: 'Qwen3-1.7B', provider: '阿里/讯飞MaaS', model: 'xop3qwen1b7', features: '解题群智能体\n超低延迟0.74s\n轻量高效\n对话+代码', color: C.green },
];
aiModels.forEach((m, i) => {
  let y = 0.85 + i * 1.45;
  let card = addCard(s11, 5.0, y, 4.6, 1.2, C.lightGray);
  card.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.06, h: 1.2, fill: { color: m.color } });
  card.addText(m.name, { x: 0.18, y: 0.06, w: 2.5, h: 0.22, fontSize: 11, color: m.color, bold: true, fontFace: HFONT });
  card.addText(`${m.provider} | ${m.model}`, { x: 0.18, y: 0.28, w: 4.2, h: 0.14, fontSize: 6.5, color: C.midGray, fontFace: 'Consolas' });
  card.addText(m.features, { x: 0.18, y: 0.48, w: 4.2, h: 0.65, fontSize: 7.5, color: C.textMuted, fontFace: BFONT, lineSpacing: 13, autoFit: false });
});
s11.render();

// ============================================================
// SLIDE 12: MULTI-AGENT PIPELINE
// ============================================================
let s12 = pres.addSlide();
s12.background = { color: C.light };
addTopBar(s12, C.orange);
s12.addText('多智能体协同流水线', { x: CX, y: 0.12, w: 6, h: 0.42, fontSize: 20, color: C.dark, bold: true, fontFace: HFONT });
addSlideNum(s12, 12);

s12.addImage({ path: ASSETS + 'pipeline_1800x750.png', x: 0.2, y: 0.55, w: 9.4, h: 3.9 });

const agents = [
  { name: '学习分析师 SearcherAgent', desc: '关键词提取、知识检索、难度评估、核心知识点识别', color: C.lavender },
  { name: '资源生成师 ResourceAgent', desc: '章节关联、题库匹配、B站视频搜索、知识卡片与代码案例', color: C.blue },
  { name: '路径规划师 PathAgent', desc: '学习路径生成、阶段划分、进度建议、个性化调整', color: C.orange },
];
agents.forEach((a, i) => {
  let x = CX + i * 3.1;
  let card = addCard(s12, x, 4.55, 2.8, 0.8, C.lightGray);
  card.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 2.8, h: 0.05, fill: { color: a.color } });
  card.addText(a.name, { x: 0.12, y: 0.1, w: 2.5, h: 0.25, fontSize: 9.5, color: a.color, bold: true, fontFace: HFONT });
  card.addText(a.desc, { x: 0.12, y: 0.38, w: 2.5, h: 0.35, fontSize: 7.5, color: C.textMuted, fontFace: BFONT });
});
s12.render();

// ============================================================
// SLIDE 13: GROUP CHAT & BENCHMARK
// ============================================================
let s13 = pres.addSlide();
s13.background = { color: C.light };
addTopBar(s13, C.orange);
s13.addText('AI解题群与性能基准', { x: CX, y: 0.25, w: 6, h: 0.55, fontSize: 24, color: C.dark, bold: true, fontFace: HFONT });
addAccentLine(s13, 0.85, C.orange);
addSlideNum(s13, 13);

s13.addImage({ path: ASSETS + 'benchmark_1350x675.png', x: 0.2, y: 1.0, w: 5.5, h: 2.75 });

let gCard = addCard(s13, 6.0, 1.0, 3.6, 2.75, C.lightGray);
gCard.addText('AI解题群机制', { x: 0.2, y: 0.12, w: 3.2, h: 0.3, fontSize: 13, color: C.orange, bold: true, fontFace: HFONT });
const gFeatures = [
  '三模型并发调用 (ThreadPoolExecutor)',
  '讯飞星火 Pro: 4.65s 综合最强',
  '混元Turbo: 5.20s 翻译能力突出',
  'Qwen3-1.7B: 0.74s 极速响应',
  '对比分析：同一问题多角度解答',
  '/api/group_chat 统一接口',
];
gFeatures.forEach((f, i) => {
  gCard.addShape(pres.shapes.OVAL, { x: 0.2, y: 0.52 + i * 0.34, w: 0.1, h: 0.1, fill: { color: C.orange } });
  gCard.addText(f, { x: 0.4, y: 0.47 + i * 0.34, w: 3.0, h: 0.28, fontSize: 8.5, color: C.textMuted, fontFace: BFONT });
});

s13.addText('Qwen3-1.7B凭借极致轻量化实现亚秒级响应，适合高频简单问答场景；星火Pro在复杂推理中表现最优', 
  { x: CX, y: 3.95, w: CW, h: 0.25, fontSize: 8.5, color: C.textMuted, italic: true, align: 'center', fontFace: BFONT });

let apiCard = addCard(s13, CX, 4.3, CW, 0.95, C.lightGray);
apiCard.addText('调用链路:  前端 groupChat()  -->  POST /api/group_chat  -->  ThreadPoolExecutor(max_workers=3)  -->  call_spark_http() + call_qianwen() + call_translate()  -->  聚合返回', 
  { x: 0.15, y: 0.1, w: 8.6, h: 0.45, fontSize: 8, color: C.textMuted, fontFace: 'Consolas', autoFit: false });
apiCard.addText('前端使用 SSE 流式输出，对话体验流畅自然', 
  { x: 0.15, y: 0.55, w: 8.6, h: 0.25, fontSize: 8.5, color: C.textMuted, fontFace: BFONT });
s13.render();

// ============================================================
// SLIDE 14: PERSONALIZED PROFILE
// ============================================================
let s14 = pres.addSlide();
s14.background = { color: C.light };
addTopBar(s14, C.orange);
s14.addText('个性化能力画像', { x: CX, y: 0.25, w: 6, h: 0.55, fontSize: 24, color: C.dark, bold: true, fontFace: HFONT });
addAccentLine(s14, 0.85, C.orange);
addSlideNum(s14, 14);

s14.addImage({ path: ASSETS + 'profile_900x900.png', x: 0.3, y: 0.85, w: 4.0, h: 4.0 });

let profCard = addCard(s14, 4.8, 1.0, 4.8, 3.85, C.lightGray);
profCard.addText('六维能力画像体系', { x: 0.2, y: 0.12, w: 4.4, h: 0.3, fontSize: 13, color: C.blue, bold: true, fontFace: HFONT });

const dims = [
  { name: '知识掌握', desc: '课程习题正确率、章节完成度', color: C.blue },
  { name: '认知能力', desc: '问题复杂度分析、概念理解深度', color: C.lavender },
  { name: '纠错能力', desc: '代码纠错通过率、错误识别准确度', color: C.orange },
  { name: '兴趣活跃', desc: '学习频率、交互活跃度、探索广度', color: C.green },
  { name: '目标完成', desc: '学习计划达成率、任务完成度', color: C.sky },
  { name: '学习习惯', desc: '学习时长规律性、连续学习天数', color: C.peach },
];
dims.forEach((d, i) => {
  profCard.addShape(pres.shapes.RECTANGLE, { x: 0.2, y: 0.55 + i * 0.52, w: 0.05, h: 0.42, fill: { color: d.color } });
  profCard.addText(d.name, { x: 0.38, y: 0.52 + i * 0.52, w: 1.5, h: 0.22, fontSize: 9.5, color: d.color, bold: true, fontFace: HFONT });
  profCard.addText(d.desc, { x: 0.38, y: 0.75 + i * 0.52, w: 4.0, h: 0.2, fontSize: 8, color: C.textMuted, fontFace: BFONT });
});

s14.addText('画像数据通过 /api/extract_profile 实时更新，结合学习时长和做题记录进行动态调整', 
  { x: CX, y: 5.0, w: CW, h: 0.25, fontSize: 8, color: C.midGray, italic: true, align: 'center', fontFace: BFONT });
s14.render();

// ============================================================
// SLIDE 15: SECTION 04 - LIGHT divider
// ============================================================
let s15 = pres.addSlide();
s15.background = { color: C.lightGray };
s15.addText('04', { x: 1.0, y: 0.8, w: 3, h: 1.8, fontSize: 80, color: C.green, bold: true, fontFace: HFONT, transparency: 15 });
s15.addText('核心功能', { x: 1.0, y: 2.3, w: 5, h: 0.8, fontSize: 36, color: C.dark, bold: true, fontFace: HFONT, charSpacing: 4 });
s15.addText('CORE FEATURES', { x: 1.0, y: 3.0, w: 5, h: 0.45, fontSize: 13, color: C.green, fontFace: HFONT });
s15.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: 3.55, w: 2.5, h: 0.025, fill: { color: C.orange } });
s15.addText('八大功能模块 · 智能对话 · 课程学习 · 代码实战', { x: 1.0, y: 3.75, w: 7, h: 0.35, fontSize: 11, color: C.textMuted, fontFace: BFONT });
s15.addShape(pres.shapes.OVAL, { x: 7.5, y: 1.0, w: 2.0, h: 2.0, fill: { color: C.green }, transparency: 88 });
s15.addShape(pres.shapes.OVAL, { x: 8.2, y: 2.5, w: 1.5, h: 1.5, fill: { color: C.orange }, transparency: 88 });
s15.render();

// ============================================================
// SLIDE 16: FEATURE OVERVIEW CHART
// ============================================================
let s16 = pres.addSlide();
s16.background = { color: C.light };
addTopBar(s16, C.green);
s16.addText('核心功能完善度', { x: CX, y: 0.25, w: 6, h: 0.55, fontSize: 24, color: C.dark, bold: true, fontFace: HFONT });
addAccentLine(s16, 0.85, C.green);
addSlideNum(s16, 16);
s16.addImage({ path: ASSETS + 'comparison_1500x750.png', x: 0.3, y: 1.0, w: 9.2, h: 4.5 });
s16.render();

// ============================================================
// SLIDE 17: FEATURE DETAILS
// ============================================================
let s17 = pres.addSlide();
s17.background = { color: C.light };
addTopBar(s17, C.green);
s17.addText('特色功能详解', { x: CX, y: 0.25, w: 6, h: 0.55, fontSize: 24, color: C.dark, bold: true, fontFace: HFONT });
addAccentLine(s17, 0.85, C.green);
addSlideNum(s17, 17);

const features = [
  { title: '代码纠错与在线运行', desc: '支持 Python/C++/Java/JS/HTML\nAI深度语法检测与逻辑分析\n左右分栏对比显示\n本地沙箱+JDoodle降级', color: C.green, icon: '</>' },
  { title: '动态思维导图', desc: '自适应课程脑图生成\n智能杂音过滤算法\n空分支自动隐藏\n可视化知识结构', color: C.blue, icon: 'N' },
  { title: '自主出题测试', desc: '自定义主题/题量/难度\nAI自动生成选择题\n智能错题本记录\nMarkdown+MathJax渲染', color: C.lavender, icon: 'Q' },
  { title: '文档智能诊断', desc: 'PDF/Word/MD/Excel多格式\n自动文本提取\nAI深度内容诊断\n学习建议生成', color: C.peach, icon: 'D' },
];
features.forEach((f, i) => {
  let row = Math.floor(i / 2);
  let col = i % 2;
  let x = CX + col * 4.6;
  let y = 1.1 + row * 2.15;
  let card = addCard(s17, x, y, 4.3, 1.8, C.lightGray);
  addIconCircle(card, 0.12, 0.12, 0.45, f.color, f.icon);
  card.addText(f.title, { x: 0.7, y: 0.15, w: 3.2, h: 0.3, fontSize: 12, color: f.color, bold: true, fontFace: HFONT });
  card.addShape(pres.shapes.RECTANGLE, { x: 0.12, y: 0.55, w: 4.0, h: 0.015, fill: { color: C.lightGray } });
  card.addText(f.desc, { x: 0.12, y: 0.65, w: 4.0, h: 1.0, fontSize: 9.5, color: C.textMuted, fontFace: BFONT, lineSpacing: 18, autoFit: false });
});
s17.render();

// ============================================================
// SLIDE 18: SECTION 05 - LIGHT divider
// ============================================================
let s18 = pres.addSlide();
s18.background = { color: C.lightGray };
s18.addText('05', { x: 1.0, y: 0.8, w: 3, h: 1.8, fontSize: 80, color: C.sky, bold: true, fontFace: HFONT, transparency: 15 });
s18.addText('产品展示', { x: 1.0, y: 2.3, w: 5, h: 0.8, fontSize: 36, color: C.dark, bold: true, fontFace: HFONT, charSpacing: 4 });
s18.addText('PRODUCT SHOWCASE', { x: 1.0, y: 3.0, w: 5, h: 0.45, fontSize: 13, color: C.sky, fontFace: HFONT });
s18.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: 3.55, w: 2.5, h: 0.025, fill: { color: C.blue } });
s18.addText('界面截图 · 交互体验 · 功能演示', { x: 1.0, y: 3.75, w: 6, h: 0.35, fontSize: 11, color: C.textMuted, fontFace: BFONT });
s18.addShape(pres.shapes.OVAL, { x: 7.5, y: 1.0, w: 2.0, h: 2.0, fill: { color: C.sky }, transparency: 88 });
s18.addShape(pres.shapes.OVAL, { x: 8.2, y: 2.5, w: 1.5, h: 1.5, fill: { color: C.green }, transparency: 88 });
s18.render();

// ============================================================
// SLIDE 19: UI - Chat & Course
// ============================================================
let s19 = pres.addSlide();
s19.background = { color: C.light };
addTopBar(s19, C.sky);
s19.addText('界面展示：智能对话 & 课程中心', { x: CX, y: 0.18, w: 8, h: 0.38, fontSize: 17, color: C.dark, bold: true, fontFace: HFONT });
addSlideNum(s19, 19);

s19.addImage({ path: ASSETS + 'ui_chat_1500x900.png', x: 0.2, y: 0.65, w: 4.7, h: 2.8 });
s19.addImage({ path: ASSETS + 'ui_course_1500x900.png', x: 5.1, y: 0.65, w: 4.7, h: 2.8 });

let lbl1 = s19.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.3, y: 3.55, w: 2.5, h: 0.28, fill: { color: C.blue }, rectRadius: 0.06 });
lbl1.addText('全体协同 - 多智能体对话', { x: 0, y: 0, w: 2.5, h: 0.28, fontSize: 7.5, color: C.white, align: 'center', bold: true, fontFace: HFONT });

let lbl2 = s19.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.2, y: 3.55, w: 2.5, h: 0.28, fill: { color: C.lavender }, rectRadius: 0.06 });
lbl2.addText('课程中心 - 章节学习', { x: 0, y: 0, w: 2.5, h: 0.28, fontSize: 7.5, color: C.white, align: 'center', bold: true, fontFace: HFONT });

let bCard = addCard(s19, CX, 3.95, CW, 1.45, C.lightGray);
bCard.addText('交互设计亮点', { x: 0.2, y: 0.08, w: 3, h: 0.28, fontSize: 11, color: C.sky, bold: true, fontFace: HFONT });
const highlights = [
  '深色侧边栏 + 浅色内容区，视觉层次分明',
  '智能体工作流卡片可视化，协同过程一目了然',
  '实时流式输出(SSE)，对话体验流畅自然',
  '章节进度条可视化，学习状态清晰可追踪',
];
highlights.forEach((h, i) => {
  let col = i % 2;
  let row = Math.floor(i / 2);
  bCard.addShape(pres.shapes.OVAL, { x: 0.2 + col * 4.5, y: 0.45 + row * 0.38, w: 0.1, h: 0.1, fill: { color: C.sky } });
  bCard.addText(h, { x: 0.42 + col * 4.5, y: 0.4 + row * 0.38, w: 4.0, h: 0.3, fontSize: 8.5, color: C.textMuted, fontFace: BFONT });
});
s19.render();

// ============================================================
// SLIDE 20: UI - Group Chat & Code
// ============================================================
let s20 = pres.addSlide();
s20.background = { color: C.light };
addTopBar(s20, C.sky);
s20.addText('界面展示：AI解题群 & 代码纠错', { x: CX, y: 0.18, w: 8, h: 0.38, fontSize: 17, color: C.dark, bold: true, fontFace: HFONT });
addSlideNum(s20, 20);

s20.addImage({ path: ASSETS + 'ui_group_1500x900.png', x: 0.2, y: 0.65, w: 4.7, h: 2.8 });
s20.addImage({ path: ASSETS + 'ui_code_1500x900.png', x: 5.1, y: 0.65, w: 4.7, h: 2.8 });

let lbl3 = s20.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.3, y: 3.55, w: 2.5, h: 0.28, fill: { color: C.lavender }, rectRadius: 0.06 });
lbl3.addText('AI解题群 - 三模型并发', { x: 0, y: 0, w: 2.5, h: 0.28, fontSize: 7.5, color: C.white, align: 'center', bold: true, fontFace: HFONT });

let lbl4 = s20.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.2, y: 3.55, w: 2.5, h: 0.28, fill: { color: C.green }, rectRadius: 0.06 });
lbl4.addText('代码纠错 - AI智能诊断', { x: 0, y: 0, w: 2.5, h: 0.28, fontSize: 7.5, color: C.white, align: 'center', bold: true, fontFace: HFONT });

let bCard2 = addCard(s20, CX, 3.95, CW, 1.45, C.lightGray);
bCard2.addText('技术实现亮点', { x: 0.2, y: 0.08, w: 3, h: 0.28, fontSize: 11, color: C.lavender, bold: true, fontFace: HFONT });
const techHL = [
  '三模型并发返回，响应时间实时标注对比',
  '代码高亮 + 错误行标红，问题一目了然',
  'AI诊断卡片：Bug编号、行号、修复建议',
  '本地沙箱执行(Python/C/Java)，10秒超时保护',
];
techHL.forEach((h, i) => {
  let col = i % 2;
  let row = Math.floor(i / 2);
  bCard2.addShape(pres.shapes.OVAL, { x: 0.2 + col * 4.5, y: 0.45 + row * 0.38, w: 0.1, h: 0.1, fill: { color: C.lavender } });
  bCard2.addText(h, { x: 0.42 + col * 4.5, y: 0.4 + row * 0.38, w: 4.0, h: 0.3, fontSize: 8.5, color: C.textMuted, fontFace: BFONT });
});
s20.render();

// ============================================================
// SLIDE 21: SECTION 06 - LIGHT divider
// ============================================================
let s21 = pres.addSlide();
s21.background = { color: C.lightGray };
s21.addText('06', { x: 1.0, y: 0.8, w: 3, h: 1.8, fontSize: 80, color: C.rose, bold: true, fontFace: HFONT, transparency: 15 });
s21.addText('安全与工程', { x: 1.0, y: 2.3, w: 5, h: 0.8, fontSize: 36, color: C.dark, bold: true, fontFace: HFONT, charSpacing: 4 });
s21.addText('SECURITY & ENGINEERING', { x: 1.0, y: 3.0, w: 5, h: 0.45, fontSize: 13, color: C.rose, fontFace: HFONT });
s21.addShape(pres.shapes.RECTANGLE, { x: 1.0, y: 3.55, w: 2.5, h: 0.025, fill: { color: C.blue } });
s21.addText('安全机制 · 工程质量 · 部署方案 · 开源协议', { x: 1.0, y: 3.75, w: 7, h: 0.35, fontSize: 11, color: C.textMuted, fontFace: BFONT });
s21.addShape(pres.shapes.OVAL, { x: 7.5, y: 1.0, w: 2.0, h: 2.0, fill: { color: C.rose }, transparency: 88 });
s21.addShape(pres.shapes.OVAL, { x: 8.2, y: 2.5, w: 1.5, h: 1.5, fill: { color: C.green }, transparency: 88 });
s21.render();

// ============================================================
// SLIDE 22: SECURITY
// ============================================================
let s22 = pres.addSlide();
s22.background = { color: C.light };
addTopBar(s22, C.rose);
s22.addText('安全机制全景', { x: CX, y: 0.25, w: 6, h: 0.55, fontSize: 24, color: C.dark, bold: true, fontFace: HFONT });
addAccentLine(s22, 0.85, C.rose);
addSlideNum(s22, 22);

s22.addImage({ path: ASSETS + 'security_900x900.png', x: 0.3, y: 0.85, w: 3.5, h: 3.5 });

let secCard = addCard(s22, 4.3, 1.0, 5.3, 3.85, C.lightGray);
secCard.addText('八层安全防护体系', { x: 0.2, y: 0.12, w: 4.9, h: 0.3, fontSize: 13, color: C.rose, bold: true, fontFace: HFONT });

const secItems = [
  { name: '密码哈希', desc: 'pbkdf2/scrypt', color: C.blue },
  { name: '登录速率限制', desc: '5次/5分钟锁定', color: C.orange },
  { name: '文件双重校验', desc: '扩展名+MIME', color: C.lavender },
  { name: '路径遍历防护', desc: '阻止..访问', color: C.green },
  { name: '内容安全过滤', desc: 'safety_filter()', color: C.sky },
  { name: '防幻觉处理', desc: 'anti_hallucination()', color: C.peach },
  { name: '代码执行沙箱', desc: '子进程+超时', color: C.rose },
  { name: 'Token认证', desc: '管理员24h', color: C.midGray },
];
secItems.forEach((s, i) => {
  let col = i % 2;
  let row = Math.floor(i / 2);
  let x = 0.2 + col * 2.5;
  let y = 0.52 + row * 0.8;
  secCard.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.05, h: 0.55, fill: { color: s.color } });
  secCard.addText(s.name, { x: x + 0.12, y, w: 2.2, h: 0.25, fontSize: 9.5, color: s.color, bold: true, fontFace: HFONT });
  secCard.addText(s.desc, { x: x + 0.12, y: y + 0.25, w: 2.2, h: 0.2, fontSize: 8, color: C.textMuted, fontFace: BFONT });
});
s22.render();

// ============================================================
// SLIDE 23: ENGINEERING
// ============================================================
let s23 = pres.addSlide();
s23.background = { color: C.light };
addTopBar(s23, C.rose);
s23.addText('工程质量与部署', { x: CX, y: 0.25, w: 6, h: 0.55, fontSize: 24, color: C.dark, bold: true, fontFace: HFONT });
addAccentLine(s23, 0.85, C.rose);
addSlideNum(s23, 23);

s23.addImage({ path: ASSETS + 'tech_stack_1500x750.png', x: 0.2, y: 1.0, w: 5.5, h: 2.75 });

let engCard = addCard(s23, 6.0, 1.0, 3.6, 2.75, C.lightGray);
engCard.addText('工程规范', { x: 0.2, y: 0.12, w: 3.2, h: 0.28, fontSize: 13, color: C.blue, bold: true, fontFace: HFONT });
const engItems = ['MIT开源协议', 'THIRD-PARTY-NOTICES声明', '环境变量 .env 配置管理', 'SQLite自动建表初始化', 'Markdown教材同步工具', 'Vercel Serverless部署', 'API超时保护机制', '错误脱敏响应处理'];
engItems.forEach((e, i) => {
  engCard.addShape(pres.shapes.OVAL, { x: 0.2, y: 0.5 + i * 0.26, w: 0.09, h: 0.09, fill: { color: C.green } });
  engCard.addText(e, { x: 0.38, y: 0.46 + i * 0.26, w: 3.0, h: 0.22, fontSize: 8.5, color: C.textMuted, fontFace: BFONT });
});

let depCard = addCard(s23, CX, 3.9, CW, 1.4, C.lightGray);
depCard.addText('部署架构', { x: 0.2, y: 0.08, w: 3, h: 0.28, fontSize: 11, color: C.lavender, bold: true, fontFace: HFONT });
const depInfo = [
  { title: '本地开发', desc: 'Flask dev server\nPython 3.8+ / SQLite3', color: C.blue },
  { title: '生产部署', desc: 'Vercel Serverless\nFlask -> Functions\nCDN全球加速', color: C.orange },
  { title: '外部服务', desc: '讯飞星火API\n讯飞MaaS平台\nBilibili / JDoodle', color: C.lavender },
];
depInfo.forEach((d, i) => {
  let x = 0.3 + i * 3.1;
  let dSub = depCard.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 0.45, w: 2.7, h: 0.8, fill: { color: C.lightGray }, line: { color: C.midGray, width: 0.5 }, rectRadius: 0.08 });
  dSub.addText(d.title, { x: 0.1, y: 0.05, w: 2.5, h: 0.22, fontSize: 9.5, color: d.color, bold: true, fontFace: HFONT });
  dSub.addText(d.desc, { x: 0.1, y: 0.3, w: 2.5, h: 0.45, fontSize: 8, color: C.textMuted, fontFace: BFONT });
});
s23.render();

// ============================================================
// SLIDE 24: API OVERVIEW
// ============================================================
let s24 = pres.addSlide();
s24.background = { color: C.light };
addTopBar(s24, C.rose);
s24.addText('API端点总览 (59个)', { x: CX, y: 0.25, w: 6, h: 0.55, fontSize: 24, color: C.dark, bold: true, fontFace: HFONT });
addAccentLine(s24, 0.85, C.rose);
addSlideNum(s24, 24);

const apiGroups = [
  { title: 'AI对话服务', count: 10, endpoints: '/api/chat, /api/chat/stream\n/api/group_chat\n/api/agent_collaborate\n/api/translate\n/api/learning_path\n/api/flashcards, /api/code_examples', color: C.orange },
  { title: '课程与资源', count: 6, endpoints: '/api/courses\n/api/chapters\n/api/questions\n/api/search\n/api/search_videos', color: C.blue },
  { title: '用户系统', count: 14, endpoints: '/api/register, /api/login\n/api/user/profile\n/api/user/chat_history\n/api/user/profile_data\n/api/reset-password, /api/upload', color: C.lavender },
  { title: '管理员后台', count: 18, endpoints: '/api/admin/users\n/api/admin/stats\n/api/admin/dashboard\n/api/admin/logs\n/api/admin/batch/*\n/api/message/*', color: C.green },
  { title: '代码与测试', count: 5, endpoints: '/api/run_code\n/api/question/complete\n/api/leaderboard\n/api/upload_documents', color: C.sky },
  { title: '安全与基础设施', count: 6, endpoints: '/api/send-verify-code\n/api/admin/login\n/api/tmp_images/*\n速率限制 / 内容过滤', color: C.rose },
];
apiGroups.forEach((g, i) => {
  let col = i % 3;
  let row = Math.floor(i / 3);
  let x = CX + col * 3.1;
  let y = 1.1 + row * 2.2;
  let card = addCard(s24, x, y, 2.8, 1.9, C.lightGray);
  card.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 2.8, h: 0.42, fill: { color: g.color } });
  card.addText(g.title, { x: 0.12, y: 0.06, w: 2.0, h: 0.3, fontSize: 11, color: C.white, bold: true, fontFace: HFONT });
  let countBadge = card.addShape(pres.shapes.OVAL, { x: 2.2, y: 0.06, w: 0.3, h: 0.3, fill: { color: C.white } });
  countBadge.addText(String(g.count), { x: 0, y: 0, w: 0.3, h: 0.3, fontSize: 8, color: g.color, align: 'center', bold: true, fontFace: HFONT });
  card.addText(g.endpoints, { x: 0.12, y: 0.5, w: 2.5, h: 1.3, fontSize: 7, color: C.textMuted, fontFace: 'Consolas', lineSpacing: 13, autoFit: false });
});
s24.render();

// ============================================================
// SLIDE 25: THANK YOU (LIGHT)
// ============================================================
let s25 = pres.addSlide();
s25.background = { color: C.light };
addTopBar(s25, C.orange);
s25.addShape(pres.shapes.RECTANGLE, { x: 0, y: SLIDE_H - 0.04, w: SLIDE_W, h: 0.04, fill: { color: C.blue } });
// Left accent
s25.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 0.8, w: 0.05, h: 2.5, fill: { color: C.orange } });

s25.addText('Thank You', { x: 1.2, y: 0.8, w: 7, h: 0.9, fontSize: 42, color: C.dark, bold: true, fontFace: HFONT, charSpacing: 3 });
s25.addText('灵析 Lingxi AI  |  智能个性化学习辅助系统', { x: 1.2, y: 1.55, w: 7, h: 0.4, fontSize: 15, color: C.blue, fontFace: HFONT });
s25.addShape(pres.shapes.RECTANGLE, { x: 1.2, y: 2.1, w: 2.5, h: 0.02, fill: { color: C.orange } });

s25.addText('v3.1 安全加固版', { x: 1.2, y: 2.3, w: 7, h: 0.3, fontSize: 12, color: C.textMuted, fontFace: BFONT });

const takeaways = [
  '多智能体协同 —— 首创三Agent流水线学习方案生成',
  '三模型并发 —— 讯飞星火+混元Turbo+Qwen3对比解题',
  '全栈AI原生 —— 20K+行前端+5K+行后端+59个API',
  '开源可部署 —— MIT协议，Vercel一键部署',
];
takeaways.forEach((t, i) => {
  s25.addShape(pres.shapes.OVAL, { x: 1.2, y: 2.75 + i * 0.38, w: 0.12, h: 0.12, fill: { color: C.orange } });
  s25.addText(t, { x: 1.45, y: 2.7 + i * 0.38, w: 7, h: 0.32, fontSize: 10.5, color: C.dark, fontFace: BFONT });
});

let demoBadge = s25.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 1.2, y: 4.5, w: 4.5, h: 0.32, fill: { color: C.blue }, rectRadius: 0.08 });
demoBadge.addText('https://lingxi-jhyc.vercel.app/', { x: 0, y: 0, w: 4.5, h: 0.32, fontSize: 9.5, color: C.white, align: 'center', fontFace: 'Consolas' });

// Decorative shapes
s25.addShape(pres.shapes.OVAL, { x: 7.5, y: 0.8, w: 2.0, h: 2.0, fill: { color: C.blue }, transparency: 90 });
s25.addShape(pres.shapes.OVAL, { x: 8.2, y: 2.5, w: 1.5, h: 1.5, fill: { color: C.orange }, transparency: 90 });

addSlideNum(s25, 25);
s25.render();

// ============================================================
// SAVE
// ============================================================
pres.writeFile({ fileName: 'd:\\学习系统\\mylingxi\\灵析Lingxi_AI_产品演示.pptx' })
  .then(() => console.log('PPTX generated successfully!'))
  .catch(err => console.error('Error:', err));
