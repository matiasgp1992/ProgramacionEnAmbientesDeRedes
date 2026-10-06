// Declaración de una variable de tipo objeto con asignación de valores (pares clave:valor)
var objetoPersona = { nombre: "Pablo", apellido: "Galdi", fechaNac: "01/07/1956" };

// Array de objetos de dato: el primer elemento es objetoPersona
var arregloPersonas = [objetoPersona];

// Se carga el segundo objeto persona con el método push
arregloPersonas.push({ nombre: "Jose", apellido: "Witt", fechaNac: "17/01/1985" });

// Objeto final que representa el arreglo de objetos
var objetoPersonas = { personas: arregloPersonas };

var objNombre = document.getElementById("nombre");
var objApellido = document.getElementById("apellido");
var objFechaNac = document.getElementById("fechaNac");
var objBtCrear = document.getElementById("btnCrear");
var objPresentacion = document.getElementById("presentacion");

// El input date devuelve "aaaa-mm-dd"; se pasa al formato "dd/mm/aaaa" de los objetos persona
function formateaFecha(fechaIso) {
	var partes = fechaIso.split("-");
	return partes[2] + "/" + partes[1] + "/" + partes[0];
}

// Validación HTML5 (required) de los tres inputs con checkValidity()
function entradasValidas() {
	return objNombre.checkValidity() == true && objApellido.checkValidity() == true && objFechaNac.checkValidity() == true;
}

// Habilita el botón Crea persona solo cuando los tres inputs están completos
function todoListo() {
	if (entradasValidas()) {
		objBtCrear.disabled = false;
	}
	else {
		objBtCrear.disabled = true;
	}
}

function creaPersona() {
	if (entradasValidas()) {
		objetoPersonas.personas.push({
			nombre: objNombre.value,
			apellido: objApellido.value,
			fechaNac: formateaFecha(objFechaNac.value)
		});

		objNombre.value = "";
		objApellido.value = "";
		objFechaNac.value = "";
		todoListo();
		objNombre.select();

		listaPersonas();
	}
	else {
		alert("Falla de la validación, asignar variables correctamente");
		objNombre.select();
	}
}

function listaPersonas() {
	// En la variable texto se va sumando contenido HTML (sin usar document.write())
	var texto = "<h2>Presentacion</h2>";
	texto = texto + "<table style='border-collapse:collapse;border:solid'>";

	objetoPersonas.personas.forEach(function (item, indice) {
		texto = texto + "<tr>";
		texto = texto + "<td>" + item.nombre + "</td>";
		texto = texto + "<td>" + item.apellido + "</td>";
		texto = texto + "<td>" + item.fechaNac + "</td>";
		texto = texto + "</tr>";
	});

	texto = texto + "</table>";
	texto = texto + "<h4>Longitud del arreglo de objetos: " + arregloPersonas.length + "</h4>";

	objPresentacion.innerHTML = texto;
	objPresentacion.style.display = "block";
}

function ocultaPresentacion() {
	// display none hace desaparecer al div y recupera el espacio que ocupaba
	objPresentacion.style.display = "none";
}

window.addEventListener("load", function () {
	todoListo();
	objNombre.select();
});

// Se valida al soltar cada tecla; en la fecha también al elegirla desde el calendario (change)
objNombre.addEventListener("keyup", function () {
	todoListo();
});
objApellido.addEventListener("keyup", function () {
	todoListo();
});
objFechaNac.addEventListener("keyup", function () {
	todoListo();
});
objFechaNac.addEventListener("change", function () {
	todoListo();
});

objBtCrear.addEventListener("click", function () {
	creaPersona();
});

document.getElementById("btnListar").addEventListener("click", function () {
	listaPersonas();
});

document.getElementById("btnOcultar").addEventListener("click", function () {
	ocultaPresentacion();
});
