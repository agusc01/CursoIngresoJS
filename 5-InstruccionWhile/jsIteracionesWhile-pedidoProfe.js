/*

Alumno: Cacciatori, Agustín

*/

function mostrar()
{
    //declaro las variables
    var edad;
    var nombre;
    var edadMayor;
    var nombreMayor;
    var edadMenor;
    var nombreMenor;
    var seguir;
    var banderaPrimerEdad;
    var mensaje;

    //inicializo
    seguir='si';
    banderaPrimerEdad=true;

    while(seguir=='si')
    {
        edad=prompt("Ingrese su edad: ");
        edad=parseInt(edad);
        //hago una validación para edades entre 18 a 90 años
        while(isNaN(edad)==true || edad<17 || edad>91)
        {
            edad = prompt("Error, ingrese su edad: ");
            edad = parseInt(edad);
        }

        nombre=prompt("Ingrese su nombre: ");
        //hago una validación para que los nombres solo sean letras
        while(isNaN(nombre)==false)
        {
            nombre=prompt("Error, ingrese su nombre: ");
        }

        if(banderaPrimerEdad==true)
        {
            banderaPrimerEdad=false;
            edadMayor=edad;
            edadMenor=edad;
            nombreMenor=nombre;
            nombreMayor=nombre;
        }
        else
        {
            if(edad>edadMayor)
            {
                nombreMayor=nombre;
                edadMayor=edad;
            }

            if (edad<edadMenor)
            {
                nombreMenor=nombre;
                edadMenor=edad;
            }
        }


        seguir=prompt("Tipear 'si' para seguir ingresando: "); //último renglón del while
    }//fin while(seguir=='si')

    mensaje="La persona más joven es "+nombreMenor+", y tiene "+edadMenor+" años.";
    alert(mensaje);

    mensaje = "La persona más grande es "+nombreMayor+", y tiene "+edadMayor+" años.";
    alert(mensaje);



}//FIN DE LA FUNCIÓN


/*
TEST:
ENTRADA...
19
maria

25
Daniel

48
fausto

18
federico

42
martin


SALIDA....
La persona más joven es federico, y tiene 18 años.
La persona más grande es fausto, y tiene 48 años.

IMPORTANTE: si se ingres dos o más edades menores iguales, se considera la primera, lo mismo pasa con dos o más edades mayores iguales

*/