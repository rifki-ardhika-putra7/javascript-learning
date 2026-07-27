// ============================================================
// 📘 MATERI 04 - OPERATOR
// ============================================================

// ============================================================
// 🎯 TUJUAN PEMBELAJARAN
// ============================================================
// Setelah mempelajari materi ini, kamu akan mampu:
// 1. Memahami apa itu operator dan operand
// 2. Menggunakan operator aritmatika (+, -, *, /, %, **)
// 3. Menggunakan operator penugasan (=, +=, -=, *=, /=, %=)
// 4. Menggunakan operator perbandingan (==, ===, !=, !==, >, <, >=, <=)
// 5. Menggunakan operator logika dasar (&&, ||, !)
// 6. Memahami perbedaan == dan ===
// 7. Mengenali prioritas operator dan kesalahan umum

// ============================================================
// 📖 PENJELASAN KONSEP
// ============================================================

// APA ITU OPERATOR?
// -----------------
// Operator = simbol yang dipakai untuk melakukan operasi pada nilai.
// Nilai yang dioperasikan disebut operand.
//
// Contoh: 10 + 5
// - 10 dan 5 → operand
// - +        → operator
//
// Di materi sebelumnya kamu sudah pakai beberapa operator:
// - =  untuk memberi nilai ke variabel
// - +  untuk menjumlahkan angka atau menggabungkan string
// - *  untuk mengalikan
//
// Sekarang kita pelajari operator secara lebih lengkap dan rapi.

// MENGAPA OPERATOR PENTING?
// -------------------------
// Hampir semua program butuh menghitung, membandingkan, atau
// menggabungkan data. Tanpa operator, kamu tidak bisa:
// - hitung total belanja
// - cek apakah umur >= 17
// - kurangi stok setelah penjualan
// - gabungkan kondisi login (benar email DAN benar password)

// JENIS OPERATOR YANG DIPELAJARI DI MATERI INI
// --------------------------------------------
// 1. Aritmatika   → hitung angka
// 2. Penugasan    → isi / update nilai variabel
// 3. Perbandingan → hasilnya selalu boolean (true/false)
// 4. Logika       → gabungkan kondisi true/false
//
// Catatan: Ada operator lain (bitwise, ternary, dll.),
// tapi itu akan dipelajari di materi berikutnya.

// ============================================================
// 🔤 SINTAKS DAN ATURAN PENTING
// ============================================================

// 1. OPERATOR ARITMATIKA
//    +   penjumlahan
//    -   pengurangan
//    *   perkalian
//    /   pembagian
//    %   modulus (sisa bagi)
//    **  pangkat
//    ++  increment (tambah 1)
//    --  decrement (kurang 1)

// 2. OPERATOR PENUGASAN
//    =    isi nilai
//    +=   tambah lalu simpan   → x += 5 sama dengan x = x + 5
//    -=   kurang lalu simpan
//    *=   kali lalu simpan
//    /=   bagi lalu simpan
//    %=   sisa bagi lalu simpan

// 3. OPERATOR PERBANDINGAN (hasilnya boolean)
//    ==   sama nilai (loose equality)  ← hindari kalau bisa
//    ===  sama nilai DAN tipe (strict) ← direkomendasikan
//    !=   tidak sama nilai
//    !==  tidak sama nilai ATAU tipenya beda
//    >    lebih besar
//    <    lebih kecil
//    >=   lebih besar atau sama dengan
//    <=   lebih kecil atau sama dengan

// 4. OPERATOR LOGIKA
//    &&  AND → true hanya jika SEMUA kondisi true
//    ||  OR  → true jika SALAH SATU kondisi true
//    !   NOT → membalik true jadi false, false jadi true

// 5. PRIORITAS OPERATOR (yang dikerjakan lebih dulu)
//    Secara umum:
//    ()  →  **  →  * / %  →  + -  →  perbandingan  →  &&  →  ||  →  =
//    Kalau ragu, pakai tanda kurung () agar urutannya jelas.

