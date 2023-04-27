//----- Obtener elemento de video y configurarlo
let directo = document.getElementById("directo");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3")
const btn_video1 = document.getElementById("btn_video1");
const btn_video2 = document.getElementById("btn_video2");
const btn_video3 = document.getElementById("btn_video3");
const btn_test = document.getElementById("btn_test");
const btn_src_on = document.getElementById("btn_src_on");


//-- Establecer las dimensiones de los vídeos
directo.width=720;
directo.height=480;

video1.width=200;  
video1.height=100;

video2.width=200;  
video2.height=100;

video3.width=200;
video3.height=100;

//-- Imagen de Test usada
const TEST_IMAGE_URL = "fondo.png";

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
directo.poster = TEST_IMAGE_URL;

video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;
video3.poster = TEST_IMAGE_URL;

//-- Boton de FUENTES-ON
btn_src_on.onclick = () => {
 
  //-- Establecer la fuente de la cámara 1
  video1.src="valv.mp4";

  //-- Establecer la fuente de la cámara 2
  video2.src="cr7.mp4"

  video3.src="vini.mp4";

  //-- Reproducimos un vídeo, desde el comienzo
  video1.currentTime = 0;
  video1.play();

  video2.currentTime = 0;
  video2.play();

  video3.currentTime = 0;
  video3.play();

  //-- Y en silencio...
  video1.muted;
  video2.muted;
  video3.muted;

  //-- En la emisión en directo ponemos la imagen de prueba
  directo.poster = TEST_IMAGE_URL;
};

//-- Botón de Test
btn_test.onclick = () => {
    directo.poster = TEST_IMAGE_URL;
    directo.src = null;
};

//-- Botón de Selección de la cámara 1
btn_video1.onclick = () => {
    directo.src = video1.src;
    directo.currentTime = video1.currentTime;
    directo.play();
    directo.poster=null;
};
//-- Botón de Selección de la cámara 2
btn_video2.onclick = () => {
  directo.src = video2.src;
  directo.currentTime = video2.currentTime;
  directo.play();
  directo.poster=null;
};
//-- Boton de seleccion de la camara 3
btn_video3.onclick = () => {
  directo.src = video3.src;
  directo.currentTime = video3.currentTime;
  directo.play();
  directo.poster=null;
}