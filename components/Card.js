export default function Card(cardElement) {
  const buttonElement = cardElement.querySelector(
    '[data-js="button-bookmark"]'
  );
  const image = cardElement.querySelector('[data-js="button-image"]');
  buttonElement.addEventListener('click', changeImg);

  function changeImg() {
    if (image.src.includes('/images/bookmark-regular.svg')) {
      image.src = '/images/bookmark-fill.svg';
    } else {
      image.src = '/images/bookmark-regular.svg';
    }
  }

  const showAnswer = cardElement.querySelector('[data-js="show-answer"]');
  const textElement = cardElement.querySelector('[data-js="hide-text"]');

  showAnswer.addEventListener('click', () => {
    if (showAnswer.textContent.trim() === 'show answer') {
      textElement.classList.remove('Card__answer-hide');
      showAnswer.textContent = 'hide answer';
    } else {
      textElement.classList.add('Card__answer-hide');
      showAnswer.textContent = 'show answer';
    }
  });
}
