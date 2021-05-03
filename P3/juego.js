console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 500;
canvas.height = 600;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Posición elementos
let raquetaX= 210; //Posición x raqueta
let raquetaY = 560; //Posición y raqueta
let pelotaX = 250; //Posición x pelota
let pelotaY = 520; //Posición y pelota

//-- Velocidades del objeto(de la bola)
let velX = 3;
let velY = 1;

//-- Mover raqueta
var evento = window.event;

//-- Estados juego
const ESTADO = {
  INIT: 0,
  BEGIN: 1,
  JUEGO: 2,
}
let estado = ESTADO.INIT

//-- Constantes de los ladrillos
let initX = 14;
let initY = 80;
const LADRILLO = {
  F: 5, //Filas
  C: 9, //Columnas
  W: 35, // Ancho
  H: 20, //Alto
  PADDING: 20, //Espacio alrededor del ladrillo
  VISIBLE: true //Estado ladrillo
}
const ladrillos = [];

//-- Estructura de los ladrillos
for (i = 0; i < LADRILLO.F; i++){
  ladrillos[i] = [];
  for(j = 0; j < LADRILLOC; j++){
    ladrillos[i][j] = {
      x: initX + (LADRILLO.W + LADRILLO.PADDING) * j,
      y: initY + (LADRILLO.H + LADRILLO.PADDING) * i,
      W: LADRILLO.W,
      H: LADRILLO.H,
      PADDING: LADRILLO.PADDING,
      VISIBLE: LADRILLO.VISIBLE
    };
  }
}

//-- Funcion raqueta
function dibujoraqueta(){
  ctx.beginPath();
  ctx.rect(raquetaX, raquetaY, 80, 20); // Dibujar raqueta
  ctx.fillStyle = 'white'; // Estilo raqueta
  ctx.fill(); // Rellenar
  ctx.stroke() // Trazo
  ctx.closePath();
}

//-- Funcion pelota
function dibujobola(){
  ctx.beginPath();
  ctx.arc(pelotaX, pelotaY, 10, 0, 2 * Math.PI); // Dibujar pelota
  ctx.fillStyle = 'blue'; // Estilo
  ctx.fill(); // Rellenar
  ctx.stroke() // Trazo
  ctx.closePath();
}

//-- Funcion ladrillos 
function dibujoladrillos(){
  for (let i = 0; i < LADRILLO.F; i++){
    for (let j = 0; j < LADRILLO.C; j++){
      if(ladrillos[i][j].VISIBLE){
        ctx.beginPath();
        ctx.rect(ladrillos[i][j].x,ladrillos[i][j].y,LADRILLO.W,LADRILLO.H);
        ctx.fillStyle = ladrillos[i][j].color;
        ctx.fill(); // Rellenar
        ctx.closePath;
      }
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

  //-- Rebotar raqueta
  if (xbola >= xraqueta && xbola <= (xraqueta + 90) && ybola >= (yraqueta + 30)) {
    yvel = yvel * -1;
    xvel = xvel * -1;
  }

  //Limites raqueta
  if (xraqueta < 0) {
    xraqueta = 0;
  }
  if (xraqueta > 525){
    xraqueta = 525;
  }

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