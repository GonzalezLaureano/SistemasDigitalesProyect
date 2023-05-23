var inputContrasena = document.getElementById("inputContrasena");
inputContrasena.addEventListener("input", habilitarBoton);
function habilitarBoton() {
    var contrasena = inputContrasena.value;
  
    if (contrasena === "123456789") {
      document.getElementById("btnConfiguracion").disabled = false;
    } else {
      document.getElementById("btnConfiguracion").disabled = true;
    }
  }
  
