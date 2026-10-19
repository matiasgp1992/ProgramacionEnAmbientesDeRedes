<?php
	include("./datosConexion.php");
	include("./registraError.php");

	header("Content-Type: application/json; charset=utf-8");

	sleep(2); // demora para ver la espera de la respuesta del lado del cliente

	// Recepcion de variables del requerimiento
	$orden = $_POST['orden'] ?? "idContrato";
	$f_contratos_idContrato = $_POST['f_contratos_idContrato'] ?? "";
	$f_contratos_dniDeudor = $_POST['f_contratos_dniDeudor'] ?? "";
	$f_contratos_apellidoNombres = $_POST['f_contratos_apellidoNombres'] ?? "";
	$f_contratos_codPlan = $_POST['f_contratos_codPlan'] ?? "";
	$f_contratos_fechaContrato = $_POST['f_contratos_fechaContrato'] ?? "";

	// El orden se concatena en la sentencia, por eso solo se aceptan nombres de campo conocidos
	$ordenesValidos = ["idContrato", "dniDeudor", "apellidoNombres", "montoTotalFinanciado", "fechaContrato", "codPlan"];
	if (!in_array($orden, $ordenesValidos)) {
		$orden = "idContrato";
	}

	$respuesta_estado = "";
	$contratos = [];

	// Apertura de conexion con el motor
	try {
		$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
		$dbh = new PDO($dsn, $user, $password); /*Database Handler*/
		$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$respuesta_estado = $respuesta_estado . "\nconexion exitosa";
	} catch (PDOException $e) {
		$respuesta_estado = $respuesta_estado . "\nError en la conexion: " . $e->getMessage();
		registraError("salidaJsonContratos.php - Error en la conexion: " . $e->getMessage());
		$dbh = null;
	}

	if ($dbh != null) {
		try {
			// Sentencia con ordenamiento y filtro
			$sql = "select c.idContrato, c.dniDeudor, c.apellidoNombres, c.montoTotalFinanciado, c.fechaContrato, c.codPlan, p.descripcionPlan ";
			$sql = $sql . "from contratos c inner join planesDePago p on c.codPlan = p.codPlan where ";
			$sql = $sql . "c.idContrato LIKE CONCAT('%',:idContrato,'%') and ";
			$sql = $sql . "c.dniDeudor LIKE CONCAT('%',:dniDeudor,'%') and ";
			$sql = $sql . "c.apellidoNombres LIKE CONCAT('%',:apellidoNombres,'%') and ";
			$sql = $sql . "c.codPlan LIKE CONCAT('%',:codPlan,'%') and ";
			$sql = $sql . "c.fechaContrato LIKE CONCAT('%',:fechaContrato,'%')";
			$sql = $sql . " ORDER BY c.$orden";

			$stmt = $dbh->prepare($sql);

			// Vinculacion de sentencia
			$stmt->bindParam(':idContrato', $f_contratos_idContrato);
			$stmt->bindParam(':dniDeudor', $f_contratos_dniDeudor);
			$stmt->bindParam(':apellidoNombres', $f_contratos_apellidoNombres);
			$stmt->bindParam(':codPlan', $f_contratos_codPlan);
			$stmt->bindParam(':fechaContrato', $f_contratos_fechaContrato);

			$stmt->setFetchMode(PDO::FETCH_ASSOC);
			$stmt->execute();

			while ($fila = $stmt->fetch()) {
				$objContrato = new stdClass();
				$objContrato->idContrato = $fila['idContrato'];
				$objContrato->dniDeudor = $fila['dniDeudor'];
				$objContrato->apellidoNombres = $fila['apellidoNombres'];
				$objContrato->montoTotalFinanciado = (float) $fila['montoTotalFinanciado'];
				$objContrato->fechaContrato = $fila['fechaContrato'];
				$objContrato->codPlan = $fila['codPlan'];
				$objContrato->descripcionPlan = $fila['descripcionPlan'];
				array_push($contratos, $objContrato);
			}
			$respuesta_estado = $respuesta_estado . "\nconsulta exitosa";
		} catch (PDOException $e) {
			$respuesta_estado = $respuesta_estado . "\nError en la consulta: " . $e->getMessage();
			registraError("salidaJsonContratos.php - Error en la consulta: " . $e->getMessage());
		}
	}

	$objContratos = new stdClass();
	$objContratos->contratos = $contratos;
	$objContratos->cuenta = count($contratos);
	$objContratos->estado = $respuesta_estado;

	$salidaJson = json_encode($objContratos);

	$dbh = null;

	echo $salidaJson;
?>
