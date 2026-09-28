<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Variables tipo objeto</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<header>
		<h1>Variables tipo objeto</h1>
	</header>

	<main>

		<p class="nota">Las variables de tipo objeto se parecen a los arreglos asociativos: sus atributos suelen ser de tipos diferentes. Se declaran instanciando la clase estandar stdClass.</p>

		<?php
			// Arreglo que contendra los objetos renglon de pedido
			$renglonesPedido = [];

			$objRenglonPedido = new stdClass();
			$objRenglonPedido->codArt = "cp001";
			$objRenglonPedido->descripcion = "Cuaderno tapa dura";
			$objRenglonPedido->cantidad = 3;
			$objRenglonPedido->precioUnitario = 2000;
			array_push($renglonesPedido, $objRenglonPedido);

			$objRenglonPedido = new stdClass();
			$objRenglonPedido->codArt = "cp002";
			$objRenglonPedido->descripcion = "Lapicera azul";
			$objRenglonPedido->cantidad = 10;
			$objRenglonPedido->precioUnitario = 500;
			array_push($renglonesPedido, $objRenglonPedido);

			$objRenglonPedido = new stdClass();
			$objRenglonPedido->codArt = "cp003";
			$objRenglonPedido->descripcion = "Resma A4";
			$objRenglonPedido->cantidad = 2;
			$objRenglonPedido->precioUnitario = 7500;
			array_push($renglonesPedido, $objRenglonPedido);

			// Barrido del array de renglones: un renglon completo de tabla por objeto
			echo "<h2>Renglones de pedido</h2>";
			echo "<table>";
			echo "<tr><th>Codigo</th><th>Descripcion</th><th>Cantidad</th><th>Precio unitario</th></tr>";
			foreach ($renglonesPedido as $objRenglonPedido) {
				echo "<tr>";
				echo "<td>" . $objRenglonPedido->codArt . "</td>";
				echo "<td>" . $objRenglonPedido->descripcion . "</td>";
				echo "<td>" . $objRenglonPedido->cantidad . "</td>";
				echo "<td>" . $objRenglonPedido->precioUnitario . "</td>";
				echo "</tr>";
			}
			echo "</table>";

			echo "<hr>";

			// Objeto renglones: contiene el arreglo y atributos adicionales
			$objRenglonesPedido = new stdClass();
			$objRenglonesPedido->renglonesPedido = $renglonesPedido;
			$objRenglonesPedido->cantidadDeRenglones = count($renglonesPedido);

			echo "<h2>Objeto renglones de pedido</h2>";
			echo "<p><span class='var'>\$objRenglonesPedido->cantidadDeRenglones</span> = <span class='valor'>" . $objRenglonesPedido->cantidadDeRenglones . "</span></p>";

			echo "<hr>";

			// Codificacion del resultado como texto JSON
			$jsonRenglonesPedido = json_encode($objRenglonesPedido);

			echo "<h2>Codificacion JSON</h2>";
			echo "<p class='nota'>json_encode() convierte el objeto en texto JSON para enviarlo al navegador remoto.</p>";
			echo "<pre>" . $jsonRenglonesPedido . "</pre>";
		?>

	</main>

	<footer>
		<a href="../">Volver al indice</a>
	</footer>

</body>
</html>
