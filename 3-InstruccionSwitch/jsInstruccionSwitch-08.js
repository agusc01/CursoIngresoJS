/*

Alumno: Cacciatori, Agustín
8)
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

*/


function mostrar()
{
	var destinoIngresado;
	var temperatura;
	var mensaje;
	destinoIngresado=document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			temperatura="FRIO";
			break;
		/* 
		case "Cataratas":
		case "Mar del plata":
		 */
		default:
			temperatura="CALOR";
			break;

	} 

	mensaje="En "+destinoIngresado+" hace "+temperatura;

	alert(mensaje);


}//FIN DE LA FUNCIÓN//FIN DE LA FUNCIÓN