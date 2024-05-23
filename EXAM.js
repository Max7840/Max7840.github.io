// Función que verifica si una frase es un palíndromo
function checkPalindrome() {
    // Obtiene el valor de la frase del cuadro de texto
    var cadena = document.getElementById('inputPhrase').value;
    var resultado = 'La frase "' + cadena + '" ';

    // Convierte la cadena a minúsculas
    var cadenaOriginal = cadena.toLowerCase();

    // Elimina los espacios de la cadena
    var letrasEspacios = cadenaOriginal.split('');
    var cadenaSinEspacios = '';
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] !== ' ') {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    // Compara la cadena original con su reverso
    var letras = cadenaSinEspacios.split('');
    var letrasReves = cadenaSinEspacios.split('').reverse();
    var iguales = true;
    for (var i in letras) {
        if (letras[i] !== letrasReves[i]) {
            iguales = false;
            break;
        }
    }

    // Actualiza el resultado según la comparación
    if (iguales) {
        resultado += 'es un palíndromo.';
    } else {
        resultado += 'no es un palíndromo.';
    }

    // Muestra el resultado en el párrafo
    document.getElementById('result').innerText = resultado;
}
