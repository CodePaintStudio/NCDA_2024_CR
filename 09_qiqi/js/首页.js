document.addEventListener('DOMContentLoaded', () => {
    const contentElement = document.querySelector('.appreciation-content-bottom-word');
    const imageElement = document.querySelector('.appreciation-img');
    const chnTitleElement = document.querySelector('.appreciation-content-header-chn');

    const titlesChn = [
        '螺钿漆器',
        '剔犀漆器',  // Replace with actual titles
        '平遥推光',  // Replace with actual titles
        '天水漆器'   // Replace with actual titles
    ];

    const contents = [
        `用经过研磨、裁切的贝壳薄片作为镶嵌纹饰的漆器。中国传统漆器品种之一。
        薄螺钿漆器约创始于北宋。所谓薄螺钿是通过精心选用夜光螺等优质贝壳，将其剥离、裁切成纤细的点、线、片，
        然后一点一点地嵌贴于漆器底地上，有时还间以金、银的条、片、屑等，再经髹饰、推光而成，
        作品五光十色，灿若虹霞，精致纤巧。代表性的实物有1955年在河南洛阳唐墓中发现的人物花鸟纹镜。`,
       `始于宋兴于明，有1200多年历史。剔犀漆器工艺繁杂，制作困难，生产周期长，是我国现有漆器工艺中最复杂、最珍贵的一种。
剔犀工艺器物有着光泽莹润、胎薄体轻、纹饰华美、坚固耐用的优点。其最大的特点是使用黑红两种色漆有规律地逐层髹涂百余遍，在达到足够漆厚的胎骨上剔刻唯美、流畅的卷草、云纹等线条，刀口断面清晰地显露出不同颜色的漆层，充满灵动之美。红黑两色也是云雕技艺的主色调，沉寂冷静的黑色和活跃跳动的红色结合在一起形成强烈的色彩对比。`,
       `平遥推光漆器髹饰技艺发源于山西中部的平遥县，传布至北方广大地区。
以大漆和天然桐油炼制罩漆，用砂纸、木炭、头发、砖灰、麻油等逐次推光，使漆器光亮如镜。平遥推光漆髹饰品分为实用品（如漆柜、漆箱、条案、茶几）和陈设品（如屏风、漆画）两大类，具有很高的实用价值和工艺价值。`,
       `甘肃天水名产有雕填、镶填、镶银、描金等品种,其中以雕填最为著名。
天水漆器已有近百年历史,在清代主要有木胎、皮胎,髹饰技法仅雕填一种,生产木碗、手杖等日用品。天水漆雕工艺历史悠久，考古资料证明，有两千多年的历史。在全国漆器行业中占据着重要地位。《诗经，秦风》“阪有漆、隰有栗”，为秦地产漆最早记载。可见天水盛产生漆，早已闻名于世。延续至今，天水仍为全国重点产漆地区之一，天水所产生漆除供本地销外，畅销国内各地。`
    ];

    const images = [
        './images/首页/螺钿漆器图.png',
        './images/首页/螺钿漆器图 (2).png',
        './images/首页/螺钿漆器图 (1).png',
        
        './images/首页/螺钿漆器图 (3).png'
    ];

    let currentIndex = 0;

    function updateContent() {
        console.log(`Current Index: ${currentIndex}`);
        console.log(`Current Content: ${contents[currentIndex]}`);
        console.log(`Current Image: ${images[currentIndex]}`);
        chnTitleElement.innerHTML = titlesChn[currentIndex];
        contentElement.innerHTML = contents[currentIndex];
        imageElement.src = images[currentIndex];
    }

    document.querySelector('.appreciation-content-miner-left').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : contents.length - 1;
        updateContent();
    });

    document.querySelector('.appreciation-content-miner-right').addEventListener('click', () => {
        currentIndex = (currentIndex < contents.length - 1) ? currentIndex + 1 : 0;
        updateContent();
    });

    // Initialize content
    updateContent();
});





