function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color')
const bodyBgColor = document.querySelector('body')

const handlerBtn = () => {
  let randomColors = getRandomHexColor()
  bodyBgColor.style.backgroundColor = randomColors;
  textColor.textContent = randomColors;
}


btnChangeColor.addEventListener('click', handlerBtn)