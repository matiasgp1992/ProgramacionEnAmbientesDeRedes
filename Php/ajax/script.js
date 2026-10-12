const inputClave = document.getElementById("clave");
const divEstado = document.getElementById("estado");
const divResultado = document.getElementById("resultado");

function cambiarEstado(texto, clase) {
	divEstado.textContent = texto;
	divEstado.className = "estado " + clase;
}

document.getElementById("disparo").addEventListener("click", function () {

	if (inputClave.value.trim() == "") {
		alert("Ingresar una clave antes de disparar el requerimiento");
		inputClave.focus();
		return;
	}

	// Cadena de datos con formato variable1=valor1&variable2=valor2...
	const data = new URLSearchParams();
	data.append("clave", inputClave.value);

	alert("Como se usa el metodo POST en el requerimiento HTTP, los datos viajan en el body con el formato clasico del URL:\n\n" + data.toString());

	// Opciones de configuracion del requerimiento HTTP
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: data
	};

	cambiarEstado("Esperando respuesta... (promesa pendiente)", "pendiente");
	divResultado.innerHTML = "Esperando respuesta...";
	divResultado.className = "resultado pendiente";

	fetch("respuesta.php", options)
		.then(respuesta => {
			return respuesta.text();
		})
		.then(textoDeRespuesta => {
			alert("Llego la respuesta del servidor:\n\n" + textoDeRespuesta);
			divResultado.innerHTML = textoDeRespuesta;
			divResultado.className = "resultado";
			cambiarEstado("Promesa cumplida", "cumplida");
		})
		.catch(error => {
			divResultado.innerHTML = "";
			divResultado.className = "resultado";
			cambiarEstado("Promesa rechazada: " + error, "rechazada");
		});
});
