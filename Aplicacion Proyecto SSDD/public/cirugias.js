var key = document.getElementById('botonCirugias')
console.log(key);
function ObtenerDocumentosCirugias() {
     var elementosRef = database.ref('/ProyectoSistemasDigitales/Cirugias/'+key)
   
       elementosRef.on('value', (snapshot) => {
       const docs = snapshot.val();
       console.log(docs)
       for (const key in docs) {
         var tblBody = document.getElementById("tbody2");
   
         var hilera = document.createElement("tr");
   
         var celdaId = document.createElement("td");
         var textoId = document.createTextNode(key);
         celdaId.appendChild(textoId);
   
         var fecha = docs[key].Descripcion || "No hay fecha"
         console.log(fecha)
         var celdaFecha = document.createElement("td");
         var textoFecha = document.createTextNode(fecha);
         celdaFecha.appendChild(textoFecha);
   
         var instrumento = docs[key].Doctor || "No hay instrumento"
         console.log(instrumento)
         var celdaInstrumento = document.createElement("td");
         var textoInstrumento = document.createTextNode(instrumento);
         celdaInstrumento.appendChild(textoInstrumento);
   
         var tamaño = docs[key].Enfermera || "No hay tamaño ingresado"
         console.log(tamaño)
         var celdaTamaño = document.createElement("td");
         var textoTamaño = document.createTextNode(tamaño);
         celdaTamaño.appendChild(textoTamaño);
   
         hilera.appendChild(celdaId);
         hilera.appendChild(celdaFecha);
         hilera.appendChild(celdaInstrumento);
         hilera.appendChild(celdaTamaño);
         tblBody.appendChild(hilera);
       }
       });
    }

 ObtenerDocumentosCirugias()