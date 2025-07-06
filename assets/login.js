// Menjalankan kode setelah semua elemen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // --- LOGIKA 1: CEK JIKA PENGGUNA SUDAH PERNAH LOGIN ---
    if (localStorage.getItem('isLoggedIn') === 'true') {
        console.log('Pengguna sudah login, mengarahkan ke modul.html...');
        window.location.href = 'modul.html';
        return; 
    }

    // Ambil elemen-elemen form yang dibutuhkan dari HTML
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // --- LOGIKA 2: DATABASE AKUN MAHASISWA (DINAMIS) ---
    // Coba ambil data users dari localStorage
    let users = JSON.parse(localStorage.getItem('users'));

    // Jika tidak ada data users di localStorage (misal: kunjungan pertama kali)
    if (!users || users.length === 0) {
        console.log('Tidak ada data pengguna di localStorage, menggunakan data default.');
        // Gunakan daftar default ini sebagai data awal
        users = [
            { username: 'budi_santoso', password: 'password123' },
            { username: 'siti_rahayu', password: 'password456' },
            { username: 'silfya', password: 'otakmininya' },
            { username: 'mahasiswa', password: 'belajarC' }
        ];
        // Dan langsung simpan daftar default ini ke localStorage untuk penggunaan selanjutnya
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Tambahkan event listener untuk dijalankan saat form di-submit
    loginForm.addEventListener('submit', function(event) {
        // Mencegah form mengirim data dan me-refresh halaman
        event.preventDefault();

        // Ambil nilai yang diinput oleh pengguna
        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        // Cek apakah salah satu field kosong
        if (enteredUsername === '' || enteredPassword === '') {
            errorMessage.textContent = 'Username dan password tidak boleh kosong.';
            return;
        }

        // Cari pengguna di dalam array 'users' yang sudah dinamis
        const foundUser = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

        // Cek apakah pengguna ditemukan
        if (foundUser) {
            // Jika BERHASIL:
            console.log(`Login berhasil untuk pengguna: ${foundUser.username}`);
            
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loggedInUser', foundUser.username);
            
            errorMessage.textContent = '';
            window.location.href = 'modul.html';

        } else {
            // Jika GAGAL:
            console.log('Login gagal: Username atau password salah.');
            errorMessage.textContent = 'Username atau password salah. Silakan cek lagi.';
        }
    });
});