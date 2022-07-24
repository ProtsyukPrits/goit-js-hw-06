const inputControler = document.querySelector('#font-size-control');
const inputControlerText = document.querySelector('#text');

const handlerInput = () => {
  inputControlerText.style.fontSize = `${inputControler.value}px`
}

inputControler.addEventListener('input', handlerInput);


