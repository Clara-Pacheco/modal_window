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

  //1 - with classList.remove or classList.add, we do not
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

/*2 - Selecting multiple elements with the same class:
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

/* 3 - When there is the need to manipulate styles on a page,
usually it´s better to export the styles into a class and then,
manipulate the class via JS, as done above.  */

/*4 - If you want to use the same function in multiple event listeners,
then, you need to specify that function as a separate function like
this one:
function addHiddenClass(){
  modalHidden.classList.add('hidden')
  overlayBackground.classList.add('hidden')
}
and pass that function as an argument to multiple addEventListeners 
methods, as here:

closeModalBtn.addEventListener('click', addHiddenClass)
overlayBackground.addEventListener('click',addHiddenClass)
 */

/* 5 - In practice, we use the functionality of adding and removing
classes all the time, in order to change the appearance of elements
on our page. And that´s because classes allow us to aggregate multiple
css proprieties in just one like container. */

/* 6 - Another thing we do with classes is to check is classes are
present in a certain element.*/

//7- How to handle keypress events - how to respond to keyboard events?

/*Keyboard events are also called global events, because they do
not happen in one specific element. For global events, we usually
listen in the global document */

/*
KEYUP = this event happens when we lift our fingers off the keyboard
KEYPRESS = this event is fired continuously as we keep our finger on
a certain key;
KEYDOWN = this event is fired as soon as we press down any key in the
keyboard. Usually, that´s the one used.

*/

/* 8 - This function will be executed for any key in the keyboard
that is pressed. */

// body.addEventListener('keydown', function(){
//   console.log('Key pressed!')
// })

/* However, we only want to close the pop up when the scape key (ESC)
was pressed. How can we know that the ESC key was pressed, if the
keydown event happens for all the keys? */

/* 9 - The information about which key was pressed will be stored
in the event that is going to occur as soon as any key is pressed.

In the example above, as soon as we hit any key in the keyboard, 
a keydown event is generated. Any time that an event like this occurs,
JS generates an object, and that object contains all the information
about the event itself, and we can access that object in the event
function handler. */

/* WHEN AN EVENT HAPPENS, AN OBJECT CONTAINING ALL THE INFORMATION
ABOUT THAT EVENT IS GENERATED, AND WE CAN ACCESS THOSE INFORMATION
THROUGH THE EVENT FUNCTION HANDLER.
WHAT IS NEEDED IS TO GIVE THE EVENT FUNCTION HANDLER A PARAMETER(e).

As the event occurs, JS will call this function with the event
object as an argument - function(e). This works because this function
is not being called by us, it´s only defined by us to be called when
the event happens:

"JS, call this function when a keydown event happens, and, when 
you do so, please pass an event object (e) as an argument "

We need to look at the event information in order to figure out
which key was pressed.

// body.addEventListener('keydown', function(e){
//   console.log('Key pressed!')
// })

By looking into the object generated, we will find out, via the 
property 'key', which key in the keyboard was pressed.

KeyboardEvent {isTrusted: true, key: 'Escape', code: 'Escape', location: 0, ctrlKey: false, …}

Wherever key we press, now we can look at the object to get
the information about which key was pressed. 

If we want an event to occur when the 'esc' key is pressed, we 
can check if the key of the object of the event(e) that holds the value
for escape key is equal to "Escape" value. If it is, we can call
the function to add the hidden classes, what will make the 
modal window and the overlay background disappear.

body.addEventListener('keydown', function(e){
  console.log(e)
  if(e.key === "Escape" ){
    addHiddenClass()
  }
})

*/



