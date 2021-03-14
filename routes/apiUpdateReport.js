const db = require("../db");

const apiUpdateReport = (req, res) => {
  const sql = `UPDATE "Reports" SET Data='${req.body.data.replace("'","''")}' WHERE Name='${req.body.name}'`;
  db.query(sql, (err, results) => {
    if (err) console.log(err);
    res.sendStatus(200);
  });
};

module.exports = apiUpdateReport;
