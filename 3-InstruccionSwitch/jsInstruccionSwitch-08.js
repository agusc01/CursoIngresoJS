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


}//FIN DE LA FUNCIÓN//FIN DE LA FUNCIÓN