const { googleSheets } = require("../auth");
// <Example> range = "sheetName!B2:B100000"
const getRowInfo = async (spreadsheetId, range) => {
  try {
    const googleSheetsSession = googleSheets.getSession();
    const { data } = await googleSheetsSession.spreadsheets.values.get({
      range,
      spreadsheetId,
      auth: googleSheets.auth,
      majorDimension: "ROWS",
    });
    return {
      data: data?.values?.[0] ?? "N/A",
      err: false,
      message: "ROWS found successfully",
    };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports = {
  getRowInfo,
};
