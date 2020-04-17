const url = "http://localhost:3000/beers";
const ul = document.getElementById("beer-list");
let beerPanel = document.getElementById("beer-detail");
const beerList = [];
function getBeers() {
	fetch(url)
		.then((response) => response.json())
		.then((beers) => {
			beers.forEach(function (beer) {
				beerList.push(beer);
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
		beerPanel.innerHTML = `
        <h1>Beer Name</h1>
<img src="<add beer img url here>">
<h3>Beer Tagline</h3>
<p>Beer Description</p>
        `;
	}
});
getBeers();
