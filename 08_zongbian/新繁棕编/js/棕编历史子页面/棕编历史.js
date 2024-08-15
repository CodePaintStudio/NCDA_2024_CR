let translateY = 0
let scale = 1.4
let index = 0
let count = 0
let opacity = 1
const roadElements = document.querySelectorAll('.road-first, .road-second, .road-third, .road-fourth');
let tip = document.querySelector('.tips')



window.addEventListener('wheel', function(e) {
    console.log(count,index);
    tip.style.display='none'
    if(e.deltaY>0){
        count++;
    if(count%7==0){
    translateY = 0
    scale = 1.4
    index++
    // count = 0
    opacity = 1
    roadElements[index].style.top = '200px';
    roadElements[index-1].style.display = 'none'
    }
        translateY -= 30;
        scale -=  0.1;
        opacity -= 0.1;
        roadElements[index].style.transform = `translateY(${translateY}px) scale(${scale})`;
        roadElements[index].style.opacity = `${opacity}`;
    }else{
    count--;
    if(count%7==0){
    translateY = -210
    scale = 0.7
    index--
    // count = 0
    opacity = 0.3
    roadElements[index].style.top = '200px';
    roadElements[index].style.display = 'flex'
    roadElements[index+1].style.top = '1400px'
    }
        translateY += 30;
        scale += 0.1;
        opacity += 0.1;
        roadElements[index].style.opacity = `${opacity}`;
        roadElements[index].style.transform = `translateY(${translateY}px)  scale(${scale})`;
    }
})