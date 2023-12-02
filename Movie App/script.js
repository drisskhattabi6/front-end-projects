const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81afb0b9bde7858bf02a65ef234fb83e&page=1' //page=1 => about 20 movie
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const Search_URL = 'https://api.themoviedb.org/3/search/movie?api_key=81afb0b9bde7858bf02a65ef234fb83e&query="'

const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', function () {
    const searchValue = searchInput.value
    if (searchValue && searchValue !== "") {
        getMovies(Search_URL + searchValue + '"')
        //console.log(Search_URL + searchValue + '"');
        searchInput.value = ""
    } else {
        window.location.reload()
    }
})
searchInput.addEventListener('input', function () {
    const searchValue = searchInput.value
    if (searchValue && searchValue !== "") {
        getMovies(Search_URL + searchValue + '"')
    } else {
        window.location.reload()
    }
})

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    
    console.log(data)
    console.log(data.results)
    showMovies(data.results)
}

const films = document.getElementById('films')

function showMovies(movies) {
    films.innerHTML = ""
    let rate = "green"
    for(let i = 0 ; i < movies.length ; i++) {
        if (movies[i].vote_average <= 5.5) rate = "red"
        else if (movies[i].vote_average > 5.5 && movies[i].vote_average <= 7.5) rate = "orange"
        else rate = "green"

        let movie = document.createElement('div')
        movie.className = "film"
        movie.innerHTML = `
                <img src="${IMG_URL + movies[i].poster_path}" alt="poster of ${movies[i].original_title}">
                <div class="film-info">
                    <h1>${movies[i].original_title}</h1>
                    <span class="${rate}">${movies[i].vote_average}</span>
                </div>
                <div class="overview">
                    <h3>overview</h3>
                    <p>${movies[i].overview}</p>
                </div>
            `
        films.appendChild(movie)
    }
}

getMovies(API_URL)