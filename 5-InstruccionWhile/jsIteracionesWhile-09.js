/*

Alumno: Cacciatori, Agustín
9)bis while 09(el menor de los pares y el mayor de los negativos ...solo si hay)

*/
function mostrar()
{	
	//declaración de variables
	var banderaMenorPar;
	var banderaMayorNegativo;
	var numeroIngresado;
	var numeroMenorPar;
	var numeroMayorNegativo;
	var respuesta;
	var mensajeMenorPar;
	var mensajeMayorNegativo;

	//inicialización de variables
	banderaMenorPar=true;
	banderaMayorNegativo=true;
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

		if(numeroIngresado%2==0)//número par
		{
			if(banderaMenorPar==true)
			{
				banderaMenorPar=false;
				numeroMenorPar=numeroIngresado;
			}
			else
			{
				if(numeroIngresado<numeroMenorPar)
				{
					numeroMenorPar=numeroIngresado;
				}
			}
		}

		if(numeroIngresado<0)
		{
			if(banderaMayorNegativo==true)
			{
				banderaMayorNegativo=false;
				numeroMayorNegativo=numeroIngresado;
			}
			else
			{
				if(numeroIngresado>numeroMayorNegativo)
				{
					numeroMayorNegativo=numeroIngresado;
				}
			}
		}

		respuesta=prompt("Si quiere seguir tipiar 'si'");
	}//fin while(respuesta=="si")
	

	if(banderaMenorPar==false)
	{
		mensajeMenorPar="El menor par es "+numeroMenorPar;
	}
	else
	{
		mensajeMenorPar="No hay números pares";
	}
	document.getElementById("txtIdMinimo").value=mensajeMenorPar;
	console.log(mensajeMenorPar);

	if(banderaMayorNegativo==false)
	{
		mensajeMayorNegativo="El mayor de los negativo es "+numeroMayorNegativo;
	}
	else
	{
		mensajeMayorNegativo="No hay números negativos";
	}
	document.getElementById("txtIdMaximo").value=mensajeMayorNegativo;
	console.log(mensajeMayorNegativo);



	
}//FIN DE LA FUNCIÓN