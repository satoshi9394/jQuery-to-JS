console.log('hola mundo!');
const noCambia = "Leonidas";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

const getUserAll = new Promise(function(todoBien, todoMal) {
  //llamar a una api
  setTimeout(function() {
    //luego de 3 seg.
    todoBien('no hay usuarios o se acabo el tiempo');
  }, 5000)
})

const getUser = new Promise(function(todoBien, todoMal) {
  //llamar a una api
  setTimeout(function() {
    //luego de 3 seg.
    todoBien('no hay usuarios o se acabo el tiempo');
  }, 3000)
})

/* getUser
  .then(function(){
    console.log("todo esta bien en la vida")
  })
  .catch(function(message) {
    console.log(message)
  }) */


/* Promise.all([
  getUser,
  getUserAll
])
.then(function(message){
  console.log(message)
})
.catch(function(message) {
  console.log(message)
}) */
//en este caso solo entra a la promesa que se termine primero
Promise.race([
  getUser,
  getUserAll
])
.then(function(message){
  console.log(message)
})
.catch(function(message) {
  console.log(message)
})