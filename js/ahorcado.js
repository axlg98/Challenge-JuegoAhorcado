function contadorDeFallos(){
  //   var reemplazar =  reemplazar.replace(/./g , "_");
  if(fallar){
      contadorFallos++;
      dibujarAhorcado(contadorFallos)
  }
}

var botonLetra = document.getElementById("button")


function dibujarAhorcado(contarFallos){
     if(contarFallos > 0){
         dibujarCabeza();
     }
     if(contarFallos > 1){
         dibujarCuerpo();
     }
     if(contarFallos > 2){
         dibujarBrazoIzquierdo();
     }
     if(contarFallos > 3){
         dibujarBrazoDerecho();
     }
     if(contarFallos > 4){
         dibujarPiernaIzquierda();
     }
     if(contarFallos > 5){
         dibujarPiernaDerecha();
     }
     if(contarFallos > 6){
         reiniciarJuego();
     }
}

function verificarGanador(){
    if(vectorVacío.join("") == palabraSecreta){
        document.getElementById("finDelJuego").style.visibility="visible";
        document.getElementById("finDelJuego").innerHTML = "Felicidades, usted ha ganado.!"
      } 
}

function reiniciarJuego(){
     pincel.clearRect(0,0,pantalla.width, pantalla.height);
     vaciarVector();
     pincel.fillStyle = "cyan";
     pincel.fillRect(0,0,1200,800);
}

function vaciarVector(){
    for(var h = 0; h < palabraSecreta.length; h++){
        vectorVacío[h] = " ";
    }
    document.getElementById("finDelJuego").style.visibility="visible";
    document.getElementById("finDelJuego").innerHTML = "¡Usted perdió!." + "<br>" + "La palabra correcta era: <span id='colorPalabra'>" + palabraSecreta + " </span>"
    alert("La palabra correcta era: " +palabraSecreta);
}