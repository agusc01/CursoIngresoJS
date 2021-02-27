/*

Alumno: Cacciatori, Agustín
fecha: 26/02/21

Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano

*/

function mostrar()
{
    //declaración
    var tipoDeMascota;//si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
    var tipoDePelaje;// el tipo de pelaje (corto, largo , sin pelo),
    var edadIngresada;// la edad de la mascota (edad validada);
    var nombreIngresado;// el nombre (una palabra) 
    var razaIngresada;// la raza  (una palabra) 
    var pesoIngresado;// el peso (peso validado) 
    var estadoClinico;// el estadoClinico (enfermo,internado o adopcion)
    var temperaturaIngresada;// la temperaruta corporal 
    var mensaje;//para imprimir los mensajes;
    // a)El perro mas pesado
    var nombrePerroMasPesado;
    var pesoPerroMasPesado;
    //nota uso "contadorMascotas" como bandera
    // b)El porcentaje de enfermos sobre el total de mascotas var contadorMascotasEnfermas;
    var contadorMascotas;
    var contadorMascotasEnfermas;
    var porcentajeMascotasEnfermas;
    // c)El nombre de la ultima mascota de tipo "otra cosa"
    //nota: puedo verificar imprimir esto con la variable "contadorOtraCosA" del punto E
    var nombreUltimaMascotaOtraCosa;
    // d)El animal sin pelo con menor temperatura corporal
    var banderaPrimerSInPelo;
    var menorTemperaturaAnimalSinPelo;
    var tipoDeMascotaMenorTemperaturaAnimalSinPelo;
    // e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
    var sumatoriaTemperaturaGato;
    var sumatoriaTemperaturaPerro;
    var sumatoriaTemperaturaOtraCosa;
    var contadorGato;
    var contadorPerro;
    var contadorOtraCosA;
    var promedioTemperaturaGato;
    var promedioTemperaturaPerro;
    var promedioTemperaturaOtraCosa;
    // f)Sumando gatos y perros que porcentaje del total de mascotas son?
    var porcentajeGatosYPerros;
    // g)Que estado clinico tiene la menor cantidad de mascotas
    var contadorMascotasInternadas;
    var contadorMascotasAdoptadas;       
    // H)Cual es el promedio de kilos de peso de tomando todas las mascotas
    var sumatoriaDeKilos;
    var promedioDeKilos;
    // i)El nombre y raza del gato sin pelos mas liviano
    var nombreMasLivianoSinPelos;
    var razaMasLivianoSinPelos;
    var pesoMasLivianoSinPelosDeLosGatos;
    //uso la banderaPrimerSInPelo del // d)El animal sin pelo con menor temperatura corporal


    //inicialización:
    // a)El perro mas pesado
    //nota uso "contadorMascotas" como bandera
    // b)El porcentaje de enfermos sobre el total de mascotas
    contadorMascotas=0;
    contadorMascotasEnfermas=0;
    // c)El nombre de la ultima mascota de tipo "otra cosa"
    // d)El animal sin pelo con menor temperatura corporal
    banderaPrimerSInPelo=true;
    // e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
    sumatoriaTemperaturaGato=0;
    sumatoriaTemperaturaPerro=0;
    sumatoriaTemperaturaOtraCosa=0;
    contadorGato=0;
    contadorPerro=0;
    contadorOtraCosA=0;
    promedioTemperaturaGato=0;
    promedioTemperaturaPerro=0;
    promedioTemperaturaOtraCosa=0;
    // f)Sumando gatos y perros que porcentaje del total de mascotas son?
    // g)Que estado clinico tiene la menor cantidad de mascotas       
    contadorMascotasInternadas=0;
    contadorMascotasAdoptadas=0;
    // nota uso "contadorMascotasEnfermas" de b)El porcentaje de enfermos sobre el total de mascotas ;
    // H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
    sumatoriaDeKilos=0;
    // i)El nombre y raza del gato sin pelos mas liviano
    //uso la banderaPrimerSInPelo del // d)El animal sin pelo con menor temperatura corporal


    var respuesta;//para el while

    respuesta="si";

    while(respuesta=='si')
    {

        //si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
        tipoDeMascota=prompt("Ingrese la especie : (gato, perro, otra cosa)");
        while(isNaN(tipoDeMascota)==false || (tipoDeMascota!="gato" && tipoDeMascota!="perro" && tipoDeMascota!="otra cosa"))
        {
            tipoDeMascota=prompt("Error, Ingrese la especie : (gato, perro, otra cosa): ");
        }

        // el tipo de pelaje (corto, largo , sin pelo),
        tipoDePelaje=prompt("Ingrese el tipo de pelaje (corto, largo , sin pelo) :");
        while(isNaN(tipoDePelaje)==false || (tipoDePelaje!="corto" && tipoDePelaje!="largo" && tipoDePelaje!="sin pelo"))
        {
            tipoDePelaje=prompt("Error, Ingrese el tipo de pelaje (corto, largo , sin pelo) :");
        }

        // la edad de la mascota (edad validada);
        edadIngresada=prompt("Ingrese la edad de la mascota (1 a 15 años): ");
        edadIngresada=parseInt(edadIngresada);
        while(isNaN(edadIngresada)==true || edadIngresada<1 || edadIngresada>15)
        {
            edadIngresada=prompt("Error, ingrese la edad de la mascota (1 a 15 años): ");
            edadIngresada=parseInt(edadIngresada);
        }

        // el nombre (una palabra) 
        nombreIngresado=prompt("Ingrese el nombre (palabras) :");
        while(isNaN(nombreIngresado)==false)
        {
            nombreIngresado=prompt("Error, Ingrese el nombre (palabras) :");
        }

        // la raza  (una palabra) 
        razaIngresada=prompt("Ingrese la raza (palabras) :");
        while(isNaN(razaIngresada)==false)
        {
            razaIngresada=prompt("Error, Ingrese ña raza (palabras) :");
        }

        // el peso (peso validado) 
        pesoIngresado=prompt("Ingrese el peso (1 a 20 kg): ");
        pesoIngresado=parseFloat(pesoIngresado);
        while(isNaN(pesoIngresado)==true || pesoIngresado<1 || pesoIngresado>20)
        {
            pesoIngresado=prompt("Error, ingrese el peso (1 a 20 kg): ");
            pesoIngresado=parseFloat(pesoIngresado);
        }

        // el estadoClinico (enfermo,internado o adopcion)
        estadoClinico=prompt("Ingrese el estadoClinico (enfermo,internado o adopcion) :");
        while(isNaN(estadoClinico)==false || (estadoClinico!="enfermo" && estadoClinico!="internado" && estadoClinico!="adopcion"))
        {
            estadoClinico=prompt("Error, Ingrese el estadoClinico (enfermo,internado o adopcion) :");
        }


        // la temperaruta corporal 
        // el peso (peso validado) 
        temperaturaIngresada=prompt("Ingrese la temperatura (34 a 40°C): ");
        temperaturaIngresada=parseFloat(temperaturaIngresada);
        while(isNaN(temperaturaIngresada)==true || temperaturaIngresada<34 || temperaturaIngresada>40)
        {
            temperaturaIngresada=prompt("Error, ingrese la temperatura (34 a 40°C): ");
            temperaturaIngresada=parseFloat(temperaturaIngresada);
        }



        switch(tipoDeMascota)
        {
            case 'gato':
                // e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
                sumatoriaTemperaturaGato=sumatoriaTemperaturaGato+temperaturaIngresada;
                contadorGato++
                // i)El nombre y raza del gato sin pelos mas liviano
                if(banderaPrimerSInPelo==true || pesoIngresado<pesoMasLivianoSinPelosDeLosGatos)
                {
                    pesoMasLivianoSinPelosDeLosGatos=pesoIngresado;
                    nombreMasLivianoSinPelos=nombreIngresado;
                    razaMasLivianoSinPelos=razaIngresada;
                    //nota: la bandera la cancelo en if(tipoDePelaje=="sin pelo"), poniendo  banderaPrimerSInPelo=false MAS ABAJO 
                    //esto lo hago para no usar dos banderas, y no puedo agrupar porque uno me dice cualquier animal y el otro es GATO especificamente
                }
                
                break;//fin case 'gato':
            case 'perro':

                // a)El perro mas pesado
                if(contadorMascotas==0 || peso>pesoPerroMasPesado)
                {
                    nombrePerroMasPesado=nombreIngresado;
                    pesoPerroMasPesado=pesoIngresado;
                }

                // e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
                sumatoriaTemperaturaPerro=sumatoriaTemperaturaPerro+temperaturaIngresada;
                contadorPerro++

                break;//fin case 'perro':
            default://otro cosa

                // c)El nombre de la ultima mascota de tipo "otra cosa"
                nombreUltimaMascotaOtraCosa=nombreIngresado;//nota: puedo verificar imprimir esto con la variable "contadorOtraCosA" del punto E

                // e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
                sumatoriaTemperaturaOtraCosa=sumatoriaTemperaturaOtraCosa+temperaturaIngresada;
                contadorOtraCosA++

                break;//fin default://otro cosa
        }


        // d)El animal sin pelo con menor temperatura corporal
        if(tipoDePelaje=="sin pelo")
        {
            if(banderaPrimerSInPelo==true || temperaturaIngresada<menorTemperaturaAnimalSinPelo)
            {
                
                menorTemperaturaAnimalSinPelo=temperaturaIngresada;
                tipoDeMascotaMenorTemperaturaAnimalSinPelo=tipoDeMascota;
            }

            banderaPrimerSInPelo=false;// IMPORTANTISIMO QUE ESTE EN LA ULTIMA LINEA DEL  if(tipoDePelaje=="sin pelo")
        }
            
        


        switch(estadoClinico)
        {
            case 'enfermo':
                // b)El porcentaje de enfermos sobre el total de mascotas
                //y // g)Que estado clinico tiene la menor cantidad de mascotas  
                contadorMascotasEnfermas++;

                break;
            case 'internado':
                // g)Que estado clinico tiene la menor cantidad de mascotas  
                contadorMascotasInternadas++;
                break;
            // case 'adopcion':
            default:
                // g)Que estado clinico tiene la menor cantidad de mascotas  
                contadorMascotasAdoptadas++;
                break;
        }


        // H)Cual es el promedio de kilos de peso de tomando todas las mascotas
        //simpre hay almenos UNA mascota
        sumatoriaDeKilos=sumatoriaDeKilos+pesoIngresado;


        respuesta=prompt("Para seguir ingresar 'si' ");
    }//while(respuesta=='si') bucle principal

    
    //EXTRAORDINARIO:
    // b)El porcentaje de enfermos sobre el total de mascotas
    contadorMascotas=contadorMascotasEnfermas+contadorMascotasInternadas+contadorMascotasAdoptadas;


    // a)El perro mas pesado
    mensaje="El perro mas pesado se llama "+nombrePerroMasPesado+", tiene un peso de "+pesoPerroMasPesado;
    alert(mensaje);

    // b)El porcentaje de enfermos sobre el total de mascotas
    //siempre hay almenos UNA mascota
    porcentajeMascotasEnfermas=(contadorMascotasEnfermas*100)/contadorMascotas;
    mensaje="El porcentaje de enfermos sobre el total de mascotas es "+porcentajeMascotasEnfermas;

    alert(mensaje);

    
    if(banderaPrimerSInPelo==false)
    {
        // d)El animal sin pelo con menor temperatura corporal
        mensaje="El animal sin pelo con menor temperatura corporal es :"+tipoDeMascotaMenorTemperaturaAnimalSinPelo+", con una temperatura de "+menorTemperaturaAnimalSinPelo;
        // i)El nombre y raza del gato sin pelos mas liviano
        if(contadorGato!=0)
        {
            mensaje=mensaje+"   -   El nombre y raza del gato sin pelos mas liviano es : nombre: "+nombreMasLivianoSinPelos+", raza: "+razaMasLivianoSinPelos+ ", hablando de gatos...";
        }
        else
        {
            mensaje=mensaje+"    -   NO se ingresaron gatos sin pelo."
        }
    }
    else
    {
        mensaje="No se puede ingresaron mascoas sin pelo "
    }
    //IMPORTANTE este mensaje imprime resultados de punto D y I
    alert(mensaje);


    // c)El nombre de la ultima mascota de tipo "otra cosa"
    //nota: puedo verificar imprimir esto con la variable "contadorOtraCosA" del punto E
    if(contadorOtraCosA!=0)
    {
        mensaje="El nombre de la ultima mascota de tipo 'otra cosa' es "+nombreUltimaMascotaOtraCosa;
        promedioTemperaturaOtraCosa=sumatoriaTemperaturaOtraCosa/contadorOtraCosA;
    }
    else
    {
        mensaje="Ne ingresaron mascotas de tipo 'otra cosa'"
    }


    // e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
    if(contadorGato!=0)
    {
        promedioTemperaturaGato=sumatoriaTemperaturaGato/contadorGato;
    }
    if(contadorPerro!=0)
    {
        promedioTemperaturaPerro=sumatoriaTemperaturaPerro/contadorPerro;
    }
    //mirar arriba para el promedioTemperaturaOtraCosa=sumatoriaTemperaturaOtraCosa/contadorOtraCosA; en el punto C
    //SIGO CON // e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
    if(promedioTemperaturaGato>promedioTemperaturaPerro && promedioTemperaturaGato>promedioTemperaturaOtraCosa)
    {
        //gato
        mensaje='el tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal es gato con un promedio de '+promedioTemperaturaGato;
    }
    else
    {
        if(promedioTemperaturaPerro>promedioTemperaturaOtraCosa)
        {
            //perro
            mensaje='el tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal es gato con un promedio de '+promedioTemperaturaPerro;
        }
        else
        {
            //otra cosa
            mensaje='el tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal es gato con un promedio de '+promedioTemperaturaOtraCosa;
        }
    }
    //imprimo // e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
    alert(mensaje);


    
    // f)Sumando gatos y perros que porcentaje del total de mascotas son?
    if(contadorPerro!=0 || contadorPerro!=0)
    {
        porcentajeGatosYPerros=(contadorGato+contadorOtraCosA)*100/(contadorGato+contadorPerro+contadorOtraCosA);
        mensaje="Sumando gatos y perros que porcentaje del total de mascotas "+porcentajeGatosYPerros+"%";
    }
    else
    {
        mensaje="No se ingreso ni gatos ni perros, por lo cual no se puede calcular Sumando gatos y perros que porcentaje del total de mascotas"
    }
    alert(mensaje);



    // g)Que estado clinico tiene la menor cantidad de mascotas  
    if(contadorMascotasInternadas<contadorMascotasAdoptadas && contadorMascotasInternadas<contadorMascotasEnfermas && contadorMascotasInternadas!=0)
    {
        //internadas
        mensaje="El estado clinico que tiene la menor cantidad de mascotas es internadas, con "+contadorMascotasInternadas;
    }
    else
    {
        if(contadorMascotasAdoptadas<contadorMascotasEnfermas && contadorMascotasAdoptadas!=0)
        {
            //adoptadas
            mensaje="El estado clinico que tiene la menor cantidad de mascotas es adoptadas, con "+contadorMascotasAdoptadas;
        }
        else
        {
            //enfermas
            mensaje="El estado clinico que tiene la menor cantidad de mascotas es enfermas, con "+contadorMascotasEnfermas;
        }
    }
    alert(mensaje);

    // H)Cual es el promedio de kilos de peso de tomando todas las mascotas
    //simpre hay almenos UNA mascota
    promedioDeKilos=sumatoriaDeKilos/contadorMascotas;
    mensaje="promedio de kilos de peso de tomando todas las mascotas es "+promedioDeKilos;
    alert(mensaje);

    // i)El nombre y raza del gato sin pelos mas liviano
    // este mensaje se envia junto con el punto D




    
    /*

    necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
    el tipo de pelaje (corto, largo , sin pelo),
    la edad de la mascota (edad validada);
    el nombre (una palabra) 
    la raza  (una palabra) 
    el peso (peso validado) 
    el estadoClinico (enfermo,internado o adopcion)
    la temperaruta corporal

    gato
    corto
    5 años
    michi
    calle
    3 kg
    adopcion
    38

    perro
    sin pelo
    3 años
    negrito nombre
    callejero
    4 kg
    enfermo
    36

    otra cosa
    sin pelo
    7 años
    toto
    DERAZA
    5 kg
    adopcion
    34


    El perro mas pesado se llama negrito, tiene un peso de 4
    El porcentaje de enfermos sobre el total de mascotas es 33.333333333333336
    El animal sin pelo con menor temperatura corporal es :otra cosa, con una temperatura de 34   -   El nombre y raza del gato sin pelos mas liviano es : nombre: michi, raza: calle, hablando de gatos...
    el tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal es gato con un promedio de 38
    Sumando gatos y perros que porcentaje del total de mascotas 66.66666666666667%
    
    
    El estado clinico que tiene la menor cantidad de mascotas es enfermo, con 1

    promedio de kilos de peso de tomando todas las mascotas es 4

    */



}//FIN DE LA FUNCIÓN
