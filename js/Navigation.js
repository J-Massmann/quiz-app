export default function Nav() {
  const homeButton = document.querySelector('[data-js="home"]');
  const bookmarkButton = document.querySelector('[data-js="bookmark"]');
  const createButton = document.querySelector('[data-js="create"]');
  const profileButton = document.querySelector('[data-js="profile"]');

  const homePage = document.querySelector('[data-js="home-page"]');
  const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
  const createPage = document.querySelector('[data-js="create-page"]');
  const profilePage = document.querySelector('[data-js="profile-page"]');

  homeButton.addEventListener('click', () => {
    homeButton.classList.add('nav__icon--active');
    bookmarkButton.classList.remove('nav__icon--active');
    createButton.classList.remove('nav__icon--active');
    profileButton.classList.remove('nav__icon--active');
    homePage.classList.remove('hidden');
    bookmarkPage.classList.add('hidden');
    createPage.classList.add('hidden');
    profilePage.classList.add('hidden');
  });

  bookmarkButton.addEventListener('click', () => {
    homeButton.classList.remove('nav__icon--active');
    bookmarkButton.classList.add('nav__icon--active');
    createButton.classList.remove('nav__icon--active');
    profileButton.classList.remove('nav__icon--active');
    homePage.classList.add('hidden');
    bookmarkPage.classList.remove('hidden');
    createPage.classList.add('hidden');
    profilePage.classList.add('hidden');
  });

  createButton.addEventListener('click', () => {
    homeButton.classList.remove('nav__icon--active');
    bookmarkButton.classList.remove('nav__icon--active');
    createButton.classList.add('nav__icon--active');
    profileButton.classList.remove('nav__icon--active');
    homePage.classList.add('hidden');
    bookmarkPage.classList.add('hidden');
    createPage.classList.remove('hidden');
    profilePage.classList.add('hidden');
  });

  profileButton.addEventListener('click', () => {
    homeButton.classList.remove('nav__icon--active');
    bookmarkButton.classList.remove('nav__icon--active');
    createButton.classList.remove('nav__icon--active');
    profileButton.classList.add('nav__icon--active');
    homePage.classList.add('hidden');
    bookmarkPage.classList.add('hidden');
    createPage.classList.add('hidden');
    profilePage.classList.remove('hidden');
  });
}
