Kara CMS — static admin (demo)

Apa ini:
- CMS statis sederhana untuk mengelola posting blog pada proyek lokal.
- Menyimpan data di `localStorage` browser. Tidak ada backend.

Cara pakai:
1. Buka `cms/index.html` di browser.
2. Login demo: masukkan kata sandi `admin` lalu klik "Masuk".
3. Tambah/Edit/Hapus post. Perubahan disimpan di `localStorage`.
4. Gunakan tombol `Export JSON` untuk mengekspor data, dan `Import JSON` untuk mengimpor di komputer lain atau saat memindahkan.

Integrasi ke situs statis:
- Setelah mengekspor JSON, Anda dapat menggunakannya sebagai sumber untuk membangun halaman blog atau menyalin entri ke template statis.

Catatan:
- Karena keterbatasan file:// dan browser, fetch file lokal mungkin tidak bekerja jika Anda menggunakan server file. CMS ini sengaja dibuat tanpa kebutuhan server.
- Jika ingin backend (serverless/API) untuk menyimpan post ke file atau DB, saya bisa scaffold endpoint di folder `api/`.
