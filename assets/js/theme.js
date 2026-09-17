(function () {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('[data-theme-toggle]');
  const storageKey = 'samhith-theme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const savedTheme = window.localStorage.getItem(storageKey);

  function setTheme(theme, persist) {
    root.dataset.theme = theme;
    buttons.forEach(function (button) {
      const darkMode = theme === 'dark';
      button.setAttribute('aria-pressed', String(darkMode));
      button.setAttribute('aria-label', darkMode ? 'Switch to light mode' : 'Switch to dark mode');
      button.querySelector('span:first-child').textContent = darkMode ? '☀' : '☾';
    });
    if (persist) window.localStorage.setItem(storageKey, theme);
  }

  setTheme(savedTheme || systemTheme, false);
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
    });
  });
})();
