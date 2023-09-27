const elementToggleMode = document.querySelector('#icons');
let darkMode = true;

elementToggleMode.addEventListener("click", (event) => {
  document.documentElement.classList.toggle('toggleMode');

  let mode = darkMode ? 'desligado' : 'ligado';
  let message = event.currentTarget.querySelector('.sr-only');
  
  message.textContent = `Dark Mode ${mode}.`

  darkMode = !darkMode;
});