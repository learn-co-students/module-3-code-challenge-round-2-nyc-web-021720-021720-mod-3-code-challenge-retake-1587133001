document.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    let beerList = document.getElementById('beer-list')
    let beerUl = document.querySelector(".list-group")
    console.log(beerList)
    function doesMyFetch(){
        fetch('http://localhost:3000/beers')
        .then(response => response.json())
        .then((beers)=> {
            beers.forEach(beer => {
                console.log(beer)
                let beerPanel = document.createElement('li')
                beerPanel.className = "list-group-item"
                beerPanel.id = beer.id
                beerPanel.innerText = beer.name
                beerUl.appendChild(beerPanel)
            });

        
        });
    }
    doesMyFetch()
});