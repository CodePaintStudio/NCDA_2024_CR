var secondTitles = document.querySelectorAll('.second-title');  
  
// 遍历每个second-title元素，添加点击事件  
secondTitles.forEach(function(title) {  
  title.addEventListener('click', function() {  
    // 移除当前active-title的active类  
    var activeTitle = document.querySelector('.active-title.active');  
    if (activeTitle) {  
      activeTitle.classList.remove('active');  
      //activeTitle.style.fontSize = '12px'; // 也可以在这里设置，但CSS类更推荐  
    }  
      
    // 给点击的second-title添加active类，并设置font-size  
    this.classList.add('active');  
    //this.style.fontSize = '24px'; // 或者通过CSS类设置  
  });  
});  