
let box1 = document.querySelector('.bgbox1')
let box2 = document.querySelector('.bgbox2')

console.log(box1, box2);

let x = 111
let y = 0
// 防抖函数  
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

// 滑动事件处理函数（已添加防抖）  
const debouncedHandleTouchMove = debounce(function (event) {
  // 处理滑动事件的代码  
  if (event.deltaY > 0 && x >= 34) {
    x -= 37
    y -= 37
    box1.style.transform = `translate(${y}%)`
    box2.style.transform = `translate(${x}%)`
  }
  else if (y <= -37) {
    x += 37
    y += 37
    box1.style.transform = `translate(${y}%)`
    box2.style.transform = `translate(${x}%)`
    console.log('滑动事件向左被触发', event);
  }
  console.log('滑动事件被触发', event);
}, 200); // 200毫秒的防抖时间  

// 添加滑动事件监听器  
window.addEventListener('wheel', debouncedHandleTouchMove);