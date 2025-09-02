function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  controlsRef: document.querySelector('#controls'),
  containerBoxesRef: document.querySelector('#boxes'),
  btnCreateRef: document.querySelector('[data-create]'),
  btnDestroyRef: document.querySelector('[data-destroy]'),
};

const destroyBoxes = () => {
  ref.containerBoxesRef.innerHTML = '';
};

const createBoxes = amount => {
  destroyBoxes();
  let boxes = [];
  for (let i = 0; i <= amount - 1; i++) {
    const box = document.createElement('div');
    const size = `${30 + i * 10}px`;
    box.style.width = size;
    box.style.height = size;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  return ref.containerBoxesRef.append(...boxes);
};

ref.btnCreateRef.addEventListener('click', event => {
  const value = ref.controlsRef.firstElementChild.value;
  if (value >= 1 && value <= 100) {
    createBoxes(value);
    ref.controlsRef.firstElementChild.value = '';
  } else {
    alert('The number must be between 1 and 100 👌');
  }
});

ref.btnDestroyRef.addEventListener('click', destroyBoxes);

ref.btnDestroyRef.style.backgroundColor = '#ff4e4e';
