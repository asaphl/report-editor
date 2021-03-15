const queryDB = require("../db/queryDB");

async function apiGetCountries (req, res) {
  const sql = `SELECT * FROM "Countries"`;
  const results = await queryDB(sql);
  res.status(200).json(results);
};

module.exports = apiGetCountries;
