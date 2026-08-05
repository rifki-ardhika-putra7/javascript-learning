// ============================================================
// 🏋️ LATIHAN TINGKAT — 01-DASAR (JavaScript Fundamentals)
// ============================================================
// Mencakup semua materi 01-dasar:
//   Variabel, Tipe Data, Operator, Percabangan,
//   Perulangan, Fungsi
//
// Tingkatan:
//   ⭐        MUDAH    — soal M1–M5
//   ⭐⭐      MENENGAH — soal T1–T5
//   ⭐⭐⭐    SULIT    — soal S1–S5
//   ⭐⭐⭐⭐  EXTREME  — soal X1–X5
//
// Cara kerja:
//   1. Hapus komentar `// TODO: ...` dan tulis solusimu
//   2. Jalankan: node 09-latihan-tingkat.js
//   3. Jangan hardcode hasil — hitung pakai kode
// ============================================================

// ============================================================
// ⭐ MUDAH (M1–M5)
// ============================================================

// M1 — Konverter suhu sederhana
// Buat variabel suhuCelsiusM1 = 37.
// Hitung suhuFahrenheitM1 = (suhuCelsiusM1 * 9/5) + 32.
// Tampilkan: "37°C = X°F"
let suhuCelsiusM1 = 37
let suhuFahrenheitM1 = (suhuCelsiusM1 * 9 / 5) + 32;
console.log(`Suhu Celcius ${suhuCelsiusM1}C = ${suhuFahrenheitM1}F`);

// M2 — Cek ganjil / genap
// Buat variabel bilanganM2 = 48.
// Pakai if/else untuk tampilkan "Genap" atau "Ganjil".
let bilanganM2 = 48;
if (bilanganM2 % 2 === 0) {
  console.log("Genap");
} else {
  console.log("Ganjil");
};

// M3 — Loop sederhana
// Pakai for untuk tampilkan angka 1 sampai 10.
// Setiap angka ditampilkan di baris sendiri.
for (let i = 1; i <= 10; i++){
  console.log(i);
}

// M4 — Fungsi sapaan
// Buat fungsi sapakanUser(namaUser) yang return:
// "Halo, [namaUser]! Ayo belajar JavaScript."
// Panggil dengan 2 nama berbeda dan tampilkan hasilnya.
function sapakanUser(namaUser) {
  console.log(`Hallo ${namaUser}`);
}
sapakanUser("Kay");
sapakanUser("Drizzy")

// M5 — Penjumlahan array manual
// Buat array nilaiM5 = [10, 20, 30, 40, 50].
// Hitung totalNilaiM5 pakai for...of (tanpa reduce).
// Tampilkan total.
let nilaiM5 = [10, 20, 30, 40, 50];
let total = 0;
for (const item of nilaiM5) {
total += item
}
console.log(total)

// ============================================================
// ⭐⭐ MENENGAH (T1–T5)
// ============================================================

// T1 — Kalkulator diskon bertingkat
// Buat fungsi hitungHargaAkhir(hargaAsli, poinMember).
// Aturan diskon:
//   poinMember >= 500 → diskon 20%
//   poinMember >= 200 → diskon 10%
//   poinMember >= 100 → diskon 5%
//   selain itu       → tanpa diskon
// Return harga setelah diskon.
// Uji: (300000, 250) → 270000
function hitungHargaAkhir(hargaAsli, poinMember) {
  let totalDiskon = 0;
  if (poinMember >= 500) {
    totalDiskon = hargaAsli * (20 / 100);
  } else if (poinMember >= 200) {
    totalDiskon = hargaAsli * (10 / 100);
  } else if (poinMember >= 100) {
    totalDiskon = hargaAsli * (5 / 100);
  } else {
    totalDiskon = 0;
  }
  return hargaAsli - totalDiskon;
}
console.log(hitungHargaAkhir(300000, 250))

// T2 — FizzBuzz versi toko
// Loop 1 sampai 30. Untuk setiap angka:
//   - kelipatan 3 dan 5 → "PotonganSpesial"
//   - kelipatan 3       → "Diskon"
//   - kelipatan 5       → "Bonus"
//   - selain itu        → tampilkan angkanya
for (let i = 1; i <= 30; i++){
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("PotonganSpesial");
  } else if (i % 3 === 0) {
    console.log("Diskon");
  } else if (i % 5 === 0) {
    console.log("Bonus")
  } else {
    console.log(i)
  }
}

// T3 — Statistik array
// Buat array skorUjian = [72, 85, 60, 90, 78, 55, 88].
// Buat SATU fungsi statistikArray(daftarSkor) yang return object:
//   { total, rataRata, tertinggi, terendah }
// Tampilkan semua propertinya.
let skorUjian = [72, 85, 60, 90, 78, 55, 88];
function statistikArray(daftarSkor) {
  let total = 0;
  let tertinggi = daftarSkor[0];
  let terendah = daftarSkor[0];
  for (const item of daftarSkor) {
    total += item;
    if (item > tertinggi) {
      tertinggi = item;
    }
    if (item < terendah) {
      terendah = item;
    }
  }
  let rataRata = total / daftarSkor.length;
  return {
    total: total,
    rataRata: Number(rataRata.toFixed(1)),
    tertinggi: tertinggi,
    terendah: terendah
  };
}
const hasilStatistik = statistikArray(skorUjian);
console.log("--- HASIL STATISTIK ---");
console.log(`Total Skor : ${hasilStatistik.total}`);
console.log(`Rata-rata  : ${hasilStatistik.rataRata}`);
console.log(`Tertinggi  : ${hasilStatistik.tertinggi}`);
console.log(`Terendah   : ${hasilStatistik.terendah}`);


// T4 — Validasi form login
// Buat fungsi validasiLogin(username, password).
// Aturan:
//   - username kosong atau panjang < 4 → return "Username tidak valid"
//   - password kosong atau panjang < 8 → return "Password terlalu pendek"
//   - keduanya valid → return "Login berhasil"
// Uji minimal 3 kasus berbeda.
// TODO: tulis solusi di sini
function validasiLogin(username, password) {
  if (!username || username.length < 4) {
    return "Username Tidak Valid";
  } else if (!password || password.length < 8) {
    return "Password Terlalu Pendek";
  } else {
    return "Login Berhasil";
  }
}
console.log(validasiLogin("", "password123"));
console.log(validasiLogin("rif", "password123"));
console.log(validasiLogin("rifki", "12345"));
console.log(validasiLogin("rifki", "password123"));

// T5 — Faktor bilangan
// Buat fungsi cariFaktor(bilangan).
// Return array berisi semua faktor dari bilangan tersebut.
// Contoh: cariFaktor(12) → [1, 2, 3, 4, 6, 12]
// Uji dengan 18 dan 25.
// TODO: tulis solusi di sini
function cariFaktor(bilangan) {
  let hasil = []
  for (let i = 1; i <= bilangan; i++) {
    if (bilangan % i === 0) {
      hasil.push(i);
    }
  }
  return hasil;
}
console.log(`faktor dari 18:`, cariFaktor(18));
console.log(`faktor dari 25:`, cariFaktor(25));
// ============================================================
// ⭐⭐⭐ SULIT (S1–S5)
// ============================================================

// S1 — Sistem nilai akademik lengkap
// Data: const nilaiKelas = [88, 72, 95, 60, 78, 83, 55, 91, 67, 76].
// Buat fungsi prosesNilaiKelas(daftarNilai) yang:
//   1. Menghitung rata-rata
//   2. Menentukan predikat (A:>=85, B:>=75, C:>=65, D:<65)
//   3. Menghitung jumlah tiap predikat
//   4. Menemukan nilai tertinggi dan terendah
// Tampilkan laporan lengkap.
// TODO: tulis solusi di sini
const nilaiKelas = [88, 72, 95, 60, 78, 83, 55, 91, 67, 76];
function prosesNilaiKelas(daftarNilai) {
  let total = 0;
  let tertinggi = daftarNilai[0];
  let terendah = daftarNilai[0];
  for (const item of daftarNilai) {
    total += item;
    if (item > tertinggi) {
      tertinggi = item;
    }
    if (item < terendah) {
      terendah = item;
    }
  }
  let rataRata = total / daftarNilai.length;
  let predikat = "";
  if (rataRata >= 85) {
    predikat = "A";
  } else if (rataRata >= 75) {
    predikat = "B";
  } else if (rataRata >= 65) {
    predikat = "C";
  } else {
    predikat = "D";
  }
  let jumlahAPredikat = 0;
  let jumlahBPredikat = 0;
  let jumlahCPredikat = 0;
  let jumlahDPredikat = 0;
  for (const item of daftarNilai) {
    if (item >= 85) {
      jumlahAPredikat++;
    } else if (item >= 75) {
      jumlahBPredikat++;
    } else if (item >= 65) {
      jumlahCPredikat++;
    } else {
      jumlahDPredikat++;
    }
  }
  return {
    total: total,
    rataRata: Number(rataRata.toFixed(1)),
    tertinggi: tertinggi,
    terendah: terendah,
    predikat: predikat,
    jumlahAPredikat: jumlahAPredikat,
    jumlahBPredikat: jumlahBPredikat,
    jumlahCPredikat: jumlahCPredikat,
    jumlahDPredikat: jumlahDPredikat
  };
}
const hasilNilaiKelas = prosesNilaiKelas(nilaiKelas);
console.log("--- HASIL NILAI KELAS ---");
console.log(`Total Nilai : ${hasilNilaiKelas.total}`);
console.log(`Rata-rata  : ${hasilNilaiKelas.rataRata}`);
console.log(`Tertinggi  : ${hasilNilaiKelas.tertinggi}`);
console.log(`Terendah   : ${hasilNilaiKelas.terendah}`);
console.log(`Predikat   : ${hasilNilaiKelas.predikat}`);
console.log(`Jumlah A   : ${hasilNilaiKelas.jumlahAPredikat}`);
console.log(`Jumlah B   : ${hasilNilaiKelas.jumlahBPredikat}`);
console.log(`Jumlah C   : ${hasilNilaiKelas.jumlahCPredikat}`);
console.log(`Jumlah D   : ${hasilNilaiKelas.jumlahDPredikat}`);

