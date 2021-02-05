var miTemporizador ;
var contador=0;
var tiempoInicio;
var tiempoFinal;
var max = 12000;
var min = 2000;


function inicio() {
	var random = Math.floor(Math.random()*10000 )+2000;
	// var random = Math.round(Math.random() * (max - min) + min);
	random_impresion = parseFloat(random) / 1000;
	alert("function inicio. Tiempo random: " + random_impresion + " segundos");
	miTemporizador = setTimeout(SegundosEnElAire, random);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

	document.getElementById("secreto").style.visibility="visible"; 
 	tiempoInicio = new Date();
 	tiempoInicio = tiempoInicio.getTime();
 	//alert(tiempoInicio);
   
}//FIN DE LA FUNCIÓN SegundosEnElAire

function ContarMilisegundos() {
	tiempoFinal = new Date();
	tiempoFinal = tiempoFinal.getTime();
	resultado = tiempoFinal-tiempoInicio;
	resultado = parseFloat(resultado) / 1000;
	alert("su tiempo fue: " + resultado + "segundos");
}//FIN DE LA FUNCIÓN fin