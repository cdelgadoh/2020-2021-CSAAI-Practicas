console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 600;
canvas.height = 750;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Posición elementos
let xraqueta = 260; //Posición x raqueta
let yraqueta = 700; //Posición y raqueta
let xbola = 300; //Posición x pelota
let ybola = 675; //Posición y pelota

//-- Velocidades del objeto(de la bola)
let xvel = 3;
let yvel = 1;

//-- Constantes
const button = document.getElementById("play");

//-- Constantes de los ladrillos
let xinit = 35;
let yinit = 60;
let xincr = 60;
let yincr = 50 ;
let filas = 5;
let columnas = 9;
var arraybloques = new Array(filas*columnas);
let b = 0;

//-- Estructura de los ladrillos
for (i = 0; i < filas; i++){
  for(j = 0; j < columnas; j++){
      var bloque = {
          x : xinit + j * xincr,
          y : yinit + i * yincr,
          estado : 1,
      };
      arraybloques[b] = bloque; 
      b = b + 1; //b es cada posicion del arraybloque
  }
}

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

//-- Funcion ladrillos 
function dibujoladrillos(){
  for (b = 0; b < filas*columnas; b++){
      if (arraybloques[b].estado == 1){
          ctx.beginPath();
              ctx.rect(arraybloques[b].x,arraybloques[b].y,50,20);
              ctx.strokeStyle = 'white';
              ctx.fill();
              ctx.stroke()
          ctx.closePath();
      }
  }
}

//-- Funcion principal
function update(){
    console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posiciones de los elementos
   //-- Movimiento pelota
   if (xbola < 0 || xbola >= (canvas.width - 20) ) {
    xvel = -xvel;
  }if(ybola <= 0 || ybola > (canvas.height - 20)) {
    yvel = -yvel;
  }
  //-- Actualizar la posición
  xbola = xbola + xvel;
  ybola = ybola + yvel;
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  dibujoraqueta()
  dibujobola()
  dibujoladrillos()
  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);

  //-- Mover raqueta
  window.onkeydown = (e) => {
  //-- Según la tecla se hace una cosa u otra
    switch (e.key) {
      case "a":
        xraqueta = xraqueta - 20; // Izq.
    break;
      case "d":
        xraqueta = xraqueta + 20; // Dcha.
    break;
    }
  }
}

update();