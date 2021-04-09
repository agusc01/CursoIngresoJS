/*
Enunciado:
Luego de presionar el botón 'Iniciar',se dispará un temporizador de una funcion que haga visible el botón "el oculto" y que tome el tiempo de inicio.
El botón "el oculto" ejecutará la function "ContarMilisegundos" que tome el tiempo de finalización calcule la diferencia y muestre el resultado.
*/


var tiempoInicio;
var tiempoFinal;

function inicio()
{
	document.getElementById("secreto").style.visibility="visible"; 
	tiempoInicio = new Date();
	tiempoInicio = tiempoInicio.getTime();
	alert(tiempoInicio);
}//fin function inicio


function ContarMilisegundos()
{
	tiempoFinal= new Date();
	tiempoFinal = tiempoFinal.getTime();
	resultado = tiempoFinal - tiempoInicio;
	resultado = parseFloat(resultado) / 1000;
	alert("su tiempo fue: " + resultado + "segundos");
}//fin function fin