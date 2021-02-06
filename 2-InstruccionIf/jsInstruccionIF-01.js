/*
function mostrar() 
{
	
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad == 15)
	{
		alert("Niña bonita");
	}


}//FIN DE LA FUNCIÓN

*/


function mostrar() 
{
	
	var edad;
	var valorDeVerdad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	console.log("la edad ingresada es :"+edad);

	/* if(edad==15)
	{
		alert("Niña bonita");
	} */

	valorDeVerdad=edad==15;
	console.log(valorDeVerdad);


  if(valorDeVerdad)
  {
    alert("verdadero");
  }
  else
  {
    alert("falso");
  }

	/* 
	verdaderos:
	1
	"1"
	"0"
	"lalala"
	"cualquier texto"
	true

	falsos:
	0
	false

	*/

}//FIN DE LA FUNCIÓN