const advice_id = document.getElementById('advice-id')
const advice_text = document.getElementById('advice-text')
const btn = document.getElementById('btn')

btn.addEventListener('click', function () {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(response => { 
            console.log(response.slip)
            advice_id.textContent = response.slip.id
            advice_text.textContent = '" ' +  response.slip.advice + ' "'
        }).catch(err => {

        });
})