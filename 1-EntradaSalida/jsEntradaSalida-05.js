/*

Alumno: CACCIATORI AGUSTÍN

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	

*/

function mostrar() {	

	// Creo las variables
	var nombreIngresado;
	var edadIngresada;
	var mensaje;

	// Tomo los varoles que estan dentro de los inputs y los pongo en cada variable creada previamente
	nombreIngresado=document.getElementById('txtIdNombre').value;
	edadIngresada=document.getElementById('txtIdEdad').value;

	// Armo el mensaje que imprimiría en el futuro
	mensaje='Usted se llama "' + nombreIngresado + '"' + ' y tiene "' + edadIngresada + '" años';

	// Hago un alert para mostrar los valores que previamente saque de los inputs
	alert(mensaje);
	console.log(mensaje);
}


