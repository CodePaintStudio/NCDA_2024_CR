let title = document.querySelector('#title')
let b = document.querySelector('body')
let body = document.querySelector('.body1')
let main2 = document.querySelector('.main2')
let main2bg = document.querySelector('.main2-bg')
title.addEventListener('click',function(){
  main2.style.display = 'block'
  setTimeout(()=>{
      body.style.transform = 'translateY(-960px)'
    //   body.style.display = 'none'  
      b.style.height = '1100px'
      b.style.overflow = 'inherit'
      main2.style.transform = 'translateY(-960px)'},0)
    
    
})



document.querySelectorAll('.font').forEach(font => {
  font.addEventListener('mouseenter', (event) => {
    let main2bg = document.querySelector('.main2-bg');
    let rect = font.getBoundingClientRect();
    let main2Rect = document.querySelector('.main2').getBoundingClientRect();
    
    // 计算transform-origin
    let originX = ((rect.left + rect.width / 2) - main2Rect.left) / main2Rect.width * 100;
    let originY = ((rect.top + rect.height / 2) - main2Rect.top) / main2Rect.height * 100;
    
    main2bg.style.transformOrigin = `${originX}% ${originY}%`;
    main2bg.style.transform = 'scale(1.5)';
  });

  font.addEventListener('mouseleave', () => {
    let main2bg = document.querySelector('.main2-bg');
    main2bg.style.transform = 'scale(1)';
  });
});
