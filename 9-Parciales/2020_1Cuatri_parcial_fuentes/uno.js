/*

Alumno: Cacciatori, Agustín

Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

*/



function mostrar()
{
	//para el while
	var contador;
	//variables generales
	var producto;//barbijo , jabon, alcohol
	var precio;//100 a 300
	var cantidad;//1 a 1000
	var marca;
	var fabricante;
	var mensaje;
	//variable para el punto A
	var banderaPrimerAlcohol;
	var precioAlcoholMasBarato;
	var cantidadAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	//variable para el punto B
	var cantidadAlcohol;
	var cantidadBarbijo;
	var vecesCompraAlcohol;
	var vecesCompraBarbijo;
	var vecesCompraJabon;
	var promedio; //no es necesario inicializar
	//variables para el punto C (y B)
	var cantidadJabon;

	
	//para el while
	contador=0;
	//inicialización para el punto A
	precioAlcoholMasBarato=0;
	cantidadAlcoholMasBarato=0; 
	fabricanteAlcoholMasBarato=0; 
	banderaPrimerAlcohol=true;
	//inicialización para el punto B
	cantidadAlcohol=0;
	cantidadBarbijo=0;
	vecesCompraAlcohol=0;
	vecesCompraBarbijo=0;
	vecesCompraJabon=0;
	//inicialización para el punto C (y B)
	cantidadJabon=0;
	
	while(contador<5)
	{
		//============== SECCIÓN PRODUCTOS ==============
		producto=prompt("Ingrese un producto: \nbarbijo \njabon \nalcohol");
		while(producto!="barbijo" && producto!="jabon" && producto!="alcohol")
		{
			producto=prompt("Error, Ingrese un producto: \nbarbijo \njabon \nalcohol");
		}
	
		//============== SECCIÓN PRECIOS ==============
		precio=prompt("Ingrese el precio del producto (entre $100 a $300): ");
		precio=parseInt(precio);
		while(isNaN(precio)==true || precio<100 || precio>300)
		{
			precio=prompt("Error, ingrese el precio del producto (entre $100 a $300): ");
		}
	
		//============== SECCIÓN CANTIDADES ==============
		cantidad=prompt("Ingrese la cantidad del producto (entre 1 a 1000): ");
		cantidad=parseInt(cantidad);
		while(isNaN(cantidad)==true || cantidad<1 || cantidad>1000)
		{
			cantidad=prompt("Error, ingrese la cantidad del producto (entre 1 a 1000): ");
		}
	
		//============== SECCIÓN MARCAS ==============
		marca=prompt("Ingrese la marca del producto: ");
	
		//============== SECCIÓN FABRICANTES ==============
		fabricante=prompt("Ingrese el fabricante del producto: ");


		//punto A, B y C
		switch(producto)
		{
			case "barbijo":
				cantidadBarbijo=cantidadBarbijo+cantidad;
				vecesCompraBarbijo=vecesCompraBarbijo+1;
				break;
			case "jabon": //punto C en particular
				cantidadJabon=cantidadJabon+cantidad;
				vecesCompraJabon=vecesCompraJabon+1;
				break;
			//case "alcohol":
			default://punto A en particular
				cantidadAlcohol=cantidadAlcohol+cantidad;
				vecesCompraAlcohol=vecesCompraAlcohol+1;

				if(banderaPrimerAlcohol==true)
				{
					banderaPrimerAlcohol=false;
	
					precioAlcoholMasBarato=precio;
					cantidadAlcoholMasBarato=cantidad;
					fabricanteAlcoholMasBarato=marca;
				}
				else
				{
					if(precio<precioAlcoholMasBarato)
					{
						precioAlcoholMasBarato=precio;
						cantidadAlcoholMasBarato=cantidad;
						fabricanteAlcoholMasBarato=marca;
					}
			
				}
				break;
		}


		contador=contador+1; //último renglón

	}//fin while(contador<5)



	//mensaje a imprimir para el punto A
	if(banderaPrimerAlcohol==false)
	{
		mensaje="El alcohol más barato es fue del fabricante: "+fabricanteAlcoholMasBarato+ ", se compraron: "+cantidadAlcoholMasBarato+", a un precio de $"+precioAlcoholMasBarato+" c/u";

	}
	else
	{
		mensaje="Se hicieron "+contador+" compras y no se compro alcohol";
	}

	alert(mensaje);

	//mensaje a imprimir para el punto B
	if(cantidadAlcohol>cantidadBarbijo)
	{
		if(cantidadAlcohol>cantidadJabon)
		{
			// cantidadAlcohol 
			mensaje="alcohol";
			promedio=cantidadAlcohol/vecesCompraAlcohol;
		}
		else// if(cantidadJabon>=cantidadAlcohol)
		{
			// cantidadJabon
			mensaje="jabón";
			promedio=cantidadJabon/vecesCompraJabon;
		}
	}
	else// if(cantidadBarbijo>=cantidadAlcohol)
	{
		if(cantidadBarbijo>cantidadJabon)
		{
			//cantidadBarbijo
			mensaje="barbijo"
			promedio=cantidadBarbijo/vecesCompraBarbijo;
		}
	}

	mensaje="Lo que se compro más fue "+mensaje+" con un promedio de "+promedio+" unidades";

	alert(mensaje);

	//mensaje a imprimir para el punto C
	if(cantidadJabon>0)
	{
		mensaje="Se compraron "+cantidadJabon+" unidades de jabón";
	}
	else
	{
		mensaje="No se compro jabón";
	}

	alert(mensaje);
	


}


/* 
======== TEST ========
ENTRADAS ...
barbijo
150$
100u
cosmos
tool

alcohol
110$
500u
anderson
johnson

alchol
175$
200u
pirulo
desconocidoo

barbijo
300$
1000u
laMejor
laAlemana

barbijo
100$
1000u
truchito
china

SALIDAS...
Se hicieron 5 compras y no se compro alcohol
Lo que se compro más fue barbijo con un promedio de 700
Se compraron 700 unidades de jabón



ENTRADAS ...
barbijo
150$
100u
cosmos
tool

jabon
110$
500u
anderson
johnson

jabon
175$
200u
pirulo
desconocidoo

barbijo
300$
1000u
laMejor
laAlemana

barbijo
100$
1000u
truchito
china

SALIDAS...
El alcohol más barato es fue del fabricante: anderson, se compraron: 500, a un precio de $110 c/u
Lo que se compro más fue barbijo con un promedio de 700
No se compro jabón

*/