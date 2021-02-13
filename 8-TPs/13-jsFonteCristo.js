/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	
}


function NumerosPares()
{
    var numeroIngresado;
    
    numeroIngresado=document.getElementById('txtIdNumero').value;
    numeroIngresado=parseInt(numeroIngresado);

    if(numeroIngresado<1 || isNaN(numeroIngresado)==true)
    {
        alert("Error, ingrese un número positivo por favor");
        document.getElementById('txtIdNumero').value="";
    }
    else
    {   
        var cantidadDePares;

        cantidadDePares=0;
        console.log("Números pares: ");

        while(numeroIngresado>-1)// para contemplar el cero como número par
        {
            if(numeroIngresado%2==0)
            {
                console.log(numeroIngresado);
                cantidadDePares=cantidadDePares+1;
            }
            
            numeroIngresado=numeroIngresado-1; // último renglón del while
        }
        alert("La cantida de números impares desde el número ingresado al cero es : "+cantidadDePares)
    }
}//fin function NumerosPares()

function NumerosImpares()
{
    var numeroIngresado;
    
    numeroIngresado=document.getElementById('txtIdNumero').value;
    numeroIngresado=parseInt(numeroIngresado);

    if(numeroIngresado<1 || isNaN(numeroIngresado)==true)
    {
        alert("Error, ingrese un número positivo por favor");
        document.getElementById('txtIdNumero').value="";
    }
    else
    {   
        var cantidadDeImpares;

        cantidadDeImpares=0;
        console.log("Números impares: ");

        while(numeroIngresado>0)
        {
            if(numeroIngresado%2==1)
            {
                console.log(numeroIngresado);
                cantidadDeImpares=cantidadDeImpares+1;
            }
            
            numeroIngresado=numeroIngresado-1; // último renglón del while
        }
        alert("La cantida de números impares desde el número ingresado al cero es : "+cantidadDeImpares)
    }
}//fin function NumerosImpares()

function NumerosDivisibles()
{
    var numeroIngresado;
    
    numeroIngresado=document.getElementById('txtIdNumero').value;
    numeroIngresado=parseInt(numeroIngresado);

    if(numeroIngresado<1 || isNaN(numeroIngresado)==true)
    {
        alert("Error, ingrese un número positivo por favor");
        document.getElementById('txtIdNumero').value="";
    }
    else
    {   
        var cantidadDeDivisores;

        cantidadDeDivisores=0;
        divisor=1;
        
        console.log("Números divisores: ");
        while(divisor<101)
        {
            if(numeroIngresado%divisor==0)
            {
                console.log(divisor);
                cantidadDeDivisores=cantidadDeDivisores+1;
            }
            
            divisor=divisor+1; // último renglón del while
        }
        alert("La cantida de números divisores desde el número ingresado desde uno al cien es : "+cantidadDeDivisores)
    }
}//fin function NumerosDivisibles()

function VerificarPrimo()
{
    var numeroIngresado;
    
    numeroIngresado=document.getElementById('txtIdNumero').value;
    numeroIngresado=parseInt(numeroIngresado);

    if(numeroIngresado<1 || isNaN(numeroIngresado)==true)
    {
        alert("Error, ingrese un número positivo por favor");
        document.getElementById('txtIdNumero').value="";
    }
    else
    {   
        var primo;
        var mensaje;
        var contador;

        primo=true;//parto de la idea que sería un número primo
        
        contador=3;// el contador empieza en 3, porque 1,2, y 3 son números primos
        
        //la condición primo==true, es para que deje que buscar si encontro un divisior (por ende es NO primo)
        while(numeroIngresado>contador && primo==true)
        {            
            if(numeroIngresado%contador==0)
            {
                primo=false;
                console.log("primer divisor encontrado: "+contador); //esto sería para ver porque NO es primo, muestra el primer divisor encontrado
            }
            contador=contador+1; // último renglón del while
        }

        mensaje="El número ingresado "
        if(primo==true)
        {
            mensaje=mensaje+"es primo"
        }
        else
        {
            mensaje=mensaje+"NO es primo";
        }
        console.log(mensaje);
        alert(mensaje);
        
    }//fin if(numeroIngresado<1 || isNaN(numeroIngresado)==true)
}//fin function VerificarPrimo()

function NumerosPrimos()
{
    var numeroIngresado;
    
    numeroIngresado=document.getElementById('txtIdNumero').value;
    numeroIngresado=parseInt(numeroIngresado);

    if(numeroIngresado<1 || isNaN(numeroIngresado)==true)
    {
        alert("Error, ingrese un número positivo por favor");
        document.getElementById('txtIdNumero').value="";
    }
    else
    {
        var primo;
        var cantidadDePrimos;
        var numeroPrimo;
        var contador;
        
        cantidadDePrimos=0;
        
        console.log("los números primos desde el cero al número ingresado son: ");

        while(numeroIngresado>0)
        {
            
            numeroPrimo=numeroIngresado;
            primo=true;//parto de la idea que sería un número primo
            
            contador=2;// el contador empieza en 2, porque 1 y 2 son números primos, PENDIENDTE: ver como solucionar con contador=3
            
            //la condición primo==true, es para que deje que buscar si encontro un divisior (por ende es NO primo)
            while(numeroIngresado>contador && primo==true)
            {            
                if(numeroIngresado%contador==0)
                {
                    primo=false;
                    // console.log("primer divisor encontrado: "+contador); //esto sería para ver porque NO es primo, muestra el primer divisor encontrado
                }
                contador=contador+1; // último renglón del while
            }


            if(primo==true)
            {
                console.log(numeroPrimo);
                cantidadDePrimos=cantidadDePrimos+1;
            }

            numeroIngresado=numeroIngresado-1;
        }//fin while(numeroIngresado>0)

        alert("La cantidad de números primos entre el número ingresado y el cero es: "+cantidadDePrimos);
        
    }//fin (numeroIngresado<1 || isNaN(numeroIngresado)==true)
}//fin function NumerosPrimos()
