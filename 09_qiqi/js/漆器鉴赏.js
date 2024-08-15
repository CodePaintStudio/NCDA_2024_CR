
document.addEventListener("DOMContentLoaded", function() {
    const switchButtons = document.querySelectorAll('.switch-bar > div');
    const pages = document.querySelectorAll('.page > div');

    function resetSwiLines() {
        switchButtons.forEach(function(btn) {
            const line = btn.querySelector('.swi-line');
            if (line) {
                line.style.width = '0';
            }
        });
    }

    function showPage(index) {
        pages.forEach(function(page, pageIndex) {
            if (pageIndex === index) {
                page.style.display = 'grid';
            } else {
                page.style.display = 'none';
            }
        });

        resetSwiLines();
        const selectedButton = switchButtons[index];
        const line = selectedButton.querySelector('.swi-line');
        if (line) {
            line.style.width = '50%';
        }
    }

    switchButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            showPage(index);
        });
    });

    // 默认显示第一个页面
    showPage(0);
});

