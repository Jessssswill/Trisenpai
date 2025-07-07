// Menjalankan kode setelah semua elemen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // --- LOGIKA 1: CEK JIKA PENGGUNA SUDAH PERNAH LOGIN ---
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'modul.html';
        return; 
    }

    // Ambil elemen-elemen form yang dibutuhkan dari HTML
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    // ELEMEN BARU: Untuk fitur show/hide password
    const togglePasswordBtn = document.getElementById('toggle-password-btn');
    const eyeIcon = document.getElementById('eye-icon');
    const eyeSlashIcon = document.getElementById('eye-slash-icon');

    // --- LOGIKA 2: DATABASE AKUN MAHASISWA (DINAMIS) ---
    let users = JSON.parse(localStorage.getItem('users'));
    if (!users || users.length === 0) {
        users = [
            { username: 'budi_santoso', password: 'password123' },
            { username: 'siti_rahayu', password: 'password456' },
            { username: 'silfya', password: 'otakmininya' },
            { username: 'mahasiswa', password: 'belajarC' }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }

    // --- LOGIKA BARU: Untuk tombol show/hide password ---
    togglePasswordBtn.addEventListener('click', function() {
        // Cek tipe input saat ini
        const isPassword = passwordInput.type === 'password';
        // Ubah tipe input
        passwordInput.type = isPassword ? 'text' : 'password';
        // Ganti ikon mata yang ditampilkan
        eyeIcon.classList.toggle('hidden', isPassword);
        eyeSlashIcon.classList.toggle('hidden', !isPassword);
    });

    // Tambahkan event listener untuk dijalankan saat form di-submit
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        if (enteredUsername === '' || enteredPassword === '') {
            errorMessage.textContent = 'Username dan password tidak boleh kosong.';
            return;
        }

        // --- PERUBAHAN 1: Membuat perbandingan username tidak case-sensitive ---
        const foundUser = users.find(user => user.username.toLowerCase() === enteredUsername.toLowerCase() && user.password === enteredPassword);

        if (foundUser) {
            console.log(`Login berhasil untuk pengguna: ${foundUser.username}`);
            
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loggedInUser', foundUser.username); // Simpan username asli
            
            errorMessage.textContent = '';
            window.location.href = 'modul.html';

        } else {
            console.log('Login gagal: Username atau password salah.');
            errorMessage.textContent = 'Username atau password salah. Silakan cek lagi.';
        }
    });
});