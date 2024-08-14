const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    window.location.href = '../back.html'
})
const wz = document.querySelector('.wz')
const wz2 = document.querySelector('.wz2')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const footer = document.querySelector('.footer')
const imgs = footer.querySelectorAll('img')
const Images = ['./images/JPG-1.svg', './images/JPG-2-2.svg', './images/JPG-3-3.svg', './images/JPG-4-4.svg']
const images = ['./images/JPG-5.svg', './images/JPG-2.svg', './images/JPG-3.svg', './images/JPG-4.svg']
const wzs = ['单色叶雕', '拼色叶雕', '异型叶雕', '变色叶雕']
const wz2s = ['利用叶子本身的颜色(如绿的杨叶，红的黄栌叶，黄的银杏叶等)进行雕琢，作品纯朴、自然，尽显大自然质朴的神韵。', '利用不同植物叶片的多种色彩，根据作品要求刻成各种图案进行拼色处理，这是一种最新创作的艺术形式。', '根据叶子在生长过程中因外界因素造成的奇特形状，设计一种与叶形相对应的内容，或根据叶子的残缺进行雕琢。', '利用植物叶本身的色斑、病斑和叶子在秋天色彩变化中，由于着阳不均，或突然受冻等原因，在同一叶面上形成的多种色彩进行构图，使整个画面充满活力和灵气，充分彰显大自然色彩的奇妙变化和无尽魅力。']
let i = 0
btn2.addEventListener('click', function () {
    i = i % 4; // 更新i的值，确保在0、1、2、3之间循环
    main.style.backgroundImage = `url(${Images[i]})`; // 切换背景图片
    wz.innerText = wzs[i]
    wz2.innerText = wz2s[i]
    i = i + 1
})
let j = 0
btn3.addEventListener('click', function () {
    if (j === 0) {
        j = Images.length
    }
    j = j - 1
    main.style.backgroundImage = `url(${Images[j]})`; // 切换背景图片
    wz.innerText = wzs[j]
    wz2.innerText = wz2s[j]
})
imgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        // let m = img.src
        // let TP = main.style.backgroundImage
        // const k1 = Images.indexOf(TP)
        // const K2 = images.indexOf(m)
        // img.src = `url(${images[k1]})`
        main.style.backgroundImage = `url(${Images[index]})`
        wz.innerText = wzs[index]
        wz2.innerText = wz2s[index]
    })
})