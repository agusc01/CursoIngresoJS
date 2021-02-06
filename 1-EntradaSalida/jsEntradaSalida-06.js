/*

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"

*/
function sumar() {
	
	// creo las variables
	var numeroUno;
	var numeroDos;
	var suma;
	var mensaje

	// tomo los valores del los inputs
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	// paso de "string" en "int" con la función parseInt
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	// hago la suma de los números
	suma=numeroUno + numeroDos;

	// creo la estructura del mensaje
	mensaje='la suma es de ' + numeroUno + ' + ' + numeroDos + " = " + suma;

	// muestro el mensaje previmente creado
	alert(mensaje);

}

