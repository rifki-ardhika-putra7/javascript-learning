// ============================================================
// 🏋️ LATIHAN FASE 1 — REVIEW OPERATOR → FUNGSI
// ============================================================
// Materi yang diuji:
//   04 Operator
//   05 Percabangan (if / else / switch)
//   06 Perulangan (for / while / for...of)
//   07 Fungsi
//
// Level: SEDANG (medium)
// Cara kerja:
// 1. Kerjakan urut dari Bagian A → E
// 2. Jalankan dengan: node 08-latihan-fase1.js
// 3. Jangan hardcode hasil — hitung pakai kode
//
// ⚠️ PENTING: Gunakan nama variabel UNIK di setiap soal.
// Hindari nama yang sering bentrok: umur, stok, saldo, total,
// nilai, harga, produk, nama, skor, dll.
// Contoh aman: tarifParkir, poinMember, daftarNilaiUjian.

// ============================================================
// BAGIAN A — OPERATOR
// ============================================================

// Soal A1
// Buat variabel hargaSatuanBarang = 25000 dan jumlahBeli = 3.
// Hitung subtotalBelanja = hargaSatuanBarang * jumlahBeli.
// Lalu tambahkan pajak 11% (pakai * 0.11).
// Tampilkan: subtotal, pajak, dan totalBayar.
let hargaSatuanBarang = 25000;
let jumlahBeli = 3;
let subtotalBelanja = hargaSatuanBarang * jumlahBeli;
let pajak = subtotalBelanja * 0.11;
let totalBayar = subtotalBelanja + pajak;
console.log(`Subtotal: Rp${subtotalBelanja}, Pajak: Rp${pajak}, Total bayar: Rp${totalBayar}`);

// Soal A2
// Buat variabel poinGame = 40.
// Update pakai operator penugasan:
// - tambah 15 (+=)
// - kali 2 (*=)
// - kurang 10 (-=)
// Tampilkan poinGame setelah setiap update.
let poinGame = 40;
poinGame += 15;
console.log(`Poin Game: ${poinGame}`);
poinGame *= 2;
console.log(`Poin Game: ${poinGame}`);
poinGame -= 10;
console.log(`Poin Game: ${poinGame}`);

// Soal A3
// Buat dua variabel:
//   angkaKiri = 12
//   angkaKanan = "12"
// Tampilkan hasil:
//   angkaKiri == angkaKanan
//   angkaKiri === angkaKanan
// Tulis komentar singkat: kenapa hasilnya berbeda?
let angkaKiri = 12;
let angkaKanan = "12";
console.log(angkaKiri == angkaKanan);   // true
console.log(angkaKiri === angkaKanan);  // false
// == membandingkan nilai saja (12 dan "12" dianggap sama setelah konversi tipe).
// === membandingkan nilai DAN tipe data (number vs string → beda).

// Soal A4
// Buat variabel:
//   isMemberToko = true
//   totalKeranjang = 120000
// Buat kondisi boolean:
//   bolehDiskon = isMemberToko && totalKeranjang >= 100000
// Tampilkan bolehDiskon.
// Lalu ubah totalKeranjang jadi 80000, hitung ulang, tampilkan lagi.
let isMemberToko = true;
let totalKeranjang = 120000;
let bolehDiskon = isMemberToko && totalKeranjang >= 100000;
console.log(`Apakah dapat diskon? ${bolehDiskon}`);
totalKeranjang = 80000;
bolehDiskon = isMemberToko && totalKeranjang >= 100000;
console.log(`Apakah dapat diskon? ${bolehDiskon}`);

// ============================================================
// BAGIAN B — PERCABANGAN
// ============================================================

// Soal B1
// Buat variabel beratPaketKg = 4.5.
// Tentukan kategori ongkir:
// - berat <= 1   → "Ringan"
// - berat <= 5   → "Sedang"
// - selain itu   → "Berat"
// Tampilkan kategori.
let beratPaketKg = 4.5;
let kategoriOngkir = "";
if (beratPaketKg <= 1) {
  kategoriOngkir = "Ringan";
} else if (beratPaketKg <= 5) {
  kategoriOngkir = "Sedang";
} else {
  kategoriOngkir = "Berat";
}
console.log(`Berat paket: ${beratPaketKg}Kg, kategori: ${kategoriOngkir}`);

// Soal B2
// Buat variabel kodeStatusPesanan = "D".
// Pakai switch:
//   "P" → "Pesanan diproses"
//   "K" → "Pesanan dikirim"
//   "S" → "Pesanan selesai"
//   "D" → "Pesanan dibatalkan"
//   default → "Status tidak dikenal"
// Tampilkan hasilnya.
// Uji minimal 2 kode berbeda.
function tampilkanStatusPesanan(kodeStatusPesanan) {
  let teksStatus;
  switch (kodeStatusPesanan) {
    case "P":
      teksStatus = "Pesanan diproses";
      break;
    case "K":
      teksStatus = "Pesanan dikirim";
      break;
    case "S":
      teksStatus = "Pesanan selesai";
      break;
    case "D":
      teksStatus = "Pesanan dibatalkan";
      break;
    default:
      teksStatus = "Status tidak dikenal";
  }
  console.log(`Kode ${kodeStatusPesanan}: ${teksStatus}`);
}
tampilkanStatusPesanan("D");
tampilkanStatusPesanan("K");

// Soal B3
// Buat variabel:
//   jamBuka = 8
//   jamTutup = 21
//   jamSekarang = 19
//   isHariLibur = false
// Tampilkan "Toko buka" jika:
//   jamSekarang >= jamBuka DAN jamSekarang < jamTutup DAN bukan hari libur.
// Selain itu tampilkan "Toko tutup".
let jamBuka = 8;
let jamTutup = 21;
let jamSekarang = 19;
let isHariLibur = false;
if (jamSekarang >= jamBuka && jamSekarang < jamTutup && !isHariLibur) {
  console.log("Toko buka");
} else {
  console.log("Toko tutup");
}

// Soal B4
// Buat fungsi sederhana tanpa function dulu (pakai if saja):
// Variabel skorKecepatan = 85.
// Aturan:
// - skor >= 90 → "Sangat cepat"
// - skor >= 75 → "Cepat"
// - skor >= 60 → "Cukup"
// - selain itu → "Perlu latihan"
// Tampilkan hasil penilaian.
let skorKecepatan = 85;
let penilaianKecepatan = "";
if (skorKecepatan >= 90) {
  penilaianKecepatan = "Sangat cepat";
} else if (skorKecepatan >= 75) {
  penilaianKecepatan = "Cepat";
} else if (skorKecepatan >= 60) {
  penilaianKecepatan = "Cukup";
} else {
  penilaianKecepatan = "Perlu latihan";
}
console.log(`Skor kecepatan: ${skorKecepatan}, penilaian: ${penilaianKecepatan}`);

// ============================================================
// BAGIAN C — PERULANGAN
// ============================================================

// Soal C1
// Pakai for: tampilkan kelipatan 4 dari 4 sampai 40.
// Contoh output: 4, 8, 12, ... 40
for (let kelipatanEmpat = 4; kelipatanEmpat <= 40; kelipatanEmpat += 4) {
  console.log(kelipatanEmpat);
}

// Soal C2
// Buat array daftarSuhu = [28, 31, 26, 33, 29].
// Pakai for...of:
// - tampilkan setiap suhu
// - hitung berapa suhu yang >= 30
// Tampilkan jumlahnya di akhir.
let daftarSuhu = [28, 31, 26, 33, 29];
let jumlahSuhuPanas = 0;
for (const suhuHari of daftarSuhu) {
  console.log("Suhu:", suhuHari);
  if (suhuHari >= 30) {
    jumlahSuhuPanas++;
  }
}
console.log("Jumlah suhu >= 30:", jumlahSuhuPanas);

// Soal C3
// Pakai while:
// Mulai dari energiRobot = 25.
// Setiap putaran: energiRobot berkurang 4, tampilkan sisa energi.
// Berhenti saat energiRobot <= 0.
// Setelah loop, tampilkan "Robot berhenti".
let energiRobot = 25;
while (energiRobot > 0) {
  energiRobot -= 4;
  console.log("Sisa energi:", energiRobot);
}
console.log("Robot berhenti");

// Soal C4
// Buat array daftarPoin = [12, 7, 20, 5, 18, 9].
// Loop semua poin:
// - skip (continue) jika poin < 10
// - tampilkan poin yang lolos
// - berhenti (break) jika sudah menampilkan 3 poin
// Hasil yang diharapkan: 12, 20, 18
let daftarPoin = [12, 7, 20, 5, 18, 9];
let jumlahLolos = 0;
for (let i = 0; i < daftarPoin.length; i++) {
  if (daftarPoin[i] < 10) {
    continue;
  }
  console.log(daftarPoin[i]);
  jumlahLolos++;
  if (jumlahLolos === 3) {
    break;
  }
}

// Soal C5
// Buat array hargaMenu = [15000, 22000, 18000, 12000].
// Hitung totalHargaMenu dengan loop (jangan hardcode).
// Tampilkan totalHargaMenu dan rataRataHargaMenu.
let hargaMenu = [15000, 22000, 18000, 12000];
let totalHargaMenu = 0;
for (const hargaItem of hargaMenu) {
  totalHargaMenu += hargaItem;
}
const rataRataHargaMenu = totalHargaMenu / hargaMenu.length;
console.log(`Total harga menu: ${totalHargaMenu}`);
console.log(`Rata-rata harga menu: ${rataRataHargaMenu}`);

// ============================================================
// BAGIAN D — FUNGSI
// ============================================================

// Soal D1
// Buat fungsi hitungLuasSegitiga(alasSegitiga, tinggiSegitiga)
// yang return (alas * tinggi) / 2.
// Uji dengan (10, 6), simpan ke variabel luasSegitigaA, tampilkan.
function hitungLuasSegitiga(alasSegitiga, tinggiSegitiga) {
  return (alasSegitiga * tinggiSegitiga) / 2;
}
let luasSegitigaA = hitungLuasSegitiga(10, 6);
console.log("Luas segitiga A:", luasSegitigaA);

// Soal D2
// Buat fungsi formatSalamKasir(namaPelanggan, namaToko)
// yang return string:
// "Halo [namaPelanggan], selamat datang di [namaToko]!"
// Uji dengan ("Rina", "Toko Maju").
function formatSalamKasir(namaPelanggan, namaToko) {
  return `Halo ${namaPelanggan}, selamat datang di ${namaToko}!`;
}
console.log(formatSalamKasir("Rina", "Toko Maju"));

// Soal D3
// Buat fungsi apakahLulusUjian(nilaiUjian)
// yang return true jika nilaiUjian >= 75, else false.
// Uji dengan 80 dan 60.
function apakahLulusUjian(nilaiUjian) {
  return nilaiUjian >= 75;
}
console.log(apakahLulusUjian(80)); // true
console.log(apakahLulusUjian(60)); // false

// Soal D4
// Buat fungsi hitungBiayaCetak(jumlahHalaman, hargaPerHalaman)
// Aturan:
// - jika jumlahHalaman <= 0 → return 0
// - else return jumlahHalaman * hargaPerHalaman
// Uji: (0, 500) dan (12, 500).
function hitungBiayaCetak(jumlahHalaman, hargaPerHalaman) {
  if (jumlahHalaman <= 0) {
    return 0;
  }
  return jumlahHalaman * hargaPerHalaman;
}
console.log(hitungBiayaCetak(0, 500));   // 0
console.log(hitungBiayaCetak(12, 500));  // 6000

// Soal D5
// Buat 2 fungsi:
// 1) hitungDiskonMember(nominalBelanja) → return nominalBelanja * 0.1
// 2) hitungTotalSetelahDiskon(nominalBelanja)
//    → panggil hitungDiskonMember di dalamnya
//    → return nominalBelanja - diskon
// Uji dengan nominalBelanja = 200000.
function hitungDiskonMember(nominalBelanja) {
  return nominalBelanja * 0.1;
}
function hitungTotalSetelahDiskon(nominalBelanja) {
  let diskon = hitungDiskonMember(nominalBelanja);
  return nominalBelanja - diskon;
}
let nominalBelanja = 200000;
console.log("Nominal Belanja :", nominalBelanja);
console.log("Diskon Member   :", hitungDiskonMember(nominalBelanja));
console.log("Total Bayar     :", hitungTotalSetelahDiskon(nominalBelanja));

// ============================================================
// BAGIAN E — GABUNGAN (MEDIUM)
// ============================================================
// Satu kasus kecil yang menggabungkan operator, if, loop, dan fungsi.
// Jangan terlalu rumit — fokus alur yang jelas.

// Soal E1 — Sistem nilai kelas
// Data:
// const daftarNilaiSiswa = [78, 92, 65, 88, 70, 55, 81];
//
// Buat fungsi:
// 1) hitungRataNilai(daftarNilai) → return rata-rata
// 2) tentukanPredikat(rataNilai)
//    - >= 85 → "Baik Sekali"
//    - >= 75 → "Baik"
//    - >= 65 → "Cukup"
//    - else  → "Perlu Remidi"
// 3) hitungJumlahLulus(daftarNilai)
//    → hitung berapa nilai >= 75 pakai loop
//
// Tampilkan:
// - rata-rata (dibulatkan manual boleh, atau tampil apa adanya)
// - predikat
// - jumlah lulus
//
// Petunjuk hasil kasar:
// rata-rata sekitar 75.57 → predikat "Baik"
// jumlah lulus = 4 (78, 92, 88, 81)
const daftarNilaiSiswa = [78, 92, 65, 88, 70, 55, 81];
function hitungRataNilai(daftarNilai) {
  let totalNilai = 0;
  for (const itemNilai of daftarNilai) {
    totalNilai += itemNilai;
  }
  return totalNilai / daftarNilai.length;
}
function tentukanPredikat(rataNilai) {
  if (rataNilai >= 85) {
    return "Baik Sekali";
  } else if (rataNilai >= 75) {
    return "Baik";
  } else if (rataNilai >= 65) {
    return "Cukup";
  } else {
    return "Perlu Remidi";
  }
}
function hitungJumlahLulus(daftarNilai) {
  let jumlahLulus = 0;
  for (const itemNilai of daftarNilai) {
    if (itemNilai >= 75) {
      jumlahLulus++;
    }
  }
  return jumlahLulus;
}
let rataNilaiKelas = hitungRataNilai(daftarNilaiSiswa);
console.log("Rata-rata:", rataNilaiKelas);
console.log("Predikat:", tentukanPredikat(rataNilaiKelas));
console.log("Jumlah Lulus:", hitungJumlahLulus(daftarNilaiSiswa));

// Soal E2 — Ringkasan parkir harian
// Data:
// const durasiParkirJam = [1, 3, 0, 2, 5];
// const tarifPerJamParkir = 4000;
//
// Buat fungsi:
// 1) hitungBiayaSatuKendaraan(durasiJam, tarifPerJam)
//    - durasiJam <= 0 → return 0
//    - else return durasiJam * tarifPerJam
// 2) hitungTotalPendapatanParkir(daftarDurasi, tarifPerJam)
//    - loop daftarDurasi
//    - tiap item panggil hitungBiayaSatuKendaraan
//    - akumulasi total, lalu return
//
// Tampilkan total pendapatan.
// Petunjuk: (1+3+0+2+5) * 4000 = 44000
const durasiParkirJam = [1, 3, 0, 2, 5];
const tarifPerJamParkir = 4000;
function hitungBiayaSatuKendaraan(durasiJam, tarifPerJam) {
  if (durasiJam <= 0) {
    return 0;
  }
  return durasiJam * tarifPerJam;
}
function hitungTotalPendapatanParkir(daftarDurasi, tarifPerJam) {
  let totalPendapatan = 0;
  for (const durasiItem of daftarDurasi) {
    totalPendapatan += hitungBiayaSatuKendaraan(durasiItem, tarifPerJam);
  }
  return totalPendapatan;
}
console.log("Total Pendapatan:", hitungTotalPendapatanParkir(durasiParkirJam, tarifPerJamParkir));

// ============================================================
// ✅ CHECKLIST SELESAI
// ============================================================
// [x] Bagian A (Operator) selesai
// [x] Bagian B (Percabangan) selesai
// [x] Bagian C (Perulangan) selesai
// [x] Bagian D (Fungsi) selesai
// [x] Bagian E (Gabungan) selesai
// [x] Semua soal dijalankan tanpa error
// [x] Tidak ada variabel global tanpa let/const
// [x] Fungsi perhitungan memakai return, bukan hanya console.log
