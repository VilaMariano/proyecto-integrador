let formulario = document.querySelector(".formulario-login")
let email = document.querySelector("#email");
let contra = document.querySelector("#password");

formulario.addEventListener("submit",function(e){
    e.preventDefault()
    if (email.value == ''){
        alert("Por favor complete el campo email");
    }else if (contra.value == ''){
        alert("Por favor complete el campo contraseña");
    }else if (contra.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
    }else {
        alert("Ingreso correctamente");
        formulario.submit();
        let emailString = JSON.stringify(email.value);
        localStorage.setItem("Email:",emailString);
        window.location.href = 'index.html';
    }
})