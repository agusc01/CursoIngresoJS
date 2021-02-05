function mostrar(){

	var numerosDivisores = "";
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
			numerosDivisores = numerosDivisores + i.toString() + " "; 
		}
	}

	var mensaje = "La cantidad de números divisores es: " + cantidadDivisores + "\nLos números divisores son: " + numerosDivisores;

	alert(mensaje);

}//FIN DE LA FUNCIÓN