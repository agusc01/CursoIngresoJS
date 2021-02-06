/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar() 
{
	//creo las variables
	var opcion;
	var edad;

	//guardo el valor del input de edad en la variable edad
	edad=document.getElementById("txtIdEdad").value;

	//guardo el valor de la opción elegida en la variable opcion
	opcion=document.getElementById("estadoCivil").value;

	//tomo una decisión
	if(edad<18 && opcion!="Soltero") 
	{
		alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN