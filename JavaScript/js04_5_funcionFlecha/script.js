const suma = (a, b) => {
	let c = a + b;
	return c;
};

document.getElementById("btnSuma").addEventListener("click", function () {
	var a = parseFloat(document.getElementById("entrada1").value);
	var b = parseFloat(document.getElementById("entrada2").value);
	document.getElementById("resultado").value = suma(a, b);
});
