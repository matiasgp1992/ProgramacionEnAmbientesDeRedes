var acumulador = 0;
var display = document.getElementById("display");

function agregarDigito(digito) {
	display.value = display.value + digito;
}

function sumarAcumulador() {
	var valor = parseFloat(display.value) || 0;
	acumulador = acumulador + valor;
}

function mostrarAcumulador() {
	alert("Acumulador: " + acumulador);
}

function borrarDisplay() {
	display.value = "";
}

function borrarAcumulador() {
	acumulador = 0;
}

var botonesDigitos = document.querySelectorAll(".digito");
botonesDigitos.forEach(function (boton) {
	boton.addEventListener("click", function () {
		agregarDigito(boton.dataset.digito);
	});
});

document.getElementById("btnSumarAcumulador").addEventListener("click", sumarAcumulador);
document.getElementById("btnMostrarAcumulador").addEventListener("click", mostrarAcumulador);
document.getElementById("btnBorrarAcumulador").addEventListener("click", borrarAcumulador);
document.getElementById("btnBorrarDisplay").addEventListener("click", borrarDisplay);
