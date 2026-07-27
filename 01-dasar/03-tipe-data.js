// ============================================================
// 📘 MATERI 03 - TIPE DATA
// ============================================================

// ============================================================
// 🎯 TUJUAN PEMBELAJARAN
// ============================================================
// Setelah mempelajari materi ini, kamu akan mampu:
// 1. Memahami apa itu tipe data dan kenapa penting
// 2. Menggunakan tipe data primitif: string, number, boolean
// 3. Memahami perbedaan null dan undefined
// 4. Mengecek tipe data dengan operator typeof
// 5. Mengenali kapan memakai tipe data yang tepat
// 6. Menghindari kesalahan umum terkait tipe data

// ============================================================
// 📖 PENJELASAN KONSEP
// ============================================================

// APA ITU TIPE DATA?
// ------------------
// Tipe data = jenis nilai yang disimpan di dalam variabel.
// Sama seperti di dunia nyata: ada teks, angka, dan status benar/salah.
//
// Variabel adalah "kotak"-nya.
// Tipe data adalah "isi" di dalam kotak itu.
//
// Contoh:
// let nama = "Budi";   → isinya teks (string)
// let umur = 20;       → isinya angka (number)
// let aktif = true;    → isinya benar/salah (boolean)

// MENGAPA TIPE DATA PENTING?
// --------------------------
// Karena operasi yang bisa dilakukan bergantung pada tipenya.
// - String bisa digabung: "Halo" + " Dunia"
// - Number bisa dihitung: 10 + 5
// - Boolean dipakai untuk keputusan: true / false
//
// Kalau tipenya salah, hasilnya bisa aneh atau error.
// Contoh: "10" + 5 → "105" (bukan 15!), karena "10" adalah string.

// TIPE DATA PRIMITIF YANG DIPELAJARI DI MATERI INI
// ------------------------------------------------
// 1. string    → teks
// 2. number    → angka (bulat maupun desimal)
// 3. boolean   → true atau false
// 4. null      → sengaja kosong / tidak ada nilai
// 5. undefined → belum diberi nilai
//
// Catatan: Ada tipe lain (object, array, symbol, bigint),
// tapi itu akan dipelajari di materi berikutnya.

// ============================================================
// 🔤 SINTAKS DAN ATURAN PENTING
// ============================================================

// 1. STRING → teks, selalu diapit tanda kutip
//    "teks"  atau  'teks'  atau  `teks`
//    Tanpa kutip → JavaScript menganggap itu nama variabel, bukan teks.

// 2. NUMBER → angka, tanpa tanda kutip
//    10, 3.14, -5, 0
//    Kalau pakai kutip ("10") → itu string, bukan number.

// 3. BOOLEAN → hanya dua kemungkinan
//    true  → benar
//    false → salah
//    Ditulis tanpa kutip. "true" (dengan kutip) adalah string!

// 4. null → nilai kosong yang DISENGAJA
//    Dipakai saat kamu ingin bilang: "saat ini tidak ada data".

// 5. undefined → nilai yang BELUM ADA
//    Muncul otomatis jika variabel dideklarasikan tapi belum diisi.
//    Juga muncul jika sesuatu "tidak ditemukan".

// 6. typeof → mengecek tipe data sebuah nilai
//    typeof nilai
//    typeof(nilai)

// ============================================================
// 💡 CONTOH KODE SEDERHANA
// ============================================================

// --- STRING ---
let nama = "Budi Santoso";
let kota = "Jakarta";
let sapaan = "Halo!";

console.log(nama);   // Budi Santoso
console.log(kota);   // Jakarta
console.log(sapaan); // Halo!

// String bisa digabung dengan operator +
let kalimat = "Nama saya " + nama + ", dari " + kota;
console.log(kalimat);

// String kosong juga valid
let kosong = "";
console.log(kosong); // (tidak menampilkan apa-apa, tapi tipenya tetap string)

