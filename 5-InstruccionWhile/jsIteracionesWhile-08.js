/*

Alumno: Cacciatori, Agustín
8)
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.

*/
/*
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	var banderaNegativo=true;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=='si')
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un número: #"+contador);
		numeroIngresado=parseInt(numeroIngresado);

		
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error, Ingrese un número: #"+contador);
			numeroIngresado=parseInt(numeroIngresado);
		}


		if(numeroIngresado>0)// números positivos
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		else
		{
			if(numeroIngresado<0)// números negativos
			{
				banderaNegativo=false;
				multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
			}
		}

		respuesta=prompt("Si quiere seguir tipiar 'si'");
		

	}

	document.getElementById("txtIdSuma").value=sumaPositivos;

	if(banderaNegativo==true)
	{
		multiplicacionNegativos=0;
	}
	// else{
	// 	multiplicacionNegativos=multiplicacionNegativos;
	// }

	document.getElementById("txtIdProducto").value=multiplicacionNegativos;


}//FIN DE LA FUNCIÓN

*/


/*DAUD MANZO JUAN PABLO
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var numeroPositivo;
	var numeroNegativo;
	var acumulador;
	var multiplicador;
	var continuar;


	continuar = "s";
	acumulador = 0;
	multiplicador = 1;

	while(continuar == "s")
	{
		numeroIngresado = prompt("Ingrese Numero por favor");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("Error , solo se aceptan numeros");
		}

		if(numeroIngresado > 0)
		{
			// numeroPositivo = numeroIngresado;
			acumulador = acumulador + numeroIngresado;// Esto lo puso agus
		}
		else
		{
			if(numeroIngresado < 0)
			{
				// numeroNegativo = numeroIngresado;
				multiplicador = multiplicador * numeroIngresado;// Esto lo puso agus
			}
		}

		// acumulador = acumulador + numeroPositivo;

		// multiplicador = multiplicador * numeroNegativo;

		continuar = prompt("Ingrese s si desea continuar");
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdProducto").value = multiplicador;


}//FIN DE LA FUNCIÓN
