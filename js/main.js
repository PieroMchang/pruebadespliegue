// Función disparada por el botón "Crear cuenta"
function validarRegistro() {
    // 1. Capturamos los valores
    let contrasena1 = document.getElementById("pass1").value;
    let contrasena2 = document.getElementById("pass2").value;
    
    // 2. Validación de seguridad básica
    if (contrasena1 === "" || contrasena2 === "") {
        alert("Por favor, completa ambas contraseñas.");
        return; // Detiene la función
    }

    // 3. Comparación estricta (El requisito del examen)
    if (contrasena1 === contrasena2) {
        alert("Registro exitoso. ¡Bienvenido!");
    } else {
        alert("Error: Las contraseñas no coinciden.");
    }
}
