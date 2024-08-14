var contain=document.querySelectorAll("div[class^='words_']")


for( var s=2;s<contain.length;s++){
  contain[s].style.animationDelay=s*0.6-0.8+"s";

}

//  setInterval(() => {
 
//   contain[i].classList.add("shows");

// console.log(i);
//   if(i==contain.length-1){

//     clearTimeout();
//   }
//   i++;
// }, 500);