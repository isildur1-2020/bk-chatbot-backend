const { googleSheets } = require("../auth");
// <Example> range = "sheetName!B2:B100000"
// Return array of data
const getColumnInfo = async (range, spreadsheetId) => {
  try {
    const googleSheetsSession = googleSheets.getSession();
    const { data } = await googleSheetsSession.spreadsheets.values.get({
      range,
      spreadsheetId,
      auth: googleSheets.auth,
      majorDimension: "COLUMNS",
    });
    return {
      data: data?.values?.[0],
      err: false,
      message: "COLUMNS found successfully",
    };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports = {
  getColumnInfo,
};
