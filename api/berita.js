export default function handler(req, res) {
  // Tambahkan header CORS biar bisa diakses dari mana saja
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Kalau method OPTIONS (preflight request)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Contoh data
  const berita = [
    {
      id: 1,
      judul: "Pemerintah Umumkan Kebijakan Baru",
      kategori: "Hukum",
      tanggal: "2025-10-19",
      isi: "Pemerintah mengumumkan kebijakan baru terkait reformasi hukum nasional.",
    },
    {
      id: 2,
      judul: "Kasus Korupsi Ditangani KPK",
      kategori: "Hukum",
      tanggal: "2025-10-18",
      isi: "KPK menangani kasus korupsi besar di kementerian tertentu.",
    },
  ];

  res.status(200).json({
    sumber: "API Berita Abyan",
    kategori: "Hukum",
    berita,
  });
}
