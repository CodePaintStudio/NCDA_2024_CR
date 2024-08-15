//图片显示
window.addEventListener('scroll', function() {  
  let elem1 = document.getElementById('myElement1');  
  checkIfElementIsVisible(elem1);  
});  
  
function checkIfElementIsVisible(elem1) {  
  let rect = elem1.getBoundingClientRect();  
  let viewHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);  
  
  // 检查元素是否在视口中  
  if (rect.top < viewHeight && rect.bottom > 0) {  
    // 元素在视口中，添加.visible类 
    elem1.classList.add('visible');  
  } else {  
    // 元素不在视口中，移除.visible  
    elem1.classList.remove('visible');  
  }  
}  
  
// 初次加载页面时检查元素是否可见
window.onload = function() {
  checkIfElementIsVisible(document.getElementById('myElement1'));
};



window.addEventListener('scroll', function() {
  let elem2 = document.getElementById('myElement2');
  checkIfElementIsVisible(elem2);
});

function checkIfElementIsVisible(elem2) {
  let rect = elem2.getBoundingClientRect();
  let viewHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);  
  
  // 检查元素是否在视口中  
  if (rect.top < viewHeight && rect.bottom > 0) {  
    // 元素在视口中，添加.visible类  
    elem2.classList.add('visible');  
  } else {  
    // 元素不在视口中，移除.visible类  
    elem2.classList.remove('visible');  
  }  
}  
  
// 初次加载页面时检查元素是否可见  
window.onload = function() {  
  checkIfElementIsVisible(document.getElementById('myElement2'));  
};







window.addEventListener('scroll', function() {  
  let elem3 = document.getElementById('myElement3');  
  checkIfElementIsVisible(elem3);  
});  
  
function checkIfElementIsVisible(elem3) {  
  let rect = elem3.getBoundingClientRect();  
  let viewHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);  
  
  // 检查元素是否在视口中  
  if (rect.top < viewHeight && rect.bottom > 0) {  
    // 元素在视口中，添加.visible类  
    elem3.classList.add('visible');  
  } else {  
    // 元素不在视口中，移除.visible类  
    elem3.classList.remove('visible');  
  }  
}  
  
// 初次加载页面时检查元素是否可见  
window.onload = function() {  
  checkIfElementIsVisible(document.getElementById('myElement3'));  
};






window.addEventListener('scroll', function() {  
  let elem4 = document.getElementById('myElement4');  
  checkIfElementIsVisible(elem4);  
});  
  
function checkIfElementIsVisible(elem4) {  
  let rect = elem4.getBoundingClientRect();  
  let viewHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);  
  
  // 检查元素是否在视口中  
  if (rect.top < viewHeight && rect.bottom > 0) {  
    // 元素在视口中，添加.visible类  
    elem4.classList.add('visible');  
  } else {  
    // 元素不在视口中，移除.visible类  
    elem4.classList.remove('visible');  
  }  
}  
  
// 初次加载页面时检查元素是否可见  
window.onload = function() {  
  checkIfElementIsVisible(document.getElementById('myElement4'));  
};







window.addEventListener('scroll', function() {  
  let elem5 = document.getElementById('myElement5');  
  checkIfElementIsVisible(elem5);  
});  
  
function checkIfElementIsVisible(elem5) {  
  let rect = elem5.getBoundingClientRect();  
  let viewHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);  
  
  // 检查元素是否在视口中  
  if (rect.top < viewHeight && rect.bottom > 0) {  
    // 元素在视口中，添加.visible类  
    elem5.classList.add('visible');  
  } else {  
    // 元素不在视口中，移除.visible类  
    elem5.classList.remove('visible');  
  }  
}  
  
// 初次加载页面时检查元素是否可见  
window.onload = function() {  
  checkIfElementIsVisible(document.getElementById('myElement5'));  
};




//线条显示
window.addEventListener('scroll', function() {  
  let scrollPos = window.scrollY; // 获取滚动距离  
  let verticalLine = document.querySelector('.vertical-line');  
    
  // 根据滚动距离设置透明度，这里假设当滚动距离超过100px时开始浮现  
  if (scrollPos > 100) {  
    let opacity = Math.min(1, scrollPos / 1000); // 示例中的公式，可以根据需要调整  
      verticalLine.style.opacity = opacity.toString();  
  } else {  
      verticalLine.style.opacity = '0'; // 滚动距离不够时保持透明  
  }  
});



