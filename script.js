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

for(btn of btnOpenAllModalArray){
  console.log(btn.textContent)
}

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
modal in the browser

*/