/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == 'si') {
		var numero = parseInt(prompt(contador + "- ingrese un número: "));

		// números positivos
		if(numero > 0) {
			sumaPositivos = sumaPositivos + numero
		} else { // números negativos
			multiplicacionNegativos = multiplicacionNegativos * numero;
		}

		respuesta = prompt("Si quiere seguir tipiar 'si'");
		contador++;

	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN