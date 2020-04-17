Document.addEventListener('DOMContentLoaded', (event) => {
        fetch('http://localhost:3000/beers')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
                let beers = data.results
            return beers.map(function(beers) {
                    let li = createNode('li')
                    let h1 = createNode('h1')
                    let img = createNode('img')
                    let h3 = createNode('h3')
                    let p = createNode('p')
                    let div = Document.querySelector('beer-detail')
                    h3.innerHTML = `${beers.tagline}`
                img.src = beers.image_url 
                h1.innerHTML = `${beers.name}` 
                p.innerHTML = `${beers.description}`
                append(li, h1)
                append(li, img)
                append(li, h3)
                append(li, p)
                append(div, li)
            })
})

function createNode(element) {
    return document.createElement(element)
}

function append(parent, el) {
    return parent.appendChild(el)
}