
let qs = location.search ; 
let queryStringObj = new URLSearchParams(qs);
let id = queryStringObj.get('id');

let url_detalle = `https://fakestoreapi.com/products/${id}`

fetch(url_detalle)
    .then(function(response){
        return response.json()
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
            <a href="./category.html?id=${arrayProductos.category}" class="btn3">${arrayProductos.category}</a>
            <a class="btncarrito" href=" ">AGREGAR AL CARRITO</a>
            </article>`
        
        productos.innerHTML = productosHTML;

        let btncarrito = document.querySelector(".btncarrito");
        if (btncarrito) {
            btncarrito.addEventListener("click", function(e) {
                e.preventDefault();
                let carrito = [];
                let recuperoStorage = localStorage.getItem('cartItems');
                if (recuperoStorage !== null) {
                    carrito = JSON.parse(recuperoStorage);
                }
                carrito.push(id);
                let carString = JSON.stringify(carrito);
                localStorage.setItem("cartItems", carString);
                console.log("carrito: ", carrito);
            });
        }
    })
    .catch(function(error){
        console.log("EL error es: " + error);
    });

 
    
    