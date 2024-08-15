
function switchPage(direction) {  
    var pages = document.querySelectorAll('.page1, .page2'); // 获取所有页面元素  
    var currentPageIndex = 0; // 假设当前显示的是第一个页面  
  
    // 遍历页面元素，找到当前显示的页面，并更新索引  
    for (var i = 0; i < pages.length; i++) {  
        if (window.getComputedStyle(pages[i]).display !== 'none') {  
            currentPageIndex = i;  
            break;  
        }  
    }  
  
    // 根据方向更新索引  
    if (direction === 'prev' && currentPageIndex > 0) {  
        currentPageIndex--;  
    } else if (direction === 'next' && currentPageIndex < pages.length - 1) {  
        currentPageIndex++;  
    }  
  
    // 隐藏所有页面  
    for (var j = 0; j < pages.length; j++) {  
        pages[j].style.display = 'none';  
    }  
  
    // 显示当前页面  
    pages[currentPageIndex].style.display = 'block';  
}



document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const achieves = document.querySelectorAll('.achieve');
    const totalAchieves = achieves.length;

    function showAchieve(index) {
        achieves.forEach((achieve, i) => {
            if (i === index) {
                achieve.classList.add('active');
            } else {
                achieve.classList.remove('active');
            }
        });
    }

    document.querySelectorAll('.right-but2').forEach(button => {
        button.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % totalAchieves;
            showAchieve(currentIndex);
        });
    });

    document.querySelectorAll('.left-but2').forEach(button => {
        button.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + totalAchieves) % totalAchieves;
            showAchieve(currentIndex);
        });
    });

    // Initialize the first achieve as visible
    showAchieve(currentIndex);
});