// ============================================================
// 💡 CONTOH KODE SEDERHANA
// ============================================================

// --- ARITMATIKA ---
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1  (karena 10 ÷ 3 = 3 sisa 1)
console.log(a ** b); // 1000 (10 pangkat 3)

// Increment & Decrement
let skor = 0;
skor++;              // skor = skor + 1
console.log(skor);   // 1
skor--;              // skor = skor - 1
console.log(skor);   // 0

// --- PENUGASAN ---
let saldo = 100000;
saldo += 50000;      // saldo = saldo + 50000
console.log(saldo);  // 150000

saldo -= 25000;      // saldo = saldo - 25000
console.log(saldo);  // 125000

saldo *= 2;          // saldo = saldo * 2
console.log(saldo);  // 250000

// --- PERBANDINGAN ---
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false

console.log(5 == "5");   // true  ← nilai sama, tipe diabaikan
console.log(5 === "5");  // false ← nilai sama, tapi tipe beda
console.log(5 !== "5");  // true  ← tipenya beda
console.log(5 != "5");   // false ← nilai dianggap sama

// --- LOGIKA ---
let umur = 20;
let punyaKTP = true;

console.log(umur >= 17 && punyaKTP);  // true  (kedua kondisi benar)
console.log(umur >= 17 || punyaKTP);  // true  (salah satu benar sudah cukup)
console.log(!punyaKTP);               // false (kebalikan dari true)

// --- STRING + NUMBER ---
// Ingat dari materi 03: + dengan string akan MENGGABUNGKAN
console.log(10 + 5);     // 15   (number)
console.log("10" + 5);   // "105" (string)
console.log(10 + "5");   // "105" (string)
console.log("10" - 5);   // 5    (- mencoba ubah ke number)
console.log("10" * 2);   // 20   (* mencoba ubah ke number)

// --- PRIORITAS ---
console.log(2 + 3 * 4);    // 14  (kali dulu: 3*4=12, lalu 2+12)
console.log((2 + 3) * 4);  // 20  (kurung dulu: 2+3=5, lalu 5*4)

// ============================================================
// 🌍 CONTOH KASUS NYATA
// ============================================================

// Kasus: Kasir toko online menghitung total belanja + diskon

const NAMA_TOKO = "TokoJS";
const PAJAK = 0.11; // 11%

let hargaBarang = 100000;
let jumlahBeli = 3;
let diskonPersen = 10; // 10%

let subtotal = hargaBarang * jumlahBeli;
let jumlahDiskon = subtotal * (diskonPersen / 100);
let setelahDiskon = subtotal - jumlahDiskon;
let pajak = setelahDiskon * PAJAK;
let totalBayar = setelahDiskon + pajak;

let stok = 20;
stok -= jumlahBeli; // kurangi stok setelah terjual

let isLunas = true;
let isStokCukup = stok >= 0;
let bisaCheckout = isLunas && isStokCukup;

console.log("============================");
console.log("Toko       :", NAMA_TOKO);
console.log("Subtotal   :", subtotal);
console.log("Diskon     :", jumlahDiskon);
console.log("Pajak      :", pajak);
console.log("Total Bayar:", totalBayar);
console.log("Sisa Stok  :", stok);
console.log("Checkout?  :", bisaCheckout);
console.log("============================");

// ============================================================
// ✅ BEST PRACTICE
// ============================================================

// 1. UTAMAKAN === DARIPADA ==
//    ✅ if (umur === 17)
//    ❌ if (umur == 17)   // bisa lolos kasus aneh seperti 17 == "17"

// 2. PAKAI +=, -=, DLL. UNTUK UPDATE SINGKAT
//    ✅ saldo += 1000;
//    ❌ saldo = saldo + 1000;  // boleh, tapi lebih panjang

// 3. PAKAI TANDA KURUNG JIKA URUTAN BISA MEMBINGUNGKAN
//    ✅ let total = (harga + ongkir) * (1 - diskon);
//    ❌ let total = harga + ongkir * 1 - diskon; // mudah salah baca

