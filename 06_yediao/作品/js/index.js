let body = document.body
let nav = document.querySelector('.nav')
body.onmouseover = function () {
    nav.style.opacity = '1'
}
body.onmouseout = function () {
    nav.style.opacity = '0'
}
nav.onmouseout = function () {
    nav.style.transform = `scale(1)`
    nav.style.top = '6vh'
    nav.style.left = '3vw'
}
nav.onmouseover = function () {
    nav.style.transform = `scale(2)`
    nav.style.top = '18vh'
    nav.style.left = '7vw'
}
setTimeout(nav.onmouseover, 500)
let btns = document.querySelectorAll('.btn')
let circle = document.querySelector('.circle')
let wz = document.querySelector('.wz')
const video = document.querySelector('#videoModal')
const source = document.querySelector('.TP')
const Img = ['../images/YX 1.svg', '../images/YX 2.svg', '../images/YX 3.svg', '../images/YX 4.svg']
const WZ = ['叶雕简介，以叶为纸，精雕细琢，展现自然之美', '叶雕历史，源自周代，千年传承，展现自然与人文之美', '叶雕工艺传承，自然之美，匠心独运，传承千年技艺', '叶雕精品馆，荟萃匠心之作，领略自然与艺术的交融']
const Videos = ['../images/index-1.mp4', '../images/index-2.mp4', '../images/index-3.mp4', '../images/index-1.mp4',]
btns.forEach((btn, index) => {
    // console.log(btn)
    btn.addEventListener('click', function () {
        txtAnim5.init(wz)
        // 恢复所有按钮到原始状态
        btns.forEach(otherBtn => {
            if (otherBtn !== btn) {
                otherBtn.style.transform = 'rotate(0deg)'
            }
        })
        // 如果当前按钮已经旋转了90度，则再次点击时恢复到原始状态
        if (this.style.transform === 'rotate(90deg)') {
            this.style.transform = 'rotate(0deg)'
            circle.style.backgroundImage = `url('${Img[0]}')`
            wz.innerText = `${WZ[0]}`
            video.style.display = 'none'
        } else {  // 否则，旋转90度
            this.style.transform = 'rotate(90deg)'
            circle.style.backgroundImage = `url('${Img[index]}')`
            wz.innerText = `${WZ[index]}`
            video.style.display = 'block'
            source.src = `${Videos[index]}`
            source.currentTime = 0;
            document.querySelector('#videoModal video').load();
            source.onloadeddata = function () {
                document.querySelector('#videoModal video').play();
            };
            this.style.transform = 'rotate(0deg)'
        }
    })
})
// 当点击弹窗外部区域时关闭弹窗
window.onclick = function (event) {
    var modal = document.getElementById('videoModal');
    if (event.target == modal) {
        modal.style.display = "none";
        closeModal()
    }
}
function closeModal() {
    var modal = document.getElementById('videoModal');
    var video = document.querySelector('#videoModal video');
    modal.style.display = "none";
    video.pause(); // 停止视频播放
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
                    }.bind(this), 25); // 使用bind来确保this指向正确的span元素  
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
                    }.bind(this), 20); // 使用bind来确保this指向正确的span元素  
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
                    }.bind(this), 20); // 使用bind来确保this指向正确的span元素  
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
                    }.bind(this), 20); // 使用bind来确保this指向正确的span元素  
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
                    }.bind(this), 20); // 使用bind来确保this指向正确的span元素  
                };

                txtAnimThis.arrTxt[index].onmouseout = function () {
                    clearInterval(this.timer); // 清除定时器  
                    this.style.top = "0px"; // 重置位置  
                };
            })(i); // 立即执行函数表达式，传入当前索引  
        }
    }
};
var txtAnim6 = {
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
                    }.bind(this), 20); // 使用bind来确保this指向正确的span元素  
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
const f4 = document.querySelector('.f4')
txtAnim1.init(f1)
txtAnim2.init(f2)
txtAnim3.init(f3)
txtAnim4.init(f4)
