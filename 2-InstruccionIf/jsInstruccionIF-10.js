var max = 10;
var min = 0;

function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	var resultado_examen = Math.round(Math.random() * (max - min) + min);
	resultado_examen = parseInt(resultado_examen);
	if (resultado_examen >=9){
		alert("EXCELENTE: "+resultado_examen);
	} else if (resultado_examen >=4) {
		alert("APROBÓ: "+resultado_examen);
	} else {
		alert("Vamos, la proxima se puede: "+resultado_examen);
	}

}//FIN DE LA FUNCIÓN