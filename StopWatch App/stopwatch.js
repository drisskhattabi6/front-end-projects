var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var save = document.getElementById('save');
var table = document.getElementById('table');
var nb1=1;
var nb2=1;
var nb3=1;
var rep;

function secs() {
    // secends conditions
    if (nb1 < 10){
        sec.textContent = "0" + nb1;
        nb1++;
    } else if (nb1 === 60){
        // minites conditions
        if (nb2 < 10){
            min.textContent = "0" + nb2;
            nb2++;
        } else if (nb2 === 60) {
            // hour conditions
            nb2 = 0;
            min.textContent = '00';
            if (nb3 < 10){
                hour.textContent = "0" + nb3;
                nb3++;
            } else if (nb3 === 2){
                reset.click();
            } else {
                hour.textContent = nb3;
                nb3++;
            }
            // end hour conditions
            
        } else {
            min.textContent = nb2;
            nb2++;
        }
        // end minites conditions
        nb1 = 0;
        sec.textContent = nb1;
        nb1++;
    } else {
        sec.textContent = nb1;
        nb1++;
    }
}

start.addEventListener('click', function () {
    if (start.textContent === "resume"){
        rep = setInterval(secs, 1000);
        start.textContent = "stop";
        return;
    }
    if (start.textContent === "stop"){
        clearInterval(rep);
        start.textContent = "resume"; 
        return;
    }
    if (start.textContent === "start"){
        rep = setInterval(secs, 1000);
        start.textContent = "stop";
        return;
    }
});

reset.addEventListener('click', function () {
    clearInterval(rep);
    sec.textContent = '00';
    min.textContent = '00';
    hour.textContent = '00';
    start.textContent = "start";
    nb1=1; nb2=1; nb3=1;
    table.innerHTML = ""
    index = 1
});

var index = 1;
save.addEventListener('click', function () {
    var mytr = document.createElement('tr'),
        mytd1 = document.createElement('td'),
        mytd2 = document.createElement('td'),
        myp1 = document.createElement('p'),
        myp2 = document.createElement('p');
    myp1.textContent = hour.textContent + "h " + min.textContent + "m " + sec.textContent + "s";
    myp2.textContent = index + " - ";
    index++;
    myp1.classList.add("myp1");
    mytd2.appendChild(myp1);
    mytd1.appendChild(myp2);
    mytr.appendChild(mytd1);
    mytr.appendChild(mytd2);
    table.appendChild(mytr);
});