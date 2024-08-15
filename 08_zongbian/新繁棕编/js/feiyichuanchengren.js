

let juanzhouLeft = document.querySelector('.juanzhouLeft');
let juanzhouRight = document.querySelector('.juanzhouRight');
let juanzhou = document.querySelector('.contentmain');
let shuzhouCenter = document.querySelector('.shuzhouCenter');
let juanzhouCenter1 = document.querySelector('.juanzhouCenter1');

//获得云朵属性从而完成云朵移动
let yunduoUp = document.querySelector('.yunduoUp');
let yunduoDown = document.querySelector('.yunduoDown');


// 获取页面进行掩盖
let page1 = document.querySelector('.page1');
let page2 = document.querySelector('.page2');
let page3 = document.querySelector('.page3');
// 掩盖完成
//按钮从而实现2,3也得互相切换
let DownPage3 = document.querySelector('.DownPage3');
let UpPage2 = document.querySelector('.UpPage2');





juanzhou.addEventListener('click',function(){
    // juanzhouRight.classList.add('to_Right');
    // juanzhouLeft.classList.add('to_Left');
   
    
    shuzhouCenter.classList.add('shuzhou_Center');
    yunduoUp.classList.add("yunduo_toLeft");
    yunduoDown.classList.add("yunduo_toRight");
    setTimeout(delayPage1,2500);
}, { once: true })
function delayPage1(){
    page1.style.display = 'block';
}
page1.addEventListener('click',function(){
    page1.style.display = 'none';
    page2.style.display = 'block';
})
DownPage3.addEventListener('click',function(){
    page2.style.display = 'none';
    page3.style.display = 'block';
})
UpPage2.addEventListener('click',function(){
    page3.style.display = 'none';
    page2.style.display = 'block';
})

let P3Start = document.querySelector('.P3Start');
let vedio2 = document.querySelector('#video2');
let video1 = document.querySelector('.video1');
let hideP3 = document.querySelector('.hideP3');
console.log(vedio2);
P3Start.addEventListener('click',function(){
        video1.style.display = 'block';
        hideP3.style.display = 'none';
        vedio2.controls = true;
        vedio2.play();
        // P3Start.style.display = 'none';
        vedio2.controls = true;
})
video1.addEventListener('click',function(){
        video1.style.display = 'none';
        hideP3.style.display = 'block';
        if(vedio2.play()){
            vedio2.pused();
        }
        
        
})





















// function delayPage1(){
//     page1.style.opacity = 1;
// }

// 写完放
// page1.addEventListener('click',function(){
//     page1.style.display = 'none';
//     page2.style.display = 'block';
// })
// page2.addEventListener('click',function(){
//     page2.style.display = 'none';
//     page3.style.display = 'block';
// })


