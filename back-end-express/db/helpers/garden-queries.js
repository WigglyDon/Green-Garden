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

module.exports = {
  getAllGardens,
};
