const allBeersEndPointURL = "http://localhost:3000/beers"


document.addEventListener('DOMContentLoaded', () => {
console.log ("Working")












})


function fetchAllBeers(){

    fetch(allBeersEndPointURL)
    console.log(allBeersEndPointURL)
    .then (r => r.json())
    console.log(r.json())
    .then (beers => beer)

}

function renderBeers(beer){
    const li = document.createElement('li')
    li.innerHTML = `
  <li class="list-group-item">Beer title 1</li>
  <li class="list-group-item">Beer title 2</li>
  `
  


}