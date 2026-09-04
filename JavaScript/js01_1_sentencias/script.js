alert("Alert 1. Nada se pinta todavía en pantalla: el flujo de lectura del documento recién empieza y esta ventana modal lo interrumpe.");

document.write("<h1>Texto2. Mensaje escrito desde java script utilizando el metodo write().</h1>");
document.write("<p>No termino el flujo de escritura del navegador</p>");

window.addEventListener("load", function () {
	alert("Alert 2. El documento ya terminó de leerse, por eso ahora sí se ve Texto1, Texto2 y el texto aclaratorio. Al aceptar, se termina de escribir el documento.");

	var contenedor = document.createElement("div");
	contenedor.innerHTML =
		"<h1>Texto 4 escrito luego de aceptar el segundo alert</h1>" +
		"<h1>Texto5. Escritura agregada al documento una vez cerrado el flujo.</h1>" +
		"<p>Como el flujo de escritura ya terminó, usar document.write() acá pisaría todo el documento, por eso se agrega con el DOM.</p>" +
		"<p>El flujo de escritura sobre el navegador termina un tiempo determinado despues de la lectura de la última linea del documento y de haber cerrado todas las ventanas modales de tipo alert().</p>";

	document.body.appendChild(contenedor);
});
