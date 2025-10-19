export default function handler(req, res) {
  const data = {
    sumber: "API Berita Abyan",
    kategori: "Teknologi",
    total: 5,
    berita: [
      {
        id: 1,
        judul: "AI Karya Mahasiswa Indonesia Jadi Sorotan Dunia",
        deskripsi: "Inovasi kecerdasan buatan buatan anak bangsa mampu bersaing di tingkat internasional.",
        gambar: "https://via.placeholder.com/600x300?text=AI+Indonesia",
        link: "#"
      },
      {
        id: 2,
        judul: "Startup Lokal Ciptakan Robot Asisten Mekanik",
        deskripsi: "Robot ini membantu mekanik bengkel untuk mempercepat proses perbaikan kendaraan.",
        gambar: "https://via.placeholder.com/600x300?text=Robot+Mekanik",
        link: "#"
      },
      {
        id: 3,
        judul: "Aplikasi Kampus Digital Buatan Mahasiswa UNS",
        deskripsi: "Platform ini memudahkan mahasiswa mengakses jadwal kuliah, nilai, dan absensi secara online.",
        gambar: "https://via.placeholder.com/600x300?text=Kampus+Digital",
        link: "#"
      },
      {
        id: 4,
        judul: "Inovasi Energi Terbarukan dari Limbah Plastik",
        deskripsi: "Peneliti muda Indonesia mengubah limbah plastik menjadi sumber energi ramah lingkungan.",
        gambar: "https://via.placeholder.com/600x300?text=Energi+Hijau",
        link: "#"
      },
      {
        id: 5,
        judul: "Game Edukasi Buatan Anak SMK Raih Penghargaan",
        deskripsi: "Game ini membantu siswa memahami logika pemrograman lewat cara yang menyenangkan.",
        gambar: "https://via.placeholder.com/600x300?text=Game+Edukasi",
        link: "#"
      }
    ]
  };

  res.status(200).json(data);
}
