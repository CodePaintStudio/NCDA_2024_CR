// 首页整体效果
window.onload = function () {
    // 页面加载完成后，应用淡入效果  
    document.getElementById('content').style.opacity = 1;
  };  
//   细节动画
var main = document.querySelector('.main')
var img = document.querySelector('.bigzi img');  
var a1 = document.querySelector('.main .a>img:nth-child(1)');  
var a2 = document.querySelector('.main .a>img:nth-child(2)');  
var a3 = document.querySelector('.main .a>img:nth-child(3)');  

main.addEventListener('mouseenter', function() {  
    img.style.transform = 'scale(1.1)';
    a1.style.transform = 'rotateZ(1deg)'
    a2.style.transform = 'rotateZ(3deg)';
    a3.style.transform = 'rotateZ(5deg)';
});  

// main.addEventListener('mouseleave', function() {  
//     img.style.transform = 'scale(1)'; 
//     a1.style.transform = 'rotateZ(-27deg)';
//     a2.style.transform = 'rotateZ(17deg)';
//     a3.style.transform = 'rotateZ(11deg)';
// });  

