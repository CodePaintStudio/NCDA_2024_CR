document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.special-img > div');
    const imgCount = imgs.length;
    let currentIndex = 0;

    function updateCarousel() {
        imgs.forEach((img, index) => {
            let offset = index - currentIndex;
            if (offset < -1) {
                offset += imgCount;
            } else if (offset > 1) {
                offset -= imgCount;
            }

            if (offset === 0) {
                img.style.transform = `translateX(0) scale(1)`;
                img.style.zIndex = 2;
                img.style.opacity = 1;
            } else if (offset === 1 || offset === -1) {
                img.style.transform = `translateX(${offset * 350}px) scale(0.8)`;
                img.style.zIndex = 1;
                img.style.opacity = 0.8;
            } else {
                img.style.transform = `translateX(${offset * 900}px) scale(0.6)`;
                img.style.zIndex = 0;
                img.style.opacity = 0;
            }
        });
    }

    document.querySelector('.but-left').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : imgCount - 1;
        updateCarousel();
    });

    document.querySelector('.but-right').addEventListener('click', () => {
        currentIndex = (currentIndex < imgCount - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    function startAutoCarousel() {
        setInterval(() => {
            currentIndex = (currentIndex < imgCount - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        }, 2000); // 2秒自动切换
    }

    startAutoCarousel(); // 启动自动切换

    updateCarousel();
});




document.addEventListener('DOMContentLoaded', () => {
    const imgContent = document.querySelector('.img-content');
    const img1 = document.querySelector('.material-img1');
    const imgElements = document.querySelectorAll('.material-img2to6 > div');

    const contents = [
        `
        <div>RAW LACQUER</div>
        <div>生漆</div>
        <div>生漆，又称“土漆”、“国漆”或“大漆”，是从漆树上采割的一种乳白色纯天然液体涂料。当这种涂料接触空气后，它会逐步转为褐色，并在大约4小时后表面干涸硬化，形成漆膜。生漆的经济价值很高，具有耐腐、耐磨、耐酸、耐溶剂、耐热、隔水和绝缘性好、富有光泽等特性。</div>
        `,
        `
        <div>TIMBER</div>
        <div>木材</div>
        <div>用木材做漆器内胎的历史非常悠久，前面出来吐槽的新石器时期的河姆渡漆碗，就是一件木胎漆器，到了战国大部分漆器仍采用木胎。制作漆器内胎的木材，在挑选上非常讲究，一般都选用陈年旧料，因为这样不容易变形和干裂了，而且最好用上好的红松、楠木，桐木、杨木、柳木，红木等木质细密的木材。</div>
        `,
        `
        <div>GOLD FOIL</div>
        <div>金箔</div>
        <div>汉代漆器镶嵌工艺的贴主要指金银箔贴花，是将极薄的金、银片事先裁刻成各种纹样，然后粘附在漆器表面的做法。商代墓葬中已经有漆器贴饰半圆形金片，金片上还阴刻云雷纹，已经初具金箔贴花的特征。这种技法在历史长河中不绝如缕，直到西汉中晚期才一下子兴盛起来。</div>
        `,
        `
        <div>SILVER FOIL</div>
        <div>银箔</div>
        <div>唐代漆器工艺如同其社会形态一样先进发达，为了炫耀富丽堂皇的生活，贵族使用的漆器上大量运用金银做装饰。 工匠们将金银熔化，制成箔片，并剪镂成各种花纹;然后，将金银箔片贴于漆器表面，再涂上两三层漆，待干后研磨，让漆层下的金银箔片显露出来；最后，形成与漆底在一个平面上的装饰纹样。</div>
        `,
        `
        <div>SEASHELL</div>
        <div>贝壳</div>
        <div>镶嵌螺钿的原材料主要取材于淡水湖中的三角蚌、河蚌等。这些蚌贝年龄越长，其效果越佳。先将贝壳高温处理，然后用钢丝锯切割贝壳，取下壳内发亮部分的珠光层，再进行打磨，根据需要切片、切粒、切条等。然后把调和成的漆涂在漆器的表面，用镊子、牙签或手指，将加工后的贝壳巧妙地镶嵌黏牢在漆器上，形成图案或纹饰。</div>
        `
    ];

    imgElements.forEach((imgElement, index) => {
        imgElement.addEventListener('click', () => {
            updateContent(index);
            updateBackground(imgElement);
        });
    });

    function updateContent(index) {
        imgContent.innerHTML = contents[index];
        imgContent.style.display = 'flex'; // 显示内容
    }

    function updateBackground(clickedElement) {
        const bgImage = getComputedStyle(clickedElement).backgroundImage;
        img1.style.backgroundImage = bgImage;
    }
});





    document.addEventListener('DOMContentLoaded', function() {
        // Get the video element
        var video = document.getElementById('myVideo');

        // Get the video-begin element
        var videoBegin = document.querySelector('.video-begin');

        // Add click event listener to the video-begin element
        videoBegin.addEventListener('click', function() {
            // Start playing the video
            video.play();
            // Hide the video-begin element after playing the video
            videoBegin.style.display = 'none';
        });
    });

