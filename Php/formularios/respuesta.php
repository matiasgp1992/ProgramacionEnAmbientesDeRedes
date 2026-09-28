<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Respuesta del formulario</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<header>
		<h1>Respuesta del formulario</h1>
	</header>

	<main>

		<?php
			$metodo = $_SERVER['REQUEST_METHOD'];
			echo "<p>Metodo del requerimiento: <span class='valor'>" . $metodo . "</span></p>";

			if ($metodo == "POST") {
				$nombre = $_POST['nombre'] ?? "";
				$apellido = $_POST['apellido'] ?? "";
				echo "<p class='nota'>Datos leidos del arreglo \$_POST</p>";
			} else {
				$nombre = $_GET['nombre'] ?? "";
				$apellido = $_GET['apellido'] ?? "";
				echo "<p class='nota'>Datos leidos del arreglo \$_GET</p>";
			}

			echo "<p><span class='var'>Nombre</span> = <span class='valor'>" . htmlspecialchars($nombre) . "</span></p>";
			echo "<p><span class='var'>Apellido</span> = <span class='valor'>" . htmlspecialchars($apellido) . "</span></p>";
		?>

	</main>

	<footer>
		<a href="./">Volver al formulario</a>
	</footer>

</body>
</html>
