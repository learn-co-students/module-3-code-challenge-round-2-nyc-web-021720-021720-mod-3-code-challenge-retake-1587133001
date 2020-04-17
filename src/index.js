document.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    let beerList = document.getElementById('beer-list')
    let beerUl = document.querySelector(".list-group")
    let beerDetail = document.getElementById('beer-detail')
    // console.log(beerList)
    function doesMyFetch(){
        fetch('http://localhost:3000/beers')
        .then(response => response.json())
        .then((beers)=> {
            beers.forEach(beer => {
                // console.log(beer)
                let beerPanel = document.createElement('li')
                beerPanel.className = "list-group-item"
                beerPanel.id = beer.id
                beerPanel.innerText = beer.name
                beerUl.appendChild(beerPanel)
            });

        beerList.addEventListener("click", function (event){
        let beerId = event.target.id
        fetch(`http://localhost:3000/beers/${beerId}`)
        .then(response => response.json())
        .then((beer)=> {
            beerDetail.innerHTML = `
            <h1>${beer.name}</h1>
            <img src="${beer.image_url}">
            <h3>${beer.tagline}</h3>
            <p>${beer.description}</p>
            `
            });
        })
        });
    }
    doesMyFetch()
});