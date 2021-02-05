/*

Alumno: Cacciatori, Agustín

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").

*/
function FahrenheitCentigrados () {

  // formula: (°F − 32) × 5/9 = °C
  var celsius;
  var fahrenheit;
  var mensaje;

  fahrenheit = document.getElementById('txtIdTemperatura').value;
  fahrenheit = parseFloat(fahrenheit);
  
  celsius = ( fahrenheit - 32.0 ) * (5.0/9.0);

  mensaje =  fahrenheit + " Fahrenheit son " + celsius + " centígrados";

  alert(mensaje);

}

function CentigradosFahrenheit () {

  // formula: (°C × 9/5) + 32 =  °F
  var celsius;
  var fahrenheit;
  var mensaje;
  
  celsius = document.getElementById('txtIdTemperatura').value;
  celsius = parseFloat(celsius);

  fahrenheit = (celsius * (9.0/5.0)) + 32.0;

  mensaje =  celsius + " centígrados son " + fahrenheit + " Fahrenheit";

  alert(mensaje);
  
}
