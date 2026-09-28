<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>php base</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<header>
		<h1>php base</h1>
	</header>

	<main>

		<!-- ========== EJERCICIO 1: Texto html fuera del marcado php ========== -->
		<!-- Texto escrito fuera de las marcas de php: se envia al navegador sin procesar -->
		<h2>1. Texto html fuera del marcado php</h2>
		<p>Este parrafo esta escrito fuera de las marcas de php y es enviado directamente al navegador remoto sin ser procesado.</p>

		<hr>

		<?php
			// ========== EJERCICIO 2: Texto html entregado desde php ==========
			echo "<h2>2. Texto html entregado desde php</h2>";
			echo "<p>Todo texto y/o html entregado por el procesador php usando la sentencia echo.</p>";
			echo "<p style='color:green'>Un parrafo color verde (comillas simples dentro de las dobles)</p>";
			echo "<hr>";

			// ========== EJERCICIO 3: Variables ==========
			// Variables: la declaracion se realiza con la asignacion de un valor
			echo "<h2>3. Variables</h2>";

			$a = "valor1";
			echo "<p><span class='var'>\$a</span> = <span class='valor'>" . $a . "</span></p>";
			echo "<p>Tipo de <span class='var'>\$a</span>: <span class='valor'>" . gettype($a) . "</span></p>";

			$b = 2;
			echo "<p><span class='var'>\$b</span> = <span class='valor'>" . $b . "</span></p>";
			echo "<p>Tipo de <span class='var'>\$b</span>: <span class='valor'>" . gettype($b) . "</span></p>";

			$c = 3;
			echo "<p><span class='var'>\$c</span> = <span class='valor'>" . $c . "</span></p>";
			echo "<p>Tipo de <span class='var'>\$c</span>: <span class='valor'>" . gettype($c) . "</span></p>";

			$d = ($b + $c);
			echo "<p><span class='var'>\$d = (\$b + \$c)</span> = <span class='valor'>" . $d . "</span></p>";
			echo "<p>Tipo de <span class='var'>\$d</span>: <span class='valor'>" . gettype($d) . "</span></p>";
			echo "<p class='nota'>Si los tipos de \$b y \$c fueran diferentes (por ejemplo un string no numerico), php devolveria un error.</p>";

			$e = true;
			echo "<p><span class='var'>\$e</span> = <span class='valor'>" . $e . "</span> (el valor true se imprime como 1)</p>";
			echo "<p>Tipo de <span class='var'>\$e</span>: <span class='valor'>" . gettype($e) . "</span></p>";

			$f = false;
			echo "<p><span class='var'>\$f</span> = <span class='valor'>" . $f . "</span> (el valor false se imprime vacio)</p>";
			echo "<p>Tipo de <span class='var'>\$f</span>: <span class='valor'>" . gettype($f) . "</span></p>";

			echo "<hr>";

			// ========== EJERCICIO 4: Constantes ==========
			// Constantes: no llevan el signo $ delante
			echo "<h2>4. Constantes</h2>";

			define("MICONSTANTE", "valorConstante");
			echo "<p><span class='var'>MICONSTANTE</span> = <span class='valor'>" . MICONSTANTE . "</span></p>";
			echo "<p>Tipo de <span class='var'>MICONSTANTE</span>: <span class='valor'>" . gettype(MICONSTANTE) . "</span></p>";

			echo "<hr>";

			// ========== EJERCICIO 5: Arreglo de indice numerico ==========
			echo "<h2>5. Arreglo de indice numerico</h2>";

			$aSaludo = ["Hola", "Hello"];
			array_push($aSaludo, "Ciao");
			array_push($aSaludo, "Bonjour");

			echo "<p class='nota'>Los dos primeros elementos se asignan en la declaracion y los dos ultimos se agregan con array_push().</p>";
			foreach ($aSaludo as $saludo) {
				echo "<p><span class='valor'>" . $saludo . "</span></p>";
			}

			echo "<hr>";

			// ========== EJERCICIO 6: Arreglo de dos dimensiones (arreglo de arreglos) ==========
			echo "<h2>6. Arreglo de dos dimensiones</h2>";

			$aDespedida = ["Adios", "Goodbye", "Ciao", "Au revoir"];
			$aVivienda = ["Casa", "House", "Casa", "Maison"];
			$aDiccionarioBasico = [$aSaludo, $aDespedida, $aVivienda];

			echo "<table>";
			echo "<tr><th>Español</th><th>Ingles</th><th>Italiano</th><th>Frances</th></tr>";
			foreach ($aDiccionarioBasico as $aPalabra) {
				echo "<tr>";
				foreach ($aPalabra as $palabra) {
					echo "<td>" . $palabra . "</td>";
				}
				echo "</tr>";
			}
			echo "</table>";

			echo "<p><span class='var'>\$aDiccionarioBasico[1][3]</span> = <span class='valor'>" . $aDiccionarioBasico[1][3] . "</span></p>";

			echo "<hr>";

			// ========== EJERCICIO 7: Arreglo asociativo ==========
			// Arreglo asociativo: el indice es una cadena en lugar de un numero
			echo "<h2>7. Arreglo asociativo</h2>";

			$renglonDeLiquidacion = [
				"legEmpleado" => "c0001",
				"periodoLiquidado" => "Enero de 2023",
				"salarioBasico" => 2000000,
				"cantidadHorasExtra" => 20
			];

			echo "<table>";
			echo "<tr><th>Clave</th><th>Valor</th><th>Tipo</th></tr>";
			foreach ($renglonDeLiquidacion as $clave => $valor) {
				echo "<tr><td>" . $clave . "</td><td>" . $valor . "</td><td>" . gettype($valor) . "</td></tr>";
			}
			echo "</table>";

			echo "<p>Cantidad de elementos: <span class='valor'>" . count($renglonDeLiquidacion) . "</span></p>";
			echo "<p>Tipo de <span class='var'>\$renglonDeLiquidacion</span>: <span class='valor'>" . gettype($renglonDeLiquidacion) . "</span></p>";

			echo "<hr>";

			// ========== EJERCICIO 8: Expresiones aritmeticas ==========
			echo "<h2>8. Expresiones aritmeticas</h2>";

			$x = 3;
			$y = 4;
			echo "<p><span class='var'>\$x</span> = <span class='valor'>" . $x . "</span> (" . gettype($x) . ")</p>";
			echo "<p><span class='var'>\$y</span> = <span class='valor'>" . $y . "</span> (" . gettype($y) . ")</p>";

			$z = ($x + $y);
			echo "<p>Suma <span class='var'>(\$x + \$y)</span> = <span class='valor'>" . $z . "</span></p>";

			$m = $x * $y;
			echo "<p>Producto <span class='var'>\$x * \$y</span> = <span class='valor'>" . $m . "</span></p>";

			$cociente = $x / $y;
			echo "<p>Cociente <span class='var'>\$x / \$y</span> = <span class='valor'>" . $cociente . "</span> (" . gettype($cociente) . ")</p>";

			echo "<hr>";

			// ========== EJERCICIO 9: Alcance de las variables ==========
			echo "<h2>9. Alcance de las variables</h2>";

			$n1 = 40;
			$n2 = 50;
			echo "<p class='nota'>Las variables declaradas fuera de cualquier funcion tienen alcance global y php las guarda en el arreglo asociativo \$GLOBALS, cuyo indice es el nombre de la variable.</p>";
			echo "<p><span class='var'>\$GLOBALS['n1']</span> = <span class='valor'>" . $GLOBALS['n1'] . "</span></p>";
			echo "<p><span class='var'>\$GLOBALS['n2']</span> = <span class='valor'>" . $GLOBALS['n2'] . "</span></p>";
			echo "<p><span class='var'>\$GLOBALS['n1'] + \$GLOBALS['n2']</span> = <span class='valor'>" . ($GLOBALS['n1'] + $GLOBALS['n2']) . "</span></p>";

			function mostrarVariableLocal() {
				$local = "valorLocal";
				echo "<p>Dentro de la funcion: <span class='var'>\$local</span> = <span class='valor'>" . $local . "</span></p>";
			}

			mostrarVariableLocal();
			echo "<p class='nota'>Las variables declaradas dentro de una funcion solo tienen alcance dentro de la misma: fuera de mostrarVariableLocal() la variable \$local no existe.</p>";
		?>

	</main>

	<footer>
		<a href="../">Volver al indice</a>
	</footer>

</body>
</html>
