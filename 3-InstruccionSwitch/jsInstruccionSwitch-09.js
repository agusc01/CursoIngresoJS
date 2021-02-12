/*

Alumno: Cacciatori, Agustín
9)
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

*/


function mostrar()
{
	var precio;
	var destinoIngresado;
	var estacionIngresada;
	var mensaje;
	var porcentaje;

	precio=15000;
	
	destinoIngresado=document.getElementById("txtIdDestino").value;
	estacionIngresada=document.getElementById("txtIdEstacion").value;

	switch(estacionIngresada)
	{
		case 'Invierno':
			switch(destinoIngresado)
			{
				case 'Bariloche':
					porcentaje=20;
					break;
				case 'Mar del plata':
					porcentaje=-20;
					break;

				// case 'Cataratas':
				// case 'Cordoba':
				default:
					porcentaje=-10;
					break;					
			}
			break;

		case 'Verano':
			switch(destinoIngresado)
			{
				case 'Bariloche':
					porcentaje=-20;
					break;
				case 'Mar del plata':
					porcentaje=20;
					break;

				// case 'Cataratas':
				// case 'Cordoba':
				default:
					porcentaje=10;
					break;
					
			}
			break;

		// case 'Otoño':
		// case 'Primavera':
		default:
			switch(destinoIngresado)
			{
				case 'Cordoba':
					break;	

				// case 'Bariloche':
				// case 'Cataratas':
				// case 'Mar del plata':
				default:
					porcentaje=10;
					break;
			}
			break;
			
	}


	precio=precio*((100+porcentaje)/100);

	mensaje='Elegiste ir a '+destinoIngresado+' en el '+estacionIngresada+' lo cual sale $'+ precio;
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN