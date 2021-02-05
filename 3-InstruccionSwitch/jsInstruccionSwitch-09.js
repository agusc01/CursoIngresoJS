function mostrar()
{
	var precio = 15000;
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;

	switch(estacionIngresada) {
		case 'Invierno':
			switch(destinoIngresado) {
				case 'Bariloche':
					precio = precio * 1.2;
					break;
				case 'Cataratas':
				case 'Cordoba':
					precio = precio * 0.9;
					break;
				case 'Mar del plata':
					precio = precio * 0.8;
					break;
			}
			break;
		case 'Verano':
			switch(destinoIngresado) {
				case 'Bariloche':
					precio = precio * 0.8;
					break;
				case 'Cataratas':
				case 'Cordoba':
					precio = precio * 1.1;
					break;
				case 'Mar del plata':
					precio = precio * 1.2;
					break;
					
			}
			
			break;
		case 'Otoño':
		case 'Primavera':
			switch(destinoIngresado) {
				case 'Bariloche':
				case 'Cataratas':
				case 'Mar del plata':
					precio = precio * 1.1;
					break;
				case 'Cordoba':
					break;	
			}
			
			break;
			
	}
	
	alert('Elegiste ir a ' + destinoIngresado + ' en el ' + estacionIngresada + ' lo cual sale $' +  precio)

}//FIN DE LA FUNCIÓN