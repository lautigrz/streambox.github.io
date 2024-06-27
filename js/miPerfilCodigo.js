function contraseñasCumplenRequisitos(contrasenia, repetirContrasenia) {
    
    
    /*Si son iguales*/
    if (contrasenia !== repetirContrasenia) {
        return false;
    }
    /*Al menos 8 caracteres*/ 
    if (contrasenia.length < 8 || repetirContrasenia.length < 8) {
        return false;
    }

    /*2 letras, 2 nums y 2 caracteres especiales*/
    let letras = contrasenia.match(/[a-zA-Z]/g);
    let numeros = contrasenia.match(/[0-9]/g);
    let especiales = contrasenia.match(/[!@#$%^&*(),.?":{}|<>]/g);

    return letras && letras.length >= 2 &&
           numeros && numeros.length >= 2 &&
           especiales && especiales.length >= 2;
}

function validarTarjetaCredito(){
    let numTarjeta = document.getElementById('numTarjeta').value.trim();
    let claveTarjeta = document.getElementById('claveTarjeta').value.trim();
    let botonGuardar = document.getElementById('guardar');

    let longitudValida = numTarjeta.length >= 16 && numTarjeta.length <= 19;

    /* 3 num distintos de cero*/
    let claveValida = /^\d{3}$/.test(claveTarjeta) && claveTarjeta !== "000";

    /*Validar par de la suma*/
    let sumaNumeros = 0;
    for (let i = 0; i < numTarjeta.length - 1; i++) {
        sumaNumeros += parseInt(numTarjeta.charAt(i), 10);
    }
    let ultimoDigito = parseInt(numTarjeta.charAt(numTarjeta.length - 1), 10);
    let sumaEsImpar = sumaNumeros % 2 !== 0;

    /* Verificar segun la suma*/ 
    let queSeanPares = (sumaEsImpar && ultimoDigito % 2 === 0) ||
                            (!sumaEsImpar && ultimoDigito % 2 !== 0);

    /* Verifica para habilitar el botón*/
    botonGuardar.disabled = !(longitudValida && claveValida && queSeanPares);
}

function habilitarEnvioFormulario() {
    let contrasenia = document.getElementById('contrasenia').value;
    let repetirContrasenia = document.getElementById('repetircontrasenia').value;
    let radioButtons = document.querySelectorAll('input[type="radio"]');
    let botonGuardar = document.getElementById('guardar');
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    /* Verifica si las contraseñas coinciden y cumplen */
    let contraseñasValidas = contraseñasCumplenRequisitos(contrasenia, repetirContrasenia);

    /* Verifica si al menos un radio button está seleccionado*/
    let algunSeleccionado = Array.from(radioButtons).some(radio => radio.checked);

    /* Verifica si al menos un checkbox está seleccionado*/
    let algunCheckboxSeleccionado = Array.from(checkboxes).some(checkbox => checkbox.checked);

   /* Que se habilite o deshabilite si se cumplen o no las condiciones*/
    botonGuardar.disabled = !(contraseñasValidas && algunSeleccionado && algunCheckboxSeleccionado);

    let tarjetaCreditoForm = document.getElementById('ingresar-tarjeta');
    let radioTarjetaCredito = document.getElementById('tarjetaCredito');

    if (radioTarjetaCredito.checked) {
        tarjetaCreditoForm.style.display = 'block';
    } else {
        tarjetaCreditoForm.style.display = 'none';
        /* Resetear los campos de tarjeta de crédito al cambiar de opción*/
        document.getElementById('numTarjeta').value = '';
        document.getElementById('claveTarjeta').value = '';
    }

    /* Almacenar en localStorage el método de pago seleccionado y sus datos*/
    let metodoPagoSeleccionado = Array.from(radioButtons).find(radio => radio.checked);
    if (metodoPagoSeleccionado) {
        let datosMetodoPago = {
            metodoPago: metodoPagoSeleccionado.value,
            numTarjeta: document.getElementById('numTarjeta').value,
            claveTarjeta: document.getElementById('claveTarjeta').value
        };
        localStorage.setItem('metodoPago', JSON.stringify(datosMetodoPago));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let radioButtons = document.querySelectorAll('input[type="radio"]');
    let contraseniaInput = document.getElementById('contrasenia');
    let repetirContraseniaInput = document.getElementById('repetircontrasenia');
    let numTarjetaInput = document.getElementById('numTarjeta');
    let claveTarjetaInput = document.getElementById('claveTarjeta');

    let botonGuardar = document.getElementById('guardar');
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', habilitarEnvioFormulario);
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', habilitarEnvioFormulario);
    });

    contraseniaInput.addEventListener('input', habilitarEnvioFormulario);
    repetirContraseniaInput.addEventListener('input', habilitarEnvioFormulario);
     numTarjetaInput.addEventListener('input', validarTarjetaCredito);
     claveTarjetaInput.addEventListener('input', validarTarjetaCredito);
    
    
    habilitarEnvioFormulario();
});