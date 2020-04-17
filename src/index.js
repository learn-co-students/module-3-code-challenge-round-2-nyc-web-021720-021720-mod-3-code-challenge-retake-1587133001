const url = "http://localhost:3000/beers";
const ul = document.getElementById("beer-list");
let beerPanel = document.getElementById("beer-detail");
function getBeers() {
	fetch(url)
		.then((response) => response.json())
		.then((beers) => {
			beers.forEach(function (beer) {
				renderBeer(beer);
			});
		});
}

function renderBeer(beer) {
	let li = document.createElement("li");
	li.dataset.id = beer.id;
	li.className = "list-group-item";
	li.innerHTML = `
            ${beer.name}
        `;
	ul.appendChild(li);
}

ul.addEventListener("click", function (event) {
	if (event.target.className === "list-group-item") {
		fetch(`http://localhost:3000/beers/${event.target.dataset.id}`)
			.then((response) => response.json())
			.then((beer) => {
				beerPanel.innerHTML = `
                    <h1>Beer Name: ${beer.name}</h1>
                    <img src="${beer.image_url}">
                    <h3>Beer Tagline: ${beer.tagline}</h3>
                    <p>Beer Description: ${beer.description}</p>
            `;
			});
	}
});
getBeers();
