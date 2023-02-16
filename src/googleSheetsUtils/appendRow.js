const { googleSheets } = require("../auth");

// Example rangeString
// "Respuestas de formulario 1!A1:R1"
const appendRow = async (rangeString, values) => {
  try {
    const googleSheetsSession = googleSheets.getSession();
    const resp = await googleSheetsSession.spreadsheets.values.append({
      auth: googleSheets.auth,
      spreadsheetId: process.env.SHEET_ID,
      range: rangeString,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [values],
      },
    });
    return {
      data: resp,
      err: false,
      message: "Data created successfully.",
    };
  } catch (err) {
    console.log(err);
    return {
      err: true,
      data: null,
      message: err,
    };
  }
};

module.exports = {
  appendRow,
};
