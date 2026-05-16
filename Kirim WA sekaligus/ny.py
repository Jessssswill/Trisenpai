import pywhatkit
import time

# --- PENGATURAN ---

# 1. Masukkan semua nomor tujuan di sini
daftar_nomor = [
    "+6281372529119",  # Ganti dengan nomor tujuan
    "+62895344018145",  # Ganti dengan nomor tujuan
    # Tambahkan nomor lainnya jika perlu
]

# 2. Masukkan lokasi LENGKAP dari gambar/poster Anda
path_gambar = "D:\\Bootcamp\\algoprog.png" # <-- GANTI INI

# 3. Pesan promosi Anda (sudah saya masukkan)
pesan_anda = """Hallo, maaf mengganggu, aku izin promosi yaa, kalau penasaran boleh nih liat liat, thank you🤩

TRISENPAI Bootcamp - Algorithm & Programming 🚀
Siap Jadi Pro Ngoding Sejak Awal!

Halo baru masuk jadi MABA ya? terus bingung dengan materi Algoritma dan Pemograman? Atau bahkan kalian yang merasa nggak pernah belajar coding sama sekali? TRISENPAI hadir nih buat bantu kalian belajar dari nol! Bootcamp ini dibuat khusus untuk kalian yang pengen menghadapi mata kuliah algoritma dan pemrograman dengan baik. Dijamin, kalian bisa coding dengan percaya diri!

Kenapa Harus Pilih TRISENPAI Bootcamp?
🚀 Bisa Ngoding dari Nol!
Gak pernah nulis kode sebelumnya? Tenang, kita mulai dari yang paling dasar! Kami bantu kalian yang baru pertama kali mau belajar coding sampai bisa ngerjain soal-soal algoritma yang lebih rumit.

📚 Akses Materi Seumur Hidup!
Semua materi seperti video tutorial, cheatsheet, dan dokumen lainnya bisa diakses kapan saja dan dimana saja. Belajar fleksibel sesuai waktu kalian, tanpa takut ketinggalan.

👨‍🏫 Pengajar Berpengalaman dari B28!
Jangan khawatir, pengajar-pengajar kami adalah mahasiswa B28 yang udah berpengalaman dan punya IPK tinggi. Mereka udah melewati berbagai rintangan dan siap kasih tips serta bimbingan langsung supaya kalian gak kebingungan.

💡 Paket TRISENPAI yang Bisa Dipilih
Gak usah bingung, tinggal pilih paket yang sesuai dengan kebutuhan kamu:

Solo: Rp 150.000
Paket belajar individu, cocok buat kamu yang pengen fokus sendiri.

Duo: Rp 280.000
Belajar bareng teman atau sahabat, makin seru!

Trio: Rp 400.000
Grup tiga orang, belajar bareng dan lebih hemat!

🚨 Slot Terbatas! Daftar Sebelum Kehabisan!
Pendaftaran Ditutup pada 24 Juli, jangan sampai kelewatan kesempatan ini! Kami hanya membuka slot terbatas, jadi pastikan kamu daftar sekarang juga!

🔗 Daftar Sekarang di Website Kami!
👉 Pendaftaran: https://trisenpai.vercel.app/"""

# --- PROSES PENGIRIMAN ---

for nomor in daftar_nomor:
    try:
        print(f"Mencoba mengirim ke {nomor}...")
        pywhatkit.sendwhats_image(
            receiver=nomor,
            img_path=path_gambar,
            caption=pesan_anda,
            wait_time=20 # Naikkan jika perlu
        )
        print(f"✅ Berhasil dijadwalkan untuk dikirim ke {nomor}")
        time.sleep(10) 
    except Exception as e:
        print(f"❌ Gagal mengirim ke {nomor}. Error: {e}")

print("\n--- Selesai ---")