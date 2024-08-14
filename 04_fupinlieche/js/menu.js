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
      duration:1,
      opacity: 1,
      backgroundColor: "rgba(45, 60, 53,0.7)",
      zIndex:10,
      ease:"power1.Out"
    });
    gsap.to("#menu",{zIndex: 10});
    isActive=true;
  }
  else{
    gsap.to("#nav-menu",{
      duration:1,
      backgroundColor: "rgba(45, 60, 53,0)",
      ease:"power1.in",
      zIndex:1
    });
    gsap.to("#menu",{
      zIndex: -1,
      opacity: 0
    });
    isActive=false;
  }
});

