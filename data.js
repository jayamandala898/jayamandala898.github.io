const articles = [
    {
        id: 1,
        title: "Drama Setup DNS dan CNAME: Catatan Kecil Deployment",
        content: "Kemarin saya sempat pusing sendiri waktu mau pointing custom domain. Biasalah, urusan mengatur DNS A record dan CNAME buat domain yang baru dibeli kadang suka bikin deg-degan. Pas udah diset di Hostinger dan diarahkan ke GitHub Pages, nunggunya itu lho yang bikin geregetan. Ada yang bilang propagasi DNS bisa makan waktu 1x24 jam, tapi untungnya kemarin cuma butuh sekitar 2 jam sampai akhirnya website bisa diakses pakai HTTPS dengan mulus. Buat kalian yang sering deploy project klien, saran saya satu: jangan pernah ngoprek DNS di hari Jumat sore. Bahaya kalau error pas *weekend*!"
    },
    {
        id: 2,
        title: "Bikin Sistem Multi-Role pakai Laravel, Emang Sepenting Itu?",
        content: "Banyak klien yang minta dibuatkan dashboard, tapi ujung-ujungnya mereka baru sadar kalau mereka butuh akses yang beda-beda. Ada admin, ada kasir, ada manajer. Di sinilah Laravel benar-benar menyelamatkan hidup saya. Daripada nulis if-else yang panjangnya bikin sakit mata, saya lebih suka pakai pendekatan middleware dan gate yang udah disediain Laravel. Waktu ngerjain project sistem database kasir belakangan ini, saya bikin pemisahan logic yang lumayan ketat di sisi backend. Hasilnya? Kode jadi jauh lebih bersih dan klien puas karena data rahasia manajer nggak bocor ke layar kasir."
    },
    {
        id: 3,
        title: "Suka Duka Menjadi Solo Developer Game Android",
        content: "Bikin game itu asyik, tapi jadi solo developer buat game Android adalah level tantangan yang beda. Mulai dari bikin logika *gameplay* sampai potong-potong aset gambar (*sprite*), semuanya dikerjain sendiri. Waktu saya develop game Tebak Pasangan Kartu dan beberapa arcade kecil lainnya, hal yang paling makan waktu justru bukan codingnya, tapi menyesuaikan resolusi ikon dan *screenshot* biar lolos review Play Store. Meski capek, perasaan waktu ngelihat game kita udah tayang dan ada yang download itu bener-bener nggak bisa dibayar pakai uang."
    },
    {
        id: 4,
        title: "Kenapa Landing Page Klien Harus Super Responsif?",
        content: "Pernah dapat protes dari klien dari UK karena website perusahaannya kelihatan aneh waktu dibuka pakai HP? Sejak saat itu, saya selalu pegang prinsip *mobile-first*. Menggunakan HTML dan CSS murni atau framework, memastikan navigasi dan teks gampang dibaca di layar kecil itu wajib hukumnya. Kalau kalian bikin *landing page* buat perusahaan, ingat bahwa lebih dari 60% visitor sekarang datang dari *smartphone*. Pastikan tombol Call to Action (CTA) gampang dipencet jempol!"
    },
    {
        id: 5,
        title: "Menyelami Database SQL: Ketika Data Berantakan",
        content: "Sebagai developer fullstack, urusan sama database itu udah makanan sehari-hari. Kadang ada anomali transaksi yang bikin pusing. Waktu nyari bug di log transaksi sebuah project retail, saya harus bikin *query* SQL berlapis buat melacak mana data yang nggak sinkron antara stok dan penjualan. Ternyata masalahnya ada di *barcode ID* yang nggak ter-update. Momen ketemu bug-nya itu rasanya kayak jadi detektif. Pesan moralnya: selalu biasakan melakukan *soft-delete* alih-alih *hard-delete* di tabel krusial."
    },
    {
        id: 6,
        title: "Pengalaman Pakai Flutter untuk Project Mobile",
        content: "Dulu saya cukup skeptis sama framework cross-platform. Tapi setelah nyemplung ke Flutter, wah, *game changer* banget. Fitur *hot reload*-nya itu bikin proses modifikasi UI jauh lebih cepat dibanding build ulang di Android Studio yang kadang bikin laptop menjerit. Walaupun begitu, ada beberapa plugin yang kadang masih butuh *tweaking* di sisi native Kotlin. Buat yang mau belajar mobile dev tahun ini, Flutter sangat saya rekomendasikan."
    },
    {
        id: 7,
        title: "Bcrypt vs MD5: Tolong Berhenti Pakai MD5!",
        content: "Ini serius. Saya masih sering nemu kode warisan (*legacy code*) yang masih nyimpen password user pakai hashing MD5. Padahal algoritma itu udah nggak aman sama sekali. Di project-project baru, saya selalu pastikan pakai Bcrypt. Bcrypt ini punya fitur *salt* bawaan dan beban komputasinya bisa diatur. Ingat, tanggung jawab kita sebagai developer bukan cuma bikin aplikasi jalan, tapi juga mengamankan data pengguna."
    },
    {
        id: 8,
        title: "Kenapa Dark Mode Adalah 'Jalan Ninja' Programmer",
        content: "Percaya atau nggak, menatap layar dengan latar putih terang selama 10 jam itu menyiksa mata. Makanya, semua text editor yang saya pakai (seperti VS Code atau Android Studio) pasti diset ke tema gelap atau *dark mode*. Nggak cuma buat alat kerja, sekarang saya juga selalu nawarin opsi *dark mode* buat website klien. Selain kelihatan lebih modern, mata pengunjung juga lebih nyaman buat baca artikel panjang."
    },
    {
        id: 9,
        title: "Drama Debugging: Titik Koma yang Menghancurkan Malam",
        content: "Ada kalanya kita ngerasa udah nulis kode dengan sempurna, logika udah pas, tapi pas di-*run*, layarnya putih doang. Setelah dua jam mencari error sambil minum kopi dingin, ternyata masalahnya cuma gara-gara kurang satu titik koma di file konfigurasi. Kadang jadi programmer itu melatih kesabaran tingkat dewa. Tapi dari kesalahan konyol kayak gini, kita jadi lebih teliti pakai linter."
    },
    {
        id: 10,
        title: "Tips Mengatasi Burnout Saat Kebanyakan Coding",
        content: "Duduk berjam-jam mikirin algoritma dan tenggat waktu rilis aplikasi bisa bikin otak ngebul. Kalau udah mentok, saya biasanya mematikan laptop, keluar rumah, atau sekadar main game *open-world* favorit saya buat santai sambil ngerjain *quest* atau *crafting*. Intinya, memaksakan diri ngoding pas lagi *burnout* malah bikin makin banyak *bug*. Otak kita butuh jeda biar bisa mikir jernih lagi."
    },
    {
        id: 11,
        title: "Pentingnya Menulis Komentar di Kode Anda",
        content: "Pernah nggak sih buka project lama yang dibuat enam bulan lalu, terus ngebatin, 'Ini kode siapa yang nulis ya? Kok ribet amat.' Padahal itu tulisan kita sendiri! Sejak kejadian itu, saya mewajibkan diri sendiri buat ngasih komentar (*comment*) di setiap *function* yang lumayan kompleks. Komentar itu bukan buat orang lain, tapi surat cinta buat diri kita di masa depan biar nggak bingung."
    },
    {
        id: 12,
        title: "Memilih AI yang Tepat Buat Teman Ngoding",
        content: "Perkembangan AI sekarang gila banget. Sebagai developer, saya suka bereksperimen dengan berbagai asisten AI dari Gemini, Claude, sampai copilot lainnya. Masing-masing punya kelebihan, ada yang jago banget baca *context* project panjang, ada yang kodenya langsung bisa dieksekusi tanpa banyak revisi. AI ini nggak bakal ngegantiin programmer kok, justru jadi asisten luar biasa kalau kita tahu cara *prompting* yang benar."
    },
    {
        id: 13,
        title: "Laptop RAM 8GB Cukup Buat Android Studio?",
        content: "Banyak yang tanya, sanggup nggak sih laptop dengan RAM pas-pasan dipakai buat Android Studio? Jawaban jujur saya: bisa, tapi siap-siap nangis. Waktu nyalain emulator, RAM 8GB bakal langsung ludes. Kalau mau serius di mobile development, sangat disarankan upgrade minimal ke 16GB. Performa lancar = *mood* kerja tetap terjaga."
    },
    {
        id: 14,
        title: "Client Minta 'Mirip Tokopedia' Tapi Budget Terbatas",
        content: "Ini kejadian klasik di dunia *freelance* web developer. Ekspektasi klien selangit, maunya fitur lengkap dengan payment gateway dan sistem ongkir otomatis, tapi *budget* yang ditawarkan pas-pasan. Kuncinya ada di komunikasi. Saya biasanya ngasih penjelasan pelan-pelan soal apa itu MVP (*Minimum Viable Product*). Kita mulai dari fitur inti dulu, sisanya di-*scale up* pelan-pelan kalau bisnisnya udah jalan."
    },
    {
        id: 15,
        title: "Pengalaman Menggunakan NativePHP",
        content: "Sebagai orang yang banyak pakai PHP (khususnya Laravel), kemunculan NativePHP bikin saya antusias banget. Bayangin, kita bisa bikin aplikasi desktop beneran pakai tumpukan teknologi web yang biasa kita pakai. Buat developer web yang pengen penetrasi ke pasar aplikasi desktop tanpa harus belajar bahasa baru kayak C++ atau C#, ini benar-benar kabar gembira yang layak dieksplorasi."
    },
    {
        id: 16,
        title: "Belajar Bahasa Pemrograman Baru, Mulai Dari Mana?",
        content: "Jangan mulai dari menghafal sintaks! Saran saya, kalau mau belajar bahasa baru, carilah project kecil-kecilan. Misalnya mau belajar Python, coba bikin script sederhana buat *scraping* data web. Kalau belajarnya tanpa tujuan atau tanpa praktik nyata, biasanya bakal cepat lupa. Praktek langsung bikin kita paham bagaimana alur bahasa tersebut bekerja dalam menyelesaikan masalah."
    },
    {
        id: 17,
        title: "Error 500: Teman Lama yang Selalu Datang Tiba-tiba",
        content: "Lagi asyik demo project ke klien, tiba-tiba muncul halaman putih bertuliskan 'Internal Server Error 500'. Keringat dingin langsung turun. Biasanya ini gara-gara lupa nge-set file `.env` di server atau *permission folder* yang salah. Developer yang baik adalah yang nggak panik pas lihat error ini, tapi langsung buka *log file* di server buat ngecek sumber masalahnya."
    },
    {
        id: 18,
        title: "Pentingnya Soft Skill untuk Programmer",
        content: "Orang ngira jadi programmer itu cuma butuh *skill* ngetik kode di depan komputer. Kenyataannya, kita butuh *soft skill* buat ngobrol sama klien, ngejelasin teknis ke bahasa awam, dan kerja bareng tim tanpa drama. Jago ngoding itu wajib, tapi bisa jualan ide dan berkomunikasi dengan baik itu yang bikin kita bertahan lama di industri ini."
    },
    {
        id: 19,
        title: "Pilih Font yang Tepat Biar Website Nggak Kelihatan Murahan",
        content: "Typografi itu sering diremehkan. Padahal, cuma dengan mengganti kombinasi font, *feel* sebuah *landing page* bisa berubah drastis dari yang tadinya kayak web tahun 2005 jadi lebih modern dan elegan. Saya pribadi sering menghabiskan waktu berjam-jam cuma buat nyari font *sans-serif* yang cocok di Google Fonts untuk ngepasin identitas *brand* klien."
    },
    {
        id: 20,
        title: "Hari Biasa dalam Kehidupan Web Developer Dari Rumah",
        content: "Kerja *remote* atau dari rumah itu kelihatannya enak. Bisa bangun siang, kerja pakai celana pendek. Tapi tantangannya adalah disiplin waktu. Terkadang batas antara jam kerja dan jam istirahat jadi kabur. Makanya saya selalu biasain mandi pagi, bikin kopi, dan duduk di meja kerja yang khusus buat ngoding. Rutinitas ini ngasih sinyal ke otak: 'Oke, saatnya fokus bekerja!'"
    }
];
