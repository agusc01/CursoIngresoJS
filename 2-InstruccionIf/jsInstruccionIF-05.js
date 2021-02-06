/* 

Al ingresar una edad solo debemos informar si la persona NO es adolescente.

*/


function mostrar() {

	var edad;

	edad=document.getElementById('txtIdEdad').value;

	/*
	if(edad<18) 
	{
		if(edad>12)
		{

		}
	} 
	else
	{
		alert("No sos un adolescente");
	}
	*/

	// if(!(edad<18 && edad>12))
	// {
	// 	alert("No sos un adolescente");
	// }

	if(edad>17||edad<13)
	{
		alert("No sos un adolescente");
	}



}//FIN DE LA FUNCIÓN