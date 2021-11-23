const {
  getAPIVegetables,
  getAPISeeds,
} = require("../db/helpers/vegetable-queries");
const express = require("express");
const router = express.Router();

//api/vegetables/crops
router.get("/", (req, res) => {
  getAPIVegetables()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

//api/vegetables/photos
router.get("/seeds", (req, res) => {
  getAPISeeds()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
