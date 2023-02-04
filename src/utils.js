const path = require("path");

const scopes = {
  googlesheets: "https://www.googleapis.com/auth/spreadsheets",
};

const pathTo = {
  credentials: path.join(process.cwd(), "credentials.json"),
};

module.exports = { scopes, pathTo };
