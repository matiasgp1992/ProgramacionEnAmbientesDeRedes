<?php
	// Escribe una linea en errores.log con la fecha y hora del servidor
	function registraError($textoError) {
		$puntero = fopen(__DIR__ . "/errores.log", "a");
		fwrite($puntero, date("Y-m-d H:i") . " ");
		fwrite($puntero, $textoError);
		fwrite($puntero, "\n");
		fclose($puntero);
	}
?>
