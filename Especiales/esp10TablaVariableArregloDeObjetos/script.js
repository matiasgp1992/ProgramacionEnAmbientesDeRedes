const objJson = JSON.parse(textoContratos);

function generaUrlQr(argIdContrato) {
	var urlAccesoContrato = window.location.href.split("?")[0] + "?idContrato=" + argIdContrato;
	return "https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=" + encodeURIComponent(urlAccesoContrato);
}

function cargaDatos() {
	var montoAcumulado = 0;

	objJson.contratos.forEach(function(argValor, argIndice) {
		var objTr = $("<tr>");

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

		montoAcumulado += argValor.montoTotalFinanciado;
	});

	$("#totalContratos").text(objJson.contratos.length + " contratos");
	$("#totalFinanciado").text("$ " + montoAcumulado.toLocaleString("es-AR"));
}

function vaciaDatos() {
	$("#tbDatos").empty();
	$("#totalContratos").text("0 contratos");
	$("#totalFinanciado").text("$ 0");
}

$(document).ready(function() {
	$("#btCargarDatos").click(function() {
		vaciaDatos();
		cargaDatos();
	});

	$("#btVaciarDatos").click(function() {
		vaciaDatos();
	});
});
