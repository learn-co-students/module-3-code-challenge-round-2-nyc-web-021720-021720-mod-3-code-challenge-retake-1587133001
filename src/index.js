document.addEventListener('DOMContentLoaded',function(event){
    const beerList = document.querySelector('#beer-list')
    let singleBeer = document.querySelector('#beer-detail')
   
    getBeer()


    beerList.addEventListener('click',function(event){
        if(event.target.className==='list-group-item'){
            fetch(`http://localhost:3000/beers/${event.target.id}`)
            .then(resp => resp.json())
            .then(function(beerobj){
                singleBeer.innerHTML = `
                <h1>${beerobj.name}</h1>
                <img src=${beerobj.image_url}>
                <h3>${beerobj.tagline}</h3>
                <p>${beerobj.description}</p>
                `
            })
        }
    })

    function getBeer(){
        fetch(`http://localhost:3000/beers`)
        .then(resp => resp.json())
        .then(function(beers){
            beers.forEach(function(beer){
                let li = document.createElement('li')
                li.className='list-group-item'
                li.id = `${beer.id}`
                li.innerHTML = `${beer.name}`
                beerList.appendChild(li)

            })

        })

    }






})