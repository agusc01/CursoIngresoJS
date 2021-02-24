function mostrar()
{
  //25 minutos en el código empiezo
  //?? minutos en el testeo
  //creación de variables
  //generales
  var tipoIngresado;//arena || cal || cemento
  var cantidadIngresada;//>0
  var precioIngresado;//>0
  //para el while
  var seguir;
  //para el descuento
  var descuento;
  var sumatoriaDeCantidades;
  //para impresión de mensajes
  var mensaje;
  //punto A
  var precioNeto;
  //punto B
  var precioConDescuento;
  //punto D
  var contadorBolsasArena;
  var contadorBolsasCal;
  var contadorBolsasCemento;
  var nombreTipoMayorCantidad;
  var cantidadTipoMayorCantidad;
  //punto F
  var nombreTipoMascaro;
  var precioTipoMasCaro;
  var banderaTipoMasCaro;
  
  //inicialización
  //para el while
  seguir="si";
  //para el descuento
  descuento=0;
  sumatoriaDeCantidades=0;
  //punto A
  precioNeto=0;
  //punto B
  precioConDescuento=0;
  //pundo D
  contadorBolsasArena=0;
  contadorBolsasCal=0;
  contadorBolsasCemento=0;
  //punto F
  banderaTipoMasCaro=true;


  while(seguir="si")
  {
    tipoIngresado=prompt("Ingrese un tipo (arena | cal | cemento): ");
    while(isNaN(tipoIngresado)==false || (tipoIngresado!="arena" && tipoIngresado!="cal" && tipoIngresado!="cemento"))
    {
      tipoIngresado=prompt("Error, ingrese un tipo (arena | cal | cemento): ");
    }

    cantidadIngresada=prompt("Ingrese la cantidad (mayor a cero): ");
    cantidadIngresada=parseInt(cantidadIngresada);
    while(isNaN(cantidadIngresada)==true || cantidadIngresada<1)
    {
      cantidadIngresada=prompt("Error, ngrese la cantidad (mayor a cero): ");
      cantidadIngresada=parseInt(cantidadIngresada);
    }

    precioIngresado=prompt("Ingrese el precio (mayor a cero): ");
    precioIngresado=parseInt(precioIngresado);
    while(isNaN(precioIngresado)==true || precioIngresado<1)
    {
      precioIngresado=prompt("Error, ngrese el precio (mayor a cero): ");
      precioIngresado=parseInt(precioIngresado);
    }

    sumatoriaDeCantidades=sumatoriaDeCantidades+cantidadIngresada;

    //punto A
    precioNeto=precioNeto+(cantidadIngresada*precioIngresado);

    //punto D
    switch(tipoIngresado)
    {
      case 'arena':
        contadorBolsasArena=contadorBolsasArena+cantidadIngresada;
        break;
      case 'cal':
        contadorBolsasCal=contadorBolsasCal+cantidadIngresada;
        break;
      // case 'cemento':
      default:
        contadorBolsasCemento=contadorBolsasCemento+cantidadIngresada;
        break;
    }

    //punto F
    if(banderaTipoMasCaro==true || precioIngresado>precioTipoMasCaro)
    {
      banderaTipoMasCaro=false;
      precioTipoMasCaro=precioIngresado;
      nombreTipoMascaro=tipoIngresado;
    }


    seguir=prompt("tipear 'si' para seguir: "); //último renglón del while
    
  }//fin while(seguir="si") ... bucle principal

  if(sumatoriaDeCantidades>10)
  {
    descuento=-15;
    if(sumatoriaDeCantidades>30)
    {
      descuento=-25;
    }
  }

  //punto A
  mensaje="Punto A: El precio neto a pagar es $"+precioNeto;
  alert(mensaje);

  //punto B
  if(descuento>0)
  {
    precioConDescuento=precioNeto*((100+descuento)/100);
    mensaje="Punto B: El precio con descuento es $"+precioConDescuento;
  }
  else
  {
    mensaje="Punto B: No se aplico ningún descuento."
  }
  alert(mensaje);

  //punto D
  if(contadorBolsasArena>contadorBolsasCal && contadorBolsasArena>contadorBolsasCemento)
  {
    nombreTipoMayorCantidad="la arena";
    cantidadTipoMayorCantidad=contadorBolsasArena;
  }
  else
  {
    if(contadorBolsasCal>contadorBolsasCemento)
    {
      nombreTipoMayorCantidad="la cal";
      cantidadTipoMayorCantidad=contadorBolsasCal;
    }
    else
    {
      nombreTipoMayorCantidad="el cemento";
      cantidadTipoMayorCantidad=contadorBolsasCemento;
    }
  }

  mensaje="Punto D: El producto con más cantidad de bolsas fue "+mensaje+", con una cantidad de "+cantidadTipoMayorCantidad;
  alert(mensaje);

  //punto F
  mensaje="El tipo más caro es"+nombreTipoMascaro;
  alert(mensaje);





}
