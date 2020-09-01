// Button Elements
const signInBtn = document.getElementById('sign-in-btn');
const signUpBtn = document.getElementById('sign-up-btn');
const signInSpan = document.getElementById('sign-in-span');
const signUpSpan = document.getElementById('sign-up-span');

// Other Elements
const containerElement = document.getElementById('container');
const inputElements = document.querySelectorAll('.input');

// Focus Function
function focusFunction () {

  // Get input container element
  let parentElement = this.parentNode;

  // Add focus class to input element
  parentElement.classList.add('focus');
}

// Unfocus Function
function unfocusFunction () {

  // Get input container element
  let parentElement = this.parentNode;

  // Check if input has text
  if (this.value == "") {
    parentElement.classList.remove('focus');
  }
}

inputElements.forEach(input => {
  input.addEventListener('focus', focusFunction);
  input.addEventListener('blur', unfocusFunction);
});

signInBtn.addEventListener('click', function () {
  containerElement.classList.remove('sign-up-active');
  signUpSpan.classList.remove('hide-right');
  signInSpan.classList.add('hide-left');
});

signUpBtn.addEventListener('click', function () {
  containerElement.classList.add('sign-up-active');
  signUpSpan.classList.add('hide-right');
  signInSpan.classList.remove('hide-left');
});
