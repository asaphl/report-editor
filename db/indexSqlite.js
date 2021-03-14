const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/db.sqlite', err => {
  if (err) console.log(err);
  console.log('connected to db');
});

module.exports = db;