<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Formularios</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<header>
		<h1>Formularios</h1>
	</header>

	<main>

		<p class="nota">PHP lee los datos recibidos en un requerimiento HTTP y los guarda en los arreglos globales asociativos $_GET y $_POST. El indice del arreglo es el atributo name del input.</p>

		<h2>Formulario con metodo GET</h2>
		<form action="respuesta.php" method="get">
			<label>Nombre: <input type="text" name="nombre"></label>
			<label>Apellido: <input type="text" name="apellido"></label>
			<button type="submit">Enviar por GET</button>
		</form>

		<h2>Formulario con metodo POST</h2>
		<form action="respuesta.php" method="post">
			<label>Nombre: <input type="text" name="nombre"></label>
			<label>Apellido: <input type="text" name="apellido"></label>
			<button type="submit">Enviar por POST</button>
		</form>

		<p class="nota">Tambien se pueden pasar los parametros en el URI despues del caracter "?": <a href="respuesta.php?nombre=Juan&apellido=Perez">respuesta.php?nombre=Juan&amp;apellido=Perez</a></p>

	</main>

	<footer>
		<a href="../">Volver al indice</a>
	</footer>

</body>
</html>
