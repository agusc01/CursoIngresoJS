/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
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

	
	if(edad<18 && opcion!="Soltero") 
	{
		//NO HACER NADA
	}
	else
	{
		if(edad<18)
		{
			alert("Es soltero y no es menor");
		}
	}
}//FIN DE LA FUNCIÓN