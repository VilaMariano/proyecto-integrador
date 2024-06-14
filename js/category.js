// BOCETO//
let qs = location.search ; 
let queryStringObj = new URLSearchParams(qs);
let id = queryStringObj.get('id');
let urlProductosCategoria = `https://fakestoreapi.com/products/category/${id}`


fetch(urlProductosCategoria)
    .then(function(res){
    return res.json()
    })
    .then(function(data){
        console.log(data);
        let productos = document.querySelector('.sectionhome');
        let arrayProductos = data;
        let productosHTML = ''
        
        for(let i = 0; i < arrayProductos.length; i++){
            productosHTML += `
            <article class="articleproductos">
            <img src="${arrayProductos[i].image}">
            <h2 class="titulosection">${arrayProductos[i].title}</h2>
            <p>${arrayProductos[i].description}</p>
            <p>${arrayProductos[i].price}</p>
            <a href="./producto.html?id=${arrayProductos[i].id}" class="btn2">Ver mas</a>
            </article>`
        }
        productos.innerHTML = productosHTML;
    })
    .catch(function(error){
        console.log("EL error es: " + error);
    });