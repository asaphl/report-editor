const express = require('express');
const router = express.Router();
const url = require('url');
const db = require('../db');

const parseCsv = (csv) => {
  const entries = csv.split('\n').map(member => member.split(','));
  const obj = {};
  entries[0].forEach((header, i) => {
    obj[header] = entries[1][i];
  });
  return obj;
};

const keysToLowercase = rows => {
  return rows.map(row => {
    let key, keys = Object.keys(row);
    let n = 0;
    let lowercasedRow = {};
    while (n < keys.length) {
      key = keys[n];
      lowercasedRow[key.toLowerCase()] = row[key];
      n++;
    }
    return lowercasedRow;
  })
  
}

  router.get('/api/countries', (req, res) => {
    const sql = 'SELECT Id, Name FROM Countries';
    db.all(sql, [], (err, rows) => {
      if (err) res.send(err);
      res.send(keysToLowercase(rows));
    });
  });

  router.get('/api/countries/:countryId/texts', (req, res) => {
    const sql = `SELECT Texts.* FROM Texts LEFT JOIN [Country Texts] ON Texts.Id = [Country Texts].TextId WHERE CountryId = '${req.params.countryId}'`;
    db.all(sql, (err, rows) => {
      if (err) res.send(err);
      res.send(keysToLowercase(rows));
    });
  });

  router.all('/api/countries/:countryId/datasets', (req, res) => {
    const sql = `SELECT Datasets.* FROM Datasets LEFT JOIN [Country Datasets] ON Datasets.Id = [Country Datasets].DatasetId LEFT JOIN Countries ON [Country Datasets].CountryId = Countries.Id WHERE CountryId = '${req.params.countryId}'`;
    db.all(sql, (err, rows) => {
      if (err) res.send(err);
      const formattedRows = rows.map(row => {
        return {
          ...row,
          'Data': parseCsv(row['Data'])
        } 
      });
      res.send(keysToLowercase(formattedRows));
    });
  });

  router.get('/api/countries/:countryId/images', (req, res) => {
    const sql = `SELECT Images.* FROM Images LEFT JOIN [Country Images] ON Images.Id = [Country Images].ImageId LEFT JOIN Countries ON Countries.Id = [Country Images].CountryId WHERE CountryId = '${req.params.countryId}';`;
    db.all(sql, [], (err, rows) => {
      if (err) res.send(err);
      const images = rows.map(row => {
        return {
          ...row,
          'Path': (req.protocol + '://' + req.get('host') + '/' + row['Path'])
        }
      });
      res.send(keysToLowercase(images));
    });
  });

  router.get('/api/reports', (req, res) => {
    const sql = 'SELECT Name FROM Reports';
    db.all(sql, (err, rows) => {
      if (err) res.send(err);
      res.send(rows.map(row => row['Name']));
    });
  })

  router.post('/api/save', (req, res) => {
    const sql = `INSERT INTO Reports(Name, Data) VALUES('${req.body.name}', '${JSON.stringify(req.body.report)}')`;
    // res.send(sql);
    db.run(sql, err => {
      if (err) res.send(err);
      res.send(`A row has been inserted with rowid ${this.lastID}`);
    });
  });

  router.put('/api/save', (req, res) => {
    const sql = `UPDATE Reports SET Data=${req.body.report} WHERE Name=${req.body.name}')`;
    db.run(sql, err => {
      if (err) res.send(err);
      res.send(`A row has been edited with rowid ${this.lastID}`);
    });
  });

module.exports = router;



// OLD

// router.get('/api/query', (req, res) => {
//   const params = url.parse(req.url, true).query;
//   const whereClause = Object.keys(params).filter(paramName => paramName !== 'table' && paramName !== 'column').map(paramName => {
//     return `${paramName} = '${params[paramName]}'`;
//   }).join(' AND ');
//   const query = `SELECT [${params.column}] FROM ${params.table} WHERE ${whereClause};`
//   db.all(query, (err, rows) => {
//     if (err) res.send(err);
//     res.send(rows);
//   })
// })

//   router.get('/api/table/:tablename/column/:columnname', (req, res) => {
//     const params = url.parse(req.url, true).query;
//     const whereClause = Object.keys(params).filter(paramName => paramName !== 'table' && paramName !== 'column').map(paramName => {
//       return `${paramName} = '${params[paramName]}'`;
//     }).join(' AND ');
//     const query = `SELECT [${params.column}] FROM ${params.table} WHERE ${whereClause};`
//     db.all(query, (err, rows) => {
//       if (err) res.send(err);
//       res.send(rows);
//     })
//   })



// router.get('/api/table/:tablename', (req, res) => {
//   const query = `SELECT * FROM ${req.params.tablename};`
//   db.all(query, (err, rows) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(rows);
//     }
    
//   })
// })

// router.get('/api/table', (req, res) => {
//   const query = 'SELECT * FROM Countries';
//   db.all(query, [], (err, rows) => {
//     if (err) res.send(err);
//     res.send(rows.map(row => row['CountryName']));
//   });
// })


// router.get('/api/tables', (req, res) => {
// const query = 'SELECT name FROM sqlite_master WHERE type =\'table\' AND name NOT LIKE \'sqlite_%\' AND name NOT LIKE \'App_%\';'
// db.all(query, (err, rows) => {
//   if (err) res.send(err);
//   res.send(rows.map(row => row.name));
// })
// })

// router.get('/api/table/:tablename/columns', (req, res) => {
// const query = `PRAGMA table_info(${req.params.tablename});`;
// db.all(query, (err, rows) => {
//   if (err) res.send(err);
//   res.send(rows.map(row => row.name));
// })
// })

// router.get('/api/table/:tablename/column/:columnname', (req, res) => {
// const query = `SELECT [${req.params.columnname}] FROM ${req.params.tablename};`;
// db.all(query, (err, rows) => {
//   if (err) res.send(err);
//   res.send(rows);
// })
// })