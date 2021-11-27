const express = require("express");
const router = express.Router();
const {
  getAllGardenVegetables,
  postGardensVegetables,
  getSpecificGardenVegetables,
} = require("../db/helpers/gardens-vegetables-queries");

router.get("/", (req, res) => {
  getAllGardenVegetables()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/:id", (req, res) => {
  // console.log("req bodyyyyyyyy", req.params)
  //req.params has the id to pass to this function
  getSpecificGardenVegetables(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.post("/", (req, res) => {

  const data = req.body;
  postGardensVegetables(data)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
