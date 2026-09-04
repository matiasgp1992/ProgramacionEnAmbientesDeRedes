function convertirAMayusculas() {
	this.value = this.value.toUpperCase();
}

document.getElementById("nombre").addEventListener("change", convertirAMayusculas);
document.getElementById("apellido").addEventListener("change", convertirAMayusculas);
