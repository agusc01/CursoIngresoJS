/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
    alert("Inicio de Juego!, Número secreto creado");
    numeroSecreto=Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
    //alert(numeroSecreto);
    console.log(numeroSecreto);
	contadorIntentos=0;

}

function verificar()
{
	var numeroIngresado;
    numeroIngresado=document.getElementById("txtIdNumero").value;
    numeroIngresado=parseInt(numeroIngresado);
    contadorIntentos++;
    document.getElementById("txtIdIntentos").value=contadorIntentos;

    if(numeroIngresado==numeroSecreto)
    {
        switch(contadorIntentos)
		{
			case 1:
				alert("usted es un Psíquico");
				break
			case 2:
				alert("excelente percepción");
				break
			case 3:
				alert("Esto es suerte");
				break;
			case 4:
				alert("Excelente técnica")
				break;
			case 5:
				alert("usted está en la media");
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("falta técnica");
				break;
			default:
				alert("afortunado en el amor!!");
		}
    }
    else
    {
        if(numeroIngresado<numeroSecreto)
        {
            alert("falta…");
        }
        else
        {
            alert("se pasó…");
        }
    }
        
}