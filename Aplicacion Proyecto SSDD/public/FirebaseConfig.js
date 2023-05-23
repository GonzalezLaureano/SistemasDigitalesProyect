// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3HZcs3UEEeIacnFXC8zYiAak_zVwBNEw",
    authDomain: "sistemasdigitalesproyect.firebaseapp.com",
    projectId: "sistemasdigitalesproyect",
    storageBucket: "sistemasdigitalesproyect.appspot.com",
    messagingSenderId: "932015706452",
    appId: "1:932015706452:web:6933d442f8cb8167aff8c1"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  // Obtiene una referencia a la ubicación de la base de datos que deseas leer
  var database = firebase.database();
  var ref = database.ref('/ProyectoSistemasDigitales/Variables/Cinta1/Peso'); // Reemplaza 'ruta/a/tu/dato' con la ruta correcta en tu base de datos

  // Lee los datos de Firebase
  ref.on('value', function(snapshot) {
    var data = snapshot.val(); // Obtiene el valor del snapshot
    // Actualiza el contenido del elemento en HTML con los datos recuperados
    var dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = 'Dato almacenado en Firebase: ' + data;
  });
