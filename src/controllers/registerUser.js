const moment = require("moment");
const { bkActions, sheets, months, sheetsIds } = require("../utils");
const { appendRow } = require("../googleSheetsUtils/appendRow");

const registerUserController = async (req, res) => {
  try {
    const { dateOfBirth } = req.body;
    const values = [
      moment().format("DD/MM/YYYY"),
      req.body.id,
      bkActions.register_as_a_new_partner,
      req.body.groupCode,
      req.body.groupName,
      req.body.groupCountry,
      req.body.state,
      req.body.town,
      req.body.typeOfId,
      req.body.id,
      req.body.name,
      req.body.lastname,
      req.body.phone,
      req.body.email,
      req.body.gender,
      `${dateOfBirth.day}/${months[dateOfBirth.month]}/${dateOfBirth.year}`,
      req.body.scholarship,
      req.body.job,
    ];
    const query = `${sheets.dataSheet}!A1:R1`;
    const { err, data, message } = await appendRow(
      query,
      values,
      sheetsIds.dataSheet
    );
    return res.status(200).json({
      err,
      data,
      message,
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
  registerUserController,
};
