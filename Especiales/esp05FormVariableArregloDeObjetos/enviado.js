function generaQr(argIdContrato) {
	var urlAccesoContrato = window.location.href.split("?")[0] + "?idContrato=" + argIdContrato;
	var objDivQr = document.getElementById("divQr");

	var objImgQr = document.createElement("img");
	objImgQr.setAttribute("src", "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=" + encodeURIComponent(urlAccesoContrato));
	objImgQr.setAttribute("alt", "QR contrato " + argIdContrato);
	objDivQr.appendChild(objImgQr);
}

document.addEventListener("DOMContentLoaded", function() {
	var objParametros = new URLSearchParams(window.location.search);
	var idContrato = objParametros.get("idContrato") || "";

	document.getElementById("idContratoEnviado").innerHTML = idContrato;
	generaQr(idContrato);
});
