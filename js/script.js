let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}
let callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.target.id == 'movie-trailer') {
      if (entry.isIntersecting) {
        entry.target.play()
      } else {
        entry.target.pause()
      }
    }
  })
}
let observer = new IntersectionObserver(callback, options)
observer.observe(document.querySelector('#movie-trailer'))

/* Altera cor da Navbar quando estiver no topo */
$(window).scroll(function () {
  if ($(document).scrollTop() > 200) {
    $('nav').addClass('header-color')
  } else {
    $('nav').removeClass('header-color')
  }
})

let moviesArr = []
let userElement = document.getElementById('user-movies')
// Adicionar filme
function addMovie() {
  let favoriteMovie = document.getElementById('filme').value
  if (favoriteMovie.endsWith('.jpg') || favoriteMovie.endsWith('.png')) {
    if (moviesArr.includes(favoriteMovie) == true) {
      alert('Filme existente! Porfavor, insira outro.')
    } else {
      moviesArr.push(favoriteMovie)

      listMoviesOnScreen()
    }
  } else {
    console.error('Endereço de filme inválido')
  }
  document.getElementById('filme').value = ''
}

// Lista filmes
function listMoviesOnScreen() {
  let element = ''
  for (let i = 0; i < moviesArr.length; i++) {
    element += `<div class="user-item">`
    element += `<img src="${moviesArr[i]}" class="movie-item">`
    element += `<div class="movie-info" >
    <i class="fa-solid fa-info"></i>
    <i class="fa-solid fa-ellipsis-vertical"></i></div>`
    element += `</div>`
  }
  userElement.innerHTML = element
}

// Remover Séries
function removeMovie() {
  let favoriteMovie = document.getElementById('filme').value
  if (favoriteMovie.endsWith('.jpg') || favoriteMovie.endsWith('.png')) {
    let index = moviesArr.indexOf(favoriteMovie)
    moviesArr.splice(index, 1)
    listMoviesOnScreen()
  } else {
    console.error('Endereço de filme inválido')
  }
  document.getElementById('filme').value = ''
}

/* 
  Séries Adicionadas
*/

const seriesList = [
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i0uajcHH9yogXMfDHpOXexIukG9.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yVUAfbrP5HDJugXraB7KQS0yz6Z.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cK6JhcZFpwVW9tldz3llodY2TeY.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oktTNFM8PzdseiK1X0E0XhB6LvP.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6Iy4FRCpOX3J5o0WfmtcypwLvt.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hgQDWqPegnDSFg7XlKMTxZ7VIX0.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zT6tXWsJoBOWJT1PeUEKLTFOoHh.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wd5JwnNOqEDIKZ672wjEo8hzL7k.jpg'
]
const moviesList = [
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/li38P5vIDBSCEZoDYsSNf93kJt9.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vaXiEVLD0fGSMU801Zftw1csPPm.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7mYMq6OQyum1wAiUI7i6w78YKEO.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kn72J6BFcN71VYOl8sTVeo7x9ph.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fgnzRbeuGstANw2Ef4A1pdr1I0y.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kPc80jywR5Nm2KIQjkY5i4VXSx4.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/LaZ5rwaMvVH20J8O2Nu9uuXGI5.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7gCwW0My3JCjhXeqHnBrfZK3bbk.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4xJb2Nll3vHKztHVasHwf6603MB.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kPry1BAfJtYNyQEpKdV4cYan6MB.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wfWmA2k03GDWQmrcjusUcqBiYWT.jpg'
]

const itemsElement = document.getElementById('items-movies')
const itemsElementSeries = document.getElementById('items-series')

for (let i = 0; i < seriesList.length; i++) {
  let img = document.createElement('img')
  let div = document.createElement('div')
  let divInfo = document.createElement('div')
  img.setAttribute('src', seriesList[i])
  img.setAttribute('class', 'movie-item')
  divInfo.setAttribute('class', 'movie-info')
  divInfo.innerHTML = `<i class="fa-solid fa-info"></i>
  <i class="fa-solid fa-ellipsis-vertical"></i>`
  div.setAttribute('class', 'item')
  div.appendChild(img)
  div.appendChild(divInfo)
  itemsElementSeries.appendChild(div)
}

for (let i = 0; i < moviesList.length; i++) {
  let img = document.createElement('img')
  let div = document.createElement('div')
  let divInfo = document.createElement('div')
  img.setAttribute('src', moviesList[i])
  img.setAttribute('class', 'movie-item')
  divInfo.setAttribute('class', 'movie-info')
  divInfo.innerHTML = `<i class="fa-solid fa-info"></i>
  <i class="fa-solid fa-ellipsis-vertical"></i>`
  div.setAttribute('class', 'item')
  div.appendChild(img)
  div.appendChild(divInfo)
  itemsElement.appendChild(div)
}
