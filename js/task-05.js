/** @format */

const refs = {
  inputName: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

refs.inputName.addEventListener("input", (e) => {
  refs.outputName.textContent = e.target.value;
  

  if (e.target.value === '') {
    refs.outputName.textContent = 'Anonymous'
  }
});

