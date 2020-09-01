const signInBtn = document.getElementById('sign-in-btn');
const signUpBtn = document.getElementById('sign-up-btn');
const containerElement = document.getElementById('container');

signInBtn.addEventListener('click', function () {
  containerElement.classList.remove('sign-up-active');
});

signUpBtn.addEventListener('click', function () {
  containerElement.classList.add('sign-up-active');
});
