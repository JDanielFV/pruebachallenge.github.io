const btnEncriptar = document.querySelector("botonEncriptar");
const btnDesEncriptar = document.querySelector("botonDesencriptar");
const btnCopiar = document.querySelector("botonCopiar")



function encriptar() {
    var texto = document.getElementById("textoEntrada").value.toLowerCase();
    if (texto == 0) {
        document.getElementById("img").style.display = "show";
        document.getElementById("img").style.display = "inherit";
        document.getElementById("resNinguna").style.display = "show";
        document.getElementById("resNinguna").style.display = "inherit";
        document.getElementById("textAreaRes").innerHTML = "";
        document.getElementById("copiar").style.visibility = "hidden";
    }
    else {
        var textcifrado = texto.replace(/e/img, "enter");
        var textcifrado = textcifrado.replace(/o/img, "ober");
        var textcifrado = textcifrado.replace(/i/img, "imes");
        var textcifrado = textcifrado.replace(/a/img, "ai");
        var textcifrado = textcifrado.replace(/u/img, "ufat");

        document.getElementById("img").style.display = "none";
        document.getElementById("resNinguna").style.display = "none";
        document.getElementById("textAreaRes").innerHTML = textcifrado;
        document.getElementById("copiar").style.visibility = "visible";
    }

}
function desencriptar() {
    var texto = document.getElementById("textoEntrada").value.toLowerCase();
    if (texto == 0) {
        document.getElementById("img").style.display = "show";
        document.getElementById("img").style.display = "inherit";
        document.getElementById("resNinguna").style.display = "show";
        document.getElementById("resNinguna").style.display = "inherit";
        document.getElementById("textAreaRes").innerHTML = "";
        document.getElementById("copiar").style.visibility = "hidden";
    }
    else {

        var textcifrado = texto.replace(/enter/img, "e");
        var textcifrado = textcifrado.replace(/ober/img, "o");
        var textcifrado = textcifrado.replace(/imes/img, "i");
        var textcifrado = textcifrado.replace(/ai/img, "a");
        var textcifrado = textcifrado.replace(/ufat/img, "u");

        document.getElementById("img").style.display = "none";
        document.getElementById("resNinguna").style.display = "none";
        document.getElementById("textAreaRes").innerHTML = textcifrado;
        document.getElementById("copiar").style.visibility = "visible";
    }
}

function copiar() {
    var texto = document.getElementById("textoSalida");
    navigator.clipboard.writeText(texto.innerHTML)
}