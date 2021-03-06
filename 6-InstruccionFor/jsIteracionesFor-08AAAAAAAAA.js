/*

Alumno: Cacciatori, Agustín
fecha: 26/02/21

Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.



*/

function mostrar()
{
    
    var respuesta;//para el while
    var continente;// (validar entre america , asia , europa ,africa y oceania) 
    var pais;
    var cantidadDeHabitantes;// cantidad de habitantes en millones entre 1 y 7000 (validar)
    var nivelDeProbresa;//el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
    var temperaturaIngresada; //la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
    //a)La cantidad de temperaturas pares.
    var cantidadTemperaturasPares;
    // b)la cantidad de temperaturas impares de europa
    var cantidadTemperaturasImparesEuropa;
    // c)El nombre del pais con menos habitantes
    //nota uso "contadorPaises" del punto F como bandera
    var nombrePaisMenosHabitantes;
    var habitantesPaisMenosHabitantes;
    // d)la cantidad de paises que superan los 40 grados.
    var cantidadDePaisesMasCuarentaGrados;
    // e)la cantidad de paises de america que tienen menos de 0 grados .
    var cantidadDePaisesAmericanosMenosCeroGrados;
    // f)el promedio de habitantes entre los paises ingresados .
    var contadorPaises;
    var sumatoriaCantidadDeHabitantes;
    var promedioHabitantesEntrePaises;
    // g)el promedio de habitantes entre los paises que superan los 40 grados       
    //nota uso la variable "cantidadDePaisesMasCuarentaGrados" del punto D
    var sumatoriaDeHabitantesDePaisesMasCuarentaGrados;
    var promedioPaisesMasCuarentaGrados;
    // H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
    //nota uso "contadorPaises" del punto F como bandera
    var temperaturaMinimaDelPais;
    var nombreDelPaisConMenorTemperatura;
    // i) que continente tiene mas habitantes.
    var habitantesAmerica;
    var habitantesAsia;
    var habitantesEuropa;
    var habitantesAfrica;
    var habitantesOceania;
    var continenteConMasHabitantes;


    //inicialización
    //para el while
    respuesta='si';
    //a)La cantidad de temperaturas pares.
    cantidadTemperaturasPares=0;
    // b)la cantidad de temperaturas impares de europa
    cantidadTemperaturasImparesEuropa=0;
    // c)El nombre del pais con menos habitantes
    // no inicialización
    // d)la cantidad de paises que superan los 40 grados.
    cantidadDePaisesMasCuarentaGrados=0;
    // e)la cantidad de paises de america que tienen menos de 0 grados .
    cantidadDePaisesAmericanosMenosCeroGrados=0;
    // f)el promedio de habitantes entre los paises ingresados .
    contadorPaises=0;
    sumatoriaCantidadDeHabitantes=0;
    // g)el promedio de habitantes entre los paises que superan los 40 grados       
    //nota uso la variable "cantidadDePaisesMasCuarentaGrados" del punto D
    sumatoriaDeHabitantesDePaisesMasCuarentaGrados=0;
    // H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
    //nota uso "contadorPaises" del punto F como bandera
    // i) que continente tiene mas habitantes.
    habitantesAmerica=0;
    habitantesAsia=0;
    habitantesEuropa=0;
    habitantesAfrica=0;
    habitantesOceania=0;

    

    while(respuesta=='si')
    {

        continente=prompt("Ingrese un continente (america , asia , europa ,africa o oceania) :");
        while(isNaN(continente)==false || (continente!="america" && continente!="asia" && continente!="europa" && continente!="africa" && continente!="oceania"))
        {
            continente=prompt("Error, ingrese un continente (america , asia , europa ,africa o oceania) :")
        }

        pais=prompt("Ingrese un pais:");
        while(isNaN(pais)==false )
        {
            pais=prompt("Error, ingrese un pais :")
        }

        cantidadDeHabitantes=prompt("Ingrese cantidad de habitantes: ");
        cantidadDeHabitantes=parseInt(cantidadDeHabitantes);
        while(isNaN(cantidadDeHabitantes)==true || cantidadDeHabitantes<1000000 || cantidadDeHabitantes>7000000000)
        {
            cantidadDeHabitantes=prompt("Error, ingrese cantidad de habitantes: ");
            cantidadDeHabitantes=parseInt(cantidadDeHabitantes);
        }



        nivelDeProbresa=prompt("Ingrese el nivel de pobresa entre (pobre, rico , muy rico), recordar que en Europa no hay paises pobre");
        //el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
        switch(continente)
        {
            case 'europa':
                while(isNaN(nivelDeProbresa)==false || (nivelDeProbresa!="rico" && nivelDeProbresa!="muy rico"))
                {
                    nivelDeProbresa=prompt("Error, ingrese el nivel de pobresa entre (rico , muy rico): ");
                }
                break;

            default:
                while(isNaN(nivelDeProbresa)==false || (nivelDeProbresa!="pobre" && nivelDeProbresa!="rico" && nivelDeProbresa!="muy rico"))
                {
                    nivelDeProbresa=prompt("Error, ingrese el nivel de pobresa entre (pobre, rico , muy rico): ");
                }
                break;

        }

        //la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
        temperaturaIngresada=prompt("Ingrese temperatura minima que se registra (-50 a 50): ");
        temperaturaIngresada=parseFloat(temperaturaIngresada);
        while(isNaN(temperaturaIngresada)==true || temperaturaIngresada<-50 || temperaturaIngresada>50)
        {
            temperaturaIngresada=prompt("Error, ingrese temperatura minima que se registra (-50 a 50): ");
            temperaturaIngresada=parseFloat(temperaturaIngresada);
        }

        //a)La cantidad de temperaturas pares.
        if(temperaturaIngresada%2==0)
        {
            cantidadTemperaturasPares++;
        }
        else//temperatura impar
        {
            // b)la cantidad de temperaturas impares de europa
            if(continente=="europa")
            {
                cantidadTemperaturasImparesEuropa++;
            }
        }

        // c)El nombre del pais con menos habitantes
        //nota uso "contadorPaises" del punto F como bandera
        if(contadorPaises==0 || cantidadDeHabitantes<habitantesPaisMenosHabitantes)
        {
            nombrePaisMenosHabitantes=pais;
            habitantesPaisMenosHabitantes=cantidadDeHabitantes;
        }

        // d)la cantidad de paises que superan los 40 grados.
        // g)el promedio de habitantes entre los paises que superan los 40 grados    
        if(temperaturaIngresada>40)
        {
            cantidadDePaisesMasCuarentaGrados++;// punto D
            sumatoriaDeHabitantesDePaisesMasCuarentaGrados=sumatoriaDeHabitantesDePaisesMasCuarentaGrados+cantidadDeHabitantes; // punto G
        }
        else //entraría en temperatura<=40
        {
            // e)la cantidad de paises de america que tienen menos de 0 grados .
            if(temperaturaIngresada<0)
            {
                cantidadDePaisesAmericanosMenosCeroGrados++;
            }
        }

        // H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
        //nota uso "contadorPaises" del punto F como bandera
        if(contadorPaises==0 || temperaturaIngresada<temperaturaMinimaDelPais)
        {
            temperaturaMinimaDelPais=temperaturaIngresada;
            nombreDelPaisConMenorTemperatura=pais;
        }


        
        // f)el promedio de habitantes entre los paises ingresados .
        sumatoriaCantidadDeHabitantes=sumatoriaCantidadDeHabitantes+cantidadDeHabitantes;
        contadorPaises++; // IMPORTANTISIMO QUE SEA LO ULTIMO EN EL WHILE 


        // i) que continente tiene mas habitantes.
        switch(continente)
        {
            case 'america':
                habitantesAmerica++;
                break;
            case 'asia':
                habitantesAsia++;
                break;
            case 'europa':
                habitantesEuropa++;
                break;
            case 'africa':
                habitantesAfrica++;
                break;
            // case 'Oceania':
            default:
                habitantesOceania++;
                break;
        }
        
        respuesta=prompt("Para seguir ingresar 'si' ");

    }//fin     while(respuesta=='si')

    //a)La cantidad de temperaturas pares.
    mensaje="La cantidad de temperaturas pares es "+cantidadTemperaturasPares;
    alert(mensaje);

    // b)la cantidad de temperaturas impares de europa
    mensaje="la cantidad de temperaturas impares de europa es "+cantidadTemperaturasImparesEuropa;
    alert(mensaje);


    // c)El nombre del pais con menos habitantes
    //nota uso "contadorPaises" del punto F como bandera
    mensaje="El nombre del pais con menos habitantes es "+nombrePaisMenosHabitantes+" con una cantidad de "+habitantesPaisMenosHabitantes+" habitantes";
    alert(mensaje);

    // d)la cantidad de paises que superan los 40 grados.
    mensaje="la cantidad de paises que superan los 40 grados es "+cantidadDePaisesMasCuarentaGrados;
    alert(mensaje);

    // e)la cantidad de paises de america que tienen menos de 0 grados .
    mensaje="la cantidad de paises de america que tienen menos de 0 grados es "+cantidadDePaisesAmericanosMenosCeroGrados;
    alert(mensaje);

    // f)el promedio de habitantes entre los paises ingresados .
    promedioHabitantesEntrePaises=sumatoriaCantidadDeHabitantes/contadorPaises;
	mensaje="el promedio de habitantes entre los paises ingresados es "+promedioHabitantesEntrePaises;
    alert(mensaje);

    // g)el promedio de habitantes entre los paises que superan los 40 grados  
    if(cantidadDePaisesMasCuarentaGrados!=0)
    {
        promedioPaisesMasCuarentaGrados=sumatoriaDeHabitantesDePaisesMasCuarentaGrados/cantidadDePaisesMasCuarentaGrados;
        mensaje="el promedio de habitantes entre los paises que superan los 40 grados es "+promedioHabitantesEntrePaises;
    }
    else
    {
        mensaje="No se puede calcular 'el promedio de habitantes entre los paises que superan los 40 grados' porque no se ingresaron paises con más de 40°C";
    }
    alert(mensaje);

    // H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
    //nota uso "contadorPaises" del punto F como bandera
    mensaje="la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. Temperatura: "+temperaturaMinimaDelPais+", País: "+nombreDelPaisConMenorTemperatura;
    alert(mensaje);


    // i) que continente tiene mas habitantes.
    // habitantesAmerica;
    // habitantesAsia;
    // habitantesEuropa;
    // habitantesAfrica;
    // habitantesOceania;

    if(habitantesAmerica>habitantesAsia && 
        habitantesAmerica>habitantesEuropa && 
        habitantesAmerica>habitantesAfrica && 
        habitantesAmerica>habitantesOceania)
    {
        //america
        continenteConMasHabitantes="america"
    }
    else
    {
        if(habitantesAsia>habitantesEuropa &&
            habitantesAsia>habitantesAfrica &&
            habitantesAsia>habitantesOceania)
        {
            //Asia
            continenteConMasHabitantes="asia"
        }
        else
        {
            if(habitantesEuropa>habitantesAfrica &&
                habitantesEuropa>habitantesOceania)
            {
                //Europa
                continenteConMasHabitantes="europa"
            }
            else
            {
                if(habitantesAfrica>habitantesOceania)
                {
                    //Africa
                    continenteConMasHabitantes="africa"
                }
                else
                {
                    //Oceania
                    continenteConMasHabitantes="oceania"
                }
            }
        }
    }

    mensaje="El continente que tiene mas habitantes: "+continenteConMasHabitantes;
    alert(mensaje)
    

    /*
    el continente (validar entre america , asia , europa ,africa y oceania) 
    el nombre del país, 
    cantidad de habitantes en millones entre 1 y 7000 (validar)
    el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
    la temperaruta mínima que se registra en su territorio(entre -50 y 50)  

    america
    argentina
    40000000 (40.000.000)
    pobre
    40

    europa
    alemania
    60000000 (60.000.000)
    muy rico
    42
    

    La cantidad de temperaturas pares es 2
    la cantidad de temperaturas impares de europa es 0
    El nombre del pais con menos habitantes es argentina con una cantidad de 40000000 habitantes
    El nombre del pais con menos habitantes es argentina con una cantidad de 40000000 habitantes
    la cantidad de paises que superan los 40 grados es 1
    la cantidad de paises de america que tienen menos de 0 grados es 0
    el promedio de habitantes entre los paises ingresados es 50000000
    el promedio de habitantes entre los paises que superan los 40 grados es 50000000
    la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. Temperatura: 40, País: argentina
    El continente que tiene mas habitantes: europa

    */



}//FIN DE LA FUNCIÓN
