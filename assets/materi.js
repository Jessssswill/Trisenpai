document.addEventListener("DOMContentLoaded", () => {
  const courseData = [
    // CHAPTER 1
    {
      lessons: [
        {
          title: "Pengenalan Bahasa C",
          xp: 50,
          content: `<h3 class="text-2xl font-bold text-white">Selamat Datang di Dunia C!</h3><p>Bahasa C adalah bahasa pemrograman prosedural yang dikembangkan pada awal tahun 70-an oleh Dennis Ritchie. Karena efisiensi dan kontrol tingkat rendahnya terhadap hardware, C menjadi sangat populer dan menjadi fondasi bagi banyak sistem operasi (seperti Windows, Linux, dan macOS) serta bahasa modern lainnya (C++, Java, Python).</p><p>Setiap program C perlu dikompilasi (diterjemahkan) dari kode yang kita tulis menjadi bahasa mesin yang dimengerti oleh komputer sebelum bisa dijalankan.</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZXJ5MWo4ZWZ1eno5bmxmMjNkbXdsbnR1dWFkbHhzNDBtbjJsaXQ1eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/szaTML0LZFAQa3do7Y/giphy.gif",
          content_after_gif: `<p>Struktur dasar program C terdiri dari beberapa bagian penting. Fungsi <code>main()</code> adalah titik awal di mana eksekusi program dimulai. Perintah <code>#include <stdio.h></code> digunakan untuk mengimpor 'Standard Input/Output Library', yang berisi fungsi-fungsi dasar seperti <code>printf()</code> untuk menampilkan teks ke layar.</p>`,
          code: `// Mengimpor library standar untuk fungsi input-output
#include <stdio.h>

// Fungsi utama, di sinilah program mulai berjalan
int main() {
    // printf() adalah fungsi untuk mencetak teks ke konsol.
    // Teks yang ingin dicetak harus berada di dalam tanda kutip "".
    // \\n adalah karakter khusus untuk membuat baris baru.
    printf("Hello, World!\\n");

    // Mengembalikan nilai 0 untuk menandakan program selesai dengan sukses.
    return 0;
}`,
          output: `Hello, World!`,
          videoSrc: "videos/coba.mp4", // DIUBAH
        },
      ],
    },
    // CHAPTER 2
    {
      lessons: [
        {
          title: "Mengenal Operator di C",
          xp: 75,
          content: `<h3 class="text-2xl font-bold text-white">Alat untuk Kalkulasi dan Logika</h3><p>Operator adalah simbol khusus yang digunakan untuk melakukan operasi pada variabel dan nilai. Anggap saja mereka sebagai 'kata kerja' dalam bahasa pemrograman yang memberitahu komputer untuk melakukan sesuatu, seperti menjumlahkan, membandingkan, atau memberikan nilai.</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZXVmdnJyaWM2YzZwN3k0NWtna3hoZHo3ZmVzNmY3OXFrcnJndG9sbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26xBBBHZVnC2zloGI/giphy.gif",
          content_after_gif: `<p>Di C, operator terbagi menjadi beberapa jenis utama:</p><ul class="list-disc pl-6 space-y-2"><li><strong>Operator Aritmatika:</strong> Untuk operasi matematika seperti <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, dan <code>%</code> (modulo/sisa bagi).</li><li><strong>Operator Relasional:</strong> Untuk membandingkan dua nilai seperti <code>==</code> (sama dengan), <code>!=</code> (tidak sama dengan), <code>></code>, <code><</code>. Hasilnya adalah 1 (true) atau 0 (false).</li><li><strong>Operator Logika:</strong> Untuk menggabungkan beberapa kondisi seperti <code>&&</code> (DAN), <code>||</code> (ATAU), dan <code>!</code> (TIDAK).</li></ul>`,
          code: `#include <stdio.h>

int main() {
    int a = 15;
    int b = 4;
    
    // Operator Aritmatika
    printf("a + b = %d\\n", a + b);
    printf("a %% b = %d\\n", a % b); // sisa bagi dari 15 / 4 adalah 3
    
    // Operator Relasional
    printf("Apakah a > b? %d\\n", a > b); // 1 berarti true
    
    // Operator Logika
    int umur = 20;
    int punyaSIM = 1; // 1 untuk true (punya SIM)
    printf("Boleh mengendarai mobil? %d\\n", (umur > 17 && punyaSIM == 1));
    
    return 0;
    
}`,
          output: `a + b = 19\na % b = 3\nApakah a > b? 1\nBoleh mengendarai mobil? 1`,
          videoSrc: "videos/c_operators.mp4",
        },
      ],
    },
    // CHAPTER 3
    {
      lessons: [
        {
          title: "Struktur Seleksi (If-Else & Switch)",
          xp: 100,
          content: `<h3 class="text-2xl font-bold text-white">Membuat Program Memilih Jalan</h3><p>Sering kali, kita ingin program melakukan tindakan yang berbeda tergantung pada kondisi tertentu. Inilah gunanya struktur seleksi. Program Anda bisa 'berpikir' dan memilih jalur mana yang harus diambil, seperti persimpangan jalan.</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dDRqZXlvenQ5ZGhzZDIxM21ueHY3bjF3NXRnd282ZHB0a3czYXA1YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iegwoAJoMBa1xLr6De/giphy.gif",
          content_after_gif: `<p>Struktur <code>if-else if-else</code> sangat fleksibel untuk berbagai kondisi. Selain itu, ada juga <code>switch-case</code> yang lebih efisien jika Anda perlu membandingkan satu variabel dengan banyak kemungkinan nilai konstan, seperti memilih menu.</p>`,
          code: `#include <stdio.h>

int main() {
    char pilihanMenu = 'B';

    printf("Menu yang dipilih: %c\\n", pilihanMenu);

    // Memilih tindakan berdasarkan nilai variabel 'pilihanMenu'
    switch (pilihanMenu) {
        case 'A':
            printf("Anda memesan Nasi Goreng.\\n");
            break; // 'break' penting agar tidak lanjut ke case berikutnya
        case 'B':
            printf("Anda memesan Mie Ayam.\\n");
            break;
        case 'C':
            printf("Anda memesan Soto.\\n");
            break;
        default: // 'default' dijalankan jika tidak ada case yang cocok
            printf("Pilihan tidak valid.\\n");
            break;
    }

    return 0;
}`,
          output: `Menu yang dipilih: B\nAnda memesan Mie Ayam.`,
          videoSrc: "videos/c_selection.mp4",
        },
      ],
    },
    // CHAPTER 4
    {
      lessons: [
        {
          title: "Struktur Perulangan (For, While, Do-While)",
          xp: 100,
          content: `<h3 class="text-2xl font-bold text-white">Melakukan Tugas Berulang Kali</h3><p>Dalam pemrograman, kita sering kali perlu melakukan tugas yang sama berulang-ulang. Daripada menulis kode yang sama berkali-kali, kita menggunakan struktur perulangan atau 'loop'.</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dDRqZXlvenQ5ZGhzZDIxM21ueHY3bjF3NXRnd282ZHB0a3czYXA1YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hoIFd5c6YIAFv8yedH/giphy.gif",
          content_after_gif: `<p>Ada tiga jenis loop utama di C:</p><ul class="list-disc pl-6 space-y-2"><li><strong><code>for</code> loop:</strong> Terbaik untuk perulangan yang jumlahnya sudah diketahui di awal.</li><li><strong><code>while</code> loop:</strong> Mengecek kondisi di awal. Loop berjalan selama kondisi bernilai benar. Bisa jadi tidak berjalan sama sekali.</li><li><strong><code>do-while</code> loop:</strong> Mirip seperti <code>while</code>, tapi mengecek kondisi di akhir. Loop dijamin berjalan setidaknya satu kali.</li></ul>`,
          code: `#include <stdio.h>

int main() {
    int total = 0;
    
    // Menggunakan 'for' loop untuk menjumlahkan angka 1 sampai 5
    printf("Menjumlahkan dengan 'for' loop:\\n");
    for (int i = 1; i <= 5; i++) {
        total += i; // sama dengan total = total + i;
        printf("i=%d, total sementara=%d\\n", i, total);
    }
    
    printf("Total akhir: %d\\n", total);
    
    return 0;
}`,
          output: `Menjumlahkan dengan 'for' loop:\ni=1, total sementara=1\ni=2, total sementara=3\ni=3, total sementara=6\ni=4, total sementara=10\ni=5, total sementara=15\nTotal akhir: 15`,
          videoSrc: "videos/c_repetition.mp4",
        },
      ],
    },
    // CHAPTER 5
    {
      lessons: [
        {
          title: "Manipulasi String",
          xp: 120,
          content: `<h3 class="text-2xl font-bold text-white">Bekerja dengan Teks</h3><p>Di C, string bukanlah tipe data dasar. String direpresentasikan sebagai sebuah <strong>array dari karakter</strong> (<code>char</code>) yang harus diakhiri dengan karakter khusus yang disebut 'null terminator' (<code>'\\0'</code>). Karakter ini memberitahu program di mana string berakhir.</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWR6czVpcDJ3aGhoZTRwaTlrY2pyaTZlajBnaHg3MzRoZGEwMHAzcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ov9k27tmt0r5z5B16/giphy.gif",
          content_after_gif: `<p>Karena string adalah array, kita tidak bisa asal menyalinnya dengan operator <code>=</code>. Kita perlu menggunakan fungsi-fungsi khusus dari library <code><string.h></code>, seperti:</p><ul class="list-disc pl-6 space-y-2"><li><strong><code>strcpy(tujuan, sumber)</code>:</strong> untuk menyalin string.</li><li><strong><code>strcat(tujuan, sumber)</code>:</strong> untuk menggabungkan dua string.</li><li><strong><code>strlen(s)</code>:</strong> untuk mendapatkan panjang string (tidak termasuk null terminator).</li><li><strong><code>strcmp(s1, s2)</code>:</strong> untuk membandingkan dua string.</li></ul>`,
          code: `#include <stdio.h>\n#include <string.h> // Jangan lupa impor library string

int main() {
    // Siapkan array char dengan ukuran yang cukup
    char kalimat[50];
    
    // Salin string "Aku belajar" ke dalam variabel kalimat
    strcpy(kalimat, "Aku belajar");
    
    // Gabungkan dengan string " bahasa C!"
    strcat(kalimat, " bahasa C!");
    
    // Cetak hasilnya
    printf("Kalimat lengkap: %s\\n", kalimat);
    
    // Cetak panjangnya
    printf("Panjang kalimat: %zu\\n", strlen(kalimat));
    
    return 0;
}`,
          output: `Kalimat lengkap: Aku belajar bahasa C!\nPanjang kalimat: 20`,
          videoSrc: "videos/c_string.mp4",
        },
      ],
    },
    // CHAPTER 6
    {
      lessons: [
        {
          title: "Pointer dan Array",
          xp: 150,
          content: `<h3 class="text-2xl font-bold text-white">Akses Memori Langsung</h3><p>Pointer adalah konsep inti di C yang membuatnya sangat cepat dan kuat. Pointer adalah sebuah variabel yang tugasnya bukan menyimpan nilai (seperti angka atau karakter), melainkan **menyimpan alamat memori** dari variabel lain. Anggap variabel biasa adalah rumah, dan pointer adalah secarik kertas yang berisi alamat lengkap rumah tersebut.</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bHl3ejFucjU1aGZpYWR1b204dWlvd3B3d3V2ODluMDloeTIydDlvdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wyggNMYdS6uVG/giphy.gif",
          content_after_gif: `<p>Kita menggunakan dua operator khusus:</p><ul class="list-disc pl-6 space-y-2"><li><strong><code>&</code> (Address-of):</strong> Untuk mendapatkan alamat memori dari sebuah variabel. Contoh: <code>&umur</code>.</li><li><strong><code>*</code> (Dereference):</strong> Untuk mengakses atau mengubah nilai yang ada di alamat yang ditunjuk oleh pointer. Contoh: <code>*ptrUmur</code>.</li></ul><p>Nama sebuah array sebenarnya adalah sebuah pointer konstan ke elemen pertamanya.</p>`,
          code: `#include <stdio.h>

int main() {
    int nilaiUjian = 85;
    
    // Deklarasi pointer 'ptrNilai' yang akan menunjuk ke alamat variabel integer.
    int *ptrNilai;
    
    // Simpan alamat memori dari 'nilaiUjian' ke dalam pointer.
    ptrNilai = &nilaiUjian;
    
    printf("Nilai asli: %d\\n", nilaiUjian);
    printf("Nilai via pointer: %d\\n", *ptrNilai); // Akses nilai menggunakan dereference
    
    // Kita juga bisa mengubah nilai asli melalui pointernya
    *ptrNilai = 90;
    
    printf("Nilai setelah diubah via pointer: %d\\n", nilaiUjian);
    
    return 0;
}`,
          output: `Nilai asli: 85\nNilai via pointer: 85\nNilai setelah diubah via pointer: 90`,
          videoSrc: "videos/c_pointer_array.mp4",
        },
      ],
    },
    // CHAPTER 7
    {
      lessons: [
        {
          title: "Simulasi Ujian Tengah Semester",
          xp: 200,
          content: `<h3 class="text-2xl font-bold text-white">Uji Pemahaman Anda!</h3><p>Anda telah mempelajari dasar-dasar C, mulai dari variabel, operator, seleksi, perulangan, hingga konsep yang lebih menantang seperti string dan pointer. Sekarang saatnya menguji pemahaman Anda dengan simulasi ujian ini.</p><p>Tantangannya adalah membuat program kecil yang menggabungkan beberapa konsep yang telah dipelajari.</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OGVxcGxkdGFtMnE2ejRyajhoaDh4ZnRlaHNpcHdwMjIzbnZuc3kwYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7bCBsz5VYuqU5Fk7d6/giphy.gif",
          content_after_gif: `<p>Cobalah untuk tidak melihat kembali materi sebelumnya kecuali jika benar-benar buntu. Tujuannya adalah untuk melatih kemampuan analisis dan pemecahan masalah Anda.</p>`,
          code: `/*
Tantangan:
Buat sebuah program yang meminta pengguna memasukkan sebuah kata,
lalu hitung dan tampilkan jumlah huruf vokal (a, i, u, e, o)
di dalam kata tersebut (baik huruf besar maupun kecil).

Petunjuk:
1. Siapkan sebuah array char untuk menampung input.
2. Gunakan loop untuk memeriksa setiap karakter dalam string.
3. Gunakan if atau switch untuk mengecek apakah karakter adalah vokal.
*/

// Tulis kode Anda di sini...`,
          output: `(Contoh)\nMasukkan sebuah kata: Pemrograman\nJumlah huruf vokal: 4`,
          videoSrc: "videos/c_midterm.mp4",
        },
      ],
    },
    // CHAPTER 8
    {
      lessons: [
        {
          title: "Membuat dan Menggunakan Fungsi",
          xp: 100,
          content: `<h3 class="text-2xl font-bold text-white">Memecah Masalah Jadi Bagian Kecil</h3><p>Fungsi adalah blok kode yang dirancang untuk melakukan tugas tertentu. Daripada menulis semua logika di dalam fungsi <code>main()</code>, kita bisa memecahnya menjadi fungsi-fungsi yang lebih kecil dan dapat digunakan kembali. Ini adalah inti dari prinsip "Don't Repeat Yourself" (DRY).</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c3R4Z2RjZ3lpbXpuMGY2aTVqN203Nm02YmxycnYzazRlOHp5dnU3YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DHBGehJ3FSZEygszX3/giphy.gif",
          content_after_gif: `<p>Sebuah fungsi memiliki tiga bagian utama:</p><ul class="list-disc pl-6 space-y-2"><li><strong>Tipe Return:</strong> Tipe data dari nilai yang akan dikembalikan oleh fungsi (<code>int</code>, <code>float</code>, <code>void</code> jika tidak ada).</li><li><strong>Nama Fungsi:</strong> Nama yang deskriptif untuk memanggilnya.</li><li><strong>Parameter:</strong> Variabel input yang diterima oleh fungsi (bisa kosong).</li></ul><p>Mendefinisikan fungsi di luar <code>main()</code> membuat kode lebih terstruktur dan mudah dibaca.</p>`,
          code: `#include <stdio.h>

// Deklarasi prototipe fungsi
// Ini memberitahu compiler bahwa fungsi ini ada,
// meskipun definisinya ada di bawah main().
float hitungLuasPersegiPanjang(float panjang, float lebar);

int main() {
    float p = 10.5;
    float l = 5.0;
    
    // Memanggil fungsi untuk menghitung luas
    float luas = hitungLuasPersegiPanjang(p, l);
    
    printf("Luas persegi panjang dengan p=%.1f dan l=%.1f adalah %.2f\\n", p, l, luas);
    
    return 0;
}

// Definisi fungsi
float hitungLuasPersegiPanjang(float panjang, float lebar) {
    // Menghitung dan mengembalikan hasilnya
    return panjang * lebar;
}`,
          output: `Luas persegi panjang dengan p=10.5 dan l=5.0 adalah 52.50`,
          videoSrc: "videos/c_function.mp4",
        },
      ],
    },
    // CHAPTER 9
    {
      lessons: [
        {
          title: "Fungsi Rekursif",
          xp: 125,
          content: `<h3 class="text-2xl font-bold text-white">Fungsi yang Memanggil Dirinya Sendiri</h3><p>Rekursi adalah sebuah konsep pemrograman di mana sebuah fungsi menyelesaikan masalah dengan cara memanggil dirinya sendiri, tetapi dengan input yang lebih sederhana, hingga mencapai sebuah 'kasus dasar' (base case) yang bisa diselesaikan secara langsung.</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c3R4Z2RjZ3lpbXpuMGY2aTVqN203Nm02YmxycnYzazRlOHp5dnU3YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7Tzup7ATZEuMVwZ4Te/giphy.gif",
          content_after_gif: `<p>Setiap fungsi rekursif harus memiliki dua hal:</p><ul class="list-disc pl-6 space-y-2"><li><strong>Base Case:</strong> Sebuah kondisi yang menghentikan rekursi. Tanpa ini, fungsi akan memanggil dirinya sendiri selamanya dan menyebabkan 'stack overflow'.</li><li><strong>Recursive Step:</strong> Bagian di mana fungsi memanggil dirinya sendiri dengan versi masalah yang lebih kecil.</li></ul><p>Contoh paling klasik adalah menghitung faktorial.</p>`,
          code: `#include <stdio.h>

// Fungsi rekursif untuk menghitung faktorial
long long int faktorial(int n) {
    // Base Case: Jika n adalah 0 atau 1, faktorialnya adalah 1.
    // Ini menghentikan rekursi.
    if (n <= 1) {
        return 1;
    } 
    // Recursive Step: n dikalikan dengan faktorial dari (n-1).
    else {
        return n * faktorial(n - 1);
    }
}

int main() {
    int angka = 5;
    printf("Faktorial dari %d adalah %lld\\n", angka, faktorial(angka));
    // 5! = 5 * 4 * 3 * 2 * 1 = 120
    return 0;
}`,
          output: `Faktorial dari 5 adalah 120`,
          videoSrc: "videos/c_recursion.mp4",
        },
      ],
    },
    // CHAPTER 10
    {
      lessons: [
        {
          title: "Bekerja dengan Struct",
          xp: 120,
          content: `<h3 class="text-2xl font-bold text-white">Membuat Tipe Data Sendiri</h3><p>Bayangkan Anda ingin menyimpan data seorang mahasiswa: ada nama (string), NIM (string/int), dan IPK (float). Menyimpannya dalam variabel terpisah bisa merepotkan. <code>struct</code> (struktur) adalah solusi untuk ini.</p><p>Struct memungkinkan Anda untuk mengelompokkan beberapa variabel dari tipe data yang berbeda ke dalam satu unit tunggal. Ini seperti membuat cetak biru untuk tipe data baru Anda sendiri.</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MHhrcGpjbnI0cWZxb2FwOXU4N3o5eWFweG9ocjBoMDNqN2dmYWkydCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hXgDWPI2M5X9sVPlpp/giphy.gif",
          content_after_gif: `<p>Setelah cetak biru (<code>struct</code>) dibuat, Anda bisa membuat variabel nyata dari tipe tersebut, sama seperti Anda membuat variabel <code>int</code> atau <code>char</code>. Untuk mengakses anggota (member) dari sebuah variabel struct, kita menggunakan operator titik (<code>.</code>).</p>`,
          code: `#include <stdio.h>\n#include <string.h>

// Membuat 'cetak biru' untuk data Mahasiswa
struct Mahasiswa {
    char nama[50];
    char nim[15];
    float ipk;
};

int main() {
    // Membuat variabel 'mhs1' dengan tipe data Mahasiswa
    struct Mahasiswa mhs1;
    
    // Mengisi data ke dalam anggota struct
    strcpy(mhs1.nama, "Siti Rahayu");
    strcpy(mhs1.nim, "123456789");
    mhs1.ipk = 3.85;
    
    // Menampilkan data dengan mengakses anggotanya
    printf("Data Mahasiswa:\\n");
    printf("Nama: %s\\n", mhs1.nama);
    printf("NIM: %s\\n", mhs1.nim);
    printf("IPK: %.2f\\n", mhs1.ipk);
    
    return 0;
}`,
          output: `Data Mahasiswa:\nNama: Siti Rahayu\nNIM: 123456789\nIPK: 3.85`,
          videoSrc: "videos/c_struct.mp4",
        },
      ],
    },
    // CHAPTER 11
    {
      lessons: [
        {
          title: "Membaca dan Menulis File",
          xp: 150,
          content: `<h3 class="text-2xl font-bold text-white">Menyimpan Data Secara Permanen</h3><p>Semua data yang kita buat dalam program sejauh ini akan hilang saat program ditutup. Untuk menyimpan data secara permanen, kita perlu menuliskannya ke dalam sebuah file di komputer. Proses ini disebut 'File I/O' (Input/Output).</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MXJoejJjYWVsNDJmaHNrbDh2NmQxeWtrZTVuYXBmNG0yN3AyOXg0ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/L4HhVNOsxzsT6XFmWv/giphy.gif",
          content_after_gif: `<p>Langkah-langkah dasar dalam bekerja dengan file di C adalah:</p><ol class="list-decimal pl-6 space-y-2"><li>Membuka file menggunakan <code>fopen("namafile.txt", "mode")</code>. Mode bisa berupa <code>"w"</code> (write/menulis, membuat file baru atau menimpa yang lama), <code>"r"</code> (read/membaca), atau <code>"a"</code> (append/menambah di akhir file).</li><li>Melakukan operasi baca (misal dengan <code>fscanf</code>) atau tulis (misal dengan <code>fprintf</code>).</li><li>Menutup file menggunakan <code>fclose()</code>. Ini langkah penting untuk memastikan semua data tersimpan dengan benar.</li></ol>`,
          code: `#include <stdio.h>

int main() {
    // Membuat pointer file
    FILE *filePtr;

    // --- Menulis ke File ---
    // Membuka file "catatan.txt" dalam mode tulis ("w")
    filePtr = fopen("catatan.txt", "w");

    // Mengecek apakah file berhasil dibuka
    if (filePtr == NULL) {
        printf("Gagal membuka file!\\n");
        return 1; // Keluar program dengan kode error
    }

    // Menulis teks ke dalam file
    fprintf(filePtr, "Ini adalah baris pertama.\\n");
    fprintf(filePtr, "Belajar file I/O itu menyenangkan!\\n");

    // Menutup file setelah selesai menulis
    fclose(filePtr);
    
    printf("Berhasil menulis ke file 'catatan.txt'\\n");

    return 0;
}`,
          output: `Berhasil menulis ke file 'catatan.txt'`,
          videoSrc: "videos/c_file.mp4",
        },
      ],
    },
    // CHAPTER 12
    {
      lessons: [
        {
          title: "Algoritma Sorting Dasar",
          xp: 130,
          content: `<h3 class="text-2xl font-bold text-white">Mengurutkan Data</h3><p>Sorting adalah proses fundamental dalam ilmu komputer untuk mengatur sekumpulan data dalam urutan tertentu (misalnya dari terkecil ke terbesar). Mempelajari algoritma sorting dasar akan membangun intuisi pemecahan masalah Anda.</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bWVoMWVmdTBjN3pvOHAzN2YybDNpYmlia3U2MWQ0ZXVuM2R6Y3kyNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ea74cjF0jieXu/giphy.gif",
          content_after_gif: `<p><strong>Bubble Sort</strong> adalah salah satu algoritma sorting paling sederhana. Cara kerjanya adalah dengan berulang kali membandingkan pasangan elemen yang bersebelahan dan menukarnya jika urutannya salah. Proses ini diulangi hingga tidak ada lagi pertukaran yang terjadi, yang menandakan data sudah terurut. Meskipun tidak efisien untuk data besar, konsepnya sangat mudah dipahami.</p>`,
          code: `#include <stdio.h>

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

void bubbleSort(int arr[], int n) {
    int i, j, temp;
    for (i = 0; i < n - 1; i++) {
        // Loop untuk membandingkan elemen-elemen
        for (j = 0; j < n - i - 1; j++) {
            // Tukar jika elemen yang ditemukan lebih besar dari elemen berikutnya
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int data[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(data) / sizeof(data[0]);
    
    printf("Array sebelum diurutkan: \\n");
    printArray(data, n);
    
    bubbleSort(data, n);
    
    printf("Array setelah diurutkan: \\n");
    printArray(data, n);
    
    return 0;
}`,
          output: `Array sebelum diurutkan: \n64 34 25 12 22 11 90 \nArray setelah diurutkan: \n11 12 22 25 34 64 90 `,
          videoSrc: "videos/c_sort1.mp4",
        },
      ],
    },
    // CHAPTER 13
    {
      lessons: [
        {
          title: "Algoritma Sorting Lanjutan",
          xp: 150,
          content: `<h3 class="text-2xl font-bold text-white">Sorting yang Lebih Cepat</h3><p>Meskipun Bubble Sort mudah dipahami, performanya sangat lambat untuk data dalam jumlah besar. Untuk aplikasi dunia nyata, kita memerlukan algoritma yang lebih efisien. Dua yang paling terkenal adalah Merge Sort dan Quick Sort.</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZXBuaWgzbnNmb2hkMmJ4Zm5peXI1ZGR6bXQzbnEyd2VlN2p3ZW16MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BCK1i9BrGz8UkFGuq4/giphy.gif",
          content_after_gif: `<p><strong>Quick Sort</strong> menggunakan pendekatan 'Divide and Conquer'. Algoritma ini memilih sebuah elemen sebagai 'pivot', lalu mempartisi array menjadi dua sub-array: elemen yang lebih kecil dari pivot dan elemen yang lebih besar dari pivot. Proses ini kemudian diulangi secara rekursif untuk kedua sub-array tersebut. Quick Sort secara umum jauh lebih cepat daripada Bubble Sort.</p>`,
          code: `// Implementasi Quick Sort biasanya lebih kompleks dan sering diajarkan
// dalam mata kuliah struktur data. Konsep utamanya adalah:

/*
1. Pilih Pivot: Pilih satu elemen dari array sebagai pivot. 
   Bisa elemen pertama, terakhir, atau acak.

2. Partisi: Susun ulang array sehingga semua elemen yang lebih kecil 
   dari pivot berada di sebelah kiri pivot, dan semua elemen yang 
   lebih besar berada di sebelah kanan pivot. Pivot sekarang berada
   di posisi akhirnya yang sudah terurut.

3. Rekursi: Terapkan algoritma quick sort secara rekursif pada
   sub-array di sebelah kiri pivot dan sub-array di sebelah kanan pivot.
*/

#include <stdio.h>
printf("Quick Sort adalah algoritma yang sangat efisien!\\n");`,
          output: `Quick Sort adalah algoritma yang sangat efisien!`,
          videoSrc: "videos/c_sort2.mp4",
        },
      ],
    },
    // CHAPTER 14
    {
      lessons: [
        {
          title: "Algoritma Pencarian",
          xp: 120,
          content: `<h3 class="text-2xl font-bold text-white">Menemukan Jarum dalam Tumpukan Jerami</h3><p>Pencarian adalah tugas umum lainnya, yaitu menemukan lokasi data tertentu dalam sebuah kumpulan data. Ada dua pendekatan utama yang akan kita bahas.</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZXBuaWgzbnNmb2hkMmJ4Zm5peXI1ZGR6bXQzbnEyd2VlN2p3ZW16MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ssTuHIyG3cF2VCPIa4/giphy.gif",
          content_after_gif: `<ul class="list-disc pl-6 space-y-2"><li><strong>Linear Search:</strong> Cara paling sederhana. Kita memeriksa setiap elemen dari awal hingga akhir sampai elemen yang dicari ditemukan atau sampai kita mencapai akhir data. Cara ini bekerja pada data yang tidak terurut.</li><li><strong>Binary Search:</strong> Cara yang jauh lebih efisien, tetapi memiliki syarat: **data harus sudah dalam keadaan terurut**. Ia bekerja dengan berulang kali membagi dua bagian data yang mungkin berisi item tersebut, hingga kemungkinannya menyempit menjadi hanya satu.</li></ul>`,
          code: `#include <stdio.h>

// Fungsi binary search rekursif
int binarySearch(int arr[], int kiri, int kanan, int x) {
    if (kanan >= kiri) {
        int tengah = kiri + (kanan - kiri) / 2;

        // Jika elemen ada di tengah
        if (arr[tengah] == x) return tengah;

        // Jika elemen lebih kecil dari tengah, cari di sub-array kiri
        if (arr[tengah] > x)
            return binarySearch(arr, kiri, tengah - 1, x);

        // Jika elemen lebih besar dari tengah, cari di sub-array kanan
        return binarySearch(arr, tengah + 1, kanan, x);
    }
    // Elemen tidak ditemukan
    return -1;
}

int main() {
    int data[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int n = sizeof(data) / sizeof(data[0]);
    int x = 23;
    int hasil = binarySearch(data, 0, n - 1, x);
    
    if(hasil == -1) {
        printf("Elemen tidak ditemukan dalam array\\n");
    } else {
        printf("Elemen %d ditemukan di indeks %d\\n", x, hasil);
    }
    return 0;
}`,
          output: `Elemen 23 ditemukan di indeks 5`,
          videoSrc: "videos/c_search.mp4",
        },
      ],
    },
    // CHAPTER 15
    {
      lessons: [
        {
          title: "Simulasi Ujian Akhir Semester",
          xp: 300,
          content: `<h3 class="text-2xl font-bold text-white">Proyek Akhir: Menggabungkan Semua Konsep</h3><p>Selamat! Anda telah mencapai akhir dari learning path ini. Sekarang saatnya menerapkan semua yang telah Anda pelajari dalam sebuah proyek kecil yang komprehensif. Ini akan menguji kemampuan Anda dalam menggunakan variabel, struct, pointer, file I/O, dan logika lainnya secara bersamaan.</p>`,
          gifSrc:
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cHJ1dmVteGgyeTU4bzZuZHM4aHI3aW4xcmhhdmczMnFyemN5OGMwaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pKFpaOoSzMfCFgXvyA/giphy.gif",
          content_after_gif: `<p>Tantangan ini tidak hanya menguji pengetahuan teknis Anda, tetapi juga kemampuan Anda untuk merancang solusi dari sebuah masalah. Jangan takut untuk bereksperimen dan mencoba pendekatan yang berbeda.</p>`,
          code: `/*
Tantangan Proyek Akhir:
Buat program "Buku Telepon Sederhana".

Fitur yang harus ada:
1. Menggunakan 'struct' untuk menyimpan data kontak (misal: nama, nomor_telepon).
2. Program harus bisa menambah kontak baru.
3. Program harus bisa menampilkan semua kontak yang tersimpan.
4. (Bonus) Data kontak harus bisa disimpan ke dalam sebuah file ("kontak.txt")
   dan dibaca kembali saat program dijalankan lagi.

Petunjuk:
- Buat array dari struct Kontak.
- Buat menu sederhana (misal: 1. Tambah, 2. Tampil, 3. Keluar).
- Gunakan fopen(), fprintf(), fscanf(), dan fclose() untuk fitur bonus.
*/

#include <stdio.h>

int main() {
    printf("Selamat mengerjakan Proyek Akhir!\\n");
    return 0;
}`,
          output: `Selamat mengerjakan Proyek Akhir!`,
          videoSrc: "videos/c_final.mp4",
        },
      ],
    },
  ];

  const lessonTitleEl = document.getElementById("lesson-title");
  const lessonContentEl = document.getElementById("lesson-content");
  const codeBlockEl = document.getElementById("code-block");
  const copyCodeBtn = document.getElementById("copy-code-btn");
  const copyCodeText = document.getElementById("copy-code-text");
  const outputSection = document.getElementById("output-section");
  const outputBlockEl = document.getElementById("output-block");
  const copyOutputBtn = document.getElementById("copy-output-btn");
  const copyOutputText = document.getElementById("copy-output-text");
  const watchVideoBtn = document.getElementById("watch-video-btn");
  const backToModulesBtn = document.getElementById("back-to-modules-btn");
  const lessonGifContainer = document.getElementById("lesson-gif-container");
  const lessonGif = document.getElementById("lesson-gif");
  const markAsCompleteBtn = document.getElementById("mark-as-complete-btn");

  const videoPlayerContainer = document.getElementById("video-player-container");
  const lessonVideoPlayer = document.getElementById("lesson-video-player");
  const playPauseBtn = document.getElementById("play-pause-btn");
  const progressBar = document.getElementById("progress-bar");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");
  const fullscreenBtn = document.getElementById("fullscreen-btn");
  const rewindBtn = document.getElementById("rewind-btn");
  const forwardBtn = document.getElementById("forward-btn");

  const loadLessonContent = () => {
    const params = new URLSearchParams(window.location.search);
    const lessonIndex = parseInt(params.get("lesson")) || 0;
    let flatLessonData = courseData.flatMap((module) => module.lessons);
    const lessonToShow = flatLessonData[lessonIndex];

    if (!lessonToShow) {
      lessonTitleEl.textContent = "Materi Tidak Ditemukan";
      lessonContentEl.innerHTML = "<p>Materi yang Anda cari tidak ada atau URL tidak valid. Silakan kembali ke halaman modul.</p>";
      if (document.getElementById("completion-section")) {
        document.getElementById("completion-section").classList.add("hidden");
      }
      return;
    }

    lessonTitleEl.textContent = lessonToShow.title;

    let fullContent = lessonToShow.content || "";
    if (lessonToShow.gifSrc) {
      if (lessonGif) lessonGif.src = lessonToShow.gifSrc;
      if (lessonGifContainer) lessonGifContainer.classList.remove("hidden");
    } else {
      if (lessonGifContainer) lessonGifContainer.classList.add("hidden");
    }
    if (lessonToShow.content_after_gif) {
      fullContent += lessonToShow.content_after_gif;
    }
    lessonContentEl.innerHTML = fullContent;

    if (codeBlockEl) codeBlockEl.textContent = lessonToShow.code;

    if (lessonToShow.output) {
      if (outputBlockEl) outputBlockEl.textContent = lessonToShow.output;
      if (outputSection) outputSection.classList.remove("hidden");
    } else {
      if (outputSection) outputSection.classList.add("hidden");
    }

    if (lessonToShow.videoSrc) {
      lessonVideoPlayer.src = lessonToShow.videoSrc;
    } else {
      watchVideoBtn.closest(".bg-slate-800\\/50").style.display = "none";
    }

    const loggedInUsername = localStorage.getItem("loggedInUser");
    const progressKey = `userProgress_${loggedInUsername}`;
    const userProgress = JSON.parse(localStorage.getItem(progressKey)) || {
      completedLessons: [],
    };

    if (markAsCompleteBtn && userProgress.completedLessons.includes(lessonIndex)) {
      markAsCompleteBtn.textContent = "Selesai! Kembali ke Modul";
      markAsCompleteBtn.classList.add("completed", "bg-green-500", "text-white", "hover:bg-green-600");
      markAsCompleteBtn.classList.remove("bg-cyan-500", "text-slate-900", "hover:bg-cyan-600");
    } else if (markAsCompleteBtn) {
      markAsCompleteBtn.textContent = "Tandai Selesai & Kembali";
      markAsCompleteBtn.classList.remove("completed", "bg-green-500", "text-white", "hover:bg-green-600");
      markAsCompleteBtn.classList.add("bg-cyan-500", "text-slate-900", "hover:bg-cyan-600");
    }
  };

  const copyToClipboard = (text, buttonTextElement) => {
    if (!text || !buttonTextElement) return;
    navigator.clipboard.writeText(text).then(() => {
      const originalText = buttonTextElement.textContent;
      buttonTextElement.textContent = "Disalin!";
      setTimeout(() => { buttonTextElement.textContent = originalText; }, 2000);
    }).catch(err => console.error("Gagal menyalin:", err));
  };

  const playIcon = `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>`;
  const pauseIcon = `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"></path></svg>`;

  function togglePlay() {
    if (lessonVideoPlayer.paused) {
      lessonVideoPlayer.play();
    } else {
      lessonVideoPlayer.pause();
    }
  }

  function updatePlayButton() {
    playPauseBtn.innerHTML = lessonVideoPlayer.paused ? playIcon : pauseIcon;
  }

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function updateProgress() {
    const value = (lessonVideoPlayer.currentTime / lessonVideoPlayer.duration) * 100 || 0;
    progressBar.value = value;
    currentTimeEl.textContent = formatTime(lessonVideoPlayer.currentTime);
  }

  function setProgress() {
    lessonVideoPlayer.currentTime = (progressBar.value * lessonVideoPlayer.duration) / 100;
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      lessonVideoPlayer.parentElement.requestFullscreen().catch((err) => {
        alert(`Error: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  if (copyCodeBtn) copyCodeBtn.addEventListener("click", () => copyToClipboard(codeBlockEl.textContent, copyCodeText));
  if (copyOutputBtn) copyOutputBtn.addEventListener("click", () => copyToClipboard(outputBlockEl.textContent, copyOutputText));
  if (backToModulesBtn) backToModulesBtn.addEventListener("click", () => { window.location.href = "modul.html"; });

  if (markAsCompleteBtn) {
    markAsCompleteBtn.addEventListener("click", () => {
      const loggedInUsername = localStorage.getItem("loggedInUser");
      if (!loggedInUsername) return;
      const params = new URLSearchParams(window.location.search);
      const lessonIndex = parseInt(params.get("lesson"));
      if (isNaN(lessonIndex)) return;
      const progressKey = `userProgress_${loggedInUsername}`;
      let userProgress = JSON.parse(localStorage.getItem(progressKey)) || {
        completedLessons: [],
      };
      if (!userProgress.completedLessons.includes(lessonIndex)) {
        userProgress.completedLessons.push(lessonIndex);
        localStorage.setItem(progressKey, JSON.stringify(userProgress));
      }
      window.location.href = "modul.html";
    });
  }

  if (watchVideoBtn) {
    watchVideoBtn.addEventListener("click", () => {
      videoPlayerContainer.classList.toggle("hidden");
    });
  }

  if (lessonVideoPlayer) {
    lessonVideoPlayer.addEventListener("play", updatePlayButton);
    lessonVideoPlayer.addEventListener("pause", updatePlayButton);
    lessonVideoPlayer.addEventListener("timeupdate", updateProgress);
    lessonVideoPlayer.addEventListener("loadedmetadata", () => {
      durationEl.textContent = formatTime(lessonVideoPlayer.duration);
      progressBar.value = 0;
    });
    lessonVideoPlayer.addEventListener("click", togglePlay);
  }

  if (playPauseBtn) playPauseBtn.addEventListener("click", togglePlay);
  if (progressBar) progressBar.addEventListener("input", setProgress);
  if (fullscreenBtn) fullscreenBtn.addEventListener("click", toggleFullscreen);

  if (rewindBtn) {
    rewindBtn.addEventListener("click", () => {
      lessonVideoPlayer.currentTime -= 10;
    });
  }
  if (forwardBtn) {
    forwardBtn.addEventListener("click", () => {
      lessonVideoPlayer.currentTime += 10;
    });
  }

  loadLessonContent();
});
