const logo_bock = document.querySelector('.logo_bock')
logo_bock.addEventListener('click', function () {
    window.location.href = 'Back.html';
})
const sections = document.querySelectorAll('.section')
sections[0].addEventListener('click', function () {
    window.location.href = '../HTML/Introduction_01.html';
})
sections[0].addEventListener('mouseover', function () {
    this.style.color = 'red'
})
sections[0].addEventListener('mouseout', function () {
    this.style.color = 'rgba(0, 0, 0, 1)'
})
sections[1].addEventListener('click', function () {
    window.location.href = '../HTML/Introduction_02.html'
})
sections[1].addEventListener('mouseover', function () {
    this.style.color = 'red'
})
sections[1].addEventListener('mouseout', function () {
    this.style.color = 'rgba(0, 0, 0, 1)'
})
sections[2].addEventListener('click', function () {
    window.location.href = '../HTML/Introduction_03.html';
})
sections[2].addEventListener('mouseover', function () {
    this.style.color = 'red'
})
sections[2].addEventListener('mouseout', function () {
    this.style.color = 'rgba(0, 0, 0, 1)'
})

var txtAnim = {
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
const txtDom1 = document.getElementById("txtDom1");
const txtDom2 = document.getElementById("wz2");
const txtDom3 = document.getElementById("txtDom3");

txtAnim.init(txtDom1);
txtAnim2.init(txtDom2);
txtAnim3.init(txtDom3);
const q = document.querySelector('.q')