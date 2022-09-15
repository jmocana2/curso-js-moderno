// DOM
const formulario = document.querySelector('#cotizar-seguro');

// CONSTRUCTORES
// Seguro
const Seguro = function (marca, anyo, tipo) {
  this.marca = marca;
  this.anyo = anyo;
  this.tipo = tipo;
};

// ui
const UI = function () {};

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
    console.log('KO!');
  } else {
    console.log('OK!');
  }
}
