function mostrar()
{
    // 13:20
    // 14:05
    // 45 minutos testeo pobre


    //  2- "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
    // tipo(limpieza , comestible , otros)solo estos tres tipos
    // nombre del producto
    // importe del producto (no mayor a 1000 pesos)
    // procedencia(importado, nacional, elaborado)
    // Peso (no mayor a 30 kilos)

    // informar SOLO SI HAY 
    // a) el NOMBRE del mas pesado de los comestibles
    // b) el NOMBRE del  mas caro de todos los productos
    // c) el NOMBRE del  mas barato de los elaborados
    // d)el tipo de mercadería  que mas aparece
    // e)el porcentaje de productos elaborados por sobre el total
    // f) el promedio de pesos por cada tipo ingresado

    //========================declaración===============================
    var seguir;//while
    var mensaje;//para imprimir mensajes;
    var tipoProductoIngresado;// tipo(limpieza , comestible , otros)solo estos tres tipos
    var nombreIngresado;// nombre del producto
    var precioIngresado;// importe del producto (no mayor a 1000 pesos)
    var procedenciaIngresado;// procedencia(importado, nacional, elaborado)
    var pesoIngresado;// Peso (no mayor a 30 kilos)

    // informar SOLO SI HAY 
    // a) el NOMBRE del mas pesado de los comestibles
    var nombreComestibleMasPesado;
    var pesoComestibleMasPesado;
    //nota uso el contador contadorComestible como bandera del punto d y f
    // b) el NOMBRE del  mas caro de todos los productos 
    var nombreMasCaro;
    var precioMasCaro;
    //nota uso el contador contadorDeProductosIngresados como bandera del punto e
    // c) el NOMBRE del  mas barato de los elaborados
    var precioMasBaratoDeElabarados;
    var nombreMasBaratoDeElaborados;
    //nota uso el contador contadorDeProductosElaborados del punto e como bandera
    // d)el tipo de mercadería  que mas aparece
    var contadorLimpieza;
    var contadorComestible;
    var contadorOtros;
    // e)el porcentaje de productos elaborados por sobre el total
    var contadorDeProductosIngresados;
    var contadorDeProductosElaborados;
    var porcentajeEleborados;
    // f) el promedio de pesos por cada tipo ingresado
    var acumuladorPrecioLimpieza;
    var acumuladorPrecioComestible;
    var acumuladorPrecioOtros;
    //nota uso los contadores del punto D
    var promedioPrecioLimpieza;
    var promedioPrecioComestible;
    var promedioPrecioOtros;


    //========================inicialización===============================
    seguir='si';
    // tipo(limpieza , comestible , otros)solo estos tres tipos
    // nombre del producto
    // importe del producto (no mayor a 1000 pesos)
    // procedencia(importado, nacional, elaborado)
    // Peso (no mayor a 30 kilos)

    // informar SOLO SI HAY 
    // a) el NOMBRE del mas pesado de los comestibles
    // b) el NOMBRE del  mas caro de todos los productos
    // c) el NOMBRE del  mas barato de los elaborados
    // d)el tipo de mercadería  que mas aparece
    contadorLimpieza=0;
    contadorComestible=0;
    contadorOtros=0;
    // e)el porcentaje de productos elaborados por sobre el total
    contadorDeProductosIngresados=0;
    contadorDeProductosElaborados=0;
    // f) el promedio de pesos por cada tipo ingresado
    acumuladorPrecioLimpieza=0;
    acumuladorPrecioComestible=0;
    acumuladorPrecioOtros=0;

    //=========================WHILE==============================
    while(seguir=='si')
    {

        // tipo(limpieza , comestible , otros)solo estos tres tipos
        tipoProductoIngresado=prompt("Ingrese el tipo (limpieza , comestible , otros)");
        while(isNaN(tipoProductoIngresado)==false || (tipoProductoIngresado!='limpieza' && tipoProductoIngresado!='comestible' && tipoProductoIngresado!='otros'))
        {
            tipoProductoIngresado=prompt("Error, Ingrese el tipo (limpieza , comestible , otros)");
        }

        // nombre del producto
        nombreIngresado=prompt("Ingrese el nombre del producto: ");
        while(isNaN(nombreIngresado)==false)
        {
            nombreIngresado=prompt("Error, Ingrese el nombre del producto: ");
        }

        // importe del producto (no mayor a 1000 pesos)
        precioIngresado=prompt("Ingrese el precio (1 a 1000) ");
        precioIngresado=parseFloat(precioIngresado);
        while(isNaN(precioIngresado)==true || precioIngresado<1 || precioIngresado>1000)
        {
            precioIngresado=prompt("Error, Ingrese el precio (1 a 1000) ");
            precioIngresado=parseFloat(precioIngresado);
        }


        // procedencia(importado, nacional, elaborado)
        procedenciaIngresado=prompt("Ingrese el tipo (importado, nacional, elaborado)");
        while(isNaN(procedenciaIngresado)==false || (procedenciaIngresado!='importado' && procedenciaIngresado!='nacional' && procedenciaIngresado!='elaborado'))
        {
            procedenciaIngresado=prompt("Error, Ingrese el tipo (importado, nacional, elaborado)");
        }

        // Peso (no mayor a 30 kilos)
        pesoIngresado=prompt("Ingrese el peso (1 a 30kg) ");
        pesoIngresado=parseFloat(pesoIngresado);
        while(isNaN(pesoIngresado)==true || pesoIngresado<1 || pesoIngresado>1000)
        {
            pesoIngresado=prompt("Error, Ingrese el peso (1 a 30kg) ");
            pesoIngresado=parseFloat(pesoIngresado);
        }

        // informar SOLO SI HAY 
        // a) el NOMBRE del mas pesado de los comestibles
        switch(tipoProductoIngresado)
        {
            case 'comestible':
                // a) el NOMBRE del mas pesado de los comestibles
                if(contadorComestible==0 || pesoIngresado>pesoComestibleMasPesado)
                {
                    pesoComestibleMasPesado=pesoIngresado;
                    nombreComestibleMasPesado=nombreIngresado;
                }

                // d)el tipo de mercadería  que mas aparece
                // f) el promedio de pesos por cada tipo ingresado
                acumuladorPrecioComestible=acumuladorPrecioComestible+precioIngresado;
                contadorComestible++;
                break;
            case 'limpieza':

                // d)el tipo de mercadería  que mas aparece
                // f) el promedio de pesos por cada tipo ingresado
                acumuladorPrecioLimpieza=acumuladorPrecioLimpieza+precioIngresado;
                contadorLimpieza++;
                break;
            case 'otros':

                // d)el tipo de mercadería  que mas aparece
                // f) el promedio de pesos por cada tipo ingresado
                acumuladorPrecioOtros=acumuladorPrecioOtros+precioIngresado;
                contadorOtros++;
                break;
        }




        // b) el NOMBRE del  mas caro de todos los productos
        if(contadorDeProductosIngresados==0 || precioIngresado>precioMasCaro)
        {
            nombreMasCaro=nombreIngresado;
            precioMasCaro=precioIngresado;
        }


        // c) el NOMBRE del  mas barato de los elaborados
        if(procedenciaIngresado=="elaborado")
        {
            if(contadorDeProductosElaborados==0 || precioIngresado<precioMasBaratoDeElabarados)
            {
                precioMasBaratoDeElabarados=precioIngresado;
                nombreMasBaratoDeElaborados=nombreIngresado;
            }

            // e)el porcentaje de productos elaborados por sobre el total
            contadorDeProductosElaborados++;

        }


        // d)el tipo de mercadería  que mas aparece (se hace fuera del while)


        // e)el porcentaje de productos elaborados por sobre el total
        contadorDeProductosIngresados++;



        seguir=prompt("para seguir presionar 'si' ");

    }//fin while(seguir=='si')



    //=========================mensajes==============================

    // informar SOLO SI HAY 
    // a) el NOMBRE del mas pesado de los comestibles
    if(contadorComestible!=0)
    {
        mensaje=" el NOMBRE del mas pesado de los comestibles es "+nombreComestibleMasPesado+" con un peso de "+pesoComestibleMasPesado+" kg";
    }
    else
    {
        mensaje="No se ingreso ningún comestible";
    }
    alert(mensaje);

    // b) el NOMBRE del  mas caro de todos los productos
    mensaje="el NOMBRE del  mas caro de todos los productos es "+nombreMasCaro;
    alert(mensaje);


    // c) el NOMBRE del  mas barato de los elaborados OJO TAMBIEN IMPRIMO EL PUNTO E
    if(contadorDeProductosElaborados!=0)
    {
        mensaje="el NOMBRE del  mas barato de los elaborados es "+nombreMasBaratoDeElaborados+", con un precio de $"+precioMasBaratoDeElabarados;
        // e)el porcentaje de productos elaborados por sobre el total
        porcentajeEleborados=(contadorDeProductosElaborados*100)/contadorDeProductosIngresados;
        mensaje=mensaje+"   -   el porcentaje de productos elaborados por sobre el total es "+porcentajeEleborados+"%";
    }
    else
    {
        mensaje="No se ingresaron elaborados";
    }
    alert(mensaje);


    // d)el tipo de mercadería  que mas aparece
    if(contadorComestible>contadorLimpieza && contadorComestible>contadorOtros)
    {
        //comestible
        mensaje="el tipo de mercadería  que mas aparece es comestible con "+contadorComestible;
    }
    else
    {
        if(contadorLimpieza>contadorOtros)
        {
            //limpieza
            mensaje="el tipo de mercadería  que mas aparece es limpieza con "+contadorLimpieza;
        }
        else
        {
            //otros
            mensaje="el tipo de mercadería  que mas aparece es 'otros' con "+contadorOtros;
        }
    }
    alert(mensaje);





    // f) el promedio de pesos por cada tipo ingresado
    if(contadorLimpieza!=0)
    {
        promedioPrecioLimpieza=acumuladorPrecioLimpieza/contadorLimpieza;
        mensaje="El promedio de Limpieza fue "+promedioPrecioLimpieza;
    }
    else
    {
        mensaje="No se ingreso limpieza";
    }
    if(contadorComestible!=0)
    {
        promedioPrecioComestible=acumuladorPrecioComestible/contadorComestible;
        mensaje=mensaje+ "   -  el promedio de comestibles fue "+promedioPrecioComestible;
    }
    else
    {
        mensaje=mensaje+ "   -   no se ingreso comestibles";
    }
    if(contadorOtros!=0)
    {
        promedioPrecioOtros=acumuladorPrecioOtros/contadorOtros;
        mensaje=mensaje+ "   -  el promedio de 'otros' fue "+promedioPrecioOtros;
    }
    else
    {
        mensaje=mensaje+ "   -   no se ingreso 'otros'";
    }
    alert(mensaje);

    /*
    ========TEST======== 
    limpieza
    josohon
    500
    importado
    30

    No se ingreso ningún comestible
    el NOMBRE del  mas caro de todos los productos es josohon
    No se ingresaron elaborados
    el tipo de mercadería  que mas aparece es limpieza con 1
    El promedio de Limpieza fue 500   -   no se ingreso comestibles   -   no se ingreso 'otros'

    */

}
