const { sheets, sheetsIds } = require("../utils");
const { getColumnInfo } = require("../googleSheetsUtils/getColumnInfo");

const getUserCreditToApplyController = async (req, res) => {
  try {
    const { userId } = req.params;
    if (userId === undefined)
      return res.status(400).json({
        err: true,
        data: null,
        message: "userId param must be required",
      });
    const userIds = await getColumnInfo(
      `${sheets.resumeSheet}!B3:B100000`,
      sheetsIds.resumeSheet
    );
    const userIndex = userIds?.data?.findIndex((id) => id === userId);
    const { data } = await getColumnInfo(
      `${sheets.resumeSheet}!M${userIndex + 3}`,
      sheetsIds.resumeSheet
    );
    res.status(200).json({
      err: false,
      quantityOfCredit: data?.[0],
      message: "Credit found succesfully",
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
  getUserCreditToApplyController,
};
