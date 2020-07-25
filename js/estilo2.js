const userfi = document.getElementById('userf');
const boton = document.getElementById('boton');

let userfinal = JSON.parse(localStorage.getItem('user'));

if(userfinal != null){
    userfi.innerHTML = ' <a href="#" id="close">'+userfinal[0].users+'</a> ';
}else{
    userfi.innerHTML = ' <a href="/html/registrar.html" id="close">Iniciar sesion</a> ';
}
boton.addEventListener('click',function(){
    localStorage.clear('users');
    location.href='../index.html';
});