function mostrar()
{

	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;

	switch(estacionIngresada) {
		case 'Invierno':
			switch(destinoIngresado) {
				case 'Bariloche':
					alert("Se viaja");
					break;
				case 'Cataratas':
				case 'Mar del plata':
				case 'Cordoba':
					alert("No se viaja");
					break;
			}
			break;
		case 'Verano':
			switch(destinoIngresado) {
				case 'Cataratas':
				case 'Mar del plata':				
					alert("Se viaja");
					break;
				case 'Bariloche':
				case 'Cordoba':
					alert("No se viaja");
					break;
			}

			break;
		case 'Otoño':
			alert("Se viaja");
			break;
		case 'Primavera':
			switch(destinoIngresado) {
				case 'Bariloche':
					alert("No se viaja");
					break;
				case 'Cataratas':
				case 'Mar del plata':
				case 'Cordoba':
					alert("Se viaja");
					break;
			}

			break;
	}
	
	alert('Elegiste ir a ' + destinoIngresado + ' en el ' + estacionIngresada + ' lo cual sale $' +  precio)

}//FIN DE LA FUNCIÓN//FIN DE LA FUNCIÓN