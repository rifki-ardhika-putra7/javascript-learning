# Roadmap JavaScript — Belajar dari Nol

Belajar JavaScript secara bertahap: dari dasar sintaks sampai siap bikin aplikasi (DOM, async, tooling, React).

Materi aktif ditulis sebagai file `.js` yang bisa dijalankan langsung dengan Node.js. Tiap file biasanya berisi:

1. Tujuan pembelajaran  
2. Penjelasan konsep  
3. Contoh kode  
4. Kasus nyata  
5. Best practice & kesalahan umum  
6. Latihan (kerjakan sendiri)

---

## Cara belajar

```bash
# Masuk ke folder materi
cd "01-dasar"          # atau 02-array-object, dst.

# Jalankan file
node 01-pengenalan-javascript.js
node 08-latihan-fase1.js
```

**Alur yang disarankan:**

1. Baca penjelasan + contoh di file materi  
2. Kerjakan latihan di bagian bawah (jangan hardcode hasil)  
3. Jalankan ulang dengan `node`  
4. Minta review / koreksi sebelum lanjut materi berikutnya  

**Aturan penting saat latihan:**

- Pakai nama variabel unik (hindari bentrok: `umur`, `total`, `nilai`, `harga`, dll.)  
- Fungsi perhitungan wajib `return`, jangan hanya `console.log`  
- Jangan hardcode jawaban — hitung lewat kode  

---

## Progress saat ini

| Modul | Status |
|-------|--------|
| `01-dasar` | ✅ Selesai (termasuk latihan fase 1) |
| `02-array-object` | 🔄 Berjalan (array ✅ · object latihan) |
| `03-dom-event` … `08-react` | ⏳ Belum dimulai (materi lama di-zip) |

---

## Struktur folder

```text
JAVASCRIPT/
├── README.md                 ← file ini
├── 01-dasar/                 ← fondasi sintaks
├── 02-array-object/          ← struktur data
├── 03-dom-event/             ← interaktif di browser
├── 04-async/                 ← Promise, Fetch, async/await
├── 05-tooling-modules/       ← module, NPM, Vite, Git
├── 06-data-storage/          ← LocalStorage, JSON, CRUD
├── 07-mini-project/          ← project gabungan
├── 08-react/                 ← React dasar
└── files/                    ← challenge & eksperimen lama
```

Folder `03`–`08` sementara menyimpan `materi lama.zip` (versi HTML lama). Materi baru akan dibuat bertahap dengan format `.js` yang sama seperti `01` dan `02`.

---

## Kurikulum

### 01 — Dasar (`01-dasar/`)

Fondasi wajib sebelum lanjut ke mana pun.

| File | Materi |
|------|--------|
| `01-pengenalan-javascript.js` | Apa itu JS, cara jalanin kode |
| `02-variabel-dan-konstanta.js` | `let`, `const`, naming |
| `03-tipe-data.js` | string, number, boolean, null, undefined, `typeof` |
| `04-operator.js` | aritmatika, penugasan, perbandingan, logika |
| `05-percabangan.js` | `if` / `else` / `switch` |
| `06-perulangan.js` | `for`, `while`, `break`, `continue`, `for...of` |
| `07-fungsi.js` | parameter, `return`, fungsi memanggil fungsi |
| `08-latihan-fase1.js` | Review gabungan operator → fungsi |

### 02 — Array & Object (`02-array-object/`)

Struktur data yang dipakai hampir di setiap aplikasi.

| File | Materi |
|------|--------|
| `01-array-dasar.js` | index, `length`, push/pop, loop, `includes` / `indexOf` |
| `02-object-dasar.js` | key-value, dot/bracket, nested, array of objects |

**Rencana lanjutan di modul ini (belum dibuat):** array method (`map`, `filter`, …), destructuring, spread/rest, render data ke DOM.

### 03 — DOM & Event (`03-dom-event/`)

Manipulasi halaman HTML, event listener, form, event delegation.

### 04 — Asynchronous (`04-async/`)

Promise, Fetch API, error handling, loading state, async/await.

### 05 — Tooling & Modules (`05-tooling-modules/`)

ES Module, NPM, Vite, Git & GitHub.

### 06 — Data Storage (`06-data-storage/`)

LocalStorage, JSON, CRUD vanilla JS.

### 07 — Mini Project (`07-mini-project/`)

Gabungan semua skill: Todo List, Expense Tracker, Movie Search, Weather App, dll.

### 08 — React (`08-react/`)

React dasar, state & props, `useEffect` + fetch.

---

## Challenge tambahan

Di folder `files/`:

- `01-challenge-fase1-html-css-tools.md` — challenge fondasi web  
- `02-challenge-fase2-javascript.md` — challenge JS (variabel → array)  

Boleh dikerjakan sebagai latihan tambahan, terpisah dari alur materi `.js` utama.

---

## Prasyarat

- Node.js terpasang (`node -v` di terminal)  
- Editor (Cursor / VS Code)  
- Dasar HTML & CSS (untuk modul DOM ke atas)

---

## Catatan

Roadmap ini bagian dari **roadmap-se-2026**. Fokusnya praktik: baca → kerjakan → jalankan → koreksi → lanjut.
