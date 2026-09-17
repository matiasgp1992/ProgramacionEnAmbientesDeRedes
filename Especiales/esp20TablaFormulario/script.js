const objJson = JSON.parse(textoContratos);
const objPlanes = JSON.parse(textoPlanDePago);

var cantidadContratos = 0;
var montoAcumulado = 0;

function generaUrlQr(argIdContrato) {
	var urlAccesoContrato = window.location.href.split("?")[0] + "?idContrato=" + argIdContrato;
	return "https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=" + encodeURIComponent(urlAccesoContrato);
}

function actualizaTotales() {
	$("#totalContratos").text(cantidadContratos + " contratos");
	$("#totalFinanciado").text("$ " + montoAcumulado.toLocaleString("es-AR"));
}

function agregaFilaContrato(argValor, argEsNueva) {
	var objTr = $("<tr>");
	if (argEsNueva) {
		objTr.addClass("filaNueva");
	}

	objTr.append($("<td>").attr("campo-dato", "contratos_idContrato").text(argValor.idContrato));
	objTr.append($("<td>").attr("campo-dato", "contratos_dniDeudor").text(argValor.dniDeudor));
	objTr.append($("<td>").attr("campo-dato", "contratos_apellidoNombres").text(argValor.apellidoNombres));
	objTr.append($("<td>").attr("campo-dato", "contratos_montoTotalFinanciado").text("$ " + argValor.montoTotalFinanciado.toLocaleString("es-AR")));
	objTr.append($("<td>").attr("campo-dato", "contratos_fechaContrato").text(argValor.fechaContrato));
	objTr.append($("<td>").attr("campo-dato", "contratos_planDePago").text(argValor.descripcionPlan));

	var objTdQr = $("<td>").attr("campo-dato", "contratos_qr");
	objTdQr.append($("<img>").attr("src", generaUrlQr(argValor.idContrato)).attr("alt", "QR " + argValor.idContrato));
	objTr.append(objTdQr);

	$("#tbDatos").append(objTr);

	cantidadContratos++;
	montoAcumulado += argValor.montoTotalFinanciado;
	actualizaTotales();
}

function cargaDatos() {
	objJson.contratos.forEach(function(argValor, argIndice) {
		agregaFilaContrato(argValor, false);
	});
}

function vaciaDatos() {
	$("#tbDatos").empty();
	cantidadContratos = 0;
	montoAcumulado = 0;
	actualizaTotales();
}

function creaOpcionesPlanDePago() {
	objPlanes.planDePago.forEach(function(argValor, argIndice) {
		var objOpcion = document.createElement("option");
		objOpcion.setAttribute("className", "elementoOptionSelect");
		objOpcion.setAttribute("value", argValor.codPlan);
		objOpcion.innerHTML = argValor.descripcionPlan;
		document.getElementById("selectPlanDePago").appendChild(objOpcion);
	});
}

function procesaAltaContrato(argEvento) {
	argEvento.preventDefault();

	var objSelectPlan = document.getElementById("selectPlanDePago");

	var objContrato = {
		idContrato: document.getElementById("idContrato").value,
		dniDeudor: document.getElementById("dniDeudor").value,
		apellidoNombres: document.getElementById("apellidoNombres").value,
		montoTotalFinanciado: Number(document.getElementById("montoTotalFinanciado").value),
		fechaContrato: document.getElementById("fechaContrato").value,
		descripcionPlan: objSelectPlan.options[objSelectPlan.selectedIndex].innerHTML
	};

	agregaFilaContrato(objContrato, true);

	document.getElementById("formContrato").reset();
	$("#ventanaModal").attr("class", "ventanaModalApagado");
}

$(document).ready(function() {
	creaOpcionesPlanDePago();

	$("#btCargarDatos").click(function() {
		cargaDatos();
	});

	$("#btVaciarDatos").click(function() {
		vaciaDatos();
	});

	$("#btCargarForm").click(function() {
		$("#ventanaModal").attr("class", "ventanaModalPrendido");
	});

	$("#btCerrarModal").click(function() {
		document.getElementById("formContrato").reset();
		$("#ventanaModal").attr("class", "ventanaModalApagado");
	});

	document.getElementById("formContrato").addEventListener("submit", procesaAltaContrato);
});
