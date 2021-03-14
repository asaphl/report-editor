const query = require("./query");

const apiGetReportData = (req, res) => {
  const sql = `SELECT * FROM "Reports" WHERE "id"='${req.params.reportId}';`;
  query(sql)
    .then((data) => res.status(200).json(data))
    .catch((rejected) => res.send(rejected));
};

module.exports = apiGetReportData;
