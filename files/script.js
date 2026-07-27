const namaLengkap = "Rifki";
let x = 1;
let y = "Ardhika";
let z = true;

console.log(typeof x);
let umur = 16;
console.log(`hallo nama gw ${namaLengkap}, umur gw ${umur}`);
// namaLengkap = "Putra";
// let statusLogin;

const nilaiUjian = 90;
let grade;
if (nilaiUjian >= 90) {
  grade = "A";
} else if (nilaiUjian >= 80) {
  grade = "B";
} else if (nilaiUjian >= 70) {
  grade = "C";
} else {
  grade = "D";
}
console.log(`nilai ujian gw adalah ${nilaiUjian}, dengan nilai angka ${grade}`);

const punyaKtp = true;
let cek = "tunggu punya ktp ya adek";
if (umur >= 17 && punyaKtp === true) {
  cek = "boleh bikin sim";
}
console.log(cek);

const hari = "rabu";
let libur = "belum libur bos";
if (hari == "sabtu" || hari == "minggu") {
  libur = "Libur hari ini";
}
console.log(libur);

const member = false;
let totalBelanja = 150000;
let diskon = "coba lagi";
if ((member === true && totalBelanja >= 100000) || hari == "Jumat") {
  diskon = "kamu dapat diskon 5%";
}
console.log(diskon);

let i;
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i < 50; i++) {
  if (i % 6 === 0) {
    break;
  }
  console.log(i);
}
let angka = 10;

while (angka >= 1) {
  console.log(angka);
  angka--;
}
for (let i = 1; i <= 5; i++) {
  let bintang = "";

  for (let j = 1; j <= i; j++) {
    bintang += "*";
  }

  console.log(bintang);
}
// ===============================
// 4. FUNGSI & SWITCH
// ===============================

// Function hitung luas segitiga versi arrow function
// Ini sekaligus memenuhi tugas: ubah salah satu function jadi arrow function
const hitungLuasSegitiga = (alas, tinggi) => {
  return (alas * tinggi) / 2;
};

let luasSegitiga = hitungLuasSegitiga(10, 5);
console.log(`Luas segitiga: ${luasSegitiga}`);

// Versi salah sengaja: cuma console.log, tidak ada return
function hitungLuasSegitigaSalah(alas, tinggi) {
  let hasil = (alas * tinggi) / 2;
  console.log(`Hasil di dalam function: ${hasil}`);

  // Tidak ada return
  // Jadi kalau function ini ditampung ke variabel,
  // hasilnya akan undefined.
}

let hasilSalah = hitungLuasSegitigaSalah(10, 5);
console.log(`Hasil salah: ${hasilSalah}`); // undefined

// Function cekHari pakai switch
function cekHari(nomorHari) {
  switch (nomorHari) {
    case 1:
      return "Senin";
    case 2:
      return "Selasa";
    case 3:
      return "Rabu";
    case 4:
      return "Kamis";
    case 5:
      return "Jumat";
    case 6:
      return "Sabtu";
    case 7:
      return "Minggu";
    default:
      return "Hari gak valid";
  }
}

let hariIni = cekHari(3);
console.log(`Hari ini: ${hariIni}`);

let hariError = cekHari(10);
console.log(`Cek hari error: ${hariError}`);

// ===============================
// 5. ARRAY
// ===============================

let hewan = ["kucing", "anjing", "harimau", "kelinci", "gajah"];

console.log(`Elemen pertama: ${hewan[0]}`);
console.log(`Elemen terakhir: ${hewan[hewan.length - 1]}`);

// push 1 hewan baru
hewan.push("singa");
console.log("Setelah push:", hewan);

// pop hewan terakhir
hewan.pop();
console.log("Setelah pop:", hewan);

// loop semua isi array pakai for...of
console.log("Daftar hewan:");

for (let namaHewan of hewan) {
  console.log(namaHewan);
}

// cek 1 hewan ada di array pakai includes
let cekHewan = "kucing";

if (hewan.includes(cekHewan)) {
  console.log(`${cekHewan} ada di array`);
} else {
  console.log(`${cekHewan} tidak ada di array`);
}

// filter hewan yang namanya lebih dari 4 huruf
let hewanLebihDari4Huruf = hewan.filter((namaHewan) => {
  return namaHewan.length > 4;
});

console.log("Hewan lebih dari 4 huruf:", hewanLebihDari4Huruf);

// map semua nama jadi huruf besar
let hewanHurufBesar = hewan.map((namaHewan) => {
  return namaHewan.toUpperCase();
});

console.log("Hewan huruf besar:", hewanHurufBesar);

// ===============================
// 6. FINAL BOSS — GABUNGAN SEMUA
// Studi kasus: Cek kelulusan 5 siswa
// ===============================

let siswa = [
  { nama: "Rifki", nilai: 92 },
  { nama: "Budi", nilai: 78 },
  { nama: "Siti", nilai: 65 },
  { nama: "Andi", nilai: 84 },
  { nama: "Dewi", nilai: 55 },
];

// Aturan grade:
// A = 90 ke atas
// B = 80 - 89
// C = 70 - 79
// D = di bawah 70
function tentukanGrade(nilai) {
  if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    return "B";
  } else if (nilai >= 70) {
    return "C";
  } else {
    return "D";
  }
}

// Arrow function cek lulus
const cekLulus = (nilai) => {
  return nilai >= 70;
};

// loop semua siswa, tambahkan properti grade dan lulus
for (let dataSiswa of siswa) {
  dataSiswa.grade = tentukanGrade(dataSiswa.nilai);
  dataSiswa.lulus = cekLulus(dataSiswa.nilai);
}

console.log("Data siswa setelah ditambah grade dan lulus:");
console.log(siswa);

// filter siswa lulus dan tidak lulus
let siswaLulus = siswa.filter((dataSiswa) => {
  return dataSiswa.lulus === true;
});

let siswaTidakLulus = siswa.filter((dataSiswa) => {
  return dataSiswa.lulus === false;
});

// ambil nama-nama siswa yang lulus
let namaSiswaLulus = siswaLulus.map((dataSiswa) => {
  return dataSiswa.nama;
});

// laporan akhir
console.log(`Jumlah siswa lulus: ${siswaLulus.length}`);
console.log(`Jumlah siswa tidak lulus: ${siswaTidakLulus.length}`);
console.log(`Nama siswa yang lulus: ${namaSiswaLulus.join(", ")}`);
