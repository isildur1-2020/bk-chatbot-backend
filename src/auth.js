const { google } = require("googleapis");
const { pathTo, scopes } = require("./utils");

class GoogleSheetsAuth {
  instance = null;
  auth = null;
  session = null;

  constructor() {
    this.setAuth();
    this.setClient();
    this.setSession();
  }

  setAuth = () => {
    this.auth = new google.auth.GoogleAuth({
      keyFile: pathTo.credentials,
      scopes: scopes.googlesheets,
    });
  };

  setClient = async () => {
    this.client = await this.auth.getClient();
  };

  setSession = () => {
    this.session = google.sheets({
      version: "v4",
      auth: this.client,
    });
  };

  getSession = () => this.session;
}

const googleSheets = new GoogleSheetsAuth();

module.exports = { googleSheets };
