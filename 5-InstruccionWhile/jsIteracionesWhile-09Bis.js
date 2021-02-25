/*

Alumno: Cacciatori, Agustín
9)
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.

*/
function mostrar()
{	
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	banderaDelPrimero=true;
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error, Ingrese un número:" );
			numeroIngresado=parseInt(numeroIngresado);
		}

		if(banderaDelPrimero==true)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero=false;
		} 
		else 
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			if (numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		}
		respuesta=prompt("Si quiere seguir tipiar 'si'");
	}
	
	document.getElementById("txtIdMaximo").value="el máximo número ingresado es " + numeroMaximo;
	document.getElementById("txtIdMinimo").value="el mínimo número ingresado es " + numeroMinimo;
}//FIN DE LA FUNCIÓN