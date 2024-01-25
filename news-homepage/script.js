const barIcon = document.getElementById('bar-icon')
const xMark = document.getElementById('xmark')
const rep = document.querySelector('.rep')

barIcon.addEventListener('click', function () {
    rep.style.display = "flex"
    rep.style.transform = "scale(1)"
})

xMark.addEventListener('click', function () {
    rep.style.transform = "scale(0)"
    setTimeout(function () {
        rep.style.display = "none"
    }, 1000)
})