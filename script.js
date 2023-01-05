document.querySelector("#textoEntrada");
const inputMensaje = document.querySelector("#textoEntrada")
const inputResultado = document.querySelector("#textoSalida");

const btnEncriptar = document.querySelector("#botonEncriptar");
const btnDesencriptar = document.querySelector("#botonDesencriptar");
const btnCopiar = document.querySelector("#botonCopiar");


function Encriptar(){
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje

    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");
    inputResultado.value = mensajeEncriptado;
}

function Desencriptar(){

    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje

    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");
    inputResultado.value = mensajeEncriptado;
}

/*function copiar(){
    var texto = document.getElementById("#textoSalida")
    navigator.clipboard.writeText(texto)
    alert("copiado")
}*/

function copiar(t){
    t.preventDefault()
    let content = document.getElementById('textoSalida');
        content.select();
        let successful = document.execCommand('copy');}

btnEncriptar.onclick = Encriptar;
btnDesencriptar.onclick = Desencriptar;
btnCopiar.onclick = copiar;