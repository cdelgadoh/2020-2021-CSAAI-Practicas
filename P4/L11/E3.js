console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador = document.getElementById('deslizador');
const deslizador2 = document.getElementById('deslizador2');
const deslizador3 = document.getElementById('deslizador3');

//-- Valor del deslizador
const range_value = document.getElementById('range_value');
const range_value2 = document.getElementById('range_value2');
const range_value3 = document.getElementById('range_value3');

//-- Valor filtros
const color = document.getElementById("color");
const gris = document.getElementById("gris");

const colores = document.getElementById("colores");

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

color.onclick = () => {
    console.log("color click")
    ctx.drawImage(img, 0,0);
    colores.classList.remove("mystyle");
    deslizador.value = 255;
    deslizador2.value = 255;
    deslizador3.value = 255;
    range_value.innerHTML = deslizador.value;
    range_value2.innerHTML = deslizador2.value;
    range_value3.innerHTML = deslizador3.value;

    //-- Funcion de retrollamada del deslizador
    deslizador.oninput = () => {
      ctx.drawImage(img, 0,0);
      //-- Mostrar el nuevo valor del deslizador rojo
      range_value.innerHTML = deslizador.value;

      //-- Obtener la imagen del canvas en pixeles
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      //-- Obtener el array con todos los píxeles
      let data = imgData.data

      //-- Filtrar la imagen según el nuevo umbral
      for (let i = 0; i < data.length; i+=4) {
        if (data[i] > deslizador.value){
          data[i] = deslizador.value;
        }
      }
      //-- Poner la imagen modificada en el canvas
      ctx.putImageData(imgData, 0, 0);
    }

    deslizador2.oninput = () => {
      ctx.drawImage(img, 0,0);
      //-- Mostrar el nuevo valor del deslizador verde
      range_value2.innerHTML = deslizador2.value;

      //-- Obtener la imagen del canvas en pixeles
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      //-- Obtener el array con todos los píxeles
      let data = imgData.data

      //-- Filtrar la imagen según el nuevo umbral
      for (let i = 0; i < data.length; i+=4) {
        if (data[i+1] > deslizador2.value){
          data[i+1] = deslizador2.value;
       }
      }
      //-- Poner la imagen modificada en el canvas
      ctx.putImageData(imgData, 0, 0);
    }
    deslizador3.oninput = () => {
      ctx.drawImage(img, 0,0);
      //-- Mostrar el nuevo valor del deslizador azul
      range_value3.innerHTML = deslizador3.value;

      //-- Obtener la imagen del canvas en pixeles
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      //-- Obtener el array con todos los píxeles
      let data = imgData.data

      //-- Filtrar la imagen según el nuevo umbral
      for (let i = 0; i < data.length; i+=4) {
        if (data[i+2] > deslizador3.value){
          data[i+2] = deslizador3.value;
        }
      }
      //-- Poner la imagen modificada en el canvas
      ctx.putImageData(imgData, 0, 0);
    }
  }