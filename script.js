const body = document.querySelector('body')


const btnModal1 = document.querySelector('.modal1')
const btnModal2 = document.querySelector('.modal2')
const btnModal3 = document.querySelector('.modal3')


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

}

function addHiddenClass(){
  modalHidden.classList.add('hidden')
  overlayBackground.classList.add('hidden')
}

for(btn of btnOpenAllModalArray){
  btn.addEventListener('click',removeHiddenClass)
}

closeModalBtn.addEventListener('click', addHiddenClass)

overlayBackground.addEventListener('click',addHiddenClass)

body.addEventListener('keydown', function(e){
  console.log(e)
  if(e.key === "Escape" ){
    addHiddenClass()
  }
})

