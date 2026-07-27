const tombolSatu = document.getElementById("btn1");
const semuaTeks = document.querySelectorAll(".teks");
const judul = document.getElementById("judul");
const ambilNama = document.getElementById("inputNama");
const previewNama = document.getElementById("preview");
const kotakHover = document.getElementById("kotakHover");

console.log("getElementById:", judul);
console.log("querySelectorAll:", semuaTeks);
console.log("querySelector:", document.querySelector(".teks"));
console.log("getElementsByClassName:", document.getElementsByClassName("teks"));
console.log("querySelectorAll type:", semuaTeks instanceof NodeList);
console.log(
  "getElementsByClassName type:",
  document.getElementsByClassName("teks") instanceof HTMLCollection,
);

const kalimatAcak = [
  "Judul sudah diganti dengan kalimat acak.",
  "JavaScript membuat halaman jadi lebih hidup.",
  "DOM memudahkan kita mengubah konten secara dinamis.",
];

tombolSatu.addEventListener("click", () => {
  const kalimat = kalimatAcak[Math.floor(Math.random() * kalimatAcak.length)];

  judul.textContent = kalimat;
  judul.style.color = "red";
  judul.style.fontSize = "24px";

  const teksPertama = document.querySelector(".teks");
  teksPertama.innerHTML = "<strong>Konten dari innerHTML</strong>";
  teksPertama.style.color = "blue";

  semuaTeks.forEach((teks, index) => {
    if (index !== 0) {
      teks.textContent = "Teks ini hanya textContent";
      teks.style.color = "blue";
    }

    if (judul.classList.contains("highlight")) {
      judul.classList.remove("highlight");
    } else {
      judul.classList.add("highlight");
    }

    teks.classList.toggle("highlight");
  });

  previewNama.textContent = ambilNama.value;
});

ambilNama.addEventListener("input", (event) => {
  previewNama.textContent = event.target.value;
});

ambilNama.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    previewNama.textContent = `Halo, ${event.target.value.trim() || "teman"}!`;
  }
});

kotakHover.addEventListener("mouseenter", () => {
  kotakHover.style.background = "lightblue";
});

kotakHover.addEventListener("mouseleave", () => {
  kotakHover.style.background = "#eee";
});

const itemBaru = document.getElementById("itemBaru");
const tombolTambah = document.getElementById("tambahBtn");
const listBelanja = document.getElementById("listBelanja");
const totalItem = document.getElementById("totalItem");

function updateJumlahItem() {
  totalItem.textContent = `Total item: ${listBelanja.children.length}`;
}

tombolTambah.addEventListener("click", () => {
  if (itemBaru.value.trim() === "") {
    alert("Nama item tidak boleh kosong!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = itemBaru.value;

  const hapusBtn = document.createElement("button");
  hapusBtn.textContent = "hapus";
  hapusBtn.type = "button";
  hapusBtn.addEventListener("click", () => {
    li.remove();
    updateJumlahItem();
  });

  li.appendChild(hapusBtn);
  listBelanja.appendChild(li);
  updateJumlahItem();
  itemBaru.value = "";
});

const hargaHP = [
  { produk: "Iphone 17 Pro max", harga: 17000000 },
  { produk: "Infinix Note 40", harga: 2000000 },
  { produk: "Samsung s24 ultra", harga: 21999000 },
  { produk: "Mouse Wireless", harga: 85000 },
];

const urutBtn = document.getElementById("urutBtn");
const listProduk = document.getElementById("listProduk");

function renderProduk() {
  const produkTampil = [...hargaHP]
    .filter((item) => item.harga < 100000)
    .sort((a, b) => a.harga - b.harga);

  listProduk.innerHTML = "";

  if (produkTampil.length === 0) {
    const kosong = document.createElement("li");
    kosong.textContent = "Tidak ada produk di bawah Rp 100.000";
    listProduk.appendChild(kosong);
    return;
  }

  produkTampil.forEach((item) => {
    const list = document.createElement("li");
    list.textContent = `${item.produk} - Rp ${item.harga.toLocaleString("id-ID")}`;
    listProduk.appendChild(list);
  });
}

renderProduk();

urutBtn.addEventListener("click", () => {
  renderProduk();
});

const todoInput = document.getElementById("todoInput");
const todoAddBtn = document.getElementById("todoAddBtn");
const hapusSelesaiBtn = document.getElementById("hapusSelesaiBtn");
const todoList = document.getElementById("todoList");
const todoCounter = document.getElementById("todoCounter");

function updateCounter() {
  const totalItem = todoList.children.length;
  const itemSelesai = todoList.querySelectorAll(".selesai").length;

  todoCounter.textContent = `${itemSelesai} selesai dari ${totalItem} total`;
}

function tambahTodo(teksTugas) {
  const teks = teksTugas.trim();

  if (teks === "") {
    alert("Ketik dulu tugasnya!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = teks;

  const hapusBtn = document.createElement("button");
  hapusBtn.textContent = "hapus";
  hapusBtn.type = "button";
  hapusBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    li.remove();
    updateCounter();
  });

  li.appendChild(hapusBtn);

  li.addEventListener("click", () => {
    li.classList.toggle("selesai");
    updateCounter();
  });

  todoList.appendChild(li);
  todoInput.value = "";
  updateCounter();
}

todoAddBtn.addEventListener("click", () => {
  tambahTodo(todoInput.value);
});

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    tambahTodo(todoInput.value);
  }
});

hapusSelesaiBtn.addEventListener("click", () => {
  todoList.querySelectorAll(".selesai").forEach((item) => {
    item.remove();
  });

  updateCounter();
});
