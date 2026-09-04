document.getElementById("btnAlert").addEventListener("click", function () {
	alert("Mensaje de alerta ejecutado desde el evento click");
});

document.getElementById("btnDiv").addEventListener("click", function () {
	var nuevoDiv = document.createElement("div");
	nuevoDiv.textContent = "Texto agregado dinámicamente con un nuevo div";
	document.getElementById("resultado").appendChild(nuevoDiv);
});
