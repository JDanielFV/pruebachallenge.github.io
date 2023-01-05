function encriptar() {
    if (texto = document.querySelector("#textoEntrada").value == "")
        false;
    else {
        var texto = document.querySelector("#textoEntrada").value;
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        resultado.textContent = textoCifrado;
    }
}

function desencriptar() {
    var texto_des = document.querySelector("#textoEntrada").value
    if (texto_des == "")
        false;
    else {
        texto_des = document.querySelector("#textoEntrada").value;
        var textoCifrado = texto_des.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        resultado.textContent = textoCifrado;
    }
}

function copiar() {
    let txtCopiar = document.querySelector('#textosalida').innerHTML;
    navigator.clipboard.writeText(txtCopiar);
}

var resultado = document.getElementById("textosalida");
var boton_encriptar = document.querySelector("#botonEncriptar");
boton_encriptar.onclick = encriptar;
var boton_copiar = document.querySelector("#botonCopiar");
boton_copiar.onclick = copiar;
var boton_desencriptar = document.querySelector("#botonDesencriptar");
boton_desencriptar.onclick = desencriptar;