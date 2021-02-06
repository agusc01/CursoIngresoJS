/*

Alumno: Cacciatori, Agustín

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	

bis : 
 se debe mostrar un mensaje :

 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan

*/


function mostrar() {	

	// Creo las variables
	var nombreIngresado;
	var edadIngresada;
	var mensaje;
	var apellidoIngresado;

	// Tomo los varoles que estan dentro de los inputs y los pongo en cada variable creada previamente
	nombreIngresado=document.getElementById('txtIdNombre').value;
	edadIngresada=document.getElementById('txtIdEdad').value;

	// Tomo el valor del apellido con la función "prompt"
	apellidoIngresado=prompt("Para finalizar le solicitamos que ingrese su apellido : ");

	// Armo el mensaje que imprimiría en el futuro
	mensaje=apellidoIngresado  + ", usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años";
	

	// Hago un alert y console.log para mostrar el mensaje previamente cargado
	alert(mensaje);
	console.log(mensaje);
}