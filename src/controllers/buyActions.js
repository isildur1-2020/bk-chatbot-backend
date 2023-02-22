const { sheetsIds, sheets } = require("../utils");
const { bkActions, currentDate } = require("../utils");
const { appendCustomRow } = require("../googleSheetsUtils/appendCustomRow");

const buyActionsController = async (req, res) => {
  try {
    const values = [
      currentDate,
      req.body.id,
      bkActions.buy_actions,
      ...new Array(15).fill(null),
      req.body.actions,
    ];
    const { message } = await appendCustomRow(
      sheetsIds.dataSheet,
      `${sheets.dataSheet}!A1:S1`,
      values
    );
    return res.status(200).json({
      message,
      err: false,
      data: null,
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
  buyActionsController,
};
