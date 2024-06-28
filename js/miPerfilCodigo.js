document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("form");
    let passwordInput = document.getElementById("contrasenia");
    let repeatPasswordInput = document.getElementById("repetircontrasenia");
    let radios = document.querySelectorAll('input[type="radio"]');
    let guardarButton = document.getElementById("guardar");
    let cupones = document.querySelectorAll('input[name="cupon"]');
    

    // Verifica que coincidan las contraseÃ±as
    function contraseniasCoinciden() {
        return passwordInput.value === repeatPasswordInput.value;
    }

    // Verifica la validez de las contraseÃ±as
    function contraseniasSonValidas() {
        let password = passwordInput.value;
    
        if (password.length < 8) {
            return false;
        }
    
        let letras = password.replace(/[^a-zA-Z]/g, "").length;
        let numeros = password.replace(/[^0-9]/g, "").length;
        let caracteresEspeciales = password.replace(/[a-zA-Z0-9]/g, "").length;
        
        return letras >= 2 && numeros >= 2 && caracteresEspeciales >= 2;
    }

    //Verifica que algun radio este sseleccionado
    function algunRadioSeleccionado() {
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                if (radios[i].value === "2") { // Si es "CupÃ³n de pago"
                    return algunCuponSeleccionado();
                } 
                return true;
            }
        }
        return false;
    }

      // Verifica que al menos un cupon este seleccionado
      function algunCuponSeleccionado() {
        for (let i = 0; i < cupones.length; i++) {
            if (cupones[i].checked) {
                return true; 
            }
        }
        return false; 
    }

     // Guarde en el localStorage
     function guardarMetodoPagoEnLocalStorage() {
        
        let metodoPagoSeleccionado = "";
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                metodoPagoSeleccionado = radios[i].value;
                break;
            }
        }
        
        localStorage.setItem("metodoPago", metodoPagoSeleccionado);
    }
    // Habilite el guardado
    function habilitarGuardar() {
        if (contraseniasCoinciden() && contraseniasSonValidas() && algunRadioSeleccionado()) {
            guardarButton.disabled = false;
            guardarMetodoPagoEnLocalStorage(); 
        } else {
            guardarButton.disabled = true;
        }
    }

    
    passwordInput.addEventListener("input", habilitarGuardar);
    repeatPasswordInput.addEventListener("input", habilitarGuardar);
    radios.forEach(radio => {
        radio.addEventListener("change", habilitarGuardar);
    });

    
    cupones.forEach(cupon => {
        cupon.addEventListener("change", habilitarGuardar);
    });

 
    let metodoPagoGuardado = localStorage.getItem("metodoPago");
    if (metodoPagoGuardado) {
     
     for (let i = 0; i < radios.length; i++) {
         if (radios[i].value === metodoPagoGuardado) {
             radios[i].checked = true;
             break;
         }
     }
    }

    habilitarGuardar();
});
