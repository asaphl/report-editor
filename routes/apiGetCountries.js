const query = require("./query");

const apiGetCountries = (req, res) => {
  const sql = `SELECT * FROM "Countries"`;
  query(sql)
    .then((data) => res.status(200).json(data))
    .catch((rejected) => res.send(rejected));
};

module.exports = apiGetCountries;
