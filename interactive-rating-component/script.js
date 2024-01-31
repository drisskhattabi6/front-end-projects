const submitBtn = document.querySelector('#submit')
const userRating = document.querySelector('#user-rating')
const ratingBtns = document.querySelectorAll('.rate')
const firstContent = document.querySelector(".content")
const secondContent = document.querySelector(".result")

ratingBtns.forEach(rate => {
    rate.addEventListener('click', function () {
        clearSelect()
        rate.style.backgroundColor = "hsl(25, 97%, 53%)"
        rate.style.color = "hsl(0, 0%, 100%)"
    })
})

function clearSelect() {
    ratingBtns.forEach(rate => {
        rate.style.backgroundColor = "hsl(210, 16%, 20%)"
        rate.style.color = "hsl(217, 12%, 63%)"
    })
}


submitBtn.addEventListener('click', function () {
    let index = -1
    for (let i = 0 ; i < ratingBtns.length ; i++) 
        if (window.getComputedStyle(ratingBtns[i], null).getPropertyValue("background-color") === "rgb(251, 116, 19)") index = i + 1

    if (index == -1) {
        alert("choose a rate plz!!!")
        return
    } 

    firstContent.style.display = "none"
    secondContent.style.display = "flex"
    userRating.textContent = index
})