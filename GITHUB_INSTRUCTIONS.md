# Instruksi Push ke GitHub

Proyek telah siap untuk di-push ke repository GitHub. Namun, terjadi error permission saat mencoba push. Berikut adalah langkah-langkah untuk menyelesaikannya:

## Masalah yang Terjadi
```
ERROR: Permission to arthena07/tupaiJS.git denied to sunendi.
fatal: Could not read from remote repository.
```

## Solusi

### Opsi 1: Menggunakan HTTPS (Direkomendasikan)

1. Hapus remote origin yang ada:
   ```bash
   git -C "D:\Hana\Tugas Kuliah JavaScript\tupai js" remote remove origin
   ```

2. Tambahkan remote dengan HTTPS:
   ```bash
   git -C "D:\Hana\Tugas Kuliah JavaScript\tupai js" remote add origin https://github.com/arthena07/tupaiJS.git
   ```

3. Push ke GitHub:
   ```bash
   git -C "D:\Hana\Tugas Kuliah JavaScript\tupai js" push -u origin master
   ```

4. Masukkan username dan password GitHub Anda saat diminta.

### Opsi 2: Menggunakan SSH Key

Jika Anda ingin menggunakan SSH, pastikan SSH key sudah terkonfigurasi dengan benar:

1. Cek konfigurasi Git:
   ```bash
   git config --global user.name
   git config --global user.email
   ```

2. Jika belum dikonfigurasi, jalankan:
   ```bash
   git config --global user.name "arthena07"
   git config --global user.email "email.github.anda@gmail.com"
   ```

3. Generate SSH key (jika belum ada):
   ```bash
   ssh-keygen -t ed25519 -C "email.github.anda@gmail.com"
   ```

4. Tambahkan SSH key ke GitHub:
   - Copy SSH key: `cat ~/.ssh/id_ed25519.pub`
   - Buka GitHub > Settings > SSH and GPG keys
   - Klik "New SSH key" dan paste key tersebut

5. Test koneksi SSH:
   ```bash
   ssh -T git@github.com
   ```

6. Push ke repository:
   ```bash
   git -C "D:\Hana\Tugas Kuliah JavaScript\tupai js" push -u origin master
   ```

### Opsi 3: Menggunakan GitHub CLI

Jika Anda memiliki GitHub CLI terinstall:

1. Login ke GitHub:
   ```bash
   gh auth login
   ```

2. Push repository:
   ```bash
   cd "D:\Hana\Tugas Kuliah JavaScript\tupai js"
   gh repo create arthena07/tupaiJS --public --push
   ```

## Status Saat Ini

✅ Repository Git telah diinisialisasi  
✅ Semua file telah di-commit  
✅ Remote origin telah ditambahkan  
❌ Push ke GitHub gagal (permission error)  

## File yang Telah Dibuat

1. **Tupai.js** - Class Tupai dengan atribut dan method
2. **TestTupai.js** - Class TestTupai untuk testing object
3. **index.html** - Interface HTML untuk menjalankan di browser
4. **README.md** - Dokumentasi lengkap proyek
5. **GITHUB_INSTRUCTIONS.md** - File ini (instruksi GitHub)

## Cara Menjalankan Proyek

1. Buka file `index.html` di browser
2. Klik tombol "Jalankan Testing Tupai"
3. Lihat hasilnya di halaman tersebut

Proyek sudah siap digunakan dan dapat dijalankan di localhost tanpa perlu push ke GitHub terlebih dahulu.