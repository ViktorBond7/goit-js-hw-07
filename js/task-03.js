const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
  const textEnter = inputRef.value.trim();
  outputRef.textContent = textEnter === '' ? 'Anonymous' : textEnter;
});
