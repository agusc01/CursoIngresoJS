/*

Alumno: Cacciatori, Agustín
3)
Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más día


*/

function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;
	mesDelAño=document.getElementById('txtIdMes').value;
	switch(mesDelAño)
	{
		case 'Febrero':
			mensaje="Este mes no tiene más de 29 días";
			break;

		default:
			mensaje="Este mes tiene 30 o más días";
			break;										
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN