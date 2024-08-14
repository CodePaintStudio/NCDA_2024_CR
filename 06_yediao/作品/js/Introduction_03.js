const btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    window.location.href = '../HTML/back1.html'
})

// 获取.bock元素
const bock = document.querySelector('.bock');
const wz2 = document.querySelector('.wz2');
// 添加鼠标移入事件监听
bock.addEventListener('mouseenter', function () {
    // 获取.bock内的所有img元素
    var images = bock.querySelectorAll('img');
    for (var i = 0; i < images.length; i++) {
        if (i < 2) {
            images[i].style.transform = 'rotate(45deg)';
        } else {
            images[i].style.transform = 'rotate(-45deg)';
        }
        images[i].style.transition = 'transform 1s ease'; // 添加过渡效果
        wz2.style.color = '#000'
    }
});

// 添加鼠标移出事件监听
bock.addEventListener('mouseleave', function () {
    // 获取.bock内的所有img元素
    var images = bock.querySelectorAll('img');
    // 遍历所有的img元素并移除旋转样式
    images.forEach(function (img) {
        img.style.transform = 'none';
        img.style.transform = 'scale(1.5)'
        wz2.style.color = 'rgba(69, 58, 34, 1)'
    });
});

const wz = document.querySelector('.wz')
const f1 = wz2.querySelector('span')
const q = document.querySelector('.q')
q.addEventListener('click', function () {
    window.location.href = '../HTML/Introduction.html'
})
var txtAnim1 = {
    len: 0,
    txtDom: "",
    arrTxt: [],
    init: function (obj) {
        this.obj = obj;
        this.txtDom = obj.innerHTML.replace(/\s+/g, "");
        this.len = this.txtDom.length;
        obj.innerHTML = "";
        this.addDom();
        this.start(); // 调用start方法来初始化动画  
    },
    addDom: function () {
        for (var i = 0; i < this.len; i++) {
            var spanDom = document.createElement("span");
            spanDom.innerHTML = this.txtDom.substring(i, i + 1);
            spanDom.style.position = "relative"; // 直接在创建时设置position  
            this.obj.appendChild(spanDom);
            this.arrTxt.push(spanDom);
        }
    },
    start: function () {
        let txtAnimThis = this; // 保存当前txtAnim的上下文  
        console.log(this.len);
        for (var i = 0; i < this.len; i++) {
            (function (index) { // 使用闭包来捕获当前索引  
                txtAnimThis.arrTxt[index].onmouseover = function () {
                    this.stop = 0;
                    this.speed = -1;
                    this.timer = setInterval(function () {
                        this.stop += this.speed;
                        if (this.stop <= -20) {
                            this.speed = 1;
                        }
                        this.style.top = this.stop + "px";

                        if (this.stop >= 0) {
                            clearInterval(this.timer);
                            this.style.top = "0px";
                        }
                    }.bind(this), 15); // 使用bind来确保this指向正确的span元素  
                };

                txtAnimThis.arrTxt[index].onmouseout = function () {
                    clearInterval(this.timer); // 清除定时器  
                    this.style.top = "0px"; // 重置位置  
                };
            })(i); // 立即执行函数表达式，传入当前索引  
        }
    }
};
var txtAnim2 = {
    len: 0,
    txtDom: "",
    arrTxt: [],
    init: function (obj) {
        this.obj = obj;
        this.txtDom = obj.innerHTML.replace(/\s+/g, "");
        this.len = this.txtDom.length;
        obj.innerHTML = "";
        this.addDom();
        this.start(); // 调用start方法来初始化动画  
    },
    addDom: function () {
        for (var i = 0; i < this.len; i++) {
            var spanDom = document.createElement("span");
            spanDom.innerHTML = this.txtDom.substring(i, i + 1);
            spanDom.style.position = "relative"; // 直接在创建时设置position  
            this.obj.appendChild(spanDom);
            this.arrTxt.push(spanDom);
        }
    },
    start: function () {
        let txtAnimThis = this; // 保存当前txtAnim的上下文  
        console.log(this.len);
        for (var i = 0; i < this.len; i++) {
            (function (index) { // 使用闭包来捕获当前索引  
                txtAnimThis.arrTxt[index].onmouseover = function () {
                    this.stop = 0;
                    this.speed = -1;
                    this.timer = setInterval(function () {
                        this.stop += this.speed;
                        if (this.stop <= -20) {
                            this.speed = 1;
                        }
                        this.style.top = this.stop + "px";

                        if (this.stop >= 0) {
                            clearInterval(this.timer);
                            this.style.top = "0px";
                        }
                    }.bind(this), 15); // 使用bind来确保this指向正确的span元素  
                };

                txtAnimThis.arrTxt[index].onmouseout = function () {
                    clearInterval(this.timer); // 清除定时器  
                    this.style.top = "0px"; // 重置位置  
                };
            })(i); // 立即执行函数表达式，传入当前索引  
        }
    }
};
txtAnim1.init(wz);
txtAnim2.init(f1);