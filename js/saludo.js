let recuperoEmail = localStorage.getItem("Email:");
console.log(recuperoEmail);
 
let login = document.querySelector(".login-header");
let register = document.querySelector(".register-header");
let logout = document.querySelector(".logout");
let saludo = document.querySelector("#saludo");

if (recuperoEmail != null){
    saludo.innerHTML = `Bienvenido: ${recuperoEmail}`
    saludo.style.color = "red"
    login.style.display = "none"
    register.style.display = "none"
    logout.style.display = "flex"
};