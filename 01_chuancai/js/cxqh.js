for (let i = 1; i <= 3; i++) {
  const px = document.getElementById(`px${i}`)
  console.log(px)
  if (px) {
    px.addEventListener('click', () => {
      const sho = document.querySelector('.show1')
      // console.log(sho)
      sho.classList.remove('show1')
      const sho1 = document.querySelector('.show2')
      console.log(sho1)
      sho1.classList.remove('show2')
      const wz = document.getElementById(`wzs${i}`)
      wz.classList.add('show1')
      const tu = document.getElementById(`tu${i}`)
      tu.classList.add('show2')
    })
  }
}

for (let i = 1; i <= 3; i++) {
  const tu = document.getElementById(`tu${i}`)
  if (tu) {
    tu.addEventListener('click', () => {
      const banner = document.querySelector(`.banner${i}`)
      console.log(banner)
      banner.classList.add('show3')
    })
  }
}

for (let i = 1; i <= 3; i++) {
  const caca = document.getElementById(`caca${i}`)
  if (caca) {
    caca.addEventListener('click', () => {
      const banner = document.querySelector(`.banner${i}`)
      banner.classList.remove('show3')
    })
  }
}