for (let i = 1; i <= 6; i++) {
  let id = document.getElementById(`fz${i}`)
  id.addEventListener('mouseenter', () => {
    let son = id.children
    son[0].style.transform = 'rotateY(180deg)'
    son[0].style.opacity = '0'
    son[1].style.transform = 'rotateY(0deg)'
    son[1].style.opacity = '1'
  })
  id.addEventListener('mouseleave', () => {
    let son = id.children
    son[0].style.transform = 'rotateY(0deg)'
    son[0].style.opacity = '1'
    son[1].style.transform = 'rotateY(-180deg)'
    son[1].style.opacity = '0'
  })
}