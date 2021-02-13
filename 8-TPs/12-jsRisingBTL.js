/*
Enunciado:
Rising BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 12. Los datos requeridos son los siguientes:
A. Edad, entre 18 y 90 años inclusive.
B. Sexo, “M” para masculino y “F” para femenino
C. Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D. Sueldo bruto, no menor a 8000.
E. Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F. Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edad;
 	var sexo;
	var auxiliarSexo;// acá se guardara un "o" si es masculino o una "a" si es femenino
 	var estadoCivil;
	var sueldo;
	var legajo;
	var nacionalidad;
	

	// ===== EDAD ========
	edad=prompt("Edad, ingrese entre 18 y 90 años inclusive: ");
	edad=parseInt(edad);
	// A. Edad, entre 18 y 90 años inclusive.
	while(isNaN(edad)==true || edad<18 || edad>90 )
	{
		edad=prompt("Error, ingrese entre 18 y 90 años inclusive");
		edad=parseInt(edad);
	}


	// ===== SEXO ========
	sexo=prompt("Sexo, ingrese 'M' para masculino y 'F' para femenino: ");
	// B. Sexo, “M” para masculino y “F” para femenino (valido mayúscula y minúscula)
	while(isNaN(sexo)==false || (sexo!='F' && sexo!='M' && sexo!='f' && sexo!='m'))
	{
		sexo=prompt("Error, Sexo, ingrese 'M' para masculino y 'F' para femenino: ");
	}
	

	// ===== ESTADO CIVIL ========
	estadoCivil=prompt("Ingrese estado civil, con número:\n1-para soltero,\n2-para casados,\n3-para divorciados \n4-para viudos");
	estadoCivil=parseInt(estadoCivil);
	// C. Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	while(isNaN(estadoCivil)==true || estadoCivil<1 || estadoCivil>4)
	{
		estadoCivil=prompt("Error, Ingrese estado civil, con número:\n1-para soltero,\n2-para casados,\n3-para divorciados \n4-para viudos");
		estadoCivil=parseInt(estadoCivil);
	}


	// ====== SUELDO =========
	sueldo=prompt("Ingerese sueldo bruto, no menor a 8000");
	sueldo=parseInt(sueldo);
	// D. Sueldo bruto, no menor a 8000.
	while(isNaN(sueldo)==true || sueldo<8000)
	{
		sueldo=prompt("Error, Ingerese sueldo bruto, no menor a 8000");
		sueldo=parseInt(sueldo);
	}
	

	// ====== LEGAJO =========
	legajo=prompt("Ingrese número de legajo, numérico de 4 cifras, sin ceros a la izquierda: ");
	legajo=parseInt(legajo);
	// E. Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	while(isNaN(legajo)==true || legajo<1000 || legajo>9999)
	{
		legajo=prompt("Error, Ingrese número de legajo, numérico de 4 cifras, sin ceros a la izquierda: ");
		legajo=parseInt(legajo);
	}
	
	
	// ====== NACIONALIDAD ======
	nacionalidad=prompt("Ingrese Nacionalidad, 'A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados")
	// F. Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados. (valido mayúscula y minúscula)
	while(isNaN(nacionalidad)==false || (nacionalidad!='A' && nacionalidad!='E' && nacionalidad!='N' && nacionalidad!='a' && nacionalidad!='e' && nacionalidad!='n'))
	{
		nacionalidad=prompt("Error, Ingrese Nacionalidad, 'A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados")
	}
	
	// ===== EDAD =====
	edad="Su edad es: "+edad+" años";
	document.getElementById("txtIdEdad").value=edad;

	// ===== SEXO =====
	if(sexo=='f' || sexo=='F')
	{
		sexo="Femenimo";
		auxiliarSexo="a";
	}
	else//este "else" no aplicara bien si no fue bien hecha la validación con el while
	{
		sexo="Masculino";
		auxiliarSexo="o";
	}
	sexo="Su sexo es: "+sexo;
	document.getElementById("txtIdSexo").value=sexo;

	// ===== ESTADO CIVIL =====
	switch(estadoCivil)
	{
		case 1:
			estadoCivil="Solter";
			break;
		case 2:
			estadoCivil="Casad";
			break;
		case 3:
			estadoCivil="Divorciad";
			break;
		// case 4:
		default://este "default" no aplicara bien si no fue bien hecha la validación con el while
			estadoCivil="Viud";
			break;
	}
	estadoCivil="Su estado civil es: "+estadoCivil+auxiliarSexo;
	document.getElementById("txtIdEstadoCivil").value=estadoCivil;

	// ===== SUELDO =====
	sueldo="Su sueldo es: "+sueldo;
	document.getElementById("txtIdSueldo").value=sueldo;

	// ===== LEGAJO =====
	legajo="Su legajo es: "+legajo;
	document.getElementById("txtIdLegajo").value=legajo;

	// ===== NACIONALIDAD =====
	switch(nacionalidad)
	{
		case 'a':
		case 'A':
			nacionalidad="Argentin"
			break;
		case 'e':
		case 'E':
			nacionalidad="Extranjer"
			break;
		// case 'n':
		// case 'N':
		default://este "default" no aplicara bien si no fue bien hecha la validación con el while
			nacionalidad="Nacionaliz"
			break;
	}
	nacionalidad=nacionalidad+auxiliarSexo;
	document.getElementById("txtIdNacionalidad").value=nacionalidad;
	

}//fin function ComenzarIngreso ()
