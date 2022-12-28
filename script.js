function encrypt(text) {
  return btoa(text);
}

function decrypt(text) {
  return atob(text);
}

document.getElementById("botonEncriptar").onclick = function() {
    let input = document.getElementById(entrada).value;
    let output = document.getElementById(salida);
  
    output.value = encrypt(entrada);
  }
  
  document.getElementById(botonDesencriptar).onclick = function() {
    let input = document.getElementById(entrada).value;
    let output = document.getElementById(salida);
  
    output.value = decrypt(entrada);
  } 