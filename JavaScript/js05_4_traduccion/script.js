// Mensajes por idioma: cada uno tiene la parte grande y la parte chica del título
var mensajes = {
	es: { grande: "Aprendé a", chico: "estudiar en serio" },
	en: { grande: "Learn to", chico: "study seriously" }
};

function traducir() {
	// window.navigator.languages es el array de lenguajes declarados para el navegador.
	// El primer elemento es el default language y es de tipo string, por ejemplo "es-AR" o "en-US"
	var lenguajeDefault = window.navigator.languages[0];

	// substr(start, length) se queda con las dos primeras letras: "es-AR" -> "es"
	var idioma = lenguajeDefault.substr(0, 2);
	var mensaje;

	if (idioma == "en") {
		mensaje = mensajes.en;
	} else {
		mensaje = mensajes.es;
	}

	document.getElementById("tituloGrande").innerHTML = mensaje.grande;
	document.getElementById("tituloChico").innerHTML = mensaje.chico;
	document.documentElement.lang = idioma == "en" ? "en" : "es";
}

window.addEventListener("load", function () {
	traducir();
});

// Vuelve a traducir si el usuario cambia el idioma del navegador con la página abierta
window.addEventListener("languagechange", function () {
	traducir();
});
