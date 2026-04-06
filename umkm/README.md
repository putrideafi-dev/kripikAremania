# Website Keripik Cindy Aremania 🥔

Website UMKM untuk Keripik Cindy Aremania dengan 8 varian keripik. Desain modern dengan gradasi warna biru yang aesthetic dan terintegrasi dengan Google Sheets untuk penyimpanan data.

## Fitur

✨ Desain modern dengan gradasi biru aesthetic
🍠 7 varian keripik dengan emoji unik
📱 Responsive design (mobile & desktop)
📊 Integrasi Google Sheets untuk data produk dan pesanan
🎨 Animasi smooth dan hover effects
📝 Form pemesanan lengkap

## Varian Keripik

1. Keripik Singkong Manis - Rp 15.000
2. Keripik Singkong Asin Gurih - Rp 15.000
3. Keripik Singkong Balado - Rp 17.000
4. Stick Talas - Rp 16.000
5. Gelombang Talas - Rp 16.000
6. Pisang - Rp 18.000
7. Ubi Ungu - Rp 19.000

## Setup Google Sheets Integration

### 🚀 Quick Start (Metode Tercepat)

1. **Import Template CSV**
   - Buka [Google Sheets](https://sheets.google.com)
   - Buat spreadsheet baru
   - Import file `products-template.csv` sebagai sheet "Products"
   - Buat sheet baru bernama "Orders" dengan header dari `orders-template.csv`

2. **Setup Apps Script**
   - Ikuti panduan lengkap di file **`SETUP-SPREADSHEET.md`**

### 📋 File Template yang Tersedia

- `products-template.csv` - Template data 8 produk keripik
- `orders-template.csv` - Template header untuk data pesanan
- `SETUP-SPREADSHEET.md` - Panduan lengkap setup spreadsheet (BACA INI!)

### ⚡ Ringkasan Setup

1. Import `products-template.csv` ke Google Sheets
2. Buat sheet "Orders" dengan header dari `orders-template.csv`
3. Copy Spreadsheet ID dari URL
4. Paste code dari `google-apps-script.js` ke Apps Script
5. Update SPREADSHEET_ID di Apps Script
6. Deploy sebagai Web App
7. Copy URL Web App ke `index.html`

**Lihat `SETUP-SPREADSHEET.md` untuk panduan detail dengan screenshot!**

## Cara Menggunakan

### Mode Demo (Tanpa Google Sheets)
- Buka `index.html` di browser
- Website akan menampilkan 8 produk default
- Form pemesanan akan menampilkan pesan demo

### Mode Production (Dengan Google Sheets)
- Setelah setup Google Sheets selesai
- Buka `index.html` di browser
- Produk akan dimuat dari Google Sheets
- Pesanan akan tersimpan di sheet "Orders"

## Struktur File

```
├── index.html                 # Website utama
├── google-apps-script.js      # Script untuk Google Sheets
├── products-template.csv      # Template data produk (import ke Google Sheets)
├── orders-template.csv        # Template header pesanan
├── SETUP-SPREADSHEET.md       # Panduan lengkap setup spreadsheet
└── README.md                  # Dokumentasi
```

## Teknologi

- HTML5
- CSS3 dengan Tailwind CSS
- JavaScript (Vanilla)
- Google Apps Script
- Google Sheets API

## Customisasi

### Mengubah Warna
Edit bagian CSS di `index.html`:
```css
.gradient-blue {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%);
}
```

### Menambah/Mengubah Produk
Edit data di Google Sheets sheet "Products"

### Mengubah Kontak
Edit bagian Contact Section di `index.html`:
```html
<p class="text-xl mb-4">📱 WhatsApp: 0812-3456-7890</p>
<p class="text-xl mb-4">📧 Email: keripikcindy@gmail.com</p>
```

## Tips

- Pastikan Google Sheets bisa diakses oleh script
- Test form pemesanan setelah setup
- Cek sheet "Orders" untuk melihat pesanan masuk
- Backup data secara berkala

## Support

Untuk pertanyaan atau bantuan, hubungi:
- WhatsApp: 0812-3456-7890
- Email: keripikcindy@gmail.com

---

Dibuat dengan ❤️ untuk UMKM Keripik Cindy Aremania