// --- NUMBER ---
let umur = 20;
let tinggi = 170.5;
let suhu = -3;
let nol = 0;

console.log(umur);   // 20
console.log(tinggi); // 170.5
console.log(suhu);   // -3
console.log(nol);    // 0

// Number bisa dipakai untuk perhitungan
let harga = 15000;
let jumlah = 3;
let total = harga * jumlah;
console.log(total); // 45000

// --- BOOLEAN ---
let sudahLogin = true;
let isAdmin = false;
let lulus = true;

console.log(sudahLogin); // true
console.log(isAdmin);    // false
console.log(lulus);      // true

// Boolean sering dipakai untuk status / kondisi
let stokTersedia = true;
let pembayaranLunas = false;

// --- NULL ---
// null = "sengaja dikosongkan"
let dataPengguna = null;
console.log(dataPengguna); // null

// Contoh: belum ada alamat yang dipilih
let alamatTerpilih = null;

// --- UNDEFINED ---
// undefined = "belum diisi / belum ada"
let statusPesanan;
console.log(statusPesanan); // undefined

let skor;
console.log(skor); // undefined

skor = 100;
console.log(skor); // 100

// --- TYPEOF: MENGECEK TIPE DATA ---
console.log(typeof "Halo");     // string
console.log(typeof 42);         // number
console.log(typeof 3.14);       // number
console.log(typeof true);       // boolean
console.log(typeof false);      // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object  ← quirk JavaScript (lihat bagian kesalahan)

console.log(typeof nama);          // string
console.log(typeof umur);          // number
console.log(typeof sudahLogin);    // boolean
console.log(typeof dataPengguna);  // object (karena null)
console.log(typeof statusPesanan); // undefined

// ============================================================
// 🌍 CONTOH KASUS NYATA
// ============================================================

// Kasus: Form pendaftaran akun menyimpan data pengguna

const APP_NAME = "BelajarJS";

let username = "thisisdrizzy";     // string
let email = "drizzy@email.com";   // string
let umurPengguna = 21;            // number
let isEmailVerified = false;      // boolean
let bio = null;                   // null (belum diisi bio)
let lastLogin;                    // undefined (belum pernah login)

console.log("============================");
console.log("Aplikasi :", APP_NAME);
console.log("Username :", username);
console.log("Email    :", email);
console.log("Umur     :", umurPengguna);
console.log("Verified :", isEmailVerified);
console.log("Bio      :", bio);
console.log("Last Login:", lastLogin);
console.log("============================");

// Cek tipe tiap data
console.log("Tipe username :", typeof username);
console.log("Tipe umur     :", typeof umurPengguna);
console.log("Tipe verified :", typeof isEmailVerified);
console.log("Tipe bio      :", typeof bio);
console.log("Tipe lastLogin:", typeof lastLogin);

// Simulasi update setelah pengguna mengisi bio & login
bio = "Suka belajar JavaScript";
isEmailVerified = true;
lastLogin = "2026-07-20";

console.log("--- Setelah update ---");
console.log("Bio      :", bio);
console.log("Verified :", isEmailVerified);
console.log("Last Login:", lastLogin);

// Kenapa bio awalnya null, bukan undefined?
// Karena kita SENGAJA menyimpan "belum ada bio".
// undefined lebih cocok untuk "belum pernah diisi sama sekali".

// ============================================================
// ✅ BEST PRACTICE
// ============================================================

// 1. PILIH TIPE YANG SESUAI MAKSUDNYA
//    ❌ let umur = "20";     // string — susah dihitung
//    ✅ let umur = 20;       // number — siap dihitung
//
//    ❌ let aktif = "true";  // string — bukan boolean sungguhan
//    ✅ let aktif = true;    // boolean

// 2. STRING → SELALU PAKAI TANDA KUTIP
//    ✅ let nama = "Budi";
//    ✅ let nama = 'Budi';
//    ❌ let nama = Budi;     // dianggap variabel bernama Budi

// 3. NUMBER → JANGAN PAKAI TANDA KUTIP
//    ✅ let harga = 10000;
//    ❌ let harga = "10000"; // ini string

// 4. BOOLEAN → HANYA true / false (tanpa kutip)
//    ✅ let siap = true;
//    ❌ let siap = "true";
//    ❌ let siap = 1;        // 1 bukan boolean (meski "truthy")

// 5. null vs undefined — PAKAI DENGAN SADAR
//    - undefined → belum diisi / belum ada
//    - null      → sengaja dikosongkan
//    Di kode sendiri, kalau mau "kosongkan", biasanya pakai null.

// 6. NAMA VARIABEL BOOLEAN YANG JELAS
//    ✅ let isOnline = true;
//    ✅ let sudahBayar = false;
//    ✅ let punyaKTP = true;
//    ❌ let flag = true;     // kurang jelas artinya

// 7. JANGAN CAMPUR TIPE TANPA ALASAN
//    Satu variabel sebaiknya konsisten tipenya.
//    ❌ let data = "Budi";
//       data = 20; // dari string jadi number — membingungkan

// ============================================================
// ⚠️ KESALAHAN YANG SERING DILAKUKAN PEMULA
// ============================================================

// KESALAHAN 1: Angka ditulis sebagai string
// ❌ let harga = "10000";
//    let total = harga + 5000; // "100005000" ← salah!
// ✅ let harga = 10000;
//    let total = harga + 5000; // 15000

// KESALAHAN 2: Boolean ditulis sebagai string
// ❌ let aktif = "true";
//    // "true" adalah string, bukan boolean
// ✅ let aktif = true;

// KESALAHAN 3: Lupa tanda kutip pada string
// ❌ let kota = Jakarta; // Error: Jakarta is not defined
// ✅ let kota = "Jakarta";

// KESALAHAN 4: Bingung null vs undefined
//    undefined = belum diberi nilai
//    null      = sengaja kosong
//
//    let a;
//    console.log(a); // undefined
//
//    let b = null;
//    console.log(b); // null

// KESALAHAN 5: typeof null menghasilkan "object"
//    Ini adalah quirk / bug lama di JavaScript yang tetap dipertahankan.
//    console.log(typeof null); // "object" ← bukan "null"
//    Jadi untuk cek null, bandingkan langsung:
//    ✅ if (nilai === null) { ... }

// KESALAHAN 6: Mengira true/false sama dengan 1/0
//    Secara teknis ada konsep truthy/falsy (dipelajari nanti),
//    tapi tipenya tetap berbeda:
//    typeof true → "boolean"
//    typeof 1    → "number"

// KESALAHAN 7: Menggabungkan number dengan string tanpa sadar
//    console.log(10 + 5);     // 15  (number)
//    console.log("10" + 5);   // "105" (string)
//    console.log(10 + "5");   // "105" (string)
//    Ingat: + dengan string akan "menggabungkan", bukan menjumlahkan.

// ============================================================
// 📝 RINGKASAN MATERI
// ============================================================

// ✔ Tipe data = jenis nilai yang disimpan di variabel
// ✔ string  → teks, pakai tanda kutip: "Halo"
// ✔ number  → angka, tanpa kutip: 10, 3.14, -5
// ✔ boolean → true atau false (tanpa kutip)
// ✔ null    → sengaja kosong / tidak ada nilai
// ✔ undefined → belum diisi / belum ada nilai
// ✔ typeof dipakai untuk mengecek tipe data
// ✔ typeof null → "object" (quirk JavaScript)
// ✔ Pilih tipe yang sesuai: angka pakai number, status pakai boolean

// ============================================================
// 🏋️ LATIHAN
// ============================================================
// Kerjakan latihan berikut di file terpisah atau di bawah ini.
// Jangan lihat jawaban dulu sebelum mencoba sendiri!

// --- MUDAH ---

// Latihan 1
// Buat variabel namaLengkap bertipe string, isi dengan namamu,
// lalu tampilkan dengan console.log() dan typeof-nya.
let namaLengkap = "Rifki Ardhika Putra";
console.log(namaLengkap, typeof namaLengkap);

// Latihan 2
// Buat variabel umur bertipe number, isi dengan umurmu,
// lalu tampilkan nilainya dan hasil typeof umur.
let umurRifki = 21;
console.log(umurRifki, typeof umurRifki);
// Latihan 3
// Buat variabel isPelajar bertipe boolean (true atau false),
// lalu tampilkan nilainya dan typeof-nya.
// Pastikan TIDAK memakai tanda kutip.
let isPelajar = true;
console.log(isPelajar, typeof isPelajar);
// Latihan 4
// Buat lima variabel dengan tipe berbeda:
// - string, number, boolean, null, dan undefined
// Tampilkan semua nilainya dengan console.log().
let benda = "Buku";
let panjangBuku = 10;
let isAvailable = false;
let penulis = null;
let halaman;
console.log(benda, panjangBuku, isAvailable, penulis, halaman);
// Latihan 5
// Tanpa menjalankan dulu, tebak hasil typeof berikut.
// Lalu cek dengan console.log() apakah tebakanmu benar:
// typeof "JavaScript" = string
// typeof 100 = number
// typeof true = boolean
// typeof null = null
// typeof undefined = undefined
// typeof "100" = string
// typeof "true" = string

// Latihan 6
// Buat variabel let nilaiUjian tanpa memberi nilai awal.
// Tampilkan isinya (harusnya undefined), lalu isi dengan 85,
// lalu tampilkan lagi.
let nilaiUjian;
console.log(nilaiUjian);
nilaiUjian = 85
console.log(nilaiUjian)
// --- SEDANG ---

// Latihan 7
// Buat "kartu profil" dengan tipe data yang tepat:
// - nama (string)
// - umur (number)
// - kota (string)
// - isOnline (boolean)
// Tampilkan seperti:
// Nama    : ...
// Umur    : ...
// Kota    : ...
// Online  : ...
let namaSaya = "Drake";
let umurSaya = 37;
let kotaSaya = "Toronto";
let isOnline = true;
console.log("Nama : ", namaSaya);
console.log("Umur : ", umurSaya);
console.log("Kota : ", kotaSaya);
console.log("Online : ", isOnline);
// Latihan 8
// Perbaiki tipe data yang salah pada kode berikut,
// lalu jelaskan perbaikannya lewat komentar:
// let harga = "25000"; = ini salah harusnya tidak pake kutip karena number
// let jumlah = "2"; ini juga sama seperti diatas harusnya ga pake kutip
// let total = harga * jumlah;
// let lunas = "true"; boolean ga pake kutip
// Tampilkan total dan lunas setelah diperbaiki.
let harga2 = 25000;
let jumlah2 = 2;
let total2 = harga2 * jumlah2;
let lunas = true;
console.log("total harga : ", total2);
console.log("apakah lunas? ", lunas);

// Latihan 9
// Buat dua variabel:
// let dataA;          // biarkan undefined
// let dataB = null;   // sengaja null
// Tampilkan keduanya, lalu tampilkan typeof masing-masing.
// Tulis komentar: apa perbedaan keduanya?
let dataA;
let dataB = null;
console.log(typeof dataA, typeof dataB);
// dataA menghasilkan type data undefined = bisa diisi
// dataB menghasilkan type data object = bisa disi
// Perbedaan utama antara undefined dan object terletak pada arti, struktur, dan sifat mutabilitasnya.

// Latihan 10
// Bandingkan hasil ini dan jelaskan kenapa berbeda:
// console.log(10 + 5); hasil 15 karena number + number
// console.log("10" + 5); hasil 105 karena 10 string dan 5 number
// console.log(10 + "5"); hasil 105 karena 10 number dan 5 string
// console.log("10" + "5"); hasil 105 karena 10 string dan 5 string

// Latihan 11
// Buat variabel bio = null (belum diisi).
// Tampilkan bio.
// Lalu isi bio dengan string singkat tentang dirimu,
// lalu tampilkan lagi.
// Tulis komentar: kenapa awalnya pakai null, bukan undefined?
let bio1 = null;
console.log(bio);
bio1 = "Suka ngegym";
console.log(bio1);
// undefined adalah bawaan sistem JavaScript untuk variabel yang belum diinisialisasi sama sekali. Dengan memakai null, kita membuat kode lebih bersih dan terstruktur karena kita secara sadar memberikan status "kosong"
// --- SULIT ---

// Latihan 12
// Buat simulasi data produk toko online:
// - const PRODUCT_ID (number)
// - let namaProduk (string)
// - let harga (number)
// - let stok (number)
// - let isAvailable (boolean)
// - let deskripsi (null dulu, nanti diisi string)
// Tampilkan data awal + typeof tiap field.
// Lalu update: isi deskripsi, kurangi stok 1, sesuaikan isAvailable.
// Tampilkan data setelah update.
const PRODUCT_ID = 12;
let namaProduk = "helm";
let hargaProduk = 150000;
let stokProduk = 2;
let isAvailable1 = true;
let deskripsi = null;
console.log(PRODUCT_ID, typeof PRODUCT_ID);
console.log(namaProduk, typeof namaProduk);
console.log(hargaProduk, typeof hargaProduk);
console.log(stokProduk, typeof stokProduk);
console.log(isAvailable1, typeof isAvailable1);
console.log(deskripsi, typeof deskripsi);
deskripsi = "helm bagus cocok untuk semua motor dengan design yang sporty dan harga yang terjangkau"
stokProduk -= 1;
isAvailable1 = stokProduk > 0;
console.log(PRODUCT_ID, typeof PRODUCT_ID);
console.log(namaProduk, typeof namaProduk);
console.log(hargaProduk, typeof hargaProduk);
console.log(stokProduk, typeof stokProduk);
console.log(isAvailable1, typeof isAvailable1);
console.log(deskripsi, typeof deskripsi);
// Latihan 13
// Buat "form pendaftaran" sederhana:
// - namaLengkap (string)
// - email (string)
// - umur (number)
// - sudahSetujuSyarat (boolean)
// - nomorTelepon (null — belum diisi)
// Tampilkan laporan rapi.
// Lalu isi nomorTelepon, ubah sudahSetujuSyarat jadi true,
// dan tampilkan laporan kedua.
// 1. Inisialisasi Data Pendaftaran
let namaLengkap1 = "Andi Wijaya";           // String
let email1 = "andi.wijaya@contoh.com";      // String
let umur1 = 22;                             // Number
let sudahSetujuSyarat = false;             // Boolean (awalnya belum setuju)
let nomorTelepon = null;                   // Null (sengaja dikosongkan)
console.log("=== LAPORAN PENDAFTARAN: AWAL ===");
console.log("Nama Lengkap :", namaLengkap1);
console.log("Email        :", email1);
console.log("Umur         :", umur1);
console.log("Setuju Syarat:", sudahSetujuSyarat);
console.log("No. Telepon  :", nomorTelepon);
console.log("=================================\n");

// 3. Mengupdate (mengisi/mengubah) data
nomorTelepon = "081234567890";
sudahSetujuSyarat = true;
console.log("=== LAPORAN PENDAFTARAN: UPDATE ===");
console.log("Nama Lengkap :", namaLengkap1);
console.log("Email        :", email1);
console.log("Umur         :", umur1);
console.log("Setuju Syarat:", sudahSetujuSyarat);
console.log("No. Telepon  :", nomorTelepon);
console.log("=================================");

