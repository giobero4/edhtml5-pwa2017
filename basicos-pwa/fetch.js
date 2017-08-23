//https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Basic_concepts

fetch('index.html')
  .then(response => {
    console.log(response)
    return response.text()
  })
  .then(text => console.log(text))

fetch('./img/icon_128x128.png')
  .then(response => response.blob())
  .then(blob => {
    console.log(blob)
    let objectURL = URL.createObjectURL(blob),
      img = document.createElement('img')

    img.src = objectURL
    document.body.appendChild(img)
  })


const movies = document.getElementById('movies')

fetch('./movies.json')
  .then( response => response.json() )
  .then(jsonMovies => {
    console.log(jsonMovies.movies)
    let template = ''
    jsonMovies.movies.forEach(movie => {
      template += `
        <h2>${movie.title}</h2>
        <p><b>${movie.year}</b></p>
        <p><i>${movie.genres}</i></p>
        <img src="${movie.poster}" alt="${movie.title}">
      `
    })

    movies.innerHTML = template
  })
  .catch(err => console.log(err))

/* let ajax = new XMLHttpRequest()
let tpl = ''
ajax.open('GET', './movies.json', true)
ajax.addEventListener('readystatechange', e => {
  if (ajax.status >= 200 && ajax.status < 400) {
    let movies = JSON.parse(ajax.response)
    console.log(movies)
    movies.movies.forEach(movie => {
      tpl += `
        <article>
          <h2>${movie.title}</h2>
          <p><b>${movie.year}</b></p>
          <p><i>${movie.genres}</i></p>
          <img src="${movie.poster}">
        </article>`
    })
  } else {
    tpl = `<b>El servidor NO responde. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></b>`
  }
  moviesContent.innerHTML = tpl
})
ajax.setRequestHeader('Content-Type', 'text/json')
ajax.send() */
