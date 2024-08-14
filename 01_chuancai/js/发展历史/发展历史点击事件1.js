// 确保DOM已经加载完成  
document.addEventListener('DOMContentLoaded', function() {  
  // 获取所有具有 .main-choose-right-one 类的元素  
  let elements = document.querySelectorAll('.main-choose-right-one');
  // console.log(elements.length);
  
  // 为每个元素添加点击事件监听器  
  elements.forEach(function(element) {  
    element.addEventListener('click', function(event) {  
      // 移除其他所有元素上的 BeChoosedDetails 类  
      elements.forEach(function(otherElement) {  
        otherElement.classList.remove('BeChoosedDetails');  
      });
        
      // 为被点击的元素添加 BeChoosedDetails 类  
      event.target.classList.add('BeChoosedDetails');  
    });  
  });  
  // console.log('成功');
});



// 大选的点击事件
document.addEventListener('DOMContentLoaded', function() {  
  var items = document.querySelectorAll('.main-choose-left-one');  

  items.forEach(function(item) {  
      item.addEventListener('click', function() {  
          items.forEach(function(otherItem) {  
              otherItem.classList.remove('BeChoosed');  
          });  
            
          this.classList.add('BeChoosed');  
      });  
  });  
});