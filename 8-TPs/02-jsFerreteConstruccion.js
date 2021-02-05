/*

Alumno: Cacciatori, Agustín

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas del terreno rectangular

*/

function Rectangulo () {

  var largo;
  var ancho;
  var resultado;
  var mensaje;

  largo = document.getElementById('txtIdLargo').value;
  largo = parseInt(largo);

  ancho = document.getElementById('txtIdAncho').value;
  ancho = parseInt(ancho);

  resultado = (largo * 2) + (ancho * 2);

  resultado = resultado * 3; // 3 vueltas 
  
  mensaje = "El alambre que se necesita es " + resultado;

  alert(mensaje);

}

function Circulo () {
  
  var radio;
  var resultado;
  var mensaje;

  radio = document.getElementById('txtIdRadio').value;
  radio = parseFloat(radio);

  resultado = 2.0 * 3.14 * radio;

  resultado = resultado * 3.0; // 3 vueltas 

  mensaje = "El alambre que se necesita es " + resultado;

  alert(mensaje);

}

function Materiales () {

  var largo;
  var ancho;
  var perimetro;
  var mensaje;
  var cemento;
  var cal;

  largo = document.getElementById('txtIdLargo').value;
  largo = parseInt(largo);

  ancho = document.getElementById('txtIdAncho').value;
  ancho = parseInt(ancho);

  perimetro = (largo * 2) + (ancho * 2);

  cal = 3 * perimetro;

  cemento = 2 * perimetro;

  mensaje = "Se necesita " + cal + " bolsas de cal y " + cemento + " de cemento";


  alert(mensaje);
  
	
}