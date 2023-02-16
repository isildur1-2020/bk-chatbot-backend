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
    const getUsersQuery = `${sheets.resumeSheet}!B3:B100000`;
    const respGetUsersQuery = await getColumnInfo(
      getUsersQuery,
      sheetsIds.resumeSheet
    );
    const userIds = respGetUsersQuery?.data?.values?.[0];
    const userIndex = userIds.findIndex((id) => id === userId);
    const getQuantityOfCreditQuery = `${sheets.resumeSheet}!M${userIndex + 3}`;
    const respGetQuantityOfCredit = await getColumnInfo(
      getQuantityOfCreditQuery,
      sheetsIds.resumeSheet
    );
    const quantityOfCredit = respGetQuantityOfCredit?.data?.values?.[0]?.[0];
    res.status(200).json({
      err: false,
      quantityOfCredit,
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
