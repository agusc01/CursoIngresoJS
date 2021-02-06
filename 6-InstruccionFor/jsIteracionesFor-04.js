function mostrar(){
	var repeticiones;
	var contador;
	repeticiones=prompt("Ingrese la cantidad de repeticiones: ");
	repeticiones=parseInt(repeticiones);

	contador = 0;
	for(var i=1;i>0;i++)
	{
		contador++
		alert("ciclo " + contador + " de " + repeticiones);
		if(contador>=repeticiones)
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN