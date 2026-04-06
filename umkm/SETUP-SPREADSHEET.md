# Panduan Setup Google Spreadsheet untuk Keripik Cindy Aremania

## Metode 1: Import File CSV (Tercepat)

### Langkah-langkah:

1. **Buka Google Sheets**
   - Kunjungi [sheets.google.com](https://sheets.google.com)
   - Klik tombol **+ Blank** untuk membuat spreadsheet baru

2. **Rename Spreadsheet**
   - Klik "Untitled spreadsheet" di pojok kiri atas
   - Ganti nama menjadi: **Keripik Cindy Aremania**

3. **Import Sheet Products**
   - Klik **File** > **Import**
   - Pilih tab **Upload**
   - Drag & drop file `products-template.csv` atau klik **Browse** untuk memilih file
   - Pada popup "Import file":
     - Import location: **Insert new sheet(s)**
     - Separator type: **Comma**
     - Convert text to numbers, dates, and formulas: **Centang**
   - Klik **Import data**
   - Rename sheet dari "products-template" menjadi **Products**

4. **Buat Sheet Orders**
   - Klik tombol **+** di bagian bawah untuk menambah sheet baru
   - Rename sheet menjadi **Orders**
   - Copy paste header berikut ke baris pertama:
     ```
     Timestamp | Nama | No. WhatsApp | Produk | Harga | Jumlah | Total | Alamat
     ```

5. **Format Spreadsheet (Opsional tapi Recommended)**
   
   **Untuk Sheet Products:**
   - Pilih baris 1 (header)
   - Klik **Format** > **Text** > **Bold**
   - Klik **View** > **Freeze** > **1 row**
   - Pilih kolom B (Price)
   - Klik **Format** > **Number** > **Currency** > **Indonesian Rupiah (Rp)**
   
   **Untuk Sheet Orders:**
   - Pilih baris 1 (header)
   - Klik **Format** > **Text** > **Bold**
   - Klik **View** > **Freeze** > **1 row**
   - Pilih kolom E dan G (Harga dan Total)
   - Klik **Format** > **Number** > **Currency** > **Indonesian Rupiah (Rp)**

6. **Copy Spreadsheet ID**
   - Lihat URL di browser, formatnya:
     ```
     https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
     ```
   - Copy bagian **[SPREADSHEET_ID]**
   - Contoh: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

---

## Metode 2: Manual Entry

### Langkah-langkah:

1. **Buka Google Sheets**
   - Kunjungi [sheets.google.com](https://sheets.google.com)
   - Klik **+ Blank**

2. **Rename Spreadsheet**
   - Ganti nama menjadi: **Keripik Cindy Aremania**

3. **Setup Sheet Products**
   - Rename Sheet1 menjadi **Products**
   - Di baris 1, masukkan header:
     | A | B | C | D |
     |---|---|---|---|
     | Name | Price | Description | Emoji |
   
   - Mulai dari baris 2, isi data produk:
     | Name | Price | Description | Emoji |
     |------|-------|-------------|-------|
     | Keripik Original | 15000 | Rasa original yang klasik | 🥔 |
     | Keripik Balado | 17000 | Pedas balado yang menggigit | 🌶️ |
     | Keripik BBQ | 17000 | Rasa BBQ yang smoky | 🍖 |
     | Keripik Keju | 18000 | Gurih keju yang creamy | 🧀 |
     | Keripik Jagung Manis | 16000 | Manis dan renyah | 🌽 |
     | Keripik Rumput Laut | 19000 | Rasa laut yang unik | 🌊 |
     | Keripik Pedas Manis | 17000 | Kombinasi pedas dan manis | 🔥 |
     | Keripik Bawang | 16000 | Gurih bawang yang harum | 🧅 |

4. **Setup Sheet Orders**
   - Klik tombol **+** di bagian bawah
   - Rename menjadi **Orders**
   - Di baris 1, masukkan header:
     | A | B | C | D | E | F | G | H |
     |---|---|---|---|---|---|---|---|
     | Timestamp | Nama | No. WhatsApp | Produk | Harga | Jumlah | Total | Alamat |

5. **Format Spreadsheet** (sama seperti Metode 1 langkah 5)

6. **Copy Spreadsheet ID** (sama seperti Metode 1 langkah 6)

---

## Langkah Selanjutnya: Setup Google Apps Script

Setelah spreadsheet siap, lanjutkan dengan setup Google Apps Script:

1. **Buka Apps Script**
   - Di spreadsheet, klik **Extensions** > **Apps Script**

2. **Paste Code**
   - Hapus code default yang ada
   - Buka file `google-apps-script.js`
   - Copy semua isinya
   - Paste ke Apps Script editor

3. **Update Spreadsheet ID**
   - Cari baris:
     ```javascript
     const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
     ```
   - Ganti `YOUR_SPREADSHEET_ID` dengan ID yang sudah di-copy
   - Contoh:
     ```javascript
     const SPREADSHEET_ID = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';
     ```

4. **Save Project**
   - Klik icon 💾 **Save** atau tekan `Ctrl+S`
   - Beri nama project: **Keripik Cindy API**

5. **Deploy Web App**
   - Klik **Deploy** > **New deployment**
   - Klik icon ⚙️ (gear) di samping "Select type"
   - Pilih **Web app**
   - Isi form:
     - Description: `Keripik Cindy Aremania API`
     - Execute as: **Me** (email Anda)
     - Who has access: **Anyone**
   - Klik **Deploy**

6. **Authorize Access**
   - Akan muncul popup "Authorization required"
   - Klik **Authorize access**
   - Pilih akun Google Anda
   - Klik **Advanced** (jika muncul warning)
   - Klik **Go to [Project Name] (unsafe)**
   - Klik **Allow**

7. **Copy Web App URL**
   - Setelah deploy berhasil, akan muncul URL
   - Format: `https://script.google.com/macros/s/AKfycby.../exec`
   - **Copy URL ini**

8. **Update Website**
   - Buka file `index.html`
   - Cari baris (sekitar baris 115):
     ```javascript
     const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
     ```
   - Ganti dengan URL yang sudah di-copy:
     ```javascript
     const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
     ```
   - Save file

---

## Testing

1. **Test Website**
   - Buka `index.html` di browser
   - Cek apakah 8 produk muncul dengan benar
   - Isi form pemesanan
   - Submit

2. **Cek Orders di Spreadsheet**
   - Buka Google Sheets
   - Buka sheet **Orders**
   - Pesanan baru harus muncul di baris baru

---

## Troubleshooting

### Produk tidak muncul di website
- Pastikan sheet bernama **Products** (huruf besar P)
- Pastikan header di baris 1: Name, Price, Description, Emoji
- Pastikan SPREADSHEET_ID sudah benar di Apps Script
- Cek Console browser (F12) untuk error

### Pesanan tidak masuk ke spreadsheet
- Pastikan Web App sudah di-deploy dengan "Who has access: Anyone"
- Pastikan URL Web App sudah benar di index.html
- Cek sheet **Orders** sudah ada
- Coba deploy ulang Web App

### Error "Authorization required"
- Klik Authorize access
- Pilih akun Google
- Allow semua permissions

### Emoji tidak muncul
- Pastikan spreadsheet menggunakan encoding UTF-8
- Copy paste emoji langsung dari file products-template.csv

---

## Tips

✅ Backup spreadsheet secara berkala
✅ Jangan share Spreadsheet ID ke publik
✅ Monitor sheet Orders untuk pesanan baru
✅ Update harga di sheet Products kapan saja (otomatis update di website)
✅ Tambah produk baru dengan menambah baris di sheet Products

---

## Struktur Spreadsheet Final

```
📊 Keripik Cindy Aremania
├── 📄 Products (8 rows + header)
│   ├── Name
│   ├── Price
│   ├── Description
│   └── Emoji
│
└── 📄 Orders (header + data pesanan)
    ├── Timestamp
    ├── Nama
    ├── No. WhatsApp
    ├── Produk
    ├── Harga
    ├── Jumlah
    ├── Total
    └── Alamat
```

---

Selamat! Spreadsheet Anda sudah siap digunakan! 🎉
