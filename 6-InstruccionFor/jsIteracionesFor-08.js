/*
Alumno: Cacciatori, Agustín
For 10 A-ingrese nombre , sexo , edad (validar que si es mujer debe ser adolescente y si el hombre debe ser niño), altura (validar), temperatura corporal

For 10 B- necesitamos saber: el nombre y el sexo de la persona mas alta , --de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito , ... solo si los hay

20:30
For 10 el promedio de edad entre los hombre ,
el promedio de edad entre las mujeres, 
la cantidad de personas que miden mas de 1,60 metros, 
y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts

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
	//punot c
	var sumatoriaEdadMujeres;
	var cantidadMujeres;
	var sumatoriaEdadHombres;
	var cantidadHombres;
	var promedioMujeres;
	var promedioHombres;
	var sumatoriaEdadMujeresMasUnoSesenta;
	var cantidadMujeresMasUnoSesenta;
	var promedioMujeresMasUnoSesenta;
	//impresión
	var mensaje;
	var mensaje;

	banderaMasAlto=true;
	banderaMujerMasJoven=true;
	banderaHombreMasBajo=true;

	//punto c
	sumatoriaEdadMujeres=0;
	cantidadMujeres=0;
	sumatoriaEdadHombres=0;
	cantidadHombres=0;
	sumatoriaEdadMujeresMasUnoSesenta=0;
	cantidadMujeresMasUnoSesenta=0;


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
			while(isNaN(edad)==true || (edad<13 || edad>17))
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
			sumatoriaEdadMujeres=sumatoriaEdadMujeres+edad;
			cantidadMujeres++;
			if(altura>1.6)
			{
				cantidadMujeresMasUnoSesenta++;
			}
		}
		else//sexo=='masculino'
		{
			while(isNaN(edad)==true || (edad<0 || edad>12))
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
			sumatoriaEdadHombres=sumatoriaEdadHombres+edad;
			cantidadHombres++;

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

	/*
	20:30
	For 10 el promedio de edad entre los hombre ,
	el promedio de edad entre las mujeres, 
	la cantidad de personas que miden mas de 1,60 metros, 
	y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts
	*/

	mensaje="La persona más alta se llama: "+nombreMasAlto+", y su sexo es "+sexoDelMasAlto+", mide "+personaMasAlta+" metros";
	alert(mensaje);

	if(banderaMujerMasJoven==false)
	{
		mensaje="La mujer más joven tiene "+edadMujerMasJoven+" años"+" y su nombre es "+nombreMujerMasJoven;
		promedioMujeres=sumatoriaEdadMujeres/cantidadMujeres;
		mensaje=mensaje+"   -   El promedio de edad de TODAS las mujeres es "+promedioMujeres+" años";
		porcentajeMujeresMasUnoSesenta=(100*cantidadMujeresMasUnoSesenta)/(cantidadMujeres+cantidadHombres);
		mensaje=mensaje+"    -  porcentaje de mujeres mayores de 1.6metros es "+porcentajeMujeresMasUnoSesenta+"%";
	}
	else
	{
		mensaje="No se puede calcular el promedio de edades de los hombres porque no se ingresaron mujeres";
	}
	alert(mensaje);

	if(banderaHombreMasBajo==false)
	{
		mensaje="El hombre más bajo mide "+alturaHombreMasBajo+" metros y su nombre es "+nombreHombreMasBajo;
		promedioHombres=sumatoriaEdadHombres/cantidadHombres;
		mensaje=mensaje+"  -  El promedio de edad de los hombres es "+promedioHombres+" años";
	}
	else
	{
		mensaje="No se puede calcular el promedio de edades de los hombres porque no se ingresaron hombres";
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
	1.2 altura
	40 temperatura
	femenino
	15 edad

	mayra
	1.7 altura
	34 temperatura
	femenino
	17 edad

	martin
	2.7
	38
	masculino
	8

	La persona más alta se llama: martin, y su sexo es masculino, mide 2.7 metros

	La mujer más joven tiene 15 años y su nombre es florencia   -   El promedio de edad de TODAS las mujeres es 16 años    -  porcentaje de mujeres mayores de 1.6metros es 25%

	El hombre más bajo mide 2.5 metros y su nombre es agustin  -  El promedio de edad de los hombres es 9 años

	*/


}//FIN DE LA FUNCIÓN
