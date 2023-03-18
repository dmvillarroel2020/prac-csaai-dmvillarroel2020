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



//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}
//-- asignamos variables donde guardar los onclicks
var boton0, boton1, boton2, boton3, boton4, boton5, boton6, boton7, boton8, boton9;


//-- BOTON 0

gui.n0.onclick = () => {
    console.log("Nº 0!!");
    crono.start(); // inicia al pulsar el boton 0

    boton0 = getAttribute("gui.n0.onclick"); //guarda el string del boton al pulsarlo

    //-- Comparamos el valor de la variable obtenida por onclick con los nº codificados

    if (boton0 === digito1) {
        gui.cod1.innerHTML = secretkey[0];
        gui.cod1.style.backgroundColor = "green";
    }
    
    if (boton0 === digito2) {
        gui.cod2.innerHTML = secretkey[1];
        gui.cod2.style.backgroundColor = "green";
    }
    
    if (boton0 === digito1) {
        gui.cod3.innerHTML = secretkey[2];
        gui.cod3.style.backgroundColor = "green";
    }
    
    if (boton0 === digito2) {
        gui.cod4.innerHTML = secretkey[3];
        gui.cod4.style.backgroundColor = "green";
    }

}  

//-- BOTON 1

gui.n1.onclick = () => {
    console.log("Nº 1!!");
    crono.start();

    boton1 = getAttribute("gui.n1.onclick");

    if (boton1 === digito1) {
        gui.cod1.innerHTML = secretkey[0];
        gui.cod1.style.backgroundColor = "green";
    }

    if (boton1 === digito2) {
        gui.cod2.innerHTML = secretkey[1];
        gui.cod2.style.backgroundColor = "green";
    }

    if (boton1 === digito1) {
        gui.cod3.innerHTML = secretkey[2];
        gui.cod3.style.backgroundColor = "green";
    }

    if (boton1 === digito2) {
        gui.cod4.innerHTML = secretkey[3];
        gui.cod4.style.backgroundColor = "green";
    }

}

//-- BOTON 2

gui.n2.onclick = () => {
    console.log("Nº 2!!");
    crono.start();

    boton2 = getAttribute("gui.n2.onclick");

    if (boton2 === digito1) {
        gui.cod1.innerHTML = secretkey[0];
        gui.cod1.style.backgroundColor = "green";
    }

    if (boton2 === digito2) {
        gui.cod2.innerHTML = secretkey[1];
        gui.cod2.style.backgroundColor = "green";
    }

    if (boton2 === digito1) {
        gui.cod3.innerHTML = secretkey[2];
        gui.cod3.style.backgroundColor = "green";
    }

    if (boton2 === digito2) {
        gui.cod4.innerHTML = secretkey[3];
        gui.cod4.style.backgroundColor = "green";
    }
}  

//-- BOTON 3

gui.n3.onclick = () => {
    console.log("Nº 3!!");
    crono.start();

    boton3 = getAttribute("gui.n3.onclick");

    if (boton3 === digito1) {
        gui.cod1.innerHTML = secretkey[0];
        gui.cod1.style.backgroundColor = "green";
    }

    if (boton3 === digito2) {
        gui.cod2.innerHTML = secretkey[1];
        gui.cod2.style.backgroundColor = "green";
    }

    if (boton3 === digito1) {
        gui.cod3.innerHTML = secretkey[2];
        gui.cod3.style.backgroundColor = "green";
    }

    if (boton3 === digito2) {
        gui.cod4.innerHTML = secretkey[3];
        gui.cod4.style.backgroundColor = "green";
    }
}  

gui.n4.onclick = () => {
    console.log("Nº 4!!");
    crono.start();

    boton4 = getAttribute("gui.n4.onclick");

    if (boton4 === digito1) {
        gui.cod1.innerHTML = secretkey[0];
        gui.cod1.style.backgroundColor = "green";
    }

    if (boton4 === digito2) {
        gui.cod2.innerHTML = secretkey[1];
        gui.cod2.style.backgroundColor = "green";
    }

    if (boton4 === digito1) {
        gui.cod3.innerHTML = secretkey[2];
        gui.cod3.style.backgroundColor = "green";
    }

    if (boton4 === digito2) {
        gui.cod4.innerHTML = secretkey[3];
        gui.cod4.style.backgroundColor = "green";
    }
}  

