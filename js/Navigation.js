export default function Nav() {
  const allPages = document.querySelectorAll('[data-page]');
  const allButtons = document.querySelectorAll('[data-nav]');

  allButtons.forEach(button => {
    button.addEventListener('click', event => {
      allPages.forEach(pages => {
        pages.classList.add('hidden');
      });
      const buttonAttribute = event.currentTarget.getAttribute('data-nav');
      const currentPage = document.querySelector(
        `[data-page="${buttonAttribute}"]`
      );
      currentPage.classList.remove('hidden');
      allButtons.forEach(button => {
        button.classList.remove('nav__icon--active');
      });
      const currentButton = document.querySelector(
        `[data-nav="${buttonAttribute}"]`
      );
      currentButton.classList.add('nav__icon--active');
    });
  });
}
