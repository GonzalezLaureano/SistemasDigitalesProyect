var data;
var NuevoElemento = database.ref('/ProyectoSistemasDigitales/Elementos/Nuevo Elemento'); // Reemplaza 'ruta/a/tu/dato' con la ruta correcta en tu base de datos
// Lee los datos de Firebase
NuevoElemento.on('value', function(snapshot) {
  data = snapshot.val(); // Obtiene el valor del snapshot
  // Actualiza el contenido del elemento en HTML con los datos recuperados
  var NuevoElementoFirebase = document.getElementById('NuevoElementoFirebase');
  NuevoElementoFirebase.innerHTML = 'Id Elemento ingresado: ' + data;
});
function generarQR() {
    var texto = data;
    var divCodigoQR = document.getElementById("codigoQR");
    // Limpiar el contenido del div
    divCodigoQR.innerHTML = "";
    // Generar el código QR
    var qrcode = new QRCode(divCodigoQR, {
      text: texto,
      width: 128,
      height: 128
    });
}
