// script.js
function validateLogin() {
  // Username dan password yang sudah ditentukan
  const correctUsername = "tulipbiru";
  const correctPassword = "240206";

  // Mengambil input dari user
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Mengambil elemen untuk menampilkan pesan error
  var errorMessage = document.getElementById("errorMessage");

  // Validasi login
  if (username === correctUsername && password === correctPassword) {
    errorMessage.style.color = "yellow";
    errorMessage.innerText = "Login berhasil! Mengalihkan halaman...";

    // Setelah 2 detik, pindah ke halaman baru
    setTimeout(function () {
      window.location.href = "Tiarr.html"; // Ubah dengan URL atau halaman yang ingin dituju
    }, 1000); // Redirect setelah 2 detik
  } else {
    errorMessage.innerText = "Username atau password salah!";
  }
}
