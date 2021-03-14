const express = require("express");
const router = express.Router();
const api = require("./apiRoutes");

router.get("/api/countries", api.getCountries);
router.get("/api/countries/:countryId/texts", api.getTextsByCountry);
router.get("/api/countries/:countryId/images", api.getImagesByCountry);
router.get("/api/reports", api.getReports);
router.get("/api/reports/:reportId", api.getReportData);
router.post("/api/save", api.createReport);
router.put("/api/save", api.updateReport);

// router.all("/api/countries/:countryId/datasets", (req, res) => {
//   const sql = `SELECT Datasets.* FROM Datasets LEFT JOIN [Country Datasets] ON Datasets.Id = [Country Datasets].DatasetId WHERE CountryId = '${req.params.countryId}'`;
//   queryAll(sql).then((rows) => {
//     const formattedRows = rows.map((row) => {
//       return {
//         ...row,
//         data: parseCsv(row["data"]),
//       };
//     });
//     res.send(formattedRows);
//   });
// });

module.exports = router;
