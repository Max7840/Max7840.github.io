function genera_rfc() {
    var nombre = document.getElementById('nombre').value;
    var apellidoPaterno = document.getElementById('ap').value;
    var apellidoMaterno = document.getElementById('am').value;
    var anio = document.getElementById('anio').value;
    var mes = document.getElementById('mes').value;
    var dia = document.getElementById('dia').value;

    if (anio.length === 4) {
        anio = anio.slice(2); // Tomamos los últimos dos dígitos del año
    }

    var rfc = apellidoPaterno.slice(0, 2) + apellidoMaterno.slice(0, 1) + nombre.slice(0, 1);
    rfc = rfc + anio + mes + dia;
    rfc = rfc.toUpperCase(); // El RFC debe ser en mayúsculas
    document.getElementById('resultado').value = rfc;
}
