// VALEO Kalite Dashboard — Google Apps Script Backend
// Kurulum:
//   1. Google Sheets > Uzantılar > Apps Script
//   2. Bu kodu yapıştır
//   3. Dağıt > Yeni dağıtım > Web uygulaması
//      - Erişim: "Herkes" seçin
//   4. Dağıtım URL'sini kopyala → cikti-B-live.html içindeki APPS_SCRIPT_URL'ye yapıştır

function doGet(e) {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet();

  const data = sheet.getDataRange().getValues();

  if (data.length < 2) {
    return jsonResponse({ error: 'Veri bulunamadı', rows: [] });
  }

  const headers = data[0];
  const rows = data.slice(1).map(function(row) {
    const obj = {};
    headers.forEach(function(h, i) {
      obj[String(h).trim()] = row[i];
    });
    return obj;
  });

  return jsonResponse({ rows: rows, count: rows.length });
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
