// contact.js - Handle form submit via Formspree

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const nama  = document.getElementById('nama').value.trim();
      const email = document.getElementById('email').value.trim();
      const pesan = document.getElementById('pesan').value.trim();

      if (!nama || !email || !pesan) {
        showToast('⚠️ Mohon isi semua field ya mas', '#b91c1c');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.textContent = '⏳ Mengirim...';
      submitBtn.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          showToast('✅ Pesan berhasil dikirim!', '#7e22ce');
          form.reset();
        } else {
          showToast('❌ Gagal kirim pesan.', '#b91c1c');
        }
      } catch (err) {
        showToast('❌ Tidak ada koneksi. Cek internet mas', '#b91c1c');
      }

      submitBtn.textContent = '📨 Kirim Pesan';
      submitBtn.disabled = false;
    });
  }

  function showToast(msg, color) {
    if (!toast) return;
    toast.textContent = msg;
    toast.style.background = color;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }
});