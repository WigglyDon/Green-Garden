const express = require("express");
const router = express.Router();
const {
  getAllGardenVegetables,
  postGardensVegetable,
} = require("../db/helpers/gardens-vegetables-queries");

router.get("/", (req, res) => {
  getAllGardenVegetables()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.post("/", (req, res) => {
  const data = req.body.data;
  postGardensVegetable(data)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
