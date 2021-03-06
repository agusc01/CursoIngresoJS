function mostrar()
{

    //enunciado
	// Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
	// de cada una debo obtener los siguientes datos:
	// el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
	// el precio (validar entre 100 y 300),
	// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
	// Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
	// Se debe Informar al usuario lo siguiente:
	// a) El promedio de cantidad por tipo de producto
	// b) La categoria con mas cantidad de unidades en total de la compra
	// c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
	// d) el fabricante y Categoria del más caro de los productos


    //declaración
    var contador;
    var cantidadDeCiclosDelFor;
	// Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
	// de cada una debo obtener los siguientes datos:
	// el nombre del producto 
	var nombreIngresado;
	//el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
	var tipoIngresado;
	// el precio (validar entre 100 y 300),
	var precioIngresado;
	// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
	var cantidadIngresada;
	// Categoria ("desinfectante", "bactericida", "detergente" )
	var categoriaIngresada;
	// y el fabricante.
	var fabricanteIngresado;
	var mensaje;
	// Se debe Informar al usuario lo siguiente:
	// a) El promedio de cantidad por tipo de producto
	var contadorTipoAlcohol;
	var contadorTipoIac;
	var contadorTipoQaut;
	var acumuladorTipoAlcohol;
	var acumuladorTipoIac;
	var acumuladorTipoQuat;
	var promedioAlcohol;
	var promedioIac;
	var promedioQuac;
	// b) La categoria con mas cantidad de unidades en total de la compra
	var acumuladorDesifectante;
	var acumuladorBactericida;
	var acumuladorDetergente;
	// c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
	var cantidadUnidadesDetergenteMenosDoscientos;
	// d) el fabricante y Categoria del más caro de los productos
	var fabricanteDelProductoMasCaro;
	var categoriaDelProductoMasCaro;
	var precioDelProdcutoMasCaro;

    //inicialización
    cantidadDeCiclosDelFor=5;
	// a) El promedio de cantidad por tipo de producto
	contadorTipoAlcohol=0;
	contadorTipoIac=0;
	contadorTipoQaut=0;
	acumuladorTipoAlcohol=0;
	acumuladorTipoIac=0;
	acumuladorTipoQuat=0;
	// b) La categoria con mas cantidad de unidades en total de la compra
	acumuladorDesifectante=0;
	acumuladorBactericida=0;
	acumuladorDetergente=0;
	// c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
	cantidadUnidadesDetergenteMenosDoscientos=0;
	// d) el fabricante y Categoria del más caro de los productos


    //bucle
    for(contador=0;contador<cantidadDeCiclosDelFor;contador++)
    {

		nombreIngresado=prompt("Ingrese el nombre: ");
        while(isNaN(nombreIngresado)==false)
        {
            nombreIngresado=prompt("Error, ingrese el nombre: ");
        }

        tipoIngresado=prompt("Ingrese el tipo alcohol, iac o quat: ");
        while(isNaN(tipoIngresado)==false || (tipoIngresado!='alcohol' && tipoIngresado!='iac') && tipoIngresado!='quat')
        {
            tipoIngresado=prompt("Error, Ingrese el tipo alcohol, iac o quat: ");
        }

        precioIngresado=prompt("Ingrese el precio (100 a 300): ");
        precioIngresado=parseFloat(precioIngresado);
        while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
        {
            precioIngresado=prompt("Error, Ingrese el precio (100 a 300): ");
            precioIngresado=parseFloat(precioIngresado);
        }

        cantidadIngresada=prompt("Ingrese la cantidad (0 a 1000)): ");
        cantidadIngresada=parseInt(cantidadIngresada);
        while(isNaN(cantidadIngresada)==true || cantidadIngresada<0 || cantidadIngresada>1000)
        {
            cantidadIngresada=prompt("Error, Ingrese la cantidad (0 a 1000)): ");
            cantidadIngresada=parseInt(cantidadIngresada);
        }

		categoriaIngresada=prompt("Ingrese la categoria desinfectante, bactericida o detergente: ");
        while(isNaN(categoriaIngresada)==false || (categoriaIngresada!='desinfectante' && categoriaIngresada!='bactericida') && categoriaIngresada!='detergente')
        {
            categoriaIngresada=prompt("Error, Ingrese la categoria desinfectante, bactericida o detergente: ");
        }

        fabricanteIngresado=prompt("ingrese el fabricante: ");
        while(isNaN(fabricanteIngresado)==false)
        {
            fabricanteIngresado=prompt("Error, ingrese el fabricante: ");
        }

		// a) El promedio de cantidad por tipo de producto
		switch(tipoIngresado)
		{
			case 'alcohol':
				contadorTipoAlcohol++;
				acumuladorTipoAlcohol=acumuladorTipoAlcohol+cantidadIngresada;
				break;
			case 'iac':
				contadorTipoIac++;
				acumuladorTipoIac=acumuladorTipoIac+cantidadIngresada;
				break;
			// case 'quat':
			default:
				contadorTipoQaut++;
				acumuladorTipoQuat=acumuladorTipoQuat+cantidadIngresada;
				break;
		}

		switch(categoriaIngresada)
		{
			case 'bactericida':
				acumuladorBactericida=acumuladorBactericida+cantidadIngresada;
				break;
			case 'desinfectante':
				acumuladorDesifectante=acumuladorDesifectante+cantidadIngresada;

				break;
				// case 'detergente':
			default:
					if(precioIngresado<201)
					{
						// c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
						cantidadUnidadesDetergenteMenosDoscientos=cantidadUnidadesDetergenteMenosDoscientos+cantidadIngresada;
					}
				acumuladorDetergente=acumuladorDetergente+cantidadIngresada;
				break;
		}


		// d) el fabricante y Categoria del más caro de los productos
		if(contador==0 || precioIngresado>precioDelProdcutoMasCaro)
		{
			precioDelProdcutoMasCaro=precioIngresado;
			fabricanteDelProductoMasCaro=fabricanteIngresado;
			categoriaDelProductoMasCaro=categoriaIngresada;
		}


    }//fin for(contador=0;contador<cantidadDeCiclosDelFor;contador++)


    //mensajes
	if(contadorTipoAlcohol!=0)
	{
		promedioAlcohol=acumuladorTipoAlcohol/contadorTipoAlcohol;
		mensaje="promedio alcohol: "+promedioAlcohol;
	}
	else
	{
		mensaje="No se compro alcohol";
	}
	alert(mensaje);

	if(contadorTipoIac!=0)
	{
		promedioIac=acumuladorTipoIac/contadorTipoIac;
		mensaje="promedio Iac: "+promedioIac;
	}
	else
	{
		mensaje="No se compro Iac";
	}
	alert(mensaje);

	if(contadorTipoQaut!=0)
	{
		promedioQaut=acumuladorTipoQaut/contadorTipoQaut;
		mensaje="promedio Qaut: "+promedioQaut;
	}
	else
	{
		mensaje="No se compro Qaut";
	}
	alert(mensaje);

	// b) La categoria con mas cantidad de unidades en total de la compra
	if(acumuladorBactericida>acumuladorDesifectante && acumuladorBactericida>acumuladorDetergente)
	{
		mensaje="La categoria con mas cantidad de unidades en total de la compra fue bactericida "+acumuladorBactericida;
	}
	else
	{
		if(acumuladorDesifectante>acumuladorDetergente)
		{
			mensaje="La categoria con mas cantidad de unidades en total de la compra fue desifectante "+acumuladorDesifectante;
		}
		else
		{
			mensaje="La categoria con mas cantidad de unidades en total de la compra fue Detergente "+acumuladorDetergente;
		}
	}
	alert(mensaje);

	// c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
	if(cantidadUnidadesDetergenteMenosDoscientos!=0)
	{
		mensaje="Unidades de detergente con precios menos a 200 (inclusive) se compraron en total: "+cantidadUnidadesDetergenteMenosDoscientos;
	}
	alert(mensaje);

	// d) el fabricante y Categoria del más caro de los productos

	mensaje=" el fabricante "+fabricanteDelProductoMasCaro+" y Categoria "+categoriaDelProductoMasCaro+" fue el más caro de los productos, con un valor de "+precioDelProdcutoMasCaro;
	alert(mensaje)
	
    

}