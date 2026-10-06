var objFormulario = document.getElementById("formAbm");
var objApellido = document.getElementById("apellido");
var objNombres = document.getElementById("nombres");
var objSaldo = document.getElementById("saldo");

var objBtReset = document.getElementById("btnBlanquear");
var objBtAlta = document.getElementById("btnAlta");
var objBtModi = document.getElementById("btnModi");
var objBtBaja = document.getElementById("btnBaja");

// Carga inicial del documento: todos los botones apagados y foco en el apellido
function cargaInicial() {
	objBtReset.disabled = true;
	objBtAlta.disabled = true;
	objBtModi.disabled = true;
	objBtBaja.disabled = true;
	objApellido.select();
}

// Valida todas las entradas con checkValidity() y habilita o deshabilita los botones
function todoListo() {
	// Blanquear se habilita apenas hay algún dato cargado
	if (objApellido.value != "" || objNombres.value != "" || objSaldo.value != "") {
		objBtReset.disabled = false;
	}
	else {
		objBtReset.disabled = true;
	}

	// Alta, Modi y Baja quedan condicionales a la validación del formulario completo
	if (objFormulario.checkValidity()) {
		objBtAlta.disabled = false;
		objBtModi.disabled = false;
		objBtBaja.disabled = false;
	}
	else {
		objBtAlta.disabled = true;
		objBtModi.disabled = true;
		objBtBaja.disabled = true;
	}
}

// Envío del formulario usando JavaScript a la página de cada operación
function enviaFormulario(pagina) {
	objFormulario.method = "get";
	objFormulario.action = pagina;
	objFormulario.target = "_blank";
	objFormulario.submit();
}

window.addEventListener("load", function () {
	cargaInicial();
});

objApellido.addEventListener("keyup", function () {
	todoListo();
});
objNombres.addEventListener("keyup", function () {
	todoListo();
});
objSaldo.addEventListener("keyup", function () {
	todoListo();
});

objApellido.addEventListener("focus", function () {
	todoListo();
});
objNombres.addEventListener("focus", function () {
	todoListo();
});
objSaldo.addEventListener("focus", function () {
	todoListo();
});

objBtReset.addEventListener("click", function () {
	objFormulario.reset();
	cargaInicial();
});

objBtAlta.addEventListener("click", function () {
	enviaFormulario("./alta.html");
});

objBtModi.addEventListener("click", function () {
	enviaFormulario("./modi.html");
});

objBtBaja.addEventListener("click", function () {
	enviaFormulario("./baja.html");
});
