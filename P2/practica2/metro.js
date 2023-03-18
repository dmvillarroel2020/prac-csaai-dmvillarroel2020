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

//-- Guardo el array por separado en variables
let digito1 = secretkey[0];
let digito2 = secretkey[1];
let digito3 = secretkey[2];
let digito4 = secretkey[3];

//-- Asigno esas variables a los asteriscos
let cod1 = digito1;
let cod2 = digito2;
let cod3 = digito3;
let cod4 = digito4



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

//-- Creo un array con la key
let codigos = [cod1, cod2, cod3, cod4];

//-- Mostramos el contenido del array de números secretos en la consola
for (let k = 0; k < codigos.length; k++) {
    
    //Condicion de si el onlick es igual que un valor del array se sustituya en el asterisco(array)
    if (codigos[k] === gui.n0.onclick()) {
        codigos[k] = gui.n0.onclick(k);
        codigos[k].innerHTML = (gui.n0);
    }; 
    if (codigos[k] === gui.n1.onclick()) {
        codigos[k] = gui.n1.onclick(k);
        codigos[k].innerHTML = (gui.n1);
    }; 
    if (codigos[k] === gui.n2.onclick()) {
        codigos[k] = gui.n2.onclick(k);
        codigos[k].innerHTML = (gui.n2);
    }; 
    if (codigos[k] === gui.n3.onclick()) {
        codigos[k] = gui.n3.onclick(k);
        codigos[k].innerHTML = (gui.n3);
    }; 
    if (codigos[k] === gui.n4.onclick()) {
        codigos[k] = gui.n4.onclick(k);
        codigos[k].innerHTML = (gui.n4);
    }; 
    if (codigos[k] === gui.n5.onclick()) {
        codigos[k] = gui.n5.onclick(k);
        codigos[k].innerHTML = (gui.n5);
    }; 
    if (codigos[k] === gui.n6.onclick()) {
        codigos[k] = gui.n6.onclick(k);
        codigos[k].innerHTML = (gui.n6);
    }; 
    if (codigos[k] === gui.n7.onclick()) {
        codigos[k] = gui.n7.onclick(k);
        codigos[k].innerHTML = (gui.n7);
    }; 
    if (codigos[k] === gui.n8.onclick()) {
        codigos[k] = gui.n8.onclick(k);
        codigos[k].innerHTML = (gui.n8);
    }; 
    if (codigos[k] === gui.n9.onclick()) {
        codigos[k] = gui.n9.onclick(k);
        codigos[k].innerHTML = (gui.n9);
    }; 
}

