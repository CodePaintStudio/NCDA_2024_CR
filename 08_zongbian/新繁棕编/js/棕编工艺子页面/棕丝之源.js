var loadingPage=document.getElementById('loading');
document.onreadystatechange=function () {
    if (document.readyState=="complete"){
         loadingFade();
    }
    
    
}
function loadingFade() {
var opacity=1;


var loadingBackground=document.getElementById('loading_bg');
var time=setInterval(function () {
    if (opacity<=0){
         clearInterval(time);
         loadingPage.remove();
         $('#loading').remove();
    }

    loadingBackground.style.opacity=opacity;
    opacity-=0.4;
},100);
}


// 页面展开
let body = document.querySelector('.body2')
let left = document.querySelector('.main-left')
let right = document.querySelector('.main-right')
let main =document.querySelector('.main1')
let leftContain = document.querySelector('.left-contain')
let rightContain = document.querySelector('.right-contain')
let openedLeft = document.querySelector('.opened-left')
let openedRight = document.querySelector('.opened-right')
let header = document.querySelector('.header')
let back = document.querySelector('.back')
async function open(item,opitem){
    if(item===left)
    {
    body.style.height = '1800px'
    // main.style.display = 'block'
    item.className = 'open-left'
    
    leftContain.className ='open-left-contain'
    setTimeout(()=>{
        openedLeft.style.display = 'block'
    },500)
    opitem.style.transform = 'translateX(1200px)'
    }
    else
    {
        body.style.height = '1800px'
        // main.style.display = 'block'
        item.className = 'open-right'
        
        rightContain.className ='open-right-contain'
        setTimeout(()=>{
            openedRight.style.display = 'block'
        },500)
        opitem.style.transform = 'translateX(-1200px)'
    }


}
// let openLeft = document.querySelector('.open-left')
// let openRight = document.querySelector('.open-right')



function close(item, opitem) {
    if(item===left){
    body.style.height = '';
    item.className = 'main-left';
    leftContain.className = 'left-contain';
    openedLeft.style.display = 'none';
    opitem.style.transform = 'translateX(0px)';
    header.style.transform = 'translateY(0px)'
    back.removeEventListener('click',close)
    back.style.transform = 'translateX(0px)'
  }
  else
  {
    body.style.height = '';
    item.className = 'main-right';
    rightContain.className = 'right-contain';
    openedRight.style.display = 'none';
    opitem.style.transform = 'translateX(0px)';
    header.style.transform = 'translateY(0px)'
    back.removeEventListener('click',close)
    back.style.transform = 'translateX(0px)'
  }
}

let flag = 0
left.addEventListener('click',()=>{
    open(left,right)
    header.style.transform = 'translateY(-200px)'
    back.style.transform = 'translateX(150px)'
    flag = 1
    x=0
    back.addEventListener('click',()=>{
        close(left,right)
    })
})


right.addEventListener('click',()=>{
    open(right,left)
    header.style.transform = 'translateY(-200px)'
    back.style.transform = 'translateX(150px)'
    flag = 2
    x=0
    back.addEventListener('click',()=>{
        close(right,left)
    })
})

// 页面逐渐显示路线
let firstWord = document.querySelector('.first-word')
let secondWord = document.querySelector('.second-word')
let thirdWord = document.querySelector('.third-word')
let fourthWord = document.querySelector('.fourth-word')
let firstPic = document.querySelector('.first-pic')
let secondPic = document.querySelector('.second-pic')
let thirdPic = document.querySelector('.third-pic')
let fourthPic = document.querySelector('.fourth-pic')

let rFirstWord = document.querySelector('.r-first-word')
let rSecondWord = document.querySelector('.r-second-word')
let rThirdWord = document.querySelector('.r-third-word')
let rFourthWord = document.querySelector('.r-fourth-word')
let rFirstPic = document.querySelector('.r-first-pic')
let rSecondPic = document.querySelector('.r-second-pic')
let rThirdPic = document.querySelector('.r-third-pic')
let rFourthPic = document.querySelector('.r-fourth-pic')
window.addEventListener('mousewheel',scrollLoad)
let x = 0;
function scrollLoad(e){
    if(flag===1){
    let scrolllength = e.wheelDelta;
    // console.log(x);
    if(scrolllength<0){
        x+=10
        if(x>0){
            firstWord.style.left=40+'px';
            firstPic.style.right=10+'%';
        }}
        if(x>20){
            secondWord.style.left=30+'%';
            secondPic.style.left=0;
        }
        if(x>40){
            thirdWord.style.left=50+'%';
            thirdPic.style.left=60+'%';
        }
        if(x>60){
            fourthWord.style.left=20+'%';
            fourthPic.style.left=60+'%';
        }
    else if(scrolllength>0){
        x-=10
    }
}


    else if(flag===2){
        let scrolllength = e.wheelDelta;
        // console.log(x);
        if(scrolllength<0){
            x+=10
            if(x>0){
                rFirstWord.style.left=50+'%';
                rFirstPic.style.right=80+'%';
        }
        if(x>20){
            rSecondWord.style.left=35+'%';
            rSecondPic.style.right=15+'%';
        }
        if(x>40){
            rThirdWord.style.left=30+'%';
            rThirdPic.style.right=70+'%';
        }
        if(x>60){
            rFourthWord.style.left=50+'%';
            rFourthPic.style.right=70+'%';
        }
    else if(scrolllength>0){
        x-=10
    }
    }


}
}