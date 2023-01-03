var vocales = ["a","e","i","o","u"];
var encriptacion = ["ai","enter","imes","ober","ufat"]
var espacios = [1,4,3,3,3]
var mencriptado = [];
var mdesencriptado = [];
var espacio = "";
var texto = document.querySelector(".palabra");
//const re=/[A-Z|!#$%&/()=?+¡¿~*-_.,;:]/g;
const re = /[^a-z ]/g;

function dividirCadena(cadenaADividir,separador) {
    
    const resultEncriptar = cadenaADividir.value.match(re);
    
    if(resultEncriptar == null){

    
        mencriptado = [];
        var arrayDeCadenas = cadenaADividir.value.split(separador);
    
        for (var i=0; i < arrayDeCadenas.length; i++) {
            for (var j=0; j< vocales.length; j++){
                if(arrayDeCadenas[i] == vocales[j]){
                    mencriptado[i] = encriptacion[j];
                    break;
                }
                else{
                    mencriptado[i] = arrayDeCadenas[i];
                }
            }
        
        
        }
    
        var finalEncriptado = "";
        for (var i=0; i < arrayDeCadenas.length; i++){
            finalEncriptado = finalEncriptado + mencriptado[i];
        }
        if(finalEncriptado != ""){
            document.getElementById("output").innerHTML = finalEncriptado;
            document.getElementById("boton-copiar").style.visibility="visible";
            cadenaADividir.value="";
        }
    }else{
        alert("No puede ingresar mayúsculas y caracteres especiales");  
    }
      
    
}

function leerencriptado(){
    dividirCadena(texto,espacio);
}

function desencriptar(mensaje,separacion){
    mdesencriptado = [];
    const resultDesencriptar = mensaje.value.match(re);
    if (resultDesencriptar == null){

    
        var vectorEncriptado = mensaje.value.split(separacion);
        for (var i=0; i < vectorEncriptado.length; i++){
            for (var j=0; j < vocales.length; j++){
                if(vectorEncriptado[i] == vocales[j]){
                    mdesencriptado[i] = vocales[j];
                    i = i+espacios[j];
                    break;
                }
                else{
                    mdesencriptado[i] = vectorEncriptado[i];
                }
            }
        
        }

        var finalDesencriptado = "";
        for (var i=0; i < vectorEncriptado.length; i++){
            if(mdesencriptado[i]!=undefined){
                finalDesencriptado = finalDesencriptado + mdesencriptado[i];
            
            }
        
        }
        if(finalDesencriptado != ""){
            document.getElementById("output").innerHTML = finalDesencriptado;
            document.getElementById("boton-copiar").style.visibility="visible";
            mensaje.value="";
        }
    }else{
        alert("No puede ingresar mayúsculas y caracteres especiales")
    }    
}

function leerdesencriptado(){
    desencriptar(texto,espacio);
}

function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}
