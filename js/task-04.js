const refs = {
  counterValue: 0,
  decrementBtn: document.querySelector('[data-action= "decrement"]'),
  incrementBtn: document.querySelector('[data-action= "increment"]'),
  valueEl: document.querySelector('#value'),
};



const handlerRemove = () => {
  refs.counterValue -= 1;
  refs.valueEl.textContent = refs.counterValue; 
}

const handlerAdd = () => {
  refs.counterValue += 1;
  refs.valueEl.textContent = refs.counterValue;
}

refs.decrementBtn.addEventListener('click', handlerRemove);
refs.incrementBtn.addEventListener('click', handlerAdd);



