export default function Logout() {
  const logoutButton = document.querySelector('[data-js="logout"]');

  let isUserLoggoutOut = false;

  logoutButton.addEventListener('click', () => {
    if (!isUserLoggoutOut) {
      alert('You are now logged out! Bye bye, see you next time 👋');
      logoutButton.textContent = 'LOGIN';
      isUserLoggoutOut = true;
    } else {
      alert('You are now logged in! Good to see you back 😊');
      logoutButton.textContent = 'LOGOUT';
      isUserLoggoutOut = false;
    }
  });
}
