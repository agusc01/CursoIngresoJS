/*
Enunciado:
Luego de presiona el botón 'Iniciar',se dispará un temporizador de una funcion que haga visible el botón "el oculto".
*/

var miTemporizador;

function inicio()
{
	alert("function inicio.");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);
}//fin function inicio

function SegundosEnElAire()
{
	document.getElementById("secreto").style.visibility="visible"; 
}//fin function SegundosEnElAire