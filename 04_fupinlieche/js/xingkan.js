    // 轮播图
    effect = 0
    let flag=true;
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 2500,
      slidesPerView: 3,
      spaceBetween: 30,
      watchSlidesProgress: true,
      on: {
        setTranslate: function () {
          slides = this.slides
          for (i = 0; i < slides.length; i++) {
            slide = slides.eq(i)
            progress = slides[i].progress
            slide.css({ 'opacity': '', 'background': '' }); slide.transform('');
              slide.transform('scale(' + (1 - Math.abs(progress) / 8) + ')')
          }
        },
        setTransition: function (transition) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            slide.transition(transition);
          }
        },
        
      },
      speed:1500,
      
      autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        setAutoPlay: function () {
          slides = this.slides
          for (i = 0; i < slides.length; i++) {
            slide = slides.eq(i)
            slide.addEventListener('mouseenter', function() {  
              autoplay=false;
            });  
            slide.addEventListener('mouseenter', function() {  
              autoplay=true;
            });  
          }
          setAutoPlay();
        }
        },
        
        
    });
    
    
    // 字动画
    const text_out = document.querySelectorAll(".text_out");
    const img_arr = [
      "../images/xingkan/zi/1.png",
      "../images/xingkan/zi/2.png",
      "../images/xingkan/zi/6.png",
      "../images/xingkan/zi/8.png",
    ];
    let timer = null;
    function fun_text_out() {
      const sunxu_index_arr = rand_indx();
      sunxu_index_arr.forEach((item, index) => {
        text_out[index].src = `${img_arr[item]}`;
      });
      out_display(sunxu_index_arr);
    }
    fun_text_out();
    function rand_indx() {
      let out = [];
      let index_arr = [0, 1, 2, 3];
      while (out.length < 4) {
        let index = parseInt(Math.random() * index_arr.length);
        out.push(index_arr[index]);
        index_arr.splice(index, 1);
      }
      return out;
    }
    
    function out_display(sunxu_index_arr) {
      setTimeout(() => {
        text_out[sunxu_index_arr[0]].style.opacity = "1";
      }, 500);
      setTimeout(() => {
        text_out[sunxu_index_arr[1]].style.opacity = "1";
      }, 1000);
      setTimeout(() => {
        text_out[sunxu_index_arr[2]].style.opacity = "1";
      }, 1500);
      setTimeout(() => {
        text_out[sunxu_index_arr[3]].style.opacity = "1";
      }, 2000);
    }
    