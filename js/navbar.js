// navbar.js - Hamburger modern floating menu

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  function openMenu() {
    navMenu.classList.add('open');
    hamburger.classList.add('open');
  }

  function closeMenu() {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      navMenu.classList.contains('open') ? closeMenu() : openMenu();
    });
  }

  // Klik di luar = tutup
  document.addEventListener('click', function (e) {
    if (navMenu && !navMenu.contains(e.target) && e.target !== hamburger) {
      closeMenu();
    }
  });

  // Klik link = tutup
  if (navMenu) {
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});