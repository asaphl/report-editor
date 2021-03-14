const db = require("../db");

const query = (sql) => {
  let res = new Promise((resolve, reject) => {
    db.query(sql, function (err, results) {
      err ? reject(err) : resolve(results && results.rows);
    });
  });
  return res;
};

module.exports = query;
