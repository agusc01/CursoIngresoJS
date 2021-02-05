function mostrar() {
	if(txtIdEdad.value < 0) {
		alert("No podes tener una edad negativa, volve a ingresar la edad correctamente por favor");
		txtIdEdad.value = "";
	} else if(txtIdEdad.value >= 123) {
		alert("Sos un record mundial, la persona más grande murio con 122 años y vos tenes " + txtIdEdad.value)
		txtIdEdad.value = "";
	}	else {
		if(txtIdEdad.value > 18) {
			alert("Eres mayor de edad");
		} else if(txtIdEdad.value >= 13 || txtIdEdad.value <=17) {
			alert("Eres un adolescente");
		} else {
			alert("Eres un niño")
		}
	}
}//FIN DE LA FUNCIÓN