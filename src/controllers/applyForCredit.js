const moment = require("moment");
const { bkActions, sheets, sheetsIds } = require("../utils");
const { appendRow } = require("../googleSheetsUtils/appendRow");

const applyForCreditController = async (req, res) => {
  try {
    const { id, money, months, toUseTheCredit, purpose } = req.body;
    const values = [
      moment().format("DD/MM/YYYY"),
      id,
      bkActions.apply_for_credit,
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
      money,
      months,
      toUseTheCredit,
      toUseTheCredit === "Inversión en negocios" ? purpose : null,
      null,
      null,
      toUseTheCredit === "Pago de deudas con otros" ? purpose : null,
      toUseTheCredit === "Inversión familiar" ? purpose : null,
      toUseTheCredit === "Gastos médicos" ? purpose : null,
      toUseTheCredit === "Inversión agrícola" ? purpose : null,
    ];
    const query = `${sheets.dataSheet}!A1:AC`;
    const data = await appendRow(query, values, sheetsIds.dataSheet);
    return res.status(200).json({
      data,
      err: false,
      message: "Data saved successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err: true,
      data: null,
      message: err.message,
    });
  }
};

module.exports = {
  applyForCreditController,
};
