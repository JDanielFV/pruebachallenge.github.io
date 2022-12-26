// Asignar controladores de eventos a los botones
document.getElementById("botonEncriptar").onclick = function() {
    // Obtener el texto de entrada y la salida
    let entrada = document.getElementById("textoEntrada").value;
    let salida = document.getElementById("textoSalida");
  
    // Llamar a la función de encriptación con el texto de entrada como argumento y asignar el resultado a la propiedad value del elemento de salida
    salida.value = encrypt(entrada);
  }
  
  document.getElementById("botonDesencriptar").onclick = function() {
    // Obtener el texto de entrada y la salida
    let entrada = document.getElementById("textoEntrada").value;
    let salida = document.getElementById("textoSalida");
  
    // Llamar a la función de desencriptación con el texto de entrada como argumento y asignar el resultado a la propiedad value del elemento de salida
    salida.value = decrypt(entrada);
  }
  
  // Función de encriptación
  function encrypt(text) {
    return btoa(text);
  }
  
  // Función de desencriptación
  function decrypt(text) {
    return atob(text);
  }
  