
document.addEventListener('DOMContentLoaded', (event) => {  
  anime({  
    targets: '#try .staggering-grid-demo .el',  
    opacity: [0, 1], // 从透明到不透明  
    scale: [0.1, 1], // 从 0.1 缩放到 1  
    easing: 'easeInOutQuad', // 使用缓动函数  
    duration: 1200, // 动画持续时间（毫秒），这里我们设置为统一的  
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'}), // 延迟，使用 stagger 函数  
    autoplay: true // 自动播放动画  
  });  
});   