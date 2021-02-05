function mostrar(){

	var numerosPares = "";
	var cantidadDePares = 0;


	numeroIngresado = parseInt(prompt("Ingrese un número mayor a 1"));

	for(;;){ // bucle infinito
		if(numeroIngresado > 0) {
			break;
		}
		numeroIngresado = parseInt(prompt("Incorrecto, por favor ingresa un número mayor a 1"));
	}

	for(var i=1 ; i <= numeroIngresado ; i++) {
		if(i % 2 == 0) { // es número par
			cantidadDePares++;
			numerosPares = numerosPares + i.toString() + " "; 
		}
	}

	var mensaje = "La cantidad de números pares es: " + cantidadDePares + "\nLos números pares son: " + numerosPares;

	alert(mensaje);

}//FIN DE LA FUNCIÓN