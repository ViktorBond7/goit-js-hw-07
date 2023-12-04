function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorRef = document.querySelector('.color');
const changeColorRef = document.querySelector('.change-color');

changeColorRef.style.backgroundColor = '#4E75FF';
changeColorRef.style.borderRadius = '8px';
changeColorRef.style.justifyContent = 'center';

changeColorRef.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorRef.textContent = randomColor;
  colorRef.style.color = randomColor;
});
