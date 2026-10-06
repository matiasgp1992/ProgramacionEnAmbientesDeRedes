var objFormulario = document.getElementById("miFormulario");
var objDia = document.getElementById("dia");
var objMes = document.getElementById("mes");

// Valida el input al soltar la tecla usando la validación HTML5 (min, max, step)
function validaInput(objInput) {
	// Un input vacío todavía no se valida: el usuario recién empieza a escribir
	if (objInput.value == "" && !objInput.validity.badInput) {
		return;
	}
	if (!objInput.checkValidity()) {
		alert("El valor debe estar entre " + objInput.min + " y " + objInput.max);
		objInput.value = "";
		objInput.select();
	}
}

window.addEventListener("load", function () {
	objDia.select();
});

objDia.addEventListener("keyup", function () {
	validaInput(objDia);
});

objMes.addEventListener("keyup", function () {
	validaInput(objMes);
});

// Envío del formulario usando JavaScript
document.getElementById("btnEnviar").addEventListener("click", function () {
	if (objFormulario.checkValidity()) {
		objFormulario.method = "get";
		objFormulario.action = "./respuestaFormulario.html";
		objFormulario.submit();
	}
	else {
		alert("Valor ingresado no valido!!");
	}
});

document.getElementById("btnReset").addEventListener("click", function () {
	objFormulario.reset();
	objDia.select();
});
