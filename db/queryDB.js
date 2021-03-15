const client = require("../db");

async function queryDB(sql) {
  client.connect();
  return new Promise(resolve => (
    client
    .query(sql)
    .then((data) => {
      resolve(data.rows);
    })
    .catch((err) => console.log(err))
  ));
}

module.exports = queryDB;