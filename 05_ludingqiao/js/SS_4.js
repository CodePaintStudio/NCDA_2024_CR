// var pictures_1 = document.querySelector(".picture_1");
// var pictures_2 = document.querySelector(".picture_2");
// var pictures_3 = document.querySelector(".picture_3");
// var pictures_4 = document.querySelector(".picture_4");
// // var T_ = document.querySelectorAll("div[class^='T_']");
// var S_ = document.querySelectorAll("div[class^='S_']");
// var F_ = document.querySelectorAll("div[class^='F_']");
// var Q_ = document.querySelectorAll("div[class^='Q_']");
// var i = 1;
// var l = 1;
// var k = 1;
// var h= 1;
// setInterval(function () {
//   if (i % 2 != 0) {
//     pictures_1.style.transform = `rotateY(${180}deg)`;
//     for (var j = 0; j < T_.length; j++) {
//       T_[j].style.opacity = "0.9";
//     }
//   } else {
//     pictures_1.style.transform = `rotateY(${360}deg)`;

//     for (var j = 0; j < T_.length; j++) {
//       T_[j].style.opacity = "0";
//     }
//   }
//   i++;
// }, 3000);
// setInterval(function () {
//   if (l % 2 != 0) {
//     pictures_2.style.transform = `rotateY(${180}deg)`;
//     for (var j = 0; j < S_.length; j++) {
//       S_[j].style.opacity = "0.9";
//     }
//   } else {
//     pictures_2.style.transform = `rotateY(${360}deg)`;

//     for (var j = 0; j < S_.length; j++) {
//       S_[j].style.opacity = "0";
//     }
//   }
//   l++;
// }, 3000);
// setInterval(function () {
//   if (k % 2 != 0) {
//     pictures_3.style.transform = `rotateY(${180}deg)`;
//     for (var j = 0; j < F_.length; j++) {
//       F_[j].style.opacity = "0.9";
//     }
//   } else {
//     pictures_3.style.transform = `rotateY(${360}deg)`;

//     for (var j = 0; j < F_.length; j++) {
//       F_[j].style.opacity = "0";
//     }
//   }
//   k++;
// }, 3000);
function rotate(name1, mame2) {
  var i = 1;
  var CL = document.querySelectorAll(name1);
  var Pic = document.querySelector(mame2);

  setInterval(function () {
    if (i % 2 != 0) {
      Pic.style.transform = `rotateY(${180}deg)`;

      for (var j = 0; j < CL.length; j++) {
        CL[j].style.opacity = "0.9";
        CL[j].style.transform = `scale(${1})`;
      }
    } else {
      Pic.style.transform = `rotateY(${360}deg)`;

      for (var j = 0; j < CL.length; j++) {
        CL[j].style.opacity = "0";
        CL[j].style.transform = `scale(${0})`;
      }
    }
    i++;
  }, 3000);
}

rotate("div[class^='T_']", ".picture_1");
// // rotate("div[class^='S_']", ".picture_2");
// rotate("div[class^='F_']", ".picture_3");
// rotate("div[class^='Q_']", ".picture_4");
var LS = document.querySelectorAll("div[class^='LS_']");
var k = 0;
var l = 0;
var False=0;
var False1=0;
var False2=0;

addEventListener("scroll", function () {
  var height = window.innerHeight ;
  console.log(this.scrollY);
  
if (window.scrollY >= height*0.75&&False==0) {
  rotate("div[class^='S_']", ".picture_2");
  False=1;

}
  if (window.scrollY >= height *1.77&&False1==0) {
    rotate("div[class^='F_']", ".picture_3");
    False1=1;
  }
  if (window.scrollY >= height *2.78&&False2==0) {
    
    rotate("div[class^='Q_']", ".picture_4");
    False2=1;
  }







})
addEventListener("scroll", function () {
  var height = window.innerHeight ;
  if (window.scrollY >= height * 4.7 && window.scrollY <= height * 5.1) {
    for (var i = LS.length - 1; i >= 0; i--) {
      LS[i].style.top = "50%";
      LS[i].style.transitionDelay = (LS.length - i) * 1 + "s";
    }
  }

  if (window.scrollY >= height * 5.3) {
    for (var i = 0; i < LS.length; i++) {
      LS[i].style.top = "-33%";
      LS[i].style.transitionDelay = i * 1 + "s";
    }
  }
  if ( window.scrollY < height*4.6) { 
    
    console.log(this.scrollY);
    for (var i=LS.length-1; i >=0; i--) {
      LS[i].style.top = "-33%";
      LS[i].style.transitionDelay = i * 1 + "s";
    }
  }
 
});
for (var i = 0; i < LS.length; i++) {
  LS[i].onclick = function (e) {
    e.target.style.top = "-30%";
    e.target.style.transitionDelay = "0s";
  };
}

var porm_1 = document.querySelectorAll(".porm_1");
var porm_2 = document.querySelectorAll(".porm_2");
var porm_3 = document.querySelectorAll(".porm_3");
var porm_4 = document.querySelectorAll(".porm_4");
var porm_ = [...porm_1, ...porm_2, ...porm_3, ...porm_4];
var SM = document.querySelectorAll("div[class^='SM-']");
console.log(SM);
var Q = 0;
for (var i = 0; i < SM.length; i++) {
  SM[i].onclick = function (e) {
    var k = e.target.id;

    for (var j = 0; j <porm_.length; j++) {
      if (true) {
       
       porm_[k].style.zIndex =100;
        porm_[k].style.top = "40%";
        porm_[k].style.transform = `scale(${1})`;
        porm_[j].style.transitionDelay = 0+"s";
      }

      if (j !=k) {
       
      if(j==0){
        console.log(j);
porm_[0].style.zIndex = 1;
        porm_[0].style.top = 28 + "%" ;
        porm_[0].style.transform = `scale(${ 0.8})`;
        porm_[0].style.transitionDelay =0.5+"s";


      }else{

        porm_[j].style.zIndex = 10-j;
          porm_[j].style.top = 40-j*3 + "%" ;
          porm_[j].style.transform = `scale(${ 1-0.05*j})`;
          porm_[j].style.transitionDelay =0.5+"s";
      }
    
    }
      
      
      
    }
  };
}
var v=document.querySelectorAll(".v");
console.log(v); 
var height = window.innerHeight;
window.addEventListener("load", function () {



 
  for (var i = 0; i < v.length; i++) {
  
    if(i<5){ v[i].style.transitionDelay=0+"s";
  
    }
      
      if(i>=5&&i<10){ v[i].style.transitionDelay=Math.random()*3+"s";
      
    }
    if(i>10){ v[i].style.transitionDelay=Math.random()*5+"s";
      
    }
  v[i].style.right ="120%";
  
  
  v[i].style.top=Math.random()*height+"px";
  
  
  }


})
 