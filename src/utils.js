const path = require("path");
const moment = require("moment");

const currentDate = moment().format("DD/MM/YYYY");

const scopes = {
  googlesheets: "https://www.googleapis.com/auth/spreadsheets",
};

const sheets = {
  dataSheet: "Respuestas de formulario 1",
  resumeSheet: "RESUMEN GENERAL",
};

const sheetsIds = {
  dataSheet: "1M57BFXFNgSjmAN3dn_NnANOwNDOBrw0PKKrlgz-nLjo",
  resumeSheet: "1yLOYsyBHVVVATFrdCxs65I_tvPWTJnCSWqNB1moSLqw",
};

const pathTo = {
  credentials: path.join(process.cwd(), "credentials.json"),
};

const months = {
  Enero: 1,
  Febrero: 2,
  Marzo: 3,
  Abril: 4,
  Mayo: 5,
  Junio: 6,
  Julio: 7,
  Agosto: 8,
  Septiembre: 9,
  Octubre: 10,
  Noviembre: 11,
  Diciembre: 12,
};

const bkActions = {
  register_as_a_new_partner: "Registrarme como socio",
  buy_actions: "Comprar Acciones",
  apply_for_credit: "Solicitar Crédito",
  create_group: "Crear un nuevo grupo",
};

module.exports = {
  scopes,
  pathTo,
  months,
  bkActions,
  sheets,
  sheetsIds,
  currentDate,
};
