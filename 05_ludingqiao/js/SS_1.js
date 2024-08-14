var context;

var starCount = 100;

var main = document.querySelector(".main");
var backgrand = [
  "../access/SS_1/star_1.png",
  "../access/SS_1/star_2.png",
  "../access/SS_1/star_3.png",
  "../access/SS_1/star_4.png",
  "../access/SS_1/star_5.png",
  "../access/SS_1/star_6.png",
  "../access/SS_1/star_7.png",
  "../access/SS_1/star_8.png",
  "../access/SS_1/star_9.png",
  "../access/SS_1/star_10.png",
  "../access/SS_1/star_11.png",
  "../access/SS_1/star_12.png",
];
function star() {
  for (var i = 0; i < starCount; i++) {
    var div = document.createElement("div");
    div.className = "star";
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    div.style.animationDelay = Math.random() * 5 + "s";

    div.style.backgroundImage =
      "url(" + backgrand[Math.floor(Math.random() * backgrand.length)] + ")";
    main.appendChild(div);
  }
}

window.addEventListener("load", function () {
  star();
});
window.addEventListener("resize", function () {
  var stars = document.getElementsByClassName("star");

  setTimeout(() => {
    for (var i = 0; i < stars.length; i++) {
      stars[i].style.left = Math.random() * window.innerWidth + "px";
      stars[i].style.top = Math.random() * window.innerHeight + "px";
    }
  }, 100);
});
// var herodata_1 = document.querySelector(".herodata_1");
// var circle_1 = document.querySelector(".circle_1");
// herodata_1.onmouseover= function () {
//   circle_1.style.animationPlayState = "paused";
// };
// herodata_1.onmouseout = function () {
//   circle_1.style.animationPlayState = "running";
// };
// var hero_picture_1 = document.querySelector(".hero_picture_1");
// herodata_1.onclick = function () {
//   hero_picture_1.classList.add("down_move")
//   console.log(1)
// };

// };

var Allherodata = document.querySelectorAll("div[class^='herodata_']");
var Allhero_picture = document.querySelectorAll(".hero_picture");
var Allcircle = document.querySelectorAll("div[class^='circle_']");
console.log(Allherodata);
console.log(Allhero_picture);
console.log(Allcircle);
function over(n) {
  Allherodata[n].onmouseover = function () {
    Allcircle[n].style.animationPlayState = "paused";
    console.log("ok", Allcircle[n]);
  };
}
function out(n) {
  Allherodata[n].onmouseout = function () {
    Allcircle[n].style.animationPlayState = "running";
    console.log("yes", Allcircle[n]);
  };
}
function click(n) {
  Allherodata[n].onclick = function () {
    Allhero_picture[n].classList.add("down_move");
    console.log(1);
  };
}
var button_container = document.querySelectorAll(".button-container");
function up_click(n) {
  button_container[n].onclick = function () {
    Allhero_picture[n].classList.remove("down_move");
    Allhero_picture[n].classList.add("up_move");
  };
}

for (var i = 0; i < Allherodata.length; i++) {
  click(i);

  over(i);

  out(i);
  up_click(i);
}

var inform = document.querySelector(".inform");
inform.onclick = function () {
  inform.style.top=-100 +'%'
  inform.style.opacity=0;
};

var down=document.querySelector(".Down");
down.onclick=function(){
  
  
  inform.style.top=25 +'%'
  inform.style.opacity=1;


}
