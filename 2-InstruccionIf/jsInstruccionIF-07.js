/*

Alumno: Cacciatori, Agustín

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar() 
{
	var opcion;
	var edad;


	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	opcion=document.getElementById("estadoCivil").value;

	if(edad<18) 
	{
		if(opcion!="Soltero")
		{
			alert("Es muy pequeño para NO ser soltero");
		}
	}

}//FIN DE LA FUNCIÓN