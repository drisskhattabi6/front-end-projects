const input1 = document.getElementById('input1')
const btn1 = document.getElementById('btn1')
const error1 = document.getElementById('error')

btn1.addEventListener('click', function () {
    if (!input1.value && input1.value == "") {
        input1.style.borderBlockColor = "red"
        error1.style.display = "block"
        setTimeout(function () {
            input1.style.borderBlockColor = "rgb(205, 205, 205)"
            error1.style.display = "none"
        }, 3000)
    } else {
        input1.value = ""
    }
})