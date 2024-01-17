const modeBnt = document.getElementById('mode') 
const backBtn = document.getElementById('back')
//const searchBnt = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
const continents = document.getElementById('continents')
const boxes = document.querySelector('.boxes')
const box = document.querySelectorAll('.box')
const detailesPage = document.querySelector('.detailes')
const countriesPage = document.querySelector('.countries')
const root = document.querySelector(':root')

//*************** global var *******:
var mode = "light"

//********************************** 

modeBnt.addEventListener('click', changeMode)
searchInput.addEventListener('keyup', searchForCountry)
continents.addEventListener('change', getCountries)
backBtn.addEventListener('click', backToCountriesPage)

function backToCountriesPage() {
    detailesPage.style.display = "none"
    countriesPage.style.display = "block"
}

function searchForCountry() {
    if (searchInput.value == "") {
        getAllCountries(0)
        return
    }

    let country_name = searchInput.value
    console.log(country_name);

    let url = `https://restcountries.com/v3.1/name/${country_name}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        boxes.innerHTML = ""
        for(let i = 0 ; i < data.length ; i++) {

            if (data[i].name.common == "Israel" || data[i].name.common == "Western Sahara") 
                continue
            
            //console.log(i + " ==> " + data[i].name.common);
            let boxDiv = document.createElement('div')
            boxDiv.className = "box"
            boxDiv.addEventListener('click', getDetails)
            boxDiv.innerHTML = `
                <div class="flag">
                    <img src="${data[i].flags.svg}" alt="flag of ${data[i].name.common}">        
                </div>
                <div class="info">
                    <h1>${data[i].name.common}</h1>
                    <ul>
                        <li>
                            <p class="label">population:</p>
                            <p class="result">${data[i].population}</p>
                        </li>
                        <li>
                            <p class="label">region:</p>
                            <p class="result">${data[i].region}</p>
                        </li>
                        <li>
                            <p class="label">capital:</p>
                            <p class="result">${data[i].capital[0]}</p>
                        </li>
                    </ul>
                </div>
            `
            boxes.appendChild(boxDiv)
        }
    }).catch(error => {
        console.log(error);
    })    
}

function getDetails(e) {

    const country_flag = document.getElementById('country-flag')
    const country_name_detail = document.getElementById('country-name')
    const native_name = document.getElementById('native-name')
    const population = document.getElementById('population')
    const region = document.getElementById('region')
    const sub_region = document.getElementById('sub-region')
    const capital = document.getElementById('capital')
    const level_domain = document.getElementById('level-domain')
    const currencies = document.getElementById('currencies')
    const languages = document.getElementById('languages')
    const border_coun = document.getElementById('border-coun')

    let country_name

    if (e.target.parentElement.classList.contains('box')) {
        let mybox = e.target.parentElement
        country_name = mybox.children[1].children[0].textContent
        console.log(country_name);
    }
    else if (e.target.parentElement.classList.contains('flag')) {
        let mybox = e.target.parentElement.parentElement
        country_name = mybox.children[1].children[0].textContent
        console.log(country_name);
    }
    else if (e.target.parentElement.classList.contains('info')) {
        let mybox = e.target.parentElement.parentElement
        country_name = mybox.children[1].children[0].textContent
        console.log(country_name);
    }
    else return

    let url = `https://restcountries.com/v3.1/name/${country_name}?fullText=true`
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        detailesPage.style.display = "block"
        countriesPage.style.display = "none"

        let x = data[0].capital
            if (typeof x !== "undefined") x = data[0].capital[0] 
            else x = "no capital"

        country_flag.src = data[0].flags.svg
        country_flag.alt = "flag of " + country_name
        country_name_detail.textContent = data[0].name.common
        native_name.textContent = data[0].name.official
        population.textContent = data[0].population
        region.textContent = data[0].region
        sub_region.textContent = data[0].subregion
        capital.textContent = x
        level_domain.textContent = data[0].tld[0]

        for (var property in data[0].currencies)
            if (data[0].currencies.hasOwnProperty(property)) {
                currencies.textContent = property  + " => '" +  data[0].currencies[property].name + "' "
            }
        
        languages.textContent = ""
        for (var property in data[0].languages)
            if (data[0].languages.hasOwnProperty(property)) {
                languages.textContent += property + ", "
            }

        border_coun.innerHTML = ""
        for(let i = 0 ; i < data[0].borders.length ; i++) {
            let p = `<p class="result2"> ${data[0].borders[i]} </p>`
            /*let p = document.createElement('p')
            p.className = "result2"
            p.textContent = data[0].borders[i]*/
            border_coun.innerHTML += p
        }
        //console.log("end");

    }).catch(error => {
        console.log(error)
    })

}

