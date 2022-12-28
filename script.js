function encrypt(text) {
  return btoa(text);
}

function decrypt(text) {
  return atob(text);
}

document.getElementById("botonEncriptar").onclick = function() {
    let entrada = document.getElementById("entrada").value;
    let salida = document.getElementById("salida");
  
    salida.value = encrypt("entrada");
  }
  
  document.getElementById("botonDesencriptar").onclick = function() {
    let entrada = document.getElementById("entrada").value;
    let salida = document.getElementById("salida");
  
    salida.value = decrypt("entrada");
  } 