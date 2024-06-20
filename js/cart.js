let recuperoStorage = localStorage.getItem('cartItems');
console.log(recuperoStorage)
let carrito = JSON.parse(recuperoStorage)
console.log (carrito)


if (recuperoStorage == null){
    let mensaje = "Tu Carrito esta vacio"
    let empty = document.querySelector(".titulocarrito");
    empty.innerText = mensaje 
} else {
    let lista = document.querySelector(".padrecarritodiv");
    console.log(lista);
    let carritoRecorrido = ''
    for (let i = 0; i < carrito.length; i++){
        let url = `https://fakestoreapi.com/products/${carrito[i]}`
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            carritoRecorrido += `<article>
            <ul>
                <img src="${data.image}">
                <h2>${data.title}</h2>
                <p>${data.price}</p>
                <p>${data.description}</p>
            </ul>
            </article>`

            lista.innerHTML = carritoRecorrido
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

let finalizarCompra = document.querySelector(".btn2")
finalizarCompra.addEventListener('click', function(){
    localStorage.clear();
    alert("Gracias por su compra")
})

