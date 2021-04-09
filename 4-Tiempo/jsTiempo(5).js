/*
Enunciado:
Luego de presiona el botón 'Iniciar', se debe disparar, 3 segundos después, un saludo con el mensaje "Bienvenido a la UTN FRA".
*/

var miTemporizador;

function inicio()
{
	alert("function inicio.");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);
}//fin function inicio

function SegundosEnElAire()
{
    alert("Bienvenido a la UTN FRA");   
}//fin function SegundosEnElAire