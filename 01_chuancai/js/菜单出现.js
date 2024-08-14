let dh = document.querySelector('.dh')

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
  dh.classList.toggle('move')
}

for (let i = 1; i <= 5; i++) {
  let op = document.querySelector(`.op${i}`)
  op.addEventListener('mouseenter', () => {
    let bqq = document.querySelector(`.bqq${i}`)
    let qwq = document.getElementById(`qwq${i}`)
    // console.log(bqq)
    bqq.style.opacity = '1'
    qwq.style.color = '#FFF'
    qwq.style.backgroundColor = '#434343'
  })

  op.addEventListener('mouseleave', () => {
    let bqq = document.querySelector(`.bqq${i}`)
    let qwq = document.getElementById(`qwq${i}`)
    bqq.style.opacity = '0'
    qwq.style.color = '#363636'
    qwq.style.backgroundColor = '#fff'
  })
}

window.onclick = function (event) {
  if (!event.target.matches('.dropdown') && !event.target.matches('.dh')) {
    let dropdowns = document.querySelector(".dropdown");
    // console.log(dropdowns)
    dropdowns.classList.remove('show')
    dh.classList.remove('move')
  }
}