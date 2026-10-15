# RINGKASAN DOKUMENTASI: RUANG HUKUM
> **Platform Belajar Hukum Interaktif Modern**  
> *Tagline: "Learn Law. Understand More." / "Pelajari Hukum. Pahami Lebih Jauh."*

---

## 1. APA ITU RUANG HUKUM?
**Ruang Hukum** adalah platform website edukasi hukum interaktif untuk mahasiswa hukum dan masyarakat pemula. Tujuannya adalah mengubah materi hukum yang tebal dan rumit menjadi **modul ringkas per bab**, dilengkapi **latihan kuis interaktif**, serta **sertifikat kelulusan digital**, dengan tampilan bernuansa hukum klasik modern (*Royal Maroon & Warm Gold*).

---

## 2. FITUR UTAMA YANG SUDAH TERSEDIA

| No | Fitur | Rute Halaman | Penjelasan Singkat |
| :---: | :--- | :--- | :--- |
| **1** | **Login & Free Trial** | `/` | Masuk ke akun atau langsung coba gratis 5 hari (*5-Day Free Trial*) tanpa ribet. |
| **2** | **Dwibahasa (ID / EN)** | *Navbar Global* | Tombol ganti bahasa instan (Indonesia & Inggris) di seluruh aplikasi, materi, dan kuis. |
| **3** | **Dasbor Belajar** | `/dashboard` | Ringkasan materi yang sedang dipelajari, status akun, dan jalan pintas ke semua modul. |
| **4** | **Modul Materi Hukum** | `/materials` | Katalog 6 mata kuliah hukum (Pidana, Tata Negara, Pengantar Hukum, dll.) yang dibagi per bab ringkas. |
| **5** | **Pembaca Bab Detail** | `/materials/[slug]/chapter/[id]` | Halaman baca materi per bab dengan daftar silabus di samping dan tombol lanjut bab. |
| **6** | **Kuis Interaktif** | `/quiz` | Latihan soal pilihan ganda dengan skor langsung keluar, pembahasan jawaban, dan status kelulusan (KKM 70%). |
| **7** | **Konten Para Ahli** | `/expert-content` | Artikel analisis, video pembelajaran, dan studi kasus dari praktisi hukum serta dosen senior. |
| **8** | **Pantau Progres Belajar** | `/progress` | Grafik jam belajar mingguan, hitungan rentetan hari (*daily streak*), dan lencana prestasi (*badges*). |
| **9** | **Sertifikat Digital** | `/certificates` | Sertifikat kelulusan resmi berstempel emas yang otomatis terbuka dan siap diunduh setelah lulus kuis. |
| **10** | **Paket Langganan** | `/subscription` | Pilihan upgrade paket keanggotaan (Free Trial, Mahasiswa, atau Profesional). |
| **11** | **Profil Pengguna** | `/profile` | Informasi universitas, jurusan hukum, target karier, dan koleksi sertifikat. |
| **12** | **Pengaturan Akun** | `/settings` | Pengaturan profil, ubah kata sandi, preferensi notifikasi, dan bahasa default. |
| **13** | **Pusat Bantuan & FAQ** | `/help` | Tanya jawab interaktif (*FAQ accordion*), panduan web, dan formulir hubungi tim bantuan. |

---

## 3. ALUR PENGGUNAAN UTAMA (WORKFLOW)

```text
[ 1. Masuk / Free Trial ] ➔ [ 2. Baca Materi per Bab ] ➔ [ 3. Kerjakan Kuis & Unduh Sertifikat ]
```

1. **Mulai Belajar**: Pengguna masuk via form login atau klik tombol *Free Trial* untuk langsung menuju ke Dashboard.
2. **Pelajari Bab**: Buka menu **Materials**, pilih mata kuliah yang diinginkan, dan baca bab materi secara bertahap.
3. **Uji Pemahaman**: Masuk ke menu **Quiz** untuk menjawab soal latihan. Jika nilai mencapai ≥ 70% (Lulus), sertifikat kelulusan digital akan otomatis terbit di menu **Certificates** dan siap diunduh.

---

## 4. INFORMASI TEKNIS SINGKAT

- **Teknologi**: Next.js 16 (App Router), Tailwind CSS v4, Lucide Icons, Google Fonts (*Cinzel, Playfair Display, Inter*).
- **Desain**: 100% Responsif untuk layar HP, Tablet, dan Laptop/Desktop.
- **Cara Menjalankan Lokal**:
  ```bash
  npm run dev     # Menjalankan server lokal (http://localhost:3000)
  npm run build   # Memvalidasi & membuat build produksi
  ```
