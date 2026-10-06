var objContenedor = document.getElementById("contenedor");

function crear() {
	// createElement() crea en memoria un nuevo objeto del DOM
	var objDiv = document.createElement("div");

	// En una variable de tipo texto se concatena el contenido HTML del nuevo objeto.
	// childNodes.length es la cantidad de nodos actuales; +1 para numerar desde 1
	var textoHtml = "<h1>Elemento creado: ";
	textoHtml = textoHtml + (objContenedor.childNodes.length + 1);
	textoHtml = textoHtml + "</h1>";

	objDiv.innerHTML = textoHtml;

	// Clase CSS para el nuevo objeto, que todavía está solo en memoria
	objDiv.className = "claseObjetoDinamico";

	// appendChild() lo agrega al contenedor y lo convierte en elemento HTML
	objContenedor.appendChild(objDiv);
	objContenedor.scrollTop = objContenedor.scrollHeight;
}

function limpiar() {
	// No hay un método que borre todo de una vez: se borra el primer nodo mientras queden nodos
	while (objContenedor.childNodes.length > 0) {
		objContenedor.removeChild(objContenedor.childNodes[0]);
	}
}

function info() {
	alert("longitud del childNodes: " + objContenedor.childNodes.length);

	objContenedor.childNodes.forEach(function (item, indice) {
		alert("Objeto con índice " + indice + ": " + item.textContent);
	});
}

document.getElementById("btnCrear").addEventListener("click", function () {
	crear();
});

document.getElementById("btnLimpiar").addEventListener("click", function () {
	limpiar();
});

document.getElementById("btnInfo").addEventListener("click", function () {
	info();
});
