# Challenge Fase 2 — JavaScript (Lagi Jalan Sekarang)

> Status: **on progress**. Loop udah 8/8 TODO bener — mantap, artinya dasar udah solid.
> File ini fokus ke materi JS yang lagi dipelajari: variabel & tipe data, logika, perulangan, fungsi & switch, array.
> Cara pakai: bikin 1 file `script.js`, jalankan pakai Node (`node script.js`) atau lewat browser console/file HTML kosong yang nge-link ke script ini. Kerjain urut dari Bagian 1.

---

## Bagian 1 — Variabel, Tipe Data, `typeof`, Template Literal

**Goal:** mastiin fondasi paling dasar — kalau ini goyang, semua di atasnya ikut goyang.

### TODO
- [ ] Deklarasi 1 variabel pakai `const` untuk data yang gak akan berubah (misal `namaLengkap`)
- [ ] Deklarasi minimal 3 variabel pakai `let` dengan tipe data berbeda: 1 `string`, 1 `number`, 1 `boolean`
- [ ] Cetak tipe dari masing-masing variabel di atas pakai `typeof` dan `console.log`
- [ ] Buat 1 variabel `umur` (number), lalu buat 1 kalimat perkenalan pakai **template literal** (backtick + `${}`) yang menggabungkan `namaLengkap` dan `umur` — JANGAN pakai `+` concatenation
- [ ] Coba deklarasi ulang variabel yang sama pakai `const` (harus error) — tulis komentar di kode: kenapa itu error, jelasin pakai kata-kata sendiri
- [ ] Bikin 1 variabel tanpa nilai awal (`let statusLogin;`), cetak nilainya — harus paham kenapa hasilnya `undefined`, bukan error

---

## Bagian 2 — Logika: `if/else`, Operator Perbandingan, `&&` / `||`

**Goal:** dari sekadar tahu syntax ke bisa mikir kondisi bertingkat.

### TODO
- [ ] Buat variabel `nilaiUjian` (number), lalu `if/else if/else` yang mengubahnya jadi grade huruf: `>= 90` → "A", `>= 80` → "B", `>= 70` → "C", selain itu → "D"
- [ ] Buat 2 variabel: `punyaKTP` (boolean) dan `umur` (number). Pakai `&&` untuk cek "boleh bikin SIM" HANYA jika `umur >= 17` DAN `punyaKTP` bernilai `true`
- [ ] Buat kondisi pakai `||`: cek "libur hari ini" jika hari adalah `"Sabtu"` ATAU `"Minggu"`
- [ ] Bikin 1 kondisi yang menggabungkan `&&` dan `||` sekaligus dalam satu `if` (contoh kasus: diskon berlaku jika (`member === true` DAN `totalBelanja > 100000`) ATAU `hariIni === "Jumat"`) — tulis komentar penjelasan logikanya
- [ ] Latihan operator perbandingan: bandingin `5 == "5"` vs `5 === "5"`, cetak hasil keduanya, jelasin di komentar kenapa hasilnya beda (bedanya loose vs strict equality)

---

## Bagian 3 — Perulangan: `for`, `while`, `break` & `continue`

> Materi ini elo udah 8/8 TODO latihan sebelumnya. Bagian ini buat **naikin level**, bukan ulang yang sama.

### TODO
- [ ] `for` loop mencetak angka 1–20, TAPI skip semua kelipatan 3 (pakai `continue`)
- [ ] `for` loop mencetak angka 1–100, langsung berhenti total (`break`) begitu ketemu angka pertama yang habis dibagi 7 DAN habis dibagi 3 sekaligus — cetak angka berapa yang bikin loop berhenti
- [ ] `while` loop: simulasi "baterai HP" mulai dari 100, berkurang 7 tiap detik (pakai `console.log` tiap iterasi), berhenti otomatis saat baterai `<= 0`
- [ ] Nested loop (loop di dalam loop): cetak pola segitiga bintang sederhana, contoh untuk tinggi 5:
  ```
  *
  **
  ***
  ****
  *****
  ```
- [ ] Gabungan `for` + `if` + `continue` + `break`: loop dari 1–50, skip angka ganjil (`continue`), tapi berhenti total begitu total angka genap yang udah dicetak mencapai 10 (`break`)

---

## Bagian 4 — Fungsi, `switch`, `return` vs `console.log`

**Goal:** paham beda fundamental fungsi yang "mengembalikan nilai" vs yang "cuma nampilin".

### TODO
- [ ] Buat function declaration `hitungLuasPersegiPanjang(panjang, lebar)` yang pakai `return` (bukan `console.log` di dalamnya) — lalu simpan hasilnya ke variabel baru dan baru di-`console.log` dari luar
- [ ] Buat 1 fungsi lain versi salah dengan sengaja: isinya cuma `console.log(hasil)` tanpa `return`. Coba simpan return value-nya ke variabel, cetak variabel itu — harus dapet `undefined`. Tulis komentar: jelasin kenapa itu terjadi, apa bedanya dari fungsi pertama
- [ ] Buat function `cekHariKerja(hari)` pakai `switch` — jika hari `"Sabtu"` atau `"Minggu"` return `"Libur"`, selain itu return `"Kerja"` (harus paham cara `case` bisa "jatuh" ke case lain tanpa `break` untuk kasus Sabtu/Minggu digabung)
- [ ] Buat 1 **arrow function** yang melakukan hal sama seperti salah satu function di atas (refactor salah satu function declaration jadi arrow function) — bandingin syntax-nya
- [ ] Buat function `konversiSuhu(celsius)` yang return object berisi hasil konversi ke Fahrenheit DAN Kelvin sekaligus (`return { fahrenheit: ..., kelvin: ... }`), lalu ambil masing-masing nilainya dari luar function

---

## Bagian 5 — Array: Akses, Method, Looping & Pencarian

**Goal:** array adalah struktur data paling sering dipakai — harus lancar bolak-balik.

### TODO
- [ ] Buat array `daftarBuah` isi minimal 6 nama buah (string)
- [ ] Akses elemen pertama dan elemen terakhir TANPA hardcode angka index terakhir (gunakan `array.length - 1`)
- [ ] Tambah 1 buah baru di akhir array (`push`) dan 1 buah baru di awal array (`unshift`)
- [ ] Hapus buah terakhir (`pop`) dan buah pertama (`shift`) — cetak array setelah tiap operasi biar keliatan perubahannya
- [ ] Loop seluruh array pakai `for` biasa DAN pakai `for...of` — bandingin, cetak hasilnya sama
- [ ] Cari 1 buah spesifik pakai `indexOf` (harus tau posisinya)
- [ ] Cek apakah 1 buah tertentu ada di dalam array pakai `includes` (return boolean)
- [ ] Pakai `filter` untuk dapetin array baru berisi hanya buah yang nama-nya lebih dari 5 huruf
- [ ] Pakai `map` untuk bikin array baru berisi semua nama buah dalam huruf besar semua (`toUpperCase`)
- [ ] Pakai `find` untuk nemuin buah pertama yang namanya diawali huruf tertentu (misal huruf "M" atau huruf lain sesuai isi array elo)
- [ ] Gabungin array jadi 1 string dipisah koma pakai `join`

---

## Bagian 6 — CHALLENGE REVIEW FUNDAMENTAL JS (Final Boss Fase 2 bagian awal)

**Goal:** gabungin SEMUA (variabel, kondisi, loop, fungsi, array) dalam 1 studi kasus nyata. Ini yang paling penting — kalau bagian ini lancar tanpa buka-buka Bagian 1–5, artinya fondasi JS beneran udah nempel.

### Studi Kasus: Sistem Sederhana "Cek Kelulusan & Rekap Nilai Kelas"

Buat function-function berikut dalam 1 file, lalu panggil semuanya di bagian bawah file sebagai demo:

- [ ] Buat array of object `siswa`, isinya minimal 5 siswa, tiap object punya `nama` (string) dan `nilai` (number, 0–100)
- [ ] Fungsi `tentukanGrade(nilai)` — pakai `if/else` ATAU `switch` (pilih salah satu, jelasin di komentar kenapa milih itu untuk kasus ini) — return grade huruf (A/B/C/D) sesuai aturan Bagian 2
- [ ] Fungsi `cekLulus(nilai)` — `return` boolean, `true` jika `nilai >= 70`
- [ ] Fungsi `prosesRekapKelas(daftarSiswa)` yang:
  - [ ] Loop semua siswa (pakai `for` atau `for...of`, bebas)
  - [ ] Untuk tiap siswa, panggil `tentukanGrade` dan `cekLulus`, gabungin hasilnya ke object siswa itu (tambahin properti baru `grade` dan `lulus`)
  - [ ] Selama loop, pakai `continue` untuk **skip** siswa yang nilainya tidak valid (misal nilai kurang dari 0 atau lebih dari 100) — cetak peringatan untuk siswa yang di-skip
  - [ ] Return array baru berisi semua siswa yang sudah diproses (sudah punya `grade` dan `lulus`)
- [ ] Setelah dapet hasil rekap, pakai method array untuk:
  - [ ] `filter` siswa yang `lulus === true` → simpan ke `siswaLulus`
  - [ ] `filter` siswa yang `lulus === false` → simpan ke `siswaTidakLulus`
  - [ ] `map` dari `siswaLulus` untuk dapetin array berisi nama-namanya doang
  - [ ] Hitung nilai rata-rata seluruh kelas (boleh pakai loop manual atau `reduce` kalau udah familiar, kalau belum pakai loop biasa gapapa)
- [ ] Cetak laporan akhir ke console dengan format rapi pakai template literal, minimal berisi:
  - [ ] Total siswa lulus vs tidak lulus
  - [ ] Nama-nama siswa yang lulus
  - [ ] Nilai rata-rata kelas
  - [ ] Siswa dengan nilai tertinggi (boleh cari manual pakai loop, atau pakai kombinasi `sort`)

### Kriteria "Lulus" Challenge Review Ini
- [ ] Kode jalan tanpa error dari atas sampai bawah
- [ ] Semua 5 topik (variabel, kondisi, loop, fungsi, array) kepake, bukan cuma sebagian
- [ ] Bisa jelasin ulang tiap function ngapain, tanpa liat kode (coba tutup file, jelasin ke diri sendiri atau ke orang lain)
- [ ] Coba ubah salah satu data siswa jadi nilai gak valid (misal 150), pastikan sistem skip dengan benar tanpa nge-crash

---

## Cara Pakai File Ini
1. Kerjain Bagian 1 → 6 berurutan, jangan loncat.
2. Tiap function/latihan, test langsung jalanin (`node script.js` di terminal) — jangan cuma nulis tanpa run.
3. Kalau ada bagian yang berasa "yakin bisa tapi belum coba", itu tandanya WAJIB dicoba dulu, bukan di-skip.
4. Bagian 6 adalah tolok ukur utama: kalau itu kelar mulus, Fase 2 bagian fundamental ini beres dan siap lanjut ke materi JS berikutnya.
