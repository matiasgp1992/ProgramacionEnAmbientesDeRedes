<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>include</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<header>
		<h1>include</h1>
	</header>

	<main>

		<p class="nota">En este ejemplo se utiliza la funcion include(), que incluye codigo php definido en otro archivo, en este caso asignaciones.php. En asignaciones.php se declaran y asignan dos arreglos asociativos, uno para cada persona.</p>

		<?php
			function mostrarPersonas() {
				// Las variables de asignaciones.php son globales, por eso se leen desde $GLOBALS
				echo "<table>";
				echo "<tr><th>Nombre</th><th>Apellido</th><th>Fecha de nacimiento</th></tr>";
				foreach (["persona1", "persona2"] as $nombreVariable) {
					$persona = $GLOBALS[$nombreVariable];
					echo "<tr>";
					echo "<td>" . $persona['nombre'] . "</td>";
					echo "<td>" . $persona['apellido'] . "</td>";
					echo "<td>" . $persona['fechaNacimiento'] . "</td>";
					echo "</tr>";
				}
				echo "</table>";
			}

			echo "<h2>Antes del include</h2>";
			echo "<p class='nota'>Todavia no se incluyo asignaciones.php, por lo tanto las variables no existen: php muestra warnings pero sigue ejecutando el script.</p>";
			mostrarPersonas();

			echo "<hr>";

			include("./asignaciones.php");

			echo "<h2>Despues del include</h2>";
			echo "<p class='nota'>Ahora el codigo de asignaciones.php fue incluido y las variables existen.</p>";
			mostrarPersonas();

			echo "<p>Longitud de <span class='var'>\$persona1</span>: <span class='valor'>" . count($persona1) . "</span></p>";
			echo "<p>Longitud de <span class='var'>\$persona2</span>: <span class='valor'>" . count($persona2) . "</span></p>";

			
		?>

	</main>

	<footer>
		<a href="../">Volver al indice</a>
	</footer>

</body>
</html>
