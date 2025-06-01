// Home Page (index.html)
const matkulInfo = {
  web: "Web Desain: Membahas pembuatan tampilan dan interaksi website yang modern dan responsif.",
  struktur: "Struktur Data: Belajar tentang cara menyimpan dan mengelola data secara efisien di komputer.",
  sistem: "Sistem Operasi: Mengenal dasar-dasar sistem operasi dan cara kerjanya.",
  basis: "Basis Data 2: Fokus pada konsep lanjutan database, relasi, dan manajemen data.",
  matdis: "Matematika Diskrit: Mempelajari logika matematika, graf, kombinatorika, dan aplikasi komputasi."
};

document.addEventListener('DOMContentLoaded', () => {
  // Home - Mata Kuliah Expand
  document.querySelectorAll('.matkul-item').forEach(item => {
    item.addEventListener('click', function() {
      const key = this.getAttribute('data-matkul');
      const desc = document.getElementById('desc-' + key);
      if (desc.style.display === 'block') {
        desc.style.display = 'none';
        desc.textContent = '';
      } else {
        document.querySelectorAll('.matkul-desc').forEach(d => {
          d.style.display = 'none'; d.textContent = '';
        });
        desc.textContent = matkulInfo[key];
        desc.style.display = 'block';
      }
    });
  });

  // Kelas Online Expand Collapse
  document.querySelectorAll('.kelas-title').forEach(btn => {
    btn.addEventListener('click', function() {
      const matkul = this.getAttribute('data-matkul');
      document.querySelectorAll('.kelas-title').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.kelas-dropdown').forEach(drop => drop.classList.remove('active'));
      this.classList.add('active');
      document.getElementById('drop-' + matkul).classList.add('active');
    });
  });

  document.querySelectorAll('.pertemuan-title').forEach(btn => {
    btn.addEventListener('click', function() {
      const pertemuan = this.getAttribute('data-pertemuan');
      const parentCard = this.closest('.kelas-card');
      parentCard.querySelectorAll('.pertemuan-title').forEach(b => b.classList.remove('active'));
      parentCard.querySelectorAll('.pertemuan-content').forEach(con => con.classList.remove('active'));
      this.classList.add('active');
      parentCard.querySelector('#' + pertemuan).classList.add('active');
    });
  });

  // Bank Materi Expand Collapse
  document.querySelectorAll('.bank-title').forEach(btn => {
    btn.addEventListener('click', function() {
      const matkul = this.getAttribute('data-matkul');
      document.querySelectorAll('.bank-title').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.bank-dropdown').forEach(drop => drop.classList.remove('active'));
      this.classList.add('active');
      document.getElementById('bank-' + matkul).classList.add('active');
    });
  });
});