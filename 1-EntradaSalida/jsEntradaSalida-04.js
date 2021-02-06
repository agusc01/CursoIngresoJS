/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() 
{

	//Creo la variable
	var nombreIngresado;

	//uso la función "prompt" para tomar un mesaje y ese mensaje lo guardo en la variable "nombreIngresado"
	nombreIngresado=prompt("ingrese su nombre por favor: ")

	// creo una variable en dónde guardo una cadena de texto
	mensaje= 'Su nombre es : "' + nombreIngresado + '"';

	// agarro y modifico lo que tiene el input adentro
	document.getElementById('txtIdNombre').value=mensaje;
}

