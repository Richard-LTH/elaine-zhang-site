
const langToggle = document.getElementById('langToggle');
let currentLang = 'en';  // 默认英文
langToggle.textContent = '中文';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute('data-en');
  });
});

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'cn' ? 'en' : 'cn';
  langToggle.textContent = currentLang === 'cn' ? 'EN' : '中文';

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
});
