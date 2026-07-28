// ============================================================
// 📘 MATERI 10 - ARRAY METHOD (map, filter, reduce, dll)
// ============================================================
// Lanjut dari: 01-array-dasar.js
// Jalankan: node 02-array-method.js
// Folder: 02-array-object/
// ============================================================

// ============================================================
// 🎯 TUJUAN PEMBELAJARAN
// ============================================================
// Setelah mempelajari materi ini, kamu akan mampu:
// 1) Menggunakan map untuk transform array
// 2) Menggunakan filter untuk menyaring data
// 3) Menggunakan find untuk cari 1 item
// 4) Menggunakan some/every untuk cek kondisi
// 5) Menggunakan reduce untuk akumulasi (total, rekap)
// 6) Menggunakan sort dengan comparator (penting!)

// ============================================================
// 📖 KONSEP INTI + CONTOH
// ============================================================

const angka = [1, 2, 3, 4, 5];

// map: mengubah setiap elemen -> array baru
const duaKali = angka.map((n) => n * 2);
console.log("map:", duaKali); // [2,4,6,8,10]

// filter: menyaring elemen -> array baru
const yangGenap = angka.filter((n) => n % 2 === 0);
console.log("filter:", yangGenap); // [2,4]

// find: cari elemen pertama yang cocok -> value atau undefined
const cariTiga = angka.find((n) => n === 3);
console.log("find:", cariTiga); // 3

// some: true jika minimal 1 elemen memenuhi
const adaNegatif = angka.some((n) => n < 0);
console.log("some:", adaNegatif); // false

// every: true jika semua elemen memenuhi
const semuaBesarDari0 = angka.every((n) => n > 0);
console.log("every:", semuaBesarDari0); // true

// reduce: akumulasi jadi 1 nilai
// contoh: jumlah
const total = angka.reduce((acc, n) => acc + n, 0);
console.log("reduce total:", total); // 15

// sort: mengurutkan array (catatan: sort default lexicographic)
const harga = [1200, 50, 300];
const hargaUrutNaik = [...harga].sort((a, b) => a - b);
console.log("sort:", hargaUrutNaik); // [50,300,1200]

// ============================================================
// ✅ LATIHAN
// ============================================================
// Kerjakan dengan metode array, bukan loop manual panjang.

// --- MUDAH ---

// Latihan 1
// Buat array angkaLatihan = [3, 7, 1, 9, 4].
// Pakai map untuk hasilkan array duaKaliLat = angkaLatihan.map(...).
// Tampilkan hasilnya.
const angkaLatihan = [3, 7, 1, 9, 4];
const duaKaliLat = angkaLatihan.map((n) => n * 2);
console.log("\n--- Latihan 1 ---");
console.log(duaKaliLat);

// Latihan 2
// Pakai filter untuk ambil hanya angka >= 5.
const yangLimaPlus = angkaLatihan.filter((n) => n >= 5);
console.log("\n--- Latihan 2 ---");
console.log(yangLimaPlus);

// --- SEDANG ---

// Latihan 3
// Buat array scores = [60, 75, 90, 55, 80, 100].
// Pakai find untuk cari skor pertama yang >= 90.
const scores = [60, 75, 90, 55, 80, 100];
console.log("\n--- Latihan 3 ---");
const skorPertama90 = scores.find((n) => n >= 90);
console.log(skorPertama90); // 90

// Latihan 4
// Pakai some untuk cek apakah ada skor < 60.
// Pakai every untuk cek apakah semua skor >= 50.
console.log("\n--- Latihan 4 ---");
console.log("Ada < 60:", scores.some((n) => n < 60));
console.log("Semua >= 50:", scores.every((n) => n >= 50));

// --- SULIT ---

// Latihan 5
// daftarBelanja = [{ nama, harga, qty }, ...]
// Return totalBelanja pakai reduce tanpa hardcode.
const daftarBelanja = [
  { nama: "buku", harga: 20000, qty: 3 },
  { nama: "pulpen", harga: 5000, qty: 10 },
  { nama: "penghapus", harga: 3000, qty: 2 },
];

console.log("\n--- Latihan 5 ---");
function hitungTotalBelanja(items) {
  return items.reduce((acc, item) => acc + item.harga * item.qty, 0);
}
console.log("Total belanja:", hitungTotalBelanja(daftarBelanja));

// Latihan 6 (TANTANGAN)
// Dengan array of objects produk:
// - urutkan berdasarkan harga (naik)
// - lalu ambil nama dari produk yang harganya <= 10000
const produkToko = [
  { nama: "Kabel", harga: 8000 },
  { nama: "Mouse", harga: 150000 },
  { nama: "Obeng", harga: 12000 },
  { nama: "Pulpen", harga: 7000 },
];

console.log("\n--- Latihan 6 ---");
const namaMurah = produkToko
  .slice()
  .sort((a, b) => a.harga - b.harga)
  .filter((p) => p.harga <= 10000)
  .map((p) => p.nama);

console.log(namaMurah);

// ============================================================
// 📝 RINGKASAN
// ============================================================
// map    -> transform (bentuk berubah)
// filter -> seleksi (jumlah bisa berubah)
// find   -> cari 1 item (value / undefined)
// some   -> minimal 1 cocok
// every  -> semua cocok
// reduce -> rekap jadi 1 nilai
// sort   -> butuh comparator untuk angka
// ============================================================

