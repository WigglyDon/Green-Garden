const db = require("../");
const axios = require("axios");

const getAllVegetables = function () {
  const text = `
  SELECT * FROM vegetables
  `;

  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

const getAPIVegetables = function () {
  return axios
    .get("https://www.growstuff.org/api/v1/crops.json")
    .then((data) => {
      return data.data;
    });
};

const getAPISeeds = function () {
  return axios
    .get("https://www.growstuff.org/api/v1/seeds.json")
    .then((data) => {
      return data.data;
    });
};

module.exports = {
  getAllVegetables,
  getAPIVegetables,
  getAPISeeds,
};
