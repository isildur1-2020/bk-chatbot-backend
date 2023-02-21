const { transporter } = require("../utils/nodemailer");
const { bkActions, sheets, sheetsIds } = require("../utils");
const { appendRow } = require("../googleSheetsUtils/appendRow");
const { createGroupTemplate } = require("../utils/nodemailer/templates");

const createGroupController = async (req, res) => {
  try {
    const values = [
      bkActions.create_group,
      req.body.country,
      req.body.id,
      req.body.phone,
      req.body.reason,
      req.body.findOut,
    ];
    const query = `${sheets.dataSheet}!BA:BF`;
    let rowData = new Array(52).fill(null);
    rowData = [...rowData, ...values];
    const { err, data, message } = await appendRow(
      query,
      rowData,
      sheetsIds.dataSheet
    );
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL_DESTINY,
      subject: "¡ Alguien quiere crear un grupo !",
      html: createGroupTemplate(req.body),
    });
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
  createGroupController,
};
