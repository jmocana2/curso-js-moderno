const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  listaCursos.addEventListener('click', agregarCurso);
}

// Agrega un nuevo curso al carrito
function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentNode.parentNode;
    obtenerDatosCurso(cursoSeleccionado);
  }
}

//Obtener datos del curso
function obtenerDatosCurso(curso) {
  const datosCurso = {
    id: curso.querySelector('a').getAttribute('data-id'),
    titulo: curso.querySelector('h4').textContent,
    imagen: curso.querySelector('img').getAttribute('src'),
    precio: curso.querySelector('.precio span').textContent,
    cantidad: 1
  };

  articulosCarrito = [...articulosCarrito, datosCurso];

  carritoHTML();
}

// añade el HTML de los cursos al carrito
function carritoHTML() {
  limpiarHTML();

  articulosCarrito.forEach(curso => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${curso.titulo}</td>
    `;
    contenedorCarrito.appendChild(row);
    console.log('Añadiendo curso', curso);
  });
}

// borra el HTML del carrito
function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
