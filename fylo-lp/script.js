const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')

btn1.addEventListener('click', function () {
    error1.textContent = ""
    if (input1.value == "") 
        error1.textContent = "enter your email Plz!"
})

btn2.addEventListener('click', function () {
    error2.textContent = ""
    if (input2.value == "") 
        error2.textContent = "enter your email Plz!"
})