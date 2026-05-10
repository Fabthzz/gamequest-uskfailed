// contact.js - Handle form submit

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nama = document.getElementById('nama').value.trim();
      const email = document.getElementById('email').value.trim();
      const pesan = document.getElementById('pesan').value.trim();

      if (!nama || !email || !pesan) {
        alert('Mohon isi semua field ya, petualang!');
        return;
      }

      // Simulate sending
      if (toast) {
        toast.textContent = 'Pesan berhasil dikirim! Kami akan segera membalas.';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
      }

      form.reset();
    });
  }
});