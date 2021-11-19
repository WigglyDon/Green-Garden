const db = require("../");
const getAllUsers = function () {
  const text = `
  SELECT * FROM users
  `;

  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

module.exports = {getAllUsers};