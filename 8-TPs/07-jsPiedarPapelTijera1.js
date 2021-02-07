/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	
    eleccionMaquina=Math.floor(Math.random() * 3) + 1;  // returns a random integer from 1 to 3
    console.log(eleccionMaquina);
    switch(eleccionMaquina)
    {
        case 1:
            console.log("piedra");
            break;
        case 2:
            console.log("papel");
            break;
        case 3:
            console.log("tijera")
    }

}//FIN DE LA FUNCIÓN


function piedra()
{
	switch(eleccionMaquina)
    {
        case 1:
            alert("empató");
            break;
        case 2:
            alert("perdió");
            break;
        case 3:
            alert("ganó");
    }
}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina)
    {
        case 1:
            alert("ganó");
            break;
        case 2:
            alert("empató");
            break;
        case 3:
            alert("perdió");
    }
}//FIN DE LA FUNCIÓN
function tijera()
{
    switch(eleccionMaquina)
    {
        case 1:
            alert("perdió");
            break;
        case 2:
            alert("ganó");
            break;
        case 3:
            alert("empató");            
    }
}//FIN DE LA FUNCIÓN