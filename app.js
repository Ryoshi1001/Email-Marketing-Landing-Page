// variables for buttons and pop-up modal
const btnone = document.getElementById('btnone');
const btntwo = document.getElementById('btntwo');
const btnthree = document.getElementById('btnthree');
const btnfour = document.getElementById('btnfour');
const emailInput = document.getElementById('emailinput');
const modalbtn = document.getElementById('modalbtn');
const modalxcircle = document.getElementById('modalxcircle');
const modal = document.getElementById('modal');
const modalSuccess = document.getElementById('modal-success');
const successMessage = document.getElementById('success-message')

// Regex email validation for form 
function emailValidation(emailInput) {
  return /\S+@\S+\.\S+/.test(emailInput);
}

// header btn onclick scrolls to signup section on screen
btnone.addEventListener('click', function () {
  document.getElementById('signup-section').scrollIntoView();
});

// hero btn onclick scrolls to signup section on screen
btntwo.addEventListener('click', function () {
  document.getElementById('signup-section').scrollIntoView();
});

// displays modal at bottom of computer screen and prevents scrolling when modal is visible
btnthree.addEventListener('click', function () {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  modal.style.position = 'absolute';
  modal.style.bottom = '0';
  modal.style.left = '0';
  modal.style.right = '0';
});

// displays modal at bottom of computer screen and prevents scrolling when modal is visible
btnfour.addEventListener('click', function () {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  modal.style.position = 'absolute';
  modal.style.bottom = '0';
  modal.style.left = '0';
  modal.style.right = '0';
});

modalxcircle.addEventListener('click', function () {
  modal.classList.add('hidden');
  document.body.style.overflow = 'visible';
});

function hideModal() {
  modal.classList.add('hidden')
}

function showSuccessModal() {
  modalSuccess.classList.remove('hidden')
  successMessage.innerText = 
  `Welcome! Email-Hub's webinar reservation
   has been sent to ${emailInput.value}.`
}

function hideSuccessModal() {
  modalSuccess.classList.add('hidden')
  document.body.style.overflow = 'visible';
}

modalbtn.addEventListener('click', function () {
  if(emailValidation(emailInput.value)) {
    hideModal(); 
    showSuccessModal();
    event.preventDefault(); 
    setTimeout(() => {
      hideSuccessModal();
      emailInput.value = '';
    }, 3400);
}});


