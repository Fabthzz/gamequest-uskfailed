// gallery.js - Lightbox dan show more

document.addEventListener('DOMContentLoaded', function () {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  // Open lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', function () {
      const src = item.querySelector('img').src;
      lightboxImg.src = src;
      lightbox.classList.add('open');
    });
  });

  // Close lightbox
  if (lightboxClose) {
    lightboxClose.addEventListener('click', function () {
      lightbox.classList.remove('open');
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        lightbox.classList.remove('open');
      }
    });
  }

  // Show all button (unhide hidden items)
  const btnShowAll = document.getElementById('btn-show-all');
  const hiddenItems = document.querySelectorAll('.gallery-item.hidden-item');

  if (btnShowAll) {
    btnShowAll.addEventListener('click', function () {
      hiddenItems.forEach(item => {
        item.classList.remove('hidden-item');
        item.style.display = '';
      });
      btnShowAll.style.display = 'none';
    });
  }
});