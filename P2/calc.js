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
const click = new Audio('click.mp3')

 //-- Digitos y operadores
let numeros = document.getElementsByClassName('numero');
let operaciones = document.getElementsByClassName('operacion');

// Resultado
var resultado;

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
    click.play();
    digito(ev.target.value);
    console.log(`ESTADO ${estado}`);
    }
  }

  //-- Operadores
for(i=0; i<operaciones.length; i++){
  operaciones[i].onclick=(ev)=>{
    click.play();
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
equal.onclick = () => {
  click.play();
  if(estado == ESTADO.OP1 ||  estado == ESTADO.OP2){
    resultado = eval(display.innerHTML.replace('π', 'Math.PI').replace('^','**'))
    display.innerHTML = resultado
    estado = ESTADO.OP1;
  }
}

//-- Borrar todo
ac.onclick = (ev) => {
  click.play();
  display.innerHTML = "0";
  estado = ESTADO.INIT;
  ESTADO.PUNTO = false;
}

//-- Poner punto 
punto.onclick = (ev) =>{
  click.play();
  if (ESTADO.PUNTO){
    console.log("No introduzca dos puntos seguidos, no se puede");
  } else {
    display.innerHTML += ev.target.value;
    ESTADO.PUNTO = true;
  }
}

//-- Eliminar un digito 
del.onclick = () => {
  click.play();
  display.innerHTML = display.innerHTML.slice(0,-1);
}

//Dvolver digito
ans.onclick = () => {
  click.play();
  if(estado != ESTADO.INIT){
    display.innerHTML += resultado;
    estado = ESTADO.OP1;
  }
}

//-- Calcular porcentaje 
porcentaje.onclick = () => {
  click.play();
  display.innerHTML = (display.innerHTML/100);
}

//-- Calcular raiz cuadrada 
raiz.onclick = () => {
  click.play();
  resultado = Math.sqrt(display.innerHTML);
  display.innerHTML=resultado
}

//-- Calcular el seno 
seno.onclick = () => {
  click.play();
  resultado = Math.sin(display.innerHTML);
  display.innerHTML=resultado

}
//-- Calcular el coseno
coseno.onclick = () => {
  click.play();
  resultado = Math.cos(display.innerHTML);
  display.innerHTML=resultado
  
}
//-- Calcular la tangente
tangente.onclick = () => {
  click.play();
  resultado = Math.tan(display.innerHTML);
  display.innerHTML=resultado
}
//-- Calcular logaritmo
logaritmo.onclick = () => {
  resultado = Math.log10(display.innerHTML);
  display.innerHTML=resultado
  click.play();
}
//-- Calcular logaritmo neperiano
ln.onclick = () => {
  click.play();
  resultado = Math.ln(display.innerHTML);
  display.innerHTML=resultado
}