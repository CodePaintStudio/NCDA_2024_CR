const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    window.location.href = 'Back.html'
})

const btn1 = document.querySelector('.btn1')
const img1 = btn1.querySelector('.img')
const border1 = document.querySelector('.border1')
const border2 = document.querySelector('.border2')
btn1.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = '../HTML/craft_01.html'
        border1.style.opacity = '0'
    }, 3400)
    border1.style.transform += 'scale(1.5)' + 'rotate(90deg)'
    border1.style.left = '60vw'
    border1.style.border = '1px solid #000'
    btn1.style.opacity = '0'
    border1.style.opacity = '0'
    setTimeout(() => {
        k1.style.width = '120vw'
        k1.style.height = '120vh'
        k1.style.backgroundPosition = 'right'
        k1.style.backgroundSize = 'cover'
        k1.style.top = '-25vh'
        k1.style.left = '0'
        wz.style.opacity = '0'
        wz2.style.opacity = '0'
        btn2.style.opacity = '0'
        border2.style.opacity = '0'
        k2.style.opacity = '0'
        k3.style.opacity = '0'
    }, 1500)
})

const btn2 = document.querySelector('.btn2')
btn2.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = '../HTML/craft_02.html'
        border2.style.opacity = '0'
    }, 3400)
    border2.style.transform += 'scale(1.5)' + 'rotate(90deg)'
    border2.style.left = '20vw'
    border2.style.border = '1px solid #000'
    btn2.style.opacity = '0'
    border2.style.opacity = '0'
    setTimeout(() => {
        k2.style.width = '120vw'
        k2.style.height = '120vh'
        k2.style.backgroundPosition = 'right'
        k2.style.backgroundSize = 'cover'
        k2.style.top = '-25vh'
        k2.style.left = '0'
        wz3.style.opacity = '0'
        wz3.style.left = '120vw'
        wz4.style.opacity = '0'
        wz4.style.left = '120vw'
        btn2.style.opacity = '0'
        border2.style.opacity = '0'
        k1.style.opacity = '0'
        k3.style.opacity = '0'
    }, 1500)
})

const k1 = document.querySelector('.box1')
const k2 = document.querySelector('.box2')
const k3 = document.querySelector('.k3')
const wz = k1.querySelector('.wz')
const wz2 = k1.querySelector('.wz2')
const wz3 = k2.querySelector('.wz3')
const wz4 = k2.querySelector('.wz4')