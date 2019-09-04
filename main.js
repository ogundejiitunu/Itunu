const form = document.querySelector('.form');
const submitButton = document.getElementById('submit-btn');
const inputs = document.querySelectorAll('.input');

function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const title = document.getElementById('title').value.trim();
  const message = document.getElementById('message').value.trim();
  const email = document.getElementById('email').value.trim();
  let error = false;
  if (!name) {
    document.querySelector('.name-error').innerText = 'Please enter a name';
    error = true;
  }

  if (name && name.length < 4) {
    document.querySelector('.name-error').innerText =
      'Please enter a name 4 or more characters long';
    error = true;
  }

  if (!title) {
    document.querySelector('.title-error').innerText = 'Please enter a title';
    error = true;
  }
  if (!message) {
    document.querySelector('.message-error').innerText =
      'Please enter a message';
    error = true;
  }

  if (message && message.length < 20) {
    document.querySelector('.message-error').innerText =
      'Please enter a message 20 or more characters long';
    error = true;
  }

  if (!email) {
    document.querySelector('.email-error').innerText =
      'Please enter an email address';
    error = true;
  }

  if (email && !validateEmail(email)) {
    document.querySelector('.email-error').innerText =
      'Please enter a valid email address';
    error = true;
  }
  if (!error) {
    form.submit();
  }
}

function hideError(e) {
  console.log(e.target.id);
  const errorInput = document.querySelector(`.${e.target.id}-error`);
  console.log(errorInput);
  if (errorInput && e.target.value.trim()) {
    errorInput.innerText = '';
  }
}

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

form.addEventListener('submit', sendMessage);
submitButton.addEventListener('click', sendMessage);
inputs.forEach(input => input.addEventListener('blur', hideError));
