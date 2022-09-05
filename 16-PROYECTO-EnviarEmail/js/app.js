// variables
const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

// eventos
eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', iniciarApp);
  email.addEventListener('blur', validarFormulario);
  asunto.addEventListener('blur', validarFormulario);
  mensaje.addEventListener('blur', validarFormulario);
}

// funciones
// inicia la app
function iniciarApp() {
  console.log('App iniciada!');
  btnEnviar.disabled = true;
  btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// valida el formulario
function validarFormulario(e) {
  if (e.target.value.length > 0) {
    //hay datos
  } else {
    console.log(e.target);
    e.target.classList.add('border-2', 'border-red-500');
  }
}
