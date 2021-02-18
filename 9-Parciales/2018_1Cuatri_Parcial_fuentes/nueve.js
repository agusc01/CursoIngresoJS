/*

Alumno: Cacciatori, Agustín

Ingrese datos
Mostrar información
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.


*/

/*

Testeo con los siguientes valores
ENTRADAS...
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )

SALIDA...
punto A:La cantidad de temperaturas pares es: 3
punto B:La marca del producto más pesado fue pepito con un peso de 50 kg
punto C:La cantidad de productos que se conservan a menos de 0 grados es : 3
punto D:El promedio del peso de todos los productos es: 30kg
punto F:El peso máximo es 50kg y el peso mínimo es 10kg

*/



function mostrar()
{
    //declaro las variables
    //variables generales
    var marca;
    var peso;//entre 1 y 100
    var temperatura;//entre -30 a 30
    var seguir;
    var mensaje;
    //punto A
    var cantidadDeTemperaturasPares;
    //punto B
    var banderaPrimerCicloWhile;
    var nombreMarcaMasPesado;
    var pesoMaximo;//tambiés es el punto F
    //punto C
    var cantidadProductosBajoCero;
    //punto D
    var sumatoriaPesos;
    var promedioPesos;
    var contadorWhile;
    //punto F (por alguna razón no esta el punto E)
    var pesoMinimo;

    //inicialización de las variables
    //para el while principal
    seguir='si';
    //punto A
    cantidadDeTemperaturasPares=0;
    //punto B
    banderaPrimerCicloWhile=true;
    //punto C
    cantidadProductosBajoCero=0;
    //punto D
    sumatoriaPesos=0;
    contadorWhile=0;
    //punto F (por alguna razón no esta el punto E)


    while(seguir=='si')
    {
        marca=prompt("Ingrese la marca: ");

        peso=prompt("ingrese el peso: ");
        peso=parseInt(peso);

        while(isNaN(peso)==true || peso>100 || peso<1)
        {
            peso=prompt("Error, ingrese el peso: ");
            peso=parseInt(peso);
        }

        temperatura=prompt("Ingrese la temeperatura: ");
        temperatura=parseInt(temperatura);
        while(isNaN(temperatura)==true || temperatura<-30 || temperatura>30)
        {
            temperatura=prompt("Error, ingrese la temeperatura");
            temperatura=parseInt(temperatura);
        }

        //punto A
        if(temperatura%2==0)
        {
            cantidadDeTemperaturasPares=cantidadDeTemperaturasPares+1;
        }

        //punto B y punto F
        if(banderaPrimerCicloWhile==true)
        {
            //punto B en particular
            banderaPrimerCicloWhile=false; 
            nombreMarcaMasPesado=marca;
            pesoMaximo=peso;//también el punto F

            //punto F en particular
            pesoMinimo=peso;
        }
        else
        {   
            //punto B en particular, y el punto F
            if(peso>pesoMaximo)
            {    
                nombreMarcaMasPesado=marca;
                pesoMaximo=peso;
            }

            //punto F en particular
            if(peso<pesoMinimo)
            {
                pesoMinimo=peso;
            }

        }//fin if(banderaPrimerCicloWhile==true)

        //punto C
        if(temperatura<0)
        {
            cantidadProductosBajoCero=cantidadProductosBajoCero+1;
        }

        //punto D
        sumatoriaPesos=sumatoriaPesos+peso;
        contadorWhile=contadorWhile+1;

        seguir=prompt("Tipear 'si' para continuar: "); //último renglón del while

    }//fin while(seguir=='si')
    
    //punto A
    mensaje="La cantidad de temperaturas pares es: "+cantidadDeTemperaturasPares;
    alert(mensaje);

    //punto B
    mensaje="La marca del producto más pesado fue "+nombreMarcaMasPesado+" con un peso de "+pesoMaximo+" kg";
    alert(mensaje);

    //punto C
    mensaje="La cantidad de productos que se conservan a menos de 0 grados es : "+cantidadProductosBajoCero;
    alert(mensaje);

    //punto D
    promedioPesos=sumatoriaPesos/contadorWhile;
    mensaje="El promedio del peso de todos los productos es: "+promedioPesos+"kg";
    alert(mensaje);

    //punto F (por alguna razón no esta el punto E)
    mensaje="El peso máximo es "+pesoMaximo+"kg y el peso mínimo es "+pesoMinimo+"kg";
    alert(mensaje);

}

