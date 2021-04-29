console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 500;
canvas.height = 650;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Posición elementos
let xraqueta = 260; //Posición x raqueta
let yraqueta = 550; //Posición y raqueta
let xbola = 300; //Posición x pelota
let ybola = 300; //Posición y pelota

//-- Funcion raqueta
function dibujoraqueta(){
  ctx.beginPath();
  ctx.rect(xraqueta, yraqueta, 80, 20); // Dibujar raqueta
  ctx.fillStyle = 'white'; // Estilo raqueta
  ctx.fill(); // Rellenar
  ctx.stroke() // Trazo
ctx.closePath();
}

//-- Funcion pelota
function dibujobola(){
  ctx.beginPath();
  ctx.arc(xbola, ybola, 10, 0, 2 * Math.PI); // Dibujar pelota
  ctx.fillStyle = 'blue'; // Estilo
  ctx.fill(); // Rellenar
  ctx.stroke() // Trazo
ctx.closePath();
}

//-- Funcion principal
function update(){
    console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posiciones de los elementos

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 80, 20);

    //-- Dibujar
    ctx.fillStyle = 'blanchedalmond';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

    dibujoraqueta()
    dibujobola()
  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}