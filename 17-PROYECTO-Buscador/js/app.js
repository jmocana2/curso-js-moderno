// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

// Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarResultado();
  llenarYears();
});

// Funciones
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
