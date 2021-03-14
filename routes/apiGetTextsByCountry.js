const query = require("./query");

const apiGetTextsByCountry = (req, res) => {
  const sql = `SELECT * FROM "Texts" LEFT JOIN "CountryTexts" ON "Texts"."id" = "CountryTexts"."textId" WHERE "CountryTexts"."countryId" = '${req.params.countryId}';`;
  query(sql)
    .then((data) => res.status(200).json(data))
    .catch((rejected) => res.send(rejected));
};

module.exports = apiGetTextsByCountry;
