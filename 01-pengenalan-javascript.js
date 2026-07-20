// ============================================================
// 📘 MATERI 01 - PENGENALAN JAVASCRIPT
// ============================================================

// ============================================================
// 🎯 TUJUAN PEMBELAJARAN
// ============================================================
// Setelah mempelajari materi ini, kamu akan mampu:
// 1. Memahami apa itu JavaScript dan kegunaannya
// 2. Mengetahui bagaimana JavaScript bekerja di browser dan Node.js
// 3. Menggunakan console.log() untuk menampilkan output
// 4. Menulis komentar dalam kode JavaScript
// 5. Memahami cara menjalankan kode JavaScript

// ============================================================
// 📖 PENJELASAN KONSEP
// ============================================================

// APA ITU JAVASCRIPT?
// -------------------
// JavaScript (sering disingkat JS) adalah bahasa pemrograman yang
// awalnya dibuat untuk membuat halaman web menjadi interaktif.
//
// Contoh hal yang bisa dilakukan JavaScript:
// - Membuat tombol yang bereaksi saat diklik
// - Memvalidasi formulir sebelum dikirim
// - Menampilkan data dari server tanpa reload halaman
// - Membuat animasi dan efek visual
// - Membangun aplikasi server (dengan Node.js)
// - Membuat aplikasi mobile (dengan React Native)
//
// JavaScript adalah satu-satunya bahasa pemrograman yang bisa
// dijalankan langsung di browser. Ini membuatnya sangat penting
// dalam dunia web development.

// BAGAIMANA JAVASCRIPT BEKERJA?
// ------------------------------
// JavaScript adalah bahasa yang diinterpretasi (interpreted),
// artinya kode dibaca dan langsung dijalankan baris per baris,
// berbeda dengan bahasa yang dikompilasi seperti C++ atau Java.
//
// Ada dua lingkungan utama untuk menjalankan JavaScript:
// 1. BROWSER  → Buka DevTools (F12) → Console → ketik kode JS
// 2. NODE.JS  → Jalankan file .js lewat terminal: node nama-file.js

// ============================================================
// 🔤 SINTAKS DAN ATURAN PENTING
// ============================================================

// 1. CASE SENSITIVE
//    JavaScript membedakan huruf besar dan kecil.
//    'nama', 'Nama', dan 'NAMA' dianggap sebagai tiga hal yang berbeda.

// 2. TITIK KOMA (;)
//    JavaScript modern tidak selalu membutuhkan titik koma di akhir baris,
//    karena ada fitur ASI (Automatic Semicolon Insertion).
//    Namun, sebaiknya tetap gunakan titik koma untuk menghindari bug tersembunyi.

// 3. WHITESPACE
//    Spasi, tab, dan baris kosong diabaikan oleh JavaScript.
//    Gunakan ini untuk membuat kode lebih mudah dibaca.

// 4. URUTAN EKSEKUSI
//    Kode JavaScript dieksekusi dari atas ke bawah, baris per baris.

// ============================================================
// 💬 KOMENTAR DALAM JAVASCRIPT
// ============================================================

// Komentar adalah teks yang diabaikan oleh JavaScript saat dijalankan.
// Komentar berguna untuk:
// - Menjelaskan apa yang dilakukan kode
// - Menonaktifkan baris kode sementara
// - Membuat catatan untuk diri sendiri atau tim

// KOMENTAR SATU BARIS → gunakan dua garis miring (//)
// Contoh:
// Ini adalah komentar satu baris

/* KOMENTAR BANYAK BARIS → gunakan /* dan */
   // Kamu bisa menulis komentar
   // sepanjang yang kamu mau di sini.
// */

// ============================================================
// 📺 CONSOLE.LOG() - MENAMPILKAN OUTPUT
// ============================================================

// console.log() adalah cara paling dasar untuk menampilkan
// sesuatu ke layar (di panel Console browser atau di terminal Node.js).
// Ini adalah "teman terbaik" programmer saat debugging.

// Menampilkan teks (string)
console.log("Halo, dunia!");

// Menampilkan angka
console.log(42);
console.log(3.14);

