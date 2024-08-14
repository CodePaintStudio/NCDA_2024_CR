const btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    // window.history.back()
    window.location.href = '../HTML/back1.html'
})

const video = document.querySelector('.SP')
const Play_btn = document.querySelector('.btn2')
Play_btn.addEventListener('click', function () {
    if (video.paused) {
        video.play()
        Play_btn.style.opacity = '0'
    }
    else {
        video.pause()
        Play_btn.style.opacity = '1'
    }
})
video.addEventListener('click', function () {
    video.pause()
    Play_btn.style.opacity = '1'
})
function showOverlay1() {
    document.querySelector('.overlay1').style.display = "block";
    document.body.style.overflow = 'hidden'; // 禁止页面滚动
}

function hideOverlay1() {
    document.querySelector('.overlay1').style.display = "none";
    document.body.style.overflow = 'auto'; // 启用页面滚动
}

function showOverlay2() {
    document.querySelector('.overlay2').style.display = "block";
    document.body.style.overflow = 'hidden'; // 禁止页面滚动
}

function hideOverlay2() {
    document.querySelector('.overlay2').style.display = "none";
    document.body.style.overflow = 'auto'; // 启用页面滚动
}
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
const q = document.querySelector('.q')
q.addEventListener('click', function () {
    window.location.href = '../HTML/Introduction.html'
})
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
var txtAnim3 = {
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
const f1 = document.querySelector('.f1')
const f2 = document.querySelector('.f2')
const f3 = document.querySelector('.f3')
txtAnim1.init(f1)
txtAnim2.init(f2)
txtAnim3.init(f3)
