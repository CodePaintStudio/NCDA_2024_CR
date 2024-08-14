const btn = document.querySelector('.btn')
console.log(btn);
btn.addEventListener('click', () => {
    window.location.href = 'Back.html'
})
const wz = document.querySelector('.wz').querySelector('span')
const wz2 = document.querySelector('.wz2').querySelector('span')
const body = document.body
const footer = document.querySelector('.footer')
const imgs = footer.querySelectorAll('img')
const Images = ['../images/JPG-1.svg', '../images/JPG-2-2.svg', '../images/JPG-3-3.svg', '../images/JPG-4-4.svg']
const images = ['../images/JPG-5.svg', '../images/JPG-2.svg', '../images/JPG-3.svg', '../images/JPG-4.svg']
const wzs = ['单色叶雕', '拼色叶雕', '异型叶雕', '变色叶雕']
const wz2s = ['利用叶子本身的颜色(如绿的杨叶，红的黄栌叶，黄的银杏叶等)进行雕琢，作品纯朴、自然，尽显大自然质朴的神韵。', '利用不同植物叶片的多种色彩，根据作品要求刻成各种图案进行拼色处理，这是一种最新创作的艺术形式。', '根据叶子在生长过程中因外界因素造成的奇特形状，设计一种与叶形相对应的内容，或根据叶子的残缺进行雕琢。', '利用植物叶本身的色斑、病斑和叶子在秋天色彩变化中，由于着阳不均，或突然受冻等原因，在同一叶面上形成的多种色彩进行构图，使整个画面充满活力和灵气，充分彰显大自然色彩的奇妙变化和无尽魅力。']

let i = 0
imgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        i = index
        // console.log(index)
        body.style.backgroundImage = `url(${Images[index]})`
        img.src = images[index]
        wz.innerText = wzs[index]
        wz2.innerText = wz2s[index]
    })
})

let imageIndex = 1 // 假设我们从 'image1.jpg' 开始，所以索引为1  
const imageChangeInterval = 2000; // 每3秒更改一次图片  
// 更改背景图片的函数  
function changeBackground() {
    body.style.backgroundImage = `url('${Images[imageIndex - 1]}')`; // 减1是因
    wz.innerText = wzs[imageIndex - 1]
    wz2.innerText = wz2s[imageIndex - 1]
    // 为我们假设从1开始计数  
    imageIndex++;
    if (imageIndex > Images.length) {
        imageIndex = 1; // 重置为第一张图片  
    }
}
// 使用setInterval来定期更改背景图片  
setInterval(changeBackground, imageChangeInterval);