var data;
var NuevoElemento = database.ref('/ProyectoSistemasDigitales/Esterilizado'); // Reemplaza 'ruta/a/tu/dato' con la ruta correcta en tu base de datos

// Lee los datos de Firebase
NuevoElemento.on('value', function(snapshot) {
  data = snapshot.val(); // Obtiene el valor del snapshot
  // Actualiza el contenido del elemento en HTML con los datos recuperados
  var NuevoElementoFirebase = document.getElementById('NuevoElementoFirebase');
  NuevoElementoFirebase.innerHTML = 'Id Elemento ingresado: ' + data;
});

function ObtenerDocumentos() {
 // var elementosRef = database.collection("ProyectoSistemasDigitales").doc("Elementos").get();
  var elementosRef = database.ref('/ProyectoSistemasDigitales/Esterilizado')

  //const obtenerTodosDocumentos = await firebase.getDocs(collection(database, "ProyectoSistemasDigitales"));
  elementosRef.on('value', (snapshot) => {
    const docs = snapshot.val();
    console.log(docs)
    for (const key in docs) {
      var tblBody = document.getElementById("tbody1");

      var hilera = document.createElement("tr");

      var celdaId = document.createElement("td");
      var textoId = document.createTextNode(key);
      celdaId.appendChild(textoId);

      var fecha = docs[key].Fecha || "No hay fecha"
      console.log(fecha)
      var celdaFecha = document.createElement("td");
      var textoFecha = document.createTextNode(fecha);
      celdaFecha.appendChild(textoFecha);

      var instrumento = docs[key].Instrumento || "No hay instrumento"
      console.log(instrumento)
      var celdaInstrumento = document.createElement("td");
      var textoInstrumento = document.createTextNode(instrumento);
      celdaInstrumento.appendChild(textoInstrumento);

      var tamaño = docs[key].Tamaño || "No hay tamaño ingresado"
      console.log(tamaño)
      var celdaTamaño = document.createElement("td");
      var textoTamaño = document.createTextNode(tamaño);
      celdaTamaño.appendChild(textoTamaño);

      var peso = docs[key].Peso || "No hay peso ingresado"
      console.log(peso)
      var celdaPeso = document.createElement("td");
      var textoPeso = document.createTextNode(peso);
      celdaPeso.appendChild(textoPeso);

      var celdaCirugias = document.createElement("td");
      var botonCirugias = document.createElement("button");
      botonCirugias.innerHTML = "Ver cirugias";
      botonCirugias.id = key; 
      botonCirugias.className="btnCirugia";
      celdaCirugias.appendChild(botonCirugias);
      botonCirugias.addEventListener("click", function() {
        window.location.href = "cirugias.html"+"#"+key;
      });

      hilera.appendChild(celdaId);
      hilera.appendChild(celdaFecha);
      hilera.appendChild(celdaInstrumento);
      hilera.appendChild(celdaTamaño);
      hilera.appendChild(celdaPeso);
      hilera.appendChild(celdaCirugias);
      tblBody.appendChild(hilera);
    }
    });
}

ObtenerDocumentos();