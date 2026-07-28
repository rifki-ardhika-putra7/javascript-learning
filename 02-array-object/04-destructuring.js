// ============================================================
// 📘 MATERI 12 - DESTRUCTURING (Array & Object)
// ============================================================
// Lanjut dari: 03-object-dasar.js
// Jalankan: node 04-destructuring.js
// Folder: 02-array-object/
// ============================================================

// ============================================================
// 🎯 TUJUAN PEMBELAJARAN
// ============================================================
// Setelah mempelajari ini, kamu akan mampu:
// 1) Mengambil nilai array pakai array destructuring
// 2) Mengambil nilai object pakai object destructuring
// 3) Memberi nama lain (alias) pada variabel
// 4) Default value dan rest operator

// ============================================================
// 📖 ARRAY DESTRUCTURING
// ============================================================

const angka = [10, 20, 30];

// Ambil elemen pertama dan kedua
const [a, b] = angka;
console.log("array destructuring:", a, b); // 10 20

// Skip elemen pakai koma
const [_, c] = angka; // _ untuk elemen pertama diabaikan
console.log("skip:", c); // 30

// Default value
const [d, e = 99] = [1]; // e default karena index 1 tidak ada
console.log("default:", d, e); // 1 99

// Rest operator untuk menyimpan sisa
const [f, ...sisa] = [5, 6, 7, 8];
console.log("rest:", f, sisa); // 5 [6,7,8]

// ============================================================
// 📖 OBJECT DESTRUCTURING
// ============================================================

const user = { nama: "Budi", umur: 21, kota: "Medan" };

// Ambil properti dengan key
const { nama, umur, kota } = user;
console.log("object destructuring:", nama, umur, kota);

// Alias nama variabel
const { nama: namaBaru, umur: umurBaru } = user;
console.log("alias:", namaBaru, umurBaru);

// Default value
const { status = "aktif" } = { nama: "Ani" };
console.log("default object:", status);

// Rest operator (ambil properti lain)
const { nama: namaAlias, ...lainnya } = user;
console.log("object rest:", namaAlias, lainnya);

// ============================================================
// 💡 DESTRUCTURING PADA PARAMETER FUNGSI
// ============================================================
function tampilkanLabel({ nama, kota }) {
  console.log(`Nama: ${nama}, Kota: ${kota}`);
}
tampilkanLabel({ nama: "Kay", kota: "Bandung" });

// ============================================================
// ✅ LATIHAN
// ============================================================

// --- MUDAH ---

// Latihan 1
// Array: ambil nama pertama dan umur dari data berikut.
const dataOrang = ["Rina", 20, "Bandung"];
const [namaOrang, umurOrang] = dataOrang;
console.log("\n--- Latihan 1 ---");
console.log(namaOrang, umurOrang);

// --- SEDANG ---

// Latihan 2
// Object: ambil { title, author } dari object buku.
// Pakai alias: author -> penulisBuku.
const buku = { title: "Laut Bercerita", author: "Leila S. Chudori", year: 2017 };
const { title, author: penulisBuku } = buku;
console.log("\n--- Latihan 2 ---");
console.log(title);
console.log(penulisBuku);

// Latihan 3
// Default value: jika properti "level" tidak ada, isi dengan 1.
const gamer = { username: "Kay" };
const { level = 1 } = gamer;
console.log("\n--- Latihan 3 ---");
console.log(level);

// --- SULIT ---

// Latihan 4 (TANTANGAN)
// Buat fungsi ambilInfoUser(userObj) yang return string:
// "[nama] - [umur] tahun (status: [status])"
// status jika tidak ada default "nonaktif"
function ambilInfoUser(userObj) {
  const { nama, umur, status = "nonaktif" } = userObj;
  return `${nama} - ${umur} tahun (status: ${status})`;
}

console.log("\n--- Latihan 4 ---");
console.log(
  ambilInfoUser({ nama: "Siti", umur: 18, status: "aktif" })
);
console.log(
  ambilInfoUser({ nama: "Drizzy", umur: 22 })
);
