/*
Enunciado:
Luego de presiona el botón 'Iniciar', se ocultara el botón "el oculto". Después de 3(tres) segundo será visible nuevamente.
*/

var miTemporizador;

function inicio()
{
	document.getElementById("secreto").style.visibility="hidden";
	alert("function inicio.");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);
	
}//fin function inicio

function SegundosEnElAire()
{
	document.getElementById("secreto").style.visibility="visible"; 
    alert("Bienvenido a la UTN FRA");
}//fin function SegundosEnElAire
