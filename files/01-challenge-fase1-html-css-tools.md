# Challenge Fase 1 — Fondasi Web (HTML, CSS, Tools)

> Status materi: **TUNTAS 100%** → jadi ini bukan belajar baru, tapi **stress test**.
> Tujuannya: mastiin semua konsep beneran nempel dan bisa dipakai bareng-bareng, bukan cuma hafal satu-satu.
> Cara pakai: kerjain berurutan dari Challenge 1 → 5. Centang `[ ]` jadi `[x]` tiap TODO yang udah kelar.

---

## Challenge 1 — "Kartu Profil" (HTML murni, tanpa CSS dulu)

**Goal:** mastiin semantik HTML5 + elemen teks + list + tabel + form, tanpa distraksi styling.

Buat 1 file `profil.html` yang isinya halaman profil diri sendiri (boleh fiktif), dengan struktur semantik penuh.

### TODO
- [ ] Bungkus halaman pakai `<header>`, `<nav>`, `<main>`, `<footer>`
- [ ] Di `<header>`: nama pakai heading yang benar (`h1`), tagline pendek pakai `<small>`
- [ ] Di `<nav>`: minimal 3 link internal (pakai `href="#id-tujuan"`) ke section di bawah — misal ke `#tentang`, `#skill`, `#kontak`
- [ ] Section `#tentang` (di dalam `<section>` atau `<article>`): 2 paragraf tentang diri sendiri, salah satu kata penting ditandai pakai `<mark>`
- [ ] Selipkan minimal 1 `<abbr>` dengan atribut `title` (contoh: `<abbr title="Hyper Text Markup Language">HTML</abbr>`)
- [ ] Selipkan 1 kutipan (boleh `<blockquote>` atau `<q>`) — quote favorit atau motto
- [ ] Section `#skill`: daftar skill pakai `<ul>`, minimal salah satu item punya **nested list** (`<ul>` di dalam `<li>`)
- [ ] Section riwayat (bebas nama section-nya): pakai `<ol>` buat urutan kronologis (misal riwayat belajar)
- [ ] Bikin 1 `<dl>` berisi minimal 3 pasang `<dt>`/`<dd>` (contoh: daftar istilah teknis yang udah dipelajari + definisinya)
- [ ] Section `#kontak`: tabel `<table>` berisi info kontak (email, GitHub, dll), pakai `<tr>`, `<th>`, `<td>` yang benar, dan **wajib** pakai atribut `rules` di tag `<table>`
- [ ] Tambah 1 tabel lagi (jadwal belajar mingguan) yang **wajib** pakai `rowspan` DAN `colspan` minimal sekali masing-masing
- [ ] Sisipkan 1 `<img>` (boleh placeholder/link gambar apapun) dengan `alt` yang deskriptif dan sedikit `inline style` (misal `style="width:150px;"`)
- [ ] Tambah 1 elemen `<video>` ATAU `<audio>` (boleh pakai `controls`, sumbernya bebas link publik atau placeholder)
- [ ] Di `<footer>`: copyright pakai entity `&copy;` (jangan ketik simbol © langsung)
- [ ] **Form kontak lengkap** di dalam `<footer>` atau section terpisah, wajib punya SEMUA ini:
  - [ ] `<fieldset>` dengan `<legend>` sebagai pembungkus
  - [ ] `input type="text"` untuk nama, dengan `<label>` yang terhubung benar (pakai `for` + `id`) dan atribut `required`
  - [ ] `input type="email"` untuk email
  - [ ] `<textarea>` untuk pesan
  - [ ] Radio button minimal 2 pilihan (misal: "Kerja Sama" / "Pertanyaan")
  - [ ] Checkbox minimal 1 (misal: "Setuju dihubungi lewat email")
  - [ ] `<select>` + `<option>` minimal 3 pilihan
  - [ ] `input type="file"` untuk upload (misal upload CV/portfolio)
  - [ ] Tombol submit

**Validasi diri:** buka file di browser, cek console (F12) — harus 0 error HTML. Klik semua link nav, harus scroll ke section yang bener.

---

## Challenge 2 — "Styling Kartu Profil" (CSS dasar 1–7+)

