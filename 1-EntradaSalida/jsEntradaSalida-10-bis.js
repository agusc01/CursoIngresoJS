/*

Alumno: Cacciatori, Agustín

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

10 bis: hacer el descuento dinámico, pedirlo al usuario

*/

function mostrarAumento() {

  var descuento;
  var importe;
  var resultado;

  descuento=prompt("Ingrese el porcentaje del descuento");

  descuento=parseInt(descuento);

  importe=document.getElementById('txtIdImporte').value;

  importe=parseInt(importe);

  resultado=importe * ((100 - descuento )/100);

  document.getElementById('txtIdResultado').value=resultado;

}

