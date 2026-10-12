const objFormulario = document.getElementById("formulario");
const spanEspera = document.getElementById("espera");

document.getElementById("disparo").addEventListener("click", function () {

	// Misma validacion que el envio tradicional
	if (!objFormulario.reportValidity()) {
		return;
	}

	// Objeto con todos los datos del formulario, listo para enviar como multipart/form-data
	const objDatosFormulario = new FormData(objFormulario);
	console.log("valor del input codUsuario: " + objDatosFormulario.get("codUsuario"));

	// Opciones de configuracion del fetch
	const options = {
		method: "post",
		headers: {},
		body: objDatosFormulario // es el body del requerimiento http
	};

	spanEspera.textContent = "Esperando respuesta...";

	fetch("./respuesta.php", options)
		.then(respuesta => {
			return respuesta.text();
		})
		.then(textoDeRespuesta => {
			spanEspera.textContent = "";
			alert("Llego la respuesta HTTP:\n\n" + textoDeRespuesta);
		})
		.catch(error => {
			spanEspera.textContent = "Error producido: " + error;
		});
});
