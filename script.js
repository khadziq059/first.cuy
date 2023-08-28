// Memperoleh referensi ke elemen-elemen HTML yang diperlukan
const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const okButton = document.getElementById("okButton");
const namaPopup = document.getElementById("namaPopup");

// Menambahkan event listener pada form saat tombol "Kirim Pesan" diklik
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form dari pengiriman langsung

  // Mengambil nilai dari input nama
  const namaValue = document.getElementById("nama").value;

  // Menampilkan popup
  popup.style.display = "block";
  
  // Menambahkan nama pengguna ke popup
  namaPopup.textContent = namaValue;
});

// Menambahkan event listener pada tombol "OK" di popup
okButton.addEventListener("click", function () {
  popup.style.display = "none"; // Menyembunyikan popup
  window.location.href = "index.html";
});

// Menyembunyikan popup secara default saat halaman web dimuat
popup.style.display = "none";