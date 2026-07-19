(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: Test Distribution ---
  var chart = echarts.init(document.getElementById('chart-test-dist'), null, { renderer: 'svg' });
  chart.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      appendToBody: true,
      backgroundColor: '#fff',
      borderColor: rule,
      textStyle: { color: ink }
    },
    grid: { left: 120, right: 40, top: 20, bottom: 30 },
    xAxis: {
      type: 'value',
      max: 12,
      axisLabel: { color: muted },
      splitLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'category',
      data: ['安全测试', 'AI安全机制', '性能与兼容性', 'AI辅助工具', 'AI解题群', 'AI对话', '其他功能', '管理员功能', '课程学习', '用户认证'],
      axisLabel: { color: ink, fontSize: 12 },
      axisLine: { lineStyle: { color: rule } },
      axisTick: { show: false }
    },
    series: [{
      type: 'bar',
      data: [10, 4, 11, 5, 4, 7, 6, 6, 7, 10],
      itemStyle: {
        color: function(params) {
          var colors = [accent, accent2 + 'cc', muted];
          var idx = params.dataIndex % 3;
          return colors[idx];
        },
        borderRadius: [0, 4, 4, 0]
      },
      barWidth: 18,
      label: {
        show: true,
        position: 'right',
        formatter: '{c}',
        color: ink,
        fontSize: 12,
        fontWeight: 600
      }
    }]
  });
  window.addEventListener('resize', function() { chart.resize(); });
})();