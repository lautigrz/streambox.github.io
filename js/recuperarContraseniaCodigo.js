let correo = document.getElementById("email");
let usuario = document.getElementById("usuario");
let botonEnviar = document.querySelector(".enviar");
let form = document.querySelector(".formulario");

let seEnvio = false;

function validarCampos() {
    if (correo.value.trim() !== "" && usuario.value.trim() !== "") {
      botonEnviar.disabled = false;
      seEnvio = true;
    } else {
      botonEnviar.disabled = true;
      seEnvio = false;
    }
  }

correo.addEventListener("input", validarCampos);
usuario.addEventListener("input", validarCampos);

form.addEventListener("submit", (e) => {

    if(seEnvio){
      alert("Mail de recuperacion enviado!");
    }else{
      event.preventDefault()
    }

    // Limpia los campos una vez que ya fue enviado
    correo.value = "";
    usuario.value = "";
})