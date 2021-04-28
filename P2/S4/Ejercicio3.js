console.log("Ejecutnado JS...");

//-- Obtener el botón
const boton = document.getElementById('boton');
const test1 = document.getElementById('test1');


//-- Funcion de retrollamada de la pulsación del botón
boton.onclick = () => {
    console.log("Click!");
    test1.innerHTML = "Parrafo añadido"
    test1.innerHTML += "1"
}