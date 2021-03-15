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

module.exports = router;
