<?php
	include("./datosConexion.php");
	include("./registraError.php");

	header("Content-Type: application/json; charset=utf-8");

	sleep(2); // demora para ver la espera de la respuesta del lado del cliente

	$respuesta_estado = "";
	$planesDePago = [];

	// Apertura de conexion con el motor
	try {
		$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
		$dbh = new PDO($dsn, $user, $password); /*Database Handler*/
		$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$respuesta_estado = $respuesta_estado . "\nconexion exitosa";
	} catch (PDOException $e) {
		$respuesta_estado = $respuesta_estado . "\nError en la conexion: " . $e->getMessage();
		registraError("salidaJsonPlanesDePago.php - Error en la conexion: " . $e->getMessage());
		$dbh = null;
	}

	// Consulta de la tabla auxiliar
	if ($dbh != null) {
		try {
			$sql = "select codPlan, descripcionPlan from planesDePago order by codPlan";

			$stmt = $dbh->prepare($sql);
			$stmt->setFetchMode(PDO::FETCH_ASSOC);
			$stmt->execute();

			while ($fila = $stmt->fetch()) {
				$objPlan = new stdClass();
				$objPlan->codPlan = $fila['codPlan'];
				$objPlan->descripcionPlan = $fila['descripcionPlan'];
				array_push($planesDePago, $objPlan);
			}
			$respuesta_estado = $respuesta_estado . "\nconsulta exitosa";
		} catch (PDOException $e) {
			$respuesta_estado = $respuesta_estado . "\nError en la consulta: " . $e->getMessage();
			registraError("salidaJsonPlanesDePago.php - Error en la consulta: " . $e->getMessage());
		}
	}

	$objPlanesDePago = new stdClass();
	$objPlanesDePago->planesDePago = $planesDePago;
	$objPlanesDePago->cuenta = count($planesDePago);
	$objPlanesDePago->estado = $respuesta_estado;

	$salidaJson = json_encode($objPlanesDePago);

	$dbh = null;

	echo $salidaJson;
?>
