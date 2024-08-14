// import {gsap} from "./gsap";


const data = [
  {
    title:"慢火车上的农情集市：温情服务助力乡村与城市的交融",
    image:'../images/railway_life/rail_life_0.jpg',
    description:'车厢里常常挤满了挑着担子、背着箩筐的当地百姓。他们带着自家生产的蔬菜、水果、禽蛋等农副产品，在车厢里摆起了一个个“摊位”。这些农副产品都是当地百姓用心种植、养殖的，品质非常好，价格也非常实惠。在火车上售卖这些农副产品，不仅可以让当地百姓获得更好的经济效益，也可以让城市居民品尝到新鲜、健康的农产品。列车上的工作人员不仅不会限制乘客携带的货物数量和种类，还会主动帮忙搬运和安置货物。有时甚至会帮忙吆喝叫卖，为当地百姓的销售助力。这种人文关怀和温情服务让这趟慢火车变得更加温馨和有人情味。'
  },
  {
    title:"穿越大凉山的时光列车：数载坚守彝乡路",
    image:'../images/railway_life/rail_life_1.jpg',
    description:'从普雄到攀枝花，已经运行了50年的5633/4次列车，以每小时约40公里的速度，穿过数不清的高山河谷，连接起沿线27个车站和周边的城镇村庄，接送一批批彝族老乡往返于大凉山内。全程票价25.5元，最低票价2元，价格几十年没有变过。'
  },
  {
    title:"慢火车：摄影爱好者的流动画廊与人文风情之旅",
    image:'../images/railway_life/rail_life_2.jpg',
    description:'除了为当地百姓提供便利的交通和销售渠道之外，这趟慢火车还为摄影爱好者提供了一个绝佳的拍摄机会。车厢里的人文景象和美丽的自然风光吸引了众多摄影爱好者前来拍摄。他们可以在车厢里捕捉到当地百姓的生活瞬间和自然风光的美景，留下珍贵的回忆。'
  },
  {
    title:"慢火车上的知识绿洲：启迪教育连接未来与希望",
    image:'../images/railway_life/rail_life_3.jpg',
    description:'在车厢的一角，一群孩子们围坐在一起，他们手中捧着课本，眼中闪烁着对知识的渴望。这趟扶贫列车不仅承载着物质的传递，更是孩子们追求知识重要桥梁。车厢里专门设立了一个“学习角”，摆放着书桌、椅子和各类学习用品。这里成了孩子们的乐园，他们在这里写作业、阅读书籍、交流学习心得。书籍是列车工作人员和热心人士捐赠的，内容丰富多样，既有课本辅导资料，也有各类课外读物，满足了孩子们多样化的阅读需求。列车上的志愿者们会定期为孩子们组织学习活动，如讲座、讨论会等。他们用自己的知识和经验，为孩子们答疑解惑，激发他们对学习的兴趣。志愿者们还会与孩子们分享外面世界，让他们了解更多的知识和文化，拓宽视野。'
  }
];

const cards = data.map((i,index)=>
  `<div class = "cards" id="card-${index}" style="background-image: url(${i.image})"></div>`
).join('');




const cardsContent = data.map((i,index)=>{
  `<div class = "cards-content" id = card-content-${i}">
    <div class="cards-title">${i.title}</div>
    <div class="descri">${i.description}</div>
  </div> `
}).join('');



const _ = (id)=>document.getElementById(id);

_('main').innerHTML = cards;

function getCard(index){
  return `#card-${index}`;
}

let detailsEven = true;
let order = [0,1,2,3];


const cardWidth = 16.09375;
const cardHeight = 21.40625;
const offSetTop = 15.208;
const offSetLeft = 56.927;
const gap = 2.917

function  init(){
  const [activeCard,...rest] = order;
  // const detailsActive = detailsEven ? "#details-even" : "#details-odd";
  // const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

  gsap.set(getCard(activeCard),{
    x:0,
    y:0,
    width:'100vw',
    height:'100vh',
  });


  rest.forEach((i,index)=>{
    gsap.set(getCard(i),{
      x: offSetLeft+cardWidth+index*(cardWidth+gap)+'vw',
      y: offSetTop+'vw',
      width: cardWidth+'vw',
      height: cardHeight+'vw',
      zIndex:30,
      borderRadius:10,
    });
  });

  gsap.to(".cover",{
    x:100+cardWidth+'vw',
    delay:0.5,
    ease:'sine.inOut',
    // onComplete:()=>{
    //   setTimeout(()=>{
    //     step();
    //   },500)
    // },
  });

  rest.forEach((i,index)=>{
    gsap.to(getCard(i),{
      x:offSetLeft+index*(cardWidth+gap)+'vw',
      zIndex: 30,
      delay: 0.05 * index,
      ease:"sine.inOut",
      delay:0.6
    });
  });


}



function step(){
  return new Promise((resolve)=>{
    order.push(order.shift());

    const [active,...rest] = order;
    const prev = rest[rest.length-1];

    gsap.set(getCard(prev),{zIndex:10});
    gsap.set(getCard(active),{zIndex:20});
    gsap.to(getCard(prev),{scale:1.5,ease:"sine.inOut"});

    gsap.set(".details",{opacity:0,ease:"sine.inOut"});

    document.querySelector('.details .title').textContent = data[order[0]].title;
    document.querySelector('.details .desc').textContent = data[order[0]].description;

    gsap.to(getCard(active), {
      x: 0,
      y: 0,
      ease:"sine.inOut",
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      onComplete: () => {
        const xNew = offSetLeft + (rest.length - 1) * (cardWidth + gap)+"vw";
        gsap.set(getCard(prev), {
          x: xNew,
          y: offSetTop+"vw",
          width: cardWidth+"vw",
          height: cardHeight+"vw",
          zIndex: 30,
          borderRadius: 10,
          scale: 1,
        });

      },
    });
    gsap.set(".details", { zIndex: 22 });
    gsap.to(".details", { opacity: 1, delay: 0.4, ease:"sine.inOut" });
    gsap.to(`.details .title`, {
      y: 0,
      delay: 0.1,
      duration: 0.7,
      ease:"sine.inOut",
    });

    gsap.to(`.details .desc`, {
      y: 0,
      delay: 0.15,
      duration: 0.4,
      ease:"sine.inOut",
    });

    // gsap.to('.details',{opacity: 1,duration:0.3,ease:"sine.inOut",delay:0.2});

    rest.forEach((i, index) => {
      if (i !== prev) {
        const xNew = offSetLeft + index * (cardWidth + gap)+"vw";
        gsap.set(getCard(i), { zIndex: 30 });
        gsap.to(getCard(i), {
          x: xNew,
          y: offSetTop+"vw",
          width: cardWidth+"vw",
          height: cardHeight+"vw",
          ease:"sine.inOut",
          delay: 0.1 * (index + 1),
        });
      }
    });
  })

}


async function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function loadImages() {
  const promises = data.map(({ image }) => loadImage(image));
  return Promise.all(promises);
}



async function start() {
  try {
    await loadImages();
    init();
  } catch (error) {
    console.error("One or more images failed to load", error);
  }
}

const cardsEl = document.querySelectorAll(".cards");
cardsEl.forEach((card)=>{
  card.addEventListener("click",step);
})


start();



// // Select all smaller image cards and add click event listeners
// order.forEach((index) => {
//   const card = document.querySelector(`#card${index}`);
//   card.addEventListener('click', step);
// });

