function mostrar()
{
	var contador;
	var respuesta;
	var numeroIngresado;
	var edad;

	contador=0;//1
	while(contador<5)//2
	{
		console.log("la iteracion es #"+contador);
		contador++;//3
		//console.log("la iteracion es #"+contador);
	}
	// siempre sabemos el valor del contador


	//contador=0;
	for(contador=0;contador<5;contador++)
	{
		console.log("la iteracion es #"+(contador+30));
		//console.log("la iteracion es #"+contador);
	}
	// siempre sabemos el valor del contador

	respuesta="si";
	while(respuesta=="si")
	{
		respuesta=prompt("desea continuar");
	}

	// no se  hace
	/*
	for(respuesta="si";respuesta=="si";respuesta=prompt("desea continuar"))
	{
		
	}
	*/



	/*aca el continue*/
	for(contador=0;contador<5 ;contador++)
	{
		//break;
		console.log("la iteracion es #"+(contador+30));
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("ingrese numero");
			numeroIngresado=parseInt(numeroIngresado);
		}
		
		/*
		if("logica necesaria")
		{
			break;
			//continue;
		}
		if("lógica necesaria")
		{
			//break;
			continue;
		}
		*/


		console.log("la iteracion es #"+contador);
		edad=prompt("ingrese numero");
		edad=parseInt(edad);
		while(isNaN(edad)==true)
		{
			edad=prompt("ingrese numero");
			edad=parseInt(edad);
		}

	}
	//aca viene el break;

}
