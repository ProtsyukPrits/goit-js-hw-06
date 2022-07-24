const refs = {
  controlsInput: document.querySelector('#controls>input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  createBoxesEl: document.querySelector('#boxes'),

   getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
},
}

const createBoxes = (amount) => {
  let createEl = [];
  for (let i = 0; i < amount; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.width = `${30 + 10 * i}px`
    createDiv.style.height = `${30 + 10 * i}px`
    createDiv.style.background = refs.getRandomHexColor()
    createEl.push(createDiv)
  }
  return createEl
}

const destroyBoxes = () => {
  refs.createBoxesEl.innerHTML = '';
}

refs.createBtn.addEventListener('click', () => {
  const addCreateBoxes = createBoxes(refs.controlsInput.value);
  refs.createBoxesEl.append(...addCreateBoxes)
});

refs.destroyBtn.addEventListener('click', () => {
  destroyBoxes()
});