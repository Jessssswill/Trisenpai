from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time
import urllib.parse
from webdriver_manager.chrome import ChromeDriverManager  # Mempermudah pengunduhan driver

# Fungsi untuk mengirim pesan langsung ke WhatsApp Web
def send_whatsapp_message(phone_number, message):
    # Encode pesan untuk memastikan karakter khusus terproses dengan benar
    encoded_message = urllib.parse.quote(message)
    
    # Membuka URL WhatsApp dengan nomor yang dituju dan pesan yang sudah ditulis
    url = f"https://wa.me/{phone_number}?text={encoded_message}"
    
    # Buka URL di WhatsApp Web (secara otomatis akan membuka aplikasi WhatsApp jika sudah terpasang)
    driver.get(url)
    time.sleep(5)  # Tunggu beberapa detik agar halaman WhatsApp Web sepenuhnya terbuka
    
    # Cari kolom input pesan dan kirim pesan
    try:
        message_box = driver.find_element(By.XPATH, '//*[@title="Type a message"]')  # XPath untuk kolom pesan
        message_box.send_keys(message)  # Ketik pesan
        message_box.send_keys("\n")  # Tekan Enter untuk mengirim pesan
        print(f"Pesan berhasil dikirim ke {phone_number}")
    except Exception as e:
        print(f"Gagal mengirim pesan ke {phone_number}: {e}")

# Fungsi utama untuk mengatur dan mengirim pesan
def main():
    # Set opsi untuk menjalankan Chrome (opsional, misalnya untuk headless mode)
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # Menjalankan browser tanpa GUI (headless mode)
    
    # Menggunakan ChromeDriverManager untuk otomatisasi pengunduhan driver
    service = Service(ChromeDriverManager().install())

    # Inisialisasi WebDriver dengan path ke ChromeDriver menggunakan Service
    global driver
    driver = webdriver.Chrome(service=service, options=chrome_options)

    # Daftar nomor target dan pesan yang ingin dikirim
    target_numbers = ['6281372529119', '62895344018145']  # Masukkan nomor-nomor tujuan di sini
    message = """
    TRISENPAI Bootcamp - Algorithm & Programming 🚀
    Siap Jadi Pro Ngoding Sejak Awal!

    Halo baru masuk jadi MABA ya? Terus bingung dengan materi Algoritma dan Pemrograman? Atau bahkan kalian yang merasa nggak pernah belajar coding sama sekali? TRISENPAI hadir nih buat bantu kalian belajar dari nol! Bootcamp ini dibuat khusus untuk kalian yang pengen menghadapi mata kuliah algoritma dan pemrograman dengan baik. Dijamin, kalian bisa coding dengan percaya diri!

    Kenapa Harus Pilih TRISENPAI Bootcamp? 🚀 Bisa Ngoding dari Nol! Gak pernah nulis kode sebelumnya? Tenang, kita mulai dari yang paling dasar! Kami bantu kalian yang baru pertama kali mau belajar coding sampai bisa ngerjain soal-soal algoritma yang lebih rumit.

    📚 Akses Materi Seumur Hidup! Semua materi seperti video tutorial, cheatsheet, dan dokumen lainnya bisa diakses kapan saja dan dimana saja. Belajar fleksibel sesuai waktu kalian, tanpa takut ketinggalan.

    👨‍🏫 Pengajar Berpengalaman dari B28! Jangan khawatir, pengajar-pengajar kami adalah mahasiswa B28 yang udah berpengalaman dan punya IPK tinggi. Mereka udah melewati berbagai rintangan dan siap kasih tips serta bimbingan langsung supaya kalian gak kebingungan.

    💡 Paket TRISENPAI yang Bisa Dipilih Gak usah bingung, tinggal pilih paket yang sesuai dengan kebutuhan kamu:

    Solo: Rp 150.000 Paket belajar individu, cocok buat kamu yang pengen fokus sendiri.

    Duo: Rp 280.000 Belajar bareng teman atau sahabat, makin seru!

    Trio: Rp 400.000 Grup tiga orang, belajar bareng dan lebih hemat!

    🚨 Slot Terbatas! Daftar Sebelum Kehabisan! Pendaftaran Ditutup pada 24 Juli, jangan sampai kelewatan kesempatan ini! Kami hanya membuka slot terbatas, jadi pastikan kamu daftar sekarang juga!

    🔗 Daftar Sekarang di Website Kami! 👉 Pendaftaran: https://trisenpai.vercel.app/
    """

    # Kirim pesan ke semua nomor dalam daftar
    for number in target_numbers:
        send_whatsapp_message(number, message)

    # Setelah selesai, tutup browser
    driver.quit()

if __name__ == "__main__":
    main()
