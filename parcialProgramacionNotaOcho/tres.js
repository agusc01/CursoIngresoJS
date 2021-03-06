function mostrar()
{
	/* 
	//Alumno: Cacciatori, Agustín
	//división: 1°E
	//turno noche
	
	Enunciado:
	Bienvenidos.
	debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
	Nombre,
	Obra Social ("PAMI", "OSDE" o "otras"),
	edad( solo mayores de edad, mas de 17),
	temperatura corporal(validar por favor)
	y sexo (validar).
	NOTA:el precio por pasajero es de $600.
	Se debe informar (solo si corresponde):
	a) La cantidad de personas con OSDE de mas de 60 años.
	b) el nombre y temperatura de la mujer con pami mas joven.
	c) cuanto sale el viaje total sin descuento.
	d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
	
	*/

	var seguir;
	// Bienvenidos.
	// debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
	// Nombre,
	var nombreIngresado;
	// Obra Social ("PAMI", "OSDE" o "otras"),
	var ObraSocialIngresada;
	// edad( solo mayores de edad, mas de 17),
	var edadIngresada;
	// temperatura corporal(validar por favor)
	var temperaturaIngresada;
	// y sexo (validar).
	var sexoIngresado;
	// NOTA:el precio por pasajero es de $600.
	var precioDelViaje;
	var mensaje;
	// Se debe informar (solo si corresponde):
	// a) La cantidad de personas con OSDE de mas de 60 años.
	var cantidadDePersonasConOsdeMasSesentaAnios;
	// b) el nombre y temperatura de la mujer con pami mas joven.
	var nombreConPamiMasJovenSiendoMujer;
	var temperaturaConPamiMasJovenSiendoMujer;
	var edadConPamiMasJovenSiendoMujer;
	var banderaConPamiMasJovenSiendoMujer;
	// c) cuanto sale el viaje total sin descuento.
	var precioTotalDelViaje;
	var contadorDePersonas;
	// d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
	var contadorPami;

	seguir='si';
	precioDelViaje=600;
	// a) La cantidad de personas con OSDE de mas de 60 años.
	cantidadDePersonasConOsdeMasSesentaAnios=0;
	// b) el nombre y temperatura de la mujer con pami mas joven.
	banderaConPamiMasJovenSiendoMujer=true;
	// c) cuanto sale el viaje total sin descuento.
	precioTotalDelViaje=0;
	contadorDePersonas=0;
	// d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
	contadorPami=0;

    //bucle
    while(seguir=='si')
    {

        // nombre
        nombreIngresado=prompt("Ingrese el nombre: ");
        while(isNaN(nombreIngresado)==false)
        {
            nombreIngresado=prompt("Error, ingrese el nombre: ");
        }

		// Obra Social ("PAMI", "OSDE" o "otras"),
        ObraSocialIngresada=prompt('Ingrese la situación laboral ("pami" , "osde" o "otras"): ');
        while(isNaN(ObraSocialIngresada)==false || (ObraSocialIngresada!='pami' && ObraSocialIngresada!='osde' && ObraSocialIngresada!='otras'))
        {
            ObraSocialIngresada=prompt('Error, Ingrese la situación laboral ("pami" , "osde" o "otras"): ');
        }


		// edad( solo mayores de edad, mas de 17),
		edadIngresada=prompt("Ingrese la edad (18 a 105): ");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<18 || edadIngresada>105)
		{
			edadIngresada=prompt("Error, Ingrese la edad (18 a 105): ");
			edadIngresada=parseInt(edadIngresada);
		}


		// temperatura corporal(validar por favor)
		temperaturaIngresada=prompt("Ingrese la temperatura corporal (34 a 40)): ");
		temperaturaIngresada=parseFloat(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)==true || temperaturaIngresada<34 || temperaturaIngresada>40)
		{
			temperaturaIngresada=prompt("Error, la temperatura corporal (34 a 40) ");
			temperaturaIngresada=parseFloat(temperaturaIngresada);
		}

		// y sexo (validar).
        sexoIngresado=prompt("Ingrese el sexo (femenino 0 masculino): ");
        while(isNaN(sexoIngresado)==false || (sexoIngresado!='femenino' && sexoIngresado!='masculino'))
        {
            sexoIngresado=prompt("Error, Ingrese el sexo (femenino 0 masculino): ");
        }


		// a) La cantidad de personas con OSDE de mas de 60 años.
		if(ObraSocialIngresada=='osde')
		{
			if(edadIngresada>60)
			{
				cantidadDePersonasConOsdeMasSesentaAnios++;
			}
		}
		else
		{
			// b) el nombre y temperatura de la mujer con pami mas joven. 
			if(ObraSocialIngresada=='pami')
			{
				
				if(sexoIngresado=='femenino')
				{
					if(banderaConPamiMasJovenSiendoMujer==true || edadIngresada<edadConPamiMasJovenSiendoMujer)
					{
						banderaConPamiMasJovenSiendoMujer=false;
						edadConPamiMasJovenSiendoMujer=edadIngresada;
						nombreConPamiMasJovenSiendoMujer=nombreIngresado;
						temperaturaConPamiMasJovenSiendoMujer=temperaturaIngresada;
					}
	
				}

				// d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
				contadorPami++;
			}
		}

		// c) cuanto sale el viaje total sin descuento.
		contadorDePersonas++;

        seguir=prompt("Para seguir tipear 'si' ");//último renglón del while
    }//fin while(seguir=='si')


	// a) La cantidad de personas con OSDE de mas de 60 años.
	if(cantidadDePersonasConOsdeMasSesentaAnios!=0)
	{
		mensaje="La cantidad de personas con OSDE de mas de 60 años fue :"+cantidadDePersonasConOsdeMasSesentaAnios;
	}
	else
	{
		mensaje="No hay personas con OSDE de mas de 60 años";
	}
	alert(mensaje);

	// b) el nombre y temperatura de la mujer con pami mas joven. 

	if(banderaConPamiMasJovenSiendoMujer==false)
	{
		mensaje="el nombre y temperatura de la mujer con pami mas joven. nombre: "+nombreConPamiMasJovenSiendoMujer+", temperatura: "+temperaturaConPamiMasJovenSiendoMujer+", tiene una edad de : "+edadIngresada;
	}
	else
	{
		mensaje="No se ingresaron mujeres con pami";
	}
	alert(mensaje);

	// c) cuanto sale el viaje total sin descuento.
	precioTotalDelViaje=contadorDePersonas*precioDelViaje;  //precioDelViaje = 600;
	mensaje="El viaje sin descuento sale: $"+precioTotalDelViaje;
	alert(mensaje);

	// d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
	if(contadorPami>contadorDePersonas/2)
	{
		precioFinalConDescuento=precioTotalDelViaje*0.75;
		mensaje="Por tener más de 50% de pasajeros con PAMI, tiene un descuento de 25%, quedando el precio final del viaje en $"+precioFinalConDescuento;
	}
	else
	{
		mensaje="No corresponde el descuento ";
	}
	alert(mensaje);


}


