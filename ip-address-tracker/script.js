const btn1 = document.querySelector('#btn1')
const input1 = document.querySelector('#input1')
const ip = document.querySelector('#ip')
const location1 = document.querySelector('#location')
const timeZone = document.querySelector('#time-zone')
const isp = document.querySelector('#isp')

btn1.addEventListener('click', fetchIp)

function fetchIp() {
    if (input1.value == "" ) {
        alert("Enter the IP Address PLZ!")
        return
    }

    let URL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_sGK9OFXUN2KdIfFS3dZXeNG1qt9rJ&ipAddress=${input1.value}`   // IP ADRRESS API FROM  ==>  https://geo.ipify.org/

    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        ip.textContent = data.ip
        location1.textContent = data.location.country + ', ' + data.location.city + ', ' + data.location.postalCode
        timeZone.textContent = 'UTC ' + data.location.timezone
        isp.textContent = data.isp 

        var map = L.map('map').setView([data.location.lat, data.location.lng], 14);

        var greenIcon = L.icon({
            iconUrl: 'images/icon-location.svg',
        
            iconSize:     [30, 35], // size of the icon
        });
        L.marker([data.location.lat, data.location.lng], {icon: greenIcon}).addTo(map);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

    }).catch(error => {
        console.log(error)
        alert(error + " \n==> 'error' \n==> make sure you are not working with adBlock \n==> or this IP Address not exist!!!")
    })

    input1.value = ""
}
