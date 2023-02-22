const { sheets, sheetsIds } = require("../utils");
const { getColumnInfo } = require("../googleSheetsUtils/getColumnInfo");

const getUserActionsToBuyController = async (req, res) => {
  try {
    const { userId } = req.params;
    if (userId === undefined)
      return res.status(400).json({
        err: true,
        data: null,
        message: "userId param must be required",
      });
    const userIds = await getColumnInfo(
      `${sheets.resumeSheet}!B3:B1000000`,
      sheetsIds.resumeSheet
    );
    const userIndex = userIds?.data?.findIndex((id) => id === userId);
    const { data } = await getColumnInfo(
      `${sheets.resumeSheet}!L${userIndex + 3}`,
      sheetsIds.resumeSheet
    );
    res.status(200).json({
      err: false,
      quantityOfActions: data?.[0],
      message: "Actions found succesfully",
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
  getUserActionsToBuyController,
};
