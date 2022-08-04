const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  listaCursos.addEventListener('click', agregarCurso);
  carrito.addEventListener('click', eliminarCurso);
}

// Agrega un nuevo curso al carrito
function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentNode.parentNode;
    obtenerDatosCurso(cursoSeleccionado);
  }
}

// Elimina un curso del carrito
function eliminarCurso(e) {
  if (e.target.classList.contains('borrar-curso')) {
    id = e.target.getAttribute('data-id');
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== id);
  }
  console.log(articulosCarrito);
  carritoHTML();
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

  //Comprobamos si ya se añadio el curso
  const existe = articulosCarrito.some(curso => {
    return curso.id === datosCurso.id;
  });

  if (existe) {
    // Aumentamos cantidad del curso
    const nuevoCarrito = articulosCarrito.map(curso => {
      if (curso.id === datosCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
  } else {
    // Añadimos al carrito
    articulosCarrito = [...articulosCarrito, datosCurso];
  }

  carritoHTML();
}

// añade el HTML de los cursos al carrito
function carritoHTML() {
  limpiarHTML();

  articulosCarrito.forEach(curso => {
    const { id, titulo, imagen, precio, cantidad } = curso;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${imagen}" alt="imagen del curso" width="100" /></td>
      <td>${titulo}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td><a href="#" data-id="${id}" class="borrar-curso">X</a></td>
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
