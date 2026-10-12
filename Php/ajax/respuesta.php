<?php
	sleep(3); // Algunos segundos de delay para simular una respuesta compleja

	$clave = $_POST['clave'] ?? "";

	echo "<p>Data recibida por el servidor. Metodo del requerimiento: <b>" . $_SERVER['REQUEST_METHOD'] . "</b></p>";
	echo "<p>Clave: <b>" . htmlspecialchars($clave) . "</b></p>";
	echo "<p>md5() - 128 bits, 16 pares en hexa:<br><code>" . md5($clave) . "</code></p>";
	echo "<p>sha1() - 160 bits, 20 pares en hexa:<br><code>" . sha1($clave) . "</code></p>";
?>
