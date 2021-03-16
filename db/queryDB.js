const db = require("../db");

async function queryDB(sql) {
  db.connect();
  return new Promise(resolve => (
    db
    .query(sql)
    .then(data => resolve(data.rows))
    .catch(err => console.log(err))
  ));
}

module.exports = queryDB;