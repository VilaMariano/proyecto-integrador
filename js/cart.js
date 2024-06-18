let recuperoStorage = localStorage.getItem('cartItems');

let lista = document.querySelector("");

if (recuperoStorage == null){
    // parseo
    let mendaje = "Tu Carrito esta vacio"
    let empty = document.querySelector("");
    empty.innerText = mensaje 
} else {
    carrito = [];
    carrito = JSON.parse(recuperoStorage);
    for (let i = 0; i < carrito.length; i++){
        const id = array[i];
        const url = `https://fakestoreapi.com/products/${id}`

        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
        })
    }
}