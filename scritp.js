const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");

const contenido = document.getElementById("contenido");
const pantallaFinal = document.getElementById("final");

let intentos = 0;

botonNo.addEventListener("click", function() {

    intentos++;

    // Hacer que el botón pueda moverse libremente
    botonNo.style.position = "fixed";

    // Obtener el tamaño del botón
    const ancho = botonNo.offsetWidth;
    const alto = botonNo.offsetHeight;

    // Crear una posición aleatoria
    const x = Math.random() * (window.innerWidth - ancho);
    const y = Math.random() * (window.innerHeight - alto);

    // Aplicar la nueva posición
    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";

    // Hacer pequeño el botón No
    let tamañoNo = 1 - (intentos * 0.15);

    if (tamañoNo < 0.2) {
        tamañoNo = 0.2;
    }

    botonNo.style.transform = "scale(" + tamañoNo + ")";

    // Hacer grande el botón Sí
    const tamañoSi = 1 + (intentos * 0.1);

    botonSi.style.transform = "scale(" + tamañoSi + ")";
});


botonSi.addEventListener("click", function() {

    contenido.style.display = "none";

    pantallaFinal.style.display = "block";

});
