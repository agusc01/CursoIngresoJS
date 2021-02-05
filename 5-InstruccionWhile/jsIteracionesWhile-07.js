/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == 'si') {

		var numero = parseInt(prompt(contador + "- ingrese un número: "));
		acumulador = acumulador + numero;
		respuesta = prompt("Si quiere seguir tipiar 'si'");
		contador++;

	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN