/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numero;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=='si')
	{
		numero=prompt(contador+"- ingrese un número: ");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		respuesta=prompt("Si quiere seguir tipiar 'si'");
		contador++;
	}

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN