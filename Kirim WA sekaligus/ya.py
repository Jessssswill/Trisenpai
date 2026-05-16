import webbrowser
import pyautogui
import pyperclip
import time

# ==============================================================================
# === BAGIAN PENGATURAN - SILAKAN UBAH SESUAI KEBUTUHAN ANDA ===
# ==============================================================================

# 1. MASUKKAN DAFTAR NOMOR TELEPON TUJUAN
#    Gunakan format kode negara (62 untuk Indonesia) tanpa tanda '+' atau spasi.
daftar_nomor = [
    "6281234567890",  # Ganti dengan nomor tujuan 1
    "6281112223334",  # Ganti dengan nomor tujuan 2
    # "6285700001111",  # Hapus tanda '#' untuk menambahkan nomor lain
]

# 2. MASUKKAN KOORDINAT KOLOM CHAT DARI LANGKAH 1
#    Ganti nilai XXXX dan YYYY dengan angka yang Anda dapatkan.
posisi_x_chat = XXXX 
posisi_y_chat = YYYY

# 3. TULIS PESAN YANG INGIN ANDA KIRIM
#    Gunakan tiga tanda kutip (""") untuk pesan yang panjang dan memiliki banyak baris.
pesan_anda = """Halo! Ini adalah pesan yang dikirim menggunakan script Python.

Metode ini menggunakan cara "paste" agar lebih cepat dan andal. 
Semoga berhasil! 😊🚀"""

# ==============================================================================
# === BAGIAN UTAMA SCRIPT - TIDAK PERLU DIUBAH ===
# ==============================================================================

print("--- SCRIPT PENGIRIM PESAN WHATSAPP ---")

# Pengecekan awal apakah koordinat sudah diisi
if posisi_x_chat == 'XXXX' or posisi_y_chat == 'YYYY':
    print("❌ KESALAHAN: Anda belum mengisi nilai 'posisi_x_chat' dan 'posisi_y_chat' di dalam script.")
    print("--- PROGRAM DIHENTIKAN ---")
else:
    print("PERINGATAN: Proses akan dimulai dalam 5 detik.")
    print("PASTIKAN JENDELA BROWSER TIDAK TERHALANG DAN JANGAN SENTUH MOUSE/KEYBOARD.")
    time.sleep(5)

    for i, nomor in enumerate(daftar_nomor):
        try:
            print(f"\n({i+1}/{len(daftar_nomor)}) Memproses nomor: {nomor}")

            # Salin pesan ke clipboard sistem
            pyperclip.copy(pesan_anda)
            
            # Buka WhatsApp Web langsung ke chat tujuan
            url = f"https://web.whatsapp.com/send?phone={nomor}"
            webbrowser.open(url)
            
            # Beri waktu yang cukup lama agar halaman web termuat sempurna
            waktu_tunggu_halaman = 20 
            print(f"Menunggu {waktu_tunggu_halaman} detik hingga halaman siap...")
            time.sleep(waktu_tunggu_halaman)

            # Klik kolom chat secara eksplisit untuk memastikan fokus
            pyautogui.click(posisi_x_chat, posisi_y_chat)
            time.sleep(1)

            # Tempelkan pesan dari clipboard (Ctrl+V)
            pyautogui.hotkey('ctrl', 'v')
            print("Pesan ditempelkan...")
            time.sleep(2)

            # Kirim pesan (Enter)
            pyautogui.press('enter')
            print("Pesan terkirim...")
            time.sleep(5) # Tunggu sesaat agar pesan benar-benar terkirim

            # Tutup tab browser (Ctrl+W)
            pyautogui.hotkey('ctrl', 'w')
            print(f"✅ Sukses: Pesan ke {nomor} telah dikirim.")
            
            # Jeda antar nomor untuk menghindari blokir
            if i < len(daftar_nomor) - 1:
                print("Jeda 10 detik sebelum lanjut ke nomor berikutnya.")
                time.sleep(10)

        except Exception as e:
            print(f"❌ Gagal pada nomor {nomor}. Error: {e}")
            try:
                # Usahakan tetap menutup tab jika terjadi error
                pyautogui.hotkey('ctrl', 'w')
            except:
                pass # Abaikan jika gagal menutup tab

    print("\n--- SEMUA PROSES SELESAI ---")