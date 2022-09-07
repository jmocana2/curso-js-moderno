// VARIABLES
//================
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Objeto con los datos de busqueda
const busqueda = {
  marca: '',
  color: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  year: ''
};

// EVENTOS
//=================
// Iniciando app...
document.addEventListener('DOMContentLoaded', () => {
  mostrarResultado(autos);
  llenarYears();
});

//Eventos de combos
year.addEventListener('change', e => {
  busqueda.year = parseInt(e.target.value);

  filtrarAuto();
});
marca.addEventListener('change', e => {
  busqueda.marca = e.target.value;

  filtrarAuto();
});
minimo.addEventListener('change', e => {
  busqueda.minimo = e.target.value;

  filtrarAuto();
});
maximo.addEventListener('change', e => {
  busqueda.maximo = e.target.value;

  filtrarAuto();
});
color.addEventListener('change', e => {
  busqueda.color = e.target.value;

  filtrarAuto();
});
puertas.addEventListener('change', e => {
  busqueda.puertas = parseInt(e.target.value);

  filtrarAuto();
});
transmision.addEventListener('change', e => {
  busqueda.transmision = e.target.value;

  filtrarAuto();
});

// FUNCIONES
// ================
// Mostrar resultados
function mostrarResultado(autos) {
  limpiarHTML();

  autos.forEach(auto => {
    const { marca, modelo, color, precio, puertas, transmision, year } = auto;

    const autoHTML = document.createElement('p');
    autoHTML.textContent = `${marca} - ${modelo} - ${color} - ${precio} - ${puertas} - ${transmision} - ${year}`;
    resultado.appendChild(autoHTML);
  });
}

// Rellenar combo de años
function llenarYears() {
  const fecha = new Date();
  const max = fecha.getFullYear();
  const min = max - 10;

  for (let i = max; i >= min; i--) {
    const opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  }
}

// Filtros de busqueda
function filtrarAuto() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarColor)
    .filter(filtrarTransmision);
  mostrarResultado(resultado);
}

// Filtrar por marca
function filtrarMarca(auto) {
  const { marca } = busqueda;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}

// Filtrar por año
function filtrarYear(auto) {
  const { year } = busqueda;
  if (year) {
    return auto.year === year;
  }
  return auto;
}

// Filtrar por precio minimo
function filtrarMinimo(auto) {
  const { minimo } = busqueda;
  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}

// Filtrar por precio máximo
function filtrarMaximo(auto) {
  const { maximo } = busqueda;
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}

// Filtrar por puertas
function filtrarPuertas(auto) {
  const { puertas } = busqueda;
  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}

// Filtrar por color
function filtrarColor(auto) {
  const { color } = busqueda;
  if (color) {
    return auto.color === color;
  }
  return auto;
}

// Filtrar por transmisión
function filtrarTransmision(auto) {
  const { transmision } = busqueda;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.firstChild.remove();
  }
}
