/*

Alumno: Cacciatori, Agustín

Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro

*/


function mostrar()
{
  //creación de variables
  //general
  var producto; //arena,cal, cemento
  var cantidad; //más de cero
  var precio; //más de cero
  var descuento;
  var seguir;
  //impresión
  var mensaje;
  //punto A
  var totalNeto;
  //punto B
  var totalDescuento;
  //punto D
  var cantidadArena;
  var cantidadCal;
  var cantidadCemento;
  var productoMasVendido;
  //punto F
  var productoMasCaro;
  var precioMasCaro;
  var banderaPrecioMasCaro;

  //inicialización de variables
  seguir="si";
  descuento=0;
  totalNeto=0;
  totalDescuento=0;
  cantidadArena=0;
  cantidadCal=0;
  cantidadCemento=0;
  banderaPrecioMasCaro=true;

  while(seguir=="si")
  {
    producto=prompt("Ingrese el producto (arena | cal | cemento) ");
    while(producto!="arena" && producto!="cal" && producto!="cemento")
    {
      producto=prompt("Error, ingrese el producto (arena | cal | cemento) : ");
    }
  
    cantidad=prompt("Ingrese cantidad de bolsas: ");
    cantidad=parseInt(cantidad);
    while(isNaN(cantidad)==true || cantidad<1)
    {
      cantidad=prompt("Error, inngrese cantidad de bolsas: ");
      cantidad=parseInt(cantidad);
    }
  
    precio=prompt("Ingrese el precio por bolsa: ");
    precio=parseInt(precio);
    while(isNaN(precio)==true || precio<1)
    {
      precio=prompt("Error, ingrese el precio por bolsa: ");
      precio=parseInt(precio);
    }
  
    if(cantidad>30)
    {
      descuento=25;
    }
    else
    {
      if(cantidad>10)
      {
        descuento=15;
      }
      else //cantidad<=10
      {
        descuento=0;
      }
    }

    //punto A
    totalNeto=totalNeto+(precio*cantidad);

    //punto B
    totalDescuento=totalDescuento+(precio*cantidad*((100-descuento)/100));

    //punto D
    switch(producto)
    {
      case "arena":
        cantidadArena=cantidadArena+cantidad;
        break;
      case "cal":
        cantidadCal=cantidadCal+cantidad;
        break;
      // case "cemento":
      default: //este default funcionaría si tengo bien la validación del producto
        cantidadCemento=cantidadCemento+cantidad;
        break;
    }


    //punto F
    if(banderaPrecioMasCaro==true)
    {
      banderaPrecioMasCaro=false;

      precioMasCaro=precio;
      productoMasCaro=producto;
    }
    else
    {
      if(precio>precioMasCaro)
      {
        productoMasCaro=producto;
        precioMasCaro=precio;
      }
    }



    seguir=prompt("Ingrese 'si' para seguir: ");

  }//fin while(seguir=="si") ... bucle pricipal !



  //punto A
  mensaje="Punto A : Usted debe pagar un neto de $"+totalNeto;
  alert(mensaje);

  //punto B
  if(totalDescuento!=totalNeto)
  {
    mensaje="Punto B : Usted deber pagar $"+totalDescuento+" ,esto contempla el descuento ";
  }
  else
  {
    mensaje="Punto B : Usted no recibio ningún tipo de descuento."
  }
  alert(mensaje);

  //punto D
  if(cantidadArena>cantidadCal)
  {
    if(cantidadArena>cantidadCemento)
    {
      //arena
      //arena>cal && arena>cemento
      productoMasVendido="arena, con "+cantidadArena+" bolsas";
    }
    /*else
    {
      //cemento
      //arena>cal && cemento>=arena <=> cemento>=arena>cal
    }*/
  }
  else
  {
    if(cantidadCal>cantidadCemento)
    {
      //cal
      //cal>=arena && cal>cemento
      productoMasVendido="cal, con"+cantidadCal+" bolsas";
    }
    else
    {
      //cemento
      //cal>=arena && cemento>=cal <=> cemento>=cal>=arena
      productoMasVendido="cemento, con"+cantidadCemento+" bolsas";
    }
  }//fin if(cantidadArena>cantidadCal) ... esto es para encontrar un máximo entre los 3 productos

  mensaje="Punto D: El producto con más cantidad de bolsas de compro fue "+productoMasVendido;
  alert(mensaje);

  //punto F
  mensaje="Punto F: El tipo de más caro es: "+productoMasCaro;
  alert(mensaje);

}


/*

=======TEST=========
ENTRADAS...
arena
30u
10$

cal
34u
7$

cal
100u
24$

cemento
75u
10$

arena
80u
8$

cemento
60u
$11

arena
5
$5

SALIDAS...
Punto A : Usted debe pagar un neto de $5013
Punto B : Usted deber pagar $3796 ,esto contempla el descuento 
Punto D: El producto con más cantidad de bolsas de compro fue cemento, con 135 bolsas
Punto F: El tipo de más caro es: cal
*/