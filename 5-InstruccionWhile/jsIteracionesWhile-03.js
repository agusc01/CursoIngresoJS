/*

Alumno: Cacciatori, Agustín

al presionar el botón pedir la CLAVE (ayuda: es utn750)

*/
function mostrar()
{
	var claveIngresada;
	claveIngresada=prompt("Ingrese la contraseña: ");

	while(claveIngresada!='utn750')
	{
		claveIngresada=prompt("Incorrecto!, Ingrese la contraseña: ");
	}
	// el siguiente alert solo se ejecuta si salis del while
	// y solo podes salir de while si pones bien la contraseña
	alert("Bienvenido !");

}//FIN DE LA FUNCIÓN
