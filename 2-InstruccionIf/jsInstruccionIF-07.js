function mostrar() {
	var select = document.getElementById("estadoCivil");
	var edad = txtIdEdad.value;

	if((edad > 0 && edad < 18) && select.value != "Soltero") {
		alert("Es muy pequeño para NO ser soltero");
	}
}//FIN DE LA FUNCIÓN