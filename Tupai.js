class Tupai {
    // Constructor untuk inisialisasi objek Tupai
    constructor(nama, umur, jenis, warna, berat) {
        this.nama = nama;
        this.umur = umur;
        this.jenis = jenis;
        this.warna = warna;
        this.berat = berat;
    }

    // Method untuk menampilkan informasi tupai
    tampilkanInfo() {
        return `Nama: ${this.nama}, Umur: ${this.umur} tahun, Jenis: ${this.jenis}, Warna: ${this.warna}, Berat: ${this.berat} kg`;
    }

    // Method untuk tupai melompat
    lompat(jarak) {
        return `${this.nama} melompat sejauh ${jarak} meter!`;
    }

    // Method untuk tupai makan
    makan(makanan) {
        return `${this.nama} sedang makan ${makanan}.`;
    }

    // Method untuk menggali lubang
    galiLubang() {
        return `${this.nama} sedang menggali lubang untuk menyimpan makanan.`;
    }
}

// Export class Tupai untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Tupai;
}