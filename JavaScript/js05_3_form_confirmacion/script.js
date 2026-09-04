document.getElementById("miFormulario").addEventListener("submit", function (event) {
	event.preventDefault();

	var confirmado = confirm("¿Está seguro que desea enviar el formulario?");
	if (confirmado) {
		location.href = "enviado.html";
	}
});

document.getElementById("btnLimpiar").addEventListener("click", function () {
	document.getElementById("nombre").value = "";
	document.getElementById("apellido").value = "";
	document.getElementById("email").value = "";
});
