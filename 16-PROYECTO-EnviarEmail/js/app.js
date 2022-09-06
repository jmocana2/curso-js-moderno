// variables
const formulario = document.querySelector('#enviar-mail');
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

// Expresiones regulares
// valida un email
const erMail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// eventos
eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', iniciarApp);
  email.addEventListener('blur', validarFormulario);
  asunto.addEventListener('blur', validarFormulario);
  mensaje.addEventListener('blur', validarFormulario);
  btnReset.addEventListener('click', resetFormulario);
  formulario.addEventListener('submit', enviarFormulario);
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
    if (erMail.test(e.target.value)) {
      const error = document.querySelector('p.error');
      error && error.remove();
      campoValido(e);
    } else {
      campoInvalido(e);
      mostrarError('Email incorrecto');
    }
  }

  //si pasamos validación activamos botón enviar
  if (erMail.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    const error = document.querySelector('p.error');
    error && error.remove();
  } else {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
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

// Enviar formulario
function enviarFormulario(e) {
  e.preventDefault();
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'flex';

  setTimeout(() => {
    spinner.style.display = 'none';
    const msjEnviado = document.createElement('p');
    msjEnviado.textContent = 'Formulario enviado correctamente';
    msjEnviado.classList.add(
      'p-3',
      'text-white',
      'uppercase',
      'font-bold',
      'bg-green-500',
      'mb-5'
    );
    formulario.insertBefore(msjEnviado, spinner);

    setTimeout(() => {
      msjEnviado.remove();
      resetFormulario();
    }, 3000);
  }, 3000);
}

// Resetea el formulario
function resetFormulario() {
  formulario.reset();
  iniciarApp();
}
