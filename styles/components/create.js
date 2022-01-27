const inputQuestion = document.querySelector('[data-js="textarea-Question"]');
const outputElement = document.querySelector('[data-js="counter"]');
const counter = 200;

inputQuestion.addEventListener("input", () => {
  const stringLength = Number(inputQuestion.value.length);
  outputElement.value = counter - stringLength;
});
