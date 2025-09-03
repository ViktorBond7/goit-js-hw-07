const ref = {
  formRef: document.querySelector('.login-form'),
};

ref.formRef.addEventListener('submit', event => {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }
  const info = {
    email,
    password,
  };
  console.log(info);
  ref.formRef.reset();
});
