/*

Alumno: Cacciatori, Agustín
10)
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche

*/


function mostrar()
{

	var destinoIngresado;
	var estacionIngresada;
	
	destinoIngresado=document.getElementById("txtIdDestino").value;
	estacionIngresada=document.getElementById("txtIdEstacion").value;
	
	switch(estacionIngresada)
	{
		case 'Invierno':
			switch(destinoIngresado)
			{
				case 'Bariloche':
					alert("Se viaja");
					break;

				default:
				// case 'Cataratas':
				// case 'Mar del plata':
				// case 'Cordoba':
					alert("No se viaja");
					break;
			}
			break;
		case 'Verano':
			switch(destinoIngresado)
			{
				case 'Cataratas':
				case 'Mar del plata':				
					alert("Se viaja");
					break;
				default:
				// case 'Bariloche':
				// case 'Cordoba':
					alert("No se viaja");
					break;
			}
			break;
		case 'Primavera':
			switch(destinoIngresado)
			{
				case 'Bariloche':
					alert("No se viaja");
					break;
				default:
				// case 'Cataratas':
				// case 'Mar del plata':
				// case 'Cordoba':
					alert("Se viaja");
					break;
			}
			break;
		default:
		// case 'Otoño':
			alert("Se viaja");
			break;
	}
	
	menasje='Elegiste ir a '+destinoIngresado+' en el '+estacionIngresada+' lo cual sale $'+precio;

	alert(menasje);

}//FIN DE LA FUNCIÓN//FIN DE LA FUNCIÓN