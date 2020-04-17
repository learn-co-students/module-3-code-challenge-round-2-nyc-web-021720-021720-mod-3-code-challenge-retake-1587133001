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
        beerDetail.innerHTML =''
        // console.log(e.target.dataset.id)
        const id = e.target.dataset.id
        fetch(`${beerURL}/${id}`)
            .then(res => res.json())
            .then(beer => {
                let h1 = document.createElement('h1')
                h1.textContent = beer.name
                let img = document.createElement('img')
                img.src = beer["image_url"]
                let h3 = document.createElement('h3')
                h3.textContent = beer.tagline
                let p = document.createElement('p')
                p.textContent = beer.description
                beerDetail.appendChild(h1)
                beerDetail.appendChild(img)
                beerDetail.appendChild(h3)
                beerDetail.appendChild(p)
            })
    })
})