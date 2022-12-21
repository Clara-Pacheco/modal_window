const body = document.querySelector('body')

// Captura cada modal separadamente

const btnModal1 = document.querySelector('.modal1')
const btnModal2 = document.querySelector('.modal2')
const btnModal3 = document.querySelector('.modal3')

// Captura todos os botões modais e retorna uma nodeList

const btnOpenAllModal = document.querySelectorAll('.show-modal')

console.log(btnOpenAllModal)

const modalHidden = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.close-modal')

const overlayBackground = document.querySelector('.overlay')

// Transforma nodeList em Array

let btnOpenAllModalArray = Array.from(btnOpenAllModal)

// Percorre o array de modais para pegar cada um deles

function removeHiddenClass(){
  modalHidden.classList.remove('hidden')
  overlayBackground.classList.remove('hidden')

  // with classList.remove or classList.add, we do not
  // use the dot '.' The dot is only for the selector
  // in document.querySelector(''), but here we are not
  // selecting anything, we are passing in the name of 
  // the class. All we need is the string with that name.
  // It´s possible also to add classes and to check if
  // an element has a class.
}

function addHiddenClass(){
  modalHidden.classList.add('hidden')
  overlayBackground.classList.add('hidden')
}

for(btn of btnOpenAllModalArray){
  btn.addEventListener('click',function(){
    removeHiddenClass()
  })
}

closeModalBtn.addEventListener('click', function(){
  addHiddenClass()
})

overlayBackground.addEventListener('click', function(){
  addHiddenClass()
})


/* Selecting multiple elements with the same class:
const btnOpenAllModal = document.querySelectorAll('.show-modal'),
transforming the nodeList em Array:
let btnOpenAllModalArray = Array.from(btnOpenAllModal) and, with
the for loop, select each one of them to work specifically with
each one individually:
for(btn of btnOpenAllModalArray){
  console.log(btn.textContent)
}
Above, we are logging the content of each
modal in the browser.
*/

/* When there is the need to manipulate styles on a page,
usually it´s better to export the styles into a class and then,
manipulate the class via JS, as done above.  */

