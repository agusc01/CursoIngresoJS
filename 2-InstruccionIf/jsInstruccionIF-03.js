/*

Alumno: Cacciatori Agustín

Ejercicio 3 del "if"
Enunciado:
Al ingresar una edad debemos informar si la persona "es mayor de edad", sino informar que "es un menor de edad".

*/



function mostrar() 
{

	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	/*
	if(edad > 17) 
	{
		alert("es mayor de edad");
	}

	if(edad < 18) 
	{
		alert("es menor de edad");
	}
	*/

	if(edad > 17) 
	{
		alert("es mayor de edad");
	}

	else
	{
		alert("es menor de edad");
	}


}//FIN DE LA FUNCIÓN