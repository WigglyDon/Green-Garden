const db = require("../");

const getAllGardenVegetables = function () {
  const text = `
  SELECT *
  FROM gardens_vegetables
  INNER JOIN vegetables
  ON vegetables.id = vegetable_id;
  `;

  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

const postGardensVegetable = function () {
  const text = `
  INSERT INTO gardens (user_id,name,image_url,region)
  VALUES
  (1,[6],12,55,'this means saturday, 4:25 pm for garden id 1')
  `;

  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};
module.exports = { getAllGardenVegetables, postGardensVegetable };
