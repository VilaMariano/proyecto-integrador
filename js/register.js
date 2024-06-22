let formulario = document.querySelector(".formulario-login");
let email = document.querySelector(".email");
let contra = document.querySelector(".contra");
let recontra = document.querySelector(".recontra");

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    if (email.value == ''){
        let mail = document.querySelector(".a");
        mail.style.display = "flex"
    }else if (contra.value == ''){
        let password = document.querySelector(".b");
        password.style.display = "flex"
    }else if (contra.value.length < 6){
        let repassword = document.querySelector(".c");
        repassword.style.display = "flex"
    }else if (contra.value != recontra.value){
        let noigual = document.querySelector(".d");
        noigual.style.display = "flex"
    }else{
        formulario.submit();
    }
});