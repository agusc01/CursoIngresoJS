function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=1;
	acumulador=0;

	while(contador<6)
	{
		numeroIngresado=prompt(contador + "- ingrese un número: ");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador++;
	}

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;
}//FIN DE LA FUNCIÓN