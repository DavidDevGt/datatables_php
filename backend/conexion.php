<?php
// Datos de conexión a la base de datos
$host = "localhost";
$usuario = "root";
$password = "";
$base_datos = "biblioteca_virtual";

// Intentar establecer conexión a la base de datos
$conn = new mysqli($host, $usuario, $password, $base_datos);

// Verificar la conexión y mostrar un mensaje de error en caso de fallo
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
