/*

Alumno: Cacciatori, Agustín

Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	var destinoIngresado;
	destinoIngresado=document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			puntoCardinal="Oeste";
			break;
		case "Cataratas":
			puntoCardinal="Norte";
			break;
		case "Mar del plata":
			puntoCardinal="Este";
			break;
		case "Ushuaia":
			puntoCardinal="Sur";
			break;
	} 

	alert(destinoIngresado+" esta en el "+puntoCardinal);


}//FIN DE LA FUNCIÓN