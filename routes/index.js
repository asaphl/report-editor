const express = require('express');
const router = express.Router();
const url = require('url');
const db = require('../db');

const parse = (csv) => {
  const entries = csv.split('\n').map(member => member.split(','));
  const obj = {};
  entries[0].forEach((header, i) => {
    obj[header] = entries[1][i];
  });
  return obj;
};

  router.get('/api/countries', (req, res) => {
    const query = 'SELECT Name FROM Countries';
    db.all(query, [], (err, rows) => {
      if (err) res.send(err);
      res.send(rows.map(row => row['Name']));
    });
  });

  router.get('/api/:countryName/texts', (req, res) => {
    const textFields = [
      'Name',
      'History',
      'Geography',
      'Demographics',
      'Economy'
    ];
    const query = `SELECT ${textFields.join(', ')} FROM Countries WHERE Name = '${req.params.countryName}'`;
    db.get(query, (err, rows) => {
      if (err) res.send(err);
      res.send(rows);
    });
  });

  router.get('/api/:countryName/datasets  ', (req, res) => {
    const statsFields = [
      'GDP',
      'Population'
    ];
    const query = `SELECT ${statsFields.join(', ')} FROM Countries WHERE Name = '${req.params.countryName}'`;
    db.all(query, (err, rows) => {
      if (err) res.send(err);
      const data = rows.map(row => {
        formattedData = {};
        for (let key in row) {
          formattedData[key] = parse(row[key]);
        }
        return formattedData;
      });
      res.send(data);
    });
  });

  router.get('/api/:countryName/images', (req, res) => {
    const query = `SELECT Images.*, Countries.Name FROM Images LEFT JOIN [Country Images] ON Images.Id = [Country Images].ImageId LEFT JOIN Countries ON Countries.Id = [Country Images].CountryId WHERE Name = '${req.params.countryName}';`;
    db.all(query, [], (err, rows) => {
      if (err) res.send(err);
      res.send(rows);
    });
  });

  router.post('/api/add-country', (req, res) => {
    const { id, name, history, economy, geography, demographics, gdp, population} = req.body;
    const sqlString = `INSERT INTO Countries (Id, Name, History, Economy, Geography, Demographics, GDP, Population) VALUES ('${id}', '${name}', '${history}', '${economy}', '${geography}', '${demographics}', '${gdp}', '${population}');`;
    db.run(sqlString, function(err) {
      if (err) {
        return console.log(err.message);
      }
      res.send(`A row has been inserted with rowid `);
    });
    // res.send('Added Successfully! String is: ' + sqlString);
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