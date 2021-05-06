console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 500;
canvas.height = 600;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Elementos
let puntos = 0; //Puntos
let vidas = 3; //Vidas
//Colores
var color1 = 'green';
var color2 = 'pink';
var color3 = 'purple';
var color4 = 'lightblue';
var A_colores = [color1,color2,color3,color4]

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

//-- Funcion raqueta
function dibujoraqueta(){
  ctx.beginPath();
  ctx.rect(raquetaX, raquetaY, 80, 20); // Dibujar raqueta
  ctx.fillStyle = 'white'; // Estilo raqueta
  ctx.fill(); // Rellenar
  ctx.stroke() // Trazo
  ctx.closePath();
}

//-- Mover raqueta
window.onkeydown = (e) => {
  console.log();
  //-- Según la tecla se hace una cosa u otra
  switch (e.key) {
      case "a": // izquierda
          raquetaX = raquetaX - 20;
          break;
      case "d": // derecha
          raquetaX = raquetaX + 20;
      break; 
      case " ":
          estado = ESTADO.JUEGO;
          break;
  }
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

//-- Estados juego
const ESTADO = {
  INIT: 0,
  BEGIN: 1,
  JUEGO: 2,
}
let estado = ESTADO.INIT

//-- Estado inicial
function inicio(){
  if(estado == ESTADO.INIT){
      pelotaX = 250;
      pelotaY = 510;
      raquetaX = 210;
      raquetaY = 560;
      velX = 0;
      velY = 0;
  }
}

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
  for(j = 0; j < LADRILLO.C; j++){
    ladrillos[i][j] = {
      x: initX + (LADRILLO.W + LADRILLO.PADDING) * j,
      y: initY + (LADRILLO.H + LADRILLO.PADDING) * i,
      W: LADRILLO.W,
      H: LADRILLO.H,
      PADDING: LADRILLO.PADDING,
      VISIBLE: LADRILLO.VISIBLE,
      color: A_colores[Math.floor(Math.random()*4)]
    };
  }
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

//-- Funcion destruir ladrillos
function colision(){
  for(let i = 0; i < LADRILLO.F; i++){
      for(let j = 0; j < LADRILLO.C; j++){
          if(pelotaX >= ladrillos[i][j].x && pelotaX <= (ladrillos[i][j].x+35+10) && pelotaY >= ladrillos[i][j].y && pelotaY <= (ladrillos[i][j].y)+30+10 && ladrillos[i][j].VISIBLE){
              ladrillos[i][j].VISIBLE = false;
              velY = -velY;
              if(ladrillos[i][j].color == color1){
                  puntos = puntos + 1;
              }
              if(ladrillos[i][j].color == color2){
                  puntos = puntos + 2;
              }
              if(ladrillos[i][j].color == color3){
                  puntos = puntos + 3;
              }
              if(ladrillos[i][j].color == color4){
                  puntos = puntos + 4;
              }
          }
      }
  }  
}
//-- Texto con puntos
function puntuacion(){
  ctx.font = "20px Arial";
  ctx.fillStyle = 'white';
  ctx.fillText('Puntos: ' + puntos, 30, 40);
}

//-- Texto con vidas
function vida(){
  ctx.font = "20px Arial";
  ctx.fillStyle = 'red';
  ctx.fillText('Vidas: ' + vidas, 400, 40);
}
//-- Linea discontinua
function dibujolinea(){
  ctx.beginPath();    
  ctx.moveTo( 0, 60);//de este punto 
  ctx.lineTo(600, 60); //a este
  ctx.strokeStyle = 'white'; //borde blanco
  ctx.stroke();
  ctx.closePath();
}

//-- Funcion principal
function update(){
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posiciones de los elementos
  //-- Estado inicial
  inicio();

  //-- Movimiento pelota
  if(estado == ESTADO.JUEGO){
    if(velX == 0 && velY == 0){
      velX = 5;
      velY = -3;
    }
    //-- Rebote vertical
    if (pelotaX < 12 || pelotaX >= (canvas.width - 10) ) {
      velX = -velX;
    }
    
    //-- Rebote horizontal
    if (pelotaY <= 12 || pelotaY > (canvas.height - 12)) {
      velY = -velY;
    }
    //-- Actualizar la posición
    pelotaX = pelotaX + velX;
    pelotaY = pelotaY + velY;

    //-- Choque raqueta
    if(pelotaX >= raquetaX-10 && pelotaX < (raquetaX+80+10) && pelotaY >= (raquetaY-10) && pelotaY < (raquetaY+20+10)){
      velX = -velX;
      velY = -velY;
    }

    //-- Limites raqueta
    if (raquetaX < 0) {
      raquetaX = 0;
    }
    if (raquetaX > 420){
      raquetaX = 420;
    }

    //-- Si no le doy,pierdo
    if(pelotaY > 570){
      estado = ESTADO.INIT;
      vidas = vidas - 1;
      fallo.play();
      if (vidas == 0){
          fin.play();
          document.location.reload();
      } // si no golpeo, resto una vida
    }
    colision();
  }

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles

  dibujoraqueta() //raqueta
  dibujobola() //pelota
  dibujoladrillos() //ladrillos
  dibujolinea() //linea discontinua
  puntuacion()
  vida()

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);

}

update();