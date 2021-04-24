console.log("Ejecutando JS...");

display = document.getElementById("display")
equal = document.getElementById("equal")
del = document.getElementById("del")
ac = document.getElementById("ac")
ans = document.getElementById("ans")
punto = document.getElementById("punto")
raiz = document.getElementById("raiz")
porcentaje = document.getElementById("porcentaje")
log = document.getElementById("log")
ln = document.getElementById("ln")
sin = document.getElementById("sin")
cos = document.getElementById("cos")
tan = document.getElementById("tan")

 //-- Digitos y operadores
let numeros = document.getElementsByClassName('numero');
let calculos = document.getElementsByClassName('operacion');

 //-- Estados de la calculadora
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2: 3,
  COMA: false,
}

//Variable estado
let estado = ESTADO.INIT;

//-- Digitos
for(i=0; i<numeros.length; i++){
  numeros[i].onclick=(ev)=>{
    digito(ev.target.value);
    console.log(`ESTADO ${estado}`);
    }
  }

  //-- Operadores
for(i=0; i<calculos.length; i++){
  calculos[i].onclick=(ev)=>{
    if(estado == ESTADO.OP1){
      display.innerHTML += ev.target.value;
      estado = ESTADO.OPERATION;
    }
  console.log(`ESTADO ${estado}`);
  }
}

function digito(boton){
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.INIT) {
    display.innerHTML = boton;
    estado = ESTADO.OP1;
  }else if (estado == ESTADO.OP1 || estado == ESTADO.OP2 || estado == ESTADO.OPERATION){
    display.innerHTML += boton;
    if (estado == ESTADO.OPERATION){
      estado = ESTADO.OP2;
    }
  }
}

//-- Evaluar 
igual.onclick = () => {
  console.log(estado);
  if(estado == ESTADO.OP2){
    display.innerHTML = eval(display.innerHTML);
    estado = ESTADO.OP1;
    ESTADO.PUNTO = false;
    console.log(estado,"igual");
  }
  sonido_teclas.play();
}

//-- Borrar todo
clear.onclick = (ev) => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
  ESTADO.PUNTO = false;
  console.log(estado,"clear");
  sonido_teclas.play();
}

//-- Poner punto 
punto.onclick = (ev) =>{
  if (ESTADO.PUNTO){
    console.log("No introduzca dos puntos seguidos, no se puede");
  } else {
    display.innerHTML += ev.target.value;
    ESTADO.PUNTO = true;
  }
  sonido_teclas.play();
}

//-- Eliminar un digito 
del.onclick = () => {
  display.innerHTML = display.innerHTML.slice(0,-1);
  sonido_teclas.play();
}

//-- Calcular porcentaje 
porcentaje.onclick = () => {
  display.innerHTML = (display.innerHTML/100);
  sonido_teclas.play();
}

//-- Calcular raiz cuadrada 
raiz.onclick = () => {
  display.innerHTML = Math.sqrt(display.innerHTML);
  sonido_teclas.play();
}

//-- Calcular el seno 
seno.onclick = () => {
  display.innerHTML = Math.sin(display.innerHTML);
  sonido_teclas.play();
}
//-- Calcular el coseno
coseno.onclick = () => {
  display.innerHTML = Math.cos(display.innerHTML);
  sonido_teclas.play();
}
//-- Calcular la tangente
tangente.onclick = () => {
  display.innerHTML = Math.tan(display.innerHTML);
  sonido_teclas.play();
}
//-- Calcular logaritmo
logaritmo.onclick = () => {
  display.innerHTML = Math.log(display.innerHTML);
  sonido_teclas.play();
}
//-- Calcular logaritmo neperiano
ln.onclick = () => {
  display.innerHTML = Math.ln(display.innerHTML);
  sonido_teclas.play();
}