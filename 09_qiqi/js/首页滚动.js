// 获取所有的 .history-content-left-first 元素  
const firstDivs = document.querySelectorAll('.history-content-left-first');  
  
// 为每个 firstDiv 添加点击事件监听器  
firstDivs.forEach(function(div) {  
  div.addEventListener('click', function() {  
    // 重置所有元素的类名为 second-*  
    firstDivs.forEach(function(otherDiv) {  
      // 重置为 second-title, second-content, second-word, 和 second-line  
      const titleElement = otherDiv.querySelector('.first-title, .second-title');  
      const contentElement = otherDiv.querySelector('.first-content, .second-content');  
      const wordElement = otherDiv.querySelector('.first-word, .second-word');  
      const lineElement = otherDiv.querySelector('.first-line, .second-line');  
        
      if (titleElement) titleElement.className = 'second-title';  
      if (contentElement) contentElement.className = 'second-content';  
      if (wordElement) {  
        wordElement.className = 'second-word';  
        wordElement.style.display = 'none'; // 隐藏 second-word  
      }  
      if (lineElement) lineElement.className = 'second-line';  
    });  
  
    // 将被点击元素的类名切换为 first-*  
    const titleElement = this.querySelector('.second-title');  
    const contentElement = this.querySelector('.second-content');  
    const wordElement = this.querySelector('.second-word');  
    const lineElement = this.querySelector('.second-line');  
      
    if (titleElement) titleElement.className = 'first-title';  
    if (contentElement) contentElement.className = 'first-content';  
    if (wordElement) {  
      wordElement.className = 'first-word';  
      wordElement.style.display = 'block'; // 显示 first-word  
    }  
    if (lineElement) lineElement.className = 'first-line';  
  });  
});