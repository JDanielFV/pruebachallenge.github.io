// Encriptar texto
function encrypt(text) {
    return btoa(text);
  }

  var texto = 
  
  // Desencriptar texto
  function decrypt(text) {
    return atob(text);
  }

  // Obtén el texto a encriptar del elemento <textarea> con id="entrada"
  let text = document.getElementById("entrada").value;

  // Llamar a la función de encriptación con el texto como argumento y asignar el resultado a la propiedad value del elemento <textarea> con id="salida"
  document.getElementById("salida").value = encrypt(text);