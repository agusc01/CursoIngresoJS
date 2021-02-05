/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar(){

	// borro el contenido del input
	txtIdNumero.value = "";

	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	while(numeroIngresado < 0 || numeroIngresado > 9) {
		numeroIngresado = prompt("Número fuera de rango, por favor ingrese un valor entre 0 a 9")
	};

	// coloco el valor ingresado YA validado en el input
	txtIdNumero.value = numeroIngresado;

	
}//FIN DE LA FUNCIÓN