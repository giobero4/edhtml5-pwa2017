;
((c) => {
  const cuadrado = (value, callback) => {
    setTimeout(() => {
      callback(value, value*value)
    }, Math.random() * 100)
  }

  cuadrado(2, (value, result) => {
    c('Inicio d Callback')
    c(`Callback: ${value}, ${result}`)
    cuadrado(4, (value, result) => {
      c(`Callback: ${value}, ${result}`)
      cuadrado(6, (value, result) => {
        c(`Callback: ${value}, ${result}`)
        c('Fin de Callback')
      })
    })
  })
})(console.log);

;
((c) => {
  const cuadrado = value => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ value: value, result: value*value })
      }, Math.random() * 100)
    })
  }

  cuadrado(2)
    .then(obj => {
      c('Inicio d Promise')
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(4)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(6)
    })
    .then(obj => {
      c('Fin d Promise')
      c(`Promise: ${obj.value}, ${obj.result}`)
    })
    .catch(err => c(err))
})(console.log);
