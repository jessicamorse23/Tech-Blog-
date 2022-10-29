// const { doc } = require("prettier");

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-email').value.trim();
  const password = document.querySelector('#password-form').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.status.Text);
    }
  }
};

document
.querySelector('#signup-form')
.addEventListener('submit', signupFormHandler);