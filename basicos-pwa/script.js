if ( 'serviceWorker' in navigator ) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then( registration => {
        console.log(registration)
        console.log(
          'Service Worker registrado con éxito',
          registration.scope
        )
      })
      .catch( err => console.log(`Registro de Service Worker fallido`, err) )
  })
}
