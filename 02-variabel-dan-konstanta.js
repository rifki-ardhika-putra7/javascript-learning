// ============================================================
// 📘 MATERI 02 - VARIABEL DAN KONSTANTA
// ============================================================

// ============================================================
// 🎯 TUJUAN PEMBELAJARAN
// ============================================================
// Setelah mempelajari materi ini, kamu akan mampu:
// 1. Memahami apa itu variabel dan kenapa dibutuhkan
// 2. Mendeklarasikan variabel menggunakan let dan const
// 3. Memahami perbedaan let, const, dan var
// 4. Memberi nama variabel dengan aturan yang benar
// 5. Mengubah (meng-update) nilai variabel
// 6. Mengetahui kapan memakai let dan kapan memakai const

// ============================================================
// 📖 PENJELASAN KONSEP
// ============================================================

// APA ITU VARIABEL?
// -----------------
// Variabel adalah "kotak" atau "wadah" untuk menyimpan data.
// Bayangkan kamu punya kotak berlabel "nama", lalu kamu
// memasukkan tulisan "Budi" ke dalamnya. Nanti kapan saja
// kamu butuh nama tersebut, cukup sebut label "nama".
//
// Tanpa variabel, kamu harus menulis ulang nilai yang sama
// berkali-kali. Dengan variabel, cukup simpan sekali, lalu
// pakai berulang kali.

// APA ITU KONSTANTA?
// ------------------
// Konstanta mirip variabel, tapi nilainya TIDAK BOLEH diubah
// setelah pertama kali diberikan. Cocok untuk data yang
// memang tetap, misalnya: nilai PI, batas maksimal, atau
// nama aplikasi.

// CARA MENDEKLARASIKAN VARIABEL DI JAVASCRIPT MODERN
// -------------------------------------------------
// Ada 3 kata kunci (keyword) untuk membuat variabel:
//
// 1. let   → nilai BISA diubah (direkomendasikan untuk data yang berubah)
// 2. const → nilai TIDAK BISA diubah (direkomendasikan sebagai pilihan utama)
// 3. var   → cara lama (hindari di kode modern, kecuali kasus khusus)
//
// Aturan praktis:
// - Mulai dengan const.
// - Jika nanti ternyata nilainya perlu berubah, ganti jadi let.
// - Jangan pakai var kecuali kamu tahu alasannya.

// ============================================================
// 🔤 SINTAKS DAN ATURAN PENTING
// ============================================================

// 1. SINTAKS DASAR
//    let namaVariabel = nilai;
//    const NAMA_KONSTANTA = nilai;

// 2. ATURAN PENAMAAN VARIABEL
//    - Boleh diawali huruf, underscore (_), atau tanda dolar ($)
//    - Tidak boleh diawali angka
//    - Tidak boleh pakai spasi
//    - Tidak boleh pakai kata kunci JavaScript (let, const, if, for, dll.)
//    - Case-sensitive: nama ≠ Nama ≠ NAMA
//    - Gunakan camelCase untuk variabel: namaLengkap, totalHarga
//    - Gunakan UPPER_SNAKE_CASE untuk konstanta tetap: MAX_RETRY, PI

// 3. DEKLARASI vs ASSIGNMENT
//    Deklarasi  = membuat variabel (let umur;)
//    Assignment = memberi nilai (umur = 20;)
//    Keduanya bisa digabung: let umur = 20;

// 4. SATU VARIABEL, SATU NAMA
//    Tidak boleh mendeklarasikan ulang nama yang sama
//    di scope yang sama dengan let atau const.

// ============================================================
// 💡 CONTOH KODE SEDERHANA
// ============================================================

// --- MENGGUNAKAN let ---
let nama = "Budi";
let umur = 20;
let sudahLogin = false;

console.log(nama);       // Budi
console.log(umur);       // 20
console.log(sudahLogin); // false

// Nilai let BISA diubah
umur = 21;
nama = "Budi Santoso";
console.log(nama); // Budi Santoso
console.log(umur); // 21

// --- MENGGUNAKAN const ---
const PI = 3.14;
const APP_NAME = "KasirApp";
const MAX_LOGIN_ATTEMPT = 3;

console.log(PI);
console.log(APP_NAME);
console.log(MAX_LOGIN_ATTEMPT);

// Nilai const TIDAK BISA diubah
// PI = 3.14159; // ❌ Error: Assignment to constant variable

// --- DEKLARASI TANPA NILAI AWAL ---
// Hanya bisa dilakukan dengan let (bukan const)
let statusPesanan;
console.log(statusPesanan); // undefined (belum diisi)

statusPesanan = "diproses";
console.log(statusPesanan); // diproses

// const HARUS langsung diberi nilai saat dideklarasikan
// const batas; // ❌ Error: Missing initializer in const declaration

// --- MENDEKLARASIKAN BEBERAPA VARIABEL ---
let kota = "Jakarta";
let provinsi = "DKI Jakarta";
let kodePos = "10110";

console.log(kota, provinsi, kodePos);

// --- MENUKAR NILAI DUA VARIABEL ---
let a = 10;
let b = 20;
console.log("Sebelum tukar:", a, b);

let sementara = a;
a = b;
b = sementara;
console.log("Sesudah tukar:", a, b);

// ============================================================
// 🌍 CONTOH KASUS NYATA
// ============================================================

// Kasus: Sistem kasir sederhana menyimpan data transaksi

const NAMA_TOKO = "Toko Maju Jaya";
const PAJAK = 0.11; // 11%

let namaKasir = "Siti";
let jumlahItem = 3;
let hargaItem1 = 15000;
let hargaItem2 = 25000;
let hargaItem3 = 10000;

let subtotal = hargaItem1 + hargaItem2 + hargaItem3;
let totalPajak = subtotal * PAJAK;
let totalBayar = subtotal + totalPajak;

console.log("============================");
console.log("Toko   :", NAMA_TOKO);
console.log("Kasir  :", namaKasir);
console.log("Item   :", jumlahItem);
console.log("Subtotal:", subtotal);
console.log("Pajak  :", totalPajak);
console.log("Total  :", totalBayar);
console.log("============================");

// Kenapa NAMA_TOKO dan PAJAK pakai const?
// Karena nama toko dan persentase pajak tidak berubah saat program berjalan.
//
// Kenapa jumlahItem dan totalBayar pakai let?
// Karena nilainya bisa berubah jika ada item baru atau diskon.

// ============================================================
// ✅ BEST PRACTICE
// ============================================================

// 1. UTAMAKAN const
//    Pakai const dulu. Ganti ke let hanya jika nilai memang perlu berubah.

// 2. NAMA YANG JELAS DAN BERMAKNA
//    ❌ let x = 20;
//    ❌ let n = "Budi";
//    ✅ let umur = 20;
//    ✅ let namaPelanggan = "Budi";

// 3. GUNAKAN camelCase
//    ❌ let nama_lengkap = "Budi";
//    ❌ let NamaLengkap = "Budi";  (PascalCase biasanya untuk class)
//    ✅ let namaLengkap = "Budi";

// 4. KONSTANTA TETAP PAKAI HURUF BESAR
//    ✅ const MAX_USERS = 100;
//    ✅ const API_URL = "https://api.contoh.com";

// 5. JANGAN PAKAI var DI KODE BARU
//    var punya perilaku scope yang membingungkan (function scope + hoisting).
//    Di JavaScript modern, cukup let dan const.

// 6. SATU VARIABEL UNTUK SATU MAKSUD
//    Jangan memakai ulang satu variabel untuk menyimpan data
//    yang artinya berbeda (misalnya: dulu menyimpan nama, lalu diisi angka).

// ============================================================
// ⚠️ KESALAHAN YANG SERING DILAKUKAN PEMULA
// ============================================================

// KESALAHAN 1: Lupa mendeklarasikan variabel
// ❌ nama = "Budi"; // di mode ketat (strict mode) ini error
// ✅ let nama = "Budi";

// KESALAHAN 2: Mendeklarasikan ulang dengan let/const
// ❌ let umur = 20;
//    let umur = 21; // Error: Identifier 'umur' has already been declared
// ✅ let umur = 20;
//    umur = 21; // cukup assignment, tanpa let lagi

// KESALAHAN 3: Mengubah nilai const
// ❌ const harga = 10000;
//    harga = 12000; // Error
// ✅ const hargaAwal = 10000;
//    let hargaAkhir = 12000;

// KESALAHAN 4: Nama variabel tidak valid
// ❌ let 1nama = "Budi";     // tidak boleh diawali angka
// ❌ let nama lengkap = "Budi"; // tidak boleh ada spasi
// ❌ let let = "salah";      // tidak boleh pakai keyword
// ✅ let nama1 = "Budi";
// ✅ let namaLengkap = "Budi";

// KESALAHAN 5: Bingung let vs const
//    Banyak pemula selalu pakai let "biar aman".
//    Lebih baik: default const, lalu let hanya jika perlu berubah.
//    Ini membuat kode lebih mudah dipahami dan lebih aman dari perubahan tak sengaja.

// KESALAHAN 6: Memakai var tanpa paham akibatnya
// ❌ var total = 100;
// ✅ let total = 100;
//    atau
// ✅ const total = 100;

// ============================================================
// 📝 RINGKASAN MATERI
// ============================================================

// ✔ Variabel = wadah untuk menyimpan data agar bisa dipakai ulang
// ✔ let → nilai boleh diubah
// ✔ const → nilai tidak boleh diubah (harus langsung diberi nilai)
// ✔ var → cara lama, hindari di kode modern
// ✔ Nama variabel: camelCase, jelas, tidak diawali angka, tanpa spasi
// ✔ Konstanta tetap biasanya ditulis UPPER_SNAKE_CASE
// ✔ Aturan praktis: utamakan const, pakai let hanya jika perlu berubah

// ============================================================
// 🏋️ LATIHAN
// ============================================================
// Kerjakan latihan berikut di file terpisah atau di bawah ini.
// Jangan lihat jawaban dulu sebelum mencoba sendiri!

// --- MUDAH ---

// Latihan 1
// Buat variabel namaLengkap menggunakan let, isi dengan namamu,
// lalu tampilkan dengan console.log().
let namaSaya = "Rifki ardhika putra";
console.log(namaSaya);

// Latihan 2
// Buat konstanta TAHUN_LAHIR menggunakan const, isi dengan tahun lahirmu,
// lalu tampilkan.
const tahunLahir = 2005;
console.log(tahunLahir);

// Latihan 3
// Buat tiga variabel: kota, hobi, dan makananFavorit.
// Tampilkan ketiganya dalam satu console.log().
let kotaSaya = "Padang";
let hobiSaya = "Olahraga";
let makananFavorit = "Nasi goreng";
console.log(kotaSaya, hobiSaya, makananFavorit);


// Latihan 4
// Buat variabel skor = 0 menggunakan let.
// Ubah nilainya menjadi 100, lalu tampilkan sebelum dan sesudah diubah.
let skor = 0;
skor = 100;
console.log(skor);


// Latihan 5
// Buat const APP_VERSION = "1.0.0".
// Coba ubah nilainya (sengaja). Baca pesan error-nya, lalu tulis
// komentar: kenapa error tersebut muncul?
// const APP_VERSION = "1.0.0";
// APP_VERSION = "1.1.0";
// console.log(APP_VERSION);

// Latihan 6
// Buat variabel let status tanpa nilai awal.
// Tampilkan isinya, lalu isi dengan "aktif", lalu tampilkan lagi.
let nilaiAwal;
nilaiAwal = "aktif";

// --- SEDANG ---

// Latihan 7
// Buat variabel hargaBarang = 50000 dan jumlahBeli = 2.
// Hitung totalBayar = hargaBarang * jumlahBeli, lalu tampilkan
// dengan format: "Total bayar: 100000"
let hargaBarang = 50000;
let jumlahBeli = 2;
let totalBayar2 = hargaBarang * jumlahBeli;
console.log(totalBayar2);

// Latihan 8
// Buat dua variabel: firstName dan lastName.
// Gabungkan menjadi fullName, lalu tampilkan.
// (Petunjuk sementara: bisa pakai + dulu. Template literal akan dipelajari nanti.)
const firstName = "Rifki";
const lastName = "Putra";
let fullName = firstName + lastName;
console.log("nama kamu" + fullName);
// Latihan 9
// Buat variabel saldo = 100000.
// Kurangi saldo sebanyak 25000 (seolah-olah ada pembelian),
// lalu tampilkan sisa saldo.
let saldo = 100000;
let sisaSaldo = saldo - 25000;
console.log(sisaSaldo)
// Latihan 10
// Tukar nilai dua variabel tanpa menghitung ulang manual:
// let x = "apel";
// let y = "jeruk";
// Setelah ditukar, x harus "jeruk" dan y harus "apel".
let x = "apel";
let y = "jeruk";
console.log("Sebelum tukar:", x, y);
let tukarBuah = x;
x = y;
y = tukarBuah;
console.log("Sesudah tukar:", x, y);

// Latihan 11
// Perbaiki kode berikut (ada beberapa kesalahan):
// let 2nama = "Andi";
// const kota;
// kota = "Bandung";
// let umur = 17;
// let umur = 18;
// Tulis versi yang benar dan jelaskan setiap perbaikan lewat komentar.
let nama2 = "Andi";
const kota2 = "Bandung";
let umur2 = 17;
umur2 = 18;
console.log(`nama saya adalah ${nama2}, saya tinggal di kota ${kota2}, dan umur saya adalah ${umur2} tahun`);
// --- SULIT ---

