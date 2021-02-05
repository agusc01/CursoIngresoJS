function mostrar() {

	var edad;

	edad = document.getElementById('txtIdEdad').value;

	if((edad < 13 && edad > 0) || edad > 17 ) {
		alert("No sos un adolescente");
	}


}//FIN DE LA FUNCIÓN