// S2 — Caesar cipher sederhana
// Buat fungsi enkripsiCaesar(teks, geser).
// Geser setiap huruf alfabet sebanyak nilai geser.
// Contoh: enkripsiCaesar("abc", 3) → "def"
// Hint: gunakan charCodeAt() dan String.fromCharCode().
// Uji: ("hello", 2) → "jgnnq"
// TODO: tulis solusi di sini
function enkripsiCaesar(teks, geser) {
  let hasil = "";
  for (let i = 0; i < teks.length; i++) {
    let kodeHuruf = teks.charCodeAt(i);
    let huruf = String.fromCharCode(kodeHuruf + geser);
    hasil += huruf;
  }
  return hasil;
}
console.log(enkripsiCaesar("hello", 2));
// S3 — Konverter angka ke kata (ratusan)
// Buat fungsi angkaKeKata(angka) untuk 0–999.
// Contoh: angkaKeKata(123) → "seratus dua puluh tiga"
// Gunakan array satuan, belasan, puluhan sebagai lookup.
// Uji: 0, 15, 42, 100, 305, 999.
// TODO: tulis solusi di sini
function angkaKeKata(angka) {
  const satuan = ["nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
  const belasan = ["sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
  const puluhan = ["", "sepuluh", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"];
  if (angka < 10) {
    return satuan[angka];
  } else if (angka < 20) {
    return belasan[angka - 10];
  } else if (angka < 100) {
    const sisa = angka % 10;
    return sisa === 0 ? puluhan[Math.floor(angka / 10)] : puluhan[Math.floor(angka / 10)] + " " + satuan[sisa];
  } else {
    const sisa = angka % 100;
    return satuan[Math.floor(angka / 100)] + " ratus" + (sisa === 0 ? "" : " " + angkaKeKata(sisa));
  }
}
console.log(angkaKeKata(232));
// S4 — Kalkulator ekspresi string
// Buat fungsi hitungEkspresi(ekspresi).
// ekspresi berformat "angka operator angka", contoh: "12 + 5".
// Support: +, -, *, /
// Return hasil perhitungan (number).
// Jika operator tidak dikenal → return null.
// Uji: "10 + 5", "20 - 3", "6 * 7", "100 / 4".
// TODO: tulis solusi di sini
function hitungEkspresi(ekspresi) {
  const [angka1, operator, angka2] = ekspresi.split(" ");
  const num1 = Number(angka1);
  const num2 = Number(angka2);
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return null;
  }
}
console.log(hitungEkspresi("12 + 5"));
console.log(hitungEkspresi("20 - 3"));
console.log(hitungEkspresi("6 * 7"));
console.log(hitungEkspresi("100 / 4"));


// S5 — Generator tabel perkalian
// Buat fungsi tabelPerkalian(n) yang menampilkan tabel
// perkalian dari 1×1 sampai n×n dalam format rapi:
//   1  2  3
//   2  4  6
//   3  6  9
// Gunakan nested loop dan padding (padStart) agar kolom lurus.
// Uji dengan n = 5 dan n = 9.
// TODO: tulis solusi di sini
function tabelPerkalian(n) {
  for (let i = 1; i <= n; i++) {
    let baris = "";
    for (let j = 1; j <= n; j++) {
      baris += (i * j).toString().padStart(3, " ");
    }
    console.log(baris);
  }
}
tabelPerkalian(5);
tabelPerkalian(9);
// ============================================================
// ⭐⭐⭐⭐ EXTREME (X1–X5)
// ============================================================

// X1 — Sistem inventori toko
// Kamu punya dua array sejajar:
//   const namaBarang  = ["Kopi", "Teh", "Susu", "Coklat", "Jus"];
//   const stokBarang  = [50, 20, 5, 35, 0];
//   const hargaBarang = [15000, 12000, 18000, 22000, 10000];
//
// Buat sistem dengan fungsi-fungsi berikut:
//   1) tampilkanInventori(nama, stok, harga)
//      → tampilkan tabel rapi, tandai stok <= 5 dengan "[MENIPIS]"
//      → tandai stok === 0 dengan "[HABIS]"
//   2) cariBarangMurah(nama, harga, batasMaks)
//      → return array nama barang dengan harga <= batasMaks
//   3) hitungNilaiGudang(stok, harga)
//      → return total nilai semua stok (stok[i] * harga[i])
//   4) rekomendasiRestok(nama, stok, batasBawah)
//      → return array nama barang yang stoknya <= batasBawah
//
// Jalankan semua fungsi dan tampilkan hasil lengkap.
// TODO: tulis solusi di sini
const namaBarang = ["Kopi", "Teh", "Susu", "Coklat", "Jus"];
const stokBarang = [50, 20, 5, 35, 0];
const hargaBarang = [15000, 12000, 18000, 22000, 10000];
function tampilkanInventori(nama, stok, harga) {
  console.log("--- INVENTORI TOKO ---");
  console.log("Nama | Stok | Harga | Status");
  console.log("--------------------------");
  for (let i = 0; i < nama.length; i++) {
    let status = "";
    if (stok[i] <= 5) {
      status = "[MENIPIS]";
    }
    if (stok[i] === 0) {
      status = "[HABIS]";
    }
    console.log(`${nama[i]} | ${stok[i]} | ${harga[i]} | ${status}`);
  }
}
function cariBarangMurah(nama, harga, batasMaks) {
  const barangMurah = [];
  for (let i = 0; i < nama.length; i++) {
    if (harga[i] <= batasMaks) {
      barangMurah.push(nama[i]);
    }
  }
  return barangMurah;
}
function hitungNilaiGudang(stok, harga) {
  let totalNilai = 0;
  for (let i = 0; i < stok.length; i++) {
    totalNilai += stok[i] * harga[i];
  }
  return totalNilai;
}
function rekomendasiRestok(nama, stok, batasBawah) {
  const barangRestok = [];
  for (let i = 0; i < nama.length; i++) {
    if (stok[i] <= batasBawah) {
      barangRestok.push(nama[i]);
    }
  }
  return barangRestok;
}
tampilkanInventori(namaBarang, stokBarang, hargaBarang);
console.log(cariBarangMurah(namaBarang, hargaBarang, 15000));
console.log(hitungNilaiGudang(stokBarang, hargaBarang));
console.log(rekomendasiRestok(namaBarang, stokBarang, 10));

// X2 — Mesin state sederhana
// Buat fungsi buatMesinATM(saldoAwal).
// Fungsi ini RETURN sebuah object dengan method:
//   - cekSaldo()           → tampilkan saldo sekarang
//   - setor(jumlah)        → tambah saldo, validasi jumlah > 0
//   - tarik(jumlah)        → kurang saldo, validasi cukup & > 0
//   - riwayat()            → tampilkan array semua transaksi
//
// Setiap transaksi masuk ke riwayat dengan format:
//   { jenis: "setor"|"tarik", jumlah, saldoSetelah }
//
// Uji: buat ATM dengan saldo 500000, setor 200000,
//       tarik 150000, tarik 700000 (gagal), cekSaldo, riwayat.
// TODO: tulis solusi di sini
function buatMesinATM(saldoAwal) {
  let saldo = saldoAwal;
  let listRiwayat = []; // rename agar tidak bentrok dengan nama method

  return {
    cekSaldo: function () {
      console.log(`Saldo saat ini: Rp ${saldo}`);
      return saldo;
    },
    setor: function (jumlah) {
      if (jumlah <= 0) {
        console.log("Jumlah setoran harus positif");
        return false;
      }
      saldo += jumlah;
      listRiwayat.push({ jenis: "setor", jumlah, saldoSetelah: saldo });
      console.log(`Setoran Rp ${jumlah} berhasil. Saldo baru: Rp ${saldo}`);
      return true;
    },
    tarik: function (jumlah) {
      if (jumlah <= 0) {
        console.log("Jumlah tarikan harus positif");
        return false;
      }
      if (jumlah > saldo) {
        console.log("Saldo tidak mencukupi");
        return false;
      }
      saldo -= jumlah;
      listRiwayat.push({ jenis: "tarik", jumlah, saldoSetelah: saldo });
      console.log(`Penarikan Rp ${jumlah} berhasil. Saldo baru: Rp ${saldo}`);
      return true;
    },
    riwayat: function () {
      console.log("--- RIWAYAT TRANSAKSI ---");
      listRiwayat.forEach((transaksi) => {
        console.log(`${transaksi.jenis} Rp ${transaksi.jumlah} → Saldo: Rp ${transaksi.saldoSetelah}`);
      });
    },
  };
}
const atm = buatMesinATM(500000);
atm.setor(200000);
atm.tarik(150000);
atm.tarik(700000);
atm.cekSaldo();
atm.riwayat();

  // X3 — Analisis teks
// Buat fungsi analisisTeks(teks) yang return object:
//   {
//     jumlahKarakter,        // total karakter (tanpa spasi)
//     jumlahKata,            // jumlah kata
//     jumlahKalimat,         // jumlah kalimat (titik, !, ?)
//     kataFrekuensiTertinggi,// kata yang paling sering muncul
//     rataKataPerKalimat     // rata-rata kata per kalimat
//   }
// Uji dengan kalimat minimal 3 kalimat.
// Hint: pakai split(), toLowerCase(), dan loop.
// TODO: tulis solusi di sini
function analisisTeks(teks) {
  // hitung jumlah karakter (tanpa spasi)
  const jumlahKarakter = teks.replace(/\s/g, "").length;

  // hitung jumlah kata
  const kata = teks.split(/\s+/).filter((w) => w.length > 0);
  const jumlahKata = kata.length;

  // hitung jumlah kalimat
  const kalimat = teks.split(/[.!?]+/).filter((k) => k.length > 0);
  const jumlahKalimat = kalimat.length;

  // hitung frekuensi kata
  const frekuensi = {};
  kata.forEach((kata) => {
    const kataLower = kata.toLowerCase();
    frekuensi[kataLower] = (frekuensi[kataLower] || 0) + 1;
  });

  // cari kata yang paling sering muncul
  let kataTerbanyak = "";
  let maxFrekuensi = 0;
  for (const [kata, freq] of Object.entries(frekuensi)) {
    if (freq > maxFrekuensi) {
      maxFrekuensi = freq;
      kataTerbanyak = kata;
    }
  }

  // rata-rata kata per kalimat
  const rataKataPerKalimat = jumlahKalimat === 0 ? 0 : jumlahKata / jumlahKalimat;

  return {
    jumlahKarakter,
    jumlahKata,
    jumlahKalimat,
    kataFrekuensiTertinggi: kataTerbanyak,
    rataKataPerKalimat,
  };
}
const teksAnalisis = "Halo nama saya Drizzy. Saya sedang belajar JavaScript. JavaScript itu menyenangkan!";
console.log(analisisTeks(teksAnalisis));

// X4 — Sistem jadwal mingguan
// Data jadwal dalam format array of objects:
//   const jadwalKuliah = [
//     { hari: "Senin",  mata: "Matematika", jam: 8  },
//     { hari: "Senin",  mata: "Fisika",     jam: 10 },
//     { hari: "Selasa", mata: "Kimia",      jam: 9  },
//     { hari: "Rabu",   mata: "Matematika", jam: 13 },
//     { hari: "Kamis",  mata: "Fisika",     jam: 8  },
//     { hari: "Jumat",  mata: "Kimia",      jam: 11 },
//   ];
//
// Buat fungsi-fungsi berikut:
//   1) jadwalPerHari(daftarJadwal, hariDicari)
//      → return array jadwal untuk hari itu, diurutkan berdasarkan jam
//   2) hitungMataPelajaran(daftarJadwal)
//      → return object { mataPelajaran: jumlahPertemuan }
//   3) cariJamTerpadat(daftarJadwal)
//      → return jam yang paling sering muncul
//   4) tampilkanRangkumanMinggu(daftarJadwal)
//      → tampilkan rangkuman per hari secara berurutan
//
// Jalankan semua fungsi dan tampilkan hasilnya.
// TODO: tulis solusi di sini
const jadwalKuliah = [
  { hari: "Senin",  mata: "Matematika", jam: 8  },
  { hari: "Senin",  mata: "Fisika",     jam: 10 },
  { hari: "Selasa", mata: "Kimia",      jam: 9  },
  { hari: "Rabu",   mata: "Matematika", jam: 13 },
  { hari: "Kamis",  mata: "Fisika",     jam: 8  },
  { hari: "Jumat",  mata: "Kimia",      jam: 11 },
];
function jadwalPerHari(daftarJadwal, hariDicari) {
  return daftarJadwal
    .filter((jadwal) => jadwal.hari === hariDicari)
    .sort((a, b) => a.jam - b.jam);
}

function hitungMataPelajaran(daftarJadwal) {
  const mataPelajaran = {};
  daftarJadwal.forEach((jadwal) => {
    mataPelajaran[jadwal.mata] = (mataPelajaran[jadwal.mata] || 0) + 1;
  });
  return mataPelajaran;
}

function cariJamTerpadat(daftarJadwal) {
  const frekuensiJam = {};
  daftarJadwal.forEach((jadwal) => {
    frekuensiJam[jadwal.jam] = (frekuensiJam[jadwal.jam] || 0) + 1;
  });
  let jamTerpadat = null;
  let maxCount = 0;
  for (const [jam, count] of Object.entries(frekuensiJam)) {
    if (count > maxCount) {
      maxCount = count;
      jamTerpadat = Number(jam);
    }
  }
  return jamTerpadat;
}

function tampilkanRangkumanMinggu(daftarJadwal) {
  const urutanHari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  const perHari = {};
  daftarJadwal.forEach((jadwal) => {
    if (!perHari[jadwal.hari]) perHari[jadwal.hari] = [];
    perHari[jadwal.hari].push(jadwal);
  });
  console.log("--- RANGKUMAN MINGGU ---");
  urutanHari.forEach((hari) => {
    if (perHari[hari]) {
      const jadwalHariIni = perHari[hari].sort((a, b) => a.jam - b.jam);
      console.log(`${hari}:`);
      jadwalHariIni.forEach((j) => console.log(`  ${j.jam}.00 — ${j.mata}`));
    }
  });
}

console.log("Jadwal Senin:", jadwalPerHari(jadwalKuliah, "Senin"));
console.log("Hitung Mata Pelajaran:", hitungMataPelajaran(jadwalKuliah));
console.log("Jam Terpadat:", cariJamTerpadat(jadwalKuliah));
tampilkanRangkumanMinggu(jadwalKuliah);

// X5 — Mini game: tebak angka
function buatTebakanOtomatis(min, max) {
  const tebakan = [];
  let lo = min;
  let hi = max;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    tebakan.push(mid);
    // kita tidak tahu rahasiaAngka di sini, jadi simpan semua mid
    // simulasiTebakAngka akan pakai binary search secara internal
    lo = mid + 1; // worst case: simpan semua kemungkinan, nanti simulasi yang sesuaikan
  }
  return tebakan;
}

function simulasiTebakAngka(rahasiaAngka, min = 1, max = 100) {
  let lo = min;
  let hi = max;
  let percobaan = 0;
  while (lo <= hi) {
    const tebakan = Math.floor((lo + hi) / 2);
    percobaan++;
    if (tebakan === rahasiaAngka) {
      console.log(`Benar! Ditemukan di percobaan ke-${percobaan} (tebakan: ${tebakan})`);
      return;
    } else if (tebakan < rahasiaAngka) {
      console.log(`Terlalu kecil! ${tebakan}`);
      lo = tebakan + 1;
    } else {
      console.log(`Terlalu besar! ${tebakan}`);
      hi = tebakan - 1;
    }
  }
  console.log(`Gagal! Angka rahasia adalah ${rahasiaAngka}`);
}

console.log("\n--- MINI GAME: TEBAK ANGKA ---");
simulasiTebakAngka(73);
  
// ============================================================
// ✅ CHECKLIST
// ============================================================
// [ ] M1 — Konverter suhu selesai
// [ ] M2 — Cek ganjil/genap selesai
// [ ] M3 — Loop 1–10 selesai
// [ ] M4 — Fungsi sapaan selesai
// [ ] M5 — Penjumlahan array selesai
//
// [ ] T1 — Kalkulator diskon bertingkat selesai
// [ ] T2 — FizzBuzz versi toko selesai
// [ ] T3 — Statistik array selesai
// [ ] T4 — Validasi form login selesai
// [ ] T5 — Faktor bilangan selesai
//
// [ ] S1 — Nilai akademik lengkap selesai
// [ ] S2 — Caesar cipher selesai
// [ ] S3 — Angka ke kata selesai
// [ ] S4 — Kalkulator ekspresi selesai
// [ ] S5 — Tabel perkalian selesai
//
// [ ] X1 — Sistem inventori toko selesai
// [ ] X2 — Mesin state ATM selesai
// [ ] X3 — Analisis teks selesai
// [ ] X4 — Sistem jadwal mingguan selesai
// [ ] X5 — Mini game tebak angka selesai
