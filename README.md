# Tupai JavaScript Project

Proyek JavaScript untuk mempelajari konsep class dan object-oriented programming menggunakan contoh tupai.

## Deskripsi

Proyek ini dibuat untuk memenuhi tugas kuliah JavaScript dengan ketentuan:
- Membuat class Tupai
- Membuat class TestTupai
- Membuat object tupai1 dengan atribut
- Membuat object tupai2 dengan atribut
- Membuat object tupai3 sebagai copy dari tupai2
- Menampilkan isi dari 3 object tupai yang telah dibuat

## Struktur File

```
tupai js/
├── Tupai.js          # Class Tupai dengan atribut dan method
├── TestTupai.js      # Class TestTupai untuk testing
├── index.html        # Halaman HTML untuk menjalankan di browser
└── README.md         # Dokumentasi proyek
```

## Cara Menjalankan

### Opsi 1: Membuka langsung di browser

1. Buka file explorer
2. Navigasi ke folder `D:\Hana\Tugas Kuliah JavaScript\tupai js`
3. Klik dua kali pada file `index.html`
4. Halaman akan terbuka di browser default Anda
5. Klik tombol "Jalankan Testing Tupai" untuk melihat hasilnya

### Opsi 2: Menggunakan Live Server (VS Code)

Jika Anda menggunakan Visual Studio Code:

1. Install ekstensi "Live Server"
2. Klik kanan pada file `index.html`
3. Pilih "Open with Live Server"
4. Halaman akan terbuka di browser dengan server lokal

### Opsi 3: Menggunakan Python HTTP Server

1. Buka command prompt atau PowerShell
2. Navigasi ke folder proyek:
   ```
   cd "D:\Hana\Tugas Kuliah JavaScript\tupai js"
   ```
3. Jalankan server:
   ```
   python -m http.server 8000
   ```
4. Buka browser dan akses `http://localhost:8000`

## Penjelasan Kode

### Class Tupai

Class `Tupai` memiliki:
- **Atribut**: nama, umur, jenis, warna, berat
- **Method**:
  - `tampilkanInfo()`: Menampilkan informasi lengkap tupai
  - `lompat(jarak)`: Simulasi tupai melompat
  - `makan(makanan)`: Simulasi tupai makan
  - `galiLubang()`: Simulasi tupai menggali lubang

### Class TestTupai

Class `TestTupai` digunakan untuk:
- Membuat 3 object tupai (tupai1, tupai2, tupai3)
- tupai3 adalah copy dari tupai2 dengan nama yang berbeda
- Menampilkan hasil testing di console dan HTML

## Hasil Output

Ketika dijalankan, program akan menampilkan:

1. **Console Output**: Log proses pembuatan object dan testing method
2. **HTML Output**: Kartu informasi untuk setiap tupai dengan:
   - Informasi dasar (nama, umur, jenis, warna, berat)
   - Aksi yang dapat dilakukan (lompat, makan, gali lubang)

## Git Repository

Proyek ini dapat diakses melalui Git:
```
git@github.com:arthena07/tupaiJS.git
```

## Kontribusi

Ini adalah proyek tugas kuliah, namun jika ingin melakukan perbaikan:
1. Fork repository
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -am 'Tambah fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## Lisensi

Proyek ini dibuat untuk tujuan pendidikan.