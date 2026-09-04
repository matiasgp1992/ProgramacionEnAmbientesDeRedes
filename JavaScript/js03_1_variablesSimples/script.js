var z, a, b, c, suma1, suma2;
let q;

function mostrar(nombre, valor) {
	document.getElementById("resultado").innerHTML =
		"<h3>Valor de " + nombre + ": " + valor + "</h3>" +
		"<h3>Tipo de " + nombre + ": " + typeof valor + "</h3>";
}

document.getElementById("btnZ").addEventListener("click", function () {
	z = "otro valor para z";
	mostrar("z", z);
});

document.getElementById("btnQ").addEventListener("click", function () {
	q = "Nuevo valor para q";
	mostrar("q", q);
});

document.getElementById("btnA").addEventListener("click", function () {
	a = 1;
	mostrar("a", a);
});

document.getElementById("btnB").addEventListener("click", function () {
	b = "1";
	mostrar("b", b);
});

document.getElementById("btnC").addEventListener("click", function () {
	c = 2;
	mostrar("c", c);
});

document.getElementById("btnSuma1").addEventListener("click", function () {
	suma1 = a + b;
	mostrar("suma1", suma1);
});

document.getElementById("btnSuma2").addEventListener("click", function () {
	suma2 = a + c;
	mostrar("suma2", suma2);
});
