const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    window.location.href = '../HTML/back1.html'
})

// 当页面滚动时显示或隐藏按钮
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

// 点击按钮回到页面顶部
function topFunction() {
    // 平滑滚动动画
    scrollToTop(1000); // 滚动时间为1000ms
}

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15);
    var scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}
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
var txtAnim4 = {
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
var txtAnim5 = {
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
const wz1 = document.querySelector('.wz1')
const wz2 = document.querySelector('.wz2').querySelector('span')
const wz4 = document.querySelector('.wz4').querySelector('span')
const wz5 = document.querySelector('.wz5').querySelector('span')
txtAnim1.init(wz1)
txtAnim2.init(wz2)
txtAnim4.init(wz4)
txtAnim5.init(wz5)