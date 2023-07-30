//----------------------------------------------------------------
var RefNuevoElemento = database.ref('/ProyectoSistemasDigitales/Elementos/Nuevo Elemento');
    RefNuevoElemento.on('value', function(snapshot) {
    var IDdelNuevoElemento = snapshot.val();                             //obtenemos La id del nuevo elemento tipo string con ""
    var SubStringIDdelNuevoELmento=IDdelNuevoElemento.substring(1, 6);   //obtenemos La id del nuevo elemento tipo string sin ""
    var ElementoEnEspera = database.ref("/ProyectoSistemasDigitales/Lista de Espera/"+SubStringIDdelNuevoELmento+"/Instrumento");
    ElementoEnEspera.on('value', function(snapshot) {
    tipodeElemento = snapshot.val();            //obtenemos el tipo de elemento que es, ejemplo: bisturi , pinza, etc.
    var dataContainer = document.getElementById('f1c1');//establecemos la celda donde vamos a mostrar el dato guardado en firebase
    dataContainer.innerHTML = "ID: "+SubStringIDdelNuevoELmento+", Instrumento: "+ tipodeElemento;
  });
  });
  //----------------------------------------------------------------
  var RefElementoHorno = database.ref('/ProyectoSistemasDigitales/Elementos/Elemento En Horno');
    RefElementoHorno.on('value', function(snapshot) {
    var IdElementoHorno = snapshot.val();               //obtenemos La id del elemento en horno tipo string
    var ElementoEnHorno = database.ref("/ProyectoSistemasDigitales/En Proceso/"+IdElementoHorno+"/Instrumento");
    ElementoEnHorno.on('value', function(snapshot) {
    tipodeElemento = snapshot.val();            //obtenemos el tipo de elemento que es, ejemplo: bisturi , pinza, etc.
    var dataContainer = document.getElementById('f1c2');//establecemos la celda donde vamos a mostrar el dato guardado en firebase
    dataContainer.innerHTML = "ID: "+IdElementoHorno+", Instrumento: "+ tipodeElemento;
  });
  });
  //----------------------------------------------------------------
  var RefElementoEsterilizado = database.ref('/ProyectoSistemasDigitales/Elementos/Elemento Esterilizado Nuevo');
  RefElementoEsterilizado.on('value', function(snapshot) {
    var IdElementoEsterilizado = snapshot.val();               //obtenemos La id del elemento en horno tipo string
    var ElementoEsterilizado = database.ref("/ProyectoSistemasDigitales/Esterilizado/"+IdElementoEsterilizado+"/Instrumento");
    ElementoEsterilizado.on('value', function(snapshot) {
    tipodeElemento = snapshot.val();            //obtenemos el tipo de elemento que es, ejemplo: bisturi , pinza, etc.
    var dataContainer = document.getElementById('f1c3');//establecemos la celda donde vamos a mostrar el dato guardado en firebase
    dataContainer.innerHTML = "ID: "+IdElementoEsterilizado+", Instrumento: "+ tipodeElemento;
  });
  });

  
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
         var tblBody = document.getElementById("tbodyProceso");
   
         var hilera = document.createElement("tr");
   
         var celdaId = document.createElement("td");
         var textoId = document.createTextNode(key);
         celdaId.appendChild(textoId);

         var instrumento = docs[key].Instrumento || "No hay instrumento"
         console.log(instrumento)
         var celdaInstrumento = document.createElement("td");
         var textoInstrumento = document.createTextNode(instrumento);
         celdaInstrumento.appendChild(textoInstrumento);

         var tiempo = docs[key].Tiempo || "No hay Tiempo"
         console.log(instrumento)
         var celdaTiempo = document.createElement("td");
         var textoTiempo = document.createTextNode(tiempo);
         celdaTiempo.appendChild(textoTiempo);

         hilera.appendChild(celdaId);
         hilera.appendChild(celdaInstrumento);
         hilera.appendChild(celdaTiempo);
         tblBody.appendChild(hilera);
         
       }
       });
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