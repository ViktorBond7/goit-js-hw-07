function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  spanRef: document.querySelector('.color'),
  btnRef: document.querySelector('.change-color'),
};

ref.btnRef.addEventListener('click', event => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  ref.spanRef.textContent = color;
});
