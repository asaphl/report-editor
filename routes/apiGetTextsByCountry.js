const queryDB = require("../db/queryDB");

async function apiGetTextsByCountry(req, res) {
  const sql = `SELECT * FROM "Texts" LEFT JOIN "CountryTexts" ON "Texts"."id" = "CountryTexts"."textId" WHERE "CountryTexts"."countryId" = '${req.params.countryId}';`;
  const results = await queryDB(sql);
  res.status(200).json(results);
};

module.exports = apiGetTextsByCountry;