// Menampilkan boolean (nilai benar/salah)
console.log(true);
console.log(false);

// Menampilkan banyak nilai sekaligus (pisahkan dengan koma)
console.log("Nama:", "Budi", "| Umur:", 20);

// ============================================================
// 🌍 CONTOH KASUS NYATA
// ============================================================

// Bayangkan kamu membangun sistem kasir sederhana.
// Langkah pertama adalah menampilkan pesan selamat datang.

console.log("============================");
console.log("  Selamat Datang di Kasir   ");
console.log("============================");
console.log("Silahkan pilih produk Anda.");

// Di dunia nyata, console.log() sering digunakan untuk:
// - Memeriksa apakah kode berjalan sampai titik tertentu
// - Melihat nilai variabel saat proses debugging
// - Menampilkan pesan status atau log dari server

// ============================================================
// ✅ BEST PRACTICE
// ============================================================

// 1. GUNAKAN BAHASA INGGRIS UNTUK NAMA VARIABEL DAN FUNGSI
//    Ini membuat kode lebih universal dan profesional.
//    (Kita akan belajar variabel di materi berikutnya)

// 2. TULIS KOMENTAR YANG BERMAKNA
//    ❌ Buruk: console.log(x); // menampilkan x
//    ✅ Baik:  console.log(totalHarga); // menampilkan total harga setelah diskon

// 3. SATU PERINTAH PER BARIS
//    Hindari menulis banyak perintah dalam satu baris.
//    Ini membuat kode lebih mudah dibaca dan di-debug.

// 4. GUNAKAN INDENTASI YANG KONSISTEN
//    Gunakan 2 atau 4 spasi untuk indentasi. Jangan campur keduanya.

// 5. JANGAN BIARKAN CONSOLE.LOG TERTINGGAL DI KODE PRODUKSI
//    console.log() berguna untuk debugging, tapi sebaiknya dihapus
//    sebelum kode dipublikasikan ke pengguna akhir.

// ============================================================
// ⚠️ KESALAHAN YANG SERING DILAKUKAN PEMULA
// ============================================================

// KESALAHAN 1: Salah ketik nama fungsi
// ❌ consol.log("halo");   // Typo! Harusnya "console"
// ❌ console.Log("halo");  // Salah kapital! Harusnya huruf kecil "log"
// ✅ console.log("halo");

// KESALAHAN 2: Lupa tanda kurung atau kutip
// ❌ console.log("halo);   // Kutip tidak berpasangan
// ❌ console.log "halo"    // Tidak ada tanda kurung
// ✅ console.log("halo");

// KESALAHAN 3: Mengabaikan pesan error
//    Error adalah petunjuk yang sangat berguna!
//    Baca pesan error dengan seksama, biasanya tertulis
//    di baris mana masalahnya dan apa penyebabnya.

// KESALAHAN 4: Menganggap JavaScript sama dengan Java
//    JavaScript dan Java adalah dua bahasa yang BERBEDA SAMA SEKALI.
//    Mereka hanya mirip namanya saja, tapi konsep, sintaks,
//    dan kegunaannya sangat berbeda.

// KESALAHAN 5: Langsung copy-paste tanpa mencoba menulis sendiri
//    Belajar programming harus dengan KETIK SENDIRI.
//    Otot jari yang terbiasa mengetik kode akan membantu
//    memori lebih cepat menyerap konsep.

// ============================================================
// 📝 RINGKASAN MATERI
// ============================================================

// ✔ JavaScript adalah bahasa pemrograman utama web yang berjalan
//   di browser maupun server (Node.js)
// ✔ JavaScript bersifat case-sensitive dan dieksekusi baris per baris
// ✔ console.log() digunakan untuk menampilkan output/debugging
// ✔ Komentar (//) tidak dieksekusi oleh JavaScript
// ✔ Titik koma (;) direkomendasikan di akhir setiap pernyataan
// ✔ Baca pesan error dengan seksama — itu adalah petunjuk berharga!

// ============================================================
// 🏋️ LATIHAN
// ============================================================
// Kerjakan latihan berikut di file terpisah atau di bawah ini.
// Jangan lihat jawaban dulu sebelum mencoba sendiri!

