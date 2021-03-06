/*
parte A
16:00
16:10

parte B
16:10
16:30

parte C
16:30
16:50


Alumno: Cacciatori, Agustín
For 10 A-ingrese nombre , sexo , edad (validar que si es mujer debe ser adolescente y si el hombre debe ser niño), altura (validar), temperatura corporal

For 10 B- necesitamos saber: el nombre y el sexo de la persona mas alta , --de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito , ... solo si los hay

20:30 a 21:53(+T)
tercer intento...
For 10 C- el promedio de edad entre los hombre ,
el promedio de edad entre las mujeres, 
la cantidad de personas que miden mas de 1,60 metros, 
y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts

*/

function mostrar()
{
	//creación de variables
	var respuesta; 
	var nombreIngresado;
	var sexoIngresado;
	var altura;
	var temperatura;
	//para imprimir mensajes
	var mensaje;
	//punto B (el nombre y el sexo de la persona mas alta)
	var banderaDelMasAlto;
	var alturaDelMasAlto;
	var nombreDelMasAlto;
	var sexoDelMasAlto;
	//punto B (de las mujeres el nombre de la mas joven, solo si los hay)
	// var banderaMujerMasJoven;
	var edadMujerMasJoven;
	var nombreMujerMasJoven;
	//punto B (de los hombre el nombre del mas bajito , ... solo si los hay)
	// var banderaHombreMasBajito;
	var alturaHombreMasBajito;
	var nombreHombreMasBajito;
	//punto C  el promedio de edad entre los hombre ,
	var contadorHombres;
	var sumatoriaEdadHombres;
	var promedioEdadHombres;
	//punto C el promedio de edad entre las mujeres
	var contadorMujeres;
	var sumatoriaEdadMujeres;
	var promedioEdadMujeres;
	//punto C la cantidad de personas que miden mas de 1,60 metros
	var cantidadPersonasMidenMasUnoSesenta;
	//punto C el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts
	var cantidadMuejeresMidenMasUnoSensenta;
	var porcentajeMujeresMidenMasUnoSensenta;


	//inicialización
	//para el for
	respuesta='si'; //muy importante para que entre al primer ciclo del for
	//punto B
	banderaDelMasAlto=true;	
	//punto B (de las mujeres el nombre de la mas joven, solo si los hay)
	// banderaMujerMasJoven=true;
	//punto B (de los hombre el nombre del mas bajito , ... solo si los hay)
	// banderaHombreMasBajito=true;
	//punto C  el promedio de edad entre los hombre ,
	contadorHombres=0;
	sumatoriaEdadHombres=0;
	//punto C el promedio de edad entre las mujeres
	contadorMujeres=0;
	sumatoriaEdadMujeres=0;
	//punto C la cantidad de personas que miden mas de 1,60 metros
	cantidadPersonasMidenMasUnoSesenta=0;





	for(;respuesta=='si';)
	{
		
		nombreIngresado=prompt("Ingrese su nombre: ");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Error, ingrese su nombre: ");	
		}

		/*
		temperatura=prompt("Ingrese su temperatura: (34 a 40°C)");
		temperatura=parseFloat(temperatura);
		while(isNaN(temperatura)==true || temperatura<34 || temperatura>40)
		{
			temperatura=prompt("Error, ingrese su temperatura: (34 a 40°C)");
			temperatura=parseFloat(temperatura);
		}*/

		altura=prompt("Ingrese su altura: 0.5 a 2.5 metros");
		altura=parseFloat(altura);
		while(isNaN(altura)==true || altura<0.5 || altura>2.5)
		{
			altura=prompt("Error, ingrese su altura: 0.5 a 2.5 metros");
			altura=parseFloat(altura);
		}

		sexoIngresado=prompt("Ingrese su sexo (femenino | masculino) :");
		while(isNaN(sexoIngresado)==false || (sexoIngresado!='femenino' && sexoIngresado!='masculino'))
		{
			sexoIngresado=prompt("Error, ingrese su sexo (femenino | masculino) :");
		}

		edadIngresada=prompt("Ingrese su edad: (mujer 13 a 17años) (hombre 1 a 12años)");
		edadIngresada=parseInt(edadIngresada);
		switch(sexoIngresado)
		{
			case 'femenino':
				while(isNaN(edadIngresada)==true || edadIngresada<13 || edadIngresada>17)
				{
					edadIngresada=prompt("Error, ingrese su edad: (mujer 13 a 17años) (hombre 1 a 12años)");
					edadIngresada=parseInt(edadIngresada);
				}

				//punto B (de las mujeres el nombre de la mas joven, solo si los hay)
				// if(banderaMujerMasJoven==true || edad<edadMujerMasJoven)
				if(contadorMujeres==0 || edad<edadMujerMasJoven)
				{
					// banderaMujerMasJoven=false;
					edadMujerMasJoven=edad;
					nombreMujerMasJoven=nombre;
				}

				//punto C el promedio de edad entre las mujeres
				contadorMujeres++;
				sumatoriaEdadMujeres=sumatoriaEdadMujeres+edad;
				if(altura>1.6)
				{
					cantidadMuejeresMidenMasUnoSensenta++;
				}
				

				break;//fin case 'femenino'
			// case 'masculino':
			default:
				while(isNaN(edadIngresada)==true || edadIngresada<1 || edadIngresada>12)
				{
					edadIngresada=prompt("Error, ingrese su edad: (mujer 13 a 17años) (hombre 1 a 12años)");
					edadIngresada=parseInt(edadIngresada);
				}

				//punto B (de los hombre el nombre del mas bajito , ... solo si los hay)
				// if(banderaHombreMasBajito==true || altura<alturaHombreMasBajito)
				if(contadorHombres==0 || altura<alturaHombreMasBajito)
				{
					// banderaHombreMasBajito=false;
					alturaHombreMasBajito=altura;
					nombreHombreMasBajito=nombre;
				}

				//punto C  el promedio de edad entre los hombre ,
				contadorHombres++;
				sumatoriaEdadHombres=sumatoriaEdadHombres+edad;

				break;//fin case 'masculino'
		}//switch(sexoIngresado)

		//punto B (el nombre y el sexo de la persona mas alta)
		if(banderaDelMasAlto==true || altura>alturaDelMasAlto)
		{
			banderaDelMasAlto=false;
			alturaDelMasAlto=altura;
			nombreDelMasAlto=nombre;
			sexoDelMasAlto=sexo;
		}


		//punto C la cantidad de personas que miden mas de 1,60 metros
		if(altura>1.6)
		{
			cantidadPersonasMidenMasUnoSesenta++;
		}


		respuesta=prompt("Si quiere seguir tipear 'si' ");//último renglón del for 
	}//for(;respuesta=='si';)


	//punto B (el nombre y el sexo de la persona mas alta)
	mensaje="La persona mas alta mide "+alturaDelMasAlto+" metros, se llama "+nombreDelMasAlto+" y su sexo es "+sexoDelMasAlto;
	alert(mensaje);


	
	// if(banderaMujerMasJoven==false)
	if(contadorMujeres!=0)
	{
		//punto B (de las mujeres el nombre de la mas joven, solo si los hay)
		mensaje="La mujer más joven tiene "+edadMujerMasJoven+" años y se llama "+nombreMujerMasJoven;
		//punto C el promedio de edad entre las mujeres
		promedioEdadMujeres=sumatoriaEdadMujeres/contadorMujeres;
		mensaje=mensaje+"   -   El promedio de edad en las mujeres es : "+promedioEdadMujeres;
	}
	else
	{
		mensaje="No se ingresaron mujeres";
	}
	alert(mensaje);


	
	// if(banderaHombreMasBajito==false)
	if(contadorHombres!=0)
	{
		//punto B (de los hombre el nombre del mas bajito , ... solo si los hay)
		mensaje=nombreHombreMasBajito+" es el hombre más bajito, mide "+alturaHombreMasBajito+" metros";
		//punto C el promedio de edad entre las hombres
		promedioEdadHombres=sumatoriaEdadHombres/contadorHombres;
		mensaje=mensaje+"   -  El promedio de edad en los hombres es : "+promedioEdadHombres;
	}
	else
	{
		mensaje="No se ingresaron hombres";
	}
	alert(mensaje);


	
	if(cantidadPersonasMidenMasUnoSesenta!=0)
	{
		//punto C la cantidad de personas que miden mas de 1,60 metros
		mensaje="La cantidad de personas que miden más de 1.6 metros es "+cantidadPersonasMidenMasUnoSesenta;
		mensaje
		//punto C el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts
		porcentajeMujeresMidenMasUnoSensenta=(cantidadMuejeresMidenMasUnoSensenta*100)/cantidadPersonasMidenMasUnoSesenta;
		mensaje="El porcentaje de mujeres sobre el total de personas de mas de 1.6 metros es:"
	}
	else
	{
		mensaje="No se ingresaron personas que midan más de 1.6 metros"
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
