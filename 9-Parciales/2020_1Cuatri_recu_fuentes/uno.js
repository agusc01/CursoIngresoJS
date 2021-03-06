function mostrar()
{
	//20 minutos en el código empiezo
	//10 minutos en el testeo
	//variables generales
	var tipoIngresado;//barbijo || jabon || alcohol
	var precioIngresado; // 100 a 300
	var cantidadIngresado; // 1 a 1000
	var marcaIngresada;
	var fabricanteIngresado;
	//para el while
	var contador;
	//punto A
	var precioJabonMasCaro;
	var cantidadJabonMasCaro;
	var fabricanteJabonMasCaro;
	// punto B
	var sumatoriaBarbijo;
	var sumatoriaJabon;
	var sumatoriaAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var contadorAlcohol;
	var promedio;
	//para imprimir mensajes;
	var mensaje;

	//inicialización
	//para el while
	contador=0;
	//punto A
	precioJabonMasCaro=0;
	cantidadJabonMasCaro=0;
	//punto B
	sumatoriaBarbijo=0;
	sumatoriaJabon=0;
	sumatoriaAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	contadorAlcohol=0;




	while(contador<5)
	{
		contador++; //primer renglón del while

		tipoIngresado=prompt("Ingrese un tipo de producto (barbijo | jabon | alcohol)");
		while(isNaN(tipoIngresado)==false || (tipoIngresado!='barbijo' && tipoIngresado!='jabon' && tipoIngresado!='alcohol'))
		{
			tipoIngresado=prompt("Error, ingrese un tipo de producto (barbijo | jabon | alcohol)");
		}

		precioIngresado=prompt("Ingrese el precio ($100 a $300)");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("Error, Ingrese el precio ($100 a $300)");
			precioIngresado=parseInt(precioIngresado);
		}
		
		cantidadIngresado=prompt("Ingrese una cantidad (1 a 1000) :");
		cantidadIngresado=parseInt(cantidadIngresado);
		while(isNaN(cantidadIngresado)==true || cantidadIngresado<1 || cantidadIngresado>1000)
		{
			cantidadIngresado=prompt("Error, Ingrese una cantidad (1 a 1000) :");
			cantidadIngresado=parseInt(cantidadIngresado);
		}

		marcaIngresada=prompt("Ingrese una marca: ");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("Error, ingrese una marca: ");
		}

		fabricanteIngresado=prompt("Ingrese un fabricante: ");
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("Error, ingrese un fabricante: ");
		}
		

		//punto A, B y C
		switch(tipoIngresado)
		{
			case 'barbijo':
				//punto C en particular
				sumatoriaBarbijo=sumatoriaBarbijo+cantidadIngresado;
				contadorBarbijo++;
				break;
			case 'jabon':
				//punto A en particular
				if(precioIngresado>precioJabonMasCaro || contador==1)
				{
					precioJabonMasCaro=precioIngresado;
					
					fabricanteJabonMasCaro=fabricanteIngresado;
					cantidadJabonMasCaro=cantidadIngresado;
				}
				sumatoriaJabon=sumatoriaJabon+cantidadIngresado;
				contadorJabon++;
				break;
			// case 'alcohol':
			default:
				sumatoriaAlcohol=sumatoriaAlcohol+cantidadIngresado;
				contadorAlcohol++;
				break;
		}

	}//fin while(contador<5) ... bucle principal

	//punto A
	if(cantidadJabonMasCaro>0)
	{
		mensaje="punto A: El jabón más caro tiene un precio de "+precioJabonMasCaro+" del fabricante "+fabricanteJabonMasCaro+", del cual se compraron "+cantidadJabonMasCaro+" unidades."
	}
	else
	{
		mensaje="punto A: Se hicieron "+contador+" compras y no se compro jabón";
	}
	alert(mensaje);

	//punto B
	if(sumatoriaAlcohol>sumatoriaBarbijo && sumatoriaAlcohol>sumatoriaJabon)
	{
		//alcohol
		promedio=sumatoriaAlcohol/contadorAlcohol;
		mensaje="alcohol";
	}
	else
	{
		if(sumatoriaBarbijo>sumatoriaJabon)
		{
			//barbijo
			promedio=sumatoriaBarbijo/contadorBarbijo;
			mensaje="barbijo";
		}
		else
		{
			//jabon
			promedio=sumatoriaJabon/contadorJabon;
			mensaje="jabón";
		}
	}
	mensaje="punto B: El producto más comprado fue el "+mensaje+" con un promedio de "+promedio;
	alert(mensaje);

	//punto C
	mensaje="punto C: Se compraron "+sumatoriaBarbijo+" unidades de barbijos";
	alert(mensaje)



}

/*
==================TEST==================
barbijo
234
123
a5
audi

jabon
100
1000
bmw
x5

jabon
234
500
citroen
xsara

alcohol
240
240
fiat
uno

barbijo
150
800
vw
gol

punto A: El jabón más caro tiene un precio de 234 del fabricante xsara, del cual se compraron 500 unidades.
punto B: El producto más comprado fue el jabón con un promedio de 750
punto C: Se compraron 923 unidades unidades de barbijo

==================TEST==================
*/