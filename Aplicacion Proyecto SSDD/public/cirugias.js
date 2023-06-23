var url = window.location.href;
var codigo = url.substr(-5);
codigo.toString();
console.log(codigo);


function ObtenerDocumentos2() {
   var elementosRef = database.ref('/ProyectoSistemasDigitales/Cirugias')
 
   elementosRef.on('value', (snapshot) => {
     const docs = snapshot.val();
     console.log(docs)

     for (const key in docs) {

       var iden = docs[key].ID
       var iden = iden.replace(/"/g, '');
       console.log(iden)

      if (iden == codigo) {
       console.log("entro")
       var tblBody = document.getElementById("tbody2");
 
       var hilera = document.createElement("tr");
 
       var descripcion = docs[key].Descripcion || "No hay descripcion"
       console.log(descripcion)
       var celdaDescripcion = document.createElement("td");
       var textoDescripcion = document.createTextNode(descripcion);
       celdaDescripcion.appendChild(textoDescripcion);
 
       var doctor = docs[key].Doctor || "No hay Doctor/a"
       console.log(doctor)
       var celdaDoctor = document.createElement("td");
       var textoDoctor = document.createTextNode(doctor);
       celdaDoctor.appendChild(textoDoctor);
 
       var enfermera = docs[key].Enfermera || "No hay Enfermero/a"
       console.log(enfermera)
       var celdaEnfermera = document.createElement("td");
       var textoEnfermera = document.createTextNode(enfermera);
       celdaEnfermera.appendChild(textoEnfermera);
 
       var fecha = docs[key].Fecha || "No hay Enfermero/a"
       console.log(fecha)
       var celdaFecha = document.createElement("td");
       var textoFecha = document.createTextNode(fecha);
       celdaFecha.appendChild(textoFecha);
 
       hilera.appendChild(celdaDescripcion);
       hilera.appendChild(celdaDoctor);
       hilera.appendChild(celdaEnfermera);
       hilera.appendChild(celdaFecha);       
       tblBody.appendChild(hilera);
      }
     }
   })
 }
 
 ObtenerDocumentos2();