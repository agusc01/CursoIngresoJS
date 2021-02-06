function mostrar()
{
	var numeroIngresado;
	var cantidadDivisores;
	cantidadDivisores=0;


	numeroIngresado=prompt("Ingrese un número mayor a 1");
	numeroIngresado=parseInt(numeroIngresado);


	for(var i=1;i<=numeroIngresado;i++)
	{
		if(numeroIngresado%i==0) // es número par
		{
			cantidadDivisores++;
			console.log(i);
			alert(i);
		}
	}

	var mensaje="La cantidad de números divisores es: " + cantidadDivisores;

	alert(mensaje);
	console.log(mensaje);

}//FIN DE LA FUNCIÓN