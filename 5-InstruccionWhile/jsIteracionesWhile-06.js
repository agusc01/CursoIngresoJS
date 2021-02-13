/*

Alumno: Cacciatori, Agustín

Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

*/


function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;

	while(contador<5)
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
	}

	promedio=acumulador/contador;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN