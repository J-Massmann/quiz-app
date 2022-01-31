export default function Heading() {
  let header = document.querySelector('[data-js="header"]');
  const buttonHome = document.querySelector('[data-nav="home"]');
  const buttonCreate = document.querySelector('[data-nav="create"]');
  const buttonBookmark = document.querySelector('[data-nav="bookmark"]');
  const buttonProfile = document.querySelector('[data-nav="profile"]');
  buttonHome.addEventListener('click', () => {
    header.innerHTML = 'QUIZ-APP';
  });
  buttonBookmark.addEventListener('click', () => {
    header.innerHTML = 'BOOKMARK';
  });
  buttonCreate.addEventListener('click', () => {
    header.innerHTML = 'CREATE NEW CARDS';
  });
  buttonProfile.addEventListener('click', () => {
    header.innerHTML = 'PROFILE';
  });
}
