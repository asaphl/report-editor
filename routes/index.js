const express = require("express");
const router = express.Router();
const db = require("../db");

const parseCsv = (csv) => {
  const entries = csv.split("\n").map((member) => member.split(","));
  const obj = {};
  entries[0].forEach((header, i) => {
    obj[header] = entries[1][i];
  });
  return obj;
};

const keysToLowercase = (rows) => {
  return rows.map((row) => {
    let key,
      keys = Object.keys(row);
    let n = 0;
    let lowercasedRow = {};
    while (n < keys.length) {
      key = keys[n];
      lowercasedRow[key.toLowerCase()] = row[key];
      n++;
    }
    return lowercasedRow;
  });
};

const queryAll = (sql) => {
  let res = new Promise((resolve, reject) => {
    db.all(sql, function (err, rows) {
      if (err) return err.message;
      resolve(keysToLowercase(rows));
    });
  });
  return res;
};

router.get("/api/countries", (req, res) => {
  const sql = "SELECT Id, Name FROM Countries";
  queryAll(sql).then((rows) => res.send(rows));
});

router.get("/api/countries/:countryId/texts", (req, res) => {
  const sql = `SELECT Texts.* FROM Texts LEFT JOIN [Country Texts] ON Texts.Id = [Country Texts].TextId WHERE CountryId = '${req.params.countryId}'`;
  queryAll(sql).then((rows) => res.send(rows));
});

router.all("/api/countries/:countryId/datasets", (req, res) => {
  const sql = `SELECT Datasets.* FROM Datasets LEFT JOIN [Country Datasets] ON Datasets.Id = [Country Datasets].DatasetId WHERE CountryId = '${req.params.countryId}'`;
  queryAll(sql).then((rows) => {
    const formattedRows = rows.map((row) => {
      return {
        ...row,
        data: parseCsv(row["data"]),
      };
    });
    res.send(formattedRows);
  });
});

router.get("/api/countries/:countryId/images", (req, res) => {
  const sql = `SELECT Images.* FROM Images LEFT JOIN [Country Images] ON Images.Id = [Country Images].ImageId WHERE CountryId = '${req.params.countryId}';`;
  queryAll(sql).then((rows) => {
    const images = rows.map((row) => {
      return {
        ...row,
        path: req.protocol + "://" + req.get("host") + "/" + row["path"],
      };
    });
    res.send(images);
  });
});

router.get("/api/reports", (req, res) => {
  const sql = "SELECT Id, Name FROM Reports";
  queryAll(sql).then((rows) => res.send(rows));
});

router.get("/api/reports/:reportId", (req, res) => {
  const sql = `SELECT * FROM Reports WHERE Id=${req.params.reportId}`;
  queryAll(sql).then((rows) => res.send(rows));
});

router.post("/api/save", (req, res) => {
  const sql = `INSERT INTO Reports(Name, Data) VALUES('${
    req.body.name
  }', '${req.body.data.replace("'", "''")}')`;
  db.run(sql, function(err) {
    if (err) res.send(err.message);
    res.send(this.lastID.toString());
  });
});

router.put("/api/save", (req, res) => {
  const sql = `UPDATE Reports SET Data='${req.body.data.replace("'", "''")}' WHERE Name='${req.body.name}'`;
  // res.send(sql)
  db.run(sql, (err) => {
    if (err) res.send(err.message);
    res.sendStatus(200);
  });
});

module.exports = router;
