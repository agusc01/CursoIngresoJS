var miTemporizador ;
var contador=0;
var tiempoInicio;
var tiempoFinal;

function inicio() {
	
	document.getElementById("secreto").style.visibility="visible"; 
	tiempoInicio = new Date();
	tiempoInicio = tiempoInicio.getTime();
	alert(tiempoInicio);
	
}//FIN DE LA FUNCIÓN inicio


function ContarMilisegundos() {
	tiempoFinal= new Date();
	tiempoFinal = tiempoFinal.getTime();
	resultado = tiempoFinal - tiempoInicio;
	resultado = parseFloat(resultado) / 1000;
	alert("su tiempo fue: " + resultado + "segundos");

}//FIN DE LA FUNCIÓN fin