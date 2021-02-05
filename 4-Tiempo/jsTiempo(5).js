var miTemporizador ;
var contador=0;

function inicio(){
	alert("function inicio.");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

    alert("Bienvenido a la UTN FRA");
   
}//FIN DE LA FUNCIÓN SegundosEnElAire


// La función fin() es innecesaría, porque se utiliza cuando esta setInterval, no se utiliza cuando usas setTimeout
/* function fin(){
	alert("function fin.");
	clearTimeout(miIntervalo);

}//FIN DE LA FUNCIÓN fin */