//Ir letra a por letra
var encontrado = true;

var vectorPalabra = vector.split("");

botonSecreto.onclick = dibujarLetraCorrecta;

var letraAveriguar = "";

var vectorVacío = [];

function iniciarVector(){
    for(var j = 0 ; j <palabraSecreta.length; j++){
        vectorVacío[j] = " ";
    }
}

function dibujarLetraCorrecta(){
    input = document.querySelector("#letra");
    input.focus();
    letraAveriguar = document.querySelector("#letra").value;
    for(var i = 0; i < vectorPalabra.length; i++){
        if(letraAveriguar == vectorPalabra[i]){
                 vectorVacío[i] = vectorPalabra[i];
                 encontrado = false;
        }
    }
    if(encontrado == true){
        dibujarLetraIncorrecta(letraAveriguar);
    }

    var xLog= 400;
    for(var l = 0; l < vectorVacío.length; l++){
        dibujarLetra(vectorVacío[l], xLog + l*60 ,595,"black");
    }
    document.getElementById("letra").value = "";
    verificarGanador();
    encontrado = true;
}

var titulo = true;
var z= 700;
var vecLetrasErradas = [];
function dibujarLetraIncorrecta(letraIncorrecta){
    if(titulo){
        dibujarPalabra("Letras incorrectas:", 700, 200);
        titulo = false;
    }
    if((vecLetrasErradas.find(el=>el==letraIncorrecta) != letraIncorrecta) && juegoIniciar){
        vecLetrasErradas.push(letraIncorrecta)
        if(letraIncorrecta != ""){
        dibujarLetra(letraIncorrecta,z,250,"red");
        contadorDeFallos()
        z = z + 30
        }
    }
}