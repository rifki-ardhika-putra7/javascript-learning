// ============================================================
// 📘 MATERI 09 - ARRAY DASAR
// ============================================================
// Lanjut dari: 01-dasar (operator → fungsi + latihan fase 1)
// Jalankan: node 01-array-dasar.js
// Folder: 02-array-object/

// ============================================================
// 🎯 TUJUAN PEMBELAJARAN
// ============================================================
// Setelah mempelajari materi ini, kamu akan mampu:
// 1. Memahami apa itu array dan kenapa dibutuhkan
// 2. Membuat array dan mengakses elemen lewat index
// 3. Menambah & menghapus elemen (push, pop, unshift, shift)
// 4. Mengenal length dan cara akses elemen terakhir
// 5. Melakukan loop pada array (for dan for...of)
// 6. Mencari data dengan includes dan indexOf
// 7. Menghindari kesalahan umum terkait array

// ============================================================
// 📖 PENJELASAN KONSEP
// ============================================================

// APA ITU ARRAY?
// --------------
// Array = daftar berurutan yang bisa menyimpan BANYAK nilai
// dalam SATU variabel.
//
// Bayangkan array seperti rak bertingkat:
// - tiap "tingkat" punya nomor (disebut index)
// - index dimulai dari 0 (bukan 1!)
// - isi tiap tingkat bisa string, number, boolean, bahkan object
//
// Contoh di kehidupan nyata:
// - daftar belanja: ["telur", "susu", "roti"]
// - daftar nilai ujian: [80, 90, 75, 88]
// - daftar harga menu: [15000, 22000, 18000]

// MENGAPA ARRAY PENTING?
// ----------------------
// Tanpa array, kamu butuh banyak variabel:
//   let buah1 = "apel";
//   let buah2 = "mangga";
//   let buah3 = "jeruk";
//   // kalau ada 100 buah? repot!
//
// Dengan array:
//   let daftarBuah = ["apel", "mangga", "jeruk"];
//   // mudah ditambah, dihapus, di-loop, dicari

// HUBUNGAN DENGAN MATERI SEBELUMNYA
// ---------------------------------
// Di materi 06 (perulangan) kamu sudah sedikit pakai array + for...of.
// Di latihan fase 1 juga sudah pakai array untuk suhu, poin, nilai.
// Sekarang kita pelajari array secara UTUH sebagai struktur data.

// ============================================================
// 🔤 SINTAKS DAN ATURAN PENTING
// ============================================================

// 1. MEMBUAT ARRAY
//    const namaArray = [nilai1, nilai2, nilai3];
//    Pakai kurung siku [].

// 2. INDEX MULAI DARI 0
//    Array: ["a", "b", "c"]
//    Index:   0    1    2
//    Elemen pertama = index 0
//    Elemen terakhir = index (length - 1)

// 3. length → jumlah elemen
//    daftarBuah.length

// 4. METHOD DASAR
//    push(x)     → tambah di AKHIR
//    pop()       → hapus di AKHIR (return elemen yang dihapus)
//    unshift(x)  → tambah di AWAL
//    shift()     → hapus di AWAL (return elemen yang dihapus)
//    includes(x) → true/false apakah x ada di array
//    indexOf(x)  → index posisi x, atau -1 jika tidak ketemu

// 5. LOOP ARRAY
//    for (let i = 0; i < arr.length; i++) { ... }  → butuh index
//    for (const item of arr) { ... }               → cukup nilai saja

// ============================================================
// 💡 CONTOH KODE SEDERHANA
// ============================================================

// --- MEMBUAT & MENGAKSES ---
const daftarHobi = ["membaca", "coding", "olahraga"];
console.log(daftarHobi[0]);                      // membaca
console.log(daftarHobi[1]);                      // coding
console.log(daftarHobi[daftarHobi.length - 1]);  // olahraga
console.log("Jumlah hobi:", daftarHobi.length);  // 3

// --- MENAMBAH & MENGHAPUS ---
let keranjangBelanja = ["telur", "susu"];
keranjangBelanja.push("roti");      // ["telur", "susu", "roti"]
keranjangBelanja.unshift("beras");  // ["beras", "telur", "susu", "roti"]
keranjangBelanja.pop();             // hapus "roti"
console.log(keranjangBelanja);      // ["beras", "telur", "susu"]

