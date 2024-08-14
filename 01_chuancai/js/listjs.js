let mulu = document.querySelector('.mulu')
let la = document.querySelector('.la')
let xian = document.querySelector('.xian')
let ma = document.querySelector('.ma')
let xiang = document.querySelector('.xiang')
let qq = document.querySelectorAll('.qq')
document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    mulu.style.opacity = '1'
    mulu.style.visibility = 'visible'
  }, 500)
  setTimeout(() => {
    la.style.opacity = '1'
    la.style.visibility = 'visible'
    la.classList.add('active')
  }, 1000)
  setTimeout(() => {
    xian.style.opacity = '1'
    xian.style.visibility = 'visible'
    xian.classList.add('active')
  }, 1500)
  setTimeout(() => {
    ma.style.opacity = '1'
    ma.style.visibility = 'visible'
    ma.classList.add('active')
  }, 1750)
  setTimeout(() => {
    xiang.style.opacity = '1'
    xiang.style.visibility = 'visible'
    xiang.classList.add('active')
  }, 1750)
  setTimeout(() => {
    for (let k = 0; k < qq.length; k++) {
      qq[k].style.opacity = '1'
      qq[k].style.visibility = 'visible'

    }
  }, 1750)
})