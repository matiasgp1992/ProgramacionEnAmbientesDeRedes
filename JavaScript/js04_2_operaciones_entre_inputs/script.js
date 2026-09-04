function obtenerValores() {
	var e1 = parseFloat(document.getElementById("entrada1").value);
	var e2 = parseFloat(document.getElementById("entrada2").value);
	var e3 = parseFloat(document.getElementById("entrada3").value);
	return [e1, e2, e3];
}

document.getElementById("btnSuma").addEventListener("click", function () {
	var v = obtenerValores();
	document.getElementById("resultado").value = v[0] + v[1] + v[2];
});

document.getElementById("btnPromedio").addEventListener("click", function () {
	var v = obtenerValores();
	document.getElementById("resultado").value = (v[0] + v[1] + v[2]) / 3;
});

document.getElementById("btnMayor").addEventListener("click", function () {
	var v = obtenerValores();
	document.getElementById("resultado").value = Math.max(v[0], v[1], v[2]);
});