// --- LOOP DENGAN for BIASA (punya index) ---
const daftarNilaiQuiz = [70, 85, 90, 60, 100];
for (let i = 0; i < daftarNilaiQuiz.length; i++) {
  console.log(`Index ${i}: ${daftarNilaiQuiz[i]}`);
}

// --- LOOP DENGAN for...of (langsung nilai) ---
for (const nilaiQuiz of daftarNilaiQuiz) {
  console.log("Nilai:", nilaiQuiz);
}

// --- HITUNG TOTAL DENGAN LOOP ---
let totalNilaiQuiz = 0;
for (const nilaiQuiz of daftarNilaiQuiz) {
  totalNilaiQuiz += nilaiQuiz;
}
console.log("Total nilai quiz:", totalNilaiQuiz); // 405

// --- PENCARIAN ---
const daftarBuahToko = ["apel", "mangga", "jeruk", "pisang"];
console.log(daftarBuahToko.includes("jeruk")); // true
console.log(daftarBuahToko.includes("anggur")); // false
console.log(daftarBuahToko.indexOf("pisang")); // 3
console.log(daftarBuahToko.indexOf("anggur")); // -1 (tidak ketemu)

// --- MENGUBAH ELEMEN LEWAT INDEX ---
let daftarStatusTugas = ["todo", "todo", "todo"];
daftarStatusTugas[1] = "done";
console.log(daftarStatusTugas); // ["todo", "done", "todo"]

// ============================================================
// 🌍 CONTOH KASUS NYATA
// ============================================================

// Kasus: rekap stok barang di gudang mini

const namaBarangGudang = ["Kabel USB", "Mouse", "Keyboard", "Headset"];
const stokBarangGudang = [12, 5, 8, 3];

function tampilkanLaporanStok(daftarNama, daftarStok) {
  console.log("========== LAPORAN STOK ==========");
  for (let i = 0; i < daftarNama.length; i++) {
    let statusStok = daftarStok[i] <= 5 ? "MENIPIS" : "AMAN";
    console.log(`${daftarNama[i]}: ${daftarStok[i]} pcs (${statusStok})`);
  }
  console.log("==================================");
}

function hitungTotalStok(daftarStok) {
  let akumulasiStok = 0;
  for (const jumlahStok of daftarStok) {
    akumulasiStok += jumlahStok;
  }
  return akumulasiStok;
}

function cariIndexBarang(daftarNama, namaDicari) {
  return daftarNama.indexOf(namaDicari);
}

tampilkanLaporanStok(namaBarangGudang, stokBarangGudang);
console.log("Total semua stok:", hitungTotalStok(stokBarangGudang));

let indexMouse = cariIndexBarang(namaBarangGudang, "Mouse");
if (indexMouse !== -1) {
  console.log("Stok Mouse:", stokBarangGudang[indexMouse]);
}

// ============================================================
// ✅ BEST PRACTICE
// ============================================================

// 1. PAKAI const UNTUK ARRAY JIKA REFERENSNYA TIDAK DIGANTI
//    const daftar = [1, 2, 3];
//    daftar.push(4);     // ✅ boleh — isi boleh berubah
//    daftar = [9, 9];    // ❌ error — referensi diganti

// 2. AKSES ELEMEN TERAKHIR PAKAI length - 1
//    ✅ arr[arr.length - 1]
//    ❌ arr[3]  // rawan salah kalau panjang array berubah

// 3. NAMA ARRAY JELAS DAN JAMAK
//    ✅ daftarProduk, namaSiswa, hargaMenu
//    ❌ data, arr, x

// 4. for...of UNTUK NILAI, for BIASA JIKA BUTUH INDEX
//    for...of → "tampilkan tiap item"
//    for i    → "tampilkan item ke-i" atau banding 2 array sejajar

// 5. CEK HASIL indexOf
//    Kalau -1, artinya tidak ketemu — jangan langsung pakai sebagai index.

// ============================================================
// ⚠️ KESALAHAN YANG SERING DILAKUKAN PEMULA
// ============================================================

// KESALAHAN 1: Mengira index mulai dari 1
// ❌ daftar[1] untuk elemen pertama
// ✅ daftar[0] untuk elemen pertama

// KESALAHAN 2: Akses di luar jangkauan
//    const a = [10, 20];
//    console.log(a[5]); // undefined — tidak error, tapi berbahaya

// KESALAHAN 3: Salah pakai = vs push
// ❌ daftar = "baru";     // mengganti SELURUH array jadi string
// ✅ daftar.push("baru"); // menambah elemen

// KESALAHAN 4: Lupa bahwa pop/shift MENGEMBALIKAN nilai
//    let terhapus = daftar.pop();
//    // terhapus = elemen yang dihapus, bukan sisa array

// KESALAHAN 5: Membandingkan array dengan ==
//    [1, 2] == [1, 2] → false (membandingkan referensi, bukan isi)
//    Untuk pemula: bandingkan elemen satu per satu, atau pakai method nanti.

// ============================================================
// 📝 RINGKASAN MATERI
// ============================================================

// ✔ Array = daftar berurutan, index mulai dari 0
// ✔ length = jumlah elemen; elemen terakhir = length - 1
// ✔ push/pop di akhir; unshift/shift di awal
// ✔ includes → ada/tidak; indexOf → posisi (atau -1)
// ✔ for...of untuk nilai; for biasa jika butuh index
// ✔ Array cocok untuk daftar data yang sejenis

// ============================================================
// 🏋️ LATIHAN
// ============================================================
// Kerjakan di bawah ini. Jangan hardcode hasil — hitung pakai kode.
// Jalankan: node 01-array-dasar.js
//
// ⚠️ PENTING: Gunakan nama variabel UNIK di setiap latihan.
// Hindari nama yang sudah dipakai di materi di atas.

// --- MUDAH ---

// Latihan 1
// Buat array daftarWarna berisi 4 nama warna.
// Tampilkan elemen pertama dan elemen terakhir (pakai length - 1).


// Latihan 2
// Buat array daftarAngka = [5, 10, 15, 20, 25].
// Tampilkan length dan elemen di index ke-2.


// Latihan 3
// Mulai dari let isiDompet = ["ktp", "uang"].
// - push "kartu debit"
// - unshift "kunci"
// - pop 1 kali
// Tampilkan isiDompet di akhir.


// Latihan 4
// Buat array daftarSuhuKota = [27, 31, 29, 34, 30].
// Pakai for...of untuk menampilkan tiap suhu.


// --- SEDANG ---

// Latihan 5
// Masih dari daftarSuhuKota (atau buat ulang).
// Hitung totalSuhuKota pakai loop, lalu rataRataSuhuKota.
// Tampilkan keduanya.


// Latihan 6
// Buat array daftarMenuKafe = ["kopi", "teh", "susu", "matcha"].
// Cek apakah "teh" ada (includes).
// Tampilkan index "matcha" (indexOf).


// Latihan 7
// Buat array skorLatihan = [60, 75, 90, 55, 80, 100].
// Loop semua skor:
// - tampilkan hanya skor >= 75
// - hitung berapa yang lolos
// Tampilkan jumlah lolos di akhir.


// Latihan 8
// Buat fungsi hitungJumlahElemen(daftarData) yang return daftarData.length.
// Uji dengan ["a", "b", "c", "d"].


// --- SULIT ---

// Latihan 9
// Buat fungsi cariNilaiTerbesar(daftarAngka).
// Return angka terbesar. Jangan pakai Math.max.
// Uji: [3, 9, 1, 12, 7] → 12


// Latihan 10
// Buat fungsi hitungRataTanpaNilaiNol(daftarNilai).
// - skip nilai yang === 0
// - hitung rata-rata dari nilai yang tersisa
// - jika semua 0 / array kosong → return 0
// Uji: [80, 0, 90, 70, 0] → rata-rata dari 80, 90, 70


// Latihan 11 (TANTANGAN)
// Sistem "antrian kasir mini":
//
// Data awal:
// let antrianKasir = ["Rina", "Budi", "Siti"];
//
// Buat fungsi:
// 1) tambahAntrian(daftarAntrian, namaBaru) → push nama, return daftar
// 2) layaniAntrian(daftarAntrian) → shift (orang pertama dilayani),
//    return nama yang dilayani (atau null jika antrian kosong)
// 3) tampilkanAntrian(daftarAntrian) → console.log semua nama + nomor urut
//
// Alur uji:
// - tampilkan antrian awal
// - tambah "Andi"
// - layani 1 orang (harus "Rina")
// - tampilkan antrian sisa
// - tampilkan jumlah orang tersisa (length)
