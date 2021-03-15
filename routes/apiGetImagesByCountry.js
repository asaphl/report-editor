const queryDB = require("../db/queryDB");

async function apiGetImagesByCountry(req, res) {
  const sql = `SELECT * FROM "Images" LEFT JOIN "CountryImages" ON "Images"."id" = "CountryImages"."imageId" WHERE "CountryImages"."countryId" = '${req.params.countryId}';`;
  const results = await queryDB(sql);
  const images = results.map((row) => {
    return {
      ...row,
      path: req.protocol + "://" + req.get("host") + "/images/" + row["path"],
    }
  });
  res.send(images);
};

module.exports = apiGetImagesByCountry;
