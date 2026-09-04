var arregloFrutas = [];
arregloFrutas = ["banana", "manzana"];

arregloFrutas.push(prompt("El arregloFrutas ya tiene dos elemntos asignados por programa (banana y manzana), agregue el tercer elemento con indice numerico"));

document.write("<p>Tipo para arregloFrutas: <strong>" + typeof arregloFrutas + "</strong></p>");
document.write("<p>Primer elemento cargado desde programa: " + arregloFrutas[0] + "</p>");
document.write("<p>Segundo elemento cargado desde programa: " + arregloFrutas[1] + "</p>");
document.write("<p>Tercer elemento cargado desde teclado: " + arregloFrutas[2] + "</p>");
document.write("<p>Cantidad de elementos: " + arregloFrutas.length + "</p>");
