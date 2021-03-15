const queryDB = require("../db/queryDB");

async function apiGetReportData(req, res) {
  const sql = `SELECT * FROM "Reports" WHERE "id"='${req.params.reportId}';`;
  const results = await queryDB(sql);
  res.status(200).json(results);
};

module.exports = apiGetReportData;