// 文字浮现
window.addEventListener('scroll', function() {  
  var floatingDiv = document.getElementById('floating-div1');  
  var floatingDivTop = floatingDiv.getBoundingClientRect().top;  
  var windowHeight = window.innerHeight;  

  // 检查div是否进入视口（这里假设当div顶部距离视口顶部小于视口高度时开始浮现）  
  if (floatingDivTop < windowHeight) {  
      // 根据滚动距离和div位置计算透明度  
      var opacity = Math.max(0, Math.min(1, 1 - floatingDivTop / (windowHeight * 1.5)));  
      // 设置div的透明度  
      floatingDiv.style.opacity = opacity.toString();  
  }  
});




window.addEventListener('scroll', function() {  
  var floatingDiv = document.getElementById('floating-div2');  
  var floatingDivTop = floatingDiv.getBoundingClientRect().top;  
  var windowHeight = window.innerHeight;  

  // 检查div是否进入视口（这里假设当div顶部距离视口顶部小于视口高度时开始浮现）  
  if (floatingDivTop < windowHeight) {  
      // 根据滚动距离和div位置计算透明度  
      var opacity = Math.max(0, Math.min(1, 1 - floatingDivTop / (windowHeight * 1.5)));  
      // 设置div的透明度  
      floatingDiv.style.opacity = opacity.toString();  
  }  
});




window.addEventListener('scroll', function() {  
  var floatingDiv = document.getElementById('floating-div3');  
  var floatingDivTop = floatingDiv.getBoundingClientRect().top;  
  var windowHeight = window.innerHeight;  

  // 检查div是否进入视口（这里假设当div顶部距离视口顶部小于视口高度时开始浮现）  
  if (floatingDivTop < windowHeight) {  
      // 根据滚动距离和div位置计算透明度  
      var opacity = Math.max(0, Math.min(1, 1 - floatingDivTop / (windowHeight * 1.5)));  
      // 设置div的透明度  
      floatingDiv.style.opacity = opacity.toString();  
  }  
});



window.addEventListener('scroll', function() {  
  var floatingDiv = document.getElementById('floating-div4');  
  var floatingDivTop = floatingDiv.getBoundingClientRect().top;  
  var windowHeight = window.innerHeight;  

  // 检查div是否进入视口（这里假设当div顶部距离视口顶部小于视口高度时开始浮现）  
  if (floatingDivTop < windowHeight) {  
      // 根据滚动距离和div位置计算透明度  
      var opacity = Math.max(0, Math.min(1, 1 - floatingDivTop / (windowHeight * 1.5)));  
      // 设置div的透明度  
      floatingDiv.style.opacity = opacity.toString();  
  }  
});window.addEventListener('scroll', function() {  
  var floatingDiv = document.getElementById('floating-div1');  
  var floatingDivTop = floatingDiv.getBoundingClientRect().top;  
  var windowHeight = window.innerHeight;  

  // 检查div是否进入视口（这里假设当div顶部距离视口顶部小于视口高度时开始浮现）  
  if (floatingDivTop < windowHeight) {  
      // 根据滚动距离和div位置计算透明度  
      var opacity = Math.max(0, Math.min(1, 1 - floatingDivTop / (windowHeight * 1.5)));  
      // 设置div的透明度  
      floatingDiv.style.opacity = opacity.toString();  
  }  
});



window.addEventListener('scroll', function() {  
  var floatingDiv = document.getElementById('floating-div5');  
  var floatingDivTop = floatingDiv.getBoundingClientRect().top;  
  var windowHeight = window.innerHeight;  

  // 检查div是否进入视口（这里假设当div顶部距离视口顶部小于视口高度时开始浮现）  
  if (floatingDivTop < windowHeight) {  
      // 根据滚动距离和div位置计算透明度  
      var opacity = Math.max(0, Math.min(1, 1 - floatingDivTop / (windowHeight * 1.5)));  
      // 设置div的透明度  
      floatingDiv.style.opacity = opacity.toString();  
  }  
});