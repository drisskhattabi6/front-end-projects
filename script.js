const youtubeBtn = document.getElementById('youtube-btn')
const googleBtn = document.getElementById('google-btn')
const copyBtn = document.getElementById('copy-btn')
const incrBtn = document.getElementById('incr-btn')
const decrBtn = document.getElementById('decr-btn')
const deleteBtn = document.getElementById('delete-btn')
const saveBtn = document.getElementById('save-btn')
const myTextArea = document.getElementById('mytextarea')

/***************************************************/

copyBtn.addEventListener('click', copyText)
incrBtn.addEventListener('click', incrFont)
decrBtn.addEventListener('click', decrFont)
deleteBtn.addEventListener('click', delElt)
saveBtn.addEventListener('click', saveText)
youtubeBtn.addEventListener('click', youtubeSearch)
googleBtn.addEventListener('click', googleSearch)

function addToText(val) {
    myTextArea.value += val
}

function copyText() {
    navigator.clipboard.writeText(myTextArea.value)
}

function incrFont() {
    style = window.getComputedStyle(myTextArea, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    myTextArea.style.fontSize = (currentSize + 1) + 'px'
}

function decrFont() {
    style = window.getComputedStyle(myTextArea, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    myTextArea.style.fontSize = (currentSize - 1) + 'px'
}

function delElt() {
    myTextArea.value = myTextArea.value.slice(0, myTextArea.value.length - 1)
}

function youtubeSearch () {
    if (myTextArea.value  == "" ) {
        alert('PLZ write your text first!!!!')
        return
    }
    window.open(`https://www.youtube.com/results?search_query=${myTextArea.value}`, '_blank');
}

function googleSearch () {
    if (myTextArea.value  == "" ) {
        alert('PLZ write your text first!!!!')
        return
    }
    window.open(`https://www.google.com/search?q=${myTextArea.value}`, '_blank');
}

function saveText() {
    if (myTextArea.value  == "" ) {
        alert('PLZ write your text first!!!!')
        return
    }
    const content = myTextArea.value;
    const file = new Blob([content], { type: 'text/plain' });
    saveAs(file, "download.txt")
};