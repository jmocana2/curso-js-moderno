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
  mostrarResultado();
  llenarYears();
});

//Eventos de combos
year.addEventListener('change', e => {
  busqueda.year = e.target.value;
});
marca.addEventListener('change', e => {
  busqueda.marca = e.target.value;

  filtrarAuto();
});
minimo.addEventListener('change', e => {
  busqueda.minimo = e.target.value;
});
maximo.addEventListener('change', e => {
  busqueda.maximo = e.target.value;
});
color.addEventListener('change', e => {
  busqueda.color = e.target.value;
});
puertas.addEventListener('change', e => {
  busqueda.puertas = e.target.value;
});
transmision.addEventListener('change', e => {
  busqueda.transmision = e.target.value;

  console.log(busqueda);
});

// FUNCIONES
// ================
// Mostrar resultados
function mostrarResultado() {
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
  const resultado = autos.filter(filtrarMarca);
  console.log(resultado);
}

// Filtrar por marca
function filtrarMarca(auto) {
  const { marca } = busqueda;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}
