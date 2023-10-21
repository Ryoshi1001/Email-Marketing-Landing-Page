// variables for buttons and pop-up modal
const btnone = document.getElementById('btnone')
const btntwo = document.getElementById('btntwo')
const btnthree = document.getElementById('btnthree')
const btnfour = document.getElementById('btnfour')
const modalbtn = document.getElementById('modalbtn')
const modal = document.getElementById('modal')

// header btn onclick scrolls to signup section on screen
btnone.addEventListener('click', function() {
  document.getElementById('signup-section').scrollIntoView(); 
})

// hero btn onclick scrolls to signup section on screen
btntwo.addEventListener('click', function() {
  document.getElementById('signup-section').scrollIntoView(); 
})

// displays modal at bottom of computer screen and prevents scrolling when modal is visible
btnthree.addEventListener('click', function() {
  modal.classList.remove('hidden')
  document.body.style.overflow = "hidden"; 
  modal.style.position = "absolute"; 
  modal.style.bottom = "0";
  modal.style.left = "0"; 
  modal.style.right = "0";   
})

// displays modal at bottom of computer screen and prevents scrolling when modal is visible
btnfour.addEventListener('click', function() {
  modal.classList.remove('hidden')
  document.body.style.overflow = "hidden"; 
  modal.style.position = "absolute"; 
  modal.style.bottom = "0";
  modal.style.left = "0"; 
  modal.style.right = "0";   
})














