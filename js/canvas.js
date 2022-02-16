var pantalla = document.querySelector("#ahorcado");
var pincel   = pantalla.getContext("2d");

     pincel.fillStyle = "cyan";
     pincel.fillRect(0,0,1200,800);
//Dibujar la Horca para el juego del Ahorcado.
function dibujarHorca(){
        dibujarBase();
        dibujarPoste();
        lineaHorizontal();
        lineaVertical();
        longitudDeGuiones()
}
//Líneas para el juego del ahorcado
     function dibujarLinea(x1,y1,x2,y2){
             pincel.fillStyle= "black"
             pincel.beginPath();
             pincel.moveTo(x1,y1);
             pincel.lineTo(x2,y2);
             pincel.stroke();
     }

//Base

function dibujarBase(){
        dibujarLinea(20, 450, 150, 450);
}

//Dibujar Poste

function dibujarPoste(){
        dibujarLinea(70, 450, 70, 100);
}

//poste de arriba

function lineaHorizontal(){
        dibujarLinea(70, 100, 200, 100);
}

//Linea vertical

function lineaVertical(){
        dibujarLinea(200, 100, 200, 150);
}

///////////Dibujar guiones para el Ahorcado ////////////////////
var vector = colocarPalabra();
function longitudDeGuiones(){
         var xInicial = 400;
         var xFinal = 425;
         for(var i = 0; i <  vector.length; i++){
                 dibujarLinea(xInicial,600, xFinal, 600);
                 xInicial= xInicial + 60;
                 xFinal =xFinal +60;
         }
}


function dibujarLetra(letra, x, y, color){
         pincel.font= "30px Arial";
         pincel.fillStyle= color;
         letra = letra.toUpperCase();
         if(letra == "I"){
                pincel.fillText(letra,x+10,y);
         }else{
                pincel.fillText(letra,x,y);
         }
}

function dibujarPalabra(palabra,x,y){
        pincel.font= "20px Arial";
        pincel.fillText(palabra,x,y);
}

 ////////////////////// DIBUJAR PERSONA //////////////////////////////
function dibujarPersona(){
         dibujarCabeza();
         dibujarCuerpo();
         dibujarBrazoIzquierdo();
         dibujarBrazoDerecho();
         dibujarPiernaIzquierda();
         dibujarPiernaDerecha();
}
   //Cabeza
function dibujarCabeza(){
        pincel.fillStyle= "black";
        pincel.beginPath();
        pincel.arc(200,180,30,0,3*Math.PI);
        pincel.stroke();
}

//Cuerpo

function dibujarCuerpo(){
         dibujarLinea(200,210,200,340);
}

//Brazo izquierdo

function dibujarBrazoIzquierdo(){
         dibujarLinea(200,230,160,270);
}

//Brazo derecho

function dibujarBrazoDerecho(){
         dibujarLinea(200,230,240,270);
}

//Pierna izquierda

function dibujarPiernaIzquierda(){
        dibujarLinea(200,340,160,380);
}

//Pierna derecha

function dibujarPiernaDerecha(){
        dibujarLinea(200,340,240,380);
}

function empezarElJuego(){
        window.scroll(0,400)
        juegoIniciar = true;
        dibujarHorca();
        longitudDeGuiones();
        iniciarVector()
}

