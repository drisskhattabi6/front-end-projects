const passwordOutput = document.querySelector('#password')
const copyBtn = document.querySelector('#copy')
const lengthInput = document.querySelector('#range-input')
const lengthOutput = document.querySelector('#length-value')
const checkbox1 = document.querySelector('#checkbox1')
const checkbox2 = document.querySelector('#checkbox2')
const checkbox3 = document.querySelector('#checkbox3')
const checkbox4 = document.querySelector('#checkbox4')
const generateBtn = document.querySelector('#generate')

const symbols = '{}()-_"/@#&,.?!<>+=[]$*'
const numbers = "0123456789"
const lowercaseChars = "abcdefghijklmnopqrstvwxyz"
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTVWXYZ"

generateBtn.addEventListener('click', genaratePW)

function genaratePW() {
    let length = lengthInput.value
    let data = ''
    let password = ""

    if (checkbox1.checked == true) data += uppercaseChars
    if (checkbox2.checked == true) data += lowercaseChars
    if (checkbox3.checked == true) data += numbers
    if (checkbox4.checked == true) data += symbols

    for ( let i = 0 ; i < length ; i++ ) {
        password +=  data[Math.floor(Math.random() * data.length)]
    }
    console.log(password);
    passwordOutput.value = password
}

lengthInput.addEventListener('input', function () {
    lengthOutput.textContent = lengthInput.value
})

copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(passwordOutput.value)
    .then(() => alert("the password has copied"))
    .catch(() => alert("the password has not copied"))
    
})