const { currentDate } = require("../utils");
const { transporter } = require("../utils/nodemailer");
const { bkActions, sheets, sheetsIds } = require("../utils");
const { appendCustomRow } = require("../googleSheetsUtils/appendCustomRow");
const { createGroupTemplate } = require("../utils/nodemailer/templates");

const sendEmail = ({ body }) => {
  const { name } = body;
  const subject = `¡ ${name} quiere crear un grupo !`;
  return transporter.sendMail({
    subject,
    from: process.env.EMAIL,
    to: process.env.EMAIL_DESTINY,
    html: createGroupTemplate(body),
  });
};

const createGroupController = async (req, res) => {
  try {
    const { id, phone, name, reason, findOut, country } = req.body;
    if (!id || !phone || !name || !reason || !findOut || !country) {
      const message =
        "id, phone, name, reason, findOut and country fields are required";
      return res.status(400).json({
        message,
        err: true,
        data: null,
      });
    }
    const values = [
      req.body.name,
      req.body.country,
      req.body.id,
      req.body.phone,
      req.body.reason,
      req.body.findOut,
    ];
    const rowData = [
      currentDate,
      id,
      bkActions.create_group,
      ...new Array(53).fill(null),
      ...values,
    ];
    const range = `${sheets.dataSheet}!A:BF`;
    const { err, message } = await appendCustomRow(
      sheetsIds.dataSheet,
      range,
      rowData
    );
    await sendEmail(req);
    console.log("Email sent");
    return res.status(200).json({
      err,
      data: null,
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
