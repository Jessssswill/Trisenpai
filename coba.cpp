// #include <stdio.h>

// // Fungsi untuk menggambar satu segitiga dengan tinggi X
// void gambarSegitiga(int X) {
//     // Loop luar untuk setiap baris, dari 1 sampai X
//     for (int i = 1; i <= X; i++) {
        
//         // Loop dalam untuk mencetak spasi di awal baris
//         // Jumlah spasi adalah X - i
//         for (int j = 1; j <= X - i; j++) {
//             printf(" ");
//         }
        
//         // Loop dalam untuk mencetak bintang
//         // Jumlah bintang adalah (2 * i) - 1
//         for (int k = 1; k <= (2 * i - 1); k++) {
//             printf("*");
//         }
        
//         // Pindah ke baris baru setelah satu baris selesai
//         printf("\n");
//     }
// }

// int main() {
//     int T;
//     scanf("%d", &T); // Baca jumlah kasus uji

//     // Loop untuk setiap kasus uji
//     while (T--) {
//         int X;
//         scanf("%d", &X); // Baca tinggi segitiga
//         gambarSegitiga(X);
//     }

//     return 0;
// }

// #include <stdio.h>

// // Fungsi rekursif untuk menghitung FPB dari dua bilangan
// long long hitungFPB(long long a, long long b) {
//     // Basis kasus dari rekursif: jika b adalah 0, maka a adalah FPB
//     if (b == 0) {
//         return a;
//     }
//     // Langkah rekursif: panggil fungsi dengan b dan sisa bagi a % b
//     return hitungFPB(b, a % b);
// }

// int main() {
//     int T;
//     scanf("%d", &T); // Baca jumlah kasus uji

//     for (int i = 1; i <= T; ++i) {
//         int N;
//         scanf("%d", &N); // Baca jumlah bilangan dalam kasus uji ini

//         long long hasilFPB;
//         long long angka_sekarang;

//         // Baca angka pertama untuk inisialisasi hasilFPB
//         scanf("%lld", &hasilFPB);

//         // Loop untuk sisa N-1 angka
//         for (int j = 1; j < N; ++j) {
//             scanf("%lld", &angka_sekarang);
//             // Perbarui hasilFPB dengan mencari FPB dari hasil sebelumnya dan angka sekarang
//             hasilFPB = hitungFPB(hasilFPB, angka_sekarang);
//         }

//         // Cetak output sesuai format
//         printf("Case #%d: %lld\n", i, hasilFPB);
//     }

//     return 0;
// }

#include <stdio.h>

int main() {
    int n, k;
    scanf("%d %d", &n, &k);

    int p[n];
    for (int i = 0; i < n; ++i) {
        scanf("%d", &p[i]);
    }
    
    int deque_indices[n];
    int front = 0, rear = -1;

    for (int i = 0; i < k; ++i) {
        while (front <= rear && p[i] >= p[deque_indices[rear]]) {
            rear--;
        }
        rear++;
        deque_indices[rear] = i;
    }

    printf("%d\n", p[deque_indices[front]]);

    for (int i = k; i < n; ++i) {
        if (front <= rear && deque_indices[front] <= i - k) {
            front++;
        }
        while (front <= rear && p[i] >= p[deque_indices[rear]]) {
            rear--;
        }
        
        rear++;
        deque_indices[rear] = i;

        printf("%d\n", p[deque_indices[front]]);
    }

    return 0;
}