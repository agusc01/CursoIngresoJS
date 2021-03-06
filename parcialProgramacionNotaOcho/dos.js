function mostrar()
{
	//Alumno: Cacciatori, Agustín
	//división: 1°E
	//turno noche

    /*
    Enunciado:

    Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
    nombre
    situcación laboral ("buscando" , "trabajando" o "solo estudiante")
    cantidad de materias( mas de cero y menos de 8)
    Sexo ( femenino , masculino , no binario)
    Nota promedio (entre 0 y 10)
    edad (validar)
    se debe informar de existir, o informar que no existe , en el caso que corresponda.
    a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
    b) El nombre del mas viejo de los alumnos que solo sea estudiantes
    c) El promedio de nota por situacion laboral
    d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
    */
    

    // nombre
    var nombreIngresado;
    // situcación laboral ("buscando" , "trabajando" o "solo estudiante")
    var situacionLaboralIngresada;
    // cantidad de materias( mas de cero y menos de 8)
    var cantidadDeMateriasIngresadas;
    // Sexo ( femenino , masculino , no binario)
    var sexoIngresado;
    // Nota promedio (entre 0 y 10)
    var notaPromedioIngresada;
    // edad (validar)
    var edadIngresada;
	var mensaje;
    // se debe informar de existir, o informar que no existe , en el caso que corresponda.
    // a) El nombre del mejor promedio que no de los que trabajan o estan buscando
	var notaMejorPromedioNoTrabajanOEstanBuscando;
	var nombreMejorPromedioNoTrabajanOEstanBuscando;
	var banderaMejorPromedioNoTrabajanOEstanBuscando;
    // b) El nombre del mas viejo de los alumnos que solo sea estudiantes
	var nombreMasViejoEstudiante;
	var edadMasViejoEstudiante;
	var banderaMasViejoEstudiante;
    // c) El promedio de nota por situacion laboral
	var contadorBuscando;
	var contadorTrabajando;
	var contadorSoloEstudiante;
	var acumuladorNotaBuscando;
	var acumuladorNotaTrabajando;
	var acumuladorSoloEstudiante;
	var promedioBuscando;
	var promedioTrabajando;
	var promedioSoloEstudiante;
    // d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
	var edadPersonaMenosMateriasBuscandoTrabajo;
	var nombrePersonaMenosMateriasBuscandoTrabajo;
	var cantidadMateriasPersonaMenosMateriasBuscandoTrabajo;


    //declaración
    var seguir;


    //inicialización
    seguir='si';
	banderaMejorPromedioNoTrabajanOEstanBuscando=true;

	//c
	contadorBuscando=0;
	contadorTrabajando=0;
	contadorSoloEstudiante=0;
	acumuladorNotaBuscando=0;
	acumuladorNotaTrabajando=0;
	acumuladorSoloEstudiante=0;



    //bucle
    while(seguir=='si')
    {

        // nombre
        nombreIngresado=prompt("Ingrese el nombre: ");
        while(isNaN(nombreIngresado)==false)
        {
            nombreIngresado=prompt("Error, ingrese el nombre: ");
        }

		// situcación laboral ("buscando" , "trabajando" o "solo estudiante")
        situacionLaboralIngresada=prompt('Ingrese la situación laboral ("buscando" , "trabajando" o "solo estudiante"): ');
        while(isNaN(situacionLaboralIngresada)==false || (situacionLaboralIngresada!='buscando' && situacionLaboralIngresada!='trabajando' && situacionLaboralIngresada!='solo estudiante'))
        {
            situacionLaboralIngresada=prompt('Error, Ingrese la situación laboral ("buscando" , "trabajando" o "solo estudiante"): ');
        }

		// cantidad de materias( mas de cero y menos de 8)
		cantidadDeMateriasIngresadas=prompt("Ingrese la cantidad de materias (0 a 8): ");
        cantidadDeMateriasIngresadas=parseInt(cantidadDeMateriasIngresadas);
        while(isNaN(cantidadDeMateriasIngresadas)==true || cantidadDeMateriasIngresadas<0 || cantidadDeMateriasIngresadas>8)
        {
            cantidadDeMateriasIngresadas=prompt("Error, Ingrese la cantidad de materias (0 a 8): ");
            cantidadDeMateriasIngresadas=parseInt(cantidadDeMateriasIngresadas);
        }

		// Sexo ( femenino , masculino , no binario)
        sexoIngresado=prompt("Ingrese el sexo (femenino, masculino o no binario): ");
        while(isNaN(sexoIngresado)==false || (sexoIngresado!='femenino' && sexoIngresado!='masculino' && sexoIngresado!='no binario'))
        {
            sexoIngresado=prompt("Error, Ingrese el sexo (femenino, masculino o no binario): ");
        }

		// Nota promedio (entre 0 y 10)
		notaPromedioIngresada=prompt("Ingrese la nota (0 a 10): ");
        notaPromedioIngresada=parseInt(notaPromedioIngresada);
        while(isNaN(notaPromedioIngresada)==true || notaPromedioIngresada<0 || notaPromedioIngresada>10)
        {
            notaPromedioIngresada=prompt("Error, Ingrese la nota (0 a 10): ");
            notaPromedioIngresada=parseInt(notaPromedioIngresada);
        }

		// edad (validar)
		edadIngresada=prompt("Ingrese la edad (18 a 70): ");
        edadIngresada=parseInt(edadIngresada);
        while(isNaN(edadIngresada)==true || edadIngresada<18 || edadIngresada>70)
        {
            edadIngresada=prompt("Error, Ingrese la edad (18 a 70): ");
            edadIngresada=parseInt(edadIngresada);
        }

		    



		//situación trabajando o buscando
		if(situacionLaboralIngresada!="solo estudiante")
		{
			// a) El nombre del mejor promedio que no de los que trabajan o estan buscando
			if(banderaMejorPromedioNoTrabajanOEstanBuscando==true || notaPromedioIngresada>notaMejorPromedioNoTrabajanOEstanBuscando)
			{
				banderaMejorPromedioNoTrabajanOEstanBuscando=false
				notaMejorPromedioNoTrabajanOEstanBuscando=notaPromedioIngresada;
				nombreMejorPromedioNoTrabajanOEstanBuscando=nombreIngresado;

			}
			if(situacionLaboralIngresada=='trabajando')
			{
				    // c) El promedio de nota por situacion laboral
				acumuladorNotaTrabajando=acumuladorNotaTrabajando+nombreIngresado;
				contadorTrabajando++;
			}
			if(situacionLaboralIngresada=='buscando')
			{


				// d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
				if(contadorBuscando==0 || cantidadDeMateriasIngresadas<cantidadMateriasPersonaMenosMateriasBuscandoTrabajo)
				{
					cantidadMateriasPersonaMenosMateriasBuscandoTrabajo=cantidadDeMateriasIngresadas;
					edadPersonaMenosMateriasBuscandoTrabajo=edadIngresada;
					nombrePersonaMenosMateriasBuscandoTrabajo=nombreIngresado;
				}

				// c) El promedio de nota por situacion laboral
				acumuladorNotaBuscando=acumuladorNotaBuscando+notaPromedioIngresada;
				contadorBuscando++;				
			}
		}
		else
		{
			//solo estudiante
			// b) El nombre del mas viejo de los alumnos que solo sea estudiantes
			if(contadorSoloEstudiante==0 || edadIngresada>edadMasViejoEstudiante)
			{
				edadMasViejoEstudiante=edadIngresada;
				nombreMasViejoEstudiante=nombreIngresado;
			}

			    // c) El promedio de nota por situacion laboral
			acumuladorSoloEstudiante=acumuladorSoloEstudiante+notaPromedioIngresada;
			contadorSoloEstudiante++;
			
		}

        

        seguir=prompt("Para seguir tipear 'si' ");//último renglón del while
    }//fin while(seguir=='si')


    //mensajes
    // a) El nombre del mejor promedio que no de los que trabajan o estan buscando
	if(banderaMejorPromedioNoTrabajanOEstanBuscando==false)
	{
		mensaje=" El nombre del mejor promedio que no de los que trabajan o estan buscando. Nombre "+nombreMejorPromedioNoTrabajanOEstanBuscando+" con nota promedio "+notaMejorPromedioNoTrabajanOEstanBuscando;
	}
	else
	{
		mensaje="No se ingreso trabajan o estan buscando "
	}
	alert(mensaje);

	// b) El nombre del mas viejo de los alumnos que solo sea estudiantes
	if(contadorSoloEstudiante!=0)
	{
		mensaje="El nombre del mas viejo de los alumnos que solo sea estudiantes, nombre: "+nombreMasViejoEstudiante+", con una edad de "+edadMasViejoEstudiante;
		
	}
	else
	{
		mensaje="No se ingresaron estudiantes";
	}
	alert(mensaje);

        // c) El promedio de nota por situacion laboral
	if(contadorBuscando!=0)
	{
		promedioBuscando=acumuladorNotaBuscando/contadorBuscando;
		mensaje="promedio buscando: "+promedioBuscando;
	}
	else
	{
		mensaje="No se ingreso buscando";
	}
	alert(mensaje);

	if(contadorTrabajando!=0)
	{
		promedioTrabajando=acumuladorNotaTrabajando/contadorTrabajando;
		mensaje="promedio trabajando: "+promedioTrabajando;
	}
	else
	{
		mensaje="No se ingreso trabajando";
	}
	alert(mensaje);

	if(contadorSoloEstudiante!=0)
	{
		promedioSoloEstudiante=acumuladorSoloEstudiante/contadorSoloEstudiante;
		mensaje="promedio solo estudiante: "+promedioSoloEstudiante;
	}
	else
	{
		mensaje="No se ingreso solo estudiante";
	}
	alert(mensaje);

	// d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
	if(contadorBuscando!=0)
	{
		mensaje="La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo, edad: "+edadPersonaMenosMateriasBuscandoTrabajo+", nombre: "+nombrePersonaMenosMateriasBuscandoTrabajo+", materias: "+cantidadMateriasPersonaMenosMateriasBuscandoTrabajo
	}
	else
	{
		mensaje="No se ingresaron buscando";
	}
	alert(mensaje);

}
