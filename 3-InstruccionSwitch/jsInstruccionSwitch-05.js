function mostrar() {
	//tomo la hora
	var horaDelDia = parseInt(txtIdHora.value);
	
	switch(horaDelDia){
		case 1:
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;																														
		case 12:
			break;
		case 13:
			break;
		case 14:
			break;
		case 15:
			break;
		case 16:
			break;
		case 17:
			break;
		case 18:
			break;
		case 19:
			break;
		case 20:
			break;
		case 21:
			break;
		case 22:
			break;
		case 23:
			break;
		case 24:
			break;
		default:
			alert("Error al ingresar el dato, fuera del rango o NO es numérico")
			txtIdHora.value = "";
	}
}//FIN DE LA FUNCIÓN