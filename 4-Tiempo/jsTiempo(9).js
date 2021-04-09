/*
Enunciado:
en el evento onLoad del 'BODY' invocar a la function Inicio(), en esta funcion se creará un numero random entre 2000 y 12000 (para los milisegundos) y con este random disparamos un setTimeout para la funtion 'SegundosEnElAire'.Esta debe mostrar el botón 'El oculto' y comenzar a tomar el tiempo. Por último, el botón 'El oculto' disparará la function 'ContarMilisegundos' que mostrará el tiempo transcurrido.
*/

var miTemporizador;
var tiempoInicio;
var tiempoFinal;
var max;
var min;

max=12000;
min=2000;


function inicio()
{
	var random = Math.round(Math.random() * (max - min) + min);
	random_impresion = parseFloat(random) / 1000;
	alert("function inicio. Tiempo random: " + random_impresion + " segundos");
	miTemporizador = setTimeout(SegundosEnElAire, random);
	
}//fin function inicio

function SegundosEnElAire()
{
	document.getElementById("secreto").style.visibility="visible"; 
 	tiempoInicio = new Date();
 	tiempoInicio = tiempoInicio.getTime();
   
}//fin function SegundosEnElAire

function ContarMilisegundos()
{
	tiempoFinal = new Date();
	tiempoFinal = tiempoFinal.getTime();
	resultado = tiempoFinal-tiempoInicio;
	resultado = parseFloat(resultado) / 1000;
	alert("su tiempo fue: " + resultado + "segundos");
}//fin function fin