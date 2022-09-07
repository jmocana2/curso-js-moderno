// Variables
const resultado = document.querySelector('#resultado');

// Eventos
document.addEventListener('DOMContentLoaded', () => {
  autos.forEach(auto => {
    console.log('auto: ', auto);

    const { marca, modelo, color, precio, puertas, transmision, year } = auto;

    const autoHTML = document.createElement('p');
    autoHTML.textContent = `${marca} - ${modelo} - ${color} - ${precio} - ${puertas} - ${transmision} - ${year}`;
    resultado.appendChild(autoHTML);
  });
});

// Funciones