gui.n5.onclick = () => {
    console.log("Nº 5!!");
    crono.start();

    boton5 = getAttribute("gui.n5.onclick");

    if (boton5 === digito1) {
        gui.cod1.innerHTML = secretkey[0];
        gui.cod1.style.backgroundColor = "green";
    }

    if (boton5 === digito2) {
        gui.cod2.innerHTML = secretkey[1];
        gui.cod2.style.backgroundColor = "green";
    }

    if (boton5 === digito1) {
        gui.cod3.innerHTML = secretkey[2];
        gui.cod3.style.backgroundColor = "green";
    }

    if (boton5 === digito2) {
        gui.cod4.innerHTML = secretkey[3];
        gui.cod4.style.backgroundColor = "green";
    }

}  

gui.n6.onclick = () => {
    console.log("Nº 6!!");
    crono.start();

    boton6 = getAttribute("gui.n6.onclick");

    if (boton6 === digito1) {
        gui.cod1.innerHTML = secretkey[0];
        gui.cod1.style.backgroundColor = "green";
    }

    if (boton6 === digito2) {
        gui.cod2.innerHTML = secretkey[1];
        gui.cod2.style.backgroundColor = "green";
    }

    if (boton6 === digito1) {
        gui.cod3.innerHTML = secretkey[2];
        gui.cod3.style.backgroundColor = "green";
    }

    if (boton6 === digito2) {
        gui.cod4.innerHTML = secretkey[3];
        gui.cod4.style.backgroundColor = "green";
    }

}  

gui.n7.onclick = () => {
    console.log("Nº 7!!");
    crono.start();

    boton7 = getAttribute("gui.n7.onclick");

    if (boton7 === digito1) {
        gui.cod1.innerHTML = secretkey[0];
        gui.cod1.style.backgroundColor = "green";
    }

    if (boton7 === digito2) {
        gui.cod2.innerHTML = secretkey[1];
        gui.cod2.style.backgroundColor = "green";
    }

    if (boton7 === digito1) {
        gui.cod3.innerHTML = secretkey[2];
        gui.cod3.style.backgroundColor = "green";
    }

    if (boton7 === digito2) {
        gui.cod4.innerHTML = secretkey[3];
        gui.cod4.style.backgroundColor = "green";
    }

}  

gui.n8.onclick = () => {
    console.log("Nº 8!!");
    crono.start();

    boton8 = getAttribute("gui.n8.onclick");

    if (boton8 === digito1) {
        gui.cod1.innerHTML = secretkey[0];
        gui.cod1.style.backgroundColor = "green";
    }

    if (boton8 === digito2) {
        gui.cod2.innerHTML = secretkey[1];
        gui.cod2.style.backgroundColor = "green";
    }

    if (boton8 === digito1) {
        gui.cod3.innerHTML = secretkey[2];
        gui.cod3.style.backgroundColor = "green";
    }

    if (boton8 === digito2) {
        gui.cod4.innerHTML = secretkey[3];
        gui.cod4.style.backgroundColor = "green";
    }

}  

gui.n9.onclick = () => {
    console.log("Nº 9!!");
    crono.start();

    boton9 = getAttribute("gui.n9.onclick");

    if (boton9 === digito1) {
        gui.cod1.innerHTML = secretkey[0];
        gui.cod1.style.backgroundColor = "green";
    }

    if (boton9 === digito2) {
        gui.cod2.innerHTML = secretkey[1];
        gui.cod2.style.backgroundColor = "green";
    }

    if (boton9 === digito1) {
        gui.cod3.innerHTML = secretkey[2];
        gui.cod3.style.backgroundColor = "green";
    }

    if (boton9 === digito2) {
        gui.cod4.innerHTML = secretkey[3];
        gui.cod4.style.backgroundColor = "green";
    }

}  

//gui.cod1.innerHTML = secretkey[0];
//gui.cod1.style.backgroundColor = "green";

//gui.cod2.innerHTML = secretkey[1];
//gui.cod2.style.backgroundColor = "green";

//gui.cod3.innerHTML = secretkey[2];
//gui.cod3.style.backgroundColor = "green";

//gui.cod4.innerHTML = secretkey[3];
//gui.cod4.style.backgroundColor = "green";

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

