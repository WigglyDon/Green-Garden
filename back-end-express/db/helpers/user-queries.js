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

const putLogin = function () {
  const text = `
  UPDATE users
  SET auth = true
  WHERE id = 1;
  `;
  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

module.exports = { getAllUsers, putLogin };
