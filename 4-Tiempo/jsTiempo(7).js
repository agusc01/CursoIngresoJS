var miTemporizador ;
var contador=0;
var tiempoInicio;
var tiempoFinal;

function inicio() {

	alert("function inicio.");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

	document.getElementById("secreto").style.visibility="visible"; 

}//FIN DE LA FUNCIÓN SegundosEnElAire


// La función fin() es innecesaría, porque se utiliza cuando esta setInterval, no se utiliza cuando usas setTimeout
/* function fin() {
	tiempoFinal= new Date();
	tiempoFinal=tiempoFinal.getTime();
	alert(tiempoFinal-tiempoInicio);
}//FIN DE LA FUNCIÓN fin */