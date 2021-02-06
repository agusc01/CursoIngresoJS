function mostrar()
{
	var cantidadDePares;
	var numeroIngresado;
	cantidadDePares=0;


	numeroIngresado=prompt("Ingrese un número mayor a 1");
	numeroIngresado=parseInt(numeroIngresado);
	
	numeroIngresado++;
	for(var i=1;i<numeroIngresado;i++)
	{
		if(i%2==0) // es número par
		{
			cantidadDePares++;
			console.log(i);
			alert(i);
		}
	}

	var mensaje = "La cantidad de números pares es: " + cantidadDePares;

	alert(mensaje);

}//FIN DE LA FUNCIÓN