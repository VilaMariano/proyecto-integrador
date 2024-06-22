//Logout
// las variebles ya estan definidas en saludo.js

logout.addEventListener('click',function(){
    saludo.style.display = 'none'
    register.style.display = 'flex'
    login.style.display = 'flex'
    logout.style.display = 'none'
    localStorage.clear()
})