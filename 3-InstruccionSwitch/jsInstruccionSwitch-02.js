/*

Alumno: Cacciatori, Agustín
2)
Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."

ACLARACIÓN: tomamos a Julio y Agosto como los meses de Invierno.


*/


function mostrar() 
{
	var mesDelAño;
	var mensaje;
	mesDelAño=document.getElementById('txtIdMes').value;
	switch(mesDelAño)
	{

		// ANTES DEL INVIERNO
		case 'Enero':
		case 'Febrero':
		case 'Marzo':
		case 'Abril':
		case 'Mayo':
		case 'Junio':
			mensaje="Falta para el invierno";
			break;

		// DURANTE EL INVIERNO
		case 'Julio':
		case 'Agosto':
			mensaje="Abrigate que hace frio";
			break;

		//DESPUES DEL INVIERNO
		default:
			mensaje="Ya pasamos el frio, ahora calor!!!";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN