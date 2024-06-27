let formulario = document.querySelector(".registrar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let emailRepeat = document.getElementById("emailRepeat");
let contraseña = document.getElementById("contraseña");
let codigoSeguridad = document.getElementById("codigoSeguridad");
let numeroTarjeta = document.getElementById("numeroTarjeta");
let botonConfirmar = document.getElementById("botonConfirmar");
let boton = document.getElementById("botonConfirmar");
let plan = document.querySelector(".plan");
let nombreTitular = document.getElementById("nombreTitular")
let apellidoTitular = document.getElementById("apellidoTitular")
let calendario = document.getElementById("calendario")


let errorNombre = document.getElementById("errorNombre")
let errorApellido = document.getElementById("errorApellido")
let errorEmail = document.getElementById("errorEmail")
let errorEmailRepea = document.getElementById("errorEmailRepeat");
let errorPass = document.getElementById("errorPass");
let errorPlan = document.getElementById("errorPlan");
let errorNombres = document.getElementById("errorNombres")
let errorCode = document.getElementById("errorCode");
let errorCard = document.getElementById("errorTarjeta");





formulario.addEventListener("submit", function (event) {
    

    errorNombre.innerHTML = "";
    errorApellido.innerHTML = "";
    errorEmail.innerHTML = "";
    errorEmailRepea.innerHTML = ""
    errorPass.innerHTML = "";
    errorPlan.innerHTML = "";
    errorNombres.innerHTML = "";
    errorCode.innerHTML = "";
    errorCard.innerHTML = "";
    let validarFormulario = true;

    // Validar que todos los campos estén completos antes de proceder
    if (validarCamposCompletos()) {
        // Validar que el nombre y apellido contengan solo letras
        if (!validarSoloLetras(nombre.value)) {
            validarFormulario = false;
            errorNombre.innerHTML = "<h3>Solo se admiten letras en el nombre.</h3>"
        }
        if(!validarSoloLetras(apellido.value)){
            validarFormulario = false;
            errorApellido.innerHTML ="<h3>Solo se admiten letras en el apellido.</h3>"
        }
        // Validar el formato del email
        if (!validarEmail(email.value)) {
            validarFormulario = false;
            errorEmail.innerHTML = "<h3>Email invalido.</h3>"
        }
        // Validar que los emails coincidan
        if (!validarEmailRepeat(email.value, emailRepeat.value)) {
            validarFormulario = false;
            errorEmailRepea.innerHTML = "<h3>El email no coincide.</h3>"
        }
        // Validar la fortaleza de la contraseña
        if (!validarContraseña(contraseña.value)) {
            validarFormulario = false;
            errorPass.innerHTML = "<h3>Contraseña invalida.</h3>"
        }
        if(plan.value === "0"){
            validarFormulario = false;
            errorPlan.innerHTML = "<h3>Debe elegir un plan.</h3>"
        }

        if(!validarSoloLetras(nombreTitular.value)){
            validarFormulario = false;
            errorNombres.innerHTML = "<h3>Ambos campos deben contener solo letras.</h3>"
        }
        // Validar el número de tarjeta de crédito
        if (!validarNumeroTarjeta(numeroTarjeta.value)) {
            validarFormulario = false;
            errorCard.innerHTML = "<h3>Numero de tarjeta invalido.</h3>"
        } 
        // Validar el código de seguridad de la tarjeta
        if (!validarNumeroSeguridad(codigoSeguridad.value)) {
            validarFormulario = false;
            errorCode.innerHTML = "<h3>Codigo de seguridad invalido.</h3>"
        }
        if(!validarFechaVencimiento(calendario.value)){
            validarFormulario = false;
            errorCode.innerHTML += "<h3>Fecha incorrecta.</h3>"
        }
        if (!validarFormulario) {
            event.preventDefault();
        }
    }
    else{
        alert("campos vacios")
        event.preventDefault();
    }
   
    
});

// Función para validar que solo haya letras en un texto
function validarSoloLetras(texto) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(texto);
}

// Función para validar el formato de un email
function validarEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

// Función para validar que dos emails coincidan
function validarEmailRepeat(email1, email2) {
    return email1 === email2;
}

// Función para validar la fortaleza de una contraseña
function validarContraseña(contraseña) {
    // Al menos 8 caracteres, una mayúscula y un número
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(contraseña);
}

// Función para validar el código de seguridad de la tarjeta (debe ser un número de 3 dígitos no comenzando con 0)
function validarNumeroSeguridad(codigoSeguridad) {
    return codigoSeguridad.length === 3 && codigoSeguridad[0] !== "0";
}

function validarFechaVencimiento(fecha) {
    let hoy = new Date();
    let fechaIngresada = new Date(fecha);

    // Comparar la fecha ingresada con la fecha actual
    return fechaIngresada >= hoy;
  }

// Función para validar que todos los campos requeridos estén completos
function validarCamposCompletos() {
    return (
        nombre.value !== "" &&
        apellido.value !== "" &&
        email.value!== "" &&
        emailRepeat.value !== "" &&
        contraseña.value !== "" &&
        codigoSeguridad.value !== "" &&
        numeroTarjeta.value !== ""
    );
}

// Función para validar el número de tarjeta de crédito
function validarNumeroTarjeta(numeroTarjeta) {
    const numerosSinEspacios = numeroTarjeta.trim();
    // La longitud debe estar entre 16 y 19 caracteres
    if (numerosSinEspacios.length < 16 || numerosSinEspacios.length > 19) {
        return false;
    }

    let numeroSumado = 0;
    let numeroFinal = parseInt(numerosSinEspacios[numerosSinEspacios.length - 1]);
    
    // Sumar todos los dígitos de la tarjeta
    for (let i = 0; i < numerosSinEspacios.length-1; i++) {
        numeroSumado += parseInt(numerosSinEspacios[i]);
    }

    // Validar según el último dígito y la suma total
    if (numeroFinal % 2 === 0) {
        return numeroSumado % 2 !== 0;
    } else  if (numeroFinal % 2 !== 0) {
        return numeroSumado % 2 === 0;
    }
}

