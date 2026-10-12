<?php
	sleep(3); // Algunos segundos de delay para visualizar el efecto Ajax

	// Instanciacion de objeto de dato
	$objPersona = new stdClass;

	// Asignacion de propiedades con valores obtenidos del arreglo asociativo global $_POST
	$objPersona->codUsuario = $_POST['codUsuario'] ?? "";
	$objPersona->apellido = $_POST['apellido'] ?? "";
	$objPersona->nombre = $_POST['nombre'] ?? "";

	$jsonPersona = json_encode($objPersona);

	header("Content-Type: application/json");
	echo $jsonPersona;
?>
