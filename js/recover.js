let mail = document.querySelector('.mail');
let caja = document.querySelector('.caja');
let linklog = document.querySelector('.link-login');
let aviso = document.querySelector('.aviso');
let form = document.querySelector('.formulario-login');

form.addEventListener('submit', function(e){
    e.preventDefault()
    if (mail.value == ''){
        let avisom = document.querySelector('.avisom');
        avisom.style.color = 'red'
    }else if(caja.value == 'no') {
        let avisoc = document.querySelector('.avisoc');
        avisoc.style.color = 'red'
    }else{
        aviso.style.display = 'red';
        linklog.style.display = 'red';
    }
})