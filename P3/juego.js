console.log("Ejecutando JS...");

var canvas = document.getElementsById("mycanvas");
//-- Definir tamaño
canvas.width = 300;
canvas.height = 100;

var ctx = canvas.getContext("2d");

//-- Cada objetoa dibujar lo delimitaremos por los métodos beginPath() y closePath()
ctx.beginPath();
    //--Definir un rectangulo en la esquina sup izquierda
    ctx.rect(5,5,100,50);

    //-- Color
    ctx.fillStyle ='blue';

    //--Mostrar relleno
    ctx.fillStyle()

    //-Mostrar trazo rectángulo
    ctx.stroke();
ctx.closePath();