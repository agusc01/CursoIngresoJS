/*
Enunciado:
al presionar el botón INICIAR se debe mostrar un mensaje de bienvenida "Bienvenidos a la UTN FRA" cada 2 segundos, al mostrar el mensaje 5 veces que se detenga AUTOMATICAMENTE.
*/

var miIntervalo;
var contador;

function inicio()
{
	contador=0;
	alert("function inicio.");
	miIntervalo = setInterval(SegundosEnElAire, 2000);
}//fin function inicio

function SegundosEnElAire()
{
	contador=contador +1;
    alert("Bienvenido a la UTN FRA, cantidad ="+contador);
    if(contador == 5)
	{
    	clearInterval(miIntervalo);
    }
}//fin function SegundosEnElAire

function fin()
{
	alert("function fin.");
	clearInterval(miIntervalo);
}//fin function fin