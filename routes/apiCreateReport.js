const db = require("../db");

const apiCreateReport = (req, res) => {
  const sql = `
    INSERT INTO "Reports" ("name", "data")
    VALUES('${req.body.name}', '${req.body.data.replace("'", "''")}')
    `;
  db.query(sql, (err, results) => {
    if (err) console.log(err);
    res.sendStatus(200);
  });
};

module.exports = apiCreateReport;
