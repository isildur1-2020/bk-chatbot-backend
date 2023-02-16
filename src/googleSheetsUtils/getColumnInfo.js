const { googleSheets } = require("../auth");

// Example rangeString
// "Respuestas de formulario 1!B2:B100000"
const getColumnInfo = async (rangeString) => {
  try {
    const googleSheetsSession = googleSheets.getSession();
    const { data } = await googleSheetsSession.spreadsheets.values.get({
      auth: googleSheets.auth,
      spreadsheetId: process.env.SHEET_ID,
      majorDimension: "COLUMNS",
      range: rangeString,
    });
    return {
      data,
      err: false,
      message: "Users found successfully",
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
  getColumnInfo,
};