// Latihan 14
// Tebak & verifikasi: buat variabel-variabel berikut,
// lalu tulis di komentar apa hasil typeof-nya SEBELUM menjalankan.
// Setelah itu cek dengan console.log(typeof ...):
// let a = "0";
// let b = 0;
// let c = "";
// let d = false;
// let e = "false";
// let f = null;
// let g;
// Jelaskan mana yang tipenya sama dan mana yang beda meski "kelihatannya mirip".
// 1. Tebakan sebelum dijalankan:
let a = "0";     // string (karena ada tanda kutip)
let b = 0;       // number
let c = "";      // string (string kosong)
let d = false;   // boolean
let e = "false"; // string (karena ada tanda kutip)
let f = null;    // object (quirk/bug bawaan JavaScript)
let g;           // undefined (karena belum diisi nilai)

// 2. Verifikasi dengan console.log:
console.log("a:", typeof a); // "string"
console.log("b:", typeof b); // "number"
console.log("c:", typeof c); // "string"
console.log("d:", typeof d); // "boolean"
console.log("e:", typeof e); // "string"
console.log("f:", typeof f); // "object"
console.log("g:", typeof g); // "undefined"

// Latihan 15 (TANTANGAN)
// Buat "laporan tipe data akun pengguna" yang rapi:
//
// ========================================
//        DATA AKUN PENGGUNA
// ========================================
// Field          Nilai              Tipe
// ----------------------------------------
// userId         1001               number
// username       thisisdrizzy       string
// email          ...@email.com      string
// age            21                 number
// isVerified     false              boolean
// bio            null               object   ← typeof null
// lastLogin      undefined          undefined
// ========================================
//
// Aturan:
// 1. Semua nilai harus disimpan di variabel dulu (jangan hardcode di console.log saja).
// 2. Gunakan typeof untuk menampilkan kolom "Tipe" (kecuali kamu sengaja tulis manual untuk null).
// 3. Setelah laporan pertama, update:
//    - isVerified = true
//    - bio = string singkat
//    - lastLogin = string tanggal hari ini
// 4. Tampilkan laporan kedua setelah update.
// 5. Pastikan format kolom terbaca rapi dan konsisten.
// 1. Deklarasi Data Awal (Disimpan di variabel)
let userId = 1001;
let username1 = "thisisdrizzy";
let email2 = "drizzy@email.com";
let age = 21;
let isVerified = false;
let bio2 = null;
let lastLogin1; // Otomatis undefined

// Fungsi bantuan agar kita tidak menulis ulang layout tabel 2 kali
function tampilkanLaporan(judul) {
  console.log("========================================");
  console.log(`           ${judul}`);
  console.log("========================================");
  console.log("Field          Nilai              Tipe");
  console.log("----------------------------------------");

  // .padEnd(15) memastikan teks mengambil ruang 15 karakter
  // String() digunakan agar null/undefined bisa di-padEnd tanpa error
  console.log("userId".padEnd(15) + String(userId).padEnd(19) + typeof userId);
  console.log("username".padEnd(15) + String(username1).padEnd(19) + typeof username1);
  console.log("email".padEnd(15) + String(email2).padEnd(19) + typeof email2);
  console.log("age".padEnd(15) + String(age).padEnd(19) + typeof age);
  console.log("isVerified".padEnd(15) + String(isVerified).padEnd(19) + typeof isVerified);
  console.log("bio".padEnd(15) + String(bio2).padEnd(19) + typeof bio2);
  console.log("lastLogin".padEnd(15) + String(lastLogin).padEnd(19) + typeof lastLogin);
  console.log("========================================\n");
}

// 2. Tampilkan laporan pertama
tampilkanLaporan("DATA AKUN PENGGUNA (AWAL)");

// 3. Update nilai untuk 3 field
isVerified = true;
bio2 = "Music enthusiast from Toronto";
lastLogin = "20-07-2026"; // Diupdate menjadi string tanggal

// 4. Tampilkan laporan kedua
tampilkanLaporan("DATA AKUN PENGGUNA (UPDATE)");