document.addEventListener('DOMContentLoaded', () => {
    const contentNameElement = document.querySelector('.culture-content-name');
    const contentEnglishNameElement = document.querySelector('.culture-content-englishname');
    const contentWordElement = document.querySelector('.culture-content-right-word');
    const pic1Element = document.querySelector('.culture-content-mid-pic1');
    const pic2Element = document.querySelector('.culture-content-mid-pic2');

    const names = ["陈思碧", "雷天勇"]; // 两张图片对应的名称
    const englishNames = ["CHEN SI BI", "LEI TIAN YONG"]; // 两张图片对应的英文名称
    const words = [
        // 两张图片对应的描述
        "一位在漆器艺术领域有着深厚造诣的大师。她于1988年成为重庆市第一位高级工艺美术师，并荣获四川省工艺美术大师的称号。随后，她的艺术成就得到了更广泛的认可，1990年被评为中国漆艺家，1992年成为享受国务院特殊津贴的专家，1993年更是被评为第三届中国工艺美术大师，重庆获此殊荣的仅有三人。",
        "雷天勇1969年出生在平遥一个艺术氛围浓厚的家庭，外公从事漆器生产加工，母亲擅长中国画，从小的耳濡目染加之几十年的钻研创作，他熟练掌握了平遥推光漆器传统技艺，并且不断创新技法，探寻着属于自己的“漆彩人生”。中国文房四宝漆艺大师、山西省工艺美术大师，唐都公司技术总监，山西省十五届政协委员、山西民盟委员。"
    ];

    const imagePaths = [
        "./images/首页/陈思碧.png", // 第一张图片路径
        "./images/首页/雷天勇.png" // 第二张图片路径
    ];

    let currentIndex = 0;

    function updateContent() {
        contentNameElement.textContent = names[currentIndex];
        contentEnglishNameElement.textContent = englishNames[currentIndex];
        contentWordElement.textContent = words[currentIndex];
        pic1Element.src = imagePaths[currentIndex];
        
        currentIndex = (currentIndex + 1) % 2; // 循环切换
        pic2Element.src = imagePaths[currentIndex]
        setTimeout(updateContent, 5000); // 5000ms 后切换下一张图片
    }

    // 初始化内容
    updateContent();
});



document.addEventListener('DOMContentLoaded', () => {
    const leftStep = document.querySelector('.steps-content-middle-left');
    const mainStep = document.querySelector('.steps-content-middle-main');
    const rightStep = document.querySelector('.steps-content-middle-right');
    const topElements = document.querySelectorAll('.steps-content-middle > div > .steps-content-middle-top');
    const bottomContent = document.querySelector('.steps-content-middle-bottom-content')
    leftStep.addEventListener('click', () => {
        updateContent("大漆采自漆树，每年三伏天，漆农用河蚌壳破开树皮，在树木上划开如柳叶刀的刀口，树体就会渗出乳白色液体，顺着柳叶口缓缓流入竹筒，然后让有经验的工匠制成大漆。", leftStep);
    });

    mainStep.addEventListener('click', () => {
        updateContent("漆器工艺的胎身常用木胎和脱胎两种形式。制作木胎漆器要精选纹理细不变形的优质木材制作榫卯无缝式木胎；而脱胎则是以泥土、石膏等塑成胎坯，以大漆为粘合剂。", mainStep);
    });

    rightStep.addEventListener('click', () => {
        updateContent("每一件漆器剔犀工艺品都是用黑红两种颜色的大漆髹漆，至少要有5个红色层和5个黑色层组成，每个色层要经过数十遍上漆来覆盖下方色层，每一遍上漆都要在恒温恒湿的地窨中用24小时氧化，历经百余天，历经百遍", rightStep);
    });

    function updateContent(content, activeStep) {
        // 移除所有步骤的活动类
        [leftStep, mainStep, rightStep].forEach(step => {
            step.classList.remove('active');
        });

        // 将活动类添加到被点击的步骤上
        activeStep.classList.add('active');

        // 根据活动类的存在与否，动态修改对应的top元素的背景大小
        topElements.forEach(topElement => {
            if (topElement.parentElement === activeStep) {
                topElement.style.backgroundSize = "contain"; // 替换为你想要的背景大小
            } else {
                topElement.style.backgroundSize = "cover"; // 替换为你想要的背景大小
            }
        });

        // 更新底部内容为被点击的步骤的内容
        bottomContent.textContent = content;
    }
});
