
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


// Flechita para ir hacia arriba

function irArriba(pxPantalla){
    window.addEventListener('scroll', () =>{
        var scroll = document.documentElement.scrollTop;
        var botonArriba = document.getElementById('botonArriba');

        if (scroll > pxPantalla) {
            botonArriba.style.right = 20 + "px";
            botonArriba.style.visibility = "visible";
        } else {
            botonArriba.style.right = -100 + "px";
            botonArriba.style.visibility = "hidden";
        }
    });
}


irArriba(300);