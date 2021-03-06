function mostrar()
{
    
    //16:30
    //17:25
    //55 minutos con testeo

    // 1. 
    // El alumno deberá ingresar:
    // Nombre del alumno
    // Carrera (Programación, Psicología, Diseño gráfico)
    // Estado de la carrera: en curso-abandono-finalizado
    // Sexo (femenino-masculino-nobinario)
    // Edad (18 o más)
    // Nota (entre 1 y 10)

    // 3. Se deberán validar los casos resaltados en negrita.
    // 4. El programa deberá informar a través del documento html:
    // A. Cantidad total de alumnos de cada carrera.
    // B. Cantidad total de mujeres que cursan la carrera de programación
    // C. Cantidad de alumnos no binarios.
    // D. Promedio de notas de los alumnos finalizantes.
    // E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
    // F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
    // G. ¿Cuál es la carrera que tiene más alumnos?


    //========================declaración===============================
    // El alumno deberá ingresar:
    // Nombre del alumno
    var nombreIngresado;
    // Carrera (Programación, Psicología, Diseño gráfico)
    var carreraIngresada;
    // Estado de la carrera: en curso-abandono-finalizado
    var estadoDeLaCarreraIngresado;
    // Sexo (femenino-masculino-nobinario)
    var sexoIngresado;
    // Edad (18 o más)
    var edadIngresada;
    // Nota (entre 1 y 10)
    var notaIngresada;
    // 2. Se desconoce la cantidad de alumnos que se ingresaran.
    var seguir;//para el while
    // 3. Se deberán validar los casos resaltados en negrita.
    // 4. El programa deberá informar a través del documento html:
    var mensaje;
    // A. Cantidad total de alumnos de cada carrera.
    var cantidadDeProgramacion;
    var cantidadDePsicologia;
    var cantidadDeDiseñoGrafico;
    // B. Cantidad total de mujeres que cursan la carrera de programación
    var cantidadMujeresProgramadoras;
    // C. Cantidad de alumnos no binarios.
    var cantidadAlumnosNoBinarios;
    // D. Promedio de notas de los alumnos finalizantes.
    var acumuladorDeNotasAlumnosFinalizantes;
    var cantidadAlumnosFinalizantes;
    var promedioDeNotaAlumnosFinalizantes;
    // E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
    var nombreDelAlumnoMasViejoDePsicologia;
    var sexoDelAlumnoMasViejoDePsicologia;
    var edadDelAlumnoMasViejoDePsicologia;
    //nota uso la como bandera "cantidadDePsicologia"
    // F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
    var nombreDelMejorAlumnoNoBinarioDePsicologia;
    var notaDelMejorAlumnoNoBinarioDePsicologia;
    var estadoDeLaCarreraDelMejorAlumnoNoBinarioDePsicologia;
    var HayNoBinarioDePsicologia;
    // G. ¿Cuál es la carrera que tiene más alumnos?
    // nota uso los contadores de cantidad del punto A

    //========================inicialización===============================

    // 2. Se desconoce la cantidad de alumnos que se ingresaran.
    seguir='si';//para el while
    // 3. Se deberán validar los casos resaltados en negrita.
    // 4. El programa deberá informar a través del documento html:
    // A. Cantidad total de alumnos de cada carrera.
    cantidadDeProgramacion=0;
    cantidadDePsicologia=0;
    cantidadDeDiseñoGrafico=0;
    // B. Cantidad total de mujeres que cursan la carrera de programación
    cantidadMujeresProgramadoras=0;
    // C. Cantidad de alumnos no binarios.
    cantidadAlumnosNoBinarios=0;
    // D. Promedio de notas de los alumnos finalizantes.
    acumuladorDeNotasAlumnosFinalizantes=0;
    cantidadAlumnosFinalizantes=0;
    // E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
    HayNoBinarioDePsicologia=false;
    // F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
    // G. ¿Cuál es la carrera que tiene más alumnos?


   
    //=========================WHILE==============================

    while(seguir=='si')
    {

        // Nombre del alumno
        nombreIngresado=prompt("Ingrese el nombre: ");
        while(isNaN(nombreIngresado)==false)
        {
            nombreIngresado=prompt("Error, Ingrese el nombre: ");
        }
        // Carrera (Programación, Psicología, Diseño gráfico)
        carreraIngresada=prompt("Ingrese la carrera (programacion , psicologia , diseño grafico) ");
        while(isNaN(carreraIngresada)==false || (carreraIngresada!='programacion' && carreraIngresada!='psicologia' && carreraIngresada!='diseño grafico'))
        {
            carreraIngresada=prompt("Error, Ingrese la carrera (programacion , psicologia , diseño grafico)");
        }

        // Estado de la carrera: en curso-abandono-finalizado
        estadoDeLaCarreraIngresado=prompt("Ingrese la carrera (curso , abandono , finalizado) ");
        while(isNaN(estadoDeLaCarreraIngresado)==false || (estadoDeLaCarreraIngresado!='curso' && estadoDeLaCarreraIngresado!='abandono' && estadoDeLaCarreraIngresado!='finalizado'))
        {
            estadoDeLaCarreraIngresado=prompt("Error, Ingrese la carrera (curso , abandono , finalizado)");
        }


        // Sexo (femenino-masculino-nobinario)
        sexoIngresado=prompt("Ingrese el sexo (masculino , femenino, nobinario):  ");
        while(isNaN(sexoIngresado)==false || (sexoIngresado!='masculino' && sexoIngresado!='femenino' && sexoIngresado!='nobinario'))
        {
            sexoIngresado=prompt("Error, Ingrese el sexo (masculino , femenino): ");
        }


        // Edad (18 o más)
        
        edadIngresada=prompt("ingrese su edad (18 o más)  ");
        edadIngresada=parseInt(edadIngresada);
        while(isNaN(edadIngresada)==true || edadIngresada<18 || edadIngresada>110)
        {
            edadIngresada=prompt("Error, ingrese su edad (18 o más) ");
            edadIngresada=parseInt(edadIngresada);
        }


        // Nota (entre 1 y 10)
        notaIngresada=prompt("Ingrese su nota (entre 1 a 10):  ");
        notaIngresada=parseInt(notaIngresada);
        while(isNaN(notaIngresada)==true || notaIngresada<1 || notaIngresada>10)
        {
            notaIngresada=prompt("Error, Ingrese su nota (entre 1 a 10): ");
            notaIngresada=parseInt(notaIngresada);
        }


        switch(carreraIngresada)
        {
            case 'programacion':
                // A. Cantidad total de alumnos de cada carrera.
                cantidadDeProgramacion++;

                // B. Cantidad total de mujeres que cursan la carrera de programación
                if(sexoIngresado=='femenino')
                {
                    cantidadMujeresProgramadoras++;
                }

                break;
            case 'psicologia':
                
                // E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
                //nota uso la como bandera "cantidadDePsicologia"
                if(cantidadDePsicologia==0 || edadIngresada>edadDelAlumnoMasViejoDePsicologia)
                {
                    nombreDelAlumnoMasViejoDePsicologia=nombreIngresado;
                    sexoDelAlumnoMasViejoDePsicologia=sexoIngresado;
                    edadDelAlumnoMasViejoDePsicologia=edadIngresada;
                }

                // F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
                if(sexoIngresado=='nobinario')
                {
                    if(HayNoBinarioDePsicologia==false || notaIngresada>notaDelMejorAlumnoNoBinarioDePsicologia)
                    {
                        nombreDelMejorAlumnoNoBinarioDePsicologia=nombreIngresado;
                        notaDelMejorAlumnoNoBinarioDePsicologia=notaIngresada
                        estadoDeLaCarreraDelMejorAlumnoNoBinarioDePsicologia=estadoDeLaCarreraIngresado;

                        HayNoBinarioDePsicologia=true;// es para saber si puedo imprimir o no
                    }
                }
                
                // A. Cantidad total de alumnos de cada carrera.
                cantidadDePsicologia++;
                break;
            case 'diseño grafico':
                // A. Cantidad total de alumnos de cada carrera.
                cantidadDeDiseñoGrafico++;

                break;
        }
        
        // C. Cantidad de alumnos no binarios.
        if(sexoIngresado=='nobinario')
        {
            cantidadAlumnosNoBinarios++;
        }

        // D. Promedio de notas de los alumnos finalizantes.
        if(estadoDeLaCarreraIngresado=="finalizado")
        {
            acumuladorDeNotasAlumnosFinalizantes=acumuladorDeNotasAlumnosFinalizantes+notaIngresada;
            cantidadAlumnosFinalizantes++;
        }


        // G. ¿Cuál es la carrera que tiene más alumnos? SE HACE FUERA DEL WHILE


        seguir=prompt("Si desea deguir tipear 'si' : "); //último renglón del while
    }//fin del bucle principal while(seguir=='si')



    //=========================mensajes==============================

    // 4. El programa deberá informar a través del documento html:
    // A. Cantidad total de alumnos de cada carrera.}
    document.write("Cantidad de programción: "+cantidadDeProgramacion+"<br>");
    document.write("Cantidad de psicologia: "+cantidadDePsicologia+"<br>");
    document.write("Cantidad de diseño grafico: "+cantidadDeDiseñoGrafico+"<br>");

    // B. Cantidad total de mujeres que cursan la carrera de programación
    document.write("Cantidad de mujeres programadoras: "+cantidadMujeresProgramadoras+"<br>");

    // C. Cantidad de alumnos no binarios.
    document.write("Cantidad de alumnos no binario : "+cantidadAlumnosNoBinarios+"<br>");

    // D. Promedio de notas de los alumnos finalizantes.
    if(cantidadAlumnosFinalizantes!=0)
    {
        promedioDeNotaAlumnosFinalizantes=acumuladorDeNotasAlumnosFinalizantes/cantidadAlumnosFinalizantes;
        mensaje="Promedio de notas de los alumnos finalizantes es: "+promedioDeNotaAlumnosFinalizantes+"<br>";
    }
    else
    {
        mensaje="No se puede calcular el Promedio de notas de los alumnos finalizantes porque no hay finalizantes<br>";
    }
    document.write(mensaje);


    // E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
    //nota uso la como bandera "cantidadDePsicologia"
    if(cantidadDePsicologia!=0)
    {
        mensaje="nombre: "+nombreDelAlumnoMasViejoDePsicologia+", sexo: "+sexoDelAlumnoMasViejoDePsicologia+", edad: "+edadDelAlumnoMasViejoDePsicologia+" años, es la persona más vieja en la carrera de psicología<br>";
    }
    else
    {
        mensaje="No se ingreso estudiante de psicología<br>"
    }
    document.write(mensaje);


    // F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
    if(HayNoBinarioDePsicologia==true)
    {
        mensaje="nombre: "+nombreDelMejorAlumnoNoBinarioDePsicologia+", nota: "+notaDelMejorAlumnoNoBinarioDePsicologia+", estado de la carrera: "+estadoDeLaCarreraDelMejorAlumnoNoBinarioDePsicologia+" es el mejor alumno no binario que estudia psicología<br>";
    }
    else
    {
        mensaje="No hay estudiantes no binarios de la carrera de psicología<br>";
    }
    document.write(mensaje);

    // G. ¿Cuál es la carrera que tiene más alumnos?
    if(cantidadDeProgramacion>cantidadDePsicologia && cantidadDeProgramacion>cantidadDeDiseñoGrafico)
    {
        //programación
        mensaje="La carrera con más alumnos es programación, con un total de: "+cantidadDeProgramacion+" <br>";
    }
    else
    {
        if(cantidadDePsicologia>cantidadDeDiseñoGrafico)
        {
            //psicologia
            mensaje="La carrera con más alumnos es psicologia, con un total de: "+cantidadDePsicologia+" <br>";
        }
        else
        {
            //diseño grafico
            mensaje="La carrera con más alumnos es diseño grafico, con un total de: "+cantidadDeDiseñoGrafico+" <br>";
        }
    }
    document.write(mensaje);

    /*

    agustin
    programacion
    curso
    masculino
    24
    7

    florencia
    psicologia
    abandono
    femenino
    30
    2

    jose maria
    programacion
    finalizado
    nobinario
    27
    9

    Cantidad de programción: 2
    Cantidad de psicologia: 1
    Cantidad de diseño grafico: 0
    Cantidad de mujeres programadoras: 0
    Cantidad de alumnos no binario : 1
    Promedio de notas de los alumnos finalizantes es: 9
    nombre: florencia, sexo: femenino, edad: 30 años, es la persona más vieja en la carrera de psicología
    No hay estudiantes no binarios de la carrera de psicología
    La carrera con más alumnos es programación, con un total de 2

    */

}
