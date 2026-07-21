// // ============================================================
// // 📘 MATERI 05 - PERCABANGAN (IF / ELSE / SWITCH)
// // ============================================================

// // ============================================================
// // 🎯 TUJUAN PEMBELAJARAN
// // ============================================================
// // Setelah mempelajari materi ini, kamu akan mampu:
// // 1. Memahami apa itu percabangan dan kenapa dibutuhkan
// // 2. Menggunakan if, else if, dan else
// // 3. Menggabungkan kondisi dengan &&, ||, dan !
// // 4. Menggunakan switch untuk banyak pilihan tetap
// // 5. Memahami truthy dan falsy secara dasar
// // 6. Menghindari kesalahan umum pada percabangan

// // ============================================================
// // 📖 PENJELASAN KONSEP
// // ============================================================

// // APA ITU PERCABANGAN?
// // --------------------
// // Percabangan = cara program MEMILIH jalan berbeda
// // berdasarkan kondisi tertentu.
// //
// // Seperti di kehidupan nyata:
// // - Jika hujan → bawa payung
// // - Jika tidak → tidak perlu payung
// //
// // Di materi 04 kamu sudah bisa membuat kondisi boolean:
// //   umur >= 17 && punyaSIM  →  true / false
// //
// // Sekarang kondisi itu dipakai untuk MENJALANKAN kode tertentu.

// // MENGAPA PERCABANGAN PENTING?
// // ----------------------------
// // Tanpa percabangan, program selalu jalan lurus baris per baris.
// // Dengan percabangan, program bisa:
// // - cek login berhasil / gagal
// // - kasih diskon hanya jika total >= 40000
// // - tampilkan "Lulus" atau "Tidak Lulus"
// // - arahkan user sesuai role (admin / member / guest)

// // BENTUK PERCABANGAN DI JAVASCRIPT
// // --------------------------------
// // 1. if            → jalankan jika kondisi true
// // 2. if ... else   → dua pilihan
// // 3. if ... else if ... else → banyak pilihan bertingkat
// // 4. switch        → banyak pilihan berdasarkan nilai tetap
// //
// // Catatan: Operator ternary (? :) akan dipelajari lebih dalam nanti.

// // ============================================================
// // 🔤 SINTAKS DAN ATURAN PENTING
// // ============================================================

// // 1. IF SEDERHANA
// //    if (kondisi) {
// //      // dijalankan jika kondisi true
// //    }

// // 2. IF ... ELSE
// //    if (kondisi) {
// //      // jika true
// //    } else {
// //      // jika false
// //    }

// // 3. IF ... ELSE IF ... ELSE
// //    if (kondisi1) {
// //      // jika kondisi1 true
// //    } else if (kondisi2) {
// //      // jika kondisi1 false, tapi kondisi2 true
// //    } else {
// //      // jika semua di atas false
// //    }

// // 4. SWITCH
// //    switch (nilai) {
// //      case "A":
// //        // kode
// //        break;
// //      case "B":
// //        // kode
// //        break;
// //      default:
// //        // jika tidak ada yang cocok
// //    }

// // 5. BLOK KURUNG KURAWAL {}
// //    Sangat disarankan SELALU pakai {}, meski isinya 1 baris.
// //    Supaya aman dan mudah dibaca.

// // 6. TRUTHY & FALSY (pengenalan)
// //    Di dalam if (nilai), JavaScript menilai nilai sebagai true/false.
// //    Falsy (dianggap false): false, 0, "", null, undefined, NaN
// //    Selain itu biasanya truthy (dianggap true), termasuk "0" dan "false".

// // ============================================================
// // 💡 CONTOH KODE SEDERHANA
// // ============================================================

// // --- IF SEDERHANA ---
// let umur = 20;

// if (umur >= 17) {
//   console.log("Sudah cukup umur");
// }

// // --- IF ... ELSE ---
// let stok = 0;

// if (stok > 0) {
//   console.log("Barang tersedia");
// } else {
//   console.log("Stok habis");
// }

// // --- IF ... ELSE IF ... ELSE ---
// let nilai = 82;

// if (nilai >= 85) {
//   console.log("Grade A");
// } else if (nilai >= 75) {
//   console.log("Grade B");
// } else if (nilai >= 65) {
//   console.log("Grade C");
// } else {
//   console.log("Grade D");
// }

// // --- GABUNGAN KONDISI ---
// let emailBenar = true;
// let passwordBenar = true;

// if (emailBenar && passwordBenar) {
//   console.log("Login berhasil");
// } else {
//   console.log("Login gagal");
// }

// // --- SWITCH ---
// let hari = "Senin";

// switch (hari) {
//   case "Senin":
//     console.log("Hari kerja");
//     break;
//   case "Sabtu":
//   case "Minggu":
//     console.log("Akhir pekan");
//     break;
//   default:
//     console.log("Hari tidak dikenal");
// }

// // --- TRUTHY / FALSY SEKILAS ---
// let nama = "";

// if (nama) {
//   console.log("Nama terisi");
// } else {
//   console.log("Nama masih kosong"); // ini yang jalan, karena "" falsy
// }

// // ============================================================
// // 🌍 CONTOH KASUS NYATA
// // ============================================================

// // Kasus: Sistem tiket bioskop + diskon

// const HARGA_TIKET = 50000;
// let usiaPenonton = 15;
// let isMember = true;
// let jumlahTiket = 2;

// let total = HARGA_TIKET * jumlahTiket;
// let kategori = "";
// let diskon = 0;

// if (usiaPenonton < 12) {
//   kategori = "Anak";
//   diskon = 0.2; // 20%
// } else if (usiaPenonton < 18) {
//   kategori = "Remaja";
//   diskon = 0.1; // 10%
// } else {
//   kategori = "Dewasa";
//   diskon = 0;
// }

// // Member dapat tambahan diskon 5%
// if (isMember) {
//   diskon += 0.05;
// }

// let jumlahDiskon = total * diskon;
// let totalBayar = total - jumlahDiskon;

// console.log("============================");
// console.log("Kategori   :", kategori);
// console.log("Subtotal   :", total);
// console.log("Diskon     :", jumlahDiskon);
// console.log("Total Bayar:", totalBayar);
// console.log("============================");

// // Cek boleh masuk studio 18+
// if (usiaPenonton >= 18) {
//   console.log("Boleh masuk studio 18+");
// } else {
//   console.log("Belum boleh masuk studio 18+");
// }

// // ============================================================
// // ✅ BEST PRACTICE
// // ============================================================

// // 1. SELALU PAKAI {} MESKI 1 BARIS
// //    ✅ if (lulus) { console.log("Selamat"); }
// //    ❌ if (lulus) console.log("Selamat");

// // 2. KONDISI HARUS JELAS (BOOLEAN YANG BERARTI)
// //    ✅ if (umur >= 17)
// //    ✅ if (isMember)
// //    ❌ if (umur = 17)  // assignment, bukan perbandingan!

// // 3. URUTKAN else if DARI YANG PALING SPESIFIK / KETAT
// //    ✅ nilai >= 85 dulu, baru >= 75, baru >= 65
// //    ❌ nilai >= 65 dulu → grade tinggi tidak pernah kebaca

// // 4. PAKAI switch UNTUK PILIHAN TETAP YANG BANYAK
// //    Cocok: menu, hari, status ("pending"|"paid"|"shipped")
// //    Kurang cocok: rentang angka (lebih enak if/else if)

// // 5. JANGAN LUPA break DI switch
// //    Tanpa break, case berikutnya ikut jalan (fall-through).

// // 6. NAMAI VARIABEL KONDISI DENGAN JELAS
// //    ✅ let isLulus = rataRata >= 75;
// //       if (isLulus) { ... }
// //    Agar if-nya mudah dibaca.

// // ============================================================
// // ⚠️ KESALAHAN YANG SERING DILAKUKAN PEMULA
// // ============================================================

// // KESALAHAN 1: Pakai = di dalam if
// // ❌ if (umur = 17) { ... }   // ini mengisi umur, hampir selalu "true"
// // ✅ if (umur === 17) { ... }

// // KESALAHAN 2: Urutan else if salah
// // ❌ if (nilai >= 65) { "C" }
// //    else if (nilai >= 85) { "A" }  // tidak pernah tercapai untuk nilai tinggi
// // ✅ mulai dari kondisi paling tinggi/ketat

// // KESALAHAN 3: Lupa break di switch
// // ❌ case "A":
// //      console.log("Bagus");
// //    case "B":
// //      console.log("Baik"); // ikut jalan tanpa break
// // ✅ tambahkan break; setelah tiap case (kecuali sengaja fall-through)

// // KESALAHAN 4: Membandingkan string dengan number tanpa sadar
// //    "18" >= 17 bisa true karena konversi otomatis,
// //    tapi lebih aman pastikan tipenya number sejak awal.

// // KESALAHAN 5: Mengira "false" (string) sama dengan false
// //    if ("false") { ... } → tetap jalan, karena string non-kosong = truthy
// // ✅ pakai boolean sungguhan: false / true

// // KESALAHAN 6: Terlalu banyak if terpisah padahal seharusnya else if
// //    if terpisah = semua bisa jalan.
// //    else if = saling eksklusif (satu cabang saja).

// // ============================================================
// // 📝 RINGKASAN MATERI
// // ============================================================

// // ✔ Percabangan membuat program memilih jalur berdasarkan kondisi
// // ✔ if / else if / else untuk cabang bertingkat
// // ✔ switch cocok untuk banyak pilihan nilai tetap
// // ✔ Kondisi memakai operator perbandingan & logika dari materi 04
// // ✔ Selalu pakai === dan kurung kurawal {}
// // ✔ Falsy: false, 0, "", null, undefined, NaN
// // ✔ Jangan lupa break di switch

// ============================================================
// 🏋️ LATIHAN
// ============================================================
// Kerjakan latihan berikut di file terpisah atau di bawah ini.
// Jangan lihat jawaban dulu sebelum mencoba sendiri!

// --- MUDAH ---

// Latihan 1
// Buat variabel umur = 16.
// Jika umur >= 17 tampilkan "Dewasa", jika tidak tampilkan "Belum dewasa".
let umur = 16;
if (umur >= 17) {
  console.log("Dewasa");
} else {
  console.log("Belum dewasa")
};

// Latihan 2
// Buat variabel stok = 5.
// Jika stok > 0 tampilkan "Tersedia", else tampilkan "Habis".
let stok = 5;
if (stok > 0) {
  console.log("Tersedia");
} else {
  console.log("Habis");
};

// Latihan 3
// Buat variabel nilai = 70.
// Tampilkan "Lulus" jika nilai >= 75, selain itu "Tidak lulus".
let nilai = 70;
if (nilai >= 75) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
};
// Latihan 4
// Buat variabel cuaca = "hujan".
// Jika cuaca === "hujan" tampilkan "Bawa payung".
// Else tampilkan "Tidak perlu payung".
let cuaca = "hujan";
if (cuaca === "hujan") {
  console.log(`hari sedang ${cuaca}, bawa payung`);
} else {
  console.log(`ga perlu bawa payung`);
}

// Latihan 5
// Buat variabel angka = 9.
// Tampilkan "Genap" atau "Ganjil" memakai % 2.
let angka = 9;
if (angka % 2 === 0) {
  console.log("Genap");
} else {
  console.log("Ganjil");
}

// Latihan 6
// Buat variabel isLogin = false.
// Jika isLogin tampilkan "Selamat datang", else "Silakan login".
let isLogin = false;
if (isLogin) {
  console.log("Selamat Datang");
} else {
  console.log("Silahkan Login");
}

// --- SEDANG ---

// Latihan 7
// Buat grade nilai:
// >= 85 → A
// >= 75 → B
// >= 65 → C
// selain itu → D
// Uji dengan nilai 90, 80, 70, dan 50.
function hitungGrade(siswa, nilai) {
  console.log(siswa);
    if (nilai >= 85) {
    console.log("A")
  } else if (nilai >= 75) {
    console.log("B")
  } else if (nilai >= 65) {
    console.log("C")
  } else {
    console.log("D")
    }
}
hitungGrade("Siswa A");
nilai = 60
hitungGrade("Siswa B")

// Latihan 8
// Buat cek diskon belanja:
// totalBelanja >= 100000 → diskon 20%
// totalBelanja >= 50000  → diskon 10%
// selain itu → diskon 0
// Tampilkan subtotal, diskon (rupiah), dan total akhir.
// Contoh totalBelanja = 80000.
let totalBelanja = 80000;
function hitungDiskon(customer) {
  console.log(`customer ${customer}`)
  let totalDiskon;
if (totalBelanja >= 100000) {
  totalDiskon = totalBelanja * (20 / 100);
} else if (totalBelanja >= 50000) {
  totalDiskon = totalBelanja * (10 / 100);
} else {
  totalDiskon = 0;
}
let totalAkhir = totalBelanja - totalDiskon;
console.log(`Total Belanja : Rp${totalBelanja}, Anda mendapakan diskon Rp${totalDiskon}, jadi total belanja ada Rp${totalAkhir}`)
}
hitungDiskon("A");
totalBelanja = 150000;
hitungDiskon("B");

// Latihan 9
// Buat cek login:
// emailBenar dan passwordBenar.
// Jika keduanya true → "Berhasil".
// Jika email salah → "Email salah".
// Jika email benar tapi password salah → "Password salah".
function login(user, emailBenar, passwordBenar) {
  if (emailBenar && passwordBenar) {
    console.log("Berhasil Login");
  } else if(!emailBenar && passwordBenar){
    console.log("Email salah");
  } else if (emailBenar && !passwordBenar) {
    console.log("Password salah");
  } else {
    console.log("Silahkan register");
  };
};
login("A", true, true);
login("B", true, false);
login("C", false, true);
login("D", false, false);
// Latihan 10
// Buat switch untuk role user:
// "admin"  → "Akses penuh"
// "editor" → "Bisa edit konten"
// "viewer" → "Hanya bisa lihat"
// default  → "Role tidak dikenal"
let user = "viewer";
switch (user) {
  case "admin":
    console.log("akses Penuh");
    break;
  case "editor":
    console.log("Bisa Edit Konten");
    break;
  case "viewer":
    console.log("Hanya bisa lihat")
    break;
  default:
    console.log("Role tidak dikenal")
};

// Latihan 11
// Buat variabel jam = 14 (format 0–23).
// Tampilkan:
// 5–11  → Pagi
// 12–14 → Siang
// 15–17 → Sore
// 18–4  → Malam
// (Petunjuk: malam bisa pakai || )
let jam = 20;
switch (true) {
  case (jam >= 5 && jam <= 11):
    console.log("Pagi");
    break;
  case (jam >= 12 && jam <= 14):
    console.log("Siang");
    break;
  case (jam >= 15 && jam <= 17):
    console.log("Sore")
    break;
  case (jam >= 18 || jam <= 4):
    console.log("Malam")
    break;
}

// --- SULIT ---
// Latihan 12
// Buat sistem tiket bioskop:
// - usia
// - isMember (boolean)
// Aturan harga dasar 50000:
// - usia < 12 → diskon 25%
// - usia < 18 → diskon 10%
// - dewasa → tanpa diskon usia
// Jika member, tambah diskon 5%.
// Tampilkan kategori, persen diskon total, dan harga akhir.
function tiketBioskop(customer, usia, isMember) {
  console.log(`\n=== Tiket Customer ${customer} ===`);
  let hargaDasar = 50000;
  let totalPersenDiskon = 0;
  let kategori = "";
  if (usia < 12) {
    kategori = "Anak-anak";
    totalPersenDiskon += 25;
  } else if (usia < 18) {
    kategori = "Remaja";
    totalPersenDiskon += 10;
  } else {
    kategori = "Dewasa";
    totalPersenDiskon += 0;
  }
  if (isMember) {
    totalPersenDiskon += 5;
  }
  let nominalDiskon = hargaDasar * (totalPersenDiskon / 100);
  let hargaAkhir = hargaDasar - nominalDiskon;
  console.log(`Kategori       : ${kategori} (${usia} tahun)`);
  console.log(`Total Diskon   : ${totalPersenDiskon}%`);
  console.log(`Harga Akhir    : Rp${hargaAkhir}`);
  console.log(`==========================`);
}
tiketBioskop("A", 10, true);  // Anak-anak, member
tiketBioskop("B", 16, false); // Remaja, bukan member
tiketBioskop("C", 25, true);  // Dewasa, member
// Latihan 13
// Buat "mesin ATM sederhana" (tanpa loop):
// - saldos = 500000
// - pinBenar = true
// - jumlahTarik = 200000
// Alur:
// 1) Jika pin salah → "PIN salah"
// 2) Jika jumlahTarik > saldo → "Saldo tidak cukup"
// 3) Jika valid → kurangi saldo, tampilkan "Berhasil" + sisa saldo
function atm(customer, saldo, pinBenar, jumlahTarik) {
  console.log(`Selamat datang di ATM Cutomer ${customer}`);
  let sisaSaldo;
  if (pinBenar) {
    console.log("PIN anda benar")
    if (jumlahTarik < saldo) {
      sisaSaldo = saldo - jumlahTarik;
      console.log(`Penarikan Rp${jumlahTarik} berhasil sisa saldo Rp${sisaSaldo}`);
    } else {
      console.log(`Saldo tidak cukup, jumlah saldo anda Rp${saldo}`);
    }
  }
  else{
    console.log("PIN anda salah")
  }
}
atm("A", 100000, false, 50000);
atm("B", 100000, true, 50000);
atm("C", 100000, true, 150000);
// Latihan 14
// Buat penilaian karyawan dengan switch pada status:
// status bisa: "excellent" | "good" | "average" | "poor"
// Tampilkan pesan bonus yang berbeda tiap status.
// Lalu buat juga versi if/else if untuk status yang sama.
// Tulis komentar: kapan switch lebih enak dipakai?
function penilaianKaryawan(karyawan, absen) {
  let status;
  let bonus;
  switch (true) {
    case (absen <= 5):
      status = "Excellent";
      bonus = 1000000
      break;
    case (absen >= 6 && absen <= 10):
      status = "Good";
      bonus = 500000;
      break;
    case (absen >= 11 && absen <= 15):
      status = "Averagge";
      bonus = 250000;
      break;
    default:
      status = "Poor";
      bonus = 0;
  }
  console.log(`Karyawan ${karyawan}, dengan status ${status}, mendapatkan bonus Rp${bonus}`);
}
penilaianKaryawan("A", 0);

function penilaianKaryawanIfElse(karyawan, absen) {
  let status;
  let bonus;
  if (absen <= 5) {
    status = "Excellent";
    bonus = 1000000;
  } else if (absen >= 6 && absen <= 10) {
    status = "Good";
    bonus = 500000;
  } else if (absen >= 11 && absen <= 15) {
    status = "Average";
    bonus = 250000;
  } else {
    status = "Poor";
    bonus = 0;
  }
  console.log(`Karyawan ${karyawan}, dengan status ${status}, mendapatkan bonus Rp${bonus}`);
}
penilaianKaryawanIfElse("A", 0);
/*
KAPAN SWITCH CASE LEBIH ENAK DIPAKAI?
1. Nilai Pasti (Exact Value):
   Paling cocok untuk mencocokkan satu nilai spesifik, bukan rentang (kondisi > atau <).
   Contoh: switch(hari) -> case "Senin", case "Selasa".
2. Pilihan yang Banyak (Menu / Menu Pilihan):
   Saat ada banyak opsi tetap (misal pilihan menu 1 sampai 10),
   struktur switch terlihat lebih rapi dibanding if-else yang panjang dan berundak-undak.
3. Fitur Fall-Through (Menghilangkan Break secara Sengaja):
   Saat beberapa kondisi menghasilkan output yang sama persis.
   Contoh: case "Sabtu": case "Minggu": console.log("Hari Libur");
Catatan Kasus Anda:
Untuk kasus "rentang angka" (seperti absen <= 5), format "if/else if" sebenarnya
jauh lebih lazim, alami, dan minim risiko bug dibanding menggunakan "switch (true)".
*/

// Latihan 15 (TANTANGAN)
// Buat "sistem pendaftaran kursus" yang rapi:
//
// Data:
// - nama
// - umur
// - nilaiTes
// - sudahBayar (boolean)
//
// Aturan kelulusan berkas:
// 1) umur harus >= 15
// 2) nilaiTes harus >= 70
// 3) sudahBayar harus true
//
// Output laporan:
// ========================================
//      HASIL PENDAFTARAN KURSUS
// ========================================
// Nama        : ...
// Umur        : ...
// Nilai Tes   : ...
// Sudah Bayar : ...
// ----------------------------------------
// Status Umur : LOLOS / GAGAL
// Status Nilai: LOLOS / GAGAL
// Status Bayar: LOLOS / GAGAL
// ----------------------------------------
// Keputusan   : DITERIMA / DITOLAK
// Alasan      : ...   ← jelaskan syarat mana yang gagal (jika ditolak)
// ========================================
//
// Aturan tambahan:
// - Keputusan DITERIMA hanya jika SEMUA status LOLOS.
// - Jika ditolak, Alasan harus spesifik (boleh gabungan).
// - Uji minimal 2 kasus: 1 diterima, 1 ditolak.
function sistemPendaftaran(nama, umur, nilaiTes, sudahBayar) {
  let statusUmur;
  let statusNilai;
  let statusBayar;
  let keputusan;
  let alasan
  if (umur >= 15) {
    statusUmur = "LOLOS";
  } else {
    statusUmur = "GAGAl";
  };
  if (nilaiTes >= 70) {
    statusNilai = "LOLOS";
  } else {
    statusNilai = "GAGAL";
  };
  if (sudahBayar) {
    statusBayar = "LOLOS";
  } else {
    statusBayar = "GAGAL";
  }
  if (statusUmur === "LOLOS" && statusNilai === "LOLOS" && statusBayar === "LOLOS") {
    keputusan = "DITERIMA";
  } else if (statusUmur === "GAGAL" && statusNilai === "LOLOS" && statusBayar === "LOLOS") {
    keputusan = "DITOLAK"
    alasan = "Anda dibawah umur";
  } else if (statusUmur === "LOLOS" && statusNilai === "GAGAL" && statusBayar === "LOLOS") {
    keputusan = "DITOLAK"
    alasan = "Nilai anda di bawah rata rata";
  } else if (statusUmur === "LOLOS" && statusNilai === "LOLOS" && statusBayar === "GAGAL") {
    keputusan = "DITOLAK"
    alasan = "Anda belum membayar";
  } else {
    keputusan = "DITOLAK"
    alasan = "Anda tidak menyelesaikan syarat sama sekali";
  };
  console.log("=======================================");
  console.log("       HASIL PENDAFTARAN KURSUS        ");
  console.log("=======================================");
  console.log(`Nama                 : ${nama}`);
  console.log(`Umur                 : ${umur}`);
  console.log(`Nilai Tes            : ${nilaiTes}`);
  console.log(`Sudah bayar          : ${sudahBayar}`);
  console.log("=======================================");
  console.log(`Status umur            : ${statusUmur}`);
  console.log(`Status nilai           : ${statusNilai}`);
  console.log(`Status bayar           : ${statusBayar}`);
  console.log("=======================================");
  console.log(`Keputusan              : ${keputusan}`);
  console.log(`Alasan                 : ${alasan}`);
  console.log("=======================================");
  // ========================================
  // Nama        : ...
  // Umur        : ...
  // Nilai Tes   : ...
  // Sudah Bayar : ...
  // ----------------------------------------
  // Status Umur : LOLOS / GAGAL
  // Status Nilai: LOLOS / GAGAL
  // Status Bayar: LOLOS / GAGAL
  // ----------------------------------------
  // Keputusan   : DITERIMA / DITOLAK
  // Alasan      : ...   ← jelaskan syarat mana yang gagal (jika ditolak)
  // ========================================
}
sistemPendaftaran("kay", 21, 90, false);
