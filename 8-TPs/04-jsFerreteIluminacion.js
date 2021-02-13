/*4.	

Alumno: Cacciatori, Agustín

Parte A+B+C+D+E
Ferrete iluminancion Con if (cantidad) y switch (marca)

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() 
{
    var cantidad;
    var marca;
    var descuento;
    var precio;
    var lampara;
    var mensaje;
    var ingresosBrutos;

    descuento=0;
    lampara=35;
    cantidad=document.getElementById("txtIdCantidad").value;
    cantidad=parseInt(cantidad);
    marca=document.getElementById("Marca").value;
    
    if(cantidad>5)
    {
        descuento=50;
    }
    else
    {
        if(cantidad==5)
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento=40;
                    break;
                default:
                    descuento=30;
                    break;
            }
        }
        else
        {
            if(cantidad==4)
            {
                switch(marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento=25;
                        break;
                    default:
                        descuento=20;
                }
            }
            else
            {
                if(cantidad==3)
                {
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                            descuento=15;
                            break;
                        case "FelipeLamparas":
                            descuento=10;
                            break;
                        default:
                            descuento=5;
                    }
                }//fin if(cantidad==3)
            }//fin if(cantidad==4)
        }//fin if(cantidad==5)
    }//fin if(cantidad>5)



    precio=lampara*cantidad*((100-descuento)/100);

    
    if(precio>120)
    {
        ingresosBrutos=precio*0.10;
        precio=precio*1.10;
        mensaje="IIBB Usted pago "+precio+", siendo "+ingresosBrutos+" el impuesto que se pagó";
        alert(mensaje)
    }
    
    document.getElementById("txtIdprecioDescuento").value=precio;

}
