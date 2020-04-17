fetch('http://localhost:3000/beers')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let beers = data.results;
    return beers.map(function(beers) {
        let h1 = createNode('h1');
        let img = createNode('img');
        let h3 = createNode('h3');
        let p = createNode('p');
        let div = findElementByID()
      img.src = beers.picture.medium; 
      h3.innerHTML = `${beers.name.first} ${beers.name.last}`; 
      append(div, img);
      append(, span);
      append(ul, );

      function createNode(element) {
        return document.createElement(element);
      }
    
      function append(parent, el) {
        return parent.appendChild(el);
      }
});

//copied from https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data but edited and added stuff