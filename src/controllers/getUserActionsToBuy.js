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
    const getUsersQuery = `${sheets.resumeSheet}!B3:B100000`;
    const respGetUsersQuery = await getColumnInfo(
      getUsersQuery,
      sheetsIds.resumeSheet
    );
    const userIds = respGetUsersQuery?.data?.values?.[0];
    const userIndex = userIds.findIndex((id) => id === userId);
    const getQuantityOfActionsQuery = `${sheets.resumeSheet}!L${userIndex + 3}`;
    const respGetQuantityOfActions = await getColumnInfo(
      getQuantityOfActionsQuery,
      sheetsIds.resumeSheet
    );
    const quantityOfActions = respGetQuantityOfActions?.data?.values?.[0]?.[0];
    res.status(200).json({
      err: false,
      quantityOfActions,
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
