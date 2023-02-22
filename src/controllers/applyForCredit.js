const { appendRow } = require("../googleSheetsUtils/appendRow");
const { bkActions, sheets, sheetsIds, currentDate } = require("../utils");

const applyForCreditController = async (req, res) => {
  try {
    const { id, money, months, toUseTheCredit, purpose } = req.body;
    const values = [
      currentDate,
      id,
      bkActions.apply_for_credit,
      ...new Array(16).fill(null),
      money,
      months,
      toUseTheCredit,
      toUseTheCredit === "Inversión en negocios" ? purpose : null,
      ...new Array(2).fill(null),
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
