function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesEll = document.querySelector('#boxes');
const input = document.querySelector('input');

createBtnRef.style.margin = '16px';
destroyBtnRef.style.backgroundColor = '#FF4E4E';

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes() {
  boxesEll.removeEventListener('click', destroyBoxes());
  const amount = Number(input.value);

  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesEll.append(...boxes);
  input.value = '';
}

function destroyBoxes() {
  boxesEll.innerHTML = '';
}
