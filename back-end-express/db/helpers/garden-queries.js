const db = require("../");

// const getGardensForUser = function (user_id) {
//   const text = `
//   SELECT * FROM gardens WHERE user_id = ${user_id}
//   `;
//   return db
//     .query(text)
//     .then((data) => data.rows)
//     .catch((err) => console.error(this, "query failed", err.stack));
// };

const getAllGardens = function () {
  const text = `
  SELECT * FROM gardens;
  `;
  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

const getAllGardenNames = function () {
  const text = `
  SELECT name FROM gardens;
  `;
  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

const deleteAGarden = function (data) {
  const text = `
  DELETE FROM gardens WHERE id = ${data};
  `;
  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

const postNewGarden = function (data) {
  const text = `
  INSERT INTO gardens (user_id,name,image_url,region)
  VALUES
  (1,'${data.name.garden}','${data.image.imageUrl}', '${data.region.region}')
  `;
  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

module.exports = {
  getAllGardens,
  postNewGarden,
  getAllGardenNames,
  deleteAGarden,
};
