var input = document.getElementById("valor");

document.getElementById("btnMuestra").addEventListener("click", function () {
	var valor = parseInt(input.value);
	alert("El valor es: " + valor);
});

document.getElementById("btnSuma1").addEventListener("click", function () {
	var valor = parseInt(input.value);
	input.value = valor + 1;
});

document.getElementById("btnCuadrado").addEventListener("click", function () {
	var valor = parseInt(input.value);
	input.value = valor ** 2;
});

document.getElementById("btnMultiplica2").addEventListener("click", function () {
	var valor = parseInt(input.value);
	input.value = valor * 2;
});

document.getElementById("btnPotencia2").addEventListener("click", function () {
	var valor = parseInt(input.value);
	input.value = 2 ** valor;
});
