// 获取所有的 swiper-slide 元素  
var slides = document.querySelectorAll('.swiper-slide');  
  
// 为每个 swiper-slide 添加事件监听器  
slides.forEach(function(slide) {  
  slide.addEventListener('mouseenter', function() {  
    // 当鼠标进入时，添加 active 类  
    slide.classList.add('active');  
  });  
  
  slide.addEventListener('mouseleave', function() {  
    // 当鼠标离开时，移除 active 类  
    slide.classList.remove('active');  
  });  
});