const btn = document.getElementById("btn1")
const input = document.getElementById("input1")
const error = document.getElementById("error1")
console.log(btn, input, error);

btn.addEventListener('click', function () {
    error.textContent = ""
    if ( input.value == "" )
        error.textContent = "enter your email plz!!!"

    input.value = ""
})