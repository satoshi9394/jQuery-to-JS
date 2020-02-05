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

$.ajax('https://randomuser.me/api/sdghdsfh', {
  method: 'GET',
  success: function(data) {
    console.log(data)
  },
  error: function(error) {
    console.log(error)
  }
}) 

fetch('https://randomuser.me/api/2485')
  .then(function(response) {
//    console.log(response)
    return response.json()
  })
  .then(function (user) {
    console.log("user", user.results[0].name.first)
  })
  .catch(function() {
    console.log('algo fallo')
  })