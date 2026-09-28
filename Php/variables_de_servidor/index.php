<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Variables de servidor</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<header>
		<h1>Variables de servidor</h1>
	</header>

	<main>

		<p class="nota">$_SERVER es un arreglo global de indice asociativo: el indice es una cadena que describe cada elemento.</p>

		<?php
			function mostrarTabla($titulo, $claves) {
				echo "<h2>" . $titulo . "</h2>";
				echo "<table>";
				echo "<tr><th>Variable</th><th>Valor</th></tr>";
				foreach ($claves as $clave) {
					$valor = $_SERVER[$clave] ?? "";
					echo "<tr><td>" . $clave . "</td><td>" . htmlspecialchars($valor) . "</td></tr>";
				}
				echo "</table>";
			}

			mostrarTabla("Variables del servidor", ["SERVER_ADDR", "SERVER_NAME", "SERVER_PORT", "HTTP_HOST", "DOCUMENT_ROOT"]);
			mostrarTabla("Variables del cliente", ["REMOTE_ADDR", "REMOTE_PORT"]);
			mostrarTabla("Variables del requerimiento", ["SERVER_PROTOCOL", "SCRIPT_NAME", "REQUEST_METHOD", "REQUEST_URI", "QUERY_STRING"]);

			echo "<hr>";

			echo "<h2>Todas las variables de \$_SERVER</h2>";
			foreach ($_SERVER as $key_name => $key_value) {
				if (is_array($key_value)) {
					$key_value = implode(" ", $key_value);
				}
				echo "<p><span class='var'>" . $key_name . "</span> = <span class='valor'>" . htmlspecialchars($key_value) . "</span></p>";
			}
		?>

	</main>

	<footer>
		<a href="../">Volver al indice</a>
	</footer>

</body>
</html>
