let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}
let callback = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.target.id == 'movie-trailer') {
      if(entry.isIntersecting) {
        entry.target.play()
      } else {
        entry.target.pause()
      }
    }
  })
}
let observer = new IntersectionObserver(callback, options)
observer.observe(document.querySelector('#movie-trailer'))

$(window).scroll(function() {
  if($(document).scrollTop() > 200) {
    $('nav').addClass('header-color')
  } else {
    $('nav').removeClass('header-color')
  }
})

let moviesArr = []
let userElement = document.getElementById("user-movies")
// Adicionar filme
function addMovie() {
  let favoriteMovie = document.getElementById("filme").value
  if (favoriteMovie.endsWith(".jpg") || favoriteMovie.endsWith(".png")) {
    if (moviesArr.includes(favoriteMovie) == true) {
      alert("Filme existente! Porfavor, insira outro.")
    } else {
      moviesArr.push(favoriteMovie)
      
      listMoviesOnScreen()
    }
  } else {
    console.error("Endereço de filme inválido")
  }
  document.getElementById("filme").value = ""
}


// Lista filmes
function listMoviesOnScreen() {
  let element = ""
  for (let i = 0; i < moviesArr.length; i++) {
    element += `<div class="user-item">`
    element += `<img src="${moviesArr[i]}" class="movie-item">`
    element += `</div>`
  }
  userElement.innerHTML = element
}
// Remover filmes
function removeMovie() {
  let favoriteMovie = document.getElementById("filme").value
  if (favoriteMovie.endsWith(".jpg") || favoriteMovie.endsWith(".png")) {
    let index = moviesArr.indexOf(favoriteMovie)
    moviesArr.splice(index, 1)
    listMoviesOnScreen()
  } else {
    console.error("Endereço de filme inválido")
  }
  document.getElementById("filme").value = ""
}
/* 
  Recomendações para assistir
*/
/*
let moviesList = [
  "https://cdn.myanimelist.net/images/anime/1000/110531.jpg",
  "https://cdn.myanimelist.net/images/anime/1575/93498.jpg",
  "https://cdn.myanimelist.net/images/anime/7/81992.jpg",
  "https://cdn.myanimelist.net/images/anime/1928/117620.jpg",
  "https://cdn.myanimelist.net/images/anime/1142/112957.jpg",
  "https://cdn.myanimelist.net/images/anime/1575/93498.jpg",
  "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
  "https://cdn.myanimelist.net/images/anime/1704/106947.jpg",
  "https://cdn.myanimelist.net/images/anime/1049/115605.jpg",
  "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
  "https://cdn.myanimelist.net/images/anime/8/75546.jpg",
  "https://cdn.myanimelist.net/images/anime/9/84460.jpg"
];

let itemsElement = document.getElementById("items");
for (let i = 0; i < moviesList.length; i++) {
  let img = document.createElement("img");
  let div = document.createElement("div");
  img.setAttribute("src", moviesList[i]);
  img.setAttribute("class", "movie-item")
  div.setAttribute("class", "item");
  div.appendChild(img);
  itemsElement.appendChild(div);
  // console.log(itemsElement);
}
*/