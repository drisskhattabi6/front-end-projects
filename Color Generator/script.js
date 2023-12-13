
//var arr_color = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const colors_box = document.getElementById("colors")
const new_colors = document.getElementById("new-colors")

function color_maker() {
    let color = "";
    for (let i = 0 ; i < 6 ; i++) {
        let index = Math.floor(Math.random() * 0xffffff).toString(16);
        //color +=  arr_color[index];
        color = `#${index.padStart(6,"f")}`
    }

    return color;
}

function colors() {
    for(i = 0 ; i < 30 ; i++) {
        let color = color_maker()
        let colorDiv = document.createElement('div')
        colorDiv.textContent =  color
        colorDiv.style.backgroundColor =  color
        colorDiv.style.boxShadow = "3px 3px 3px 3px " + color + "88"
        colorDiv.className = "color"
        colorDiv.setAttribute('title', 'click to copy the color')

        colors_box.appendChild(colorDiv)

        colorDiv.addEventListener('click', function () {
            navigator.clipboard.writeText(color).then(()=>{
                colorDiv.textContent = "Copied!"
                setTimeout(()=>{
                    colorDiv.textContent = color
                }, 1500)
            })
        })
    }
}

colors() 

new_colors.addEventListener('click', function () {
    colors_box.innerHTML = ""
    colors() 
})