// 4. SIMPAN HASIL PERBANDINGAN DI VARIABEL BERNAMA JELAS
//    ✅ let isDewasa = umur >= 17;
//    ✅ let bisaLogin = emailBenar && passwordBenar;
//    ❌ let x = umur >= 17; // kurang jelas

// 5. HATI-HATI + DENGAN STRING
//    Kalau mau hitung angka, pastikan tipenya number.
//    ✅ let total = Number(harga) + Number(ongkir);
//    atau pastikan dari awal tipenya number.

// 6. MODULUS (%) SANGAT BERGUNA
//    Cek genap/ganjil: angka % 2 === 0 → genap
//    Cek kelipatan: angka % 5 === 0 → kelipatan 5

// ============================================================
// ⚠️ KESALAHAN YANG SERING DILAKUKAN PEMULA
// ============================================================

// KESALAHAN 1: Bingung = dan ===
// ❌ if (umur = 17) { ... }   // ini ASSIGNMENT, bukan perbandingan!
// ✅ if (umur === 17) { ... }

// KESALAHAN 2: Pakai == sehingga tipenya diabaikan
//    console.log(0 == false);   // true  ← membingungkan
//    console.log(0 === false);  // false ← lebih jelas
// ✅ Selalu utamakan ===

// KESALAHAN 3: Lupa prioritas operator
// ❌ let hasil = 10 + 5 * 2; // expect 30, padahal 20
// ✅ let hasil = (10 + 5) * 2; // 30

// KESALAHAN 4: + menggabungkan string tanpa sadar
// ❌ let total = "10000" + 5000; // "100005000"
// ✅ let total = 10000 + 5000;   // 15000

// KESALAHAN 5: Salah paham modulus
//    10 % 3 → 1 (sisa), BUKAN hasil bagi
//    Hasil bagi → 10 / 3 → 3.333...

// KESALAHAN 6: Increment di tempat yang membingungkan
//    Ada perbedaan skor++ vs ++skor (dipelajari lebih dalam nanti).
//    Untuk pemula, tulis terpisah agar jelas:
// ✅ skor = skor + 1;
// ✅ skor += 1;
// ✅ skor++;

// KESALAHAN 7: Operator logika dibolak-balik
//    && = SEMUA harus true
//    || = CUKUP SATU yang true
//    Jangan tertukar saat membuat syarat login / checkout.

// ============================================================
// 📝 RINGKASAN MATERI
// ============================================================

// ✔ Operator = simbol untuk melakukan operasi pada nilai (operand)
// ✔ Aritmatika: + - * / % ** serta ++ --
// ✔ Penugasan: = += -= *= /= %=
// ✔ Perbandingan: hasilnya boolean; utamakan === daripada ==
// ✔ Logika: && (AND), || (OR), ! (NOT)
// ✔ + dengan string → menggabungkan, bukan menjumlahkan
// ✔ Pakai () jika ragu urutan perhitungan
// ✔ Nama variabel boolean yang jelas: isLunas, bisaCheckout, dll.

// ============================================================
// 🏋️ LATIHAN
// ============================================================
// Kerjakan latihan berikut di file terpisah atau di bawah ini.
// Jangan lihat jawaban dulu sebelum mencoba sendiri!

// --- MUDAH ---

// Latihan 1
// Buat dua variabel: angka1 = 15 dan angka2 = 4.
// Tampilkan hasil: penjumlahan, pengurangan, perkalian, dan pembagian.
let angka1 = 15;
let angka2 = 4;
let hasilPenjumlahan = angka1 + angka2;
let hasilPengurangan = angka1 - angka2;
let hasilKali = angka1 * angka2;
let hasilBagi = angka1 / angka2;
console.log(hasilPenjumlahan);
console.log(hasilPengurangan);
console.log(hasilKali);
console.log(hasilBagi);

// Latihan 2
// Hitung sisa bagi dari 17 % 5, lalu tampilkan hasilnya.
// Tulis komentar: apa arti hasil tersebut?
let sisaBagi = 17 % 5;
console.log(sisaBagi);

// Latihan 3
// Buat variabel poin = 10.
// Tambah 5 memakai +=, lalu tampilkan.
// Kurangi 3 memakai -=, lalu tampilkan lagi.
let point = 10;
point += 5;
console.log(point);
point -= 3;
console.log(point);

// Latihan 4
// Tampilkan hasil perbandingan berikut (tebak dulu, baru cek):
// 8 > 3 true
// 8 < 3 false
// 8 >= 8 true
// 8 === "8" false
// 8 == "8" true
console.log(8 > 3);
console.log(8 < 3);
console.log(8 >= 8);
console.log(8 === "8");
console.log(8 == "8");

// Latihan 5
// Buat variabel let hitung = 0.
// Naikkan nilainya 3 kali memakai ++ (satu per satu),
// lalu tampilkan nilai akhirnya.
let hitung = 0;
hitung++;
hitung++;
hitung++ ;
console.log(hitung);

// Latihan 6
// Hitung 2 ** 8 (2 pangkat 8) dan tampilkan hasilnya.
let hitung2 = 2 ** 8;
console.log(hitung2);
// --- SEDANG ---

// Latihan 7
// Buat kalkulator belanja:
// - harga = 25000
// - jumlah = 4
// Hitung total = harga * jumlah, lalu tampilkan:
// "Total belanja: ..."
let harga2 = 25000;
let jumlah2 = 4;
let total2 = harga2 * jumlah2;
console.log(total2);

// Latihan 8
// Buat variabel saldo = 200000.
// Simulasikan:
// - isi saldo +50000 (pakai +=)
// - belanja 75000 (pakai -=)
// Tampilkan saldo di setiap langkah.
let saldo2 = 200000;
saldo2 += 50000;
console.log("saldo anda : ", saldo2);
saldo2 -= 75000;
console.log("saldo anda : ", saldo2);

// Latihan 9
// Buat variabel umur = 18 dan punyaSIM = true.
// Buat variabel bolehMengemudi = umur >= 17 && punyaSIM.
// Tampilkan bolehMengemudi.
let umur2 = 18;
let punyaSim = true;
let bolehMengemudi = umur2 >= 17 && punyaSim;
console.log(bolehMengemudi);

// Latihan 10
// Tanpa menjalankan dulu, tebak hasilnya. Lalu verifikasi:
// console.log(10 + 2 * 5);
// console.log((10 + 2) * 5);
// console.log(10 % 4);
// console.log("5" + 3);
// console.log("5" - 3);
// Tulis tebakanmu di komentar sebelum console.log.
console.log(10 + 2 * 5);
console.log((10 + 2) * 5);
console.log(10 % 4);
console.log("5" + 3);
console.log("5" - 3);

// Latihan 11
// Cek bilangan genap/ganjil:
// let angka = 14;
// Tampilkan apakah genap dengan: angka % 2 === 0
// Lalu coba ganti angka jadi 15 dan lihat perbedaannya.
let angka3 = 14;
let genap = angka3 % 2 === 0;
console.log(genap); //14 = true, 15 = false
// --- SULIT ---

// Latihan 12
// Buat simulasi warung:
// - const HARGA_NASIGORENG = 15000
// - const HARGA_ES_TEH = 5000
// - let qtyNasi = 2
// - let qtyTeh = 3
// Hitung total, kasih diskon 10% jika total >= 40000,
// lalu tampilkan rincian: subtotal, diskon, total akhir.
const HARGA_NASIGORENG = 15000;
const HARGA_ES_TEH = 5000;
let qtyNasi = 2;
let qtyTeh = 3;
let total = (HARGA_NASIGORENG * qtyNasi) + (HARGA_ES_TEH * qtyTeh);
let diskon = 10;
let jumlahDiskon2;
if (total >= 40000) {
  jumlahDiskon2 = total * (10 / 100);
} else{
  jumlahDiskon2 = 0
};
let totalAkhir = total - jumlahDiskon2;
console.log(`nasi goreng dan teh anda Rp${total}`);
console.log(`anda mendapatkan diskon Rp${jumlahDiskon2}`);
console.log(`total belanja anda setelah diskon adalah ${totalAkhir}`);

