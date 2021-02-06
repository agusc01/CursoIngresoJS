function mostrar() {
	//tomo el mes
	var mesDelAño;
	mesDelAño=document.getElementById('txtIdHora').value;
	switch(mesDelAño)
	{
		case 'Febrero':
			alert("el mes de " + mesDelAño + " tiene 28 días");
			break;
		case 'Enero':
		case 'Marzo':
		case 'Mayo':
		case 'Julio':
		case 'Agosto':
		case 'Octubre':
		case 'Diciembre':
			alert("el mes de " + mesDelAño + " tiene 31 días");
			break;
		case 'Abril':
		case 'Junio':
		case 'Septiembre':
		case 'Noviembre':
			alert("el mes de " + mesDelAño + " tiene 30 días");
			break;							
	}
}//FIN DE LA FUNCIÓN