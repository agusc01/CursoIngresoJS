function mostrar(){

	var bandera = true; // parto de la idea que el número sera primo, soy optimista ;)
	var cantidadDivisores = 0;

	numeroIngresado = parseInt(prompt("Ingrese un número mayor a 1"));

	for(;;){ // bucle infinito
		if(numeroIngresado > 0) {
			break;
		}
		numeroIngresado = parseInt(prompt("Incorrecto, por favor ingresa un número mayor a 1"));
	}

	for(var i=1 ; i <= numeroIngresado ; i++) {
		if(numeroIngresado % i == 0) { // es número par
			cantidadDivisores++;
		}
		// un número primo se puede dividir únicamente por su mismo número o por 1, por lo cual si "cantidadDivisores > 2" el número NO es primo
		if(cantidadDivisores > 2) {
			bandera = false;
			break;
		}
	}

	var mensaje = "";
	if(bandera == true){
		mensaje = "Es primo"
	} else {
		mensaje = "No es primo"
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN