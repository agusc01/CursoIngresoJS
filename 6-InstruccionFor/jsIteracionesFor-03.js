/*
Alumno:Cacciatori, Agustín
3)
Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{
	var contador;
	var repeticiones;

	repeticiones=prompt("ingrese el número de repeticiones: ");
	repeticiones=parseInt(repeticiones);
	while(isNaN(repeticiones)==true || repeticiones<1)
	{
		repeticiones=prompt("Erorr, ingrese el número de repeticiones: ");
		repeticiones=parseInt(repeticiones);
	}

	for (contador=0;contador<repeticiones;contador++)
	{
		console.log("Hola UTN FRA");		
	}
	alert("ver el resultado en la consola");


}//FIN DE LA FUNCIÓN