/* 

Alumno: Cacciatori, Agustín
4)
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.

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
			mensaje="si tiene 28 días";
			break;

		case 'Abril':
		case 'Junio':
		case 'Septiembre':
		case 'Noviembre':
			mensaje="si tiene 30 días";
			break;		
		
		/* 
		case 'Enero':
		case 'Marzo':
		case 'Mayo':
		case 'Julio':
		case 'Agosto':
		case 'Octubre':
		case 'Diciembre': 
		*/

		default:
			mensaje="si tiene 31 días";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN