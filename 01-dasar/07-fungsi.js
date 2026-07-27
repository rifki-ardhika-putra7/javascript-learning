// ============================================================
// 📘 MATERI 07 - FUNGSI
// ============================================================

// ============================================================
// 🎯 TUJUAN PEMBELAJARAN
// ============================================================
// Setelah mempelajari materi ini, kamu akan mampu:
// 1. Memahami apa itu fungsi dan kenapa dibutuhkan
// 2. Membuat fungsi dengan deklarasi function
// 3. Memahami parameter, argumen, dan return
// 4. Memanggil fungsi dan menggunakan hasilnya
// 5. Membuat fungsi yang mengembalikan boolean
// 6. Menghindari kesalahan umum terkait fungsi

// ============================================================
// 📖 PENJELASAN KONSEP
// ============================================================

// APA ITU FUNGSI?
// ---------------
// Fungsi = blok kode yang diberi NAMA, bisa dipanggil berulang kali.
// Bayangkan fungsi seperti "mesin kecil":
// - kamu masukkan bahan (input / parameter)
// - mesin memproses
// - mesin mengeluarkan hasil (output / return)
//
// Contoh di kehidupan nyata:
// - fungsi "hitung ongkir" → input: berat paket → output: biaya kirim
// - fungsi "format tanggal" → input: tanggal mentah → output: "21 Jul 2026"

// MENGAPA FUNGSI PENTING?
// -----------------------
// Tanpa fungsi, kode yang sama ditulis berulang-ulang.
// Dengan fungsi:
// - kode lebih rapi dan pendek
// - mudah dipakai ulang
// - mudah diperbaiki (ubah 1 tempat, semua pemanggil ikut berubah)
// - logika terpisah per tugas (lebih mudah dibaca)

// BAGIAN-BAGIAN FUNGSI
// --------------------
// 1. Nama fungsi    → cara memanggilnya
// 2. Parameter      → "slot" input saat fungsi didefinisikan
// 3. Argumen         → nilai nyata yang dikirim saat fungsi dipanggil
// 4. Body (isi)     → kode yang dijalankan
// 5. return         → mengembalikan hasil ke pemanggil (opsional)

// ============================================================
// 🔤 SINTAKS DAN ATURAN PENTING
// ============================================================

// 1. DEKLARASI FUNGSI
//    function namaFungsi(parameter1, parameter2) {
//      // isi fungsi
//      return hasil;
//    }

// 2. MEMANGGIL FUNGSI
//    namaFungsi(nilai1, nilai2);
//    let hasil = namaFungsi(nilai1, nilai2);

// 3. RETURN
//    - Menghentikan fungsi dan mengembalikan nilai
//    - Setelah return, baris di bawahnya TIDAK dijalankan
//    - Tanpa return → fungsi mengembalikan undefined

// 4. PARAMETER
//    - Boleh 0, 1, atau banyak
//    - Urutan argumen harus sesuai urutan parameter

// 5. NAMA FUNGSI
//    - camelCase: hitungLuas, formatRupiah, cekStokTersedia
//    - Gunakan kata kerja: hitung, tampilkan, validasi, konversi

// 6. FUNGSI TANPA RETURN
//    Boleh dipakai hanya untuk menjalankan aksi (misalnya console.log).
//    Tapi kalau butuh hasil perhitungan, wajib pakai return.

// ============================================================
// 💡 CONTOH KODE SEDERHANA
// ============================================================

// --- FUNGSI TANPA PARAMETER ---
function tampilkanPesanSelamatDatang() {
  console.log("Selamat datang di aplikasi BelajarJS!");
}

tampilkanPesanSelamatDatang();
tampilkanPesanSelamatDatang(); // bisa dipanggil berkali-kali

// --- FUNGSI DENGAN PARAMETER ---
function sapaPengguna(namaPengguna) {
  console.log("Halo, " + namaPengguna + "!");
}

sapaPengguna("Rifki");
sapaPengguna("Drizzy");

// --- FUNGSI DENGAN RETURN ---
function hitungLuasPersegi(sisiPersegi) {
  return sisiPersegi * sisiPersegi;
}

let luasKotakA = hitungLuasPersegi(5);
console.log("Luas kotak A:", luasKotakA); // 25

let luasKotakB = hitungLuasPersegi(12);
console.log("Luas kotak B:", luasKotakB); // 144

// --- FUNGSI DENGAN BEBERAPA PARAMETER ---
function hitungLuasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

let luasHalaman = hitungLuasPersegiPanjang(10, 6);
console.log("Luas halaman:", luasHalaman); // 60

// --- FUNGSI YANG MENGEMBALIKAN BOOLEAN ---
function apakahGenap(angkaTarget) {
  return angkaTarget % 2 === 0;
}

console.log(apakahGenap(8));  // true
console.log(apakahGenap(7));  // false

// --- RETURN MENGHEMTIKAN FUNGSI ---
function cekAkses(isPunyaIzin) {
  if (!isPunyaIzin) {
    return "Akses ditolak";
  }
  return "Akses diberikan";
}

console.log(cekAkses(false)); // Akses ditolak
console.log(cekAkses(true));  // Akses diberikan

// --- MENYIMPAN HASIL FUNGSI KE VARIABEL ---
function konversiCelsiusKeFahrenheit(suhuCelsius) {
  return (suhuCelsius * 9) / 5 + 32;
}

let suhuRuang = 25;
let suhuFahrenheit = konversiCelsiusKeFahrenheit(suhuRuang);
console.log(`${suhuRuang}°C = ${suhuFahrenheit}°F`);

// --- FUNGSI MEMANGGIL FUNGSI LAIN ---
function hitungPajak(nominalDasar) {
  const TARIF_PAJAK = 0.11;
  return nominalDasar * TARIF_PAJAK;
}

function hitungTotalTagihan(biayaJasa, biayaMaterial) {
  let subtotalTagihan = biayaJasa + biayaMaterial;
  let pajakTagihan = hitungPajak(subtotalTagihan);
  return subtotalTagihan + pajakTagihan;
}

let totalTagihanServis = hitungTotalTagihan(500000, 200000);
console.log("Total tagihan servis:", totalTagihanServis);

// ============================================================
// 🌍 CONTOH KASUS NYATA
// ============================================================

// Kasus: Sistem kalkulasi ongkir toko online

const TARIF_DASAR_ONGKIR = 10000;
const BIAYA_PER_KG = 3000;

function hitungBeratTotal(daftarBeratBarang) {
  let beratAkumulasi = 0;
  for (const beratSatuan of daftarBeratBarang) {
    beratAkumulasi += beratSatuan;
  }
  return beratAkumulasi;
}

function hitungOngkir(beratPaketKg, jarakKm) {
  let biayaBerat = beratPaketKg * BIAYA_PER_KG;
  let biayaJarak = jarakKm * 500;
  return TARIF_DASAR_ONGKIR + biayaBerat + biayaJarak;
}

function apakahGratisOngkir(nominalBelanja) {
  return nominalBelanja >= 150000;
}

function tampilkanRingkasanPengiriman(namaPenerima, beratPaketKg, jarakKm, nominalBelanja) {
  let ongkirNormal = hitungOngkir(beratPaketKg, jarakKm);
  let gratisOngkir = apakahGratisOngkir(nominalBelanja);
  let ongkirAkhir = gratisOngkir ? 0 : ongkirNormal;

  console.log("============================");
  console.log("Penerima     :", namaPenerima);
  console.log("Berat paket  :", beratPaketKg, "kg");
  console.log("Jarak        :", jarakKm, "km");
  console.log("Belanja      :", nominalBelanja);
  console.log("Ongkir normal:", ongkirNormal);
  console.log("Gratis ongkir:", gratisOngkir);
  console.log("Ongkir akhir :", ongkirAkhir);
  console.log("============================");
}

const beratBarangPesanan = [1.2, 0.5, 0.8];
let beratPaketTotal = hitungBeratTotal(beratBarangPesanan);
tampilkanRingkasanPengiriman("Kay Ardhika", beratPaketTotal, 12, 180000);

// ============================================================
// ✅ BEST PRACTICE
// ============================================================

// 1. SATU FUNGSI = SATU TUGAS
//    ✅ hitungLuas(), formatRupiah(), validasiEmail()
//    ❌ hitungLuasDanKirimEmailDanSimpanDatabase() // terlalu banyak tugas

// 2. NAMA FUNGSI JELAS DAN DESKRIPTIF
//    ✅ function hitungDiskonMember(nominalBelanja) { ... }
//    ❌ function proses(x) { ... }

// 3. PAKAI RETURN UNTUK HASIL PERHITUNGAN
//    ✅ return panjang * lebar;
//    ❌ console.log(panjang * lebar); // sulit dipakai ulang di tempat lain

// 4. PARAMETER JANGAN TERLALU BANYAK
//    Kalau > 3–4 parameter, pertimbangkan pakai object (dipelajari nanti).

// 5. HINDARI MENGUBAH VARIABEL GLOBAL DI DALAM FUNGSI (untuk pemula)
//    Lebih aman: terima input lewat parameter, kembalikan lewat return.

// 6. DOKUMENTASIKAN FUNGSI KOMPLEKS LEWAT KOMENTAR SINGKAT
//    // Menghitung ongkir berdasarkan berat (kg) dan jarak (km)

// ============================================================
// ⚠️ KESALAHAN YANG SERING DILAKUKAN PEMULA
// ============================================================

// KESALAHAN 1: Lupa memanggil fungsi
// ❌ hitungLuasPersegi;        // hanya mereferensikan, tidak dijalankan
// ✅ hitungLuasPersegi(5);

// KESALAHAN 2: Lupa return
// ❌ function tambah(angkaA, angkaB) {
//      angkaA + angkaB;  // hasilnya hilang, return undefined
//    }
// ✅ function tambah(angkaA, angkaB) {
//      return angkaA + angkaB;
//    }

// KESALAHAN 3: Urutan argumen salah
// ❌ hitungLuasPersegiPanjang(6, 10); // benar: panjang=6, lebar=10
// ❌ hitungLuasPersegiPanjang(10, 6); // kalau tertukar artinya, hasil sama
//    Tapi untuk operasi lain (misal pengurangan), urutan PENTING!

// KESALAHAN 4: Mengira console.log() = return
//    console.log() hanya MENAMPILKAN ke layar.
//    return mengirim nilai ke kode yang memanggil fungsi.

// KESALAHAN 5: Nama fungsi tidak konsisten
//    function HitungLuas() vs hitungLuas — JavaScript case-sensitive!

// KESALAHAN 6: Memanggil fungsi sebelum didefinisikan (expression)
//    function declaration → boleh dihoisting (dipanggil dulu, definisi belakangan)
//    const fn = function() {} → harus definisi dulu baru dipanggil
//    (Untuk pemula, tulis definisi di atas, pemanggilan di bawah — paling aman)

// ============================================================
// 📝 RINGKASAN MATERI
// ============================================================

// ✔ Fungsi = blok kode bernama yang bisa dipanggil berulang
// ✔ Parameter = input, return = output
// ✔ function namaFungsi(param) { return hasil; }
// ✔ namaFungsi(argumen) untuk memanggil
// ✔ Tanpa return → undefined
// ✔ Satu fungsi, satu tugas, nama yang jelas
// ✔ return untuk hasil; console.log hanya untuk tampilan

// ============================================================
// 🏋️ LATIHAN
// ============================================================
// Kerjakan latihan berikut di file terpisah atau di bawah ini.
// Jangan lihat jawaban dulu sebelum mencoba sendiri!
//
// ⚠️ PENTING: Gunakan nama variabel UNIK di setiap latihan.
// Hindari nama yang sudah dipakai di materi sebelumnya, seperti:
// umur, stok, saldo, total, nilai, harga, produk, nama, skor, dll.
// Contoh aman: lebarHalaman, biayaKirim, suhuCelsius, kodeUnik.

// --- MUDAH ---

// Latihan 1
// Buat fungsi sapaTamu(namaTamu) yang menampilkan:
// "Halo, [namaTamu]! Selamat datang."
// Panggil dengan nama tamu berbeda minimal 2 kali.
function sapaTamu(namaTamu) {
  console.log(`Halo, ${namaTamu}! Selamat datang.`);
}
sapaTamu("Drizzy");
sapaTamu("Kay");

// Latihan 2
// Buat fungsi hitungKelilingPersegi(sisiKotak) yang return keliling.
// Simpan hasilnya ke variabel kelilingHalaman, lalu tampilkan.
function hitungKelilingPersegi(sisiKotak) {
  return 4 * sisiKotak;
}
let kelilingHalaman = hitungKelilingPersegi(5);
console.log("Keliling halaman:", kelilingHalaman);

// Latihan 3
// Buat fungsi konversiKmKeMeter(jarakKm) → return jarak dalam meter.
// Uji dengan jarakKm = 2.5, simpan ke variabel jarakMeter.
function konversiKmKeMeter(jarakKm) {
  return jarakKm * 1000;
}
let jarakMeter = konversiKmKeMeter(2.5);
console.log("Jarak meter:", jarakMeter);

// Latihan 4
// Buat fungsi apakahPositif(angkaMasuk) → return true jika > 0.
// Uji dengan 10 dan -3.
function apakahPositif(angkaMasuk) {
  return angkaMasuk > 0;
}
console.log(apakahPositif(10));  // true
console.log(apakahPositif(-3)); // false

// Latihan 5
// Buat fungsi gabungkanKata(kataDepan, kataBelakang) → return gabungan.
// Uji: gabungkanKata("Belajar", "JavaScript").
function gabungkanKata(kataDepan, kataBelakang) {
  return kataDepan + " " + kataBelakang;
}
console.log(gabungkanKata("Belajar", "JavaScript"));

// Latihan 6
// Buat fungsi tampilkanPemisah() tanpa parameter,
// hanya menampilkan garis "========================".
// Panggil sebelum dan sesudah satu console.log pesan.
function tampilkanPemisah() {
  console.log("========================");
}
tampilkanPemisah();
console.log("Pesan di tengah pemisah");
tampilkanPemisah();

// --- SEDANG ---

// Latihan 7
// Buat fungsi hitungRataDuaAngka(angkaPertama, angkaKedua).
// Return rata-ratanya. Uji dengan (80, 90).
function hitungRataDuaAngka(angkaPertama, angkaKedua) {
  return (angkaPertama + angkaKedua) / 2;
}
console.log(hitungRataDuaAngka(80, 90)); // 85

// Latihan 8
// Buat fungsi hitungDiskonBelanja(nominalBelanja, persenDiskon).
// Return nominal diskon dalam rupiah (bukan persen mentah).
// Contoh: 100000 dan 15 → return 15000.
function hitungDiskonBelanja(nominalBelanja, persenDiskon) {
  return nominalBelanja * (persenDiskon / 100);
}
console.log(hitungDiskonBelanja(100000, 15)); // 15000

// Latihan 9
// Buat fungsi cekPasswordKuat(panjangPassword).
// Return true jika panjangPassword >= 8, else false.
// Uji dengan "abc123" dan "rahasia123".
function cekPasswordKuat(panjangPassword) {
  return panjangPassword >= 8;
}
console.log(cekPasswordKuat("abc123".length));     // false
console.log(cekPasswordKuat("rahasia123".length)); // true

// Latihan 10
// Buat fungsi formatLabelProduk(namaBarang, kodeBarang).
// Return string: "[kodeBarang] - namaBarang"
// Contoh: ("Mouse Wireless", "MW-01") → "MW-01 - Mouse Wireless"
function formatLabelProduk(namaBarang, kodeBarang) {
  return `${kodeBarang} - ${namaBarang}`;
}
console.log(formatLabelProduk("Mouse Wireless", "MW-01"));

// Latihan 11
// Buat fungsi hitungBiayaParkir(durasiJam, tarifPerJam).
// Jika durasiJam <= 0, return 0.
// Else return durasiJam * tarifPerJam.
// Uji: (0, 5000) dan (3, 5000).
function hitungBiayaParkir(durasiJam, tarifPerJam) {
  if (durasiJam <= 0) {
    return 0;
  }
  return durasiJam * tarifPerJam;
}
console.log(hitungBiayaParkir(0, 5000)); // 0
console.log(hitungBiayaParkir(3, 5000)); // 15000

// --- SULIT ---

// Latihan 12
// Buat fungsi hitungJumlahGenap(daftarBilangan).
// Parameter: array angka.
// Return berapa banyak angka genap di dalamnya.
// Uji: [1, 2, 3, 4, 5, 6] → harus return 3.
function hitungJumlahGenap(daftarBilangan) {
  let hitungGenap = 0;
  for (const item of daftarBilangan) {
    if (item % 2 === 0) {
      hitungGenap++;
    }
  }
  return hitungGenap;
}
console.log(hitungJumlahGenap([1, 2, 3, 4, 5, 6])); // 3

// Latihan 13
// Buat fungsi cariNilaiMaksimum(daftarSkor).
// Return nilai tertinggi dari array.
// Uji: [72, 88, 65, 91, 79] → return 91.
// Jangan pakai Math.max() dulu — pakai loop di dalam fungsi.
function cariNilaiMaksimum(daftarSkor) {
  let scoreMax = daftarSkor[0];
  for (const item of daftarSkor) {
    if (item > scoreMax) {
      scoreMax = item;
    }
  }
  return scoreMax;
}
console.log(cariNilaiMaksimum([72, 88, 65, 91, 79])); // 91

// Latihan 14
// Buat fungsi kalkulasiTagihanListrik(pemakaianKwh, tarifPerKwh).
// Aturan:
// - pemakaianKwh <= 0 → return 0
// - tagihan dasar = pemakaianKwh * tarifPerKwh
// - jika pemakaianKwh > 100, tambah denda 10% dari tagihan dasar
// Return total tagihan akhir.
// Uji: (80, 1500) dan (120, 1500).
function kalkulasiTagihanListrik(pemakaianKwh, tarifPerKwh) {
  if (pemakaianKwh <= 0) {
    return 0;
  }

  let tagihanDasar = pemakaianKwh * tarifPerKwh;
  let denda = 0;

  if (pemakaianKwh > 100) {
    denda = tagihanDasar * 0.1;
  }

  return tagihanDasar + denda;
}
console.log(kalkulasiTagihanListrik(80, 1500));  // 120000
console.log(kalkulasiTagihanListrik(120, 1500)); // 198000

// Latihan 15 (TANTANGAN)
// Buat sistem "kalkulator ongkir mini" memakai beberapa fungsi:
//
// 1) hitungSubtotalBelanja(daftarHargaSatuan, daftarQty)
//    → return subtotal belanja
// 2) tentukanDiskonOngkir(subtotalBelanja)
//    → return true jika subtotalBelanja >= 200000
// 3) hitungOngkirAkhir(beratKg, jarakKm, subtotalBelanja)
//    → ongkir dasar = 8000 + (beratKg * 4000) + (jarakKm * 300)
//    → jika dapat diskon ongkir, return 0
//    → else return ongkir dasar
// 4) tampilkanInvoiceOngkir(namaPelanggan, subtotalBelanja, ongkirAkhir)
//    → tampilkan laporan rapi + grandTotal = subtotal + ongkir
//
// Data uji:
// namaPelanggan = "Kay"
// daftarHargaSatuan = [45000, 32000, 28000]
// daftarQty         = [2, 1, 3]
// beratKg = 2.5
// jarakKm = 8
//
// Aturan:
// - Semua perhitungan di dalam fungsi (jangan hardcode hasil).
// - Nama variabel unik, jangan tabrakan dengan materi lain.
// - Tampilkan invoice lengkap di console.

function hitungSubtotalBelanja(daftarHargaSatuan, daftarQty) {
  let subtotalBelanja = 0;
  for (let i = 0; i < daftarHargaSatuan.length; i++) {
    subtotalBelanja += daftarHargaSatuan[i] * daftarQty[i];
  }
  return subtotalBelanja;
}

function tentukanDiskonOngkir(subtotalBelanja) {
  return subtotalBelanja >= 200000;
}

function hitungOngkirAkhir(beratKg, jarakKm, subtotalBelanja) {
  let ongkirDasar = 8000 + (beratKg * 4000) + (jarakKm * 300);

  if (tentukanDiskonOngkir(subtotalBelanja)) {
    return 0;
  }
  return ongkirDasar;
}

function tampilkanInvoiceOngkir(namaPelanggan, subtotalBelanja, ongkirAkhir) {
  let grandTotalInvoice = subtotalBelanja + ongkirAkhir;

  console.log("========================================");
  console.log("         INVOICE ONGKIR MINI");
  console.log("========================================");
  console.log("Nama Pelanggan :", namaPelanggan);
  console.log("Subtotal       :", subtotalBelanja);
  console.log("Ongkos Kirim   :", ongkirAkhir);
  console.log("========================================");
  console.log("GRAND TOTAL    :", grandTotalInvoice);
  console.log("========================================");
}

let namaPelangganInvoice = "Kay";
let daftarHargaSatuan = [45000, 32000, 28000];
let daftarQtyBelanja = [2, 1, 3];
let beratPaketKg = 2.5;
let jarakKirimKm = 8;

let subtotalInvoice = hitungSubtotalBelanja(daftarHargaSatuan, daftarQtyBelanja);
let ongkirInvoice = hitungOngkirAkhir(beratPaketKg, jarakKirimKm, subtotalInvoice);
tampilkanInvoiceOngkir(namaPelangganInvoice, subtotalInvoice, ongkirInvoice);
