
// var main=document.querySelector(".main_1");

// main.onclick=function(){
//     main.classList.add("animated")
// main.classList.add("clipRectSpIn")

// setTimeout(function(){
//     main.classList.add("z_index");
// },1000)

// } 

var button_1=document.querySelector(".Title_E")
var card1=document.querySelector(".Animate-card_1")
var button_2=document.querySelector(".Title_F")
var card2=document.querySelector(".Animate-card_2")
console.log(card1.classList)

button_1.onclick=function(){
    card1.classList.add("move_down")
    card2.classList.add("move_up")
    card2.classList.remove("move_down")
    card1.classList.remove("move_up")
}
button_2.onclick=function(){
    card2.classList.add("move_down")
    card1.classList.add("move_up")
    card1.classList.remove("move_down")
    card2.classList.remove("move_up")
}

