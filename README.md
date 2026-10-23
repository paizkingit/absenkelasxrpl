# ABSENSI KELAS

Aplikasi HTML/CSS/JavaScript + Firebase dengan login admin, QR sesi dinamis, scanner kamera, dan penyimpanan Firestore.

## Konfigurasi
1. Buat project Firebase.
2. Aktifkan Authentication > Email/Password.
3. Buat user admin dengan email `faiz@absensi.local` dan password sesuai yang kamu tetapkan di Firebase Authentication.
4. Aktifkan Cloud Firestore.
5. Salin konfigurasi Web App Firebase ke `js/firebase-config.js`.
6. Atur Firestore Security Rules. Jangan membuka database dengan `allow read, write: if true` untuk penggunaan nyata.
7. Jalankan melalui HTTPS atau localhost agar kamera QR dapat digunakan.

## Catatan
Username yang ditampilkan adalah `faiz`; Firebase menggunakan email internal `faiz@absensi.local`.
Untuk produksi, tambahkan custom claims/role admin dan validasi server-side/Cloud Functions untuk mencegah manipulasi data dari browser.

## Struktur
index.html, login.html, scan.html, attendance.html, admin.html, students.html, report.html, css/style.css, js/*