**Goal:** ambil `profil.html` dari Challenge 1, kasih CSS eksternal, latihan CSS dasar sebelum masuk layout modern.

Buat file `profil.css`, link-kan ke `profil.html`.

### TODO
- [ ] Reset dasar: `margin: 0; padding: 0; box-sizing: border-box;` di `*` atau `body`
- [ ] Set font-family, warna teks dasar, warna background halaman
- [ ] Styling heading (`h1`, `h2`, dst) beda ukuran & warna sesuai hierarki
- [ ] Styling `nav` jadi horizontal (list item sejajar, bukan tumpuk ke bawah) — **tanpa Flexbox dulu**, pakai `display: inline-block` atau `float`
- [ ] Beri warna beda saat link di-hover (`a:hover`)
- [ ] Styling tabel: border rapi, `padding` di tiap `td`/`th`, warna beda untuk baris ganjil/genap (boleh manual atau pakai `:nth-child`)
- [ ] Beri `border-radius` dan `box-shadow` pada gambar profil
- [ ] Pastikan warna, ukuran font, spacing terasa konsisten (bukan asal random)

---

## Challenge 3 — "Layoutin Ulang" (Flexbox, Grid, Responsive, Position, Animation, Variables, Pseudo)

**Goal:** upgrade `profil.css` pakai teknik CSS modern. Ini bagian paling penting sebelum lanjut ke Netflix Landing Page.

### TODO
- [ ] Buat `:root` berisi minimal 4 **CSS variables** (contoh: `--color-primary`, `--color-bg`, `--font-main`, `--spacing`) — lalu pakai variable itu di minimal 5 tempat berbeda di CSS (jangan cuma dideklarasi tapi gak dipakai)
- [ ] Ubah `nav` jadi pakai **Flexbox** (`display: flex; justify-content: ...; gap: ...`) — buang cara `inline-block`/`float` yang lama
- [ ] Ubah layout section `#skill` (daftar skill) jadi pakai **CSS Grid** — minimal `grid-template-columns` dengan 2–3 kolom
- [ ] Tambah 1 elemen dengan `position: sticky` atau `position: fixed` (misal `nav` jadi sticky di atas saat scroll)
- [ ] Tambah 1 elemen dengan `position: absolute` di dalam parent `position: relative` (misal badge kecil "Available for hire" di pojok foto profil)
- [ ] Buat animasi pakai `@keyframes` (misal foto profil fade-in atau bounce saat halaman dibuka), terapkan lewat `animation:`
- [ ] Pakai minimal 1 **pseudo-element** (`::before` atau `::after`) — contoh: tambahin ikon/simbol dekoratif sebelum tiap `<li>` skill tanpa nulis di HTML
- [ ] **Responsive:** tambah `@media` query minimal 1 breakpoint (misal `max-width: 768px`) yang mengubah Grid jadi 1 kolom dan Flexbox nav jadi vertikal
- [ ] Test manual: resize window browser dari lebar ke sempit, pastikan gak ada elemen yang "pecah" atau numpuk aneh

---

## Challenge 4 — "Form Registrasi Cantik"

**Goal:** khusus latihan styling form, karena form sering diremehkan padahal detailnya banyak.

Buat file baru `registrasi.html` + `registrasi.css` (terpisah dari profil, halaman baru).

### TODO
- [ ] Buat form registrasi akun berisi: nama lengkap, email, password, konfirmasi password, tanggal lahir, gender (radio), negara (select), bio singkat (textarea), upload foto profil (file), checkbox "Setuju Syarat & Ketentuan"
- [ ] Semua input **wajib** dibungkus rapi (label di atas/samping input, konsisten)
- [ ] Styling `input`, `textarea`, `select` biar seragam: border, padding, border-radius, font-size sama semua
- [ ] Beri efek `:focus` yang jelas beda dari state normal (ganti warna border/box-shadow saat input diklik)
- [ ] Tombol submit dikasih efek hover + sedikit transition (`transition: all 0.2s`)
- [ ] Layout form pakai Flexbox atau Grid biar rapi (bukan numpuk polos ke bawah tanpa spacing)
- [ ] Tambahkan style beda untuk state `required` yang kosong vs terisi (boleh pakai pseudo-class `:invalid`/`:valid` sebagai latihan tambahan, opsional tapi bagus dicoba)

---

## Challenge 5 — BOSS CHALLENGE: Netflix Landing Page

**Goal:** ini "ujian akhir" Fase 1 elo — gabungin SEMUA yang udah dipelajari (HTML + CSS) dalam satu halaman besar. Target skor: **10/10**, sama seperti challenge sebelumnya yang udah beres.

Buat file `netflix-landing.html` + `netflix-landing.css`.

### TODO — Struktur & Konten
- [ ] Section Hero: judul besar, subjudul, form email + tombol "Get Started" (mirip halaman asli Netflix)
- [ ] Section fitur/benefit (biasanya 3–4 poin, misal "Nonton di mana saja", "Bisa berhenti kapan saja") — pakai grid/flex
- [ ] Section FAQ berbentuk accordion-style (boleh statis dulu tanpa JS, fokus tampilannya)
- [ ] Footer lengkap dengan link-link (bahasa, negara, dll) tersusun rapi pakai Grid multi-kolom

### TODO — Teknis (checklist gabungan)
- [ ] Struktur semantik HTML5 penuh (`header`, `main`, `section` per bagian, `footer`)
- [ ] Navigasi/header pakai Flexbox, termasuk logo + tombol "Sign In"
- [ ] Semua section besar pakai Grid untuk mengatur kolom konten
- [ ] Responsive: minimal 2 breakpoint (tablet & mobile), test resize dari lebar ke HP
- [ ] Pakai CSS variables untuk warna tema (Netflix merah-hitam) — jangan hardcode warna berkali-kali
- [ ] Ada minimal 1 animasi (`@keyframes`) — misal tombol atau hero fade-in
- [ ] Background image atau gradient di hero section
- [ ] Font-family custom (boleh Google Fonts atau font-stack yang niat, jangan default browser)
- [ ] Cek ulang semua `alt` text di gambar sudah deskriptif
- [ ] **Self-review pakai rubrik lama**: bandingin ke challenge HTML+CSS gabungan yang udah dapet 10/10 sebelumnya — cek poin apa yang bikin itu dapet nilai sempurna, terapin standar yang sama di sini

---

## Bonus — Cek Tools (Git, Terminal, Internet)

**Goal:** pastiin fondasi tooling gak keteteran cuma karena fokus ke HTML/CSS.

### TODO
- [ ] Bikin folder project baru khusus Fase 1 review ini pakai terminal: `mkdir fase1-review && cd fase1-review`
- [ ] Cek lokasi & isi folder pakai `pwd` dan `ls`
- [ ] Copy salah satu file challenge ke folder baru pakai `cp`, lalu rename pakai `mv`
- [ ] Buat file kosong baru pakai `touch` (misal `notes.md` buat catatan progress)
- [ ] `git init` di folder project ini
- [ ] Pindahin semua file HTML/CSS challenge di atas ke folder ini, lalu `git add .`
- [ ] `git commit -m "..."` dengan pesan commit yang jelas (bukan cuma "update")
- [ ] Jelasin ke diri sendiri (tulis 2–3 kalimat di `notes.md`): apa bedanya **working directory**, **staging area**, dan **commit** — kalau masih ragu, berarti bagian ini perlu direview ulang
- [ ] Push ke GitHub (buat repo baru di GitHub dulu, lalu `git remote add origin ...` dan `git push`)
- [ ] Tulis di `notes.md`: jelasin singkat alur **client–server**, **DNS**, dan **HTTP request/response** pakai bahasa sendiri — bayangin waktu buka halaman `netflix-landing.html` itu lewat live server, apa yang sebenernya kejadian di balik layar

---

## Kriteria "Lulus" Fase 1 Review
Semua checklist di atas tercentang **dan**:
1. Setiap file dibuka di browser tanpa error console.
2. Bisa jelasin ulang (tanpa liat catatan) kenapa pakai `<section>` vs `<div>`, kapan pakai Flexbox vs Grid.
3. Netflix Landing Page beneran keliatan niat kalau di-screenshot — bukan cuma "asal jalan".
