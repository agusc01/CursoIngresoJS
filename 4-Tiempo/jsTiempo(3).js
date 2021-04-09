/*
Enunciado:
al presionar el botón INICIAR se debe mostrar un mensaje de bienvenida "Bienvenidos a la UTN FRA" cada 2 segundos, y mostrar la cantidad de veces mostrado (contador).
al presionar el botón FINALIZAR se debe detener los mensajes.
*/

var miIntervalo;
var contador;

contador=0;

function inicio()
{
	alert("function inicio.");
	miIntervalo = setInterval(SegundosEnElAire, 2000);
}//fin function inicio

function SegundosEnElAire()
{
	contador=contador+1;
    alert("Bienvenido a la UTN FRA, cantidad ="+contador);
}//fin function SegundosEnElAire

function fin()
{
	alert("function fin.");
	clearInterval(miIntervalo);
}//fin function fin