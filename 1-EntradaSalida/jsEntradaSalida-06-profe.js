/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno txtIdNumeroDos

	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;
	//ingreso
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	numeroDos=parseInt(numeroDos);
	numeroUno = parseInt(numeroUno);
	//fin ingreso
	//inicio operar
	resultado = numeroDos+numeroUno;
	mensaje = "la suma es : " + resultado;

	//mostrar
	//alert("la suma es : "+(parseInt(document.getElementById('txtIdNumeroUno').value)+parseInt(document.getElementById('txtIdNumeroDos').value)));
	alert(mensaje);

}