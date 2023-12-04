const loginFormRef = document.querySelector('.login-form');
const btnRef = document.querySelector('button');

btnRef.style.backgroundColor = '#4E75FF';
btnRef.style.borderRadius = '8px';
btnRef.style.width = '86px';
btnRef.style.height = '40px';

loginFormRef.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = loginFormRef.email.value.trim();
  const passwordlValue = loginFormRef.password.value.trim();

  if (!emailValue || !passwordlValue) {
    alert('All form fields must be filled in');
    return;
  }
  const formText = {
    email: emailValue,
    password: passwordlValue,
  };
  console.log(formText);
  loginFormRef.reset();
});
