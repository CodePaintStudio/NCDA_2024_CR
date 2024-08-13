function returnIndex() {
    const index = document.querySelector('.diet')
    index.addEventListener('click', () => {
        window.location.href = `../index.html`
    })
}
function goVideo(){
    const index = document.querySelector('.video')
    index.addEventListener('click', () => {
        window.location.href = `../html/01.html`
    })
}
document.addEventListener('DOMContentLoaded', ()=>{
    returnIndex()
    goVideo()
})