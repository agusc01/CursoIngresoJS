/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar() 
{
	var numeroRandom;
	numeroRandom=Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
	alert(numeroRandom);

}//FIN DE LA FUNCIÓN

