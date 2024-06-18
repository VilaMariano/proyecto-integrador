let urlProductosElectronica = 'https://fakestoreapi.com/products/category/electronics'

//ELECTRONICA//

fetch(urlProductosElectronica)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data);
        let productos = document.querySelector('.section-electronica');
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

//JOYAS//
let urlProductosJoyas = 'https://fakestoreapi.com/products/category/jewelery'
fetch(urlProductosJoyas)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data);
        let productos = document.querySelector('.section-accesorios');
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

//ROPA//
let urlProductosRopa = "https://fakestoreapi.com/products/category/men's%20clothing"

fetch(urlProductosRopa)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data);
        let productos = document.querySelector('.section-ropa');
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







