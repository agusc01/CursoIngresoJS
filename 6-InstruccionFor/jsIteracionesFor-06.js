/*6)
Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	var cantidadDePares;
	var numeroIngresado;
	var contador;
	var mensaje;


	cantidadDePares=0;

	numeroIngresado=prompt("Ingrese un número mayor a 1");
	numeroIngresado=parseInt(numeroIngresado);
	while(isNaN(numeroIngresado)==true || numeroIngresado<1)
	{
		numeroIngresado=prompt("Error, ingrese un número mayor a 1");
		numeroIngresado=parseInt(numeroIngresado);
	}

	for(contador=1;contador<numeroIngresado;contador++)
	{
		
		/*
		if(contador%2==0) // es número par
		{
			cantidadDePares++;
			console.log(contador);
		} */
		if(contador%2==1) //en busca de números impares
		{
			continue;
		}

		cantidadDePares++;
		console.log(contador);
	}

	mensaje="La cantidad de números pares es: " + cantidadDePares;

	alert(mensaje);

}//FIN DE LA FUNCIÓN