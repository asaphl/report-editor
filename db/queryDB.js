const db = require("../db");

async function queryDB(sql) {
  const client = await db.connect();
  const { rows } = await client.query(sql);
  client.release(true);
  return rows;
}

module.exports = queryDB;