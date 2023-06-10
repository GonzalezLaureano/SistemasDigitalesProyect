
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
var PesoCinta1 = database.ref('/ProyectoSistemasDigitales/Variables/Cinta1/Peso'); // Reemplaza 'ruta/a/tu/dato' con la ruta correcta en tu base de datos
  // Lee los datos de Firebase
  PesoCinta1.on('value', function(snapshot) {
    var data = snapshot.val(); // Obtiene el valor del snapshot
    // Actualiza el contenido del elemento en HTML con los datos recuperados
    var dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = 'Dato almacenado en Firebase: ' + data;
  });

