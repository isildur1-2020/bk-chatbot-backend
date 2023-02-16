const { googleSheets } = require("../auth");

// Example rangeString
// "Respuestas de formulario 1!B2:B100000"
const getColumnInfo = async (rangeString, spreadsheetId) => {
  try {
    const googleSheetsSession = googleSheets.getSession();
    const { data } = await googleSheetsSession.spreadsheets.values.get({
      auth: googleSheets.auth,
      spreadsheetId,
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
    throw new Error(err);
  }
};

module.exports = {
  getColumnInfo,
};
