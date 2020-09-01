const signInBtn = document.getElementById('sign-in-btn');
const signUpBtn = document.getElementById('sign-up-btn');
const containerElement = document.getElementById('container');

const signInSpan = document.getElementById('sign-in-span');
const signUpSpan = document.getElementById('sign-up-span');


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
