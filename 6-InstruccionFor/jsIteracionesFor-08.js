function mostrar()
{

	var bandera=true; // parto de la idea que el número sera primo, soy optimista ;)
	var cantidadDivisores=0;

	numeroIngresado=prompt("Ingrese un número mayor a 1");
	numeroIngresado=parseInt(numeroIngresado);

	for(var i=1;i<=numeroIngresado;i++)
	{
		if(numeroIngresado%i==0) // es número par
		{
			cantidadDivisores++;
		}
		// un número primo se puede dividir únicamente por su mismo número o por 1, por lo cual si "cantidadDivisores > 2" el número NO es primo
		if(cantidadDivisores>2)
		{
			bandera=false;
			break;
		}
	}


	if(bandera)
	{
		alert("Es primo");
	}
	else 
	{
		alert("No es primo");
	}


}//FIN DE LA FUNCIÓN