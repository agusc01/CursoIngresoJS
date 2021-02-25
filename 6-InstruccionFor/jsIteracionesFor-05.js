/*
Alumno: Cacciatori, Agustín
5)
Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/


function mostrar()
{
	var contador;
	var corte;

	for(contador=1;contador>0;contador++)
	{
		alert("ciclo " + contador );
		corte=prompt("Si queres terminar ingresa un 9");
		corte=parseInt(corte);
		if(corte==9)
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN