
let cuan = document.querySelector('.cuan')
let cai = document.querySelector('.cai')
let yi = document.querySelector('.yi')
let zs = document.querySelector('.zs')

// let pos = [-15.1852, -4.2593, -16.5741, -3.9815, -1.1111]
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    cuan.style.top = '21.8519vh';
    cuan.style.left = '10.3646vw;';
    cai.style.top = ' 70.0926vh';
    cai.style.left = ' 18.8542vw';
    yi.style.opacity = '1'
    yi.style.visibility = 'visible'
    let act = zs.children
    for (let k = 0; k < act.length; k++) {
      if ((k + 1) % 2 === 0) {
        act[k].classList.remove('yd1')
      } else {
        act[k].classList.remove('yd')
      }
    }

  }, 100)
})