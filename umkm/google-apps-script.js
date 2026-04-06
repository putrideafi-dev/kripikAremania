// Google Apps Script untuk Keripik Cindy Aremania
// Deploy sebagai Web App untuk menghubungkan website dengan Google Sheets

// INSTRUKSI SETUP:
// 1. Buka Google Sheets baru
// 2. Buat 2 sheet: "Products" dan "Orders"
// 3. Di sheet "Products", buat header: Name | Price | Description | Emoji
// 4. Isi dengan 8 varian keripik
// 5. Extensions > Apps Script
// 6. Copy paste code ini
// 7. Deploy > New deployment > Web app
// 8. Execute as: Me
// 9. Who has access: Anyone
// 10. Copy URL Web App dan paste ke index.html (variable SCRIPT_URL)

// ID Spreadsheet Anda (ganti dengan ID spreadsheet Anda)
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Ambil dari URL spreadsheet

function doGet(e) {
  const action = e.parameter.action;
  
  if (action === 'getProducts') {
    return getProducts();
  }
  
  return ContentService.createTextOutput(JSON.stringify({
    status: 'error',
    message: 'Invalid action'
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    return saveOrder(data);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Ambil data produk dari sheet "Products"
function getProducts() {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName('Products');
    
    if (!sheet) {
      throw new Error('Sheet "Products" tidak ditemukan');
    }
    
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const products = [];
    
    // Skip header row
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row[0]) { // Check if name exists
        products.push({
          name: row[0],
          price: row[1],
          description: row[2],
          emoji: row[3] || '🥔'
        });
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      products: products
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Simpan pesanan ke sheet "Orders"
function saveOrder(orderData) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName('Orders');
    
    // Buat sheet Orders jika belum ada
    if (!sheet) {
      sheet = ss.insertSheet('Orders');
      sheet.appendRow(['Timestamp', 'Nama', 'No. WhatsApp', 'Produk', 'Harga', 'Jumlah', 'Total', 'Alamat']);
    }
    
    const total = orderData.price * orderData.quantity;
    
    sheet.appendRow([
      orderData.timestamp,
      orderData.name,
      orderData.phone,
      orderData.product,
      orderData.price,
      orderData.quantity,
      total,
      orderData.address
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Pesanan berhasil disimpan'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
