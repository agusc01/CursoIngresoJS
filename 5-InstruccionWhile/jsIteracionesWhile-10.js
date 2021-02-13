/*

Alumno: Cacciatori, Agustín

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
*/
function mostrar()
{ 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadDeNegativos;
	var cantidadDePositivos;
	var cantidadDeCeros;
	var cantidadDeNumerosPares;
	var promedioNumerosPositivos;
	var promedioNumerosNegativos;
	

	sumaNegativos=0;
	sumaPositivos=0;
	cantidadDeNegativos=0;
	cantidadDePositivos=0;
	cantidadDeCeros=0;
	cantidadDeNumerosPares=0;
	promedioNumerosPositivos=0;
	promedioNumerosNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número: ");
		numeroIngresado=parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error, Ingrese un número: ");
			numeroIngresado=parseInt(numeroIngresado);
		}

		if(numeroIngresado<0) // valores negativos
		{ 
			sumaNegativos=sumaNegativos+numeroIngresado;
			cantidadDeNegativos=cantidadDeNegativos+1;
		} 
		else 
		{ 
			if(numeroIngresado==0) // solo si el numero ingresado es 0 (cero)
			{
				cantidadDeCeros=cantidadDeCeros+1;
			}
			else // valores positivos
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				cantidadDePositivos=cantidadDePositivos+1;
			}
		} 


		if(numeroIngresado%2==0) //si el número es par
		{
			cantidadDeNumerosPares++;
		}

		promedioNumerosPositivos=sumaPositivos/cantidadDePositivos;
		promedioNumerosNegativos=sumaNegativos/cantidadDeNegativos;
		diferencia=sumaPositivos-sumaNegativos;

		respuesta=prompt("Si quiere seguir tipiar 'si'");

	}//fin del while


	console.log("la suma de negativos es :"+sumaNegativos);
	console.log("la suma de positivos es :"+sumaPositivos);
	console.log("la cantidad de positivos es: "+cantidadDePositivos);
	console.log("la cantidad de negativos es: "+cantidadDeNegativos);
	console.log("la cantidad de ceros es: "+cantidadDeCeros);
	console.log("la cantidad de números pares es: "+cantidadDeNumerosPares);
	console.log("El promedio de números positivos es : "+promedioNumerosPositivos);
	console.log("El promedio de números negativos es : "+promedioNumerosNegativos);
	console.log("Diferencia entre positivos y negativos, (positvos-negativos) es : "+diferencia);

	alert("Mirar los resultados en la consola!");

}//FIN DE LA FUNCIÓN