function getCountries(e) {
    //console.log(e.target.value);
    if(e.target.value == "all") getAllCountries(0)
    if(e.target.value == "africa") getAllCountries(1)
    if(e.target.value == "america") getAllCountries(2)
    if(e.target.value == "asia") getAllCountries(3)
    if(e.target.value == "europe") getAllCountries(4)
    if(e.target.value == "oceania") getAllCountries(5)
}

function changeMode() {
    if ( mode == "light") {
        root.style.setProperty('--font-color', '#fff')
        root.style.setProperty('--background-color', 'hsl(207, 26%, 17%)')
        root.style.setProperty('--background-color2', 'hsl(209, 23%, 22%)')
        modeBnt.children[0].className = "fa-solid fa-sun"
        modeBnt.children[1].textContent = "Light Mode"
        mode = "dark"
    } else {
        root.style.setProperty('--font-color', 'rgb(20, 20, 20)')
        root.style.setProperty('--background-color', '#fff')
        root.style.setProperty('--background-color2', 'hsl(0, 0%, 97%)')
        modeBnt.children[0].className = "fa-regular fa-moon"
        modeBnt.children[1].textContent = "Dark Mode"
        mode = "light"
    }
}

function getAllCountries(u) {
    let url0 = "https://restcountries.com/v3.1/all"
    let url1 = "https://restcountries.com/v3.1/region/africa"
    let url2 = "https://restcountries.com/v3.1/region/america"
    let url3 = "https://restcountries.com/v3.1/region/asia"
    let url4 = "https://restcountries.com/v3.1/region/europe"
    let url5 = "https://restcountries.com/v3.1/region/oceania"

    let url
    switch(u) {
        case 0 : url = url0; break;
        case 1 : url = url1; break;
        case 2 : url = url2; break;
        case 3 : url = url3; break;
        case 4 : url = url4; break;
        case 5 : url = url5; break;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        boxes.innerHTML = ""

        for(let i = 0 ; i < data.length ; i++) {

            if (data[i].name.common == "Israel" || data[i].name.common == "Western Sahara") 
                continue
            

            let capital = data[i].capital
            if (typeof capital !== "undefined") capital = data[i].capital[0] 
            else capital = "no capital"
            //typeof capital !== "undefined" ? data[i].capital[0] : "no capital"

            let boxDiv = document.createElement('div')
            boxDiv.className = "box"
            boxDiv.addEventListener('click', getDetails)
            boxDiv.innerHTML = `
                        <div class="flag">
                            <img src="${data[i].flags.svg}" alt="flag of ${data[i].name.common}">
                        </div>
                        <div class="info">
                            <h1>${data[i].name.common}</h1>
                            <ul>
                                <li>
                                    <p class="label">population:</p>
                                    <p class="result">${data[i].population}</p>
                                </li>
                                <li>
                                    <p class="label">region:</p>
                                    <p class="result">${data[i].region}</p>
                                </li>
                                <li>
                                    <p class="label">capital:</p>
                                    <p class="result">${capital}</p>
                                </li>
                            </ul>
                        </div>
            `
            boxes.appendChild(boxDiv)
        }
    }).catch(error => {
        console.log(error)
    })
}

getAllCountries(0)
