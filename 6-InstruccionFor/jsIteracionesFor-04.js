/*
Alumno:Cacciatori, Agustín
4)
Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/

function mostrar()
{
	var repeticiones;
	var contador;

	repeticiones=prompt("ingrese el número de repeticiones: ");
	repeticiones=parseInt(repeticiones);
	while(isNaN(repeticiones)==true || repeticiones<1)
	{
		repeticiones=prompt("Erorr, ingrese el número de repeticiones: ");
		repeticiones=parseInt(repeticiones);
	}

	repeticiones=repeticiones-2;
	
	for(contador=0;contador>-1;contador++)//bucle infinito
	{

		console.log("ciclo #"+(contador+1));
		if(contador>repeticiones)
		{
			break;
		}
	}

	alert("ver la consola");

}//FIN DE LA FUNCIÓN