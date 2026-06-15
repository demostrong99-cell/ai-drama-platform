// ===== AI 剧本生成演示 =====

const scriptTemplates = {
  suspense: {
    title: "迷雾追踪",
    scenes: [
      {
        scene: 1,
        location: "深夜·城市小巷",
        description: "昏暗的路灯下，一个身影匆匆走过。镜头跟随他的脚步，地面上的影子被拉得很长。",
        dialogue: [
          { character: "林浩（主角）", line: "（低声自语）又是这条巷子...每次走这里都觉得有人在看着我。" },
          { character: "旁白", line: "林浩不知道，今晚的这条巷子，将彻底改变他的人生。" }
        ],
        camera: "跟拍 → 特写：脚步",
        duration: "15秒"
      },
      {
        scene: 2,
        location: "林浩的公寓·客厅",
        description: "林浩回到家，打开灯。桌上放着一封没有署名的信封。他小心翼翼地打开。",
        dialogue: [
          { character: "林浩", line: "（疑惑）这是...谁寄来的？" },
          { character: "林浩", line: "（读信）'你有24小时找到真相，否则一切都将结束。'" }
        ],
        camera: "中景 → 特写：信件内容",
        duration: "20秒"
      }
    ]
  },
  romance: {
    title: "转角遇到你",
    scenes: [
      {
        scene: 1,
        location: "咖啡馆·午后",
        description: "阳光透过落地窗洒进来。女主角坐在角落，手里捧着一本书。男主角推门而入，风铃轻响。",
        dialogue: [
          { character: "苏晴（女主）", line: "（抬头看了一眼，又低头看书）" },
          { character: "陈默（男主）", line: "（对店员）一杯美式，谢谢。（注意到苏晴）那本书...我也在读。" }
        ],
        camera: "全景 → 双人特写",
        duration: "20秒"
      },
      {
        scene: 2,
        location: "咖啡馆·同一位置",
        description: "陈默犹豫了一下，走向苏晴的桌子。",
        dialogue: [
          { character: "陈默", line: "不好意思...我能坐这里吗？其他位置都满了。" },
          { character: "苏晴", line: "（看了看周围空荡荡的座位，微笑）当然可以。" }
        ],
        camera: "中景 → 两人面部特写",
        duration: "15秒"
      }
    ]
  },
  comedy: {
    title: "外卖超人",
    scenes: [
      {
        scene: 1,
        location: "外卖站点·白天",
        description: "主角小李骑着电动车冲进站点，差点撞到站长。",
        dialogue: [
          { character: "小李", line: "站长！我刚才用15分钟送了3单！破纪录了！" },
          { character: "站长", line: "（无奈）你倒是快...但你把3个单送错地址了！" },
          { character: "小李", line: "啊？不可能！我明明...（看手机）...完了。" }
        ],
        camera: "快切镜头 → 特写：手机屏幕",
        duration: "20秒"
      },
      {
        scene: 2,
        location: "客户家门口",
        description: "小李站在客户门前，深呼吸，准备道歉。门开了。",
        dialogue: [
          { character: "客户", line: "你就是那个送错餐的？" },
          { character: "小李", line: "（鞠躬）对不起！我马上给您换！" },
          { character: "客户", line: "不用了...你送来的那份反而更好吃。下次还点你！" }
        ],
        camera: "中景 → 反应镜头",
        duration: "18秒"
      }
    ]
  },
  scifi: {
    title: "最后的信号",
    scenes: [
      {
        scene: 1,
        location: "太空站·控制室",
        description: "2046年，地球轨道空间站。警报灯闪烁，屏幕上显示'信号丢失'。",
        dialogue: [
          { character: "张指挥官", line: "报告情况！" },
          { character: "通讯员", line: "长官，地球信号...完全消失了。我们联系不上任何人。" },
          { character: "张指挥官", line: "（沉默片刻）启动备用通讯系统。所有人保持冷静。" }
        ],
        camera: "全景 → 快切特写：各人表情",
        duration: "25秒"
      },
      {
        scene: 2,
        location: "太空站·观察窗",
        description: "张指挥官独自站在巨大的观察窗前，看着蓝色的地球。一切看起来那么平静。",
        dialogue: [
          { character: "张指挥官", line: "（独白）6个月了...我们在这里守护着人类最后的希望。如果信号真的断了..." },
          { character: "AI系统", line: "检测到微弱信号源，坐标：北纬39.9°，东经116.3°。" },
          { character: "张指挥官", line: "那是...北京？放大信号！" }
        ],
        camera: "远景 → 特写：地球 → 快切：屏幕数据",
        duration: "30秒"
      }
    ]
  },
  fantasy: {
    title: "时间旅人",
    scenes: [
      {
        scene: 1,
        location: "古旧钟表店·夜晚",
        description: "一间堆满各种钟表的小店。所有的钟都在走，但时间各不相同。",
        dialogue: [
          { character: "老者", line: "年轻人，你想买什么？" },
          { character: "小雨（主角）", line: "我...我想回到昨天。有人说您这里可以。" },
          { character: "老者", line: "（笑）回到昨天？你知道代价是什么吗？" }
        ],
        camera: "环绕镜头 → 双人对切",
        duration: "20秒"
      },
      {
        scene: 2,
        location: "钟表店·柜台",
        description: "老者从柜台下取出一个古老的怀表，表盘上的数字是倒着走的。",
        dialogue: [
          { character: "老者", line: "这个表可以让你回到24小时前。但每用一次，你就会失去一段记忆。" },
          { character: "小雨", line: "失去...什么记忆？" },
          { character: "老者", line: "随机的。可能是昨天的记忆，也可能是你最珍贵的那段。你确定要用吗？" }
        ],
        camera: "特写：怀表 → 面部反应",
        duration: "25秒"
      }
    ]
  },
  urban: {
    title: "加班的代价",
    scenes: [
      {
        scene: 1,
        location: "写字楼·办公室·深夜",
        description: "整个楼层只有主角王明的工位还亮着灯。电脑屏幕显示凌晨2:47。",
        dialogue: [
          { character: "王明", line: "（打哈欠）再改最后一版...明天一定要交了。" },
          { character: "手机震动", line: "（妻子发来消息：'孩子发烧了，你能回来吗？'）" },
          { character: "王明", line: "（看着手机，又看看电脑）...马上回去。" }
        ],
        camera: "俯拍全景 → 特写：手机屏幕",
        duration: "20秒"
      },
      {
        scene: 2,
        location: "王明家门口",
        description: "王明疲惫地打开家门。客厅的灯还亮着，妻子坐在沙发上等他。",
        dialogue: [
          { character: "妻子", line: "孩子刚睡着。你...又加班到现在？" },
          { character: "王明", line: "（疲惫地坐下）对不起...这个项目结束后，我一定多陪你们。" },
          { character: "妻子", line: "（沉默片刻）你上次也是这么说的。" }
        ],
        camera: "中景 → 双人特写",
        duration: "22秒"
      }
    ]
  }
};

// ===== 生成剧本 =====
function generateScript() {
  const genre = document.getElementById('genre').value;
  const idea = document.getElementById('idea').value;
  const episodes = parseInt(document.getElementById('episodes').value);
  const btn = document.getElementById('generateBtn');
  const output = document.getElementById('outputContent');
  const actions = document.getElementById('outputActions');

  // 按钮状态
  btn.disabled = true;
  btn.textContent = '⏳ AI 生成中...';
  output.innerHTML = '<div class="placeholder"><p>🤖 AI 正在创作剧本...</p><p>请稍候</p></div>';

  // 模拟生成延迟
  setTimeout(() => {
    const template = scriptTemplates[genre];
    let script = `🎬 剧本：${template.title}\n`;
    script += `${'═'.repeat(40)}\n\n`;

    if (idea) {
      script += `💡 创意来源：${idea}\n\n`;
    }

    script += `📋 类型：${getGenreName(genre)}\n`;
    script += `📺 集数：${episodes} 集\n\n`;

    for (let ep = 1; ep <= Math.min(episodes, 2); ep++) {
      if (episodes > 1) {
        script += `\n${'─'.repeat(40)}\n`;
        script += `📺 第 ${ep} 集\n`;
        script += `${'─'.repeat(40)}\n\n`;
      }

      template.scenes.forEach(scene => {
        script += `【场景 ${scene.scene}】${scene.location}\n`;
        script += `📹 镜头：${scene.camera}\n`;
        script += `⏱️ 时长：${scene.duration}\n\n`;
        script += `场景描述：${scene.description}\n\n`;

        scene.dialogue.forEach(d => {
          script += `${d.character}：${d.line}\n`;
        });

        script += `\n${'·'.repeat(30)}\n\n`;
      });
    }

    script += `\n✅ 剧本生成完毕！\n`;
    script += `📊 总场景数：${template.scenes.length * Math.min(episodes, 2)}\n`;
    script += `📝 总字数：约 ${script.length} 字\n`;

    output.textContent = script;
    actions.style.display = 'flex';
    btn.disabled = false;
    btn.textContent = '✨ AI 生成剧本';
  }, 2000);
}

function getGenreName(genre) {
  const names = {
    suspense: '悬疑', romance: '爱情', comedy: '喜剧',
    scifi: '科幻', fantasy: '奇幻', urban: '都市'
  };
  return names[genre] || genre;
}

// ===== 复制剧本 =====
function copyScript() {
  const content = document.getElementById('outputContent').textContent;
  navigator.clipboard.writeText(content).then(() => {
    alert('剧本已复制到剪贴板！');
  });
}

// ===== 下载剧本 =====
function downloadScript() {
  const content = document.getElementById('outputContent').textContent;
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'AI剧本.txt';
  a.click();
  URL.revokeObjectURL(url);
}

// ===== 平滑滚动 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
