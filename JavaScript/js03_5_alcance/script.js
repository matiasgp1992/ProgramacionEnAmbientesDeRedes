var variableGlobal;

alert("Una variableGlobal fue declarada pero no asignada:\nvar variableGlobal;");
alert("El tipo de variableGlobal es: " + typeof variableGlobal);

document.getElementById("btnConDeclaracion").addEventListener("click", function () {
	var variableGlobal = prompt("Ingrese valor para la variable global:");
	alert("El tipo de la variable local ingresada es: " + typeof variableGlobal);
});

document.getElementById("btnSinDeclaracion").addEventListener("click", function () {
	variableGlobal = prompt("Ingrese valor para la variable global:");
	alert("El valor de variableGlobal es: " + variableGlobal);
});

document.getElementById("btnMostrar").addEventListener("click", function () {
	alert("valor de la variableGlobal: " + variableGlobal);
	alert("tipo de la variableGlobal: " + typeof variableGlobal);
});
