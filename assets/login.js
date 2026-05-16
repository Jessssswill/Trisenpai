document.addEventListener("DOMContentLoaded", function () {
  // kalau udah pernah login, langsung redirect aja
  if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "modul.html";
    return;
  }

  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");
  const togglePasswordBtn = document.getElementById("toggle-password-btn");
  const eyeIcon = document.getElementById("eye-icon");
  const eyeSlashIcon = document.getElementById("eye-slash-icon");

  // data user sementara, disimpen di localstorage
  let users = JSON.parse(localStorage.getItem("users"));
  if (!users || users.length === 0) {
    users = [
      { username: "budi_santoso", password: "password123" },
      { username: "siti_rahayu", password: "password456" },
      { username: "silfya", password: "otakmininya" },
      { username: "mahasiswa", password: "belajarC" },
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }

  // show/hide password pake tombol mata
  togglePasswordBtn.addEventListener("click", function () {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    eyeIcon.classList.toggle("hidden", isPassword);
    eyeSlashIcon.classList.toggle("hidden", !isPassword);
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    if (enteredUsername === "" || enteredPassword === "") {
      errorMessage.textContent = "Username dan password tidak boleh kosong.";
      return;
    }

    // username gak case sensitive jadi budi_santoso sama BUDI_SANTOSO itu sama
    const foundUser = users.find((user) => user.username.toLowerCase() === enteredUsername.toLowerCase() && user.password === enteredPassword);

    if (foundUser) {
      console.log(`Login berhasil: ${foundUser.username}`);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInUser", foundUser.username);
      errorMessage.textContent = "";
      window.location.href = "modul.html";
    } else {
      console.log("Login gagal.");
      errorMessage.textContent = "Username atau password salah. Silakan cek lagi.";
    }
  });
});
