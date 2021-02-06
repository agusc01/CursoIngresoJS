/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var resultado;
var numeroUno;
var numeroDos;



function sumar() {	
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno + numeroDos;
	alert("la suma es: "+ resultado);	
	borrar();
}

function restar() {
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno - numeroDos;
	alert("la resta es: "+ resultado);	
	borrar();
}

function multiplicar() { 
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno * numeroDos;
	alert("la multiplicación es: "+ resultado);	
	borrar();
}

function dividir() {
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno / numeroDos;
	alert("la división es: "+ resultado);	
	borrar();
}

function borrar() {
	document.getElementById('txtIdNumeroUno').value="";
	document.getElementById('txtIdNumeroDos').value="";
}