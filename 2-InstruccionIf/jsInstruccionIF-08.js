function mostrar() {
	var select = document.getElementById("estadoCivil");
	var edad = txtIdEdad.value;
	if((edad > 0 && edad < 18) && select.value != "Soltero") {
		
	} else if(select.value == "Soltero" && edad >= 18 ) {
		alert("Es soltero y no es menor")
	}
}//FIN DE LA FUNCIÓN