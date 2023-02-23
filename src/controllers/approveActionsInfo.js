const { sheets, sheetsIds } = require("../utils");
const { getRowInfo } = require("../googleSheetsUtils/getRowInfo");

const approveActionsInfoController = async (req, res) => {
  try {
    let index = 2;
    let data = [];
    let currentRowValue = null;
    const { groupId } = req.params;
    if (groupId === undefined) {
      return res.status(400).json({
        data: {},
        err: true,
        message: "groupId param must be required",
      });
    }
    while (currentRowValue !== "N/A") {
      const { data: currentRow } = await getRowInfo(
        sheetsIds.dataSheet,
        `${sheets.approveCreditOrActions}!B${index}:D${index}`
      );
      const [group, id, value] = currentRow;
      const items = { group, id, value };
      if (group === groupId) data.push(items);
      currentRowValue = currentRow;
      index++;
    }
    return res.status(200).json({
      err: false,
      data,
      message: "Info found succesfully!",
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
  approveActionsInfoController,
};
