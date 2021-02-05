function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=1;
	acumulador=0;
	

	while(contador <= 5) {

		var numero = parseInt(prompt(contador + "- ingrese un número: "));
		acumulador = acumulador + numero;
		contador++;

	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN