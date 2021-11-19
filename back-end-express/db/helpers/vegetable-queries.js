const db = require("../");

const getAllVegetables = function () {
  const text = `
  SELECT * FROM vegetables
  `;

  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

module.exports = {
  getAllVegetables,
};
