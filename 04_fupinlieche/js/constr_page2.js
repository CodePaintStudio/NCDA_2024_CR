// import {gsap} from "./gsap";

const galleryEl = document.querySelector(".gallery");
const photoEls = galleryEl.querySelectorAll(".photo");
const indicatorEls = document.querySelectorAll(".indicator div");
const textArea = document.querySelector(".text-area");
const yearEls = document.querySelectorAll(".year div")


const textArray = [
    "1990年代，中国经济市场化背景下出现了中国铁路大提速现象，列车领域时速大分化，没提速的就成为慢火车，一般火车因经济发展物价上涨、运行成本提高而多次提价，但是，某些经济落后地带的绿皮车票价长期没提价或提价很低，几块钱乃至1元起步 ，或票价严重低于运行成本，都变为扶贫列车。",
    "一些路线新增一些扶贫列车，例如，新建的渝怀铁路2006年4月18日正式运营7272次扶贫列车 ，京广铁路郴州段2012年新开一列扶贫列车，青藏铁路西格段设立7581/2次公益火车。",
    "2003年，“先锋号”第一次创下时速292km/h的中国铁路客车第一速，成为当时中国跑得最快的“子弹头”列车。",
    "2019年1月5日零时，全国铁路调整列车运行图，时速160公里“绿巨人”动力集中复兴号动车组首次亮相京沪线。",
    "2022年11月，交通运输部发布新版《铁路旅客车票实名制管理办法》明确，长途客运的公益性“慢火车”暂不实行车票实名制管理的，铁路运输企业应当提前向社会公布并说明理由。新版办法将于2023年1月1日起施行。"
];

let activeIndex = 0;
gsap.set(photoEls[activeIndex],{duration:0.3,scale:1.125,ease: "sine.inOut"});
gsap.set(yearEls[activeIndex],{duration:0.3,scale:1.125,ease: "sine.inOut",color:"#206600"});

for(let i = 0;i<photoEls.length;++i){
    photoEls[i].addEventListener("mouseenter",()=>{
        indicatorEls[activeIndex].classList.remove("active-indicator");
        // photoEls[activeIndex].classList.remove("active-photo");
        gsap.to(photoEls[activeIndex],{duration:0.3,scale:1,ease: "sine.inOut"});
        gsap.to(yearEls[activeIndex],{duration:0.3,scale:1,ease: "sine.inOut"});
        activeIndex = i;
        indicatorEls[activeIndex].classList.toggle("active-indicator");
        // photoEls[activeIndex].classList.toggle("active-photo")
        gsap.to(photoEls[activeIndex],{duration:0.3,scale:1.125,ease: "sine.inOut"});
        gsap.to(yearEls[activeIndex],{duration:0.3,scale:1.125,ease: "sine.inOut",color:"#206600"});
        textChange(activeIndex);
    })
    // photoEls[i].addEventListener("mouseleave",()=>{
    //     indicatorEls[activeIndex].classList.remove("active-indicator");
    //     photoEls[activeIndex].classList.remove("active-photo")
    //     gsap.to(photoEls[activeIndex],{duration:0.3,scale:1,ease: "power3.in"});
    //     gsap.to(yearEls[activeIndex],{duration:0.3,scale:1,ease: "power3.in"});
    //     activeIndex = 0;
    //     indicatorEls[activeIndex].classList.toggle("active-indicator");
    //     gsap.to(photoEls[activeIndex],{duration:0.3,scale:1.125,ease: "power3.out"});
    //     gsap.to(yearEls[activeIndex],{duration:0.3,scale:1.125,ease: "power3.out",color:"#206600"});
    //     textChange(activeIndex);
    // })
}


function textChange(index){
    textArea.classList.add("hidden");

    // 等待过渡效果完成
    setTimeout(() => {
        // 更改文本内容
        textArea.innerText = textArray[index];

        // 显示文本区域
        textArea.classList.remove("hidden");
    }, 500); // 与CSS中定义的过渡时间一致
}


function imgScale(index){
    gsap.to("photoEls[index]",{duration:0.5,scale:1.125});
}
