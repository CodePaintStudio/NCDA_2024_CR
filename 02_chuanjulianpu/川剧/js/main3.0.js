
const body = document.body;
const biaotiElements = document.querySelectorAll('.biaoti');
const biaoTi1 = document.querySelector('.chaunjubianlian');
const biaoTi2 = document.querySelector('.changqiang');
const biaoTi3 = document.querySelector('.jiaose');
for (var i = 0; i < biaotiElements.length; i++) {
  biaotiElements[i].addEventListener('click', function () {
    // 移除所有"biaoti"元素的active类属性
    for (var j = 0; j < biaotiElements.length; j++) {
      biaotiElements[j].classList.remove('active');
    }
    this.classList.add('active');
    if (this === biaotiElements[0]) {
      body.classList.add('bigger')
      biaoTi1.style.display = "block";
      biaoTi2.style.display = "none";
      biaoTi3.style.display = "none";
    } else if (this === biaotiElements[1]) {
      body.classList.remove('bigger');
      biaoTi1.style.display = "none";
      biaoTi2.style.display = "block";
      biaoTi3.style.display = "none";
    } else if (this === biaotiElements[2]) {
      body.classList.remove('bigger');
      biaoTi1.style.display = "none";
      biaoTi2.style.display = "none";
      biaoTi3.style.display = "block";
    }
  });
}
const carousel = document.querySelector('.carousel');
const jiaose = document.querySelector('.jiaose-box');
const yinzhang = document.querySelector('.yinzhang');
const boxes = document.querySelectorAll('.box');
const returnButton = document.querySelector('.return-button');

yinzhang.addEventListener('click', function () {
  // Add rotate class to yinzhang
  yinzhang.classList.add('rotate');

  // After a short delay, add shrink class to both yinzhang and boxes
  setTimeout(() => {
    boxes.forEach(box => box.classList.add('shrink'));
    yinzhang.classList.add('shrink');
    // returnButton.classList.remove('hidden'); // Show the return button after shrink
  }, 1000); // Wait 0.5 seconds before shrinking
  setTimeout(() => {
    jiaose.style.display = "none"
    carousel.style.display = "block"
  }, 2000)
});

returnButton.addEventListener('click', function () {
  carousel.style.display = "none"
  jiaose.style.display = "block"
  // Remove rotate and shrink classes to restore original state
  yinzhang.classList.remove('rotate', 'shrink');
  boxes.forEach(box => box.classList.remove('shrink'));
  returnButton.classList.add('hidden'); // Hide the return button
});

const sediaoPic = document.querySelector('.sediao-pic');
const sediaoFont = document.querySelector('.sediao-font');
const sediaoText = document.querySelector('.sediao-text');
const tuanBox = document.querySelector('.tuan-box');
const bianQian = document.querySelector('.bianqian')
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sediaoPic.style.marginLeft = '10vw';
        sediaoFont.style.marginLeft = '33vw';
        sediaoText.style.marginLeft = '28vw';
        observer.unobserve(bianQian);
      } else {
        console.log('Element has left the viewport');
      }
    });
  });
  observer.observe(bianQian);
});

const text1 = `
颜色是最基本的角色标志
川剧脸谱以颜色展现人物特征
其用色定掉毛原则是以中国传统
文化和中国人长期形成的欣赏习
惯为依据的`;
const text2 = `
青少年的造型
展现人物血气方刚，风华正
茂等特点
一般以鼻为界，只勾脸的上半部分`

let index1 = 0;
let index2 = 0;
const speed1 = 10;
function typeWriter1() {
  if (index1 < text1.length) {
    sediaoText.innerHTML += text1.charAt(index1);
    index1++;
    setTimeout(typeWriter1, speed1);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  typeWriter1();
});

const tuanText = document.querySelector('.tuan-text');

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // typeWriter2();
        observer.unobserve(tuanText);
        setTimeout(() => {
          tuanBox.classList.add('visible');
        }, 500)

      } else {
        console.log('Element has left the viewport');
      }
    });
  });
  observer.observe(tuanText);
});

const tuanMask = document.querySelector('.tuan-mask');

window.addEventListener('scroll', function () {
  let scrollDistance = window.scrollY;
  console.log(scrollDistance);

  if (scrollDistance >= 252) {
    // 计算新的 marginTop 值
    let newMarginTop = scrollDistance - 450;
    // 将新的值设置到 tuanMask 的 marginTop 样式属性上，并加上单位 'px'
    tuanMask.style.marginTop = newMarginTop + 'px';
  } else {
    // 当滚动距离小于 252 时，将 marginTop 重置为 0
    tuanMask.style.marginTop = '0px';
  }
});


const loulianText = document.querySelector('.loulian-text');
const speed2 = 80;
function typeWriter2() {
  if (index2 < text2.length) {
    if (text2.charAt(index2) === '\n') {
      loulianText.innerHTML += '<br>';
    } else {
      loulianText.innerHTML += text2.charAt(index2);
    }
    index2++;
    setTimeout(typeWriter2, speed2);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeWriter2();
        observer.unobserve(loulianText);
      } else {
        console.log('Element has left the viewport');
      }
    });
  });
  observer.observe(loulianText);
});

const tubiaos = document.querySelectorAll('.tubiao');
tubiaos.forEach(tubiao => {
  tubiao.addEventListener('mouseover', () => {
    tubiao.style.transform = 'rotate(360deg)';
  });

  tubiao.addEventListener('mouseout', () => {
    tubiao.style.transform = 'rotate(0deg)';
  });
});

// 获取盒子元素
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const chuiLian = document.querySelector('.face-box1');
const moLian = document.querySelector('.face-box2');
const cheLian = document.querySelector('.face-box3');
const yunQiBianLian = document.querySelector('.face-box4');
// 添加点击事件监听器
red.addEventListener('click', function() {
    moLian.style.opacity = '0';
    cheLian.style.opacity = '0';
    yunQiBianLian.style.opacity = '0';
    chuiLian.style.opacity = '1';
});
blue.addEventListener('click', function() {
  cheLian.style.opacity = '0';
  yunQiBianLian.style.opacity = '0';
  chuiLian.style.opacity = '0';
  moLian.style.opacity = '1';
});
yellow.addEventListener('click', function() {
  moLian.style.opacity = '0';
  yunQiBianLian.style.opacity = '0';
  chuiLian.style.opacity = '0';
  cheLian.style.opacity = '1';
});
green.addEventListener('click', function() {
  moLian.style.opacity = '0';
  cheLian.style.opacity = '0';
  chuiLian.style.opacity = '0';
  yunQiBianLian.style.opacity = '1';
});