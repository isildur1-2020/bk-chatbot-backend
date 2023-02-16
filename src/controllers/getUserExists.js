const { sheets } = require("../utils");
const { getColumnInfo } = require("../googleSheetsUtils/getColumnInfo");

const getUserExistsController = async (req, res) => {
  const { id } = req.params;
  if (id === undefined)
    return res.status(400).json({
      err: true,
      data: null,
      message: "id param must be required",
    });
  const query = `${sheets.dataSheet}!B2:B100000`;
  const { err, data, message } = await getColumnInfo(query);
  if (err)
    return res.status(400).json({
      err: true,
      data: null,
      message,
    });

  const usersId = data?.values?.[0];
  const isUserExists = usersId.some((userId) => +userId === +id);
  return res.status(200).json({
    err,
    data: null,
    isUserExists,
    message,
  });
};

module.exports = {
  getUserExistsController,
};
