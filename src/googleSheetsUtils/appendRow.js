const { googleSheets } = require("../auth");

// Example rangeString
// "Respuestas de formulario 1!A1:R1"
const appendRow = async (rangeString, values, spreadsheetId) => {
  try {
    const googleSheetsSession = googleSheets.getSession();
    const resp = await googleSheetsSession.spreadsheets.values.append({
      auth: googleSheets.auth,
      spreadsheetId,
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
    throw new Error(err);
  }
};

module.exports = {
  appendRow,
};
