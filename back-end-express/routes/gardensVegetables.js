const express = require("express");
const router = express.Router();
const { getAllVegetables } = require("../db/helpers/gardens-vegetables-queries")

router.get("/", (req, res) => {
  getAllVegetables()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.post("/", (req, res) => {
  getAllVegetables()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
