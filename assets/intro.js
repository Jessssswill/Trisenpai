document.addEventListener('DOMContentLoaded', () => {
    // === ELEMEN PENTING ===
    const landingSection = document.getElementById('landing-section');
    const animationSection = document.getElementById('animation-section');
    const startBtn = document.getElementById('start-btn');
    const continueBtn = document.getElementById('continue-btn');
    const typingSound = document.getElementById('typing-sound');
    const skipBtn = document.getElementById('skip-btn');

    // Fungsi pembantu untuk membuat jeda
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Fungsi pembantu untuk efek mengetik
    const typeText = (elementId, text) => {
        const element = document.querySelector(elementId);
        element.innerHTML = '';
        element.classList.remove('hidden'); // Pastikan elemen terlihat sebelum mengetik
        element.classList.add('visible');
        
        if (typingSound) {
            typingSound.currentTime = 0;
            typingSound.play().catch(e => console.error("Gagal memutar audio:", e));
        }

        return new Promise(resolve => {
            new Typed(elementId, {
                strings: [text],
                typeSpeed: 50,
                showCursor: true,
                cursorChar: '_',
                onComplete: (self) => {
                    self.cursor.remove();
                    if (typingSound) {
                        typingSound.pause();
                    }
                    resolve();
                }
            });
        });
    };

    // Fungsi pembantu lainnya (showElement, hideElement)
    const showElement = (elementId) => {
        const element = document.querySelector(elementId);
        if(!element) return;
        element.classList.remove('hidden');
        setTimeout(() => element.classList.add('visible'), 50);
    };
    
    const hideElement = (elementId) => {
        const element = document.querySelector(elementId);
        if(!element) return;
        element.classList.remove('visible');
        setTimeout(() => {
            element.classList.add('hidden');
        }, 500);
    };

    // Fungsi utama yang menjalankan urutan cerita (DIPERBAIKI)
    async function playIntroSequence() {
        startBtn.style.display = 'none'; // Sembunyikan tombol Get Started secara permanen

        // --- Adegan 1: Prolog Kerajaan Kuno ---
        await wait(500);
        await typeText('#text1', 'Dahulu kala...');
        await wait(1500);
        await typeText('#text2', '...sebuah kerajaan berdiri megah di atas pilar Logika dan Sihir.');
        await wait(3000);
        await typeText('#text3', 'Kekuatan mereka berasal dari Rune kuno yang terukir dalam barisan "Source Code".');
        await wait(4000);
        // Hapus semua teks setelah adegan selesai
        hideElement('#text1'); 
        hideElement('#text2'); 
        hideElement('#text3');
        await wait(1500);

        // --- Adegan 2: Kekuatan yang Memudar ---
        await typeText('#text1', 'Namun seiring waktu, kekuatan Rune itu mulai memudar.');
        showElement('#image-glitch');
        await wait(2500);
        await typeText('#text2', 'Struktur kode para leluhur terlupakan, dan kerajaan jatuh dalam keheningan.');
        await wait(4000);
        // Hapus semua elemen adegan kedua
        hideElement('#image-glitch'); 
        hideElement('#text1'); 
        hideElement('#text2');
        await wait(1500);

        // --- Adegan 3: Ramalan ---
        await typeText('#text1', 'Sebuah ramalan kuno berbicara tentang seorang terpilih...');
        await wait(2500);
        await typeText('#text2', `...seorang 'Rune Master' baru yang mampu membaca kembali 'Source Code' kuno.`);
        await wait(4000);
        // Hapus semua teks adegan ketiga
        hideElement('#text1'); 
        hideElement('#text2');
        await wait(1500);

        // --- Adegan 4: Panggilan untuk Pengguna ---
        await typeText('#text1', 'Seseorang yang memiliki logika untuk membangun...');
        await wait(2000);
        await typeText('#text2', '...dan kreativitas untuk menciptakan.');
        await wait(2500);
        await typeText('#text3', 'Seseorang... sepertimu.');
        await wait(3000);
        // Hapus semua teks adegan keempat
        hideElement('#text1'); 
        hideElement('#text2'); 
        hideElement('#text3');
        await wait(1500);

        // --- Adegan 5: Kata-kata Akhir ---
        await typeText('#text4', 'Gerbang Kode telah terbuka, Arsitek.');
        await wait(2000);
        await typeText('#text5', 'Takdirmu menanti.');
        await wait(2500);
        
        // --- Adegan 6: Redirect Otomatis ---
        window.location.href = 'isi.html';
    }

    // LOGIKA UTAMA: MEMULAI ANIMASI SETELAH TOMBOL DIKLIK
    startBtn.addEventListener('click', async () => {
        landingSection.style.display = 'none';
        animationSection.classList.remove('hidden');

        if (skipBtn) {
            skipBtn.classList.remove('hidden');
        }

        try {
            await typingSound.play();
            typingSound.pause();
        } catch (error) {
            console.error("Gagal mengaktifkan audio:", error);
        }
        
        playIntroSequence();
    });
});