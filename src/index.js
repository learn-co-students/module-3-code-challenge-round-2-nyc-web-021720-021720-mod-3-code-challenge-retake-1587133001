const beerListUrl = "http://localhost:3000/beers"
const beerUrl = `http://localhost:3000/beers/:id`
const beerList = document.querySelector("#beer-list")
const singleBeerDisplay = document.querySelector("#beer-detail")

let beerDetail = document.createElement("li")
singleBeerDisplay.append(beerDetail)

// {/* <ul class="list-group">
//   <li class="list-group-item">Beer title 1</li>
//   <li class="list-group-item">Beer title 2</li>
//   /* etc... */
// </ul> */}

// {/* <h1>Beer Name</h1>
// <img src="<add beer img url here>">
// <h3>Beer Tagline</h3>
// <p>Beer Description</p> */}

function fetchBeers(){
    fetch(beerListUrl)
        .then(res => res.json())
        .then(beers => {
            beers.forEach( beer => {

                let li = document.createElement("li")
                li.className = "list-group-item"
                li.dataset.id = `${beer.id}`
                li.textContent = `
                    ${beer.name}
                `

                beerList.append(li)

            })
        })
}

fetchBeers()

beerList.addEventListener("click", (e) => {
    // console.log(typeof e.target.dataset.id)
    if (e.target.className === "list-group-item") {
        fetch(beerListUrl + "/" + `${e.target.dataset.id}`)
        .then(res => res.json())
        .then(beer => { 
            
            beerDetail.innerHTML = ""

            beerDetail.innerHTML = `
            <h1>${beer.name}</h1>
            <img src=${beer.image_url}>
            <h3>${beer.tagline}</h3>
            <p>${beer.description}</p>
            `
        })
    }
})