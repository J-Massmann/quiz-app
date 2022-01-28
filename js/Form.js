export default function Form(formElement) {
  const inputQuestion = formElement.querySelector('[data-js="textarea-User"]');
  const outputElement = formElement.querySelector('[data-js="counter"]');
  const counter = 200;

  inputQuestion.addEventListener('input', () => {
    const stringLength = Number(inputQuestion.value.length);
    outputElement.value = counter - stringLength;
  });
}
