const objJson = JSON.parse(textoPlanDePago);

function creaOpcionesPlanDePago() {
	objJson.planDePago.forEach(function(argValor, argIndice) {
		var objOpcion = document.createElement("option");
		objOpcion.setAttribute("className", "elementoOptionSelect");
		objOpcion.setAttribute("value", argValor.codPlan);
		objOpcion.innerHTML = argValor.descripcionPlan;
		document.getElementById("selectPlanDePago").appendChild(objOpcion);
	});
}

function procesaAltaContrato(argEvento) {
	argEvento.preventDefault();
	var idContrato = document.getElementById("idContrato").value;

	window.location.href = "enviado.html?idContrato=" + encodeURIComponent(idContrato);
}

$(document).ready(function() {
	creaOpcionesPlanDePago();

	$("#btAbrirModal").click(function() {
		$("#ventanaModal").attr("class", "ventanaModalPrendido");
		$("#contenedor").attr("class", "contenedorPasivo");
	});

	$("#btCerrarModal").click(function() {
		$("#ventanaModal").attr("class", "ventanaModalApagado");
		$("#contenedor").attr("class", "contenedorActivo");
		document.getElementById("formContrato").reset();
	});

	document.getElementById("formContrato").addEventListener("submit", procesaAltaContrato);
});
