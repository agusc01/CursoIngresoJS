function mostrar()
{
  //creación de variables
  //general
  var producto; //arena,cal, cemento
  var cantidad;
  var precio; //más de cero
  var descuento;
  var seguir;
  //impresión
  var mensaje;
  //punto A
  var totalNeto;
  //punto B
  var totalDescuento;
  //punto C
  var cantidadArena;
  var cantidadCal;
  var cantidadCemento;
  var productoMasVendido;
  //punto D
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
    producto=prompt("Ingrese el producto: ");
    while(producto!="arena" && producto!="cal" && producto!="cemento")
    {
      producto=prompt("Error, ingrese el producto: ");
    }
  
    cantidad=prompt("Ingrese cantidad de bolsas: ");
    cantidad=parseInt(cantidad);
  
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
      descuento=15;
    }

    //punto A
    totalNeto=totalNeto+precio*cantidad;

    //punto B
    totalDescuento=totalDescuento+(precio*cantidad*((100-descuento)/100));

    //punto C
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


    //punto D
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
  mensaje="Punto B : Usted deber pagar $"+totalDescuento+" ,esto contempla el descuento "
  alert(mensaje);

  //punto C
  if(cantidadArena>cantidadCal)
  {
    if(cantidadArena>cantidadCemento)
    {
      //arena
      //arena>cal && arena>cemento
      productoMasVendido="arena";
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
      productoMasVendido="cal";
    }
    else
    {
      //cemento
      //cal>=arena && cemento>=cal <=> cemento>=cal>=arena
      productoMasVendido="cemento";
    }
  }//fin if(cantidadArena>cantidadCal) ... esto es para encontrar un máximo entre los 3 productos

  mensaje="El producto que más cantidad de bolsas de compro fue "+productoMasVendido;
  alert(mensaje);

  //punto D
  mensaje="El tipo de más caro es: "+productoMasCaro;
  alert(mensaje);

}


/*

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


$5013 neto
$3789.75 descuento (no es exacto porque uso enteros en lugar de flotantes)
cemento mas bolsas
cal mas caro

*/