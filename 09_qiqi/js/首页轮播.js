// 假设HTML结构如上所示，并且已经加载到DOM中  
let index = 0; // 当前显示的图片索引  
const images = document.querySelectorAll('.headMain-content-image li'); // 获取所有的li元素  
const totalImages = images.length; // 图片总数  
  
// 初始化，只显示第一张图片  
images.forEach((img, i) => {  
  img.classList.remove('active'); // 移除所有li的active类  
  if (i === 0) {  
    img.classList.add('active'); // 为第一张图片添加active类  
  }  
});  
  
// 轮播函数  
function carousel() {  
  images[index].classList.remove('active'); // 移除当前图片的active类  
  index = (index + 1) % totalImages; // 更新索引，如果到达末尾则回到开头  
  images[index].classList.add('active'); // 为下一张图片添加active类  
}  
  
// 设置轮播间隔时间，例如每3秒轮播一次  
setInterval(carousel, 3000);