// VARIABLES Y SELECTORES
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// EVENTOS
eventListener();
function eventListener() {
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
  formulario.addEventListener('submit', agregarGasto);
}

// CLASES
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = presupuesto;
    this.restante = presupuesto;
    this.gastos = [];
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    const { presupuesto, restante } = cantidad;

    document.querySelector('#total').textContent = presupuesto;
    document.querySelector('#restante').textContent = restante;
  }

  imprimirAlerta(mensaje, claseAlerta) {
    const alerta = document.createElement('div');
    alerta.classList.add('text-center', 'alert');
    alerta.classList.add(claseAlerta);
    alerta.textContent = mensaje;

    document.querySelector('.primario').insertBefore(alerta, formulario);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

// Instancias
let presupuesto;
const ui = new UI();

// FUNCIONES

function preguntarPresupuesto() {
  const nuevoPresupuesto = Number(prompt('Introduce tu presupuesto'));

  if (
    nuevoPresupuesto <= 0 ||
    nuevoPresupuesto === null ||
    nuevoPresupuesto === '' ||
    isNaN(nuevoPresupuesto)
  ) {
    window.location.reload();
  } else {
    presupuesto = new Presupuesto(nuevoPresupuesto);
    ui.insertarPresupuesto(presupuesto);

    console.log(presupuesto);
  }
}

function agregarGasto() {
  const gasto = document.querySelector('#gasto').value;
  const cantidad = document.querySelector('#cantidad').value;

  if (gasto === '' || cantidad === '') {
    ui.imprimirAlerta('Debes rellenar todos los campos', 'alert-danger');
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta('Debes ingresar un valor valido', 'alert-danger');
  } else {
    ui.imprimirAlerta('Gasto agregado', 'alert-success');
  }
}
