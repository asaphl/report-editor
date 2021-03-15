const query = require("./query");

const apiGetImagesByCountry = (req, res) => {
  const sql = `SELECT * FROM "Images" LEFT JOIN "CountryImages" ON "Images"."id" = "CountryImages"."imageId" WHERE "CountryImages"."countryId" = '${req.params.countryId}';`;
  query(sql)
    .then((data) => {
      const images = data.map((row) => {
        return {
          ...row,
          path: req.protocol + "://" + req.get("host") + "/images/" + row["path"],
        };
      });
      res.send(images);
    })
    .catch((rejected) => res.send(rejected));
};

module.exports = apiGetImagesByCountry;
