//CONTROL//
console.log("qs: ", qs);
console.log("quetryStringToObj: ",queryStringObj);
console.log("id: ",id);

//CODIGO//
let qs = location.search ; 
let queryStringObj = new URLSearchParams(qs);
let id = queryStringObj.get('id');

let url_detalle = `https://fakestoreapi.com/products/${id}`
console.log(url_detalle)

fetch(url_detalle)
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