/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	
	
	txtIdMaximo.value= "";
	txtIdMinimo.value= "";
	
	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si") {
		numeroIngresado = prompt("Ingrese un número");

		if(banderaDelPrimero == "es el primero") {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "no es el primero"
		} else {
			if(numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado;
			} else if (numeroIngresado < numeroMinimo) {
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value = "el máximo número ingresado es " + numeroMaximo;
	txtIdMinimo.value = "el mínimo número ingresado es " + numeroMinimo;
}//FIN DE LA FUNCIÓN