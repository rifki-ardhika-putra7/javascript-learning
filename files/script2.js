// ================================================================
//  CHALLENGE DOM BASIC — kerjakan SEMUA di file ini, urut 1 -> 6.
//  Buka index.html di browser, cek hasil + Console (F12).
//  Mentok? tulis  // bingung di sini  biar gampang direview.
// ================================================================

// ============ SECTION 1 — Selecting Elements ============
// TODO 1a: ambil <h1 id="judul"> pakai getElementById, cetak ke console
// TODO 1b: ambil semua <p class="teks"> pakai querySelectorAll, cetak jumlahnya (.length)
// TODO 1c: ambil elemen PERTAMA yang match .teks pakai querySelector (bukan querySelectorAll)
// TODO 1d: cetak document.getElementsByClassName("teks") vs querySelectorAll(".teks").

//          Tulis di komentar bedanya (HTMLCollection vs NodeList).

// ============ SECTION 2 — Ubah Konten & Style ============
// TODO 2a: ubah teks h1 pakai .textContent
// TODO 2b: ubah salah satu <p> pakai .innerHTML, sisipkan <strong> di dalamnya.
//          Lalu coba masukin string "<strong>tes</strong>" ke .textContent elemen lain,
//          bandingin di browser (innerHTML render tag, textContent nggak).
// TODO 2c: ubah style langsung dari JS, misal  judul.style.color = "red"
// TODO 2d: pakai classList.add("highlight") lalu classList.remove("highlight")
// TODO 2e: cek pakai classList.contains("highlight"), cetak hasilnya (true/false)
// TODO 2f: pakai classList.toggle("highlight")

// ============ SECTION 3 — Event Listener ============
// TODO 3a: btn1 addEventListener "click" -> ubah teks h1 jadi random dari array (min 3 kalimat)
// TODO 3b: input#inputNama event "input" -> tampilkan real-time ke <p id="preview">
//          pakai event.target.value
// TODO 3c: input event "keydown" -> kalau event.key === "Enter", munculin alert / ubah teks
// TODO 3d: div#kotakHover event "mouseenter" & "mouseleave" -> ganti background pas masuk/keluar

// ============ SECTION 4 — Buat & Hapus Elemen ============
// TODO 4a: klik tambahBtn -> ambil value itemBaru, buat <li> pakai createElement, appendChild ke listBelanja
// TODO 4b: kosongkan input setelah item ditambah
// TODO 4c: validasi -> kalau input kosong, jangan tambah (pakai if)
// TODO 4d: tiap <li> kasih tombol hapus kecil yang remove() <li> itu sendiri
//          (pakai event.target.parentElement)
// TODO 4e: tampilkan total item di <p id="totalItem">, update otomatis tiap nambah/hapus

// ============ SECTION 5 — Loop Array ke DOM ============
let produk = [
  { nama: "Kaos", harga: 50000 },
  { nama: "Celana", harga: 120000 },
  { nama: "Topi", harga: 30000 },
];
// TODO 5a: loop produk (for...of / forEach), tiap item bikin <li> "nama - harga", masuk ke listProduk
// TODO 5b: pakai .filter() dulu -> cuma tampilin produk harga < 100000, baru render
// TODO 5c: tombol urutBtn -> .sort() by harga, kosongkan <ul> (innerHTML = ""), render ulang

// ============ SECTION 6 — FINAL BOSS: To-Do List ============
// TODO 6a: klik todoAddBtn ATAU Enter di todoInput -> tambah <li> ke todoList (teks dari input)
// TODO 6b: tiap <li> diklik -> toggle "selesai" pakai classList.toggle("selesai")
// TODO 6c: tiap <li> punya tombol hapus sendiri (remove item itu doang)
// TODO 6d: validasi -> gak bisa nambah to-do kosong (alert kalau kosong)
// TODO 6e: counter otomatis "X selesai dari Y total" -> update tiap tambah/hapus/toggle,
//          pakai querySelectorAll buat hitung ulang
// TODO 6f (bonus): tombol hapusSelesaiBtn -> hapus semua <li> yang punya class .selesai
