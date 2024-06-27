let contenidoEmail = document.getElementById("emailIniciarSesion");
let contenidoContraseña = document.getElementById("contraseñaIniciarSesion");
let formulario = document.querySelector(".formulario");
let errorMail = document.querySelector(".errorMail");
let errorPass = document.querySelector(".errorPass");



// Manejar el evento de envío del formulario correctamente
formulario.addEventListener("submit", function(event) {
    

    // Obtener los valores actuales de los campos
    let email = contenidoEmail.value;
    let contra = contenidoContraseña.value;
    errorPass.innerHTML = "";
    // Validar ambos campos
    if (validarQueAmbosCamposEstenConContenido(email, contra) && validarEmail(email) && validarContraseña(contra)) {
        // Si pasa todas las validaciones, guardar el email en localStorage
        localStorage.setItem("usuario", email);
        // Redirigir al usuario a la página principal después de una validación exitosa
        document.formulario.submit();
        
    } else {
        // Si no pasa alguna validación, mostrar un mensaje adecuado
        if (!validarEmail(email)) {
            errorMail.innerHTML = "<h3>Correo electrónico no válido.</h3>";
        }
        if (!validarContraseña(contra)) {
            errorPass.innerHTML = "<h3>La contraseña debe tener al menos 8 caracteres.</h3>";
        }
        event.preventDefault();
    }
});

function validarEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarContraseña(contra) {
    return contra.length >= 8; // Revisar la longitud de la contraseña
}

function validarQueNoTengaNumeros(param) {
    let regex = /\d/;
    return !regex.test(param); // Validar que no haya números
}

function validarQueAmbosCamposEstenConContenido(email, contra) {

    errorMail.innerHTML = "";
    errorPass.innerHTML = "";

    if (email.trim() !== "" && contra.trim() !== "") {
        return true;
    }
    if (email.trim() === "") {
        errorMail.innerHTML = "<h3>El campo de correo electrónico no puede estar vacío.</h3>";
    }
    if (contra.trim() === "") {
        errorPass.innerHTML = "<h3>El campo de contraseña no puede estar vacío.</h3>";
    }
    return false;

 
}
