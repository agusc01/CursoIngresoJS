function mostrar()
{

	for(var i=1;i>0;i++)
	{
		alert("ciclo " + i );
		corte=prompt("Si queres terminar ingresa un 9");
		corte=parseInt(corte);
		if(corte==9){
			break;
		}
	}

}//FIN DE LA FUNCIÓN