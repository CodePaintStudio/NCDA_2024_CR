let cnt = 0
let x = 270
let y = 0
let tu1 = document.querySelector('.tu1')
let son1 = tu1.firstChild
let tu2 = document.querySelector('.tu2')
let son2 = tu2.firstChild
let hg = document.querySelector('.hg')

let box = document.querySelector('.box2')
let sons = box.children

let bt = document.querySelector('.bt')

let z2 = document.querySelector('.z2')

let vide = document.querySelector('.sp')

let tus = ['../image/川菜烹饪方式/tu1.png',
  '../image/川菜烹饪方式/tu2.png',
  '../image/川菜烹饪方式/tu3.png',
  '../image/川菜烹饪方式/tu4.png',
  '../image/川菜烹饪方式/tu5.png',
  '../image/川菜烹饪方式/tu6.png',
]

let wzs = [{
  wz1: '最关键的地方就是如何调制味汁',
  wz2: '速度快，时间短',
  wz3: '小炒',
  wz4: '川菜常见工艺',
  wz5: '调料众多，应提前备好',
  wz6: '小炒：小滑肉',
  img: '../image/川菜烹饪方式/bc1.png',
  wz7: '川菜常见工艺，速度快、时间短，用到的调味料种类多，调制味汁要提前准备好',
  video: '../video/xc.mp4'
}, {
  wz1: '原料见油不见水汁',
  wz2: '短时间加热成菜',
  wz3: '干煸',
  wz4: '不断翻炒收汁',
  wz5: '煸炒至原料干香滋润而成菜',
  wz6: '干煸：干煸肥肠',
  img: '../image/川菜烹饪方式/ganb.png',
  wz7: '较短时间加热成菜的烹饪方法。原料处理后，中火热油不断翻炒，原料见油不见水汁时，加调味料和辅料继续煸炒',
  video: '../video/gb.mp4'

}, {
  wz1: '将清炸的半成品入锅',
  wz2: '川菜中凉菜的一种烹饪方式',
  wz3: '炸收',
  wz4: '慢烧，收汁，亮油',
  wz5: '色泽棕红，酥软适口',
  wz6: '炸收：芝麻肉丝',
  img: '../image/川菜烹饪方式/zmrs.png',
  wz7: '川菜中凉菜的一种烹制方法。经清炸的半成品入锅加调料、鲜汤，用中火或小火慢烧，使之收汁亮油、回软入味的方法',
  video: '../video/zs.mp4'

}, {
  wz1: '瘦肉棕红有泽，肥肉油而不腻',
  wz2: '川渝地区一种很有特色的年货',
  wz3: '烟熏',
  wz4: '久藏不腐，腊香味美',
  wz5: '上席佐餐均适宜',
  wz6: '烟熏：烟熏腊肉',
  img: '../image/川菜烹饪方式/yanx.png',
  wz7: '川渝地区一道很有特色的年货',
  video: '../video/yx.mp4'

}, {
  wz1: '一道传统烹饪工艺',
  wz2: '肥瘦相间，肥而不腻',
  wz3: '红烧',
  wz4: '香甜松软，入口即化',
  wz5: '中国各地流传甚广',
  wz6: '红烧：冬尖红烧肉',
  img: '../image/川菜烹饪方式/hsr.png',
  wz7: '一道传统的烹饪工艺，在中国流传甚广',
  video: '../video/hs.mp4'


}, {
  wz1: '川渝地区的特色名菜',
  wz2: '油而不腻，辣而不燥',
  wz3: '水煮',
  wz4: '麻而不苦，肉质滑嫩',
  wz5: '麻上头，辣过瘾',
  wz6: '水煮系列：水煮鱼',
  img: '../image/川菜烹饪方式/szy.png',
  wz7: '由自贡水煮牛肉演变而来，油而不腻，辣而不燥，麻而不苦，肉质滑嫩',
  video: '../video/sz.mp4'

}]



function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}


function wzEvent(cnt1) {
  for (let i = 0; i < sons.length; i++) {
    // console.log(sons[i])
    // console.log(wzs[cnt1][`wz${i + 1}`]);
    sons[i].innerHTML = wzs[cnt1][`wz${i + 1}`]
  }
  z2.innerHTML = wzs[cnt]['wz7']
  bt.innerHTML = wzs[cnt1]['wz6']
  hg.src = wzs[cnt1]['img']
  vide.src = wzs[cnt1]['video']
  bt.style.opacity = 0
  box.style.opacity = 0
  setTimeout(() => {
    box.style.opacity = 1
    bt.style.opacity = 1

  }, 150)
}

function sbgdEvent() {
  // console.log(tu1.style.opacity, tu2.style.opacity)
  cnt++;
  if (cnt >= tus.length)
    cnt = 0
  if (tu1.style.opacity === '1') {
    y += 270
    tu1.style.transform = `rotateZ(${y}deg)`;
    tu1.style.opacity = '0'

  } else {
    y += 90
    son1.src = tus[cnt]
    wzEvent(cnt)
    tu1.style.transform = `rotateZ(${y}deg)`;
    tu1.style.opacity = '1'

  }
  if (tu2.style.opacity === '0') {
    x += 90
    son2.src = tus[cnt]
    wzEvent(cnt)
    tu2.style.transform = `rotateZ(${x}deg)`
    tu2.style.opacity = '1'
  } else {
    x += 270
    tu2.style.transform = `rotateZ(${x}deg)`
    tu2.style.opacity = '0'
  }
}

window.addEventListener('wheel', debounce(sbgdEvent, 500));

// 页面点击
son1.addEventListener('click', () => {
  bt.classList.add('act')
  let ban = document.querySelector('.banner1')
  ban.style.opacity = '1'
  ban.style.zIndex = '2'
})

son2.addEventListener('click', () => {
  bt.classList.add('act')
  let ban = document.querySelector('.banner1')
  ban.style.opacity = '1'
  ban.style.zIndex = '2'
})

//叉叉关闭
let caca = document.querySelector('.caca')
caca.addEventListener('click', () => {
  let ban = document.querySelector('.banner1')
  ban.style.opacity = '0'
  ban.style.zIndex = '0'
  bt.classList.remove('act')
  vide.pause()
})