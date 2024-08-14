const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    window.location.href = 'back3.html'
})
// 当页面滚动时显示或隐藏按钮
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

// 点击按钮回到页面顶部
function topFunction() {
    // 平滑滚动动画
    scrollToTop(1000); // 滚动时间为1000ms
    k1.src = '../images/cart-2-1.svg'
    k1.style.transform = 'rotate(-360deg)'
    wz1.style.transform = 'rotate(360deg)'
    wz1.innerText = wzs[0]
    wz.innerText = WZ[0]
    sp.currentTime = 0
    sp.pause()
    index = 1
}

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15);
    var scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}

let index = 1
const k1 = document.querySelector('.k1')
const wz1 = document.querySelector('.wz1')
const wz = document.querySelector('.wz1-1')
const sp = document.querySelector('video')
const wzs = ['材料准备', '清水处理', '干燥处理', '轮廓勾勒', '雕刻塑造', '修整调整', '上光保护']
const IMA = ['../images/cart-2-1.svg', '../images/cart-2-2.svg', '../images/cart-2-3.svg', '../images/cart-2-4.svg', '../images/cart-2-5.svg', '../images/cart-2-6.svg', '../images/cart-2-7.svg']
const WZ = ['选择形状完整、质地柔软的树叶材料，可以选择桑叶、枫叶、银杏叶等。要确保树叶没有破损或者过干', '将选好的树叶放入温水中浸泡一段时间，让其变软然后除脏物。再使用小刷子轻轻将叶子表面清洁干净。', '将清洁好的树叶晾干，并用平板或压力对象夹住，是为了防止叶片卷曲。如果叶片干燥了，要放在湿润的毛巾上再次保持几小时，让其恢复柔软和可塑性。', '使用铅笔或细线轻轻绘制出想要雕刻的图案轮廓。', '使用精细的雕刻刀具，按照轮廓勾勒，将叶片上不需要的部分逐渐切割掉，然后按照设计的形象进行细致的雕刻和塑造。', '在雕刻过程中，要根据需要对叶片上的细节进行调整和修整。一定注意保持叶片的完整性和平衡感。', '由于叶子表面容易受损和变干，要在雕刻完成后使用透明的保护剂(如蜡)进行上光，增强叶片的耐久性。']
k1.addEventListener('mouseout', () => {
    k1.style.transform = 'rotateY(0deg)' + 'scale(1)'
    wz1.style.transform = 'scale(1)'
})
k1.addEventListener('mouseover', () => {
    k1.style.transform = 'rotateY(360deg)' + 'scale(1.2)'
    wz1.style.transform = 'scale(1.2)'
})
k1.addEventListener('click', () => {
    sp.play()
    // 如果索引超出范围，重置为0
    if (index >= IMA.length) {
        index = 0;
    }
    k1.src = IMA[index]
    wz1.innerText = wzs[index]
    wz.innerText = WZ[index]
    if (index === 0) {
        sp.currentTime = 0
    }
    if (index === 1) {
        sp.currentTime = 28
    }
    if (index === 2) {
        sp.currentTime = 65
    }
    if (index === 3) {
        sp.currentTime = 110
    }
    if (index === 4) {
        sp.currentTime = 300
    }
    if (index === 5) {
        sp.currentTime = 320
    }
    if (index === 6) {
        sp.currentTime = 620
    }
    // 添加时钟动画
    k1.style.transform = 'rotate(360deg)';
    wz1.style.transform = 'rotate(-360deg)';
    // wz.style.transform = 'rotate(360deg)'
    // 增加索引
    index++;

    setTimeout(() => {
        wz.style.transform = 'rotate(-360deg)'
    }, 500)
})
const q = document.querySelector('.q')
q.addEventListener('click', function () {
    window.location.href = '../HTML/craft2.html'
})