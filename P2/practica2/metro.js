//-- Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset"),


    //-- Elementos del teclado numerico

    n0 : document.getElementById("btn0"),
    n1 : document.getElementById("btn1"),
    n2 : document.getElementById("btn2"),
    n3 : document.getElementById("btn3"),
    n4 : document.getElementById("btn4"),
    n5 : document.getElementById("btn5"),
    n6 : document.getElementById("btn6"),
    n7 : document.getElementById("btn7"),
    n8 : document.getElementById("btn8"),
    n9 : document.getElementById("btn9"),

    //-- Elementos del array del password

    cod1 : document.getElementById("codif1"),
    cod2 : document.getElementById("codif2"),
    cod3 : document.getElementById("codif3"),
    cod4 : document.getElementById("codif4"),



}

//-- Definir un array con el codigo aleatorio para decodificar

var cantidadNumeros = 4;
var myArray = []
while(myArray.length < cantidadNumeros ) 
{
  var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
  var existe = false;
  for(var i=0;i<myArray.length;i++){
	if(myArray [i] == numeroAleatorio){
        existe = true;
        break;
    }
  }
  if(!existe){
    myArray[myArray.length] = numeroAleatorio;
  }

}


console.log("Ejecutando JS...");

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}
gui.n0.onclick = () => {
    console.log("Start!!");
    crono.start();
}  

gui.n1.onclick = () => {
    console.log("Start!!");
    crono.start();
}  

gui.n2.onclick = () => {
    console.log("Start!!");
    crono.start();
}  

gui.n3.onclick = () => {
    console.log("Start!!");
    crono.start();
}  

gui.n4.onclick = () => {
    console.log("Start!!");
    crono.start();
}  

gui.n5.onclick = () => {
    console.log("Start!!");
    crono.start();
}  

gui.n6.onclick = () => {
    console.log("Start!!");
    crono.start();
}  

gui.n7.onclick = () => {
    console.log("Start!!");
    crono.start();
}  

gui.n8.onclick = () => {
    console.log("Start!!");
    crono.start();
}  

gui.n9.onclick = () => {
    console.log("Start!!");
    crono.start();
}  

//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
}