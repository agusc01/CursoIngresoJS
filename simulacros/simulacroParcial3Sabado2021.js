function mostrar()
{
    // 15:15
    // 16:00 
    // 45 minutos con testeo

    // 3- validación :
    // pedir el ingreso de 10 mascotas 
    // validar 
    // tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
    // raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y  si es de tipo "otros" o pájaro , pedir solo un texto
    // edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
    // nombre ( no se permite solo numero)

    // mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
    // mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza

    //========================declaración===============================
    var contador;//para el for // pedir el ingreso de 10 mascotas 
    // validar 
    var tipoIngresado;// tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
    var razaIngresada// raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y  si es de tipo "otros" o pájaro , pedir solo un texto
    var edadIngresada// edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
    var nombreIngresado// nombre ( no se permite solo numero)
    // mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
    var banderaPrimerTipoPerro;
    var banderaPrimerTipoGato;
    var banderaPrimerTipoPajaro;
    var banderaPrimerTipoOtros;
    var nombreMasViejoPerro;
    var nombreMasViejoGato;
    var nombreMasViejoPajaro;
    var nombreMasViejoOtros;
    var mayorEdadTipoPerro;
    var mayorEdadTipoGato;
    var mayorEdadTipoPajaro;
    var mayorEdadTipoOtros;
    // mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza
    var contadorGatoSiames;
    var contadorGatoTurco;
    var contadorGatoPeterbald;
    var contadorGatoGenerico;
    var acumuladorEdadGatoSiames;
    var acumuladorEdadGatoTurco;
    var acumuladorEdadGatoPeterbald;
    var acumuladorEdadGatoGenerico;
    var promedioGatoSiames;
    var promedioGatoTurco;
    var promedioGatoPeterbald;
    var promedioGatoGenerico;

    //========================inicialización===============================
    

    // mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
    banderaPrimerTipoPerro=true;
    banderaPrimerTipoGato=true;
    banderaPrimerTipoPajaro=true;
    banderaPrimerTipoOtros=true;
    // mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza
    contadorGatoSiames=0;
    contadorGatoTurco=0;
    contadorGatoPeterbald=0;
    contadorGatoGenerico=0;
    acumuladorEdadGatoSiames=0;
    acumuladorEdadGatoTurco=0;
    acumuladorEdadGatoPeterbald=0;
    acumuladorEdadGatoGenerico=0;
   



    //=========================FOR==============================
    for(contador=0;contador<10;contador++)
    {

        nombreIngresado=prompt("Ingrese el nombre: ");
        while(isNaN(nombreIngresado)==false)
        {
            nombreIngresado=prompt("Error, ingrese el nombre: ");
        }

        // tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
        tipoIngresado=prompt("Ingrese el tipo ( gato , perro , pajaro y otros)");
        while(isNaN(tipoIngresado)==false || (tipoIngresado!='gato' && tipoIngresado!='perro' && tipoIngresado!='pajaro' && tipoIngresado!='otros'))
        {
            tipoIngresado=prompt("Error, Ingrese el tipo ( gato , perro , pajaro y otros)");
        }

        // raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y  si es de tipo "otros" o pájaro , pedir solo un texto
        // edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
        switch(tipoIngresado)
        {
            case 'perro':

                razaIngresada=prompt("Ingrese la raza ( pastor , toy , callejero)");
                while(isNaN(razaIngresada)==false || (razaIngresada!='pastor' && razaIngresada!='toy' && razaIngresada!='callejero'))
                {
                    razaIngresada=prompt("Error, Ingrese la raza ( pastor , toy , callejero)");
                }

                edadIngresada=prompt("Ingrese la edad (1 a 20 años) ");
                edadIngresada=parseInt(edadIngresada);
                while(isNaN(edadIngresada)==true || edadIngresada<1 || edadIngresada>20)
                {
                    edadIngresada=prompt("Error, Ingrese la edad (1 a 20 años) ");
                    edadIngresada=parseInt(edadIngresada);
                }

                // mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
                if(banderaPrimerTipoPerro==true || edadIngresada>mayorEdadTipoPerro)
                {
                    banderaPrimerTipoPerro=false;
                    nombreMasViejoPerro=nombreIngresado;
                    mayorEdadTipoPerro=edadIngresada;
                }

                break;

            case 'gato':
                razaIngresada=prompt("Ingrese la raza ( siames , turco , peterbald , generico)");
                while(isNaN(razaIngresada)==false || (razaIngresada!='siames' && razaIngresada!='turco' && razaIngresada!='peterbald' && razaIngresada!='generico'))
                {
                    razaIngresada=prompt("Error, Ingrese la raza ( siames , turco , peterbald , generico)");
                }

                edadIngresada=prompt("Ingrese la edad (1 a 20 años) ");
                edadIngresada=parseInt(edadIngresada);
                while(isNaN(edadIngresada)==true || edadIngresada<1 || edadIngresada>20)
                {
                    edadIngresada=prompt("Error, Ingrese la edad (1 a 20 años) ");
                    edadIngresada=parseInt(edadIngresada);
                }

                // mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza
                switch(razaIngresada)
                {
                    case 'siames':
                        contadorGatoSiames++;
                        acumuladorEdadGatoSiames=acumuladorEdadGatoSiames+edadIngresada;
                        break;
                    case 'turco':
                        contadorGatoTurco++;
                        acumuladorEdadGatoTurco=acumuladorEdadGatoTurco+edadIngresada;
                        break;
                    case 'peterbald':
                        contadorGatoPeterbald++;
                        acumuladorEdadGatoPeterbald=acumuladorEdadGatoPeterbald+edadIngresada;
                        break;
                    // case 'generico':
                    default:
                        contadorGatoGenerico++;
                        acumuladorEdadGatoGenerico=acumuladorEdadGatoGenerico+edadIngresada;
                        break;
                }

                // mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
                if(banderaPrimerTipoGato==true || edadIngresada>mayorEdadTipoGato)
                {
                    banderaPrimerTipoGato=false;
                    nombreMasViejoGato=nombreIngresado;
                    mayorEdadTipoGato=edadIngresada;
                }

                break;
            
            case 'pajaro':

                razaIngresada=prompt("Ingrese la raza: ");
                while(isNaN(razaIngresada)==false)
                {
                    razaIngresada=prompt("Error, Ingrese la raza: ");
                }

                edadIngresada=prompt("Ingrese la edad (1 a 50 años) ");
                edadIngresada=parseInt(edadIngresada);
                while(isNaN(edadIngresada)==true || edadIngresada<1 || edadIngresada>50)
                {
                    edadIngresada=prompt("Error, Ingrese la edad (1 a 50 años) ");
                    edadIngresada=parseInt(edadIngresada);
                }

                // mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
                if(banderaPrimerTipoPajaro==true || edadIngresada>mayorEdadTipoPajaro)
                {
                    banderaPrimerTipoPajaro=false;
                    nombreMasViejoPajaro=nombreIngresado;
                    mayorEdadTipoPajaro=edadIngresada;
                }

                break;
            
            // case 'otros':
            default:

                razaIngresada=prompt("Ingrese la raza: ");
                while(isNaN(razaIngresada)==false)
                {
                    razaIngresada=prompt("Error, Ingrese la raza: ");
                }

                edadIngresada=prompt("Ingrese la edad (1 a 100 años) ");
                edadIngresada=parseInt(edadIngresada);
                while(isNaN(edadIngresada)==true || edadIngresada<1 || edadIngresada>100)
                {
                    edadIngresada=prompt("Error, Ingrese la edad (1 a 100 años) ");
                    edadIngresada=parseInt(edadIngresada);
                }

                // mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
                if(banderaPrimerTipoOtros==true || edadIngresada>mayorEdadTipoOtros)
                {
                    banderaPrimerTipoOtros=false;
                    nombreMasViejoOtros=nombreIngresado;
                    mayorEdadTipoOtros=edadIngresada;
                }

                break;
        }




    // mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
    // mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza


    
    }//for(contador=0;contador<10;contador++)



    //=========================mensajes==============================

    // mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
    if(banderaPrimerTipoPerro==false)
    {
        mensaje="El perro más viejo se llama: "+nombreMasViejoPerro+", y tiene una edad de "+mayorEdadTipoPerro+" años";
    }
    else
    {
        mensaje="No se ingresaron perros";
    }
    alert(mensaje);
    if(banderaPrimerTipoGato==false)
    {
        mensaje="El gato más viejo se llama: "+nombreMasViejoGato+", y tiene una edad de "+mayorEdadTipoGato+" años";
    }
    else
    {
        mensaje="No se ingresaron gatos";
    }
    alert(mensaje);
    if(banderaPrimerTipoPajaro==false)
    {
        mensaje="El pájaro más viejo se llama: "+nombreMasViejoPajaro+", y tiene una edad de "+mayorEdadTipoPajaro+" años";
    }
    else
    {
        mensaje="No se ingresaron pajaros";
    }
    alert(mensaje);
    if(banderaPrimerTipoOtros==false)
    {
        mensaje="El tipo 'otros' más viejo se llama: "+nombreMasViejoOtros+", y tiene una edad de "+mayorEdadTipoOtros+" años";
    }
    else
    {
        mensaje="No se ingresaron 'otros'";
    }
    alert(mensaje);



    // mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza

    if(contadorGatoSiames!=0)
    {
        promedioGatoSiames=acumuladorEdadGatoSiames/contadorGatoSiames;
        
    }
    else
    {
        promedioGatoSiames=0;
    }
    
    if(contadorGatoTurco!=0)
    {
        promedioGatoTurco=acumuladorEdadGatoTurco/contadorGatoTurco;
    }
    else
    {
        promedioGatoTurco=0;
    }
    
    if(contadorGatoPeterbald!=0)
    {
        promedioGatoPeterbald=acumuladorEdadGatoPeterbald/contadorGatoPeterbald;
    }
    else
    {
        promedioGatoPeterbald=0;
    }
    
    if(contadorGatoGenerico!=0)
    {
        promedioGatoGenerico=acumuladorEdadGatoGenerico/contadorGatoGenerico;
    }
    else
    {
        promedioGatoGenerico=0;
    }

    if(promedioGatoSiames>promedioGatoTurco &&
        promedioGatoSiames>promedioGatoPeterbald &&
        promedioGatoSiames>promedioGatoGenerico)
    {
        //siames
        mensaje="La raza de gato con el mayor promedio es de siames con un promedio de "+promedioGatoSiames+" años";
    }
    else
    {
        if(promedioGatoTurco>promedioGatoPeterbald &&
            promedioGatoTurco>promedioGatoGenerico)
        {
            //turco
            mensaje="La raza de gato con el mayor promedio es de turco con un promedio de "+promedioGatoTurco+" años";
        }
        else
        {
            if(promedioGatoPeterbald>promedioGatoGenerico)
            {
                //peterbald
                mensaje="La raza de gato con el mayor promedio es de peterbald con un promedio de "+promedioGatoPeterbald+" años";
            }
            else
            {
                //generico
                mensaje="La raza de gato con el mayor promedio es de generico con un promedio de "+promedioGatoGenerico+" años";
            }
        }
    }
    alert(mensaje);


    /*
    TEST

    cambie el contador para hacer 4

    firulais
    perro
    pastor
    15

    michi
    gato
    siames
    7

    lenteja
    otros
    tortugita
    80

    pequeñito
    otros
    raton
    5

    El perro más viejo se llama: firulais, y tiene una edad de 15 años
    El gato más viejo se llama: michi, y tiene una edad de 7 años
    No se ingresaron pajaros
    El tipo 'otros' más viejo se llama: lenteja, y tiene una edad de 80 años

    La raza de gato con el mayor promedio es de siames con un promedio de 7 años
*/

}
