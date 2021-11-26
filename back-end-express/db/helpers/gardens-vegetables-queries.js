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


const postGardensVegetables = function (data) {

  const gardenId = data.gardenId;
  const vegetableId = data.vegetableId;
  
  console.log("IDPAIRS", gardenId, vegetableId)

  const text = `
  INSERT INTO gardens_vegetables (garden_id,vegetable_id)
  VALUES
  (${gardenId}, ${vegetableId})
  `;
  // ${vegetableid}
  // ${gardenid}

  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};
module.exports = { getAllGardenVegetables, postGardensVegetables };
