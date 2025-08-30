const ref = {
  inputRef: document.querySelector('#name-input'),
  textSpan: document.querySelector('#name-output'),
};

ref.inputRef.addEventListener('input', event => {
  const value = event.target.value.trim();

  ref.textSpan.textContent = value ? value : 'Anonymous';
});
