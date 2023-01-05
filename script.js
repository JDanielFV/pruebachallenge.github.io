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
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado

    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");
    inputResultado.value = mensajeEncriptado;
}

/*function copiar(){
    await navigator.clipboard.writeText("textoSalida");
    console.log('contenido copiado')
}*/

function copiar(){
    let text = document.querySelector("#textoSalida").innerHTML;
    const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
    }
}
btnEncriptar.onclick = Encriptar;
btnDesencriptar.onclick = Desencriptar;
btnCopiar.onclick = copiar;