console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al boton
const gris = document.getElementById('gris');
const color = document.getElementById('color');
//-- Acceso al deslizador
const deslizadorR = document.getElementById('deslizadorR');
const deslizadorG = document.getElementById('deslizadorG');
const deslizadorB = document.getElementById('deslizadorB');

//-- Valor del deslizador
const range_value = document.getElementById('range_value');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

color.onclick = () =>{
    deslizadorR.value = 255;
    deslizadorG.value = 255;
    deslizadorB.value = 255;
    ctx.drawImage(img, 0,0);
    //-- Funcion de retrollamada del deslizador
    deslizadorR.oninput = () => {
        //-- Mostrar el nuevo valor del deslizador
        range_valueR.innerHTML = deslizadorR.value;
        
        //-- Situar la imagen original en el canvas
        //-- No se han hecho manipulaciones todavia
        ctx.drawImage(img, 0,0);

        //-- Obtener la imagen del canvas en pixeles
        let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        //-- Obtener el array con todos los píxeles
        let data = imgData.data

        //-- Obtener el umbral de rojo del desliador
        umbral = deslizadorR.value

        //-- Filtrar la imagen según el nuevo umbral
        for (let i = 0; i < data.length; i+=4) {
            if (data[i] > umbral)
            data[i] = umbral;
        }

        //-- Poner la imagen modificada en el canvas
        ctx.putImageData(imgData, 0, 0);
    }
    deslizadorG.oninput = () =>{
        range_valueG.innerHTML = deslizadorG.value;
        //-- Situar la imagen original en el canvas
        //-- No se han hecho manipulaciones todavia
        ctx.drawImage(img, 0,0);

        //-- Obtener la imagen del canvas en pixeles
        let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        //-- Obtener el array con todos los píxeles
        let data = imgData.data

        //-- Obtener el umbral de verde del desliador
        umbral = deslizadorG.value

        //-- Filtrar la imagen según el nuevo umbral
        for (let i = 0; i < data.length; i+=4) {
            if (data[i] > umbral)
            data[i] = umbral;
        }

        //-- Poner la imagen modificada en el canvas
        ctx.putImageData(imgData, 0, 0);
    }
  
    deslizadorB.oninput = () =>{
        range_valueB.innerHTML = deslizadorB.value;
        //-- Situar la imagen original en el canvas
        //-- No se han hecho manipulaciones todavia
        ctx.drawImage(img, 0,0);

        //-- Obtener la imagen del canvas en pixeles
        let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        //-- Obtener el array con todos los píxeles
        let data = imgData.data

        //-- Obtener el umbral de azul del desliador
        umbral = deslizadorB.value

        //-- Filtrar la imagen según el nuevo umbral
        for (let i = 0; i < data.length; i+=4) {
            if (data[i] > umbral)
            data[i] = umbral;
        }

        //-- Poner la imagen modificada en el canvas
        ctx.putImageData(imgData, 0, 0);
    }
}
// filtro grises
gris.onclick = () =>{
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data;
    //-- Calcular el brillo para CADA PIXEL y ponerselo por igual a cada componente
    for (var i = 0; i < data.length; i+=4) {
      brillo = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
      data[i] = brillo;
      data[i+1] = brillo;
      data[i+2] = brillo;
    }
    ctx.putImageData(imgData, 0, 0);
}