// import {gsap} from "./gsap";

const text1El = document.querySelector(".text1 p");
const text2El = document.querySelector(".text2 p");
const text3El = document.querySelector(".text3 p");
const trans1El = document.querySelector(".trans1");
const trans2El = document.querySelector(".trans2");
const trans3El = document.querySelector(".trans3");

trans1El.addEventListener("mouseenter",()=>{
  gsap.to(trans1El,{duration:0.5,rotationY:180,ease: "none"});
  gsap.to(text1El,{duration:0.5,opacity:0});
  setTimeout(()=>{
    gsap.set(text1El,{textContent:`建设后：\n车厢里常常挤满了挑着担子、背着箩筐的当地百姓。他们带着自家生产的蔬菜、水果、禽蛋等农副产品，在车厢里摆起了一个个“摊位”。这些农副产品都是当地百姓用心种植、养殖的，品质非常好，价格也非常实惠。在火车上售卖这些农副产品，不仅可以让当地百姓获得更好的经济效益，也可以让城市居民品尝到新鲜、健康的农产品。列车上的工作人员不仅不会限制乘客携带的货物数量和种类，还会主动帮忙搬运和安置货物。有时甚至会帮忙吆喝叫卖，为当地百姓的销售助力。这种人文关怀和温情服务让这趟慢火车变得更加温馨和有人情味。`})
    gsap.to(text1El,{duration:1,opacity:1,ease:"none"});
  },500);
});

trans1El.addEventListener("mouseleave",()=>{
  gsap.to(trans1El,{duration:0.5,rotationY:360,ease: "none"});
  gsap.to(text1El,{duration:0.5,opacity:0});
  setTimeout(()=>{
    gsap.set(text1El,{textContent:'建设前：大凉山位于偏远的山区，山高路险，地理环境极其恶劣，交通十分不便，很多地方甚至没有公路，只有崎岖的山路。扶贫措施难以实施，经济发展也受到了很大的阻碍。村民们外出买卖常以步行。'})
    gsap.to(text1El,{duration:1,opacity:1,ease:"none"});
  },500);
});

trans2El.addEventListener("mouseenter",()=>{
  gsap.to(trans2El,{duration:0.5,rotationY:180,ease: "none"});
  gsap.to(text2El,{duration:0.5,opacity:0});
  setTimeout(()=>{
    gsap.set(text2El,{textContent:'建设后：首先，孩子们可以通过扶贫列车快速抵达城市学校，享受更好的教育资源和教学设施。其次，扶贫列车的开通也促进了教育资源的均衡分配。随着孩子们前往城市就读，城市学校的招生规模逐渐扩大，吸引了更多的优秀教师前来任教。同时，政府和社会各界也加大了对大凉山地区教育事业的投入，改善了当地学校的教学设施和师资力量。此外，扶贫列车的建设还推动了教育模式的创新。通过引入现代教学手段和技术，如多媒体教学、远程教育等，使得大凉山地区的教育逐渐与国际接轨，提高了教育质量和效率。\n' +
        '现在的大凉山地区，教育已经不再是制约当地发展的瓶颈。相反，随着教育水平的提高，越来越多的孩子们开始走向更广阔的天地，为家乡的发展贡献自己的力量。'});
    gsap.to(text2El,{duration:1,opacity:1,ease:"none"});
  },500);
});

trans2El.addEventListener("mouseleave",()=>{
  gsap.to(trans2El,{duration:0.5,rotationY:360,ease: "none"});
  gsap.to(text2El,{duration:0.5,opacity:0});
  setTimeout(()=>{
    gsap.set(text2El,{textContent:'建设前：由于地理位置偏远，交通不便，导致大凉山教育资源分配不均，教育设施落后。许多村庄的学校条件简陋，缺乏必要的教学设备和图书资料，甚至有的学校连基本的教室都难以保证。此外，师资力量薄弱，教师数量不足，且质量参差不齐，许多教师缺乏专业的教学技能和知识更新，难以满足学生多样化的学习需求。\n' +
        '在这种情况下，大凉山地区的孩子们接受教育的机会有限，教育质量也相对较低。许多孩子因为家庭贫困、路途遥远等原因，无法接受完整的义务教育。 '});
    gsap.to(text2El,{duration:1,opacity:1,ease:"none"});
  },500);
});


trans3El.addEventListener("mouseenter",()=>{
  gsap.to(trans3El,{duration:0.5,rotationY:180,ease: "none"});
  gsap.to(text3El,{duration:0.5,opacity:0});
  setTimeout(()=>{
    gsap.set(text3El,{textContent:'      建设后：首先，交通的改善极大地促进了当地经济的发展。扶贫列车不仅为当地居民提供了便捷的出行方式，还吸引了更多的游客前来旅游观光，带动了当地旅游业的蓬勃发展，拓宽了销售渠道，提高了农产品的附加值。\n' +
        '      其次，大凉山地区开始发展起多元化的经济产业，推动了当地产业结构的调整和优化。农业得到了现代科技的支持，生产效率和质量都得到了显著提升。同时，还发展了农产品加工、手工艺品制作等附加值较高的产业，为当地经济注入了新的活力。\n' +
        '      此外，促进了当地居民的就业和创业，提高了人民收入水平和生活质量。同时，一些有创业意愿的居民也利用扶贫列车带来的机遇，开始自主创业，实现了自己的创业梦想。'});
    gsap.to(text3El,{duration:1,opacity:1,ease:"none"});
  },500);
});

trans3El.addEventListener("mouseleave",()=>{
  gsap.to(trans3El,{duration:0.5,rotationY:360,ease: "none"});
  gsap.to(text3El,{duration:0.5,opacity:0});
  setTimeout(()=>{
    gsap.set(text3El,{textContent:'建设前：由于地理位置偏远，交通不便，导致大凉山地区与外界的经济联系受到很大限制。缺乏高效的交通网络，使得当地的农产品、手工艺品等特色产品难以有效地运往市场，导致销售渠道狭窄，销售收入有限。\n' +
        '此外，大凉山地区的产业结构相对单一，主要以传统的农业为主，缺乏多元化的经济发展模式。农业生产方式也相对落后，科技含量低，导致生产效率不高，农产品附加值低。同时，由于交通不便，外来投资难以进入，当地经济发展缺乏外部动力。\n' +
        '在这种情况下，大凉山地区的居民收入水平普遍较低，生活水平也相对落后。许多家庭面临着贫困问题，缺乏基本的生活保障和发展机会。'});
    gsap.to(text3El,{duration:1,opacity:1,ease:"none"});
  },500);
});