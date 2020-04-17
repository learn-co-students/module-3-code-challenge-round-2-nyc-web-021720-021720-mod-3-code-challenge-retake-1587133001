const allBeersEndPointURL = "http://localhost:3000/beers"
const beerUL = document.getElementById('beer-list')
const detailURL = "http://localhost:3000/beers/:id"


document.addEventListener('DOMContentLoaded', () => {
console.log ("Working")


fetchAllBeers()










})

function fetchAllBeers(){
    fetch(allBeersEndPointURL)
   // console.log(allBeersEndPointURL)
   .then (response => response.json())
   // console.log()
   .then (beers => beers.forEach(function(beer){
       renderBeers(beer)
   })
   )

}

function renderBeers(beer){
   const li = document.createElement('li')
   li.innerHTML = `
   <li class="list-group-item">${beer.name} 1</li>
  
 `

beerUL.append(li)

}

function fetchBeerDetails(){
    fetch(detailURL)
   // console.log(allBeersEndPointURL)
   .then (response => response.json())
   // console.log()
   .then (beers => beers.forEach(function(beer){
       renderBeers(beer)
   })
   )

}