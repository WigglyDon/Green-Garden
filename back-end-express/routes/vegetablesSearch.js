const {
  getSearchVegetables,
  getAPISeeds,
} = require("../db/helpers/vegetable-queries");
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  getSearchVegetables()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});


router.get("/seeds", (req, res) => {
  getAPISeeds()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
