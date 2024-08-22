const chuan = document.querySelector('.chuan');
const ju = document.querySelector('.ju');
const topFont = document.querySelector('.topfont-box');
const fontE = document.querySelector('.e');

const topFontBox = document.querySelector('.topfont-box');
const E = document.querySelector('.e');
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        topFontBox.classList.add('move');
        E.classList.add('movement');
        observer.unobserve(topFontBox);
      } else {
        console.log('Element has left the viewport');
      }
    });
  });
  observer.observe(topFontBox);
});


let totalScrollDistance = 0;
// 监听鼠标滚轮事件
window.addEventListener('wheel', (e) => {
  const video = document.querySelector('.video-container')
  const deltaY = e.deltaY; // 获取鼠标滚动的垂直方向偏移量
  totalScrollDistance += deltaY; // 更新总共滚动的距离
  console.log(totalScrollDistance);
  // 获取 .people 元素和 .people-container 元素
  const people = document.querySelector('.people');
  const container = document.querySelector('.people-container');

  if (deltaY > 0) {
    // 当鼠标向下滚动时，增加 .people 元素的宽度和高度
    const currentWidth = parseFloat(getComputedStyle(people).width);
    const currentHeight = parseFloat(getComputedStyle(people).height);
    people.style.width = (currentWidth * 1.1) + 'px';
    people.style.height = (currentHeight * 1.1) + 'px';

    // 调整 .people-container 元素的大小和位置，使 .people 元素始终保持在屏幕中间
    container.style.width = people.offsetWidth + 'px';
    container.style.height = people.offsetHeight + 'px';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
  } else {
    // 当鼠标向上滚动时，减小 .people 元素的宽度和高度
    const currentWidth = parseFloat(getComputedStyle(people).width);
    const currentHeight = parseFloat(getComputedStyle(people).height);
    people.style.width = (currentWidth * 0.9) + 'px';
    people.style.height = (currentHeight * 0.9) + 'px';

    // 同样调整 .people-container 元素的大小和位置
    container.style.width = people.offsetWidth + 'px';
    container.style.height = people.offsetHeight + 'px';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
  }
  if (totalScrollDistance > 600) {
    chuan.style.opacity = 0;
    ju.style.opacity = 0;
    topFont.style.opacity = 0;
    fontE.style.opacity = 0;
    container.style.opacity = 0;
    video.style.opacity = 1;
  }
});
