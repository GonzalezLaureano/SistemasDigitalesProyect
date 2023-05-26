#include <Arduino.h>
#include <WifiEsp8266.h>
#include <FirebaseConfiguration.h>
float pesoCinta1=34.67;
char ubicacionPesoCinta1[]="/ProyectoSistemasDigitales/Variables/Cinta1/Peso";
void setup() {
  WifiConnect();
  FirebaseInit();
}

void loop() {
  envioDatoFirebase(ubicacionPesoCinta1,pesoCinta1);
  delay(2000);
  yield();
  // put your main code here, to run repeatedly:
}