let urlDetalle = `https://fakestoreapi.com/products/1`
let queryString = window.location.search ; 
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

fetch(urlDetalle)
    .then(function(res){
    return res.json()
    })
    .then(function(data){
        console.log(data);
        let productos = document.querySelector('.secproducto');
        let arrayProductos = data;
        let productosHTML = ''
        productosHTML += `<article class="secproductodiv">
            <img src="${arrayProductos.image}">
            <h2 class="titulosection">${arrayProductos.title}</h2>
            <p>${arrayProductos.description}</p>
            <p>${arrayProductos.price}</p>
            <a href="./category.html" class="btn3">${arrayProductos.category}</a>
            <a href="./cart.html" class="btn3">AGREGAR AL CARRITO</a>
            </article>`
        
        productos.innerHTML = productosHTML;
    })
    .catch(function(error){
        console.log("EL error es: " + error);
    });