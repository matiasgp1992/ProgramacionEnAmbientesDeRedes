<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Form to encrypt</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<header>
		<h1>Form to encrypt</h1>
	</header>

	<main>

		<?php if (isset($_POST['clave'])) { ?>

			<!-- Llego el formulario completado: se encripta la clave recibida -->
			<?php $clave = $_POST['clave']; ?>

			<p>Metodo del requerimiento: <span class="valor"><?php echo $_SERVER['REQUEST_METHOD']; ?></span></p>
			<p><span class="var">Clave recibida</span> = <span class="valor"><?php echo htmlspecialchars($clave); ?></span></p>

			<h2>Encriptacion md5()</h2>
			<p class="nota">128 bits / 8 = 16 pares en hexadecimal</p>
			<pre><?php echo md5($clave); ?></pre>

			<h2>Encriptacion sha1()</h2>
			<p class="nota">160 bits / 8 = 20 pares en hexadecimal</p>
			<pre><?php echo sha1($clave); ?></pre>

			<a href="./">Volver al formulario</a>

		<?php } else { ?>

			<!-- No llegaron datos: el servidor devuelve el formulario -->
			<p class="nota">Envio de un formulario para ser encriptado del lado del servidor. El mismo index.php muestra el formulario o, si recibe $_POST['clave'], devuelve la clave encriptada con md5() y sha1().</p>

			<form action="index.php" method="post">
				<label>Ingresar la clave a encriptar: <input type="text" name="clave" required></label>
				<button type="submit">Obtener encriptacion</button>
			</form>

		<?php } ?>

	</main>

	<footer>
		<a href="../">Volver al indice</a>
	</footer>

</body>
</html>