// Latihan 13
// Buat sistem cek login sederhana (tanpa if dulu):
// - emailBenar = true
// - passwordBenar = false
// - isVerified = true
// Buat bisaMasuk = emailBenar && passwordBenar && isVerified
// Tampilkan bisaMasuk.
// Lalu perbaiki passwordBenar jadi true, hitung ulang, tampilkan lagi.
let emailBenar = true;
let passwordBenar = false;
let isVerified = true;
let bisaMasuk = emailBenar && passwordBenar && isVerified;
console.log(bisaMasuk);
passwordBenar = true;
let bisaMasuk2 = emailBenar && passwordBenar && isVerified;
console.log(bisaMasuk2);

// Latihan 14
// Buat "struk parkir":
// - jamMasuk = 8
// - jamKeluar = 13
// - TARIF_PER_JAM = 3000
// Hitung lamaParkir dan totalBayar.
// Tampilkan laporan rapi.
// Bonus: cek apakah lamaParkir > 4 (pakai perbandingan, hasil boolean).
let jamMasuk = 8;
let jamKeluar = 13;
const TARIF_PERJAM = 3000;
let lamaParkir = jamKeluar - jamMasuk;
let totalBayarParkir = lamaParkir * TARIF_PERJAM;
console.log(`=====================================`)
console.log(`Jam masuk parkir anda : ${jamMasuk}`);
console.log(`Jam keluar parkir anda : ${jamKeluar}`);
console.log(`Lama parkir anda : ${lamaParkir}`);
console.log(`Dengan tarif perjam parkir adalah Rp${TARIF_PERJAM}`);
console.log(`Maka total bayar parkir anda adalah : Rp${totalBayarParkir}`);
console.log(lamaParkir > 4);
console.log(`=====================================`)

// Latihan 15 (TANTANGAN)
// Buat "kalkulator nilai siswa" yang rapi:
//
// ========================================
//         KALKULATOR NILAI SISWA
// ========================================
// Matematika : 80
// Bahasa     : 90
// IPA        : 85
// ----------------------------------------
// Total      : ...
// Rata-rata  : ...
// Lulus?     : ...   ← true jika rata-rata >= 75
// Grade A?   : ...   ← true jika rata-rata >= 85
// ========================================
let matematika = 80;
let bahasa = 90;
let ipa = 85;
function tampilanNilai(judul) {
  let totalNilai = matematika + bahasa + ipa;
  let totalMapel = 3;
  let rataRata = totalNilai / totalMapel;
  let lulus = rataRata >= 75;
  let gradeA = rataRata >= 85;
  console.log(`====================================`);
  console.log(`     KALKULATOR NILAI ${judul}      `);
  console.log(`====================================`);
  console.log(`MATEMATIKA : ${matematika}`);
  console.log(`Bahasa     : ${bahasa}`);
  console.log(`IPA        : ${ipa}`);
  console.log(`------------------------------------`);
  console.log(`TOTAL      : ${totalNilai}`);
  console.log(`RATA RATA  : ${rataRata}`);
  console.log(`LULUS      : ${lulus}`);
  console.log(`GRADE A    : ${gradeA}`);
  console.log(`====================================`);
}
tampilanNilai(`Siswa A`)
// Aturan:
// 1. Semua nilai disimpan di variabel dulu.
// 2. Total dan rata-rata dihitung dengan operator (jangan hardcode).
// 3. Lulus? dan Grade A? harus hasil perbandingan (boolean).
// 4. Setelah laporan pertama, ubah nilai Matematika, hitung ulang,
//    lalu tampilkan laporan kedua.
