var content_A = document.querySelector(".content_A");
    setTimeout(function () {
      content_A.classList.add("ad");
    }, 7000);
var words=document.querySelectorAll("div[class^='word_']")
console.log(words)
setTimeout(function () {
  words[0].classList.add("show");
},1500)
window.addEventListener('scroll',function(){
  var height=window.innerHeight;
    var value=window.scrollY;
    console.log(value)
    if(value<=0.29*height){
      words[0].classList.add("show")

    }
    if(value>=0.31*height){
      words[0].classList.remove("show")
       words[1].classList.add("show")
    }
    if(value<0.31*height){
        words[1].classList.remove("show")
    }
    if(value>=1.26*height){
      words[2].classList.add("show")
      words[1].classList.remove("show")
   
    }
    if( value<1.26*height){

      words[2].classList.remove("show")
    }

   if(value>=2.02*height){
    words[3].classList.add("show")
 words[2].classList.remove("show")
 
  }
  if( value<2.02*height){

    words[3].classList.remove("show")

  }
  if( value>2.65*height){
words[3].classList.remove("show")
    words[4].classList.add("show")
 
  }
  if( value<2.65*height){

    words[4].classList.remove("show")
 
  }

})