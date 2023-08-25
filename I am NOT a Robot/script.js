var checkbox = document.getElementById("checkbox");
checkbox.disabled = true;
var btn = document.getElementById("btn");
var colors = document.getElementsByClassName("colors");
var choose_box = document.getElementById("choose");
var wanted_color = document.getElementById("wanted_color");
var arr_color = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
var color;

function color_maker() {
    let all = "";
    for (let i = 0 ; i < 6 ; i++) {
        let index = Math.floor(Math.random() * 16);
        all +=  arr_color[index];
    }
    return all;
}

color = color_maker();
let index = Math.floor(Math.random() * 9);
wanted_color.textContent = "#" + color;
colors[index].textContent = "#" + color;
colors[index].style.backgroundColor = "#" + color;

for (let i = 0 ; i < 9 ; i++ ) {
    if(i != index) {
        color = color_maker();
        colors[i].textContent = "#" + color;
        colors[i].style.backgroundColor = "#" + color;
    }
}

for (let i = 0 ; i < 9 ; i++ ) {
    colors[i].addEventListener("click", function () {
        if (this.textContent == wanted_color.textContent) {
            //alert("you are human.");
            btn.classList.remove("btn_not_active");
            btn.classList.add("btn_active");
            checkbox.ariaChecked;
            choose_box.style.pointerEvents = "none";
            checkbox.disabled = false;
            checkbox.checked = true;
        } else {
            alert("you are robot!!!");
            location.reload();
        }
    });
}