/*

Alumno: Cacciatori, Agustín

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

*/

function mostrarAumento() {

	var sueldo;
	var resultado;
	var aumento = 10;

	sueldo = document.getElementById('txtIdSueldo').value;

	sueldo = parseInt(sueldo);

	resultado = sueldo * ((100 + aumento)/100);

	document.getElementById('txtIdResultado').value = resultado;

}

