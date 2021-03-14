const query = require("./query");

const apiGetReports = (req, res) => {
  const sql = `SELECT * FROM "Reports"`;
  query(sql)
    .then((data) => res.status(200).json(data))
    .catch((rejected) => res.send(rejected));
};

module.exports = apiGetReports;
