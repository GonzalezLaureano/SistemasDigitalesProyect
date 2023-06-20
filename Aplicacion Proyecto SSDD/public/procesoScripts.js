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
