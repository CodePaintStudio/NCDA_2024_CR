for (let i = 1; i <= 5; i++) {
  let hoverable = document.querySelector(`.bq${i}`)
  hoverable.addEventListener('mouseenter', () => {
    let js = document.querySelector(`.js${i}`)
    let bq = document.getElementById(`b${i}`)
    js.style.color = 'black'
    js.style.transform = 'scale(1.2)'
    bq.style.transform = 'scale(1.2)'
    bq.style.filter = 'brightness(1)'
    hoverable.style.width = '19.5313vw'
    hoverable.style.height = '49.1667vh'
    hoverable.style.filter = ' brightness(1)';
  })

  hoverable.addEventListener('mouseleave', () => {
    let js = document.querySelector(`.js${i}`)
    let bq = document.getElementById(`b${i}`)
    js.style.color = '#fff'
    bq.style.transform = 'scale(1)'
    js.style.transform = 'scale(1)'
    hoverable.style.filter = ' brightness(0.5)';

    bq.style.filter = 'brightness(0.8)'
    hoverable.style.width = '18.2292vw'
    hoverable.style.height = '45.8333vh'
  })
}