    function ObtenerDocumentos() {
    // var elementosRef = database.collection("ProyectoSistemasDigitales").doc("Elementos").get();
     var elementosRef = database.ref('/ProyectoSistemasDigitales/Lista de Espera')
   
     //const obtenerTodosDocumentos = await firebase.getDocs(collection(database, "ProyectoSistemasDigitales"));
     elementosRef.on('value', (snapshot) => {
       const docs = snapshot.val();
       console.log(docs)
       for (const key in docs) {
         var tblBody = document.getElementById("tbodyLista");
   
         var hilera = document.createElement("tr");
   
         var celdaId = document.createElement("td");
         var textoId = document.createTextNode(key);
         celdaId.appendChild(textoId);

         var instrumento = docs[key].Instrumento || "No hay instrumento"
         console.log(instrumento)
         var celdaInstrumento = document.createElement("td");
         var textoInstrumento = document.createTextNode(instrumento);
         celdaInstrumento.appendChild(textoInstrumento);
   
         hilera.appendChild(celdaId);
         hilera.appendChild(celdaInstrumento);
         tblBody.appendChild(hilera);
       }
       });
   }
   
   ObtenerDocumentos();

   function ObtenerDocumentos2() {
    // var elementosRef = database.collection("ProyectoSistemasDigitales").doc("Elementos").get();
     var elementosRef = database.ref('/ProyectoSistemasDigitales/En Proceso')
   
     //const obtenerTodosDocumentos = await firebase.getDocs(collection(database, "ProyectoSistemasDigitales"));
     elementosRef.on('value', (snapshot) => {
       const docs = snapshot.val();
       console.log(docs)
       for (const key in docs) {
         borrarContenido();

         var textoId = document.createTextNode(key);

         var instrumento = docs[key].Instrumento || "No hay instrumento"
         console.log(instrumento)
   
         var textoInstrumento = document.createTextNode(instrumento);

         var tiempo = docs[key].Tiempo || "No hay Tiempo"
         console.log(instrumento)

         var textoTiempo = document.createTextNode(tiempo);

         columna1.appendChild(textoId);
         columna2.appendChild(textoInstrumento);
         columna3.appendChild(textoTiempo);
         //tblBody.appendChild(hilera);
         
       }
       });
   }
   
   function borrarContenido() {
    var miDiv = document.getElementById("columna1");
    while (miDiv.firstChild) {
        miDiv.removeChild(miDiv.firstChild);
    }
    var miDiv = document.getElementById("columna2");
    while (miDiv.firstChild) {
        miDiv.removeChild(miDiv.firstChild);
    }
    var miDiv = document.getElementById("columna3");
    while (miDiv.firstChild) {
        miDiv.removeChild(miDiv.firstChild);
    }
  }

   ObtenerDocumentos2();


   function ObtenerDocumentos3() {
    // var elementosRef = database.collection("ProyectoSistemasDigitales").doc("Elementos").get();
     var elementosRef = database.ref('/ProyectoSistemasDigitales/Esterilizado')
   
     //const obtenerTodosDocumentos = await firebase.getDocs(collection(database, "ProyectoSistemasDigitales"));
     elementosRef.on('value', (snapshot) => {
       const docs = snapshot.val();
       console.log(docs)
       for (const key in docs) {
         var tblBody = document.getElementById("tbodyEsterilizado");
   
         var hilera = document.createElement("tr");
   
         var celdaId = document.createElement("td");
         var textoId = document.createTextNode(key);
         celdaId.appendChild(textoId);

         var instrumento = docs[key].Instrumento || "No hay instrumento"
         console.log(instrumento)
         var celdaInstrumento = document.createElement("td");
         var textoInstrumento = document.createTextNode(instrumento);
         celdaInstrumento.appendChild(textoInstrumento);

         hilera.appendChild(celdaId);
         hilera.appendChild(celdaInstrumento);
         tblBody.appendChild(hilera);
         
       }
       });
   }
   
   ObtenerDocumentos3();

 /*
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
*/