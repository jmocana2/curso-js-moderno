// variables
const formulario = document.querySelector('#enviar-mail');
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
    //No hay datos
    e.target.classList.add('border-2', 'border-red-500');
    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
      mostrarError();
    }
  }
}

// muestra error
function mostrarError() {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = 'El campo no puede estar vacío';
  formulario.appendChild(mensajeError);
  mensajeError.classList.add(
    'border-2',
    'border-red-500',
    'p-5',
    'mt-5',
    'text-red-500',
    'error'
  );
}
