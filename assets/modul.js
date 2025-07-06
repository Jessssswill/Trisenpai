// --- BAGIAN 1: GERBANG KEAMANAN & INISIALISASI PENGGUNA ---
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.replace('login.html');
}
const loggedInUsername = localStorage.getItem('loggedInUser') || 'Pengguna';


// --- BAGIAN 2: LOGIKA UTAMA HALAMAN MODUL ---
document.addEventListener('DOMContentLoaded', () => {
    
    // === DATA KURSUS & SIDEBAR (Tidak berubah) ===
    const courseData = [ { title: 'Introduction to C Programming', lessons: [{ title: 'Pengenalan Bahasa C', xp: 50 }] }, { title: 'Operators', lessons: [{ title: 'Mengenal Operator di C', xp: 75 }] }, { title: 'Selection', lessons: [{ title: 'Struktur Seleksi (If-Else & Switch)', xp: 100 }] }, { title: 'Repetition', lessons: [{ title: 'Struktur Perulangan (For, While, Do-While)', xp: 100 }] }, { title: 'String Manipulation', lessons: [{ title: 'Manipulasi String', xp: 120 }] }, { title: 'Pointer and Array', lessons: [{ title: 'Pointer dan Array', xp: 150 }] }, { title: 'Midterm Exam Simulation', lessons: [{ title: 'Simulasi Ujian Tengah Semester', xp: 200 }] }, { title: 'Function', lessons: [{ title: 'Membuat dan Menggunakan Fungsi', xp: 100 }] }, { title: 'Recursion', lessons: [{ title: 'Fungsi Rekursif', xp: 125 }] }, { title: 'Structures', lessons: [{ title: 'Bekerja dengan Struct', xp: 120 }] }, { title: 'File Processing', lessons: [{ title: 'Membaca dan Menulis File', xp: 150 }] }, { title: 'Sorting 1', lessons: [{ title: 'Algoritma Sorting Dasar', xp: 130 }] }, { title: 'Sorting 2', lessons: [{ title: 'Algoritma Sorting Lanjutan', xp: 150 }] }, { title: 'Searching', lessons: [{ title: 'Algoritma Pencarian', xp: 120 }] }, { title: 'Final Exam Simulation', lessons: [{ title: 'Simulasi Ujian Akhir Semester', xp: 300 }] } ];
    const badgeData = [ { title: "C Initiate", unlockIndex: 3, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>` }, { title: "Midterm Survivor", unlockIndex: 6, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>` }, { title: "Data Architect", unlockIndex: 10, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>` }, { title: "C Master", unlockIndex: 14, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11.33V8l-5 4 5 4v-3.33"/><path d="M15 12.67V16l5-4-5-4v3.33"/><path d="M12 18V6"/></svg>` } ];
    const cheatSheetData = [ { title: "C Basics", unlockIndex: 3, file: "cheatsheet_basics.html" }, { title: "C Advanced", unlockIndex: 7, file: "cheatsheet_advanced.html" } ];

    // === ELEMEN DOM ===
    const moduleContainer = document.getElementById('module-container');
    const progressExercisesText = document.getElementById('progress-exercises-text');
    const progressXpText = document.getElementById('progress-xp-text');
    const userLevel = document.getElementById('user-level');
    const badgeContainer = document.getElementById('badge-container');
    const badgeCount = document.getElementById('badge-count');
    const cheatsheetContainer = document.getElementById('cheatsheet-container');
    const cheatsheetCount = document.getElementById('cheatsheet-count');
    const userDisplayName = document.getElementById('user-display-name');
    const profileCardName = document.getElementById('profile-card-name');
    const sidebarProfileName = document.getElementById('sidebar-profile-name');
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const profileDropdownContainer = document.getElementById('profile-dropdown-container');
    const profileButton = document.getElementById('profile-button');
    const profileDropdownMenu = document.getElementById('profile-dropdown-menu');
    const logoutButton = document.getElementById('logout-button');
    const logoutButtonMobile = document.getElementById('logout-button-mobile');
    // ▼▼▼ TAMBAHKAN DEKLARASI ELEMEN AVATAR ▼▼▼
    const headerAvatarImage = document.getElementById('header-avatar-image');
    const sidebarAvatarImage = document.getElementById('sidebar-avatar-image');

    // === STATE MANAGEMENT ===
    const progressKey = `userProgress_${loggedInUsername}`;
    let userProgress = JSON.parse(localStorage.getItem(progressKey)) || { completedLessons: [] };
    const saveProgress = () => localStorage.setItem(progressKey, JSON.stringify(userProgress));

    // ▼▼▼ FUNGSI BARU UNTUK MEMBUAT AVATAR DEFAULT (SAMA SEPERTI DI PROFILE.JS) ▼▼▼
    const generateDefaultAvatar = (initial, username) => {
    const colors = ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#06b6d4", "#3b82f6", "#8b5cf6", "#d946ef"];
    // Buat hash sederhana dari username untuk memilih warna yang konsisten
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
        hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = colors[Math.abs(hash % colors.length)];

    // Buat gambar SVG secara dinamis (TANPA width dan height)
    const svg = `
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <circle cx="64" cy="64" r="64" fill="${color}" />
            <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" fill="white" font-size="64" font-family="Inter, sans-serif" font-weight="bold">
                ${initial}
            </text>
        </svg>
    `;
    // Kembalikan sebagai Data URL agar bisa dipakai di <img>
    return `data:image/svg+xml;base64,${btoa(svg)}`;
};

    // ▼▼▼ FUNGSI BARU UNTUK MEMPERBARUI SEMUA AVATAR DI HALAMAN ▼▼▼
    const updateAvatars = () => {
        const avatarKey = `avatar_${loggedInUsername}`;
        const savedAvatar = localStorage.getItem(avatarKey);
        if (savedAvatar) {
            if(headerAvatarImage) headerAvatarImage.src = savedAvatar;
            if(sidebarAvatarImage) sidebarAvatarImage.src = savedAvatar;
        } else {
            const initial = loggedInUsername.charAt(0).toUpperCase();
            const defaultAvatar = generateDefaultAvatar(initial, loggedInUsername);
            if(headerAvatarImage) headerAvatarImage.src = defaultAvatar;
            if(sidebarAvatarImage) sidebarAvatarImage.src = defaultAvatar;
        }
    };

    // === FUNGSI RENDER UTAMA ===
    const renderAll = () => {
        if (moduleContainer) {
            moduleContainer.innerHTML = '';
            let lessonGlobalIndex = 0;
            let firstUncompletedFound = false;
            courseData.forEach((module, moduleIndex) => {
                const isCompleted = userProgress.completedLessons.includes(lessonGlobalIndex);
                let openAttribute = '';
                if (!isCompleted && !firstUncompletedFound) {
                    openAttribute = 'open';
                    firstUncompletedFound = true;
                }
                const headerColorClasses = isCompleted ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-700 text-slate-300';
                moduleContainer.innerHTML += `<details class="module-card" ${openAttribute}><summary class="flex items-center justify-between p-4 cursor-pointer rounded-t-xl"><div class="flex items-center space-x-4"><span class="flex items-center justify-center w-8 h-8 rounded-full ${headerColorClasses} font-bold">${moduleIndex + 1}</span><h2 class="text-lg font-semibold text-white">${module.title}</h2></div><svg class="chevron w-5 h-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" /></svg></summary><div class="p-4 border-t border-slate-700/50 space-y-2"><div class="flex justify-between items-center"><span class="text-slate-300">${module.lessons[0].title}</span><a href="materi.html?lesson=${lessonGlobalIndex}" class="lesson-item btn-3d-action" data-lesson-index="${lessonGlobalIndex}">${isCompleted ? 'Lihat Lagi' : 'Mulai'}</a></div></div></details>`;
                lessonGlobalIndex++;
            });
            addLessonEventListeners();
        }

        const totalLessons = courseData.length;
        const completedCount = userProgress.completedLessons.length;
        let totalXp = courseData.reduce((sum, mod) => sum + mod.lessons[0].xp, 0);
        let currentXp = userProgress.completedLessons.reduce((sum, index) => sum + (courseData[index]?.lessons[0]?.xp || 0), 0);
        
        if (progressExercisesText) progressExercisesText.textContent = `${completedCount} / ${totalLessons}`;
        if (progressXpText) progressXpText.textContent = `${currentXp} / ${totalXp}`;
        if (userLevel) userLevel.textContent = `Level ${Math.floor(currentXp / 200) + 1}`;

        if (badgeContainer) {
            badgeContainer.innerHTML = '';
            let unlockedBadges = 0;
            badgeData.forEach(badge => {
                const isUnlocked = userProgress.completedLessons.includes(badge.unlockIndex);
                if (isUnlocked) unlockedBadges++;
                badgeContainer.innerHTML += `<div class="badge-item ${isUnlocked ? 'unlocked' : 'locked'}" title="${badge.title} ${isUnlocked ? '(Unlocked)' : '(Locked)'}">${badge.icon}</div>`;
            });
            if (badgeCount) badgeCount.textContent = `${unlockedBadges} / ${badgeData.length}`;
        }

        if (cheatsheetContainer) {
            cheatsheetContainer.innerHTML = '';
            let unlockedCheatsheets = 0;
            cheatSheetData.forEach(sheet => {
                const isUnlocked = userProgress.completedLessons.includes(sheet.unlockIndex);
                if (isUnlocked) unlockedCheatsheets++;
                cheatsheetContainer.innerHTML += `<a href="${isUnlocked ? sheet.file : '#'}" target="_blank" class="cheatsheet-link ${isUnlocked ? 'enabled' : 'disabled'}" title="${sheet.title}"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg><span>${isUnlocked ? sheet.title : `Unlock after Ch. ${sheet.unlockIndex + 1}`}</span></a>`;
            });
            if (cheatsheetCount) cheatsheetCount.textContent = `${unlockedCheatsheets} / ${cheatSheetData.length}`;
        }
    };

    // === EVENT LISTENERS ===
    const addLessonEventListeners = () => {
        document.querySelectorAll('.lesson-item').forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                const rect = button.getBoundingClientRect();
                const particleCount = 15;
                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    particle.style.left = `${e.clientX - rect.left}px`;
                    particle.style.top = `${e.clientY - rect.top}px`;
                    const width = Math.random() * 20 + 5; const height = Math.random() * 2 + 1; const duration = Math.random() * 0.4 + 0.3; const delay = Math.random() * 0.2; const direction = (Math.random() > 0.5) ? 1 : -1; const distance = Math.random() * 50 + 20;
                    particle.style.setProperty('--width', `${width}px`); particle.style.setProperty('--height', `${height}px`); particle.style.setProperty('--direction', direction); particle.style.setProperty('--distance', `${distance}px`);
                    particle.style.animationDuration = `${duration}s`; particle.style.animationDelay = `${delay}s`;
                    button.appendChild(particle);
                    particle.addEventListener('animationend', () => { particle.remove(); });
                }
                const lessonIndex = parseInt(button.dataset.lessonIndex);
                if (!userProgress.completedLessons.includes(lessonIndex)) {
                    userProgress.completedLessons.push(lessonIndex);
                    saveProgress();
                }
                setTimeout(() => { window.location.href = button.href; }, 400); 
            });
        });
    };

    const setupPageEventListeners = () => {
        if (hamburgerButton && mobileMenu) {
            hamburgerButton.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });
        }
        if (profileButton && profileDropdownMenu) {
            profileButton.addEventListener('click', (event) => {
                event.stopPropagation();
                profileDropdownMenu.classList.toggle('hidden');
            });
            window.addEventListener('click', (event) => {
                if (profileDropdownContainer && !profileDropdownContainer.contains(event.target)) {
                    profileDropdownMenu.classList.add('hidden');
                }
            });
        }
        const handleLogout = () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('loggedInUser');
            window.location.replace('login.html');
        };
        if (logoutButton) logoutButton.addEventListener('click', handleLogout);
        if (logoutButtonMobile) logoutButtonMobile.addEventListener('click', handleLogout);
    };
    
    // === INISIALISASI HALAMAN ===
    if (userDisplayName) userDisplayName.textContent = loggedInUsername;
    if (profileCardName) profileCardName.textContent = loggedInUsername;
    if (sidebarProfileName) sidebarProfileName.textContent = loggedInUsername;
    updateAvatars(); // Panggil fungsi update avatar saat halaman dimuat
    
    setupPageEventListeners();
    renderAll();
});