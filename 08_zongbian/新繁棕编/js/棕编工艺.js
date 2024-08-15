const main = document.querySelector('.main')
document.onreadystatechange=function () {
          if (document.readyState=="complete"){
               loadingFade();
          }
}
function loadingFade() {
     var opacity=1;
     var loadingPage=document.getElementById('loading');
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








const open = document.querySelector('.title-sub')
const main2 = document.querySelector('.main2')
const titlesub = document.querySelector('.title-sub')
const first = document.querySelector('.main2-content-first')
const second = document.querySelector('.main2-content-second')
const third = document.querySelector('.main2-content-third')


open.addEventListener('click', function(){
    main.style.transform='translateX(-1500px)'
    main2.style.transform='translateX(0px)'
})


first.addEventListener('click',function(){
    window.location.href= "./棕丝之源.html"
})


second.addEventListener('click',function(){
    window.location.href= "./巧手织棕.html"
})

third.addEventListener('click',()=>{
     window.location.href= "./润色生辉.html"
})