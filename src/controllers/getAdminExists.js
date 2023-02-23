const { sheets, sheetsIds } = require("../utils");
const { getColumnInfo } = require("../googleSheetsUtils/getColumnInfo");
const { getRowInfo } = require("../googleSheetsUtils/getRowInfo");

const getAdminExistsController = async (req, res) => {
  try {
    let adminIndex = null;
    const { adminId } = req.params;
    if (adminId === undefined) {
      return res.status(400).json({
        err: true,
        data: {},
        message: "adminId param must be required",
        adminIndex: null,
        isAdminExists: false,
      });
    }
    const { err, data, message } = await getColumnInfo(
      `${sheets.administrators}!A2:A1000000`,
      sheetsIds.dataSheet
    );
    const isAdminExists = data?.some((id, index) => {
      if (+id === +adminId) {
        adminIndex = index + 2;
        return true;
      }
    });
    if (adminIndex === null) {
      return res.status(200).json({
        err: true,
        message: "Admin not found",
        data: {},
        adminIndex: null,
        isAdminExists: false,
      });
    }
    const { data: adminInfo } = await getRowInfo(
      sheetsIds.dataSheet,
      `${sheets.administrators}!A${adminIndex}:C${adminIndex}`
    );
    return res.status(200).json({
      err,
      message,
      data: {
        id: adminInfo?.[0],
        name: adminInfo?.[1],
        group: adminInfo?.[2],
      },
      adminIndex,
      isAdminExists,
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
  getAdminExistsController,
};
