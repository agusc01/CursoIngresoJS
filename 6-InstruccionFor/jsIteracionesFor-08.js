/*
Alumno: Cacciatori, Agustín
For 10 A-ingrese nombre , sexo , edad (validar que si es mujer debe ser adolescente y si el hombre debe ser niño), altura (validar), temperatura corporal

For 10 B- necesitamos saber: el nombre y el sexo de la persona mas alta , --de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito , ... solo si los hay

*/

function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var altura;
	var temperatura;
	var respuestaDeCorte;
	//punto B
	var banderaMasAlto;
	var nombreMasAlto;
	var sexoDelMasAlto;
	var personaMasAlta;
	var nombreMujerMasJoven;
	var banderaMujerMasJoven;
	var edadMujerMasJoven;
	var nombreHombreMasBajo;
	var banderaHombreMasBajo;
	var alturaHombreMasBajo;
	var mensaje;

	banderaMasAlto=true;
	banderaMujerMasJoven=true;
	banderaHombreMasBajo=true;


	for(;;)
	{
		
		nombre=prompt("Ingrese el nombre: ");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("Error, ingrese el nombre: ");
		}
		
		altura=prompt("Ingrese la altura: ");
		altura=parseFloat(altura);
		while(isNaN(altura)==true || altura<0.5 || altura>3)
		{
			altura=prompt("Error, Ingrese la altura: ");
			altura=parseFloat(altura);
		}

		temperatura=prompt("Ingrese la temperatura: ");
		temperatura=parseFloat(temperatura);
		while(isNaN(temperatura)==true || temperatura<34 || temperatura>40)
		{
			temperatura=prompt("Error, Ingrese la temperatura: ");
			temperatura=parseFloat(temperatura);
		}


		sexo=prompt("Ingrese el sexo: ('femenino' o 'masculino') ");
		while(isNaN(sexo)==false || (sexo!='femenino' && sexo!='masculino'))
		{
			sexo=prompt("Error, ingrese el sexo: ");
		}
		
		edad=prompt("Ingrese la edad: ");
		edad=parseInt(edad);
		if(sexo=='femenino')
		{
			while(isNaN(edad)==true || (edad<12 || edad>18))
			{
	
				edad=prompt("Error, ingrese la edad: ");
				edad=parseInt(edad);
			}
			if(banderaMujerMasJoven==true || edad<edadMujerMasJoven)
			{
				banderaMujerMasJoven=false;
				nombreMujerMasJoven=nombre;
				edadMujerMasJoven=edad;
			}
		}
		else//sexo=='masculino'
		{
			while(isNaN(edad)==true || edad>13)
			{
				edad=prompt("Error, ingrese la edad: ");
				edad=parseInt(edad);
			}
			if(banderaHombreMasBajo==true || altura<alturaHombreMasBajo)
			{
				banderaHombreMasBajo=false;
				nombreHombreMasBajo=nombre;
				alturaHombreMasBajo=altura;
			}

		}//fin if(sexo=='f')
	

		if(banderaMasAlto==true || altura>personaMasAlta)
		{
			banderaMasAlto=false;
			nombreMasAlto=nombre;
			sexoDelMasAlto=sexo;
			personaMasAlta=altura;
		}


		respuestaDeCorte=prompt("Si quiere seguir ingresar 'si' ");
		if(respuestaDeCorte!='si')
		{
			break;
		}

	}//fin for(;respuestaDeCorte='si';)

	/*For 10 B- necesitamos saber: el nombre y el sexo de la persona mas alta , --de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito , ... solo si los hay*/

	mensaje="La persona más alta se llama: "+nombre+", y su sexo es "+sexo+", mide "+personaMasAlta+" metros";
	alert(mensaje);

	if(banderaMujerMasJoven==false)
	{
		mensaje="La mujer más joven tiene "+edadMujerMasJoven+" años"+" y su nombre es "+nombreMujerMasJoven;
	}
	else
	{
		mensaje="No se ingresaron mujeres";
	}
	alert(mensaje);

	if(banderaHombreMasBajo==false)
	{
		mensaje="El hombre más bajo mide "+alturaHombreMasBajo+" metros y su nombre es "+nombreHombreMasBajo;
	}
	else
	{
		mensaje="No se ingresaron hombres";
	}
	alert(mensaje);

	/*
	TEST
	agustin
	2.5 altura
	35 temperatura
	masculino
	10 edad

	florencia
	2.4 altura
	40 temperatura
	femenino
	15 edad

	mayra
	2.1 altura
	34 temperatura
	femenino
	17 edad

	martin
	2.7
	38
	masculino
	8

	La persona más alta se llama: martin, y su sexo es masculino, mide 2.7 metros
	
	La mujer más joven tiene 15 años y su nombre es florencia

	El hombre más bajo mide 2.5 metros y su nombre es agustin

	*/


}//FIN DE LA FUNCIÓN
