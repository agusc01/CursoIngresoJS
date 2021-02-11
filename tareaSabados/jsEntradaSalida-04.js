/* 
Debemos lograr tomar un dato por 'PROMPT'  descripción y precio de un producto (por id) el programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%
*/
function mostrar() 
{

	var descripcion;
    var precio;
    var precioConAumento;
    var aumento;
    aumento=30;
    
    descripcion=prompt("Ingrese la descripción: ");
    precio=document.getElementById('txtIdNombre').value;
    precio=parseInt(precio);

    precioConAumento=precio*((100+aumento))/100;

	mensaje="La descripción es: " + descripcion+" y tiene un valor de "+precioConAumento;

    alert(mensaje);
}

