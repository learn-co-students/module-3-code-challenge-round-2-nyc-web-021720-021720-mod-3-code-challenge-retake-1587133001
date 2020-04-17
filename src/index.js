const url="http://localhost:3000/beers"
const beerList=document.getElementById("beer-list")
const beerDetail=document.getElementById("beer-detail")

fetchBeer();



function fetchBeer(){
    fetch(url)
    .then(resp =>resp.json())
    .then(beers => beers.forEach(beer =>{

        renderBeer(beer)
    })
    )
}

function renderBeer(beer){

    const list=document.createElement("li")
    list.className="List-group-item"
    
    list.innerHTML=`
     ${beer.name}
    `
    beerList.append(list)
}


    document.addEventListener("click",function(e){

        if(e.target.className==="List-group-item"){
            console.dir(e.target)
            // fetchBeerShow()
            // console.dir(e.target)
            // const div=document.createElement("div")
            // div.innerHTML=`
            // <h1>${beer.name}</h1>
            // <img src=${beer.image_url}>
            // <h3>${beer.tagline}</h3>
            // <p>${beer.description}</p>
            // `
            // beerDetail.append(div)
        }
    
    })


function fetchBeerShow(){
    fetch(url)
    .then(resp =>resp.json())
    .then(beers => beers.forEach(beer =>{

        beerShow(beer)
    })
    )
}

function beerShow(beer){
    const div=document.createElement("div")
    div.innerHTML=`
    <h1>${beer.name}</h1>
    <img src=${beer.image_url}>
    <h3>${beer.tagline}</h3>
    <p>${beer.description}</p>
    `
    beerDetail.append(div)
}
