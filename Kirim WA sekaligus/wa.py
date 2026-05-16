import webbrowser
import urllib.parse  # Untuk encoding URL

# Fungsi untuk mengirim pesan langsung ke WhatsApp Desktop
def send_whatsapp_message(phone_number, message):
    # Encode pesan untuk memastikan karakter khusus terproses dengan benar
    encoded_message = urllib.parse.quote(message)
    
    # Membuka URL WhatsApp dengan nomor yang dituju dan pesan yang sudah ditulis
    url = f"https://wa.me/{phone_number}?text={encoded_message}"
    
    # Buka URL di WhatsApp Desktop (secara otomatis akan membuka aplikasi WhatsApp jika sudah terpasang)
    webbrowser.open(url)
    print(f"Pesan berhasil dikirim ke {phone_number}")

# Daftar nomor target dan pesan yang ingin dikirim
target_numbers = ['6281372529119', '62895344018145']  # Masukkan nomor-nomor tujuan di sini
message = "Halo! Ini pesan otomatis dari TRISENPAI Bootcamp. Jangan lupa daftar ya!"


# Kirim pesan ke semua nomor dalam daftar
for number in target_numbers:
    send_whatsapp_message(number, message)

