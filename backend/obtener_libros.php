<?php
// Incluir el archivo de conexión a la base de datos
require_once 'conexion.php';

// Definir el tipo de respuesta como JSON
header('Content-Type: application/json');

// Consulta para obtener todos los libros
$sql = "SELECT * FROM libros";
$resultado = $conn->query($sql);

// Arreglo para almacenar los datos de los libros
$libros = array();

// Extraer datos de la consulta y añadirlos al arreglo
while($fila = $resultado->fetch_assoc()) {
    $libros[] = $fila;
}

// Devolver los datos en formato JSON
echo json_encode(["data" => $libros]);

// Cerrar la conexión a la base de datos
$conn->close();
?>
