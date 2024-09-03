document.getElementById("btnLog").addEventListener("click", login);
document.getElementById("btnReg").addEventListener("click", register);
window.addEventListener("resize", ancPag);
//Declaracion variables

var contenedor = document.querySelector('.contForm')
var formulario_login = document.querySelector('.cont_log');
var formulario_reg = document.querySelector('.cont_reg');
var caja_login = document.querySelector('.back_login');
var caja_reg = document.querySelector('.back_sign');

function ancPag() {
    if (window.innerWidth > 850) {
        caja_login.style.display = "block";
        caja_reg.style.display = "block";
    } else {
        caja_reg.style.display = "block";
        caja_reg.style.opacity = "1";
        caja_login.style.display = "none";
        formulario_login.display = "block";
        formulario_reg.style.display = "none";
        contenedor.style.left = "0";
    }
}

ancPag();

function login() {
    if (window.innerWidth > 850) {
        formulario_reg.style.display = "none";
        contenedor.style.left = "10px";
        formulario_login.style.display = "block";
        caja_reg.style.opacity = "1";
        caja_login.style.opacity = "0";
    } else {
        formulario_reg.style.display = "none";
        contenedor.style.left = "0";
        formulario_login.style.display = "block";
        caja_reg.style.display = "block";
        caja_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_reg.style.display = "block";
        contenedor.style.left = "410px";
        formulario_login.style.display = "none";
        caja_reg.style.opacity = "0";
        caja_login.style.opacity = "1";
    } else {
        formulario_reg.style.display = "block";
        contenedor.style.left = "0";
        formulario_login.style.display = "none";
        caja_reg.style.display = "none";
        caja_login.style.display = "block";
        caja_login.style.opacity = "1";
    }
}



