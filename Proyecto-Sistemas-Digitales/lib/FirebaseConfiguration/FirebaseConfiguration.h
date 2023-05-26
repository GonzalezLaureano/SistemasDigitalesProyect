#ifndef __FirebaseConfiguration_H_
#define __FirebaseConfiguration_H_
#include <Arduino.h>
#include <FirebaseESP8266.h>
// Configura las credenciales de tu proyecto de Firebase
const char* firebaseHost1 = "sistemasdigitalesproyect.firebaseapp.com";
const char* firebaseAuth1 = "rJN7Ml5qeMduI8XcgMGPaiE1Hcr2";
// Crea una instancia de FirebaseData para interactuar con Firebase
FirebaseData firebaseData;
void FirebaseInit(){
      // Inicializa la conexión a Firebase
  Firebase.begin(firebaseHost1, firebaseAuth1);
}
void envioDatoFirebase(char* databasePath,float dato){
    // Envía los datos a la base de datos en Firebase
    if (Firebase.set(firebaseData, databasePath,dato)) {
        //Serial.println("Datos enviados correctamente");
    } else {
        Serial.println("Error al enviar datos");
        Serial.println(firebaseData.errorReason());
    }
}
#endif