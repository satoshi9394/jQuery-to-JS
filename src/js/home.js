/* console.log('hola mundo!');
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
}) */

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
/* Promise.race([
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
  }); */


(async function load() {
    //await 
    //action
    //terror
    //animation
    async function getData(url) {
      const response =  await fetch(url);
      const data = await response.json();
      return data;
    }
  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama');
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
/*otra forma de hacerlo con promesas 
  let terrorList;
  getData('https://yts.mx/api/v2/list_movies.json?genre=terror')
    .then(function(data) {
      console.log('terrorList', data);
      terrorList = data;
    }) */
  console.log(actionList, dramaList, animationList);  
  // pesitos simbolo es para referenciar a un elemento del dom
  // como se hace en jquery
  //const $home = $('.home .list #item')
  const $actionContainer = document.querySelector('#action');
  const $dramaContainer = document.getElementById('#drama');
  const $animationContainer = document.querySelector('#animation');

  const $featuringContainer = document.getElementById('#featuring');
  const $formContainer = document.getElementById('#from');
  const $home =document.getElementById('#home'); 

  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hideModal');

  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');
})()