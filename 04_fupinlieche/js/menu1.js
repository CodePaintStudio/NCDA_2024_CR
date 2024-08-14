const navIcon = document.querySelector("#nav");

gsap.set("#nav-menu",{
  backgroundColor:"rgba(45, 60, 53 ,0)"
});

gsap.set("#menu",{display:'none'});
gsap.set(".return",{display:'none'});

let isActive = false;

navIcon.addEventListener("click",()=>{
  navIcon.classList.toggle('open');
  if (!isActive){
    gsap.to("#nav-menu",{
      duration:0.5,
      // opacity: 1,
      display:'block',
      backgroundColor: "rgba(45, 60, 53,0.7)",
      zIndex:10,
      ease:"sine.inOut"
    });
    gsap.to("#menu",{display:'block'});
    gsap.to(".return",{display:'block'});
    isActive=true;
  }
  else{
    gsap.to("#nav-menu",{
      duration:0.5,
      backgroundColor: "rgba(45, 60, 53,0)",
      ease:"sine.inOut",
      zIndex:1
    });
    gsap.to("#menu",{display:'none'});
    gsap.to(".return",{display:'none'});
    isActive=false;
  }
});

