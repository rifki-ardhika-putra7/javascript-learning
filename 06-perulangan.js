// ============================================================
// 📘 MATERI 06 - PERULANGAN (LOOP)
// ============================================================

// ============================================================
// 🎯 TUJUAN PEMBELAJARAN
// ============================================================
// Setelah mempelajari materi ini, kamu akan mampu:
// 1. Memahami apa itu perulangan dan kenapa dibutuhkan
// 2. Menggunakan for, while, dan do...while
// 3. Memahami counter, kondisi berhenti, dan increment
// 4. Menggunakan break dan continue
// 5. Melakukan perulangan pada array dengan for...of
// 6. Menghindari infinite loop dan kesalahan umum

// ============================================================
// 📖 PENJELASAN KONSEP
// ============================================================

// APA ITU PERULANGAN?
// -------------------
// Perulangan (loop) = cara menjalankan blok kode BERULANG KALI
// tanpa menulis ulang baris yang sama.
//
// Contoh di kehidupan nyata:
// - Hitung 1 sampai 10
// - Tampilkan daftar 20 produk
// - Cek setiap item di keranjang belanja
//
// Di materi 05 kamu sudah bisa membuat keputusan (if/else).
// Sekarang kode bisa diulang otomatis berdasarkan kondisi.

// MENGAPA PERULANGAN PENTING?
// ---------------------------
// Tanpa loop, kamu harus copy-paste kode berkali-kali.
// Dengan loop, program bisa:
// - menampilkan 100 data hanya dengan beberapa baris
// - menjumlahkan semua nilai di array
// - mencari item tertentu
// - memvalidasi input sampai benar

// JENIS LOOP YANG DIPELAJARI DI MATERI INI
// ----------------------------------------
// 1. for        → jumlah pengulangan sudah jelas
// 2. while      → ulang selama kondisi true
// 3. do...while → jalankan dulu minimal 1 kali, baru cek kondisi
// 4. for...of   → ulang tiap elemen array (pengenalan)
//
// Catatan: for...in dan method array (map, forEach) dipelajari nanti.

// ============================================================
// 🔤 SINTAKS DAN ATURAN PENTING
// ============================================================

// 1. FOR
//    for (inisialisasi; kondisi; increment) {
//      // kode yang diulang
//    }
//
//    Alur:
//    a) inisialisasi (misal let i = 0)
//    b) cek kondisi (misal i < 5)
//    c) jalankan blok kode
//    d) increment (misal i++)
//    e) ulang dari b

// 2. WHILE
//    while (kondisi) {
//      // kode yang diulang
//    }
//    Cek kondisi DULU, baru jalankan.

// 3. DO...WHILE
//    do {
//      // kode yang diulang
//    } while (kondisi);
//    Jalankan DULU minimal 1 kali, baru cek kondisi.

// 4. BREAK & CONTINUE
//    break    → hentikan loop sepenuhnya
//    continue → lewati iterasi saat ini, lanjut ke berikutnya

// 5. FOR...OF (ARRAY)
//    for (const item of array) {
//      // pakai item
//    }

// ============================================================
// 💡 CONTOH KODE SEDERHANA
// ============================================================

// --- FOR: HITUNG 1 SAMPAI 5 ---
for (let i = 1; i <= 5; i++) {
  console.log("Angka:", i);
}

// --- FOR: TABEL PERKALIAN 3 ---
for (let i = 1; i <= 10; i++) {
  console.log(`3 x ${i} = ${3 * i}`);
}

// --- WHILE: HITUNG MUNDUR ---
let hitungMundur = 5;
while (hitungMundur > 0) {
  console.log(hitungMundur);
  hitungMundur--;
}
console.log("Liftoff!");

// --- DO...WHILE ---
let angka = 1;
do {
  console.log("Do-while:", angka);
  angka++;
} while (angka <= 3);

// --- BREAK ---
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break; // berhenti saat i = 6
  }
  console.log("Break contoh:", i);
}

// --- CONTINUE ---
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue; // lewati angka genap
  }
  console.log("Continue contoh (ganjil):", i);
}

// --- FOR...OF PADA ARRAY ---
const buah = ["apel", "jeruk", "mangga"];
for (const item of buah) {
  console.log("Buah:", item);
}

// --- AKUMULASI (MENJUMLAHKAN) ---
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log("Total 1+2+3+4+5 =", total); // 15

// ============================================================
// 🌍 CONTOH KASUS NYATA
// ============================================================

// Kasus: Kasir menghitung total belanja dari daftar harga

const daftarHarga = [15000, 25000, 10000, 5000];
let subtotal = 0;

for (const harga of daftarHarga) {
  subtotal += harga;
}

const DISKON_MEMBER = 0.1; // 10%
const isMember = true;

let diskon = 0;
if (isMember) {
  diskon = subtotal * DISKON_MEMBER;
}

let totalBayar = subtotal - diskon;

console.log("============================");
console.log("Item       :", daftarHarga.length);
console.log("Subtotal   :", subtotal);
console.log("Diskon     :", diskon);
console.log("Total Bayar:", totalBayar);
console.log("============================");

// Cari harga termahal
let hargaTermahal = daftarHarga[0];
for (const harga of daftarHarga) {
  if (harga > hargaTermahal) {
    hargaTermahal = harga;
  }
}
console.log("Harga termahal:", hargaTermahal);

// ============================================================
// ✅ BEST PRACTICE
// ============================================================

// 1. PAKAI FOR JIKA JUMLAH PENGULANGAN JELAS
//    ✅ for (let i = 0; i < 10; i++)
//    Cocok untuk hitung, indeks, tabel.

// 2. PAKAI WHILE JIKA BELUM TAHU BERAPA KALI BERULANG
//    ✅ while (!loginBerhasil)
//    Cocok untuk validasi input, menunggu kondisi.

// 3. HATI-HATI INFINITE LOOP
//    Pastikan ada sesuatu yang mengubah kondisi agar loop berhenti.
//    ❌ let i = 0; while (i < 5) { console.log(i); } // lupa i++

// 4. NAMA VARIABEL COUNTER YANG JELAS
//    ✅ let i, let index, let nomorUrut
//    Hindari nama yang membingungkan.

// 5. FOR...OF UNTUK ARRAY (LEBIH MUDAH DIBACA)
//    ✅ for (const item of keranjang) { ... }
//    Daripada indeks manual jika tidak butuh nomor urut.

// 6. JANGAN UBAH ARRAY SAAT DI-LOOP (untuk pemula)
//    Bisa membingungkan. Lebih aman loop dengan indeks terpisah.

// ============================================================
// ⚠️ KESALAHAN YANG SERING DILAKUKAN PEMULA
// ============================================================

// KESALAHAN 1: Infinite loop (lupa increment)
// ❌ for (let i = 0; i < 5; ) { console.log(i); }
// ✅ for (let i = 0; i < 5; i++) { console.log(i); }

// KESALAHAN 2: Off-by-one (salah batas)
//    for (let i = 0; i < 5; i++) → 0,1,2,3,4 (5 kali)
//    for (let i = 1; i <= 5; i++) → 1,2,3,4,5 (5 kali)
//    Pahami apakah mulai dari 0 atau 1, dan pakai < atau <=.

// KESALAHAN 3: Variabel counter di luar scope
// ❌ for (var i = 0; i < 3; i++) { }
//    console.log(i); // 3 — var bocor ke luar!
// ✅ pakai let di dalam for

// KESALAHAN 4: Salah pakai = vs === di kondisi while
// ❌ while (counter = 5) { ... } // assignment!
// ✅ while (counter === 5) { ... }

// KESALAHAN 5: Lupa break di switch (sudah dipelajari di materi 05)
//    Sama pentingnya: break di loop untuk berhenti lebih awal.

// KESALAHAN 6: Mengubah array saat di-loop
//    Bisa skip elemen atau hasil aneh. Hindari dulu sebagai pemula.

// ============================================================
// 📝 RINGKASAN MATERI
// ============================================================

// ✔ Loop = menjalankan kode berulang tanpa copy-paste
// ✔ for → jumlah pengulangan jelas
// ✔ while → ulang selama kondisi true
// ✔ do...while → minimal jalan 1 kali
// ✔ break → stop loop, continue → skip 1 iterasi
// ✔ for...of → loop tiap elemen array
// ✔ Waspadai infinite loop dan off-by-one error

// ============================================================
// 🏋️ LATIHAN
// ============================================================
// Kerjakan latihan berikut di file terpisah atau di bawah ini.
// Jangan lihat jawaban dulu sebelum mencoba sendiri!

// --- MUDAH ---

// Latihan 1
// Tampilkan angka 1 sampai 10 memakai for.
for (let i = 1; i <= 10; i++){
  console.log(`Angka : ${i}`);
};

// Latihan 2
// Tampilkan angka genap dari 2 sampai 20 memakai for.
for (let i = 1; i <= 20; i++){
  if (i % 2 === 0) {
    console.log(`Angka Genap : ${i}`);
  };
};

// Latihan 3
// Hitung mundur dari 10 ke 1 memakai while, lalu tampilkan "Selesai!".
let hitungMundur2 = 10;
while (hitungMundur2 > 0) {
    console.log(hitungMundur2);
    hitungMundur2--;
};
console.log("Selesai!");

// Latihan 4
// Buat array warna = ["merah", "hijau", "biru"].
// Tampilkan tiap warna memakai for...of.
let warna = ["merah", "hijau", "biru"];
for (const item of warna) {
  console.log("warna:", item);
};
// Latihan 5
// Jumlahkan angka 1 sampai 10, simpan di variabel total, lalu tampilkan.
let total2 = 0;
for (let i = 1; i <= 10; i++) {
  total2 += i;
}
console.log(total2);

// Latihan 6
// Loop 1–5, tampilkan hanya angka ganjil (pakai continue).
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("Continue contoh (ganjil):", i);
}
// --- SEDANG ---

// Latihan 7
// Tampilkan tabel perkalian 7 (7 x 1 sampai 7 x 10).
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}
// Latihan 8
// Buat array nilai = [80, 90, 75, 60, 95].
// Hitung rata-rata memakai loop (jangan pakai rumus manual).
const nilai = [80, 90, 75, 60, 95];
let total1 = 0;
// Gunakan 'item' untuk mengambil angka di setiap iterasi
for (const item of nilai) {
  total1 += item;
}
// Bagi total dengan jumlah data untuk mendapat rata-rata
const rataRata = total1 / nilai.length;
console.log("Rata-rata:", rataRata);

// Latihan 9
// Dari array nilai di atas, tampilkan hanya nilai >= 75.
console.log("Nilai yang >= 75 adalah:");
for (const item of nilai) {
  // Hanya tampilkan jika item memenuhi kondisi
  if (item >= 75) {
    console.log(item);
  }
}

// Latihan 10
// Cari nilai tertinggi dari array [12, 45, 7, 89, 23] memakai loop.
const angka4 = [12, 45, 7, 89, 23];
let angkaTertinggi = angka4[0];
for (const item of angka4) {
  if (item > angkaTertinggi) {
    angkaTertinggi = item;
  }
}
console.log("angka Tertinggi:", angkaTertinggi);

// Latihan 11
// Loop 1–20, tampilkan "Fizz" jika kelipatan 3,
// "Buzz" jika kelipatan 5, "FizzBuzz" jika kelipatan 3 dan 5,
// selain itu tampilkan angkanya.
// (Petunjuk: cek kelipatan 15 dulu untuk FizzBuzz)
for (let i = 1; i <= 20; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// --- SULIT ---

// Latihan 12
// Buat simulasi stok barang:
// let stok = 10;
// Lakukan 5 transaksi penjualan (qty acak: 2, 1, 3, 4, 1).
// Setiap transaksi tampilkan sisa stok.
// Jika stok habis di tengah jalan, hentikan dengan break.
// Latihan 12
// Buat simulasi stok barang:
let stok = 10;
let penjualan = [2, 1, 3, 4, 1];
for (let i = 0; i < penjualan.length; i++) {
  let qty = penjualan[i];
  stok -= qty;
  console.log(`Transaksi ${i + 1}: Terjual ${qty}, Sisa stok: ${stok}`);
  if (stok <= 0) {
    console.log("Stok habis! Loop dihentikan.");
    break;
  }
}

// Latihan 13
// Buat "daftar belanja" dengan array item dan harga:
// items  = ["Roti", "Susu", "Telur"]
// harga  = [12000, 18000, 28000]
// Tampilkan struk:
// No | Item | Harga
// Hitung dan tampilkan total.
// Latihan 13
// Buat "daftar belanja" dengan array item dan harga:
const daftarBelanja = {
  items: ["Roti", "Susu", "Telur"],
  harga: [12000, 18000, 28000]
};
let total3 = 0;
console.log("No | Item | Harga");
console.log("---------------------");
for (let i = 0; i < daftarBelanja.items.length; i++) {
  let namaItem = daftarBelanja.items[i];
  let hargaItem = daftarBelanja.harga[i];
  console.log(`${i + 1} | ${namaItem} | Rp${hargaItem}`);
  total3 += hargaItem;
}
console.log("---------------------");
console.log(`Total Belanja: Rp${total3}`);

// Latihan 14
// Validasi PIN sederhana (simulasi, tanpa input beneran):
// const PIN_BENAR = "1234";
// const percobaan = ["0000", "1111", "1234"];
// Loop percobaan, tampilkan "PIN salah" atau "PIN benar".
// Berhenti setelah PIN benar (break).
// Latihan 14
const PIN_BENAR = "1234";
const percobaan = ["0000", "1111", "1234"];
for (let i = 0; i < percobaan.length; i++) {
  console.log(`Mencoba PIN: ${percobaan[i]}`);
  if (percobaan[i] === PIN_BENAR) {
    console.log("PIN benar! Akses diberikan.");
    break;
  } else {
    console.log("PIN salah.");
  }
}

// Latihan 15 (TANTANGAN)
// Buat "laporan penjualan harian" yang rapi:
//
// Data:
// const produk  = ["Kopi", "Teh", "Roti", "Keju"];
// const terjual = [12, 8, 15, 5];
// const harga   = [25000, 15000, 12000, 45000];
//
// Output:
// ========================================
//        LAPORAN PENJUALAN HARIAN
// ========================================
// No  Produk   Terjual   Harga    Subtotal
// ----------------------------------------
// 1   Kopi     12        25000    300000
// ...
// ----------------------------------------
// Total Item Terjual : ...
// Total Pendapatan   : ...
// Produk Terlaris    : ... (nama produk dengan terjual tertinggi)
// ========================================
//
// Aturan:
// 1. Gunakan loop (boleh for atau for...of + indeks).
// 2. Jangan hardcode subtotal/total.
// 3. Format angka cukup tampilkan biasa (belum perlu format ribuan).
// 4. Cari produk terlaris memakai loop, bukan manual.
// Latihan 13
// Buat "daftar belanja" dengan array item dan harga:
// Data awal
// Data awal
const produk  = ["Kopi", "Teh", "Roti", "Keju"];
const terjual = [12, 8, 15, 5];
const harga = [25000, 15000, 12000, 45000];

// Variabel penampung untuk kalkulasi
let totalItemTerjual = 0;
let totalPendapatan = 0;

// Variabel untuk melacak produk terlaris
let jumlahTerlaris = 0; // Memulai perbandingan dari angka terkecil
let produkTerlaris = "";

// Header Laporan
console.log("========================================");
console.log("        LAPORAN PENJUALAN HARIAN");
console.log("========================================");
console.log("No  Produk   Terjual   Harga    Subtotal");
console.log("----------------------------------------");

// Loop untuk memproses data dan mencetak baris tabel
for (let i = 0; i < produk.length; i++) {
  // Hitung subtotal tiap produk
  let subtotal = terjual[i] * harga[i];

  // Akumulasi ke total keseluruhan
  totalItemTerjual += terjual[i];
  totalPendapatan += subtotal;

  // Logika mencari produk terlaris
  if (terjual[i] > jumlahTerlaris) {
    jumlahTerlaris = terjual[i]; // Update rekor penjualan tertinggi
    produkTerlaris = produk[i];  // Simpan nama produknya
  }

  // Cetak baris data (menggunakan template literals)
  console.log(`${i + 1}   ${produk[i]}     ${terjual[i]}        ${harga[i]}    ${subtotal}`);
}

// Footer Laporan
console.log("----------------------------------------");
console.log(`Total Item Terjual : ${totalItemTerjual}`);
console.log(`Total Pendapatan   : ${totalPendapatan}`);
console.log(`Produk Terlaris    : ${produkTerlaris} (${jumlahTerlaris} item)`);
console.log("========================================");
