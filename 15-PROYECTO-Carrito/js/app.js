const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners() {
  listaCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(e) {
  if (e.target.classList.contains('agregar-carrito')) {
    console.log('Añadiendo curso', e.target.classList);
  }
}
