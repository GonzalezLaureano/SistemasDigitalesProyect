//definimos de a donde extraemos el dato a leer.
var prueba = database.ref('/ProyectoSistemasDigitales/Elementos/prueba viernes/1'); // Reemplaza 'ruta/a/tu/dato' con la ruta correcta en tu base de datos
  // Lee los datos de Firebase
  prueba.on('value', function(snapshot) {
    var data = snapshot.val(); // Obtiene el valor del snapshot
    // Actualiza el contenido del elemento en HTML con los datos recuperados
    var dataContainer = document.getElementById('f1c1');//establecemos a donde vamos a mostrar el dato guardado en firebase
    dataContainer.innerHTML = 'Dato almacenado en Firebase: ' + data;//esto se muestra en el html
  });
