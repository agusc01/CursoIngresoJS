/*
Alumno: Cacciatori, Agustín
7)
Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
*/

function mostrar()
{
	var numeroIngresado;
	var cantidadDivisores;
	var contador;

	cantidadDivisores=0;

	numeroIngresado=prompt("Ingrese un número mayor a 1");
	numeroIngresado=parseInt(numeroIngresado);
	while(isNaN(numeroIngresado)==true || numeroIngresado<1)
	{
		numeroIngresado=prompt("Error, ingrese un número mayor a 1");
		numeroIngresado=parseInt(numeroIngresado);
	}


	for(contador=1;contador<=numeroIngresado;contador++)
	{
		if(numeroIngresado%contador==0) 
		{
			cantidadDivisores++;
			console.log(contador);
			// alert(contador);
		}
	}

	var mensaje="La cantidad de números divisores es: " + cantidadDivisores;

	alert(mensaje);
	console.log(mensaje);

}//FIN DE LA FUNCIÓN