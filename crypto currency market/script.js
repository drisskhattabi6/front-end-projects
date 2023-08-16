const crypto_currency_box = document.getElementById('crypto-currency-box')
const search_input = document.getElementById('search-input')

/**
 * 
 * @param {object} data 
 * @returns {HTMLElement}
 */

// API From =>  https://www.coingecko.com/en/api/documentation

function create_crypto(data) {
    let crypto_div = document.createElement('tr')
        crypto_div.className = "crypto"

        let f = data.market_cap_change_percentage_24h

        crypto_div.innerHTML = `
            <td class="rank"> ${data.market_cap_rank} </td>
            <td> <img src="${data.image}" alt="logo of ${data.name}"> </td>
            <td> <h2> ${data.symbol} <span>(${data.name})</span> </h2> </td>
            <td class="price"> $${data.current_price} </td>
            <td class="change_percentage_24h ${(f < 0) ? "red" : "green"}">${(f < 0) ? "&darr;" : "&uarr;"}${f} %</td>
        `
    return crypto_div
}

//${(f < 0) ? "&darr;" : "&uarr;"}

function create_crypto_list() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        console.log("11")
        for(let i = 0 ; i < data.length ; i++) 
            crypto_currency_box.appendChild(create_crypto(data[i]))
        
    })
    .catch(err => console.log(err));
}

create_crypto_list()


search_input.addEventListener('input', search_crypto)

function search_crypto() {
    crypto_currency_box.innerHTML = `
                <tr class="crypto">
                    <td class="rank"> # </td>
                    <td> logo </td>
                    <td><h2>SYM <span>(name)</span></h2></td>
                    <td class="price">Price($)</td>
                    <td class="change_percentage_24h">24h%</td>
                </tr>
    `
    if (search_input.value == "") {
        create_crypto_list()
        return
    }

    // console.log(search_input.value);

    fetch('https://api.coingecko.com/api/v3/search?query=' + search_input.value)
    .then(response => response.json())
    .then(data => {
        // console.log(data.coins)

        data = data.coins

        for(let i = 0 ; i < data.length ; i++) {

            let crypto_div = document.createElement('tr')
            crypto_div.className = "crypto"

            crypto_div.innerHTML = `
                    <td class="rank"> ${data[i].market_cap_rank} </td>
                    <td> <img src="${data[i].large}" alt="logo of ${data.name}"> </td>
                    <td class="rank">${data[i].market_cap_rank}  <td>
                    <td><img src="${data[i].large}" alt="logo of ${data.name}"></td>
                    <td><h2> ${data[i].symbol} <span>(${data[i].name})</span> </h2></td>
                    <td class="price">$****</td>
                    <td class="change_percentage_24h">**** %</td>
            `

            crypto_currency_box.appendChild(crypto_div)
        }
        
    })
    .catch(err => console.log(err));
}
