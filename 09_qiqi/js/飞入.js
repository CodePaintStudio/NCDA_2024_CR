// 获取要观察的元素  
const animatedDiv1 = document.getElementById('animatedDiv1');
const animatedDiv2 = document.getElementById('animatedDiv2');
const animatedDiv3 = document.getElementById('animatedDiv3');
const animatedDiv4 = document.getElementById('animatedDiv4');
const animatedDiv5 = document.getElementById('animatedDiv5'); 
const animatedDiv6 = document.getElementById('animatedDiv6'); 
const animatedDiv7 = document.getElementById('animatedDiv7'); 
const animatedDiv8 = document.getElementById('animatedDiv8'); 

// 创建一个观察器选项对象  
const options = {  
  root: null, // 使用视口作为根  
  rootMargin: '0px', // 根边界与目标边界之间的边距  
  threshold: 0.3 // 当目标元素的交叉比例达到0.1（即10%可见）时触发回调函数  
};  

// 回调函数，当目标元素的交叉状态变化时调用  
const callback = (entries, observer) => {  
  entries.forEach(entry => {  
    // 检查目标元素是否进入视口  
    if (entry.isIntersecting) {  
      // 添加动画类以开始动画  
      animatedDiv1.classList.add('animate');
      animatedDiv2.classList.add('animate');
      animatedDiv3.classList.add('animate');
      animatedDiv4.classList.add('animate');
      animatedDiv5.classList.add('animated');
      animatedDiv6.classList.add('slideInUp');
      animatedDiv6.classList.add('animate');
      animatedDiv7.classList.add('animate');
      animatedDiv8.classList.add('animate');
        
      // 可选：停止观察，因为动画已经开始  
      // observer.unobserve(animatedDiv);
    }  
  });  
};  

// 创建一个新的 IntersectionObserver 实例并传入回调函数和选项  
const observer1 = new IntersectionObserver(callback, options);


// 调用 observe 方法开始观察目标元素
observer1.observe(animatedDiv1);









const boxClasses = ['main-FifthPast-left', 'main-SixthPast-left', 'main-SeventhPast-left', 'main-ForthPast-left'];  
  
// 监听滚动事件  
window.addEventListener('scroll', checkBoxesInView);  
  
// 函数来检查盒子是否在视口中间位置  
function checkBoxesInView() {  
  boxClasses.forEach(function(boxClass) {  
    // 获取所有具有当前类名的盒子元素  
    const boxes = document.getElementsByClassName(boxClass);  
      
    // 假设每个类只有一个元素，所以我们可以直接取第一个元素  
    const box = boxes[0];  
    if (box) {  
      const rect = box.getBoundingClientRect();  
      const elementTop = rect.top;  
      const elementBottom = rect.bottom;  
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;  
      const viewportCenter = viewportHeight / 2;  
        
      // 检查元素是否在视口中间位置附近  
      if (elementTop < viewportCenter + viewportHeight / 4 && elementBottom > viewportCenter - viewportHeight / 4 && !box.classList.contains('animated')) {  
        // 如果元素在视口中间位置附近且还没有动画类，则添加动画类  
        box.classList.add('animated', 'slideInUp');  
      }  
    }  
  });  
}  
  
// 初始检查（可选，如果页面加载时元素已经在视口中间）  
checkBoxesInView();