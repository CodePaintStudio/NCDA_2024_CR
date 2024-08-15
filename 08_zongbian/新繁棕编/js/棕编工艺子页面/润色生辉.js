// document.addEventListener('DOMContentLoaded', function () {
//     const items = document.querySelectorAll('.item');
//     let activeItem = null;

//     items.forEach(item => {
//         item.querySelector('.point').addEventListener('click', function () {
//             const content = item.querySelector('.content-1, .content-2, .content-3, .content-4, .content-5, .content-6');

//             if (activeItem && activeItem !== item) {
//                 activeItem.querySelector('.pointer').classList.remove('active');
//                 activeItem.querySelector('.point').classList.remove('active');
//                 activeItem.querySelector('.content-1, .content-2, .content-3, .content-4, .content-5, .content-6').classList.remove('active');
//             }

//             const isActive = content.classList.contains('active');
//             content.classList.toggle('active', !isActive);
//             this.classList.toggle('active', !isActive);
//             item.querySelector('.pointer').classList.toggle('active', !isActive);

//             if (!isActive) {
//                 content.style.height = content.scrollHeight + 'px';
//             } else {
//                 content.style.height = 0;
//             }

//             activeItem = isActive ? null : item;
//         });
//     });
// });





document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');
    let activeItem = null;

    items.forEach(item => {
        item.querySelector('.point').addEventListener('click', function () {
            const content = item.querySelector('.content-1, .content-2, .content-3, .content-4, .content-5, .content-6');
            const header = item.querySelector('.item-header');
            const newImage = header.getAttribute('data-image');

            if (activeItem && activeItem !== item) {
                const activeHeader = activeItem.querySelector('.item-header');
                activeHeader.style.backgroundImage = '';
                activeItem.querySelector('.pointer').classList.remove('active');
                activeItem.querySelector('.point').classList.remove('active');
                activeItem.querySelector('.content-1, .content-2, .content-3, .content-4, .content-5, .content-6').classList.remove('active');
                activeItem.querySelector('.item-header').style.backgroundImage = ''; // 还原背景图片
            }

            const isActive = content.classList.contains('active');
            content.classList.toggle('active', !isActive);
            this.classList.toggle('active', !isActive);
            item.querySelector('.pointer').classList.toggle('active', !isActive);

            if (!isActive) {
                content.style.height = content.scrollHeight + 'px';
                header.style.backgroundImage = `url(${newImage})`;
            } else {
                content.style.height = 0;
                header.style.backgroundImage = '';
            }

            activeItem = isActive ? null : item;
        });
    });
});
