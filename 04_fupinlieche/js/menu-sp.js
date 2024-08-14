const navIcon = document.querySelector("#nav");

gsap.set("#nav-menu",{
  backgroundColor:"rgba(45, 60, 53 ,0)"
});

gsap.set("#menu",{zIndex:-1});

let isActive = false;

navIcon.addEventListener("click",()=>{
  navIcon.classList.toggle('open');
  if (!isActive){
    gsap.to("#nav-menu",{
      duration:0.5,
      opacity: 1,
      backgroundColor: "rgba(45, 60, 53,0.7)",
      zIndex:30,
      ease:"sine.inOut"
    });
    // gsap.to("#menu",{zIndex: 30});
    isActive=true;
  }
  else{
    gsap.to("#nav-menu",{
      duration:0.5,
      backgroundColor: "rgba(45, 60, 53,0)",
      zIndex:-1,
      ease:"sine.inOut"
    });
    gsap.to("#menu",{zIndex: -1});
    isActive=false;
  }
});

