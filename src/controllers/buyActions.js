const moment = require("moment");
const { bkActions } = require("../utils");
const { sheetsIds, sheets } = require("../utils");
const { appendRow } = require("../googleSheetsUtils/appendRow");

const buyActionsController = async (req, res) => {
  try {
    const values = [
      moment().format("DD/MM/YYYY"),
      req.body.id,
      bkActions.buy_actions,
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
      req.body.actions,
    ];
    const query = `${sheets.dataSheet}!A1:S1`;
    const { data } = await appendRow(query, values, sheetsIds.dataSheet);
    return res.status(200).json({
      data,
      err: false,
      message: "Data created successfully",
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
