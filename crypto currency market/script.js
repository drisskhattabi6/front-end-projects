const crypto_currency_box = document.getElementById('crypto-currency-box')
const search_input = document.getElementById('search-input')

/**
 * 
 * @param {object} data 
 * @returns {HTMLElement}
 */

// API From =>  https://www.coingecko.com/en/api/documentation

function create_crypto(data) {
    let crypto_div = document.createElement('div')
        crypto_div.className = "crypto"

        let f = data.market_cap_change_percentage_24h

        crypto_div.innerHTML = `
            <div>
                <p class="rank">${data.market_cap_rank} => </p>
                <img src="${data.image}" alt="logo of ${data.name}">
            </div>
            <h2>${data.symbol} <span>(${data.name})</span> </h2>
            <p class="price">$${data.current_price}</p>
            <p class="change_percentage_24h ${(f < 0) ? "red" : "green"}">${f} %</p>
        `
    return crypto_div
}

//${(f < 0) ? "&darr;" : "&uarr;"}

function create_crypto_list() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(response => response.json())
.then(data => {
    console.log(data)
    for(let i = 0 ; i < data.length ; i++) 
        crypto_currency_box.appendChild(create_crypto(data[i]))
    
})
.catch(err => console.log(err));
}

create_crypto_list()

search_input.addEventListener('input', search_crypto)

function search_crypto() {
    crypto_currency_box.innerHTML = `
            <div class="crypto">
                <div>
                    <p class="rank"># => logo</p>
                </div>
                <h2>SYMB <span>(name)</span> </h2>
                <p class="price">--price ($)--</p>
                <p class="change_percentage_24h">--24h%--</p>
            </div>
    `
    if (search_input.value == "") {
        create_crypto_list()
        return
    }

    console.log(search_input.value);

    fetch('https://api.coingecko.com/api/v3/search?query=' + search_input.value)
.then(response => response.json())
.then(data => {
    console.log(data.coins)

    data = data.coins

    for(let i = 0 ; i < data.length ; i++) {

        let crypto_div = document.createElement('div')
        crypto_div.className = "crypto"

        //let f = data.market_cap_change_percentage_24h

        crypto_div.innerHTML = `
            <div>
                <p class="rank">${data[i].market_cap_rank} => </p>
                <img src="${data[i].large}" alt="logo of ${data[i].name}">
            </div>
            <h2>${data[i].symbol} <span>(${data[i].name})</span> </h2>
            <p class="price">$******</p>
           <p class="change_percentage_24h">***** %</p>
        `
       // <p class="price">$${data.current_price}</p>
         //   <p class="change_percentage_24h ${(f < 0) ? "red" : "green"}">${f} %</p>

        crypto_currency_box.appendChild(crypto_div)
    }
    
})
.catch(err => console.log(err));
}
