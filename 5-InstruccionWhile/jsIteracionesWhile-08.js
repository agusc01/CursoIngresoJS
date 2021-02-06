/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numero;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=='si')
	{
		numero=prompt(contador+"- ingrese un número: ");
		numero=parseInt(numero);

		// números positivos
		if(numero>0)
		{
			sumaPositivos=sumaPositivos+numero;
		}
		else// números negativos
		{
			multiplicacionNegativos=multiplicacionNegativos*numero;
		}

		respuesta=prompt("Si quiere seguir tipiar 'si'");
		contador++;

	}

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN