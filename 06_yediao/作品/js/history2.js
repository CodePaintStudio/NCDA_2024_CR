const btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    window.location.href = 'Back.html'
})
const wzs = document.querySelectorAll('.wz')
const Fs = document.querySelectorAll('.f')
const items = document.querySelectorAll('.item')
Fs.forEach((f, index) => {
    f.addEventListener('click', function () {
        Fs.forEach(otherF => {
            if (f !== otherF) {
                otherF.style.opacity = '1'
            }
        })
        wzs.forEach(otherW => {
            if (wzs[index] !== otherW) {
                otherW.style.display = 'none';
            }
        })
        f.style.opacity = '0';
        wzs[index].style.display = 'block';
        if (index === 0) {
            setTimeout(() => {
                window.location.href = '1.html'
            }, 1000)
        } else if (index === 1) {
            setTimeout(() => {
                window.location.href = '2.html'
            }, 1000)
        } else if (index === 2) {
            setTimeout(() => {
                window.location.href = '3.html'
            }, 1000)
        }
    })
});
