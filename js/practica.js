var claveCorrecta = "estaeslaclavecorrecta";
var intentosFallidos = 0;

function validarClave() {
    var claveIngresada = document.getElementById("claveInput").value;

    if (claveIngresada === claveCorrecta) {
        intentosFallidos = 0;
        mostrarMensaje("Acceso concedido", "verde");
    } else {
        intentosFallidos++;
        if (intentosFallidos < 3) {
            mostrarMensaje("Clave incorrecta", "rojo");
        } else {
            mostrarMensaje("Intruso", "rojo");
        }
    }
}

function mostrarMensaje(mensaje, color) {
    var mensajeElement = document.getElementById("mensaje");
    mensajeElement.textContent = mensaje;
    mensajeElement.className = color;
}

