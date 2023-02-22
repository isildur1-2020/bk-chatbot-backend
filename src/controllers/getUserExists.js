const { sheets, sheetsIds } = require("../utils");
const { getColumnInfo } = require("../googleSheetsUtils/getColumnInfo");

const getUserExistsController = async (req, res) => {
  try {
    const { id } = req.params;
    if (id === undefined)
      return res.status(400).json({
        err: true,
        data: null,
        message: "id param must be required",
      });
    const { err, data, message } = await getColumnInfo(
      `${sheets.dataSheet}!B2:B1000000`,
      sheetsIds.dataSheet
    );
    const isUserExists = data?.some((userId) => +userId === +id);
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
  getUserExistsController,
};
