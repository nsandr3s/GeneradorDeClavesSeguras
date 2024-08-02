// Evento para generar la clave cuando se hace clic en el botón 'Generar'
document.getElementById('generar').addEventListener('click', () => {
    // Obtener los valores de las configuraciones
    const longitud = document.getElementById('longitud').value;
    const incluirMayusculas = document.getElementById('mayusculas').checked;
    const incluirMinusculas = document.getElementById('minusculas').checked;
    const incluirNumeros = document.getElementById('numeros').checked;
    const incluirSimbolos = document.getElementById('simbolos').checked;

    // Generar la clave basada en las configuraciones
    const clave = generarClave(longitud, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos);

    // Mostrar la clave generada en el campo de texto
    document.getElementById('clave').value = clave;
});

// Evento para copiar la clave al portapapeles cuando se hace clic en el botón 'Copiar'
document.getElementById('copiar').addEventListener('click', () => {
    // Seleccionar el texto de la clave
    const clave = document.getElementById('clave');
    clave.select();
    // Copiar el texto seleccionado al portapapeles
    document.execCommand('copy');
    // Mostrar una alerta indicando que la clave se ha copiado
    alert('Clave copiada al portapapeles');
});

// Función para generar la clave
function generarClave(longitud, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos) {
    // Definir los conjuntos de caracteres a utilizar
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let caracteres = '';

    // Incluir los conjuntos de caracteres según las configuraciones
    if (incluirMayusculas) caracteres += mayusculas;
    if (incluirMinusculas) caracteres += minusculas;
    if (incluirNumeros) caracteres += numeros;
    if (incluirSimbolos) caracteres += simbolos;

    // Generar la clave seleccionando caracteres aleatorios
    let clave = '';
    for (let i = 0; i < longitud; i++) {
        clave += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return clave;
}
