const check = document.querySelector('.checkbox')
const root = document.querySelector(':root')
const modeTxt = document.querySelector('#mode')
var mode = "dark"

check.addEventListener('click', function () {
    check.classList.toggle('right')
    if ( mode == "light") {
        root.style.setProperty('--color1', '#fff')
        root.style.setProperty('--color2', 'hsl(228, 25%, 12%)')
        root.style.setProperty('--color3', 'hsl(228, 12%, 44%)')
        root.style.setProperty('--color4', 'hsl(228, 28%, 20%)')
        root.style.setProperty('--color5', 'hsl(230, 22%, 28%)')
        modeTxt.textContent = "Light Mode"
        mode = "dark"
    } else {
        root.style.setProperty('--color1', 'rgb(0, 0, 0)')
        root.style.setProperty('--color2', 'hsl(0, 100%, 100%)')
        root.style.setProperty('--color3', 'hsl(228, 12%, 44%)')
        root.style.setProperty('--color4', 'hsl(227, 47%, 96%)')
        root.style.setProperty('--color5', 'hsl(229, 41%, 90%)')
        modeTxt.textContent = "Dark Mode"
        mode = "light"
    }
})