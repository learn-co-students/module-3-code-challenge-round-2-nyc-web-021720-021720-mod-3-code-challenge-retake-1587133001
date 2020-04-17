const url="http://localhost:3000/beers"
const beerList=document.getElementById("beer-list")
const beerDetail=document.getElementById("beer-detail")

fetchBeer();
showBeer();


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

function showBeer(){
    document.addEventListener("click",function(e){

        if(e.target.className==="List-group-item"){
            
        }
    
    })
}

function beerDetail(){
    
}
