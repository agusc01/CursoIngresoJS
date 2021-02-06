/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/


function mostrar() 
{
	var resultadoExamen;
	resultadoExamen=Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

	if(resultadoExamen>8)
	{
		console.log("EXCELENTE: "+resultadoExamen)
	} 
	else
	{
		if(resultadoExamen>3)
		{
			console.log("APROBÓ: "+resultadoExamen);
		}
		else
		{
			console.log("Vamos, la proxima se puede: "+resultadoExamen);
		}
	}
}//FIN DE LA FUNCIÓN