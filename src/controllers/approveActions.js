const { sheetsIds, sheets } = require("../utils");
const { bkActions, currentDate } = require("../utils");
const { appendCustomRow } = require("../googleSheetsUtils/appendCustomRow");

const approveActionsController = async (req, res) => {
  try {
    const { userId } = req.params;
    if (userId === undefined) {
      return res.status(400).json({
        err: true,
        data: null,
        message: "userId param is required",
      });
    }
    const values = [
      currentDate,
      req.body.userId,
      bkActions.approve_actions,
      ...new Array(15).fill(null),
      "APROBADO",
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
  approveActionsController,
};
