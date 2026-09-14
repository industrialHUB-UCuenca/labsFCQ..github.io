const SHEET_NAME = "Agenda FABLAB";
const FALLBACK_SHEET_NAMES = ["Agenda FABLAB", "Agenda FCQ"];
const SPREADSHEET_ID = "";
const HEADERS = [
  "id",
  "labId",
  "labName",
  "campus",
  "date",
  "start",
  "end",
  "requester",
  "email",
  "purpose",
  "status",
  "createdAt",
  "updatedAt",
];

function doGet(e) {
  const action = e.parameter.action || "";

  if (action === "create") {
    return json_(createRequest_(parsePayload_(e)), e.parameter.callback);
  }

  if (action === "update") {
    return json_(updateRequest_(parsePayload_(e)), e.parameter.callback);
  }

  const labId = e.parameter.labId || "";
  const rows = getRows_().filter((item) => !labId || item.labId === labId);
  return json_({ ok: true, items: rows }, e.parameter.callback);
}

function doPost(e) {
  const input = JSON.parse(e.postData.contents || "{}");
  const action = input.action;
  const payload = input.payload || {};

  if (action === "create") {
    return json_(createRequest_(payload));
  }

  if (action === "update") {
    return json_(updateRequest_(payload));
  }

  return json_({ ok: false, error: "Acción no reconocida." });
}

function parsePayload_(e) {
  return JSON.parse(e.parameter.payload || "{}");
}

function createRequest_(request) {
  const sheet = getSheet_();
  const now = new Date().toISOString();
  const record = {
    id: request.id || `REQ-${Date.now()}`,
    labId: request.labId || "",
    labName: request.labName || "",
    campus: request.campus || "",
    date: request.date || "",
    start: request.start || "",
    end: request.end || "",
    requester: request.requester || "",
    email: request.email || "",
    purpose: request.purpose || "",
    status: "PENDIENTE",
    createdAt: request.createdAt || now,
    updatedAt: now,
  };

  const row = HEADERS.map((header) => String(record[header] || ""));
  const nextRow = sheet.getLastRow() + 1;
  sheet.getRange(nextRow, 1, 1, HEADERS.length).setNumberFormat("@").setValues([row]);
  return { ok: true, item: record };
}

function updateRequest_(request) {
  const sheet = getSheet_();
  const values = sheet.getDataRange().getDisplayValues();
  const idIndex = HEADERS.indexOf("id");
  const statusIndex = HEADERS.indexOf("status");
  const updatedIndex = HEADERS.indexOf("updatedAt");

  for (let row = 1; row < values.length; row += 1) {
    if (String(values[row][idIndex]) === String(request.id)) {
      sheet.getRange(row + 1, statusIndex + 1).setNumberFormat("@").setValue(String(request.status || "PENDIENTE"));
      sheet.getRange(row + 1, updatedIndex + 1).setNumberFormat("@").setValue(new Date().toISOString());
      return { ok: true };
    }
  }

  return { ok: false, error: "Solicitud no encontrada." };
}

function getRows_() {
  const sheet = getSheet_();
  const values = sheet.getDataRange().getDisplayValues();
  return values.slice(1).filter((row) => row.some(Boolean)).map((row) => {
    return HEADERS.reduce((item, header, index) => {
      item[header] = row[index] === undefined ? "" : String(row[index]);
      return item;
    }, {});
  });
}

function getSheet_() {
  const spreadsheet = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();

  if (!spreadsheet) {
    throw new Error("No hay una hoja activa. Pegue el ID del Google Sheet en SPREADSHEET_ID.");
  }

  let sheet = FALLBACK_SHEET_NAMES.map((name) => spreadsheet.getSheetByName(name)).find(Boolean);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  if (firstRow.join("") === "") {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function json_(payload, callback) {
  const output = callback ? `${callback}(${JSON.stringify(payload)});` : JSON.stringify(payload);
  const mimeType = callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON;
  return ContentService.createTextOutput(output).setMimeType(mimeType);
}
