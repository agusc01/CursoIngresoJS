function mostrar() {
	//tomo el mes
	var mesDelAño;
	mesDelAño=document.getElementById('txtIdMes').value;


	if(mesDelAño=="Enero")
	{
		alert("Que comiences bien el año!!");
	}
	else
	{
		if(mesDelAño=="Marzo")
		{
			alert("A clases!!!");
		}
		else
		{
			if(mesDelAño=="Julio")
			{
				alert("Se vienen las vacaciones");
			}
			else
			{
				if(mesDelAño=="Diciembre")
				{
					alert("Felices fiestas");
				}
			}			
		}
		
	}




/*

	switch(mesDelAño)
	{
		case 'Enero':
			alert("Que comiences bien el año!!");
			break;

		case 'Febrero':
			break;

		case 'Marzo':
			alert("A clases!!!");
			break;

		case 'Abril':
			break;

		case 'Mayo':
			break;

		case 'Junio':
			break;

		case 'Julio':
			alert("Se vienen las vacaciones");
			break;

		case 'Agosto':
			break;

		case 'Septiembre':
			break;

		case 'Octubre':
			break;

		case 'Noviembre':
			break;

		case 'Diciembre':
			alert("Felices fiestas");
			break;

		default:																		
	}
*/

}//FIN DE LA FUNCIÓN