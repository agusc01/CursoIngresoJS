/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	alert(nombre);
	console.log(nombre);//UNDEFINED
	/*
	nombre=document.getElementById('txtIdNombre').value;
	//alert("nombre");
 	//alert(nombre);
 	document.getElementById('txtIdEdad').value=nombre;
	console.log(nombre);
	alert(nombre)
	console.log("nombre");
	*/
	nombre=prompt("ingrese nombre");// null, con el cancelar
	console.log(nombre);
	alert(nombre)
	document.getElementById('txtIdEdad').value=nombre;


	//alert(variableNoExiste);



}