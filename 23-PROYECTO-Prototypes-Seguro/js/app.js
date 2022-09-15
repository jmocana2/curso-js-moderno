// DOM
const formulario = document.querySelector('#cotizar-seguro');
const resultado = document.querySelector('#resultado');

// CONSTRUCTORES
// Seguro
const Seguro = function (marca, anyo, tipo) {
  this.marca = marca;
  this.anyo = anyo;
  this.tipo = tipo;
};

// ui
const UI = function () {};

// Rellena el select de añños
UI.prototype.rellenarAnyos = () => {
  const fecha = new Date();
  const max = fecha.getFullYear(),
    min = max - 20;

  const year = document.querySelector('#year');

  for (i = max; i > min; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }
};

// Muestra las alertas
UI.prototype.alerta = (mensaje, tipo) => {
  const div = document.createElement('div');
  div.textContent = mensaje;

  if (tipo === 'error') {
    div.classList.add('error');
  } else {
    div.classList.add('correcto');
  }
  div.classList.add('mensaje', 'mt-10');

  formulario.insertBefore(div, resultado);

  setTimeout(() => {
    div.remove();
  }, 3000);
};

// INSTANCIAS
const ui = new UI();

// EVENTOS
document.addEventListener('DOMContentLoaded', () => {
  ui.rellenarAnyos();
});

eventListener();
function eventListener() {
  formulario.addEventListener('submit', validarFormulario);
}

// FUNCIONES
// Validacion del formulario
function validarFormulario(e) {
  e.preventDefault();

  const marca = document.querySelector('#marca').value;
  const year = document.querySelector('#year').value;
  const tipo = document.querySelector('input[name=tipo]:checked').value;

  if (marca === '' || year === '' || tipo === '') {
    ui.alerta('Todos los campos son obligatorios', 'error');
    return;
  }

  ui.alerta('cotizando...', 'exito');
}
