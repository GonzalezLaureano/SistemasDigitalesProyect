var data;
var NuevoElemento = database.ref('/ProyectoSistemasDigitales/Elementos/GenerarQR/ID'); // Reemplaza 'ruta/a/tu/dato' con la ruta correcta en tu base de datos

// Lee los datos de Firebase
NuevoElemento.on('value', function(snapshot) {
  data = snapshot.val(); // Obtiene el valor del snapshot
  // Actualiza el contenido del elemento en HTML con los datos recuperados
 // var NuevoElemento = document.getElementById('NuevoElemento');
//  NuevoElemento.innerHTML = 'ID ultimo elemento ingresado: ' + data;
});

  function crearQR(){
    var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: data,
    width: 128,
    height: 128,
  });
  }

/*
function generateQR() {
  const qrDiv = document.getElementById("codigoQR");
  const textInput = document.getElementById("text-input").value;

  // Crear un objeto QRCode con el texto ingresado
  const qrcode = new QRCode(qrDiv, {
      text: textInput,
      width: 256,
      height: 256,
  });

  // Limpiar el contenido anterior del div antes de generar el nuevo código QR
  qrDiv.innerHTML = "";

  // Generar el código QR en el div
  qrcode.makeCode(textInput);
}
*/