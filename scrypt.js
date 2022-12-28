document.getElementById("botonEncriptar").onclick = function() {
    let entrada = document.getElementById("textoEntrada").value;
    let salida = document.getElementById("textoSalida");
  
    salida.value = encrypt("entrada");
  }
  
  document.getElementById("botonDesencriptar").onclick = function() {
    let entrada = document.getElementById("textoEntrada").value;
    let salida = document.getElementById("textoSalida");
  
    salida.value = decrypt("entrada");
  }
  
  function encrypt(text) {
    return btoa(text);
  }
  
  function decrypt(text) {
    return atob(text);
  }
  