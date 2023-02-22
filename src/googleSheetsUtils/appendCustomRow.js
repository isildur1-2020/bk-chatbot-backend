const { googleSheets } = require("../auth");
// <Example> range = "sheetName!A1:R1"
const appendCustomRow = async (spreadsheetId, range, values) => {
  try {
    const googleSheetsSession = googleSheets.getSession();
    const resp = await googleSheetsSession.spreadsheets.values.append({
      range,
      spreadsheetId,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [values],
      },
      auth: googleSheets.auth,
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
  appendCustomRow,
};
