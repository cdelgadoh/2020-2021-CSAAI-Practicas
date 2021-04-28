console.log("Ejecutando js...");

const canvas = document.getElementById("canvas");

//-- Tamaño del canvas 
 canvas.width = 400;
 canvas.height = 600;

const ctx = canvas.getContext("2d");


//-- Dibujo la pelota con coordenadas, radio, angulo inicial, angulo final

    ctx.beginPath();
        ctx.arc(200, 500, 10, 0, 2 *Math.PI);
        ctx.fillStyle = 'white';

        ctx.fill();
        ctx.stroke();

    ctx.closePath();


//-- Vidas

    ctx.strokeStyle = 'red';
    ctx.font = "15px Arial";
    ctx.strokeText("VIDAS: 3", 300, 50);


//-- Puntos

ctx.font = "15px Arial";
ctx.strokeStyle = 'white';
ctx.strokeText("PUNTOS TOTALES: 0000", 20, 50);