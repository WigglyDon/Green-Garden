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

// const postNotification = function () {
//   //   ? = ANY (notifications.day)
//   // ? is the day int 0-6
//   const text = `
//   INSERT INTO notifications (garden_id, day, hour, minute, body)
//   VALUES
//   (1,[6],12,55,'this means saturday, 4:25 pm for garden id 1')
//   `;
//   return db
//     .query(text)
//     .then((data) => data.rows)
//     .catch((err) => console.error(this, "query failed", err.stack));
// };

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
};
