function mostrar(){
	var repeticiones = prompt("Ingrese la cantidad de repeticiones: ");

	var contador = 0;
	for(var i=1; i > 0; i++ ){
		contador++
		alert("ciclo " + contador + " de " + repeticiones);
		if(contador>=repeticiones){
			break;
		}
	}

}//FIN DE LA FUNCIÓN