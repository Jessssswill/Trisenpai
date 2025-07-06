document.addEventListener('DOMContentLoaded', () => {
    // === DATA STATIS ===
    const courseData = [ { title: 'Introduction to C Programming', lessons: [{ xp: 50 }] }, { title: 'Operators', lessons: [{ xp: 75 }] }, { title: 'Selection', lessons: [{ xp: 100 }] }, { title: 'Repetition', lessons: [{ xp: 100 }] }, { title: 'String Manipulation', lessons: [{ xp: 120 }] }, { title: 'Pointer and Array', lessons: [{ xp: 150 }] }, { title: 'Midterm Exam Simulation', lessons: [{ xp: 200 }] }, { title: 'Function', lessons: [{ xp: 100 }] }, { title: 'Recursion', lessons: [{ xp: 125 }] }, { title: 'Structures', lessons: [{ xp: 120 }] }, { title: 'File Processing', lessons: [{ xp: 150 }] }, { title: 'Sorting 1', lessons: [{ xp: 130 }] }, { title: 'Sorting 2', lessons: [{ xp: 150 }] }, { title: 'Searching', lessons: [{ xp: 120 }] }, { title: 'Final Exam Simulation', lessons: [{ xp: 300 }] } ];
    const badgeData = [ { title: "C Initiate", unlockIndex: 3, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>` }, { title: "Midterm Survivor", unlockIndex: 6, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>` }, { title: "Data Architect", unlockIndex: 10, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>` }, { title: "C Master", unlockIndex: 14, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11.33V8l-5 4 5 4v-3.33"/><path d="M15 12.67V16l5-4-5-4v3.33"/><path d="M12 18V6"/></svg>` } ];

    // === ELEMEN DOM ===
    const displayName = document.getElementById('display-name');
    const summaryLevel = document.getElementById('summary-level');
    const summaryXp = document.getElementById('summary-xp');
    const summaryExercises = document.getElementById('summary-exercises');
    const summaryBadges = document.getElementById('summary-badges');
    const profileBadgeContainer = document.getElementById('profile-badge-container');
    const updateUsernameForm = document.getElementById('update-username-form');
    const updatePasswordForm = document.getElementById('update-password-form');
    const logoutBtn = document.getElementById('logout-btn');
    const successNotification = document.getElementById('success-notification');
    const resetProgressBtn = document.getElementById('reset-progress-btn');
    const avatarImage = document.getElementById('avatar-image');
    const avatarUploadInput = document.getElementById('avatar-upload-input');
    const avatarDropdownToggle = document.getElementById('avatar-dropdown-toggle');
    const avatarDropdownMenu = document.getElementById('avatar-dropdown-menu');
    const changeAvatarOption = document.getElementById('change-avatar-option');
    const removeAvatarOption = document.getElementById('remove-avatar-option');

    // === FUNGSI ===
    const showNotification = (message) => {
        successNotification.textContent = message;
        successNotification.classList.remove('translate-y-20', 'opacity-0');
        setTimeout(() => {
            successNotification.classList.add('translate-y-20', 'opacity-0');
        }, 3000);
    };

    const generateDefaultAvatar = (initial, username) => {
        const colors = ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#06b6d4", "#3b82f6", "#8b5cf6", "#d946ef"];
        let hash = 0;
        for (let i = 0; i < username.length; i++) {
            hash = username.charCodeAt(i) + ((hash << 5) - hash);
        }
        const color = colors[Math.abs(hash % colors.length)];
        const svg = `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="64" fill="${color}" /><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" fill="white" font-size="64" font-family="Inter, sans-serif" font-weight="bold">${initial}</text></svg>`;
        return `data:image/svg+xml;base64,${btoa(svg)}`;
    };

    const loadProfileData = () => {
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            window.location.href = 'login.html';
            return;
        }

        const loggedInUsername = localStorage.getItem('loggedInUser');
        if (!loggedInUsername) {
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'login.html';
            return;
        }

        const avatarKey = `avatar_${loggedInUsername}`;
        const savedAvatar = localStorage.getItem(avatarKey);
        
        if (savedAvatar) {
            avatarImage.src = savedAvatar;
        } else {
            const initial = loggedInUsername.charAt(0).toUpperCase();
            avatarImage.src = generateDefaultAvatar(initial, loggedInUsername);
        }
        
        if (displayName) displayName.textContent = loggedInUsername;

        const usernameInput = document.getElementById('new-username');
        if (usernameInput) usernameInput.value = loggedInUsername;

        const progressKey = `userProgress_${loggedInUsername}`;
        const userProgress = JSON.parse(localStorage.getItem(progressKey)) || { completedLessons: [] };
        const completedCount = userProgress.completedLessons.length;
        const currentXp = userProgress.completedLessons.reduce((sum, index) => sum + (courseData[index]?.lessons[0]?.xp || 0), 0);
        const level = Math.floor(currentXp / 200) + 1;
        
        let unlockedBadges = 0;
        profileBadgeContainer.innerHTML = '';
        badgeData.forEach(badge => {
            if (userProgress.completedLessons.includes(badge.unlockIndex)) {
                unlockedBadges++;
                profileBadgeContainer.innerHTML += `<div class="flex flex-col items-center text-center" title="${badge.title}"><div class="badge-item unlocked w-16 h-16">${badge.icon}</div><p class="text-xs mt-2 text-slate-400">${badge.title}</p></div>`;
            }
        });
        if (unlockedBadges === 0) {
            profileBadgeContainer.innerHTML = '<p class="text-slate-500 text-sm">Belum ada lencana yang didapat.</p>';
        }

        summaryLevel.textContent = level;
        summaryXp.textContent = currentXp;
        summaryExercises.textContent = `${completedCount} / ${courseData.length}`;
        summaryBadges.textContent = `${unlockedBadges} / ${badgeData.length}`;
    };
        
    // === EVENT LISTENERS ===
    updateUsernameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('new-username').value.trim();
        if (!newUsername) return;

        let users = JSON.parse(localStorage.getItem('users'));
        let loggedInUsername = localStorage.getItem('loggedInUser');
        
        if (!users) { alert('Error: Data pengguna tidak ditemukan. Silakan login ulang.'); return; }
        
        if (newUsername !== loggedInUsername && users.some(user => user.username === newUsername)) {
            alert("Username sudah digunakan. Silakan pilih yang lain.");
            return;
        }

        const userIndex = users.findIndex(user => user.username === loggedInUsername);
        if (userIndex !== -1) {
            users[userIndex].username = newUsername;
        }
        
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('loggedInUser', newUsername);
        
        loadProfileData();
        showNotification("Username berhasil diperbarui!");
    });

    updatePasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPassword = document.getElementById('new-password').value;
        if (newPassword.length < 6) { alert('Password minimal harus 6 karakter.'); return; }

        let users = JSON.parse(localStorage.getItem('users'));
        let loggedInUsername = localStorage.getItem('loggedInUser');

        if (!users) { alert('Error: Data pengguna tidak ditemukan. Silakan login ulang.'); return; }

        const userIndex = users.findIndex(user => user.username === loggedInUsername);
        if (userIndex !== -1) {
            users[userIndex].password = newPassword;
        }

        localStorage.setItem('users', JSON.stringify(users));
        
        updatePasswordForm.reset();
        showNotification("Password berhasil diperbarui!");
    });

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loggedInUser');
        window.location.href = 'login.html';
    });

    resetProgressBtn.addEventListener('click', () => {
        const isConfirmed = confirm('Apakah Anda yakin ingin mereset semua progres modul? Tindakan ini tidak bisa dibatalkan.');
        if (isConfirmed) {
            const loggedInUsername = localStorage.getItem('loggedInUser');
            if (loggedInUsername) {
                const progressKey = `userProgress_${loggedInUsername}`;
                localStorage.removeItem(progressKey);
                showNotification("Progres berhasil direset!");
                loadProfileData();
            }
        }
    });

    avatarDropdownToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        avatarDropdownMenu.classList.toggle('hidden');
    });

    changeAvatarOption.addEventListener('click', () => {
        avatarDropdownMenu.classList.add('hidden');
        avatarUploadInput.click();
    });

    removeAvatarOption.addEventListener('click', () => {
        const loggedInUsername = localStorage.getItem('loggedInUser');
        if (loggedInUsername) {
            const avatarKey = `avatar_${loggedInUsername}`;
            localStorage.removeItem(avatarKey);
            loadProfileData();
            showNotification('Foto profil telah dihapus.');
            avatarDropdownMenu.classList.add('hidden');
        }
    });

    avatarUploadInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageDataUrl = e.target.result;
                avatarImage.src = imageDataUrl;
                const loggedInUsername = localStorage.getItem('loggedInUser');
                const avatarKey = `avatar_${loggedInUsername}`;
                localStorage.setItem(avatarKey, imageDataUrl);
                showNotification('Avatar berhasil diperbarui!');
            };
            reader.readAsDataURL(file);
        }
    });

    window.addEventListener('click', () => {
        if (!avatarDropdownMenu.classList.contains('hidden')) {
            avatarDropdownMenu.classList.add('hidden');
        }
    });

    // === INISIALISASI HALAMAN ===
    loadProfileData();
});