const themeToggle = document.getElementById('themeToggle');
const demoButton = document.getElementById('demoButton');
const yearElement = document.getElementById('year');
const root = document.body;

const storedTheme = localStorage.getItem('appTheme') || 'light';

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  localStorage.setItem('appTheme', theme);
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}

themeToggle.addEventListener('click', () => {
  applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  showToast(`${root.dataset.theme === 'dark' ? 'Dark' : 'Light'} mode enabled`);
});

demoButton.addEventListener('click', () => {
  showToast('Design preview is ready!');
});

yearElement.textContent = new Date().getFullYear();
applyTheme(storedTheme);
