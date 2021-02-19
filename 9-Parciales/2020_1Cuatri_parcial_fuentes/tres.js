/*

Alumno: Cacciatori, Agustín
3)
Enunciado:

Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

*/


function mostrar()
{
	//creación de variables
	//generales
	var nombre;
	var edad;
	var sexo; //f o m
	var estadoCivil;//soltero, casado, viudo
	var temperatura;
	//while
	var seguir;
	//punto A
	var temperaturaMasAlta;
	var nombreTemperaturaMasAlta;
	var banderaTemperatura;
	//punto B
	var mayorViudo;
	//punto C
	var cantidadSolteros;//también se utiliza en el punto E (para sacar promedio)
	var cantidadViudos;
	//punto D
	var cantidadTerceraEdadTemperatura;
	//punto E
	var SumatoriaEdadSolteros;
	var promedioEdadSolteros;
	//impresión de resultados
	var mensajes;

	//inicialización
	seguir="si";
	banderaTemperatura=true;
	mayorViudo=0;
	cantidadSolteros=0;
	cantidadViudos=0;
	cantidadTerceraEdadTemperatura=0;
	SumatoriaEdadSolteros=0;

	while(seguir=="si")
	{
		nombre=prompt("Ingrese el nombre de la persona: ");

		edad=prompt("Ingrese la edad (18 a 90años): ");
		edad=parseInt(edad);
		//NO lo pido pero yo valido la edad en cierto rango
		while(isNaN(edad)==true || edad<18 || edad>90)
		{
			edad=prompt("Error, ingrese la edad (18 a 90años): ");
			edad=parseInt(edad);
		}

		sexo=prompt("Ingrese el sexo: ");
		while(sexo!='f' && sexo!='m')
		{
			sexo=prompt("Error, ingrese el sexo: ");
		}

		estadoCivil=prompt("Ingrese el estado civil (soltero | casado | viudo): ");
		while(estadoCivil!='soltero' && estadoCivil!='casado' && estadoCivil!='viudo')
		{
			estadoCivil=prompt("Error, ingrese el estado civil (soltero | casado | viudo):");
		}

		temperatura=prompt("Ingrese la temperatura corporal (34 a 40): ");
		temperatura=parseInt(temperatura);
		////NO lo pido pero yo valido la edad en cierto rango
		while(isNaN(temperatura)==true || temperatura<34 || temperatura>40)
		{
			temperatura=prompt("Ingrese la temperatura corporal (34 a 40): ");
			temperatura=parseInt(temperatura);
		}

		//punto A
		if(banderaTemperatura==true)
		{
			banderaTemperatura=false;
			temperaturaMasAlta=temperatura;
			nombreTemperaturaMasAlta=nombre;
		}
		else
		{
			if(temperatura>temperaturaMasAlta)
			{
				temperaturaMasAlta=temperatura;
				nombreTemperaturaMasAlta=nombre;
			}
		}

		//punto B
		if(edad>17) //mayor de edad, 18 o más 
		{
			if(estadoCivil=="viudo")
			{
				mayorViudo=mayorViudo+1;
			}
		}


		//punto C (adentro punto E)
		if(sexo=='m')
		{
			switch(estadoCivil)
			{
				case "soltero":
					cantidadSolteros=cantidadSolteros+1; //punto C y E
					SumatoriaEdadSolteros=SumatoriaEdadSolteros+edad; //punto E
					break;
				case "casado":
					break;
				// case "viudo":
				default://esto funcionaría si solo si esta bien la validación del estado Civil
					cantidadViudos=cantidadViudos+1; //punto C en particular
					break;
			}
		}

		//punto D
		if(edad>60)
		{
			if(temperatura>38)
			{
				cantidadTerceraEdadTemperatura=cantidadTerceraEdadTemperatura+1;
			}
		}



		seguir=prompt("Si quiere seguir ingrese 'si' "); //último renglón del while
		
	}//fin while(seguir=="si") ... bucle principal

	//punto A
	mensajes="La persona com más temperatura se llama: "+nombreTemperaturaMasAlta;
	alert(mensajes);

	//punto B
	mensajes="La cantidad de mayores de edad que están viudos son: "+mayorViudo;
	alert(mensajes);

	//punto C
	mensajes="La cantidad de solteros es: "+cantidadSolteros+", y la cantidad de viudos es: "+cantidadViudos;
	alert(mensajes);

	//punto D
	mensajes="La cantidad de personas que son de la tercera edad (más de 60 años) y tiene más de 38°C de temperatura corporal es: "+cantidadTerceraEdadTemperatura;
	alert(mensajes);

	//punto E
	promedioEdadSolteros=SumatoriaEdadSolteros/cantidadSolteros;
	mensajes="El promedio de edad de los hombres solteros es: "+promedioEdadSolteros;
	alert(mensajes);


}



/*

miguel
20
m
soltero
35

florencia
30
f
soltero
36

agustin
25
m
soltero
37

federico
35
m
soltero
36

beatriz
80
f
viudo
36

manuel
21
m
casado
39

melani
28
f
casado
37

La persona com más temperatura se llama: manuel
La cantidad de mayores de edad que están viudos son: 1
La cantidad de solteros es: 3, y la cantidad de viudos es: 0 (sobre hombres)
La cantidad de personas que son de la tercera edad (más de 60 años) y tiene más de 38°C de temperatura corporal es: 0
El promedio de edad de los hombres solteros es: 26.666666666666668

*/