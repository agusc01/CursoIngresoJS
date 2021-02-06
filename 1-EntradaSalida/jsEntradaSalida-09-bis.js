/*

Alumno: Cacciatori, Agustín

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

9 bis: hacer el descuento dinámico, pedirlo al usuario

*/

function mostrarAumento() {

  var sueldo;
  var resultado;
  var aumento;

  aumento=prompt("Ingrese el porcentaje del aumento");

  aumento=parseInt(aumento);

  sueldo=document.getElementById('txtIdSueldo').value;

  sueldo=parseInt(sueldo);

  resultado=sueldo * ((100 + aumento)/100);

  document.getElementById('txtIdResultado').value=resultado;

}

