
let urlProductos = 'https://fakestoreapi.com/products'
let urlProductosElectronica = 'https://fakestoreapi.com/products/category/electronics'

//Electronica//

fetch(urlProductosElectronica)
    .then(function(res){
    return res.json()
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
            <a href="./producto.html" class="btn2">Ver mas</a>
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
    .then(function(res){
    return res.json()
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
            <a href="./producto.html" class="btn2">Ver mas</a>
            </article>`
        }
        productos.innerHTML = productosHTML;
    })
    .catch(function(error){
        console.log("EL error es: " + error);
    });

//ROPA//
//let urlProductosRopa = urlProductos//




