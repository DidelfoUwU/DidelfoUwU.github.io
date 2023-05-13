
// Para cambiar el idioma de la pagina

var check=document.querySelector(".cambiarIdioma");
check.addEventListener('click',idioma);


function idioma(){
    let id = check.checked;
    if (id == true) {
        location.href="./src/en/index.html";
    }else {
        location.href="../../index.html";
    }

}

// Para mostrar y ocultar el menu movil

const iconoMenu = document.getElementById('check');
const Menu = document.querySelector(".opciones")

iconoMenu.addEventListener('click', () => {
    Menu.classList.toggle('opciones-visible');
});