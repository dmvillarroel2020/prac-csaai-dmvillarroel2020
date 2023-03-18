//-- Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset"),


    //-- Elementos del array del password

    cod1 : document.getElementById("codif1"),
    cod2 : document.getElementById("codif2"),
    cod3 : document.getElementById("codif3"),
    cod4 : document.getElementById("codif4"),

}

const botones = document.getElementsByClassName("num");

for (let boton of botones){
    console.log("Boton " + boton.value)
}

console.log("Ejecutando JS...");

//-- SECRET KEY Y MOSTRAR POR CONSOLE.LOG
{

//-- Array que almacena números secretos
const secretkey = [];

//-- Generar números aleatorios con un valor máximo
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//-- Generamos números secretos y los almacenamos en un array
for (let i = 0; i < 4; i++) {
    let rnum = getRandomInt(9);
    secretkey.push(rnum.toString());
}

//-- Mostramos el contenido del array de números secretos en la consola
for (let j = 0; j < secretkey.length; j++) {
    console.log( 'Posición nº' + j + ' Dígito Codificado ' + secretkey[j]);
}
}



//-- CRONOMETRO
{
    //-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
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
}


//-- BOTON 0



//gui.cod1.innerHTML = secretkey[0];
//gui.cod1.style.backgroundColor = "green";

//gui.cod2.innerHTML = secretkey[1];
//gui.cod2.style.backgroundColor = "green";

//gui.cod3.innerHTML = secretkey[2];
//gui.cod3.style.backgroundColor = "green";

//gui.cod4.innerHTML = secretkey[3];
//gui.cod4.style.backgroundColor = "green";


