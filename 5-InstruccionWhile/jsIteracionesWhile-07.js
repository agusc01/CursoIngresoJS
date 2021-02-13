/*

Alumno: Cacciatori, Agustín

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.

*/
function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	var promedio;
	contador=0;
	acumulador=0;
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

		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("Si quiere seguir tipiar 'si'");
	}

	promedio=acumulador/contador;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN