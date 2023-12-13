const container = document.querySelector('.container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22',
'#2ecc71', '#ff0']
const elts_num = 360

for(let i = 0 ; i < elts_num ; i++) {
    const elt = document.createElement('div')
    elt.className = "elt"
    elt.addEventListener("mouseover", () => hover(elt))
    elt.addEventListener("mouseout", () => out(elt))
    container.appendChild(elt)
}

function hover(elt) {
    color = randomColor()
    elt.style.backgroundColor = color
    elt.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function out(elt) {
    elt.style.backgroundColor = '#1d1d1d'
    elt.style.boxShadow = `0 0 2px #000`
}

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}