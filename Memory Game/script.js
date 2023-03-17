const game_box = document.querySelector('.game-box')
const score = document.querySelector('#score')
//const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "9.jpg", "10.png", "15.webp"]

const imgs = [
    {
        img : "1.jpg",
        count : 0
    },
    {
        img : "2.jpg",
        count : 0
    },
    {
        img : "3.jpg",
        count : 0
    },
    {
        img : "4.jpg",
        count : 0
    },
    {
        img : "5.jpg",
        count : 0
    },
    {
        img : "6.jpg",
        count : 0
    },
    {
        img : "7.jpg",
        count : 0
    },
    {
        img : "8.jpg",
        count : 0
    },
    {
        img : "9.jpg",
        count : 0
    },
    {
        img : "10.png",
        count : 0
    },
    {
        img : "12.jpg",
        count : 0
    },
    {
        img : "13.webp",
        count : 0
    },
    {
        img : "14.jpg",
        count : 0
    },
    {
        img : "15.webp",
        count : 0
    }
    
]

function getImg() {
    let index
    let end = false;

    while (end == false) {

        index = Math.floor(Math.random() * 14)

        if (imgs[index].count != 2) {
            imgs[index].count++
            return imgs[index].img
        }
    }
    
}

for(let i = 0 ; i < 28 ; i++) {

    let div = document.createElement('div')
    div.className = "option"

    let l = getImg()
    div.innerHTML = `
                <img src="imgs/${l}" alt="img of ${l}"">
                <div class="roadblock" data-num="${l}"></div>`

    game_box.appendChild(div)

    div.addEventListener("click", check)
}

let checkedData = {
    firstData : null,
    time : 0,
    target : null
}

let sc = 0

function check(e) {

    e.target.parentElement.classList.toggle("selected")
    let dataNum = e.target.getAttribute('data-num')
    console.log(dataNum);

    if (checkedData.time == 0) {
        checkedData.firstData = dataNum
        checkedData.time++
        checkedData.target = e.target.parentElement
    } else {
        if (checkedData.firstData == dataNum) {
            checkedData.target.classList.add('active')
            e.target.parentElement.classList.add('active')
            score.textContent = ++sc

            console.log("true");

        } else {
            setTimeout(()=>{
                checkedData.target.classList.remove('selected')
                e.target.parentElement.classList.remove('selected')
            }, 500)
            score.textContent = ++sc
            console.log("false");
        }
        checkedData.time = 0
    }
    
}