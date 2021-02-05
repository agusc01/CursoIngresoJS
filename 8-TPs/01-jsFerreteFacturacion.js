/*

Alumno: Cacciatori, Agustín

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

*/
function Sumar () {
  var precioUno;
  var precioDos;
  var precioTres;
  var resultado;
  var mensaje;

  precioUno = document.getElementById('txtIdPrecioUno').value;
  precioUno = parseInt(precioUno);

  precioDos = document.getElementById('txtIdPrecioDos').value;
  precioDos = parseInt(precioDos);

  precioTres = document.getElementById('txtIdPrecioTres').value;
  precioTres = parseInt(precioTres);

  resultado = precioUno + precioDos + precioTres;

  mensaje = "La suma de los tres precio es " + resultado;

  alert(mensaje);

}
function Promedio () {

  var precioUno;
  var precioDos;
  var precioTres;
  var resultado;
  var mensaje;

  precioUno = document.getElementById('txtIdPrecioUno').value;
  precioUno = parseInt(precioUno);

  precioDos = document.getElementById('txtIdPrecioDos').value;
  precioDos = parseInt(precioDos);

  precioTres = document.getElementById('txtIdPrecioTres').value;
  precioTres = parseInt(precioTres);

  resultado = precioUno + precioDos + precioTres;

  resultado = resultado / 3;

  mensaje = "El promedio de los tres precio es " + resultado;

  alert(mensaje);

}
function PrecioFinal () {

  var precioUno;
  var precioDos;
  var precioTres;
  var resultado;
  var mensaje;
  var IVA = 21;

  precioUno = document.getElementById('txtIdPrecioUno').value;
  precioUno = parseInt(precioUno);

  precioDos = document.getElementById('txtIdPrecioDos').value;
  precioDos = parseInt(precioDos);

  precioTres = document.getElementById('txtIdPrecioTres').value;
  precioTres = parseInt(precioTres);

  resultado = precioUno + precioDos + precioTres;

  resultado = resultado * ((100 + IVA) / 100 );

  mensaje = "El precio final de los tres más el IVA de "+ IVA + " es " + resultado;

  alert(mensaje);

}