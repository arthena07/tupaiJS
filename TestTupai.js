// Import class Tupai
// Untuk browser, kita akan menggunakan script tag di HTML
// const Tupai = require('./Tupai.js'); // Uncomment jika menggunakan Node.js

class TestTupai {
    constructor() {
        this.tupais = [];
    }

    // Method untuk membuat dan menguji objek tupai
    ujiTupai() {
        console.log("=== MEMULAI TESTING TUPAI ===");

        // Membuat object tupai1 dengan atribut
        const tupai1 = new Tupai("Siput", 2, "Tupai Pohon", "Coklat", 0.5);
        this.tupais.push(tupai1);

        // Membuat object tupai2 dengan atribut
        const tupai2 = new Tupai("Kelinci", 3, "Tupai Tanah", "Abu-abu", 0.7);
        this.tupais.push(tupai2);

        // Membuat object tupai3, copykan isi tupai2 ke tupai3
        const tupai3 = new Tupai(tupai2.nama, tupai2.umur, tupai2.jenis, tupai2.warna, tupai2.berat);
        tupai3.nama = "Pelanduk"; // Ubah nama untuk membedakan
        this.tupais.push(tupai3);

        // Menampilkan isi dari 3 object tupai yang telah dibuat
        this.tampilkanSemuaTupai();

        // Menjalankan beberapa method dari class Tupai
        console.log("\n=== TESTING METHOD TUPAI ===");
        console.log(tupai1.lompat(2));
        console.log(tupai2.makan("kacang"));
        console.log(tupai3.galiLubang());

        return this.tupais;
    }

    // Method untuk menampilkan semua tupai
    tampilkanSemuaTupai() {
        console.log("\n=== DATA SEMUA TUPAI ===");
        this.tupais.forEach((tupai, index) => {
            console.log(`Tupai ${index + 1}: ${tupai.tampilkanInfo()}`);
        });
    }

    // Method untuk menampilkan hasil di HTML
    tampilkanDiHTML() {
        let hasilHTML = "<h2>Hasil Testing Tupai</h2>";
        
        this.tupais.forEach((tupai, index) => {
            hasilHTML += `
                <div class="tupai-card">
                    <h3>Tupai ${index + 1}</h3>
                    <p>${tupai.tampilkanInfo()}</p>
                    <div class="aksi">
                        <p>${tupai.lompat(2)}</p>
                        <p>${tupai.makan("kacang")}</p>
                        <p>${tupai.galiLubang()}</p>
                    </div>
                </div>
            `;
        });

        return hasilHTML;
    }
}

// Export class TestTupai untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TestTupai;
}