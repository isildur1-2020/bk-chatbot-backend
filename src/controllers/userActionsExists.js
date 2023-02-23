const { sheets, sheetsIds } = require("../utils");
const { getColumnInfo } = require("../googleSheetsUtils/getColumnInfo");

const userActionsExistsController = async (req, res) => {
  try {
    const { userId } = req.params;
    if (userId === undefined)
      return res.status(400).json({
        err: true,
        data: null,
        message: "userId param must be required",
      });
    const { err, data, message } = await getColumnInfo(
      `${sheets.approveCreditOrActions}!C2:C1000000`,
      sheetsIds.dataSheet
    );
    const isUserExists = data?.some((id) => +id === +userId);
    return res.status(200).json({
      err,
      message,
      data: null,
      isUserExists,
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
  userActionsExistsController,
};
