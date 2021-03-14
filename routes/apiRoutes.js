const apiCreateReport = require("./apiCreateReport");
const apiGetCountries = require("./apiGetCountries");
const apiGetImagesByCountry = require("./apiGetImagesByCountry");
const apiGetReportData = require("./apiGetReportData");
const apiGetReports = require("./apiGetReports");
const apiGetTextsByCountry = require("./apiGetTextsByCountry");
const apiUpdateReport = require("./apiUpdateReport");

const api = {
  getCountries: apiGetCountries,
  getTextsByCountry: apiGetTextsByCountry,
  getImagesByCountry: apiGetImagesByCountry,
  getReports: apiGetReports,
  getReportData: apiGetReportData,
  createReport: apiCreateReport,
  updateReport: apiUpdateReport,
};

module.exports = api;
