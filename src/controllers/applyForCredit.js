const { googleSheets } = require("../auth");
const moment = require("moment");

const applyForCreditController = async (req, res) => {
  try {
    const googleSheetsSession = googleSheets.getSession();
    const values = [
      moment().format("DD/MM/YYYY HH:mm:ss"),
      req.body.id,
      "Solicitar Crédito",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      req.body.money,
      req.body.months,
      req.body.purpose,
    ];
    const resp = await googleSheetsSession.spreadsheets.values.append({
      auth: googleSheets.auth,
      spreadsheetId: process.env.SHEET_ID,
      range: "Respuestas de formulario 1!A1:S1",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [values],
      },
    });

    return res.status(200).json({
      err: false,
      message: null,
      data: resp,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      message: err.message,
    });
  }
};

module.exports = {
  applyForCreditController,
};
