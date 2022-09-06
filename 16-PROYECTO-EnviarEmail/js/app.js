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
  //valida si un campo está vacío
  if (e.target.value.length > 0) {
    //hay datos
    campoValido(e);
  } else {
    //No hay datos
    campoInvalido(e);
    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
      mostrarError('El campo no puede estar vacío');
    }
  }

  //valida si el email es incorrecto
  if (e.target.type === 'email') {
    erMail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (erMail.test(e.target.value)) {
      const error = document.querySelector('p.error');
      error.remove();
      campoValido(e);
    } else {
      campoInvalido(e);
      mostrarError('Email incorrecto');
    }
  }
}

// campo valido
function campoValido(e) {
  e.target.classList.remove('border-red-500');
  e.target.classList.add('border-2', 'border-green-500');
}

// campo invalido
function campoInvalido(e) {
  e.target.classList.remove('border-green-500');
  e.target.classList.add('border-2', 'border-red-500');
}

// muestra error
function mostrarError(mensaje) {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
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
