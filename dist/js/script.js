// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburgers
// const hamburger = document.querySelector("#hamburger");
// const navMenu = document.querySelector("#nav-menu");
// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("hamburger-active");
//   navMenu.classList.toggle("hidden");
// });

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

// Tambahkan event listener pada dokumen
document.addEventListener("click", (event) => {
  // Periksa apakah yang diklik bukan hamburger dan bukan navMenu
  if (
    !event.target.closest("#hamburger") &&
    !event.target.closest("#nav-menu")
  ) {
    // Hapus kelas aktif dari hamburger
    hamburger.classList.remove("hamburger-active");
    // Sembunyikan navMenu
    navMenu.classList.add("hidden");
  }
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

function sendMessageToTelegram() {
  // Mendapatkan nilai dari input
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var number = document.getElementById("nomor").value;

  // Validasi apakah semua input telah diisi
  if (!email.trim() || !name.trim() || !message.trim() || !number.trim()) {
    alert("Semua input harus diisi.");
    return false;
  }

  if (
    number.trim() !== "" &&
    !/^\+?\d+$/.test(number) &&
    email.trim() !== "" &&
    !/\S+@\S+\.\S+/.test(email)
  ) {
    alert(
      "Nomor telepon harus diawali dengan '+' dan hanya berisi angka. Alamat email tidak valid, pastikan formatnya benar."
    );
    return false;
  } else {
    // Validasi nomor telepon
    if (number.trim() !== "" && !/^\+?\d+$/.test(number)) {
      alert("Nomor telepon harus diawali dengan '+' dan hanya berisi angka.");
      return false;
    }

    // Validasi alamat email
    if (email.trim() !== "" && !/\S+@\S+\.\S+/.test(email)) {
      alert("Alamat email tidak valid. Pastikan formatnya benar.");
      return false;
    }
  }

  alert("Pesan berhasil dikirimkan, kamu akan dichat oleh saya mohon tunggu beberapa menit atau jam ^_^");

  // Token bot Telegram dari BotFather
  var token = "7016813527:AAF54N1Y773_QFCkDES7zr4EYiQLWOG48m0"; // Ganti dengan token bot Anda

  // ID grup atau pengguna penerima pesan
  var chat_id = -4157786119; // Ganti dengan ID grup atau pengguna tujuan

  // Pesan yang akan dikirim
  var text =
    "Email: " +
    email +
    "\nNama: " +
    name +
    "\nNomor: " +
    number +
    "\nPesan: " +
    message;

  // URL untuk mengirim pesan ke bot Telegram menggunakan API
  var url =
    "https://api.telegram.org/bot" +
    token +
    "/sendMessage?chat_id=" +
    chat_id +
    "&text=" +
    encodeURIComponent(text);

  // Kirim pesan menggunakan XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
}
