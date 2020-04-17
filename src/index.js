const beerURL = 'http://localhost:3000/beers'
const beerList = document.querySelector('#beer-list')
const beerDetail = document.querySelector('#beer-detail')
// console.log(beerDetail)
document.addEventListener('DOMContentLoaded', ()=>{

    
    fetch(beerURL)
    .then(res => res.json())
    .then(beers => {
        beers.forEach(beer => {
            let li = document.createElement('li')
            li.className = 'list-group-item'
            li.dataset.id = beer.id
            li.textContent = beer.name
            beerList.appendChild(li)
        })
    })

    beerList.addEventListener('click', (e)=>{
        // console.log(e.target.dataset.id)
        const id = e.target.dataset.id
        fetch(`${beerURL}/${id}`)
    })
})