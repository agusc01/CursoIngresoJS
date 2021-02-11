/*

en el ejercicio 10 de entradas y salidas, se debe pedir el nombre del producto, el importe y también se debe pedir el porcentaje de descuento al usuario, mostrar el mensaje "usted compro un XXXXX con XX % de descuento, el precio final es XXXXX"

*/

function mostrarAumento() {

	var producto;
	var importe;
	var descuento;
	var precioConDescuento;
	var mensaje;

	producto=prompt("Ingrese el nombre del producto: ");
	descuento=prompt("Ingrese el porcetaje de descuento: ");

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	precioConDescuento=importe*((100 - descuento )/100);

	mensaje="Usted compro un "+producto+" con "+descuento+" % de descuento, el precio final es "+precioConDescuento;

}

