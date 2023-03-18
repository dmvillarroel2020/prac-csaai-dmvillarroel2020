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

//-- Guardo el array generado por separado en variables
let digito1 = secretkey[0];
let digito2 = secretkey[1];
let digito3 = secretkey[2];
let digito4 = secretkey[3];


gui.cod1.innerHTML = secretkey[0];

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
    gui.n0=gui.n0.onclick()

    if (gui.n0 == digito1) {
        cod1.innerHTML = 0;
    } else if (gui.n0 == digito2) {
            cod1.innerHTML = 0;
            } else if (gui.n0 == digito3) {
                cod1.innerHTML = 0;
            } else (gui.n0 == digito4)
                cod1.innerHTML = 0;
            
}  

gui.n1.onclick = () => {
    console.log("Nº 1!!");
    crono.start();
    if (gui.n1 == digito1) {
        cod1.innerHTML = 0;
    } else if (gui.n1 == digito2) {
            cod1.innerHTML = 0;
            } else if (gui.n1 == digito3) {
                cod1.innerHTML = 0;
            } else (gui.n1 == digito4)
                cod1.innerHTML = 0;
}  

gui.n2.onclick = () => {
    console.log("Nº 2!!");
    crono.start();
    if (gui.n2 == digito1) {
        cod1.innerHTML = 0;
    } else if (gui.n2 == digito2) {
            cod1.innerHTML = 0;
            } else if (gui.n2 == digito3) {
                cod1.innerHTML = 0;
            } else (gui.n2 == digito4)
                cod1.innerHTML = 0;
}  

gui.n3.onclick = () => {
    console.log("Nº 3!!");
    crono.start();
    if (gui.n3 == digito1) {
        cod1.innerHTML = 0;
    } else if (gui.n3 == digito2) {
            cod1.innerHTML = 0;
            } else if (gui.n3 == digito3) {
                cod1.innerHTML = 0;
            } else (gui.n3 == digito4)
                cod1.innerHTML = 0;
}  

gui.n4.onclick = () => {
    console.log("Nº 4!!");
    crono.start();
    if (gui.n4 == digito1) {
        cod1.innerHTML = 0;
    } else if (gui.n4 == digito2) {
            cod1.innerHTML = 0;
            } else if (gui.n4 == digito3) {
                cod1.innerHTML = 0;
            } else (gui.n4 == digito4)
                cod1.innerHTML = 0;
}  

gui.n5.onclick = () => {
    console.log("Nº 5!!");
    crono.start();
    if (gui.n5 == digito1) {
        cod1.innerHTML = 0;
    } else if (gui.n5 == digito2) {
            cod1.innerHTML = 0;
            } else if (gui.n5 == digito3) {
                cod1.innerHTML = 0;
            } else (gui.n5 == digito4)
                cod1.innerHTML = 0;
}  

gui.n6.onclick = () => {
    console.log("Nº 6!!");
    crono.start();
    if (gui.n6 == digito1) {
        cod1.innerHTML = 0;
    } else if (gui.n6 == digito2) {
            cod1.innerHTML = 0;
            } else if (gui.n6 == digito3) {
                cod1.innerHTML = 0;
            } else (gui.n6 == digito4)
                cod1.innerHTML = 0;
}  

gui.n7.onclick = () => {
    console.log("Nº 7!!");
    crono.start();
    if (gui.n7 == digito1) {
        cod1.innerHTML = 0;
    } else if (gui.n7 == digito2) {
            cod1.innerHTML = 0;
            } else if (gui.n7 == digito3) {
                cod1.innerHTML = 0;
            } else (gui.n7 == digito4)
                cod1.innerHTML = 0;
}  

gui.n8.onclick = () => {
    console.log("Nº 8!!");
    crono.start();
    if (gui.n8 == digito1) {
        cod1.innerHTML = 0;
    } else if (gui.n8 == digito2) {
            cod1.innerHTML = 0;
            } else if (gui.n8 == digito3) {
                cod1.innerHTML = 0;
            } else (gui.n8 == digito4)
                cod1.innerHTML = 0;
}  

gui.n9.onclick = () => {
    console.log("Nº 9!!");
    crono.start();
    if (gui.n9 == digito1) {
        cod1.innerHTML = 0;
    } else if (gui.n9 == digito2) {
            cod1.innerHTML = 0;
            } else if (gui.n9 == digito3) {
                cod1.innerHTML = 0;
            } else (gui.n9 == digito4)
                cod1.innerHTML = 0;
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
