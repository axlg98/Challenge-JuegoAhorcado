var palabras= ["BANCO", "JAVASCRIPT", "PROGRAMACION", "ALURA", "CODIGO", "PERSONAS", "PIZZA", "COMPUTADORA", "FAMILIA","ORACLE","HELADO", "PROGRAMADOR"];

var boton= document.querySelector("#iniciar-juego");

var letra = document.getElementById("letra").value;

var letraMayuscula = letra.toUpperCase()

var juegoIniciar = false;
//INICIAR EL JUEGO
boton.addEventListener("click", iniciarJuego)

function iniciarJuego(){
    empezarElJuego();
}

var botonSecreto = document.querySelector("#button")
// AGREGA PALABRA SECRETA AL JUEGO
function agregarPalabraSecreta(){
  var input = document.querySelector("#input-nueva-palabra").value;
  palabras.push(input);
  document.querySelector("#input-nueva-palabra").value= "";
}

var btnAgregarPalabra = document.querySelector("#nueva-palabra");
btnAgregarPalabra.onclick = agregarPalabraSecreta;

var palabraSecreta
  function colocarPalabra(){
    palabraSecreta = palabras[Math.floor(Math.random() *palabras.length)];
      return palabraSecreta
  }
var contadorFallos = 0;

var fallar = true;
