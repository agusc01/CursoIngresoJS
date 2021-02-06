/*
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
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadDeNegativos=0;
	var cantidadDePositivos=0;
	var cantidadDeCeros=0;
	var cantidadDeNumerosPares=0;
	var promedioNumerosPositivos=0;
	var promedioNumerosNegativos=0;
	

	respuesta="si";

	while(respuesta=="si")
	{

		numeroIngresado=prompt("Ingrese un número: ");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<0) // valores negativos
		{ 
			sumaNegativos=sumaNegativos+numeroIngresado;
			cantidadDeNegativos++;
		} 
		else 
		{ 
			if(numeroIngresado==0) // solo si el numero ingresado es 0 (cero)
			{
				cantidadDeCeros++;
			}
			else // valores positivos
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				cantidadDePositivos++;
			}
		} 


		if(numeroIngresado%2==0) //si el número es par
		{
			cantidadDeNumerosPares++;
		}

		promedioNumerosPositivos=sumaPositivos/cantidadDePositivos;
		promedioNumerosNegativos=sumaNegativos/cantidadDeNegativos;
		diferencia=sumaPositivos-sumaNegativos;

		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos+'<br>');
	document.write("la suma de positivos es :"+sumaPositivos+'<br>');
	document.write("la cantidad de positivos es: "+cantidadDePositivos+'<br>');
	document.write("la cantidad de negativos es: "+cantidadDeNegativos+'<br>');
	document.write("la cantidad de ceros es: "+cantidadDeCeros+'<br>');
	document.write("la cantidad de números pares es: "+cantidadDeNumerosPares+'<br>');
	document.write("El promedio de números positivos es : "+promedioNumerosPositivos+'<br>');
	document.write("El promedio de números negativos es : "+promedioNumerosNegativos+'<br>');
	document.write("Diferencia entre positivos y negativos, (positvos-negativos) es : "+diferencia+'<br>');

}//FIN DE LA FUNCIÓN