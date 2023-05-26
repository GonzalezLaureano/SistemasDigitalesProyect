
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
  document.addEventListener('DOMContentLoaded', function() {
    var btnConfiguracion = document.getElementById('btnConfiguracion');
    btnConfiguracion.addEventListener('click', function() {
    // Redirige a otra página HTML
    window.location.href = 'configuration.html';
    });
});
