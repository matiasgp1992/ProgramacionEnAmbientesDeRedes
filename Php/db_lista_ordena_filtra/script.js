var cantidadContratos = 0;
var montoAcumulado = 0;

function generaUrlQr(argIdContrato) {
	var urlAccesoContrato = window.location.href.split("?")[0] + "?idContrato=" + argIdContrato;
	return "https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=" + encodeURIComponent(urlAccesoContrato);
}

function actualizaTotales() {
	document.getElementById("totalContratos").textContent = cantidadContratos;
	document.getElementById("totalFinanciado").textContent = "$ " + montoAcumulado.toLocaleString("es-AR");
}

function creaCelda(argCampoDato, argTexto) {
	var objTd = document.createElement("td");
	objTd.setAttribute("campo-dato", argCampoDato);
	objTd.textContent = argTexto;
	return objTd;
}

function agregaFilaContrato(argValor) {
	var objTr = document.createElement("tr");

	objTr.appendChild(creaCelda("contratos_idContrato", argValor.idContrato));
	objTr.appendChild(creaCelda("contratos_dniDeudor", argValor.dniDeudor));
	objTr.appendChild(creaCelda("contratos_apellidoNombres", argValor.apellidoNombres));
	objTr.appendChild(creaCelda("contratos_montoTotalFinanciado", "$ " + argValor.montoTotalFinanciado.toLocaleString("es-AR")));
	objTr.appendChild(creaCelda("contratos_fechaContrato", argValor.fechaContrato));
	objTr.appendChild(creaCelda("contratos_planDePago", argValor.descripcionPlan));

	var objTdQr = creaCelda("contratos_qr", "");
	var objImg = document.createElement("img");
	objImg.setAttribute("src", generaUrlQr(argValor.idContrato));
	objImg.setAttribute("alt", "QR " + argValor.idContrato);
	objTdQr.appendChild(objImg);
	objTr.appendChild(objTdQr);

	document.getElementById("tbDatos").appendChild(objTr);

	montoAcumulado += argValor.montoTotalFinanciado;
}

function vaciaTbody() {
	document.getElementById("tbDatos").innerHTML = "";
}

function vaciaDatos() {
	vaciaTbody();
	cantidadContratos = 0;
	montoAcumulado = 0;
	actualizaTotales();
}

function muestraMensajeTbody(argTexto) {
	var objTr = document.createElement("tr");
	objTr.className = "filaMensaje";
	var objTd = document.createElement("td");
	objTd.setAttribute("colspan", 7);
	objTd.textContent = argTexto;
	objTr.appendChild(objTd);
	document.getElementById("tbDatos").appendChild(objTr);
}

function cargaPlanesDePago() {
	fetch("./salidaJsonPlanesDePago.php")
		.then(respuesta => {
			return respuesta.text();
		})
		.then(textoDeRespuesta => {
			alert("Llego el JSON de planes de pago:\n\n" + textoDeRespuesta);

			var objPlanes = JSON.parse(textoDeRespuesta);
			var objSelect = document.getElementById("f_contratos_codPlan");

			// Primera opcion vacia para no filtrar por plan
			var objOpcionVacia = document.createElement("option");
			objOpcionVacia.setAttribute("value", "");
			objSelect.appendChild(objOpcionVacia);

			objPlanes.planesDePago.forEach(function(argValor, argIndice) {
				var objOpcion = document.createElement("option");
				objOpcion.setAttribute("value", argValor.codPlan);
				objOpcion.textContent = argValor.descripcionPlan;
				objSelect.appendChild(objOpcion);
			});
		})
		.catch(error => alert("Error producido: " + error));
}

function cargaTabla() {
	// 1) Vaciar de objetos el tbody
	vaciaDatos();

	// 2) Mensaje de espera en el tbody
	muestraMensajeTbody("Esperando respuesta del servidor...");

	// 3) Datos de orden y filtros para enviar al servidor
	const objDatosOrdenFiltros = new URLSearchParams();
	objDatosOrdenFiltros.append("orden", document.getElementById("orden").value);
	objDatosOrdenFiltros.append("f_contratos_idContrato", document.getElementById("f_contratos_idContrato").value);
	objDatosOrdenFiltros.append("f_contratos_dniDeudor", document.getElementById("f_contratos_dniDeudor").value);
	objDatosOrdenFiltros.append("f_contratos_apellidoNombres", document.getElementById("f_contratos_apellidoNombres").value);
	objDatosOrdenFiltros.append("f_contratos_codPlan", document.getElementById("f_contratos_codPlan").value);
	objDatosOrdenFiltros.append("f_contratos_fechaContrato", document.getElementById("f_contratos_fechaContrato").value);

	alert("Se va a disparar el requerimiento asincronico. Datos enviados:\n\n" + objDatosOrdenFiltros.toString());

	// 4) Disparo del AJAX y cadena de promesas
	fetch("./salidaJsonContratos.php", {
		method: "POST", // datos enviados en el body del requerimiento
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: objDatosOrdenFiltros
	})
		.then(respuesta => {
			return respuesta.text();
		})
		.then(textoDeRespuesta => {
			alert("Llego la respuesta del servidor:\n\n" + textoDeRespuesta);

			var objContratos = JSON.parse(textoDeRespuesta);

			vaciaTbody();
			objContratos.contratos.forEach(function(argValor, argIndice) {
				agregaFilaContrato(argValor);
			});

			cantidadContratos = objContratos.cuenta;
			actualizaTotales();
		})
		.catch(error => {
			vaciaTbody();
			alert("Error producido: " + error);
		});
}

// Ordenamiento: cada titulo carga el input orden y dispara la carga
function asignaOrdenamiento(argCampo) {
	document.getElementById("th_contratos_" + argCampo).addEventListener("click", function() {
		document.getElementById("orden").value = argCampo;
		cargaTabla();
	});
}

// Filtros: Enter en un input de texto o cambio en el desplegable dispara la carga
function asignaFiltro(argCampo) {
	var objFiltro = document.getElementById("f_contratos_" + argCampo);
	if (objFiltro.tagName == "SELECT") {
		objFiltro.addEventListener("change", cargaTabla);
	} else {
		objFiltro.addEventListener("keydown", function(argEvento) {
			if (argEvento.key == "Enter") {
				cargaTabla();
			}
		});
	}
}

document.addEventListener("DOMContentLoaded", function() {
	cargaPlanesDePago();

	document.getElementById("btCargarDatos").addEventListener("click", cargaTabla);
	document.getElementById("btVaciarDatos").addEventListener("click", vaciaDatos);

	asignaOrdenamiento("idContrato");
	asignaOrdenamiento("dniDeudor");
	asignaOrdenamiento("apellidoNombres");
	asignaOrdenamiento("montoTotalFinanciado");
	asignaOrdenamiento("fechaContrato");
	asignaOrdenamiento("codPlan");

	asignaFiltro("idContrato");
	asignaFiltro("dniDeudor");
	asignaFiltro("apellidoNombres");
	asignaFiltro("fechaContrato");
	asignaFiltro("codPlan");
});
