const queryDB = require("../db/queryDB");

async function apiGetReports(req, res) {
  const sql = `SELECT * FROM "Reports"`;
  const results = await queryDB(sql);
  res.status(200).json(results);
};

module.exports = apiGetReports;
