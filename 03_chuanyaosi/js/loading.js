// loading效果
const loading = {
    container: document.querySelector('.loading'),
    leftMon: document.querySelector('.left'),
    rightMon: document.querySelector('.right'),
    centerMon: document.querySelector('.center'),
    out() {
        this.container.classList.remove('loading_in')
        this.leftMon.classList.add('leftMon')
        this.rightMon.classList.add('rightMon')
        this.centerMon.classList.add('centerMon')
        setTimeout(() => {
            this.container.classList.add('loading_out')
        }, 500)
        setTimeout(() => {
            document.querySelector('body').removeChild(this.container)
        }, 2000)
    },
    in() {
        this.container.classList.remove('loading_out')
        this.container.classList.add('loading_in')
    }
}
window.addEventListener('load', () => {
    loading.in()
    setTimeout(() => {
        loading.out()
    }, 2000)
})