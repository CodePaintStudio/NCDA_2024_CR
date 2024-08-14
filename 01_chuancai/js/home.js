document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    let hg = document.querySelector('.hg')
    console.log(hg);
    hg.style.transform = 'translateY(0)'
    setTimeout(() => {
      let yanw = document.querySelector('.yanw')
      yanw.style.opacity = '1'
      yanw.classList.add('show1')
    }, 2000)
  }, 100)

})