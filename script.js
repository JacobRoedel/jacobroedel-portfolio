document.getElementById('year').textContent = new Date().getFullYear();

const themeToggle = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('portfolio-theme');

function setTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light', isLight);
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.textContent = isLight ? 'Dark mode' : 'Light mode';
  localStorage.setItem('portfolio-theme', theme);
}

if (storedTheme === 'light' || storedTheme === 'dark') setTheme(storedTheme);

themeToggle.addEventListener('click', () => {
  setTheme(document.body.classList.contains('light') ? 'dark' : 'light');
});