// Latihan 12
// Buat simulasi data pengguna aplikasi:
// - const USER_ID (tidak berubah)
// - let username (boleh berubah)
// - let isOnline (boolean, boleh berubah)
// Tampilkan data awal, lalu ubah username dan isOnline,
// lalu tampilkan data setelah diubah.
const USER_ID = 987654;
let username = "ThisisKay";
let isOnline = true;
console.log(USER_ID, username, isOnline);
username = "thisisdrizzy";
isOnline = false;
console.log(USER_ID, username, isOnline);

// Latihan 13
// Buat kalkulasi gaji sederhana:
// const GAJI_POKOK = 5000000
// let tunjangan = 500000
// let potongan = 250000
// Hitung gajiBersih, lalu tampilkan rincian:
// Gaji Pokok, Tunjangan, Potongan, dan Gaji Bersih.
const gajiPokok = 5000000;
let tunjangan = 500000;
let potongan = 250000;
let gajiBersih = gajiPokok - tunjangan - potongan;
console.log(`gaji pokok anda adalah Rp${gajiPokok}, setelah dikurangi tunjangan Rp${tunjangan}, dan potongan Rp${potongan}, gaji bersih anda Rp${gajiBersih}`);
// Latihan 14
// Buat variabel let stok = 10.
// Simulasikan 3 transaksi penjualan (masing-masing mengurangi stok).
// Setiap transaksi, tampilkan sisa stok.
// Di akhir, tampilkan berapa total barang yang terjual.
const qtyTransaksi1 = 2;
const qtyTransaksi2 = 3;
const qtyTransaksi3 = 1;
let stok = 10;
stok -= qtyTransaksi1;
console.log(`Sisa stok setelah transaksi 1: ${stok}`);
stok -= qtyTransaksi2;
console.log(`Sisa stok setelah transaksi 2: ${stok}`);
stok -= qtyTransaksi3;
console.log(`Sisa stok setelah transaksi 3: ${stok}`);
const totalTerjual = qtyTransaksi1 + qtyTransaksi2 + qtyTransaksi3;
console.log(`Total barang yang terjual: ${totalTerjual}`);

// Latihan 15 (TANTANGAN)
// Buat "profil siswa" menggunakan variabel dan konstanta:
// - const NIS
// - let nama
// - let kelas
// - let nilaiMatematika
// - let nilaiBahasa
// - let nilaiIPA
// Hitung rata-rata dari ketiga nilai.
// Tampilkan laporan rapi seperti:
// ==============================
//        PROFIL SISWA
// ==============================
// NIS    : ...
// Nama   : ...
// Kelas  : ...
// Matematika : ...
// Bahasa     : ...
// IPA        : ...
// Rata-rata  : ...
// ==============================
// Lalu ubah nilaiMatematika, hitung ulang rata-rata, dan tampilkan
// laporan kedua setelah nilai di-update.
const NIS = 1234567;
let namaSiswa = "Iky";
let kelas = "IPS1";
let nilaiMatematika = 85;
let nilaiBahasa = 90;
let nilaiIPA = 85;
let totalMapel = 3;
let nilaiRata = nilaiMatematika + nilaiBahasa + nilaiIPA / totalMapel;
console.log("==========================");
console.log("PROFIL SISWA");
console.log("==========================");
console.log("NIS : " + NIS);
console.log("Nama Siswa : " + namaSiswa);
console.log("Kelas : " + kelas);
console.log("Matematika : " + nilaiMatematika);
console.log("Bahasa : " + nilaiBahasa);
console.log("IPA : " + nilaiIPA);
console.log("Rata - rata : " + nilaiRata);
console.log("==========================");

nilaiMatematika = 90;
nilaiRata = nilaiMatematika + nilaiBahasa + nilaiIPA / totalMapel;
console.log("==========================");
console.log("PROFIL SISWA");
console.log("==========================");
console.log("NIS : " + NIS);
console.log("Nama Siswa : " + namaSiswa);
console.log("Kelas : " + kelas);
console.log("Matematika : " + nilaiMatematika);
console.log("Bahasa : " + nilaiBahasa);
console.log("IPA : " + nilaiIPA);
console.log("Rata - rata : " + nilaiRata);
console.log("==========================");
