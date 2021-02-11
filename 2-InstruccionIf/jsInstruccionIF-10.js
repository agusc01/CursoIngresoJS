/*
Alumno: Cacciatori, Agustín

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/


function mostrar() 
{
	var resultadoExamen;
	var mensaje;
	resultadoExamen=Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10


	if(resultadoExamen>8)
	{
		mensaje="EXCELENTE: "+resultadoExamen;
	} 
	else
	{
		if(resultadoExamen>3)
		{
			mensaje="APROBÓ: "+resultadoExamen;
		}
		else
		{
			mensaje="Vamos, la proxima se puede: "+resultadoExamen;
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN