const navIcon = document.querySelector("#nav");

gsap.set("#nav-menu",{
  // backgroundColor:" rgba(77, 101, 22,0.7)"
});
gsap.set("#menu",{zIndex:-1});

let isActive = false;

navIcon.addEventListener("click",()=>{
  navIcon.classList.toggle('open');
  if (!isActive){
    gsap.to("#nav-menu",{
      duration:0.5,
      opacity: 1,
      // backgroundColor: " rgba(77, 101, 22,0.7)",
      // backgroundImage: "url('../images/xingkan/menu.png')",
      zIndex:10,
      ease:"sine.inOut"
    });
    gsap.to("#menu",{opacity:1});
    isActive=true;
  }
  else{
    gsap.to("#nav-menu",{
      duration:0.5,
      // backgroundColor: " rgba(77, 101, 22,0.7)",
      ease:"sine.inOut",
      zIndex:1
    });
    gsap.to("#menu",{opacity:0});
    isActive=false;
  }
});

