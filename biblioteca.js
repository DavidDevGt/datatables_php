// Inicializar la tabla con DataTables
$(document).ready(function() {
    var tablaLibros = $('#tablaLibros').DataTable({
        "ajax": "backend/obtener_libros.php",
        "columns": [
            { "data": "id" },
            { "data": "titulo" },
            { "data": "autor" },
            { "data": "genero" },
            { "data": "ano_publicacion" },
            {
                "data": null,
                "defaultContent": "<button class='btn btn-info'>Ver Detalles</button>"
            }
        ]
    });

    // Funcionalidad para mostrar una subtabla con detalles del libro
    $('#tablaLibros tbody').on('click', 'button', function() {
        var tr = $(this).closest('tr');
        var row = tablaLibros.row(tr);
        var data = row.data();

        if (row.child.isShown()) {
            // Si la fila ya está expandida, la colapsamos
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Si la fila está colapsada, la expandimos y mostramos una subtabla
            row.child(format(data)).show();
            tr.addClass('shown');
        }
    });
});

// Función para formatear los datos a mostrar en la subtabla
function format(data) {
    // Aquí puedes definir el contenido que quieres mostrar en la subtabla.
    // Por ejemplo, mostrar la sinopsis del libro en la subtabla:
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Sinopsis:</td>' +
        '<td>' + data.sinopsis + '</td>' +
        '</tr>' +
        '</table>';
}
