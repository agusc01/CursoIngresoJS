function mostrar() {
	//tomo el mes
	var mesDelAño;
	mesDelAño=document.getElementById('txtIdHora').value;
	switch(mesDelAño)
	{
		case 'Enero':
			break;
		case 'Febrero':
			break;
		case 'Marzo':
		case 'Abril':
		case 'Mayo':
		case 'Junio':
			alert("Falta para el invierno");
			break;
		case 'Julio':
		case 'Agosto':
			alert("Abrigate que hace frio");
			break;
		case 'Septiembre':
		case 'Obtubre':
		case 'Noviembre':
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
		case 'Diciembre':
			break;
		default:																		
	}
	}//FIN DE LA FUNCIÓN