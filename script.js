const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const year = document.querySelector('#year');

// Footer year
if (year) {
  year.textContent = new Date().getFullYear();
}

// Mobile menu
menu?.addEventListener('click', () => {
  nav.classList.toggle('open');

  const isOpen = nav.classList.contains('open');
  menu.setAttribute('aria-expanded', isOpen);
});

// Close menu when a link is clicked
nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  });
});

