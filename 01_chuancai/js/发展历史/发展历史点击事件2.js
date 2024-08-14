const detailsMap = {
  yuan: {
    imgSrc: '../image/川菜历史/醒园录 1.png',
    textContent: '清乾隆时期，宦游浙江的四川罗江人李化楠在闲暇时间收集家厨烹饪经验。他的儿子李调元将他收集的厨艺经验刻版为食经书《醒园录》。《醒园录》是一部清代重要的食书，它详细记载了烹调的原料选择和烹饪操作程序，对于后来技艺的提高帮助极大。《醒园录》中系统地搜集了江浙家厨和中馈菜的38种烹调方法，使现代川菜在中下层上受到来自于江浙菜系的影响。',
    imgClass: 'yuan-class',
    detailsContent: '清代食书：《醒园录》',
    contentClass: 'yuan-content'
  },
  song: {
    imgSrc: '../image/川菜历史/古法制糖 2.png',
    textContent: '两宋时期，古典川菜成为全国的独立菜系。苏轼第一个身体力行，创造性把四川烹饪发扬光大到中原、江南和岭南地区。浙江人陆游长期在四川为官，也对川菜兴味浓厚。两宋四川饮食的重大成就，就在于其烹饪开始被送到境外，让境外的川人和不是川人的普通人能在专门的食店里吃到具有地方特色的风味饮食，这是四川菜第一次成为一个独立的烹调体系的伊始。',
    imgClass: 'song-class',
    detailsContent: '古法制糖',
    contentClass: 'song-content',
  },
  sui: {
    imgSrc: '../image/川菜历史/唐代点心 1.png',
    textContent: '隋唐五代时期饮食水平达到了新的高度，在诗里有所反映，杜甫在四川夔府时，曾作《槐叶冷淘》：“青青高槐叶，采掇会中厨。新面来近市，汁滓宛相俱。入鼎资过熟，加餐愁欲无。碧鲜俱照箸，香饭兼苞芦。”《食典》以其高达一百卷的数量，应该是隋唐至五代期间内容最浩大的食谱书，反映了皇家御厨的厨艺，也可以窥探出巴蜀烹饪文化在五代时期的五彩缤纷。',
    imgClass: 'sui-class',
    detailsContent: '唐朝点心',
    contentClass: 'sui-content',
  },
  liang: {
    imgSrc: '../image/川菜历史/宴饮图 1.png',
    textContent: '三国时，成都作为鼎足而三国家之一的首都，登上了中国的政治舞台。西晋时，左思根据文献和询问在洛阳的蜀中人士所写出的《蜀都赋》，盛赞蜀中物产丰富，所谓“蒟蒻茱萸，瓜畴芋区，甘蔗辛姜，阳蓲阴敷。”因此才有成都宴会上的“肴槅四陈，觞以清（酉票）”。魏晋时期的古典川菜显现出与西汉时代风格不同的特色。',
    imgClass: 'liang-class',
    detailsContent: '古法制糖',
    contentClass: 'liang-content',
  },
  qin: {
    imgSrc: '../image/川菜历史/秦汉地图 2.png',
    textContent: '秦灭蜀到西汉末年的三百余年间，由于第一次移民以后蜀经济的发展，成都的繁荣导致了物产的丰富与饮食业的兴旺，这就是扬雄《蜀都赋》里说的：“调夫五味，甘甜之和，芍药之羹，江东鲐鲍，陇西牛羊”及引具有珍稀野禽野兽“五肉七菜”的宴菜。从这几句简短的话，我们可以推断，古典四川菜在西汉晚期时已经初具规模，而且中原烹饪文化的精神。',
    imgClass: 'qin-class',
    detailsContent: '秦汉时期巴蜀地图',
    contentClass: 'qin-content',
  },
  XianQin: {
    imgSrc: '../image/川菜历史/三星堆.png',
    textContent: '从巴蜀文化的出土文物就可见川菜的发展源远流长。商代以前，巴蜀就已经能制出精美的陶质食器。巫山大溪遗址出土的新石器晚期的陶器中，有餐饮器具鼎、釜、罐、杯、盘、碗、盒、豆、簋、壶等。到商周时期，巴蜀不但制作出了精美的青铜餐饮器具，而且已有较为丰富的烹饪原料和一定数量的菜肴品种，并组合成筵宴。',
    imgClass: 'XianQin-class',
    detailsContent: '三星堆出土：陶三足炊器',
    contentClass: 'XianQin-content',
  }
};



const chooseRightOnes = document.querySelectorAll('.main-choose-right-one');
const detailsImg = document.querySelector('.main-details-images-img');
const detailsContent = document.querySelector('.main-details-content');
const detailsImagesContent = document.querySelector('.main-details-images-content');


// 为每个.main-choose-right-one元素添加点击事件监听器  
chooseRightOnes.forEach(el => {
  el.addEventListener('click', function () {
    // 获取被点击元素的data-period属性值
    const period = this.getAttribute('data-period');

    // 检查detailsMap中是否有对应的条目
    if (detailsMap[period]) {
      // 更新图片、文本内容和class
      detailsImg.src = detailsMap[period].imgSrc;
      detailsContent.textContent = `${detailsMap[period].textContent}`
      detailsImagesContent.textContent = `${detailsMap[period].detailsContent}`;
      detailsImg.className = `${detailsMap[period].imgClass}`;
      detailsImagesContent.className = `${detailsMap[period].contentClass}`
    }
  });
});