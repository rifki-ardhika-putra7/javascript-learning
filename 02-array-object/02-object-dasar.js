// ============================================================
// 📘 MATERI 10 - OBJECT DASAR
// ============================================================
// Lanjut dari: 01-array-dasar.js
// Jalankan: node 02-object-dasar.js
// Folder: 02-array-object/

// ============================================================
// 🎯 TUJUAN PEMBELAJARAN
// ============================================================
// Setelah mempelajari materi ini, kamu akan mampu:
// 1. Memahami apa itu object dan bedanya dengan array
// 2. Membuat object dengan key-value
// 3. Mengakses properti (dot notation & bracket notation)
// 4. Menambah, mengubah, dan menghapus properti
// 5. Memakai object di dalam fungsi (parameter & return)
// 6. Mengenali array of objects (pengenalan)
// 7. Menghindari kesalahan umum terkait object

// ============================================================
// 📖 PENJELASAN KONSEP
// ============================================================

// APA ITU OBJECT?
// ---------------
// Object = kumpulan data yang punya LABEL (disebut key / properti).
//
// Array cocok untuk daftar berurutan:
//   ["apel", "mangga", "jeruk"]  → akses pakai nomor index
//
// Object cocok untuk data yang punya identitas:
//   { nama: "Rina", umur: 20, kota: "Bandung" }  → akses pakai nama key
//
// Bayangkan object seperti formulir:
// - "Nama"  → "Rina"
// - "Umur"  → 20
// - "Kota"  → "Bandung"

// KAPAN PAKAI ARRAY vs OBJECT?
// ----------------------------
// Array  → banyak item sejenis (daftar buah, daftar nilai)
// Object → satu entitas dengan beberapa atribut (profil user, 1 produk)
// Sering digabung: array of objects (daftar produk, daftar siswa)

// MENGAPA OBJECT PENTING?
// -----------------------
// Di aplikasi nyata, data jarang cuma 1 angka atau 1 string.
// User punya nama, email, umur, status login, dll.
// Object menyimpan semuanya dalam 1 wadah yang rapi.

// ============================================================
// 🔤 SINTAKS DAN ATURAN PENTING
// ============================================================

// 1. MEMBUAT OBJECT
//    const orang = {
//      nama: "Rina",
//      umur: 20,
//      isAktif: true
//    };
//    Pakai kurung kurawal {}.
//    Format: key: value, dipisah koma.

// 2. MENGAKSES PROPERTI
//    orang.nama          → dot notation (paling sering)
//    orang["nama"]       → bracket notation
//    Bracket berguna kalau key dinamis / ada spasi / dari variabel.

// 3. MENAMBAH / MENGUBAH
//    orang.kota = "Bandung";     // tambah jika belum ada
//    orang.umur = 21;            // ubah jika sudah ada

// 4. MENGHAPUS PROPERTI
//    delete orang.isAktif;

// 5. CEK APAKAH KEY ADA
//    "nama" in orang             → true/false
//    orang.email === undefined   → juga bisa, tapi hati-hati

// 6. NESTED OBJECT (object di dalam object)
//    const user = {
//      nama: "Kay",
//      alamat: { kota: "Jakarta", kodePos: "12345" }
//    };
//    user.alamat.kota → "Jakarta"

// ============================================================
// 💡 CONTOH KODE SEDERHANA
// ============================================================

// --- MEMBUAT & MENGAKSES ---
const profilSiswa = {
  namaLengkap: "Rina Putri",
  umurSiswa: 17,
  kelasSiswa: "12 IPA",
  isLulus: true,
};

console.log(profilSiswa.namaLengkap);     // Rina Putri
console.log(profilSiswa["kelasSiswa"]);   // 12 IPA
console.log(profilSiswa.umurSiswa);       // 17

// --- MENAMBAH & MENGUBAH ---
profilSiswa.kotaAsal = "Surabaya";  // tambah
profilSiswa.umurSiswa = 18;         // ubah
console.log(profilSiswa);

// --- MENGHAPUS ---
delete profilSiswa.isLulus;
console.log(profilSiswa);

// --- BRACKET DENGAN VARIABEL ---
const kunciYangDicari = "namaLengkap";
console.log(profilSiswa[kunciYangDicari]); // Rina Putri

// --- NESTED OBJECT ---
const dataToko = {
  namaToko: "Toko Maju",
  alamatToko: {
    jalan: "Jl. Melati 5",
    kota: "Bandung",
    kodePos: "40123",
  },
  isBuka: true,
};
console.log(dataToko.alamatToko.kota); // Bandung

// --- OBJECT SEBAGAI PARAMETER FUNGSI ---
function formatLabelPelanggan(dataPelanggan) {
  return `${dataPelanggan.nama} (${dataPelanggan.kota})`;
}
console.log(formatLabelPelanggan({ nama: "Budi", kota: "Medan" }));

// --- FUNGSI YANG RETURN OBJECT ---
function buatRingkasanNilai(namaSiswa, nilaiUjian) {
  let statusLulus = nilaiUjian >= 75;
  return {
    nama: namaSiswa,
    nilai: nilaiUjian,
    lulus: statusLulus,
  };
}
let ringkasanRina = buatRingkasanNilai("Rina", 88);
console.log(ringkasanRina);
console.log(ringkasanRina.lulus); // true

// --- ARRAY OF OBJECTS (pengenalan) ---
const daftarProdukMini = [
  { nama: "Buku", harga: 50000 },
  { nama: "Pensil", harga: 3000 },
  { nama: "Penghapus", harga: 2000 },
];

for (const produkItem of daftarProdukMini) {
  console.log(`${produkItem.nama}: Rp${produkItem.harga}`);
}

// ============================================================
// 🌍 CONTOH KASUS NYATA
// ============================================================

// Kasus: kartu anggota gym sederhana

const anggotaGym = {
  idAnggota: "GYM-001",
  namaAnggota: "Kay Ardhika",
  paket: "Gold",
  sisaKunjungan: 1,
  kontak: {
    email: "kay@email.com",
    noHp: "08123456789",
  },
};

function apakahBolehMasuk(dataAnggota) {
  return dataAnggota.sisaKunjungan > 0;
}

function kurangiKunjungan(dataAnggota) {
  if (dataAnggota.sisaKunjungan <= 0) {
    return dataAnggota;
  }
  dataAnggota.sisaKunjungan -= 1;
  return dataAnggota;
}

function tampilkanKartuAnggota(dataAnggota) {
  console.log("======== KARTU ANGGOTA ========");
  console.log("ID     :", dataAnggota.idAnggota);
  console.log("Nama   :", dataAnggota.namaAnggota);
  console.log("Paket  :", dataAnggota.paket);
  console.log("Sisa   :", dataAnggota.sisaKunjungan);
  console.log("Email  :", dataAnggota.kontak.email);
  console.log("Boleh masuk:", apakahBolehMasuk(dataAnggota));
  console.log("===============================");
}

tampilkanKartuAnggota(anggotaGym);
kurangiKunjungan(anggotaGym);
tampilkanKartuAnggota(anggotaGym);

// ============================================================
// ✅ BEST PRACTICE
// ============================================================

// 1. NAMA KEY JELAS, PAKAI camelCase
//    ✅ namaLengkap, sisaStok, isAktif
//    ❌ n, x1, data1

// 2. PAKAI const UNTUK OBJECT JIKA REFERENSNYA TIDAK DIGANTI
//    const user = { nama: "A" };
//    user.nama = "B";   // ✅ isi boleh diubah
//    user = {};         // ❌ referensi diganti

// 3. DOT NOTATION SEBAGAI DEFAULT
//    Pakai bracket hanya kalau key dinamis / tidak valid sebagai identifier.

// 4. SATU OBJECT = SATU ENTITAS
//    Jangan campur data 2 orang dalam 1 object tanpa struktur jelas.

// 5. ARRAY OF OBJECTS UNTUK DAFTAR
//    [{...}, {...}] lebih rapi daripada banyak object terpisah.

// ============================================================
// ⚠️ KESALAHAN YANG SERING DILAKUKAN PEMULA
// ============================================================

// KESALAHAN 1: Lupa koma antar properti
// ❌ { nama: "A" umur: 20 }
// ✅ { nama: "A", umur: 20 }

// KESALAHAN 2: Akses properti yang tidak ada
//    console.log(user.email); // undefined — bukan error
//    Pastikan key-nya benar ejaannya.

// KESALAHAN 3: Bingung array vs object
//    user[0]   → biasanya untuk array
//    user.nama → untuk object

// KESALAHAN 4: Mengira object bisa di-loop seperti array dengan for...of
//    for...of langsung pada object biasa → error
//    (Nanti dipelajari Object.keys / Object.values)
//    Untuk sekarang: akses properti satu per satu, atau loop array of objects.

// KESALAHAN 5: Key pakai tanda kutip tidak perlu (kecuali ada spasi)
//    ✅ { nama: "Rina" }
//    ✅ { "nama lengkap": "Rina" }  // spasi → wajib kutip + bracket akses

// ============================================================
// 📝 RINGKASAN MATERI
// ============================================================

// ✔ Object = data ber-label (key: value)
// ✔ Akses: object.key atau object["key"]
// ✔ Bisa menambah, mengubah, menghapus properti
// ✔ Object bisa nested, jadi parameter, dan jadi return value
// ✔ Array of objects = daftar entitas (sangat sering dipakai)
// ✔ Array untuk daftar; object untuk atribut 1 item

// ============================================================
// 🏋️ LATIHAN
// ============================================================
// Kerjakan di bawah ini. Jangan hardcode hasil — pakai kode.
// Jalankan: node 02-object-dasar.js
//
// ⚠️ PENTING: Gunakan nama variabel UNIK di setiap latihan.
// Hindari nama yang sudah dipakai di materi di atas.

// --- MUDAH ---

// Latihan 1
// Buat object bukuFavorit dengan properti:
//   judul, penulis, tahunTerbit
// Tampilkan judul dan penulis pakai dot notation.
const bukuFavorit = {
  judul : "Laut Bercerita",
  penulis: "Leila S. Chudori",
  tahunTerbit : 2017
}
console.log(bukuFavorit.judul);
console.log(bukuFavorit["penulis"]);
console.log(bukuFavorit.tahunTerbit);

// Latihan 2
// Buat object profilGamer:
//   username, level, isOnline
// Ubah level jadi level + 1.
// Tambah properti guild = "Dragon Force".
// Tampilkan object-nya.
const profilGamer = {
  username: "Kay",
  level: 1,
  isOnline: true
}
profilGamer.guild = "Dragon Force";  // tambah
profilGamer.level += 1;         // ubah
console.log(profilGamer);

// Latihan 3
// Buat object kontakTeman:
//   nama, noHp, kota
// Hapus properti noHp.
// Tampilkan object setelah dihapus.
const kontakTeman = {
  nama: "Drizzy",
  noHp: 82298765245,
  kota : "Toronto"
}
delete kontakTeman.noHp;
console.log(kontakTeman);

// Latihan 4
// Buat object alamatKirim:
//   penerima, detail: { jalan, kota, kodePos }
// Tampilkan kota dari nested object.
const alamatKirim = {
  penerima: "Kay",
  detail : {
    jalan: "Jl raya x, jalan y",
    kota: "X",
    kodePos : 234567
  }
}
console.log(alamatKirim.detail.kota);

// --- SEDANG ---

// Latihan 5
// Buat fungsi formatKartuProduk(produk)
// Parameter object punya: namaProduk, hargaProduk
// Return string: "[namaProduk] - Rp[hargaProduk]"
// Uji dengan { namaProduk: "Mouse", hargaProduk: 150000 }
function formatKartuProduk(produk) {
  return `${produk.namaProduk} - Rp${produk.hargaProduk}`;
}
console.log(formatKartuProduk({ namaProduk: "Mouse", hargaProduk: 150000 }));

// Latihan 6
// Buat fungsi apakahStokAman(barang)
// barang = { namaBarang, stokBarang }
// Return true jika stokBarang >= 10, else false.
// Uji dengan stok 12 dan stok 4.
function apakahStokAman(barang) {
  if (barang.stokBarang >= 10) {
    return true;
  } else {
    return false;
  }
}
console.log(apakahStokAman({ namaBarang: "Buku", stokBarang: 12 }));
console.log(apakahStokAman({ namaBarang: "Pena", stokBarang: 4 }));

// Latihan 7
// Buat array of objects daftarFilm (minimal 3 film).
// Tiap film: judulFilm, tahunFilm, ratingFilm
// Loop for...of, tampilkan: "Judul (tahun) - rating"
const daftarFilm = [
  {judulFilm: "Avengers Endgame", tahunFilm: 2019, ratingFilm: 9.5},
  {judulFilm: "Spiderman No Way Home", tahunFilm: 2022, ratingFilm: 9.5},
  {judulFilm: "ThunderBolt", tahunFilm: 2024, ratingFilm: 9.5 },
  {judulFilm: "Avenger Infinity War", tahunFilm: 2019, ratingFilm : 9.7}
]
for (const filmItem of daftarFilm) {
  console.log(`${filmItem.judulFilm} (${filmItem.tahunFilm}) - ${filmItem.ratingFilm}`);
}
// Latihan 8
// Dari daftarFilm di atas, hitung berapa film yang ratingFilm >= 8.
// Tampilkan jumlahnya.
let totalFilmRating = 0;
for (const filmItem of daftarFilm) {
  if (filmItem.ratingFilm >= 8) {
    totalFilmRating ++
  }
}
console.log("Jumlah Film dengan rating >= 8 :", totalFilmRating);

// --- SULIT ---

// Latihan 9
// Buat fungsi cariProdukByNama(daftarProduk, namaDicari)
// daftarProduk = array of objects { nama, harga }
// Return object produk yang namanya cocok, atau null jika tidak ada.
// Uji dengan minimal 3 produk.
function cariProdukByNama(daftarProduk, namaDicari) {
  for (let produk of daftarProduk) {
    if (produk.nama === namaDicari) {
      return produk;
    }
  }
  return null;
}
const gudangKecil = [
  { nama: "Laptop", harga: 8000000 },
  { nama: "Mouse", harga: 150000 },
  { nama: "Keyboard", harga: 300000 }
];
console.log(cariProdukByNama(gudangKecil, "Mouse"));
console.log(cariProdukByNama(gudangKecil, "Monitor"));


// Latihan 10
// Buat fungsi hitungTotalBelanja(daftarItem)
// daftarItem = [{ nama, harga, qty }, ...]
// Return total = jumlah dari (harga * qty) semua item.
// Uji: total harus dihitung dari loop, jangan hardcode.
function hitungTotalBelanja(daftarItem) {
  let total = 0;
  for (let item of daftarItem) {
    total += (item.harga * item.qty);
  }
  return total;
}
console.log(
  hitungTotalBelanja([
    { nama: "baju", harga: 15000, qty: 5 },
    { nama: "celana", harga: 20000, qty: 2 },
  ])
);
// Latihan 11 (TANTANGAN)
// Sistem "profil siswa + rapor singkat"
// Data:
// const siswaRapor = {
//   nama: "Siti",
//   kelas: "11 IPA",
//   nilai: { matematika: 80, fisika: 70, biologi: 90 }
// }
//
// Buat fungsi:
// 1) hitungRataRapor(dataSiswa)
//    → rata-rata dari 3 nilai di dataSiswa.nilai
// 2) tentukanStatusRapor(rata)
//    → >= 85 "Sangat Baik", >= 75 "Baik", >= 65 "Cukup", else "Remidi"
// 3) tampilkanRapor(dataSiswa)
//    → tampilkan nama, kelas, tiap nilai, rata-rata, status
//
// Panggil tampilkanRapor(siswaRapor)
const siswaRapor = {
  nama: "Siti",
  kelas: "11 IPA",
  nilai: { matematika: 80, fisika: 70, biologi: 90 }
};
function hitungRataRapor(dataSiswa) {
  const n = dataSiswa.nilai;
  const total = n.matematika + n.fisika + n.biologi;
  return total / 3;
}
function tentukanStatusRapor(rata) {
  if (rata >= 85) {
    return "Sangat Baik";
  } else if (rata >= 75) {
    return "Baik";
  } else if (rata >= 65) {
    return "Cukup";
  } else {
    return "Remidi";
  }
}
function tampilkanRapor(dataSiswa) {
  const rata = hitungRataRapor(dataSiswa);
  const status = tentukanStatusRapor(rata);
  console.log(`--- RAPOR SISWA ---`);
  console.log(`Nama   : ${dataSiswa.nama}`);
  console.log(`Kelas  : ${dataSiswa.kelas}`);
  console.log(`Nilai  :`);
  console.log(`  - Matematika : ${dataSiswa.nilai.matematika}`);
  console.log(`  - Fisika     : ${dataSiswa.nilai.fisika}`);
  console.log(`  - Biologi    : ${dataSiswa.nilai.biologi}`);
  console.log(`Rata-rata: ${rata.toFixed(1)}`); // .toFixed(1) agar ada 1 angka di belakang koma
  console.log(`Status   : ${status}`);
  console.log(`-------------------`);
}
tampilkanRapor(siswaRapor);