// --- MUDAH ---

// Latihan 1
// Tampilkan teks "Halo, nama saya [nama kamu]!" menggunakan console.log().

// Latihan 2
// Tampilkan angka favoritmu menggunakan console.log().

// Latihan 3
// Tampilkan tiga baris teks berbeda menggunakan tiga console.log() terpisah.
// Contoh output:
// Baris pertama
// Baris kedua
// Baris ketiga

// Latihan 4
// Tampilkan nilai true dan false masing-masing di baris yang berbeda.
// Perhatikan: jangan gunakan tanda kutip! True dan false bukan string.

// Latihan 5
// Buat sebuah komentar satu baris yang menjelaskan apa yang akan
// kamu pelajari di JavaScript.

// Latihan 6
// Tampilkan nama, umur, dan kota asalmu dalam SATU perintah console.log()
// dengan format: "Nama: [nama] | Umur: [umur] | Kota: [kota]"

// --- SEDANG ---

// Latihan 7
// Buat "kartu nama digital" menggunakan beberapa console.log().
// Output yang diharapkan kira-kira seperti ini:
// ============================
//       KARTU NAMA
// ============================
// Nama  : Budi Santoso
// Umur  : 25 tahun
// Kota  : Jakarta
// Email : budi@email.com
// ============================

// Latihan 8
// Tampilkan hasil perhitungan matematika langsung di dalam console.log().
// Contoh: console.log(10 + 5) → harusnya menampilkan 15
// Coba: 100 - 37, 8 * 9, 144 / 12

// Latihan 9
// Buat blok komentar (/* */) yang berisi:
// - Nama kamu
// - Tanggal hari ini
// - Tujuan kamu belajar JavaScript

// Latihan 10
// Tampilkan kalimat yang mengandung tanda kutip di dalamnya.
// Contoh: Guru berkata, "Belajarlah dengan giat!"
// (Petunjuk: coba gunakan tanda kutip tunggal di luar, atau escape character \")

// Latihan 11
// Berikan komentar pada setiap baris console.log() yang kamu buat di Latihan 7,
// menjelaskan apa yang ditampilkan setiap baris tersebut.

// --- SULIT ---

// Latihan 12
// Buat "struk belanja" sederhana menggunakan console.log().
// Struk harus menampilkan:
// - Nama toko
// - Garis pemisah
// - Daftar minimal 3 item dengan harganya
// - Total harga (hitung manual dulu)
// - Pesan terima kasih
// (Petunjuk: kamu bisa menghitung langsung di dalam console.log(), misal: console.log(5000 + 12000 + 8000))

// Latihan 13
// Coba sengaja buat 3 jenis error yang berbeda (salah ketik nama fungsi,
// lupa tanda kutip, lupa tanda kurung). Jalankan satu per satu,
// baca pesan error-nya, lalu perbaiki.
// (Tujuan: belajar mengenali dan memahami pesan error)

// Latihan 14
// Buat sebuah "kalkulator" sederhana menggunakan console.log() untuk
// menampilkan hasil dari 5 operasi matematika berbeda:
// - Penjumlahan dua bilangan tiga digit
// - Pengurangan
// - Perkalian
// - Pembagian
// - Sisa bagi (modulus, gunakan operator %)
// Format output: "10 + 5 = 15"

// Latihan 15 (TANTANGAN)
// Buat sebuah "laporan status sistem" yang ditampilkan menggunakan console.log().
// Laporan harus terlihat rapi dan terstruktur, seperti ini:
//
// ========================================
//    LAPORAN STATUS SISTEM - [Tanggal]
// ========================================
// [OK]     Server          : Online
// [OK]     Database        : Terhubung
// [WARN]   Memori          : 87% penuh
// [ERROR]  Layanan Email   : Tidak merespons
// ========================================
//    Status Keseluruhan: PERINGATAN
// ========================================
//
// Buat minimal 5 baris status dengan kombinasi OK, WARN, dan ERROR.
// Pastikan formatnya konsisten dan rapi!
