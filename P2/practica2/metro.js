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

console.log("Ejecutando JS...");

//-- 

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


let digito1 = secretkey[0];
let digito2 = secretkey[1];
let digito3 = secretkey[2];
let digito4 = secretkey[3];


function cambiarKeyy() {
    for (let i=0; i < secretkey[i]; i++) {
        if (secretkey(i) === parseInt[n0]) {
            secretkey[i] = parseInt[n0];
        }
        if (secretkey(i) === parseInt[n1]) {
            secretkey[i] = parseInt[n1];
        }
        if (secretkey(i) === parseInt[n2]) {
            secretkey[i] = parseInt[n2];
        }

        if (secretkey(i) === parseInt[n3]) {
            secretkey[i] = parseInt[n3];
        }
        if (secretkey(i) === parseInt[n4]) {
            secretkey[i] = parseInt[n4];
        }
        if (secretkey(i) === parseInt[n5]) {
            secretkey[i] = parseInt[n5];
        }

        if (secretkey(i) === parseInt[n6]) {
            secretkey[i] = parseInt[n6];
        }
        if (secretkey(i) === parseInt[n7]) {
            secretkey[i] = parseInt[n7];
        }
        if (secretkey(i) === parseInt[n8]) {
            secretkey[i] = parseInt[n8];
        }

        if (secretkey(i) === parseInt[n9]) {
            secretkey[i] = parseInt[n9];
        }
    };
}
//-- Ponemos en console.log el valor de j en la password

//--fconst c1 = cod1, c2 = cod2, c3= cod3, c4 = cod4;

//--for (let j = 0; j < secretkey.length; j++) {

    //--fif(secretkey[j] == 0) {      
        //--fc1.innerHTML = ('pass 1' + secretkey[0]);
    //--f}
  
//--f    if(secretkey[j] == 1) {      
    //--f    c2.innerHTML = ('pass 2' + secretkey[1]);
    //--f}  
    
    //--fif(secretkey[j] == 2) {      
    //--f    c3.innerHTML = ('pass 3' + secretkey[2]);
    //--f}  

    //--fif(secretkey[j] == 1) {      
    //--f    c4.innerHTML = ('pass 4' + secretkey[3]);
    //--f}  
//--f}
//-- 

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}
gui.n0.onclick = () => {
    console.log("Nº 0!!");
    crono.start();
}  

gui.n1.onclick = () => {
    console.log("Nº 1!!");
    crono.start();
}  

gui.n2.onclick = () => {
    console.log("Nº 2!!");
    crono.start();
}  

gui.n3.onclick = () => {
    console.log("Nº 3!!");
    crono.start();
}  

gui.n4.onclick = () => {
    console.log("Nº 4!!");
    crono.start();
}  

gui.n5.onclick = () => {
    console.log("Nº 5!!");
    crono.start();
}  

gui.n6.onclick = () => {
    console.log("Nº 6!!");
    crono.start();
}  

gui.n7.onclick = () => {
    console.log("Nº 7!!");
    crono.start();
}  

gui.n8.onclick = () => {
    console.log("Nº 8!!");
    crono.start();
}  

gui.n9.onclick = () => {
    console.log("Nº 9!!");
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