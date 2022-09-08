// VARIABLES
let tweets = [];
const formulario = document.querySelector('#formulario');
const tweet = document.querySelector('#tweet');
const listaTweets = document.querySelector('#lista-tweets');

// EVENTOS
document.addEventListener('DOMContentLoaded', recuperarTweets);
document.addEventListener('submit', agregarTweet);

//FUNCIONES
// Agrega un nuevo tweet al array y Locol Storage
function agregarTweet(e) {
  e.preventDefault();
  const tweet = document.querySelector('#tweet').value;
  const tweetObj = {
    id: Date.now(),
    tweet
  };
  if (tweet !== '') {
    tweets = [...tweets, tweetObj];
    sincronizarLocalStorage();
    formulario.reset();
    mostrarHTMLTweets();
  } else {
    alert('Introduce un tweet');
  }
}

// Sincroniza LS
function sincronizarLocalStorage() {
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Recupera tweets del LS
function recuperarTweets() {
  let tweetsLS = localStorage.getItem('tweets');
  tweetsLS = JSON.parse(tweetsLS);
  if (tweetsLS) {
    tweets = tweetsLS;
  }
  mostrarHTMLTweets();
}

// Elimina un tweet
function eliminarTweet(id) {
  tweets = tweets.filter(tweet => tweet.id !== id);

  sincronizarLocalStorage();
  mostrarHTMLTweets();
}

// Pinta el HTML de tweets
function mostrarHTMLTweets() {
  limpiarListaTweets();
  if (tweets) {
    tweets.forEach(tweet => {
      const itemTweet = document.createElement('p');
      itemTweet.textContent = tweet.tweet;
      const btnEliminar = document.createElement('a');
      btnEliminar.innerHTML = 'X';
      btnEliminar.classList.add('borrar-tweet');
      btnEliminar.onclick = () => {
        eliminarTweet(tweet.id);
      };
      itemTweet.appendChild(btnEliminar);
      listaTweets.appendChild(itemTweet);
    });
  }
}

// Limpiar tweets
function limpiarListaTweets() {
  while (listaTweets.firstChild) {
    listaTweets.firstChild.remove();
  }
}
