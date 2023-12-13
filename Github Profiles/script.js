const searchInput = document.querySelector('#search-input')
const profile = document.querySelector('.profile')
const imgProfile = document.querySelector('#img-profile')
const UserName = document.querySelector('#User-name')
const UserBio = document.querySelector('#bio')
const followers = document.querySelector('#follower')
const following = document.querySelector('#following')
const repos = document.querySelector('#repos')
const hachtages = document.querySelector('#hachtage')
const error = document.querySelector('#error')

searchInput.addEventListener('keyup', getUser)

function getUser(e) {
    //console.log(e.keyCode);
    if(e.keyCode == 13) {
        let URL = "https://api.github.com/users/" + searchInput.value

        fetch(URL).then(response => {
            console.log(response.status);
            if (response.status != 200) {
                error.style.display = "flex"
                profile.style.display = "none"
                return null
            } else {
                error.style.display = "none"
                profile.style.display = "flex"
                return response.json()
            }
        })
        .then(data => {
            console.log(data);

            if (data == null) return

            imgProfile.src = data.avatar_url
            imgProfile.alt = "avatar of " + data.login
            UserName.textContent = data.name
            UserBio.textContent = data.bio
            followers.textContent = data.followers
            following.textContent = data.following
            repos.textContent = data.public_repos

            getRepos()

        }).catch(er => {
            console.log(er);
        })
    }
}

function getRepos() {
    let URL = "https://api.github.com/users/" + searchInput.value + "/repos"

        fetch(URL).then(response => response.json())
        .then(data => {
            console.log(data);

            hachtages.innerHTML = ""
            for(let i = 0 ; i < 4 ; i++)
                hachtages.innerHTML += `<a class="result2" target="_blanck" href="${data[i].clone_url}">${data[i].name}</>`

        }).catch(er => {
            console.log(er);
        })
}
