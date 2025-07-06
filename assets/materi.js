document.addEventListener('DOMContentLoaded', () => {
    // === DATA MATERI ===
    const courseData = [ { title: 'Introduction to C Programming', lessons: [{ title: 'Pengenalan Bahasa C', xp: 50, content: `<h3 class="text-2xl font-bold text-white">Selamat Datang di Bahasa C</h3><p>Bahasa C adalah salah satu bahasa pemrograman paling fundamental dan berpengaruh yang pernah dibuat. Dikembangkan di Bell Labs oleh Dennis Ritchie, C menjadi dasar bagi banyak bahasa lain, termasuk C++, C#, dan Objective-C.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZXJ5MWo4ZWZ1eno5bmxmMjNkbXdsbnR1dWFkbHhzNDBtbjJsaXQ1eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/szaTML0LZFAQa3do7Y/giphy.gif', content_after_gif: `<p>Fungsi utama untuk menampilkan output di C adalah <code>printf()</code>, yang merupakan bagian dari library standar input/output (<code>stdio.h</code>).</p>`, code: `#include <stdio.h>\n\nint main() {\n    printf("Hello, C!");\n    return 0;\n}`, output: `Hello, C!`, videoSrc: 'videos/c_intro.mp4' }] }, { title: 'Operators', lessons: [{ title: 'Mengenal Operator di C', xp: 75, content: `<h3 class="text-2xl font-bold text-white">Jenis-jenis Operator</h3><p>Operator adalah simbol yang memberitahu compiler untuk melakukan manipulasi matematis atau logis tertentu.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZXVmdnJyaWM2YzZwN3k0NWtna3hoZHo3ZmVzNmY3OXFrcnJndG9sbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26xBBBHZVnC2zloGI/giphy.gif', content_after_gif: `<p>Bahasa C kaya akan operator, termasuk:</p><ul><li><strong>Operator Aritmatika:</strong> +, -, *, /, %</li><li><strong>Operator Relasional:</strong> ==, !=, >, <, >=, <=</li><li><strong>Operator Logika:</strong> &&, ||, !</li></ul>`, code: `int a = 10, b = 4;\nint hasil = a % b; // Modulo (sisa bagi)\nprintf("Sisa bagi dari 10 / 4 adalah %d", hasil);`, output: `Sisa bagi dari 10 / 4 adalah 2`, videoSrc: 'videos/c_operators.mp4' }] }, { title: 'Selection', lessons: [{ title: 'Struktur Seleksi (If-Else & Switch)', xp: 100, content: `<h3 class="text-2xl font-bold text-white">Mengambil Keputusan</h3><p>Struktur seleksi memungkinkan program Anda untuk memilih jalur eksekusi yang berbeda berdasarkan kondisi tertentu.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dDRqZXlvenQ5ZGhzZDIxM21ueHY3bjF3NXRnd282ZHB0a3czYXA1YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iegwoAJoMBa1xLr6De/giphy.gif', content_after_gif: `<p><code>if-else</code> digunakan untuk kondisi boolean, sementara <code>switch-case</code> digunakan untuk membandingkan satu variabel dengan banyak nilai konstan.</p>`, code: `int nilai = 85;\nif (nilai >= 80) {\n    printf("Nilai Anda A");\n} else {\n    printf("Terus belajar!");\n}`, output: `Nilai Anda A`, videoSrc: 'videos/c_selection.mp4' }] }, { title: 'Repetition', lessons: [{ title: 'Struktur Perulangan (For, While, Do-While)', xp: 100, content: `<h3 class="text-2xl font-bold text-white">Melakukan Tugas Berulang</h3><p>Perulangan digunakan untuk mengeksekusi blok kode berulang kali.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dDRqZXlvenQ5ZGhzZDIxM21ueHY3bjF3NXRnd282ZHB0a3czYXA1YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hoIFd5c6YIAFv8yedH/giphy.gif', content_after_gif: `<p><code>for</code> loop ideal untuk perulangan yang terhitung, <code>while</code> untuk perulangan berbasis kondisi, dan <code>do-while</code> menjamin eksekusi setidaknya satu kali.</p>`, code: `for (int i = 1; i <= 5; i++) {\n    printf("Perulangan ke-%d\\n", i);\n}`, output: `Perulangan ke-1\nPerulangan ke-2\nPerulangan ke-3\nPerulangan ke-4\nPerulangan ke-5`, videoSrc: 'videos/c_repetition.mp4' }] }, { title: 'String Manipulation', lessons: [{ title: 'Manipulasi String', xp: 120, content: `<h3 class="text-2xl font-bold text-white">Bekerja dengan Teks</h3><p>Di C, string direpresentasikan sebagai array dari karakter (<code>char</code>) yang diakhiri dengan karakter null (<code>\\0</code>).</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWR6czVpcDJ3aGhoZTRwaTlrY2pyaTZlajBnaHg3MzRoZGEwMHAzcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ov9k27tmt0r5z5B16/giphy.gif', content_after_gif: `<p>Library <code>string.h</code> menyediakan banyak fungsi berguna seperti <code>strcpy()</code> (menyalin string) dan <code>strlen()</code> (menghitung panjang string).</p>`, code: `#include <string.h>\n\nchar nama[20];\nstrcpy(nama, "Budi");\nprintf("Halo, %s", nama);`, output: `Halo, Budi`, videoSrc: 'videos/c_string.mp4' }] }, { title: 'Pointer and Array', lessons: [{ title: 'Pointer dan Array', xp: 150, content: `<h3 class="text-2xl font-bold text-white">Akses Memori Langsung</h3><p>Pointer adalah variabel yang menyimpan alamat memori dari variabel lain.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bHl3ejFucjU1aGZpYWR1b204dWlvd3B3d3V2ODluMDloeTIydDlvdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wyggNMYdS6uVG/giphy.gif', content_after_gif: `<p>Mereka sangat kuat dan memiliki hubungan yang erat dengan array. Nama sebuah array sebenarnya adalah pointer ke elemen pertamanya.</p>`, code: `int angka[] = {10, 20, 30};\nint *ptr = angka;\nprintf("Elemen kedua: %d", *(ptr + 1));`, output: `Elemen kedua: 20`, videoSrc: 'videos/c_pointer_array.mp4' }] }, { title: 'Midterm Exam Simulation', lessons: [{ title: 'Simulasi Ujian Tengah Semester', xp: 200, content: `<p>Uji pemahaman Anda sejauh ini dengan menyelesaikan serangkaian soal yang mencakup semua topik dari pengenalan hingga pointer dan array.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OGVxcGxkdGFtMnE2ejRyajhoaDh4ZnRlaHNpcHdwMjIzbnZuc3kwYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7bCBsz5VYuqU5Fk7d6/giphy.gif', content_after_gif: '', code: `// Soal: Buat program untuk membalik sebuah string.\n// Jawaban Anda di sini...`, output: `(Output bervariasi tergantung implementasi)`, videoSrc: 'videos/c_midterm.mp4' }] }, { title: 'Function', lessons: [{ title: 'Membuat dan Menggunakan Fungsi', xp: 100, content: `<p>Fungsi adalah blok kode yang dapat digunakan kembali yang hanya berjalan saat dipanggil.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c3R4Z2RjZ3lpbXpuMGY2aTVqN203Nm02YmxycnYzazRlOHp5dnU3YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DHBGehJ3FSZEygszX3/giphy.gif', content_after_gif: `<p>Mereka membantu memecah program besar menjadi bagian-bagian yang lebih kecil dan lebih mudah dikelola.</p>`, code: `int kuadrat(int x) {\n    return x * x;\n}\n\nint main() {\n    printf("Hasil dari 5 kuadrat adalah %d", kuadrat(5));\n    return 0;\n}`, output: `Hasil dari 5 kuadrat adalah 25`, videoSrc: 'videos/c_function.mp4' }] }, { title: 'Recursion', lessons: [{ title: 'Fungsi Rekursif', xp: 125, content: `<p>Rekursi adalah teknik di mana sebuah fungsi memanggil dirinya sendiri.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c3R4Z2RjZ3lpbXpuMGY2aTVqN203Nm02YmxycnYzazRlOHp5dnU3YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7Tzup7ATZEuMVwZ4Te/giphy.gif', content_after_gif: `<p>Ini adalah pendekatan yang kuat untuk memecahkan masalah yang dapat dipecah menjadi sub-masalah yang lebih kecil dari jenis yang sama, seperti faktorial.</p>`, code: `int faktorial(int n) {\n    if (n <= 1) return 1;\n    return n * faktorial(n - 1);\n}\n\n// Memanggil faktorial(4)`, output: `24`, videoSrc: 'videos/c_recursion.mp4' }] }, { title: 'Structures', lessons: [{ title: 'Bekerja dengan Struct', xp: 120, content: `<p>Struct (struktur) adalah tipe data komposit yang ditentukan pengguna yang memungkinkan untuk menggabungkan item data dari tipe yang berbeda di bawah satu nama.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MHhrcGpjbnI0cWZxb2FwOXU4N3o5eWFweG9ocjBoMDNqN2dmYWkydCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hXgDWPI2M5X9sVPlpp/giphy.gif', content_after_gif: '', code: `struct Mahasiswa {\n    char nama[50];\n    int umur;\n};\n\nstruct Mahasiswa mhs1;\nmhs1.umur = 20;`, output: `(Tidak ada output, hanya deklarasi)`, videoSrc: 'videos/c_struct.mp4' }] }, { title: 'File Processing', lessons: [{ title: 'Membaca dan Menulis File', xp: 150, content: `<p>Pemrosesan file memungkinkan program Anda untuk membaca data dari dan menulis data ke file di disk. Ini penting untuk persistensi data.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MXJoejJjYWVsNDJmaHNrbDh2NmQxeWtrZTVuYXBmNG0yN3AyOXg0ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/L4HhVNOsxzsT6XFmWv/giphy.gif', content_after_gif: `<p>Fungsi utamanya adalah <code>fopen()</code>, <code>fprintf()</code>, <code>fscanf()</code>, dan <code>fclose()</code>.</p>`, code: `FILE *fp;\nfp = fopen("test.txt", "w");\nfprintf(fp, "Halo file!");\nfclose(fp);`, output: `(File 'test.txt' dibuat dengan konten 'Halo file!')`, videoSrc: 'videos/c_file.mp4' }] }, { title: 'Sorting 1', lessons: [{ title: 'Algoritma Sorting Dasar', xp: 130, content: `<p>Sorting adalah proses mengatur elemen dalam urutan tertentu. Algoritma dasar seperti Bubble Sort, Selection Sort, dan Insertion Sort adalah fondasi yang bagus untuk dipelajari, meskipun kurang efisien untuk dataset besar.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bWVoMWVmdTBjN3pvOHAzN2YybDNpYmlia3U2MWQ0ZXVuM2R6Y3kyNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ea74cjF0jieXu/giphy.gif', content_after_gif: '', code: `// Implementasi Bubble Sort\n// ...`, output: `Array sebelum: 5 1 4 2 8\nArray sesudah: 1 2 4 5 8`, videoSrc: 'videos/c_sort1.mp4' }] }, { title: 'Sorting 2', lessons: [{ title: 'Algoritma Sorting Lanjutan', xp: 150, content: `<p>Untuk performa yang lebih baik, algoritma sorting lanjutan seperti Merge Sort dan Quick Sort digunakan. Mereka menggunakan pendekatan "divide and conquer" untuk mencapai efisiensi waktu yang jauh lebih baik.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZXBuaWgzbnNmb2hkMmJ4Zm5peXI1ZGR6bXQzbnEyd2VlN2p3ZW16MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BCK1i9BrGz8UkFGuq4/giphy.gif', content_after_gif: '', code: `// Implementasi Quick Sort\n// ...`, output: `Array terurut: ...`, videoSrc: 'videos/c_sort2.mp4' }] }, { title: 'Searching', lessons: [{ title: 'Algoritma Pencarian', xp: 120, content: `<p>Algoritma pencarian digunakan untuk menemukan item tertentu dalam sebuah koleksi. Linear Search adalah yang paling sederhana, sementara Binary Search jauh lebih efisien tetapi memerlukan data yang sudah terurut.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZXBuaWgzbnNmb2hkMmJ4Zm5peXI1ZGR6bXQzbnEyd2VlN2p3ZW16MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ssTuHIyG3cF2VCPIa4/giphy.gif', content_after_gif: '', code: `// Implementasi Binary Search\n// ...`, output: `Elemen ditemukan di indeks: 4`, videoSrc: 'videos/c_search.mp4' }] }, { title: 'Final Exam Simulation', lessons: [{ title: 'Simulasi Ujian Akhir Semester', xp: 300, content: `<p>Terapkan semua pengetahuan C Anda dalam simulasi ujian akhir ini. Soal akan mencakup semua topik dari awal hingga akhir, menguji kemampuan pemecahan masalah Anda secara komprehensif.</p>`, gifSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cHJ1dmVteGgyeTU4bzZuZHM4aHI3aW4xcmhhdmczMnFyemN5OGMwaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pKFpaOoSzMfCFgXvyA/giphy.gif', content_after_gif: '', code: `// Soal: Buat sistem manajemen data mahasiswa sederhana menggunakan struct dan file.\n// Jawaban Anda di sini...`, output: `(Output bervariasi tergantung implementasi)`, videoSrc: 'videos/c_final.mp4' }] }
    ];

    // === ELEMEN DOM ===
    const lessonTitleEl = document.getElementById('lesson-title');
    const lessonContentEl = document.getElementById('lesson-content');
    const codeBlockEl = document.getElementById('code-block');
    const copyCodeBtn = document.getElementById('copy-code-btn');
    const copyCodeText = document.getElementById('copy-code-text');
    const outputSection = document.getElementById('output-section');
    const outputBlockEl = document.getElementById('output-block');
    const copyOutputBtn = document.getElementById('copy-output-btn');
    const copyOutputText = document.getElementById('copy-output-text');
    const watchVideoBtn = document.getElementById('watch-video-btn');
    const videoContainer = document.getElementById('video-container');
    const videoSourceEl = document.querySelector('#lesson-video source');
    const backToModulesBtn = document.getElementById('back-to-modules-btn');
    const lessonGifContainer = document.getElementById('lesson-gif-container');
    const lessonGif = document.getElementById('lesson-gif');
    const markAsCompleteBtn = document.getElementById('mark-as-complete-btn'); // <-- Tombol Baru

    const loadLessonContent = () => {
        const params = new URLSearchParams(window.location.search);
        const lessonIndex = parseInt(params.get('lesson'));

        // Cek login sebelum memuat konten
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            window.location.replace('login.html');
            return;
        }

        let flatLessonData = courseData.flatMap(module => module.lessons);
        const lessonToShow = flatLessonData[lessonIndex];

        if (isNaN(lessonIndex) || !lessonToShow) {
            lessonTitleEl.textContent = 'Materi Tidak Ditemukan';
            lessonContentEl.innerHTML = '<p>Materi yang Anda cari tidak ada atau URL tidak valid. Silakan kembali ke halaman modul.</p>';
            document.getElementById('completion-section').classList.add('hidden');
            return;
        }

        lessonTitleEl.textContent = lessonToShow.title;
        
        let fullContent = lessonToShow.content || '';
        if (lessonToShow.gifSrc) {
            lessonGif.src = lessonToShow.gifSrc;
            lessonGifContainer.classList.remove('hidden');
        } else {
            lessonGifContainer.classList.add('hidden');
        }
        if(lessonToShow.content_after_gif){
            fullContent += lessonToShow.content_after_gif;
        }
        lessonContentEl.innerHTML = fullContent;
        
        codeBlockEl.textContent = lessonToShow.code;
        
        if (lessonToShow.output) {
            outputBlockEl.textContent = lessonToShow.output;
            outputSection.classList.remove('hidden');
        } else {
            outputSection.classList.add('hidden');
        }

        if(videoSourceEl) {
           videoSourceEl.src = lessonToShow.videoSrc;
           document.querySelector('#lesson-video').load();
        }

        // Cek apakah pelajaran sudah selesai untuk mengubah teks tombol
        const loggedInUsername = localStorage.getItem('loggedInUser');
        const progressKey = `userProgress_${loggedInUsername}`;
        const userProgress = JSON.parse(localStorage.getItem(progressKey)) || { completedLessons: [] };

        if (userProgress.completedLessons.includes(lessonIndex)) {
            markAsCompleteBtn.textContent = 'Selesai! Kembali ke Modul';
            markAsCompleteBtn.classList.add('completed');
        } else {
            markAsCompleteBtn.textContent = 'Tandai Selesai & Kembali';
            markAsCompleteBtn.classList.remove('completed');
        }
    };

    const copyToClipboard = (text, buttonTextElement) => {
        navigator.clipboard.writeText(text).then(() => {
            buttonTextElement.textContent = 'Disalin!';
            setTimeout(() => { buttonTextElement.textContent = 'Salin'; }, 2000);
        }).catch(err => {
            console.error('Gagal menyalin: ', err);
        });
    };
    
    // === EVENT LISTENERS ===
    if(copyCodeBtn) copyCodeBtn.addEventListener('click', () => copyToClipboard(codeBlockEl.textContent, copyCodeText));
    if(copyOutputBtn) copyOutputBtn.addEventListener('click', () => copyToClipboard(outputBlockEl.textContent, copyOutputText));
    if(watchVideoBtn) watchVideoBtn.addEventListener('click', () => videoContainer.classList.toggle('expanded'));
    if(backToModulesBtn) backToModulesBtn.addEventListener('click', () => window.location.href = 'modul.html');
    
    if(markAsCompleteBtn) {
        markAsCompleteBtn.addEventListener('click', () => {
            const loggedInUsername = localStorage.getItem('loggedInUser');
            if (!loggedInUsername) return; // Pengaman jika username tidak ada

            const params = new URLSearchParams(window.location.search);
            const lessonIndex = parseInt(params.get('lesson'));
            if (isNaN(lessonIndex)) return; // Pengaman jika index tidak valid

            const progressKey = `userProgress_${loggedInUsername}`;
            let userProgress = JSON.parse(localStorage.getItem(progressKey)) || { completedLessons: [] };

            // Hanya tambahkan jika belum ada
            if (!userProgress.completedLessons.includes(lessonIndex)) {
                userProgress.completedLessons.push(lessonIndex);
                localStorage.setItem(progressKey, JSON.stringify(userProgress));
            }

            // Arahkan kembali ke halaman modul
            window.location.href = 'modul.html';
        });
    }

    // === INISIALISASI HALAMAN ===
    loadLessonContent();
});